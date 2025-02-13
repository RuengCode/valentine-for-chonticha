"use client";
import { motion } from "framer-motion";
import Anniversary from "../Anniversary/page";
import Calendar from "../Calends/page";
import { useState } from "react";
import MiniGame from "../mini-game/page";

export default function ValentineMail() {
  // Add this component function before the main ValentineMail component

  const [isOpen, setIsOpen] = useState(false);
  // Add this constant after your memories array
  const carouselImages = [
    {
      id: "slide1",
      url: "/35.webp",
      alt: "Memory 1",
    },
    {
      id: "slide2",
      url: "/26.webp",
      alt: "Memory 2",
    },
    {
      id: "slide3",
      url: "/24.webp",
      alt: "Memory 3",
    },
    {
      id: "slide4",
      url: "/19.webp",
      alt: "Memory 3",
    },
  ];

  // In your main component, replace the card divs with this:

  return (
    <div>
      <div className="flex flex-col items-center space-y-4 my-8 animate-bounce">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center space-x-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-8 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
            />
          </svg>
          <motion.h1
            className="text-3xl font-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Memory space
          </motion.h1>
        </motion.div>
      </div>
      <div className="w-full max-w-xl mx-auto p-4">
      <div className="carousel w-full rounded-box">
          {carouselImages.map((image, index) => (
            <div
              key={image.id}
              id={image.id}
              className="carousel-item relative w-full"
            >
              <motion.img
                src={image.url}
                alt={image.alt}
                className="w-full h-[400px] object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a
                  href={`#${
                    carouselImages[
                      (index - 1 + carouselImages.length) %
                        carouselImages.length
                    ].id
                  }`}
                  className="btn btn-circle bg-base-100 opacity-70 hover:opacity-100"
                >
                  ❮
                </a>
                <a
                  href={`#${
                    carouselImages[(index + 1) % carouselImages.length].id
                  }`}
                  className="btn btn-circle bg-base-100 opacity-70 hover:opacity-100"
                >
                  ❯
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Anniversary />
      <div className="grid grid-cols-1 p-4 items-center">
        
      <motion.h2 
        className="text-center text-2xl text-primary font-bold animate-bounce"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Date of relationship
      </motion.h2>
        <Calendar />

        <>
          <button 
            className="btn btn-primary mt-4" 
            onClick={() => setIsOpen(true)}
          >
            Go !!!!
          </button>

          {isOpen && (
            <dialog className="modal modal-open">
              <div className="modal-box bg-base-100">

                <MiniGame />

                <div className="modal-action">
                  <button className="btn" onClick={() => setIsOpen(false)}>Close</button>
                </div>
              </div>
              <form method="dialog" className="modal-backdrop">
                <button onClick={() => setIsOpen(false)}>close</button>
              </form>
            </dialog>
          )}
        </>
      </div>
    </div>
    //image
  );
}
