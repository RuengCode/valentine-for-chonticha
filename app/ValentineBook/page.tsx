// "use client";
// import { useState } from "react";
// import { motion } from "framer-motion";

// export default function ValentineBook() {
//   const [isLiked, setIsLiked] = useState(false);
//   const [selectedImage, setSelectedImage] = useState("");
//   const [showModal, setShowModal] = useState(false);
//   return (
//     <div>
//       <div className="bg-base-100 flex justify-center items-center p-4">
//         <div className="card bg-base-200 text-base-content w-full md:w-[40rem]">
//           <div className="card-body">
//             {/* Profile Header */}
//             <div className="flex space-x-4 items-center">
//               <div className="avatar">
//                 <div className="w-12 h-12 rounded-full">
//                   <img
//                     alt="avatar"
//                     src="https://media.discordapp.net/attachments/1283830529933840507/1339486864763125812/117768640_3217190941694824_9124819090644706857_n.jpg?ex=67aee5db&is=67ad945b&hm=b4c4f7fb27642ed6df5e59e577515d2da548c188d5b7a67892aec912b7b9bb42&=&format=webp&width=701&height=701"
//                   />
//                 </div>
//               </div>
//               <div className="space-y-2">
//                 <div className="flex space-x-2 items-center">
//                   <h2 className="text-base">เรืองจรัส ทองจรัส</h2>
//                   <div className="badge badge-primary badge-sm">✓</div>
//                   <div className="text-xs opacity-70">posted an update</div>
//                 </div>
//                 <p className="text-xs opacity-70">10 Months Ago</p>
//               </div>
//             </div>

//             {/* Post Content */}
//             <p className="text-sm">
//               Hypnosis at the parallel universe was the advice of alarm,
//               commanded to a conscious ship. Processors experiment with
//               paralysis!
//             </p>

//             {/* Image Grid */}
//             <div className="grid grid-cols-6 gap-2">
//               <div className="col-span-3">
//                 <img
//                   className="rounded-box w-full h-56 object-cover cursor-pointer"
//                   onClick={() => {
//                     setSelectedImage(
//                       "https://media.discordapp.net/attachments/1283830529933840507/1339162086739021875/005.jpg?ex=67adb761&is=67ac65e1&hm=c8a3ab934bcf6a7669590e1944ddb78997c5433dc0fa5fdfbd60977b2e786b13&=&format=webp&width=525&height=701"
//                     );
//                     setShowModal(true);
//                   }}
//                   src="https://media.discordapp.net/attachments/1283830529933840507/1339162086739021875/005.jpg?ex=67adb761&is=67ac65e1&hm=c8a3ab934bcf6a7669590e1944ddb78997c5433dc0fa5fdfbd60977b2e786b13&=&format=webp&width=525&height=701"
//                 />
//               </div>
//               <div className="col-span-3">
//                 <img
//                   className="rounded-box w-full h-56 object-cover cursor-pointer"
//                   onClick={() => {
//                     setSelectedImage(
//                       "https://media.discordapp.net/attachments/1283830529933840507/1339162087359774770/003.jpg?ex=67adb762&is=67ac65e2&hm=b4bcab359127b0818cee251de4f1e8df918615b822083bd96372b32229f560cb&=&format=webp&width=394&height=700"
//                     );
//                     setShowModal(true);
//                   }}
//                   src="https://media.discordapp.net/attachments/1283830529933840507/1339162087359774770/003.jpg?ex=67adb762&is=67ac65e2&hm=b4bcab359127b0818cee251de4f1e8df918615b822083bd96372b32229f560cb&=&format=webp&width=394&height=700"
//                 />
//               </div>
//               <div className="col-span-2">
//                 <img
//                   className="rounded-box w-full h-40 object-cover cursor-pointer"
//                   onClick={() => {
//                     setSelectedImage(
//                       "https://media.discordapp.net/attachments/1283830529933840507/1339162087359774770/003.jpg?ex=67adb762&is=67ac65e2&hm=b4bcab359127b0818cee251de4f1e8df918615b822083bd96372b32229f560cb&=&format=webp&width=394&height=700"
//                     );
//                     setShowModal(true);
//                   }}
//                   src="https://media.discordapp.net/attachments/1283830529933840507/1339162087359774770/003.jpg?ex=67adb762&is=67ac65e2&hm=b4bcab359127b0818cee251de4f1e8df918615b822083bd96372b32229f560cb&=&format=webp&width=394&height=700"
//                 />
//               </div>
//               <div className="col-span-2">
//                 <img
//                   className="rounded-box w-full h-40 object-cover cursor-pointer"
//                   onClick={() => {
//                     setSelectedImage(
//                       "https://media.discordapp.net/attachments/1283830529933840507/1339162088169410603/001.jpg?ex=67adb762&is=67ac65e2&hm=d74c619ddec9c57d8f55768427629f07010e8dd343c0c8f3b29f3ef23b3d48e9&=&format=webp&width=394&height=700"
//                     );
//                     setShowModal(true);
//                   }}
//                   src="https://media.discordapp.net/attachments/1283830529933840507/1339162088169410603/001.jpg?ex=67adb762&is=67ac65e2&hm=d74c619ddec9c57d8f55768427629f07010e8dd343c0c8f3b29f3ef23b3d48e9&=&format=webp&width=394&height=700"
//                 />
//               </div>
//               <div className="col-span-2">
//                 <img
//                   className="rounded-box w-full h-40 object-cover cursor-pointer"
//                   onClick={() => {
//                     setSelectedImage(
//                       "https://media.discordapp.net/attachments/1283830529933840507/1339162088509014048/009.jpg?ex=67adb762&is=67ac65e2&hm=e96afbfe8173416e2ede95146f06ab036b012d801308d9119419dcc7014dcf61&=&format=webp&width=394&height=700"
//                     );
//                     setShowModal(true);
//                   }}
//                   src="https://media.discordapp.net/attachments/1283830529933840507/1339162088509014048/009.jpg?ex=67adb762&is=67ac65e2&hm=e96afbfe8173416e2ede95146f06ab036b012d801308d9119419dcc7014dcf61&=&format=webp&width=394&height=700"
//                 />
//               </div>

//               {showModal && (
//                 <dialog className="modal modal-open">
//                   <div className="modal-box max-w-5xl">
//                     <img src={selectedImage} className="w-full h-auto" />
//                     <div className="modal-action">
//                       <button
//                         className="btn"
//                         onClick={() => setShowModal(false)}
//                       >
//                         Close
//                       </button>
//                     </div>
//                   </div>
//                   <form
//                     method="dialog"
//                     className="modal-backdrop"
//                     onClick={() => setShowModal(false)}
//                   >
//                     <button>close</button>
//                   </form>
//                 </dialog>
//               )}
//             </div>

//             {/* Footer */}
//             <div className="flex justify-between items-center pt-5">
//               <button
//                 className="btn btn-ghost btn-sm"
//                 onClick={() => setIsLiked(!isLiked)}
//               >
//                 <svg
//                   className={`h-4 w-4 ${
//                     isLiked ? "text-error fill-error" : "text-error"
//                   }`}
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
//                   />
//                 </svg>
//               </button>
//               <div className="flex gap-4">
//                 <div className="flex items-center gap-1 opacity-70 text-sm">
//                   <svg
//                     className="h-4 w-4"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
//                     />
//                   </svg>
//                   Share
//                 </div>
//                 <div className="flex items-center gap-1 opacity-70 text-sm">
//                   <svg
//                     className="h-4 w-4"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
//                     />
//                   </svg>
//                   23 Comments
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="bg-base-100 flex justify-center items-center p-4">
//         <div className="card bg-base-200 text-base-content w-full md:w-[40rem]">
//           <div className="card-body">
//             {/* Profile Header */}
//             <div className="flex space-x-4 items-center">
//               <div className="avatar">
//                 <div className="w-12 h-12 rounded-full">
//                   <img
//                     alt="avatar"
//                     src="https://media.discordapp.net/attachments/1283830529933840507/1339486864763125812/117768640_3217190941694824_9124819090644706857_n.jpg?ex=67aee5db&is=67ad945b&hm=b4c4f7fb27642ed6df5e59e577515d2da548c188d5b7a67892aec912b7b9bb42&=&format=webp&width=701&height=701"
//                   />
//                 </div>
//               </div>
//               <div className="space-y-2">
//                 <div className="flex space-x-2 items-center">
//                   <h2 className="text-base">เรืองจรัส ทองจรัส</h2>
//                   <div className="badge badge-primary badge-sm">✓</div>
//                   <div className="text-xs opacity-70">posted an update</div>
//                 </div>
//                 <p className="text-xs opacity-70">10 Months Ago</p>
//               </div>
//             </div>

//             {/* Post Content */}
//             <p className="text-sm">
//               Every time I see you I fall in love all over again. 💖
//             </p>

//             {/* Image Grid */}
//             <div className="grid grid-cols-6 gap-2">
//               <div className="col-span-3">
//                 <img
//                   className="rounded-box w-full h-56 object-cover cursor-pointer"
//                   onClick={() => {
//                     setSelectedImage(
//                       "https://media.discordapp.net/attachments/1283830529933840507/1339488940419452988/photo_--_--_2.jpg?ex=67aee7c9&is=67ad9649&hm=16b6e66f6079875b33337c10e1b0aa9ec735ead146cc1bfd03dd5a64c2b0efb3&=&format=webp&width=526&height=701"
//                     );
//                     setShowModal(true);
//                   }}
//                   src="https://media.discordapp.net/attachments/1283830529933840507/1339488940419452988/photo_--_--_2.jpg?ex=67aee7c9&is=67ad9649&hm=16b6e66f6079875b33337c10e1b0aa9ec735ead146cc1bfd03dd5a64c2b0efb3&=&format=webp&width=526&height=701"
//                 />
//               </div>
//               <div className="col-span-3">
//                 <img
//                   className="rounded-box w-full h-56 object-cover cursor-pointer"
//                   onClick={() => {
//                     setSelectedImage(
//                       "https://media.discordapp.net/attachments/1283830529933840507/1339488939257626635/photo_--_--_2.jpg?ex=67aee7c9&is=67ad9649&hm=2a9c50ea458f9eb4c6536207f4288a0d84a50a103d68d8b8dadcf0a4905fb3c7&=&format=webp&width=526&height=701"
//                     );
//                     setShowModal(true);
//                   }}
//                   src="https://media.discordapp.net/attachments/1283830529933840507/1339488939257626635/photo_--_--_2.jpg?ex=67aee7c9&is=67ad9649&hm=2a9c50ea458f9eb4c6536207f4288a0d84a50a103d68d8b8dadcf0a4905fb3c7&=&format=webp&width=526&height=701"
//                 />
//               </div>
//               <div className="col-span-2">
//                 <img
//                   className="rounded-box w-full h-40 object-cover cursor-pointer"
//                   onClick={() => {
//                     setSelectedImage(
//                       "https://media.discordapp.net/attachments/1283830529933840507/1339488939903287318/photo_--_--.jpg?ex=67aee7c9&is=67ad9649&hm=d4ddb355cf3afebd56b2eecb750ca9800c850153f1a0f0f9bcd8a5ba1b6f2636&=&format=webp&width=526&height=701"
//                     );
//                     setShowModal(true);
//                   }}
//                   src="https://media.discordapp.net/attachments/1283830529933840507/1339488939903287318/photo_--_--.jpg?ex=67aee7c9&is=67ad9649&hm=d4ddb355cf3afebd56b2eecb750ca9800c850153f1a0f0f9bcd8a5ba1b6f2636&=&format=webp&width=526&height=701"
//                 />
//               </div>
//               <div className="col-span-2">
//                 <img
//                   className="rounded-box w-full h-40 object-cover cursor-pointer"
//                   onClick={() => {
//                     setSelectedImage(
//                       "https://media.discordapp.net/attachments/1283830529933840507/1339488939559489556/photo_--_--.jpg?ex=67aee7c9&is=67ad9649&hm=45797523a0db892ef299119fc414504505e3e672fb9bf8a8f2effb22b5ba387e&=&format=webp&width=526&height=701"
//                     );
//                     setShowModal(true);
//                   }}
//                   src="https://media.discordapp.net/attachments/1283830529933840507/1339488939559489556/photo_--_--.jpg?ex=67aee7c9&is=67ad9649&hm=45797523a0db892ef299119fc414504505e3e672fb9bf8a8f2effb22b5ba387e&=&format=webp&width=526&height=701"
//                 />
//               </div>
//               <div className="col-span-2">
//                 <img
//                   className="rounded-box w-full h-40 object-cover cursor-pointer"
//                   onClick={() => {
//                     setSelectedImage(
//                       "https://media.discordapp.net/attachments/1283830529933840507/1339488940754866237/photo_--_--.jpg?ex=67aee7c9&is=67ad9649&hm=b6cd568725c077de16e20d4579db2baabc1857adcaea222c312b3e8ed6c807ef&=&format=webp&width=526&height=701"
//                     );
//                     setShowModal(true);
//                   }}
//                   src="https://media.discordapp.net/attachments/1283830529933840507/1339488940754866237/photo_--_--.jpg?ex=67aee7c9&is=67ad9649&hm=b6cd568725c077de16e20d4579db2baabc1857adcaea222c312b3e8ed6c807ef&=&format=webp&width=526&height=701"
//                 />
//               </div>

//               {showModal && (
//                 <dialog className="modal modal-open">
//                   <div className="modal-box max-w-5xl">
//                     <img src={selectedImage} className="w-full h-auto" />
//                     <div className="modal-action">
//                       <button
//                         className="btn"
//                         onClick={() => setShowModal(false)}
//                       >
//                         Close
//                       </button>
//                     </div>
//                   </div>
//                   <form
//                     method="dialog"
//                     className="modal-backdrop"
//                     onClick={() => setShowModal(false)}
//                   >
//                     <button>close</button>
//                   </form>
//                 </dialog>
//               )}
//             </div>

//             {/* Footer */}
//             <div className="flex justify-between items-center pt-5">
//               <button
//                 className="btn btn-ghost btn-sm"
//                 onClick={() => setIsLiked(!isLiked)}
//               >
//                 <svg
//                   className={`h-4 w-4 ${
//                     isLiked ? "text-error fill-error" : "text-error"
//                   }`}
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
//                   />
//                 </svg>
//               </button>
//               <div className="flex gap-4">
//                 <div className="flex items-center gap-1 opacity-70 text-sm">
//                   <svg
//                     className="h-4 w-4"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
//                     />
//                   </svg>
//                   Share
//                 </div>
//                 <div className="flex items-center gap-1 opacity-70 text-sm">
//                   <svg
//                     className="h-4 w-4"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
//                     />
//                   </svg>
//                   213 Comments
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="bg-base-100 flex justify-center items-center p-4">
//         <div className="card bg-base-200 text-base-content w-full md:w-[40rem]">
//           <div className="card-body">
//             {/* Profile Header */}
//             <div className="flex space-x-4 items-center">
//               <div className="avatar">
//                 <div className="w-12 h-12 rounded-full">
//                   <img
//                     alt="avatar"
//                     src="https://media.discordapp.net/attachments/1283830529933840507/1339486864763125812/117768640_3217190941694824_9124819090644706857_n.jpg?ex=67aee5db&is=67ad945b&hm=b4c4f7fb27642ed6df5e59e577515d2da548c188d5b7a67892aec912b7b9bb42&=&format=webp&width=701&height=701"
//                   />
//                 </div>
//               </div>
//               <div className="space-y-2">
//                 <div className="flex space-x-2 items-center">
//                   <h2 className="text-base">เรืองจรัส ทองจรัส</h2>
//                   <div className="badge badge-primary badge-sm">✓</div>
//                   <div className="text-xs opacity-70">posted an update</div>
//                 </div>
//                 <p className="text-xs opacity-70">10 Months Ago</p>
//               </div>
//             </div>

//             {/* Post Content */}
//             <p className="text-sm">
//               Because you are so special, you are wished a Valentines day filled
//               with love.🤍💏
//             </p>

//             {/* Image Grid */}
//             <div className="grid grid-cols-6 gap-2">
//               <div className="col-span-3">
//                 <img
//                   className="rounded-box w-full h-56 object-cover cursor-pointer"
//                   onClick={() => {
//                     setSelectedImage(
//                       "https://media.discordapp.net/attachments/1283830529933840507/1339487755415195728/photo_--_--_2.jpg?ex=67aee6af&is=67ad952f&hm=73c3ccaa79bb95c7964ae4ab6e401fcb4d46f8b42abf20c3bcf26bd514b29675&=&format=webp&width=526&height=701"
//                     );
//                     setShowModal(true);
//                   }}
//                   src="https://media.discordapp.net/attachments/1283830529933840507/1339487755415195728/photo_--_--_2.jpg?ex=67aee6af&is=67ad952f&hm=73c3ccaa79bb95c7964ae4ab6e401fcb4d46f8b42abf20c3bcf26bd514b29675&=&format=webp&width=526&height=701"
//                 />
//               </div>
//               <div className="col-span-3">
//                 <img
//                   className="rounded-box w-full h-56 object-cover cursor-pointer"
//                   onClick={() => {
//                     setSelectedImage(
//                       "https://media.discordapp.net/attachments/1283830529933840507/1339487755788353578/photo_--_--.jpg?ex=67aee6af&is=67ad952f&hm=985a7f774052a5df2ea62f70fd41a62ed2e793d1f22fe4e04d8724f2e0a9c637&=&format=webp&width=394&height=700"
//                     );
//                     setShowModal(true);
//                   }}
//                   src="https://media.discordapp.net/attachments/1283830529933840507/1339487755788353578/photo_--_--.jpg?ex=67aee6af&is=67ad952f&hm=985a7f774052a5df2ea62f70fd41a62ed2e793d1f22fe4e04d8724f2e0a9c637&=&format=webp&width=394&height=700"
//                 />
//               </div>
//               <div className="col-span-2">
//                 <img
//                   className="rounded-box w-full h-40 object-cover cursor-pointer"
//                   onClick={() => {
//                     setSelectedImage(
//                       "https://media.discordapp.net/attachments/1283830529933840507/1339487756778340362/photo_--_--_3.jpg?ex=67aee6af&is=67ad952f&hm=97fd4431a4c27ae4a0b0a914aad0d1e5172037830ae23f921f2007fa30bd24fb&=&format=webp&width=394&height=700"
//                     );
//                     setShowModal(true);
//                   }}
//                   src="https://media.discordapp.net/attachments/1283830529933840507/1339487756778340362/photo_--_--_3.jpg?ex=67aee6af&is=67ad952f&hm=97fd4431a4c27ae4a0b0a914aad0d1e5172037830ae23f921f2007fa30bd24fb&=&format=webp&width=394&height=700"
//                 />
//               </div>
//               <div className="col-span-2">
//                 <img
//                   className="rounded-box w-full h-40 object-cover cursor-pointer"
//                   onClick={() => {
//                     setSelectedImage(
//                       "https://media.discordapp.net/attachments/1283830529933840507/1339487756073701436/photo_--_--.jpg?ex=67aee6af&is=67ad952f&hm=a492b86ed8784d2be55829be6d2aa64c51e46f539f3c60b8c0bc908d4c1f3a11&=&format=webp&width=394&height=700"
//                     );
//                     setShowModal(true);
//                   }}
//                   src="https://media.discordapp.net/attachments/1283830529933840507/1339487756073701436/photo_--_--.jpg?ex=67aee6af&is=67ad952f&hm=a492b86ed8784d2be55829be6d2aa64c51e46f539f3c60b8c0bc908d4c1f3a11&=&format=webp&width=394&height=700"
//                 />
//               </div>
//               <div className="col-span-2">
//                 <img
//                   className="rounded-box w-full h-40 object-cover cursor-pointer"
//                   onClick={() => {
//                     setSelectedImage(
//                       "https://media.discordapp.net/attachments/1283830529933840507/1339487756383944765/photo_--_--.jpg?ex=67aee6af&is=67ad952f&hm=6c18313b2019ecaaa398e2e1334e576b3581e56e02da4845d9a01169ca66681e&=&format=webp&width=394&height=700"
//                     );
//                     setShowModal(true);
//                   }}
//                   src="https://media.discordapp.net/attachments/1283830529933840507/1339487756383944765/photo_--_--.jpg?ex=67aee6af&is=67ad952f&hm=6c18313b2019ecaaa398e2e1334e576b3581e56e02da4845d9a01169ca66681e&=&format=webp&width=394&height=700"
//                 />
//               </div>

//               {showModal && (
//                 <dialog className="modal modal-open">
//                   <div className="modal-box max-w-5xl">
//                     <img src={selectedImage} className="w-full h-auto" />
//                     <div className="modal-action">
//                       <button
//                         className="btn"
//                         onClick={() => setShowModal(false)}
//                       >
//                         Close
//                       </button>
//                     </div>
//                   </div>
//                   <form
//                     method="dialog"
//                     className="modal-backdrop"
//                     onClick={() => setShowModal(false)}
//                   >
//                     <button>close</button>
//                   </form>
//                 </dialog>
//               )}
//             </div>

//             {/* Footer */}
//             <div className="flex justify-between items-center pt-5">
//               <button
//                 className="btn btn-ghost btn-sm"
//                 onClick={() => setIsLiked(!isLiked)}
//               >
//                 <svg
//                   className={`h-4 w-4 ${
//                     isLiked ? "text-error fill-error" : "text-error"
//                   }`}
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
//                   />
//                 </svg>
//               </button>
//               <div className="flex gap-4">
//                 <div className="flex items-center gap-1 opacity-70 text-sm">
//                   <svg
//                     className="h-4 w-4"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
//                     />
//                   </svg>
//                   Share
//                 </div>
//                 <div className="flex items-center gap-1 opacity-70 text-sm">
//                   <svg
//                     className="h-4 w-4"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
//                     />
//                   </svg>
//                   45 Comments
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="bg-base-100 flex justify-center items-center p-4">
//         <div className="card bg-base-200 text-base-content w-full md:w-[40rem]">
//           <div className="card-body">
//             {/* Profile Header */}
//             <div className="flex space-x-4 items-center">
//               <div className="avatar">
//                 <div className="w-12 h-12 rounded-full">
//                   <img
//                     alt="avatar"
//                     src="https://media.discordapp.net/attachments/1283830529933840507/1339486864763125812/117768640_3217190941694824_9124819090644706857_n.jpg?ex=67aee5db&is=67ad945b&hm=b4c4f7fb27642ed6df5e59e577515d2da548c188d5b7a67892aec912b7b9bb42&=&format=webp&width=701&height=701"
//                   />
//                 </div>
//               </div>
//               <div className="space-y-2">
//                 <div className="flex space-x-2 items-center">
//                   <h2 className="text-base">เรืองจรัส ทองจรัส</h2>
//                   <div className="badge badge-primary badge-sm">✓</div>
//                   <div className="text-xs opacity-70">posted an update</div>
//                 </div>
//                 <p className="text-xs opacity-70">10 Months Ago</p>
//               </div>
//             </div>

//             {/* Post Content */}
//             <p className="text-sm">
//               There's nowhere that I'd rather be than in your heart to stay.
//               there's nothing that I'd rather do than look at you all day.
//               There's no-one who could ever love as much as I love you. There's
//               nothing that I'd rather hear than that you love me too. Happy
//               Valentine's Day
//             </p>

//             {/* Image Grid */}
//             <div className="grid grid-cols-6 gap-2">
//               <div className="col-span-3">
//                 <img
//                   className="rounded-box w-full h-56 object-cover cursor-pointer"
//                   onClick={() => {
//                     setSelectedImage(
//                       "https://media.discordapp.net/attachments/1283830529933840507/1339485432622219284/photo_--_--_2.jpg?ex=67aee485&is=67ad9305&hm=bbc5bfa1034ebad95abba6f67fecc258001d7b208aace9641aba5979377e7090&=&format=webp&width=394&height=700"
//                     );
//                     setShowModal(true);
//                   }}
//                   src="https://media.discordapp.net/attachments/1283830529933840507/1339485432622219284/photo_--_--_2.jpg?ex=67aee485&is=67ad9305&hm=bbc5bfa1034ebad95abba6f67fecc258001d7b208aace9641aba5979377e7090&=&format=webp&width=394&height=700"
//                 />
//               </div>
//               <div className="col-span-3">
//                 <img
//                   className="rounded-box w-full h-56 object-cover cursor-pointer"
//                   onClick={() => {
//                     setSelectedImage(
//                       "https://media.discordapp.net/attachments/1283830529933840507/1339485433058295849/photo_--_--.jpg?ex=67aee485&is=67ad9305&hm=a7bc7e1dae33039556a106204c0447fd950dc04ce6aeea648870e2d0a4ce06b1&=&format=webp&width=525&height=701"
//                     );
//                     setShowModal(true);
//                   }}
//                   src="https://media.discordapp.net/attachments/1283830529933840507/1339485433058295849/photo_--_--.jpg?ex=67aee485&is=67ad9305&hm=a7bc7e1dae33039556a106204c0447fd950dc04ce6aeea648870e2d0a4ce06b1&=&format=webp&width=525&height=701"
//                 />
//               </div>
//               <div className="col-span-2">
//                 <img
//                   className="rounded-box w-full h-40 object-cover cursor-pointer"
//                   onClick={() => {
//                     setSelectedImage(
//                       "https://media.discordapp.net/attachments/1283830529933840507/1339485433398300742/photo_--_--.jpg?ex=67aee485&is=67ad9305&hm=dd8a93887ed14d5f1d984a9f3b1b06c2e37bad48ba367e0f8e3fef654fc44625&=&format=webp&width=394&height=700"
//                     );
//                     setShowModal(true);
//                   }}
//                   src="https://media.discordapp.net/attachments/1283830529933840507/1339485433398300742/photo_--_--.jpg?ex=67aee485&is=67ad9305&hm=dd8a93887ed14d5f1d984a9f3b1b06c2e37bad48ba367e0f8e3fef654fc44625&=&format=webp&width=394&height=700"
//                 />
//               </div>
//               <div className="col-span-2">
//                 <img
//                   className="rounded-box w-full h-40 object-cover cursor-pointer"
//                   onClick={() => {
//                     setSelectedImage(
//                       "https://media.discordapp.net/attachments/1283830529933840507/1339485433792299128/photo_--_--.jpg?ex=67aee485&is=67ad9305&hm=9c26bc2f7aeec435cbc505cdca3077cef21eab5c1d1a49c3802c44f663659684&=&format=webp&width=394&height=700"
//                     );
//                     setShowModal(true);
//                   }}
//                   src="https://media.discordapp.net/attachments/1283830529933840507/1339485433792299128/photo_--_--.jpg?ex=67aee485&is=67ad9305&hm=9c26bc2f7aeec435cbc505cdca3077cef21eab5c1d1a49c3802c44f663659684&=&format=webp&width=394&height=700"
//                 />
//               </div>
//               <div className="col-span-2">
//                 <img
//                   className="rounded-box w-full h-40 object-cover cursor-pointer"
//                   onClick={() => {
//                     setSelectedImage(
//                       "https://media.discordapp.net/attachments/1283830529933840507/1339485434215927808/photo_--_--.jpg?ex=67aee485&is=67ad9305&hm=c13bdb6ac8708b12ab19a641195f1062949dd7dee45e4f0d1f0c979107f23cd9&=&format=webp&width=526&height=701"
//                     );
//                     setShowModal(true);
//                   }}
//                   src="https://media.discordapp.net/attachments/1283830529933840507/1339485434215927808/photo_--_--.jpg?ex=67aee485&is=67ad9305&hm=c13bdb6ac8708b12ab19a641195f1062949dd7dee45e4f0d1f0c979107f23cd9&=&format=webp&width=526&height=701"
//                 />
//               </div>

//               {showModal && (
//                 <dialog className="modal modal-open">
//                   <div className="modal-box max-w-5xl">
//                     <img src={selectedImage} className="w-full h-auto" />
//                     <div className="modal-action">
//                       <button
//                         className="btn"
//                         onClick={() => setShowModal(false)}
//                       >
//                         Close
//                       </button>
//                     </div>
//                   </div>
//                   <form
//                     method="dialog"
//                     className="modal-backdrop"
//                     onClick={() => setShowModal(false)}
//                   >
//                     <button>close</button>
//                   </form>
//                 </dialog>
//               )}
//             </div>

//             {/* Footer */}
//             <div className="flex justify-between items-center pt-5">
//               <button
//                 className="btn btn-ghost btn-sm"
//                 onClick={() => setIsLiked(!isLiked)}
//               >
//                 <svg
//                   className={`h-4 w-4 ${
//                     isLiked ? "text-error fill-error" : "text-error"
//                   }`}
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
//                   />
//                 </svg>
//               </button>
//               <div className="flex gap-4">
//                 <div className="flex items-center gap-1 opacity-70 text-sm">
//                   <svg
//                     className="h-4 w-4"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
//                     />
//                   </svg>
//                   Share
//                 </div>
//                 <div className="flex items-center gap-1 opacity-70 text-sm">
//                   <svg
//                     className="h-4 w-4"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
//                     />
//                   </svg>
//                   132 Comments
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="flex justify-center items-center pb-4">
//         {" "}
//         <motion.button
//           className="btn btn-secondary mb-4"
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.9 }}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.2 }}
//           onClick={() => {
//             setTimeout(() => {
//               window.location.href = "book-white";
//             }, 1000);
//           }}
//         >
//           มีอะไรอยากจะบอกเรามั้ย{" "}
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth="1.5"
//             stroke="currentColor"
//             className="size-5"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
//             />
//           </svg>
//         </motion.button>
//       </div>
//     </div>
//   );
// }

export default function ValentineBook() {
  return(
    <div>sdad</div>
  )
}
