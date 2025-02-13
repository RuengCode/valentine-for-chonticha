
import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

const DATA_FILE = path.join(process.cwd(), 'data', 'messages.json');

async function ensureDirectory() {
  const dir = path.dirname(DATA_FILE);
  try {
    await fs.access(dir);
  } catch {
    await fs.mkdir(dir, { recursive: true });
  }
}

export async function GET() {
  try {
    const data = await fs.readFile(DATA_FILE, 'utf-8');
    return NextResponse.json(JSON.parse(data));
  } catch {
    return NextResponse.json([]);
  }
}

export async function POST(request: Request) {
  try {
    await ensureDirectory();
    const newMessage = await request.json();
    let messages = [];

    // Read existing messages or initialize an empty array
    try {
      const existingData = await fs.readFile(DATA_FILE, 'utf-8');
      messages = JSON.parse(existingData);
    } catch {
      messages = [];
    }

    // Add new data and save
    messages.push({
      ...newMessage,
      id: Date.now(),
      createdAt: new Date().toISOString()
    });

    await fs.writeFile(DATA_FILE, JSON.stringify(messages, null, 2));
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Failed to save message' }, { status: 500 });
  }
}

// Add a new DELETE method
export async function DELETE(request: Request) {
  try {
    // Parse the URL to get the "id" query parameter
    const { searchParams } = new URL(request.url);
    const messageId = searchParams.get('id');

    if (!messageId) {
      return NextResponse.json({ error: 'No ID provided' }, { status: 400 });
    }

    await ensureDirectory();
    let messages = [];

    // Read existing messages
    try {
      const existingData = await fs.readFile(DATA_FILE, 'utf-8');
      messages = JSON.parse(existingData);
    } catch {
      messages = [];
    }
    // Write updated array to file
    await fs.writeFile(DATA_FILE, JSON.stringify(messages, null, 2));
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Failed to delete message' }, { status: 500 });
  }
}