"use client"
import { useState } from "react";
import { motion } from "framer-motion";

export default function ValentineBook() {
  const [isLiked, setIsLiked] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <div className="bg-base-100 flex justify-center items-center p-4">
        <div className="card bg-base-200 text-base-content w-full md:w-[40rem]">
          <div className="card-body">
            {/* Profile Header */}
            <div className="flex space-x-4 items-center">
              <div className="avatar">
                <div className="w-12 h-12 rounded-full">
                  <img
                    src="https://media.discordapp.net/attachments/1283830529933840507/1339486864763125812/117768640_3217190941694824_9124819090644706857_n.jpg?ex=67aee5db&is=67ad945b&hm=b4c4f7fb27642ed6df5e59e577515d2da548c188d5b7a67892aec912b7b9bb42&=&format=webp&width=701&height=701"
                    alt="Profile picture of เรืองจรัส ทองจรัส"
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
            I don't know how you do it but you make me want to live forever. 
            Wish our love will last forever.💖🤍
            </p>

            {/* Image Grid */}
            <div className="grid grid-cols-6 gap-2">
              <div className="col-span-3">
                <img
                  className="rounded-box w-full h-56 object-cover cursor-pointer"
                  onClick={() => {
                    setSelectedImage(
                      "/1.webp"
                    );
                    setShowModal(true);
                  }}
                  src="/1.webp"
                  alt="Image 1"
                />
              </div>
              <div className="col-span-3">
                <img
                  className="rounded-box w-full h-56 object-cover cursor-pointer"
                  onClick={() => {
                    setSelectedImage(
                      "/2.webp"
                    );
                    setShowModal(true);
                  }}
                  src="/2.webp"
                  alt="Image 2"
                />
              </div>
              <div className="col-span-2">
                <img
                  className="rounded-box w-full h-40 object-cover cursor-pointer"
                  onClick={() => {
                    setSelectedImage(
                      "/3.webp"
                    );
                    setShowModal(true);
                  }}
                  src="/3.webp"
                  alt="Image 3"
                />
              </div>
              <div className="col-span-2">
                <img
                  className="rounded-box w-full h-40 object-cover cursor-pointer"
                  onClick={() => {
                    setSelectedImage(
                      "/4.webp"
                    );
                    setShowModal(true);
                  }}
                  src="/4.webp"
                  alt="Image 4"
                />
              </div>
              <div className="col-span-2">
                <img
                  className="rounded-box w-full h-40 object-cover cursor-pointer"
                  onClick={() => {
                    setSelectedImage(
                      "/5.webp"
                    );
                    setShowModal(true);
                  }}
                  src="/5.webp"
                  alt="Image 5"
                />
              </div>

              {showModal && (
                <dialog className="modal modal-open">
                  <div className="modal-box max-w-5xl">
                    <img src={selectedImage} alt="Image 6" className="w-full h-auto" />
                    <div className="modal-action">
                      <button
                        className="btn"
                        onClick={() => setShowModal(false)}
                      >
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
                  89 Comments
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-base-100 flex justify-center items-center p-4">
        <div className="card bg-base-200 text-base-content w-full md:w-[40rem]">
          <div className="card-body">
            {/* Profile Header */}
            <div className="flex space-x-4 items-center">
              <div className="avatar">
                <div className="w-12 h-12 rounded-full">
                  <img
                    src="https://media.discordapp.net/attachments/1283830529933840507/1339486864763125812/117768640_3217190941694824_9124819090644706857_n.jpg?ex=67aee5db&is=67ad945b&hm=b4c4f7fb27642ed6df5e59e577515d2da548c188d5b7a67892aec912b7b9bb42&=&format=webp&width=701&height=701"
                    alt="Profile picture of เรืองจรัส ทองจรัส"
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
            Every time you hold my hand. I find another reason to fall in love with you..
            Love you always.🤍💏
            </p>

            {/* Image Grid */}
            <div className="grid grid-cols-6 gap-2">
              <div className="col-span-3">
                <img
                  className="rounded-box w-full h-56 object-cover cursor-pointer"
                  onClick={() => {
                    setSelectedImage(
                      "/6.webp"
                    );
                    setShowModal(true);
                  }}
                  src="/6.webp"
                  alt="Image 6"
                />
              </div>
              <div className="col-span-3">
                <img
                  className="rounded-box w-full h-56 object-cover cursor-pointer"
                  onClick={() => {
                    setSelectedImage(
                      "/7.webp"
                    );
                    setShowModal(true);
                  }}
                  src="/7.webp"
                  alt="Image 7"
                />
              </div>
              <div className="col-span-2">
                <img
                  className="rounded-box w-full h-40 object-cover cursor-pointer"
                  onClick={() => {
                    setSelectedImage(
                      "/8.webp"
                    );
                    setShowModal(true);
                  }}
                  src="/8.webp"
                  alt="Image 8"
                />
              </div>
              <div className="col-span-2">
                <img
                  className="rounded-box w-full h-40 object-cover cursor-pointer"
                  onClick={() => {
                    setSelectedImage(
                      "/9.webp"
                    );
                    setShowModal(true);
                  }}
                  src="/9.webp"
                  alt="Image 9"
                />
              </div>
              <div className="col-span-2">
                <img
                  className="rounded-box w-full h-40 object-cover cursor-pointer"
                  onClick={() => {
                    setSelectedImage(
                      "/10.webp"
                    );
                    setShowModal(true);
                  }}
                  src="/10.webp"
                  alt="Image 10"
                />
              </div>

              {showModal && (
                <dialog className="modal modal-open">
                  <div className="modal-box max-w-5xl">
                    <img src={selectedImage} alt="Image 6" className="w-full h-auto" />
                    <div className="modal-action">
                      <button
                        className="btn"
                        onClick={() => setShowModal(false)}
                      >
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
      <div className="bg-base-100 flex justify-center items-center p-4">
        <div className="card bg-base-200 text-base-content w-full md:w-[40rem]">
          <div className="card-body">
            {/* Profile Header */}
            <div className="flex space-x-4 items-center">
              <div className="avatar">
                <div className="w-12 h-12 rounded-full">
                  <img
                    src="https://media.discordapp.net/attachments/1283830529933840507/1339486864763125812/117768640_3217190941694824_9124819090644706857_n.jpg?ex=67aee5db&is=67ad945b&hm=b4c4f7fb27642ed6df5e59e577515d2da548c188d5b7a67892aec912b7b9bb42&=&format=webp&width=701&height=701"
                    alt="Profile picture of เรืองจรัส ทองจรัส"
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
            The beauty that surrounds me is all because of you. 
            I found life because I found you💕
            </p>

            {/* Image Grid */}
            <div className="grid grid-cols-6 gap-2">
              <div className="col-span-3">
                <img
                  className="rounded-box w-full h-56 object-cover cursor-pointer"
                  onClick={() => {
                    setSelectedImage(
                      "/11.webp"
                    );
                    setShowModal(true);
                  }}
                  src="/11.webp"
                  alt="Image 11"
                />
              </div>
              <div className="col-span-3">
                <img
                  className="rounded-box w-full h-56 object-cover cursor-pointer"
                  onClick={() => {
                    setSelectedImage(
                      "/12.webp"
                    );
                    setShowModal(true);
                  }}
                  src="/12.webp"
                  alt="Image 12"
                />
              </div>
              <div className="col-span-2">
                <img
                  className="rounded-box w-full h-40 object-cover cursor-pointer"
                  onClick={() => {
                    setSelectedImage(
                      "/13.webp"
                    );
                    setShowModal(true);
                  }}
                  src="/13.webp"
                  alt="Image 13"
                />
              </div>
              <div className="col-span-2">
                <img
                  className="rounded-box w-full h-40 object-cover cursor-pointer"
                  onClick={() => {
                    setSelectedImage(
                      "/14.webp"
                    );
                    setShowModal(true);
                  }}
                  src="/14.webp"
                  alt="Image 14"
                />
              </div>
              <div className="col-span-2">
                <img
                  className="rounded-box w-full h-40 object-cover cursor-pointer"
                  onClick={() => {
                    setSelectedImage(
                      "/15.webp"
                    );
                    setShowModal(true);
                  }}
                  src="/15.webp"
                  alt="Image 15"
                />
              </div>

              {showModal && (
                <dialog className="modal modal-open">
                  <div className="modal-box max-w-5xl">
                    <img src={selectedImage} alt="Image 6" className="w-full h-auto" />
                    <div className="modal-action">
                      <button
                        className="btn"
                        onClick={() => setShowModal(false)}
                      >
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
      <div className="bg-base-100 flex justify-center items-center p-4">
        <div className="card bg-base-200 text-base-content w-full md:w-[40rem]">
          <div className="card-body">
            {/* Profile Header */}
            <div className="flex space-x-4 items-center">
              <div className="avatar">
                <div className="w-12 h-12 rounded-full">
                  <img
                    src="https://media.discordapp.net/attachments/1283830529933840507/1339486864763125812/117768640_3217190941694824_9124819090644706857_n.jpg?ex=67aee5db&is=67ad945b&hm=b4c4f7fb27642ed6df5e59e577515d2da548c188d5b7a67892aec912b7b9bb42&=&format=webp&width=701&height=701"
                    alt="Profile picture of เรืองจรัส ทองจรัส"
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
            We loved with a love that is more than love. Wish our love will last forever. 
            </p>

            {/* Image Grid */}
            <div className="grid grid-cols-6 gap-2">
              <div className="col-span-3">
                <img
                  className="rounded-box w-full h-56 object-cover cursor-pointer"
                  onClick={() => {
                    setSelectedImage(
                      "/16.webp"
                    );
                    setShowModal(true);
                  }}
                  src="/16.webp"
                  alt="Image 16"
                />
              </div>
              <div className="col-span-3">
                <img
                  className="rounded-box w-full h-56 object-cover cursor-pointer"
                  onClick={() => {
                    setSelectedImage(
                      "/17.webp"
                    );
                    setShowModal(true);
                  }}
                  src="/17.webp"
                  alt="Image 17"
                />
              </div>
              <div className="col-span-2">
                <img
                  className="rounded-box w-full h-40 object-cover cursor-pointer"
                  onClick={() => {
                    setSelectedImage(
                      "/18.webp"
                    );
                    setShowModal(true);
                  }}
                  src="/18.webp"
                  alt="Image 18"
                />
              </div>
              <div className="col-span-2">
                <img
                  className="rounded-box w-full h-40 object-cover cursor-pointer"
                  onClick={() => {
                    setSelectedImage(
                      "/19.webp"
                    );
                    setShowModal(true);
                  }}
                  src="/19.webp"
                  alt="Image 19"
                />
              </div>
              <div className="col-span-2">
                <img
                  className="rounded-box w-full h-40 object-cover cursor-pointer"
                  onClick={() => {
                    setSelectedImage(
                      "/20.webp"
                    );
                    setShowModal(true);
                  }}
                  src="/20.webp"
                  alt="Image 20"
                />
              </div>

              {showModal && (
                <dialog className="modal modal-open">
                  <div className="modal-box max-w-5xl">
                    <img src={selectedImage} alt="Image 6" className="w-full h-auto" />
                    <div className="modal-action">
                      <button
                        className="btn"
                        onClick={() => setShowModal(false)}
                      >
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
      <div className="bg-base-100 flex justify-center items-center p-4">
        <div className="card bg-base-200 text-base-content w-full md:w-[40rem]">
          <div className="card-body">
            {/* Profile Header */}
            <div className="flex space-x-4 items-center">
              <div className="avatar">
                <div className="w-12 h-12 rounded-full">
                  <img
                    src="https://media.discordapp.net/attachments/1283830529933840507/1339486864763125812/117768640_3217190941694824_9124819090644706857_n.jpg?ex=67aee5db&is=67ad945b&hm=b4c4f7fb27642ed6df5e59e577515d2da548c188d5b7a67892aec912b7b9bb42&=&format=webp&width=701&height=701"
                    alt="Profile picture of เรืองจรัส ทองจรัส"
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
            Every time I see you I fall in love all over again. 
            </p>

            {/* Image Grid */}
            <div className="grid grid-cols-6 gap-2">
              <div className="col-span-3">
                <img
                  className="rounded-box w-full h-56 object-cover cursor-pointer"
                  onClick={() => {
                    setSelectedImage(
                      "/21.webp"
                    );
                    setShowModal(true);
                  }}
                  src="/21.webp"
                  alt="Image 21"
                />
              </div>
              <div className="col-span-3">
                <img
                  className="rounded-box w-full h-56 object-cover cursor-pointer"
                  onClick={() => {
                    setSelectedImage(
                      "/22.webp"
                    );
                    setShowModal(true);
                  }}
                  src="/22.webp"
                  alt="Image 22"
                />
              </div>
              <div className="col-span-2">
                <img
                  className="rounded-box w-full h-40 object-cover cursor-pointer"
                  onClick={() => {
                    setSelectedImage(
                      "/23.webp"
                    );
                    setShowModal(true);
                  }}
                  src="/23.webp"
                  alt="Image 23"
                />
              </div>
              <div className="col-span-2">
                <img
                  className="rounded-box w-full h-40 object-cover cursor-pointer"
                  onClick={() => {
                    setSelectedImage(
                      "/24.webp"
                    );
                    setShowModal(true);
                  }}
                  src="/24.webp"
                  alt="Image 24"
                />
              </div>
              <div className="col-span-2">
                <img
                  className="rounded-box w-full h-40 object-cover cursor-pointer"
                  onClick={() => {
                    setSelectedImage(
                      "/25.webp"
                    );
                    setShowModal(true);
                  }}
                  src="/25.webp"
                  alt="Image 25"
                />
              </div>

              {showModal && (
                <dialog className="modal modal-open">
                  <div className="modal-box max-w-5xl">
                    <img src={selectedImage} alt="Image 6" className="w-full h-auto" />
                    <div className="modal-action">
                      <button
                        className="btn"
                        onClick={() => setShowModal(false)}
                      >
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
      <div className="bg-base-100 flex justify-center items-center p-4">
        <div className="card bg-base-200 text-base-content w-full md:w-[40rem]">
          <div className="card-body">
            {/* Profile Header */}
            <div className="flex space-x-4 items-center">
              <div className="avatar">
                <div className="w-12 h-12 rounded-full">
                  <img
                    src="https://media.discordapp.net/attachments/1283830529933840507/1339486864763125812/117768640_3217190941694824_9124819090644706857_n.jpg?ex=67aee5db&is=67ad945b&hm=b4c4f7fb27642ed6df5e59e577515d2da548c188d5b7a67892aec912b7b9bb42&=&format=webp&width=701&height=701"
                    alt="Profile picture of เรืองจรัส ทองจรัส"
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
            Even if things get hard someday, I promise to love you just the same.
            </p>

            {/* Image Grid */}
            <div className="grid grid-cols-6 gap-2">
              <div className="col-span-3">
                <img
                  className="rounded-box w-full h-56 object-cover cursor-pointer"
                  onClick={() => {
                    setSelectedImage(
                      "/26.webp"
                    );
                    setShowModal(true);
                  }}
                  src="/26.webp"
                  alt="Image 26"
                />
              </div>
              <div className="col-span-3">
                <img
                  className="rounded-box w-full h-56 object-cover cursor-pointer"
                  onClick={() => {
                    setSelectedImage(
                      "/27.webp"
                    );
                    setShowModal(true);
                  }}
                  src="/27.webp"
                  alt="Image 27"
                />
              </div>
              <div className="col-span-2">
                <img
                  className="rounded-box w-full h-40 object-cover cursor-pointer"
                  onClick={() => {
                    setSelectedImage(
                      "/28.webp"
                    );
                    setShowModal(true);
                  }}
                  src="/28.webp"
                  alt="Image 28"
                />
              </div>
              <div className="col-span-2">
                <img
                  className="rounded-box w-full h-40 object-cover cursor-pointer"
                  onClick={() => {
                    setSelectedImage(
                      "/29.webp"
                    );
                    setShowModal(true);
                  }}
                  src="/29.webp"
                  alt="Image 29"
                />
              </div>
              <div className="col-span-2">
                <img
                  className="rounded-box w-full h-40 object-cover cursor-pointer"
                  onClick={() => {
                    setSelectedImage(
                      "/30.webp"
                    );
                    setShowModal(true);
                  }}
                  src="/30.webp"
                  alt="Image 30"
                />
              </div>

              {showModal && (
                <dialog className="modal modal-open">
                  <div className="modal-box max-w-5xl">
                    <img src={selectedImage} alt="Image 6" className="w-full h-auto" />
                    <div className="modal-action">
                      <button
                        className="btn"
                        onClick={() => setShowModal(false)}
                      >
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
      <div className="bg-base-100 flex justify-center items-center p-4">
        <div className="card bg-base-200 text-base-content w-full md:w-[40rem]">
          <div className="card-body">
            {/* Profile Header */}
            <div className="flex space-x-4 items-center">
              <div className="avatar">
                <div className="w-12 h-12 rounded-full">
                  <img
                    src="https://media.discordapp.net/attachments/1283830529933840507/1339486864763125812/117768640_3217190941694824_9124819090644706857_n.jpg?ex=67aee5db&is=67ad945b&hm=b4c4f7fb27642ed6df5e59e577515d2da548c188d5b7a67892aec912b7b9bb42&=&format=webp&width=701&height=701"
                    alt="Profile picture of เรืองจรัส ทองจรัส"
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
            Happy Valentine's Day. Love you today and always. 
            </p>

            {/* Image Grid */}
            <div className="grid grid-cols-6 gap-2">
              <div className="col-span-3">
                <img
                  className="rounded-box w-full h-56 object-cover cursor-pointer"
                  onClick={() => {
                    setSelectedImage(
                      "/31.webp"
                    );
                    setShowModal(true);
                  }}
                  src="/31.webp"
                  alt="Image 31"
                />
              </div>
              <div className="col-span-3">
                <img
                  className="rounded-box w-full h-56 object-cover cursor-pointer"
                  onClick={() => {
                    setSelectedImage(
                      "/32.webp"
                    );
                    setShowModal(true);
                  }}
                  src="/32.webp"
                  alt="Image 32"
                />
              </div>
              <div className="col-span-2">
                <img
                  className="rounded-box w-full h-40 object-cover cursor-pointer"
                  onClick={() => {
                    setSelectedImage(
                      "/33.webp"
                    );
                    setShowModal(true);
                  }}
                  src="/33.webp"
                  alt="Image 33"
                />
              </div>
              <div className="col-span-2">
                <img
                  className="rounded-box w-full h-40 object-cover cursor-pointer"
                  onClick={() => {
                    setSelectedImage(
                      "/34.webp"
                    );
                    setShowModal(true);
                  }}
                  src="/34.webp"
                  alt="Image 34"
                />
              </div>
              <div className="col-span-2">
                <img
                  className="rounded-box w-full h-40 object-cover cursor-pointer"
                  onClick={() => {
                    setSelectedImage(
                      "/35.webp"
                    );
                    setShowModal(true);
                  }}
                  src="/35.webp"
                  alt="Image 35"
                />
              </div>

              {showModal && (
                <dialog className="modal modal-open">
                  <div className="modal-box max-w-5xl">
                    <img src={selectedImage} alt="Image 6" className="w-full h-auto" />
                    <div className="modal-action">
                      <button
                        className="btn"
                        onClick={() => setShowModal(false)}
                      >
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

