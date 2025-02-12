"use client";
import { useState } from "react";

export default function ValentineBook() {
  const [isLiked, setIsLiked] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="min-h-screen bg-base-100 flex justify-center items-center p-4">
      <div className="card bg-base-200 text-base-content w-full md:w-[40rem]">
        <div className="card-body">
          {/* Profile Header */}
          <div className="flex space-x-4 items-center">
            <div className="avatar">
              <div className="w-12 h-12 rounded-full">
                <img
                  alt="avatar"
                  src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                />
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex space-x-2 items-center">
                <h2 className="text-base">เรืองจรัส ทองจรัส</h2>
                <div className="badge badge-primary badge-sm">✓</div>
                <div className="text-xs opacity-70">posted an update</div>
              </div>
              <p className="text-xs opacity-70">10 Months Ago</p>
            </div>
          </div>

          {/* Post Content */}
          <p className="text-sm">
            Hypnosis at the parallel universe was the advice of alarm, commanded
            to a conscious ship. Processors experiment with paralysis!
          </p>

          {/* Image Grid */}
          <div className="grid grid-cols-6 gap-2">
            <div className="col-span-3">
              <img
                className="rounded-box w-full h-56 object-cover cursor-pointer"
                onClick={() => {
                  setSelectedImage(
                    "https://media.discordapp.net/attachments/1283830529933840507/1339162086739021875/005.jpg?ex=67adb761&is=67ac65e1&hm=c8a3ab934bcf6a7669590e1944ddb78997c5433dc0fa5fdfbd60977b2e786b13&=&format=webp&width=525&height=701"
                  );
                  setShowModal(true);
                }}
                src="https://media.discordapp.net/attachments/1283830529933840507/1339162086739021875/005.jpg?ex=67adb761&is=67ac65e1&hm=c8a3ab934bcf6a7669590e1944ddb78997c5433dc0fa5fdfbd60977b2e786b13&=&format=webp&width=525&height=701"
                alt=""
              />
            </div>
            <div className="col-span-3">
              <img
                className="rounded-box w-full h-56 object-cover cursor-pointer"
                onClick={() => {
                  setSelectedImage(
                    "https://media.discordapp.net/attachments/1283830529933840507/1339162087359774770/003.jpg?ex=67adb762&is=67ac65e2&hm=b4bcab359127b0818cee251de4f1e8df918615b822083bd96372b32229f560cb&=&format=webp&width=394&height=700"
                  );
                  setShowModal(true);
                }}
                src="https://media.discordapp.net/attachments/1283830529933840507/1339162087359774770/003.jpg?ex=67adb762&is=67ac65e2&hm=b4bcab359127b0818cee251de4f1e8df918615b822083bd96372b32229f560cb&=&format=webp&width=394&height=700"
                alt=""
              />
            </div>
            <div className="col-span-2">
              <img
                className="rounded-box w-full h-40 object-cover cursor-pointer"
                onClick={() => {
                  setSelectedImage(
                    "https://media.discordapp.net/attachments/1283830529933840507/1339162087359774770/003.jpg?ex=67adb762&is=67ac65e2&hm=b4bcab359127b0818cee251de4f1e8df918615b822083bd96372b32229f560cb&=&format=webp&width=394&height=700"
                  );
                  setShowModal(true);
                }}
                src="https://media.discordapp.net/attachments/1283830529933840507/1339162087359774770/003.jpg?ex=67adb762&is=67ac65e2&hm=b4bcab359127b0818cee251de4f1e8df918615b822083bd96372b32229f560cb&=&format=webp&width=394&height=700"
                alt=""
              />
            </div>
            <div className="col-span-2">
              <img
                className="rounded-box w-full h-40 object-cover cursor-pointer"
                onClick={() => {
                  setSelectedImage(
                    "https://media.discordapp.net/attachments/1283830529933840507/1339162088169410603/001.jpg?ex=67adb762&is=67ac65e2&hm=d74c619ddec9c57d8f55768427629f07010e8dd343c0c8f3b29f3ef23b3d48e9&=&format=webp&width=394&height=700"
                  );
                  setShowModal(true);
                }}
                src="https://media.discordapp.net/attachments/1283830529933840507/1339162088169410603/001.jpg?ex=67adb762&is=67ac65e2&hm=d74c619ddec9c57d8f55768427629f07010e8dd343c0c8f3b29f3ef23b3d48e9&=&format=webp&width=394&height=700"
                alt=""
              />
            </div>
            <div className="col-span-2">
              <img
                className="rounded-box w-full h-40 object-cover cursor-pointer"
                onClick={() => {
                  setSelectedImage(
                    "https://media.discordapp.net/attachments/1283830529933840507/1339162088509014048/009.jpg?ex=67adb762&is=67ac65e2&hm=e96afbfe8173416e2ede95146f06ab036b012d801308d9119419dcc7014dcf61&=&format=webp&width=394&height=700"
                  );
                  setShowModal(true);
                }}
                src="https://media.discordapp.net/attachments/1283830529933840507/1339162088509014048/009.jpg?ex=67adb762&is=67ac65e2&hm=e96afbfe8173416e2ede95146f06ab036b012d801308d9119419dcc7014dcf61&=&format=webp&width=394&height=700"
                alt=""
              />
            </div>

            {showModal && (
              <dialog className="modal modal-open">
                <div className="modal-box max-w-5xl">
                  <img src={selectedImage} alt="" className="w-full h-auto" />
                  <div className="modal-action">
                    <button className="btn" onClick={() => setShowModal(false)}>
                      Close
                    </button>
                  </div>
                </div>
                <form
                  method="dialog"
                  className="modal-backdrop"
                  onClick={() => setShowModal(false)}
                >
                  <button>close</button>
                </form>
              </dialog>
            )}
          </div>

          {/* Footer */}
          <div className="flex justify-between items-center pt-5">
            <button
              className="btn btn-ghost btn-sm"
              onClick={() => setIsLiked(!isLiked)}
            >
              <svg
                className={`h-4 w-4 ${
                  isLiked ? "text-error fill-error" : "text-error"
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
                />
              </svg>
            </button>
            <div className="flex gap-4">
              <div className="flex items-center gap-1 opacity-70 text-sm">
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                  />
                </svg>
                Share
              </div>
              <div className="flex items-center gap-1 opacity-70 text-sm">
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
                23 Comments
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
