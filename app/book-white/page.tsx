'use client';

import { useState, useEffect } from 'react';




export default function TodoList() {
    const [todos, setTodos] = useState<string[]>([]);
    const [newTodo, setNewTodo] = useState('');

    // Load todos from localStorage when component mounts
    useEffect(() => {
        const savedTodos = localStorage.getItem('todos');
        if (savedTodos) {
            setTodos(JSON.parse(savedTodos));
        }
    }, []);

    // Save todos to localStorage whenever they change
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const handleAddTodo = () => {
        if (newTodo.trim()) {
            setTodos([...todos, newTodo.trim()]);
            setNewTodo('');
        }
    };

    const handleDeleteTodo = (index: number) => {
        const newTodos = todos.filter((_, i) => i !== index);
        setTodos(newTodos);
    };

    return (
        <div className="p-4 max-w-md mx-auto">
            <h1 className="text-2xl font-bold mb-4">Todo List</h1>
            <div className="flex gap-2 mb-4">
                <input
                    type="text"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    className="flex-1 px-3 py-2 border rounded"
                    placeholder="Add new todo"
                />
                <button
                    onClick={handleAddTodo}
                    className="px-4 py-2 bg-blue-500 text-white rounded"
                >
                    Add
                </button>
            </div>
            <ul className="space-y-2">
                {todos.map((todo, index) => (
                    <li key={index} className="flex justify-between items-center p-2 bg-gray-100 rounded">
                        <span>{todo}</span>
                        <button
                            onClick={() => handleDeleteTodo(index)}
                            className="text-red-500"
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}