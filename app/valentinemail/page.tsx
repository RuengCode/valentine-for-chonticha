"use client";
import { motion } from "framer-motion";
import Anniversary from "../Anniversary/page";

export default function ValentineMail() {

  // Add this component function before the main ValentineMail component
  

  // Add this constant after your memories array
  const carouselImages = [
    {
      id: "slide1",
      url: "https://media.discordapp.net/attachments/1283830529933840507/1338071236034691092/3.webp?ex=67a9bf72&is=67a86df2&hm=aa19992242a622206e1e9e888a0c25096655106e7249a6b5439f2364ae1b9f49&=&format=webp&width=394&height=700",
      alt: "Memory 1",
    },
    {
      id: "slide2",
      url: "https://media.discordapp.net/attachments/1283830529933840507/1338071236378492938/2.webp?ex=67a9bf72&is=67a86df2&hm=fb8bd3b11e9b4422f6cf9ebbfed177484e94ec3c5e9b746c88647f4fe8f20170&=&format=webp&width=394&height=700",
      alt: "Memory 2",
    },
    {
      id: "slide3",
      url: "https://media.discordapp.net/attachments/1283830529933840507/1338071236756111391/1.webp?ex=67a9bf73&is=67a86df3&hm=15986651c95fcb5ee8d8d8371af67f1b2ea5783b21b7ec403c2aa5ee3c0c27a2&=&format=webp&width=394&height=700",
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
            Our Memories
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
      <div className="w-full max-w-xl mx-auto p-4">
        <div className="carousel w-full"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
       
      </div>
    </div>
    //image
  );
}
