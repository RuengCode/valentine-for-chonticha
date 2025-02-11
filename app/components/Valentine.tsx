"use client";
import React from "react";
import Calculator from "./Calculator";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

export function TimerClose() {
  const [progress, setProgress] = useState(0);
  const totalTime = 300000;

  useEffect(() => {
    const intervalTime = 100;
    const increment = (intervalTime / totalTime) * 100;
    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + increment;
        if (newProgress >= 100) {
          const dialog = document.getElementById(
            "my_modal_1"
          ) as HTMLDialogElement;
          if (dialog) {
            dialog.close();
          }
          return 0; // Reset progress
        }
        return newProgress;
      });
    }, intervalTime);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <progress
      className="progress progress-primary"
      value={progress}
      max="100"
    ></progress>
  );
}

const Valentine = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="max-w-md"
        >
          <h1 className="text-5xl font-bold">สวัสดีจ้า</h1>
          
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
            <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            animate={{
              scale: [1, 1.2, 1],
              transition: {
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            className="btn btn-primary test"
            onClick={() =>
              (
                document.getElementById("my_modal_1") as HTMLDialogElement
              ).showModal()
            }
          >
            Click Me!{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
            </svg>
          </motion.button>
          <dialog id="my_modal_1" className="modal">
            <div className="modal-box bg-base-200 text-center">
              <div className="card-footer bg-base-100 shadow-2xl mb-2 rounded-lg p-1">
                <h3 className="font-bold text-lg">Hello!</h3>
                <p>Will you be my Valentine?</p>
              </div>
              <Calculator />
              <div className="card-footer bg-base-100 shadow-2xl justify-center items-center rounded-md m-3">
                <div className="pt-2 text-center font-bold">Time Out</div>
                <div className="flex items-center">
                  <div className="w-full">
                    <TimerClose />
                  </div>
                </div>
              </div>
              <div className="modal-action">
                <form method="dialog">
                  <button className="btn">Close</button>
                </form>
              </div>
            </div>
          </dialog>
        </motion.div>

        <div className="carousel w-full max-w-sm rounded-lg shadow-2xl">
          <div id="slide1" className="carousel-item relative w-full">
            <Image
              src="/valentine.webp"
              width={500}
              height={300}
              className="w-full"
              alt="Valentine's Image 1"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <Image
              src="/valentine.webp"
              width={500}
              height={300}
              className="w-full"
              alt="Valentine's Image 2"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <Image
              src="/valentine.webp"
              width={500}
              height={300}
              className="w-full"
              alt="Valentine's Image 3"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full ">
            <Image
              src="/valentine.webp"
              width={500}
              height={300}
              className="w-full"
              alt="Valentine's Image 4"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Valentine;
