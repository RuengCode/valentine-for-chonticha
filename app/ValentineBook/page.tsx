"use client"
import { useState } from "react";
import { motion } from "framer-motion";

export default function ValentineBook() {
  const [isLiked, setIsLiked] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      {[
        // First post images
        ['/1.webp', '/2.webp', '/3.webp', '/4.webp', '/5.webp'],
        // Second post images
        ['/6.webp', '/7.webp', '/8.webp', '/9.webp', '/10.webp'],
        // Third post images
        ['/11.webp', '/12.webp', '/13.webp', '/14.webp', '/15.webp'],
        // Fourth post images
        ['/16.webp', '/17.webp', '/18.webp', '/19.webp', '/20.webp'],
        // Fifth post images
        ['/21.webp', '/22.webp', '/23.webp', '/24.webp', '/25.webp'],
        // Sixth post images
        ['/26.webp', '/27.webp', '/28.webp', '/29.webp', '/30.webp'],
        // Seventh post images
        ['/31.webp', '/32.webp', '/33.webp', '/34.webp', '/35.webp'],
      ].map((imageSet, postIndex) => (
        <div key={postIndex} className="bg-base-100 flex justify-center items-center p-4">
          <div className="card bg-base-200 text-base-content w-full md:w-[40rem]">
        <div className="card-body">
          {/* Profile Header */}
          <div className="flex space-x-4 items-center">
            <div className="avatar">
          <div className="w-12 h-12 rounded-full">
            <img
              src="https://media.discordapp.net/attachments/1283830529933840507/1339486864763125812/117768640_3217190941694824_9124819090644706857_n.jpg"
              alt="Profile picture"
            />
          </div>
            </div>
            <div className="space-y-2">
          <div className="flex space-x-2 items-center">
            <h2 className="text-base">เรืองจรัส ทองจรัส</h2>
            <div className="badge badge-primary badge-sm">✓</div>
            <div className="text-xs opacity-70">posted an update</div>
          </div>
          <p className="text-xs opacity-70">4 Months Ago</p>
            </div>
          </div>

          {/* Post Content */}
          <p className="text-sm">
            {[
          "I don't know how you do it but you make me want to live forever. Wish our love will last forever.💖🤍",
          "Every time you hold my hand. I find another reason to fall in love with you.. Love you always.🤍💏",
          "The beauty that surrounds me is all because of you. I found life because I found you💕",
          "We loved with a love that is more than love. Wish our love will last forever.",
          "Every time I see you I fall in love all over again.",
          "Even if things get hard someday, I promise to love you just the same.",
          "Happy Valentine Day. Love you today and always."
            ][postIndex]}
          </p>

          {/* Image Grid */}
          <div className="grid grid-cols-6 gap-2">
            {imageSet.slice(0, 2).map((img, i) => (
          <div key={i} className="col-span-3">
            <img
              className="rounded-box w-full h-56 object-cover cursor-pointer"
              onClick={() => {
            setSelectedImage(img);
            setShowModal(true);
              }}
              src={img}
              alt={`Image ${i + 1}`}
            />
          </div>
            ))}
            {imageSet.slice(2).map((img, i) => (
          <div key={i} className="col-span-2">
            <img
              className="rounded-box w-full h-40 object-cover cursor-pointer"
              onClick={() => {
            setSelectedImage(img);
            setShowModal(true);
              }}
              src={img}
              alt={`Image ${i + 3}`}
            />
          </div>
            ))}
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
            {postIndex === 0 ? "89" : "23"} Comments
          </div>
            </div>
          </div>
        </div>
          </div>
        </div>
      ))}

      {showModal && (
        <dialog className="modal modal-open">
          <div className="modal-box max-w-5xl">
        <img src={selectedImage} alt="Selected" className="w-full h-auto" />
        <div className="modal-action">
          <button className="btn" onClick={() => setShowModal(false)}>
            Close
          </button>
        </div>
          </div>
          <form method="dialog" className="modal-backdrop" onClick={() => setShowModal(false)}>
        <button>close</button>
          </form>
        </dialog>
      )}
      <div className="flex justify-center items-center pb-4">
       {" "}
        <motion.button
          className="btn btn-secondary mb-4"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          onClick={() => {
            setTimeout(() => {
              window.location.href = "book-white";
            }, 1000);
          }}
        >
          มีอะไรอยากจะบอกเรามั้ย{" "}
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
              d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
            />
          </svg>
        </motion.button>
      </div>
    </div>
    
  );
}

