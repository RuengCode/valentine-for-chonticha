"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function ValentineMail() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      id: 1,
      content: (
        <img
          src="/valentine.webp"
          alt="Slide 1"
          className="max-h-[300px] object-contain"
        />
      ),
    },
    {
      id: 2,
      content: (
        <img
          src="/path/to/image2.jpg"
          alt="Slide 2"
          className="max-h-[300px] object-contain"
        />
      ),
    },
    {
      id: 3,
      content: (
        <img
          src="/path/to/image3.jpg"
          alt="Slide 3"
          className="max-h-[300px] object-contain"
        />
      ),
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div>
    <div className="w-full max-w-xl mx-auto p-4">
      <div className="carousel w-full">
        <motion.div
          className="carousel-item relative w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-full flex items-center justify-center min-h-[300px] bg-base-200 rounded-box">
            {slides[currentSlide].content}
          </div>

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <button onClick={prevSlide} className="btn btn-circle">
              ❮
            </button>
            <button onClick={nextSlide} className="btn btn-circle">
              ❯
            </button>
          </div>
        </motion.div>
      </div>

      <div className="flex justify-center w-full py-2 gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`btn btn-xs ${
              currentSlide === index ? "btn-active" : ""
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
      
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      <div className="card bg-base-100 shadow-sm">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            Card Title
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div>
        </div>
      </div>

      <div className="card bg-base-100 shadow-sm">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            Card Title
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div>
        </div>
      </div>

      <div className="card bg-base-100 shadow-sm">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            Card Title
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
    </div>
   
    </div>
    //image
  );
}
