'use client';
import { useState } from "react";


export default function BookWhite() {
  const [items, setItems] = useState([{ id: 1, name: "Item 1" }]);

    const createItem = () => {
      const newItem = { id: Date.now(), name: `Item ${Date.now()}` };
      setItems([...items, newItem]);
    };

    const updateItem = (id: number, name: string) => {
      setItems(
        items.map((item) => (item.id === id ? { ...item, name } : item))
      );
    };

    const deleteItem = (id: number) => {
      setItems(items.filter((item) => item.id !== id));
    };

    
    return (
      <div>
        <button onClick={createItem}>Create</button>
        {items.map((item) => (
          <div key={item.id}>
            <input
              type="text"
              value={item.name}
              onChange={(e) => updateItem(item.id, e.target.value)}
            />
            <button onClick={() => deleteItem(item.id)}>Delete</button>
          </div>
        ))}
      </div>
    );
  
} 