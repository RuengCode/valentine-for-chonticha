
// 'use client';
// import { useState, useEffect } from 'react';

// interface Message {
//   id: number;
//   text: string;
//   createdAt: string;
// }

// export default function BookWhite() {
//   const [messages, setMessages] = useState<Message[]>([]);
//   const [newMessage, setNewMessage] = useState('');
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     fetchMessages();
//   }, []);

//   const fetchMessages = async () => {
//     try {
//       const response = await fetch('/api/messages');
//       const data = await response.json();
//       setMessages(data);
//     } catch (error) {
//       console.error('Error fetching messages:', error);
//     }
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsLoading(true);

//     try {
//       const response = await fetch('/api/messages', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ text: newMessage }),
//       });

//       if (response.ok) {
//         setNewMessage('');
//         await fetchMessages();
//       }
//     } catch (error) {
//       console.error('Error saving message:', error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // New: Delete message by ID
//   const handleDelete = async (id: number) => {
//     try {
//       const response = await fetch(`/api/messages?id=${id}`, {
//         method: 'DELETE',
//       });

//       if (response.ok) {
//         await fetchMessages();
//       }
//     } catch (error) {
//       console.error('Error deleting message:', error);
//     }
//   };

//   return (
//     <div className="container mx-auto p-4 max-w-2xl">
//       <form onSubmit={handleSubmit} className="mb-8">
//         <textarea
//           value={newMessage}
//           onChange={(e) => setNewMessage(e.target.value)}
//           className="w-full p-2 border rounded mb-2"
//           rows={4}
//           placeholder="Write your message..."
//         />
//         <button
//           type="submit"
//           disabled={isLoading}
//           className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:opacity-50"
//         >
//           {isLoading ? 'Saving...' : 'Save Message'}
//         </button>
//       </form>

//       <div className="space-y-4">
//         {messages.map((message) => (
//           <div key={message.id} className="border p-4 rounded flex justify-between items-start">
//             <div>
//               <p>{message.text}</p>
//               <p className="text-sm text-gray-500 mt-2">
//                 {new Date(message.createdAt).toLocaleString()}
//               </p>
//             </div>
//             <button
//               onClick={() => handleDelete(message.id)}
//               className="text-red-500 hover:text-red-700"
//             >
//               Delete
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

export default function BookWhite() {
  return(
    <div></div>
  )
}