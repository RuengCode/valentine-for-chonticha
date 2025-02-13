import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

const dataFilePath = path.join(process.cwd(), 'data', 'messages.json');

// Ensure the data directory exists
async function ensureDataDirectory() {
  const dataDir = path.join(process.cwd(), 'data');
  try {
    await fs.access(dataDir);
  } catch {
    await fs.mkdir(dataDir, { recursive: true });
  }
}

// Read existing messages
async function readMessages() {
  try {
    const data = await fs.readFile(dataFilePath, 'utf-8');
    return JSON.parse(data);
  } catch {
    return [];
  }
}

export async function POST(request: Request) {
  try {
    await ensureDataDirectory();
    const data = await request.json();
    
    // Validate the data
    if (!data.message || !data.timestamp) {
      return NextResponse.json(
        { error: 'Message and timestamp are required' },
        { status: 400 }
      );
    }

    // Read existing messages
    const messages = await readMessages();
    
    // Add new message
    messages.push(data);

    // Save to file
    await fs.writeFile(dataFilePath, JSON.stringify(messages, null, 2));

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error saving message:', error);
    return NextResponse.json(
      { error: 'Failed to save message' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const messages = await readMessages();
    return NextResponse.json(messages);
  } catch (error) {
    console.error('Error fetching messages:', error);
    return NextResponse.json(
      { error: 'Failed to fetch messages' },
      { status: 500 }
    );
  }
}