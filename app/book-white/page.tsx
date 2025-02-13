"use client";

import { useState, useEffect } from "react";

export default function TodoList() {
  const [todos, setTodos] = useState<string[]>([]);
  const [newTodo, setNewTodo] = useState("");

  // Load todos from localStorage when component mounts
  useEffect(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  // Save todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

const handleAddTodo = () => {
    if (newTodo.trim()) {
        const todoWithTime = `${newTodo.trim()}`;
        setTodos([...todos, todoWithTime]);
        setNewTodo("");
    }
};
const currentTime = new Date().toLocaleString();

const handleDeleteTodo = (index: number) => {
        const newTodos = todos.filter((_, i) => i !== index);
        setTodos(newTodos);
    
};
const handleEditTodo = (index: number, newText?: string) => {
    if (newText) {
        const newTodos = [...todos];
        newTodos[index] = newText.trim();
        setTodos(newTodos);
        setNewTodo("");
        // Close the modal after editing
        (document.getElementById(`edit-modal-${index}`) as HTMLDialogElement)?.close();
    }
};

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      <div className="flex gap-2 mb-4">
        <label className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <input
            type="text"
            className="grow"
            placeholder="Username"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
        </label>

        <button
          onClick={handleAddTodo}
          className="px-4 py-2 bg-success text-white rounded"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
            />
          </svg>
        </button>
      </div>
      <ul className="space-y-2">
        {todos.map((todo, index) => (
          <div
            key={index}
            className="card bg-base-300 text-primary-content w-96"
          >
            <div className="card-body">
            <div className="grid grid-cols-3 gap-4">
            <h2 className="card-title ">XXX</h2>
            <div className="card-title col-start-3 text-xs">{currentTime}</div>
            </div>
              
             
              <p>{todo}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-warning btn-sm" onClick={() => (document.getElementById(`edit-modal-${index}`) as HTMLDialogElement)?.showModal()}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                    />
                  </svg>
                </button>
                <dialog id={`edit-modal-${index}`} className="modal">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg">Edit Todo</h3>
                    <div className="form-control w-full">
                      <label className="label">
                        <span className="label-text">Edit your todo item</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Edit your task"
                        className="input input-bordered input-warning w-full"
                        defaultValue={todo}
                        onChange={(e) => setNewTodo(e.target.value)}
                        autoFocus
                      />
                    </div>
                    <div className="modal-action">
                      <form method="dialog">
                        <button className="btn btn-outline mr-2">Cancel</button>
                        <button 
                          className="btn btn-warning" 
                          onClick={() => handleEditTodo(index, newTodo)}
                        >
                          Save
                        </button>
                      </form>
                    </div>
                  </div>
                </dialog>
                <button className="btn btn-error btn-sm" onClick={() => (document.getElementById(`delete-modal-${index}`) as HTMLDialogElement)?.showModal()}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m6 4.125 2.25 2.25m0 0 2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
                    />
                  </svg>
                </button>
                
                <dialog id={`delete-modal-${index}`} className="modal">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg">Confirm Delete</h3>
                    <p className="py-4">Are you sure you want to delete this todo?</p>
                    <div className="modal-action">
                      <form method="dialog">
                        <button className="btn btn-outline mr-2">Cancel</button>
                        <button className="btn btn-error" onClick={() => handleDeleteTodo(index)}>Delete</button>
                      </form>
                    </div>
                  </div>
                </dialog>
              </div>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
}

