"use client";
import { motion } from "framer-motion";
import Anniversary from "../Anniversary/page";

export default function ValentineMail() {
  // Add this component function before the main ValentineMail component

  // Add this constant after your memories array
  const carouselImages = [
    {
      id: "slide1",
      url: "https://media.discordapp.net/attachments/1283830529933840507/1338767852978700339/77.webp?ex=67ac4839&is=67aaf6b9&hm=e728fad5699d40d5d9e7d181b6bc60083a9465eabed1eb809b8af4eb16ff5e3b&=&format=webp&width=395&height=702",
      alt: "Memory 1",
    },
    {
      id: "slide2",
      url: "https://media.discordapp.net/attachments/1283830529933840507/1338767852978700339/77.webp?ex=67ac4839&is=67aaf6b9&hm=e728fad5699d40d5d9e7d181b6bc60083a9465eabed1eb809b8af4eb16ff5e3b&=&format=webp&width=395&height=702",
      alt: "Memory 2",
    },
    {
      id: "slide3",
      url: "https://media.discordapp.net/attachments/1283830529933840507/1338767852978700339/77.webp?ex=67ac4839&is=67aaf6b9&hm=e728fad5699d40d5d9e7d181b6bc60083a9465eabed1eb809b8af4eb16ff5e3b&=&format=webp&width=395&height=702",
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
        {[
          {
            src: "https://media.discordapp.net/attachments/1283830529933840507/1338767853590941696/66.webp?ex=67ac4839&is=67aaf6b9&hm=bf7f16eda4843667d35c49a415b79628874fc5f25d40a87145023d4504a2e9bb&=&format=webp&width=526&height=302",
            title: "ไปเที่ยวด้วยกันวันแรก!",
            description: "A card component has a figure, a body part, and inside body there are title and actions parts",
            imageItem : "https://media.discordapp.net/attachments/1283830529933840507/1338767853590941696/66.webp?ex=67ac4839&is=67aaf6b9&hm=bf7f16eda4843667d35c49a415b79628874fc5f25d40a87145023d4504a2e9bb&=&format=webp&width=726&height=702",
          },
          {
            src: "https://media.discordapp.net/attachments/1283830529933840507/1338071236034691092/3.webp?ex=67abb9b2&is=67aa6832&hm=d520a5abb0e154db9081aecd0cec458beea6dde7ef4224b381d16dd973748d15&=&format=webp&width=526&height=302",
            title: "Card Title",
            description: "A card component has a figure, a body part, and inside body there are title and actions parts",
            imageItem : "https://media.discordapp.net/attachments/1283830529933840507/1338071236034691092/3.webp?ex=67abb9b2&is=67aa6832&hm=d520a5abb0e154db9081aecd0cec458beea6dde7ef4224b381d16dd973748d15&=&format=webp&width=726&height=702"
          }
        ].map((item, index) => (
          <div key={index} className="card bg-base-100 w-96 shadow-sm">
            <figure>
              <img
                src={item.src}
                alt={item.title}
                className="cursor-pointer"
                onClick={(e) => {
                  const modal = document.createElement('dialog');
                  modal.className = 'modal';
                  modal.innerHTML = `
                    <div class="modal-box max-w-4xl">
                      <img src="${e.currentTarget.src}" alt="Full size" class="w-full h-auto w-xl"/>
                      <div class="modal-action">
                        <form method="dialog">
                          <button class="btn">Close</button>
                        </form>
                      </div>
                    </div>
                  `;
                  document.body.appendChild(modal);
                  modal.showModal();
                  modal.addEventListener('close', () => {
                    modal.remove();
                  });
                }}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{item.title}</h2>
              <p>{item.description}</p>
              <div className="card-actions justify-end">
                <button 
                  className="btn btn-primary"
                  onClick={() => {
                    const img = document.createElement('dialog');
                    img.className = 'modal';
                    img.innerHTML = `
                      <div class="modal-box max-w-4xl flex flex-col items-center p-3">
                        ${item.title}
                        <img src="${item.imageItem}" alt="Full size"/>
                        <div class="modal-action">
                          <form method="dialog">
                            <button class="btn">Close</button>
                          </form>
                        </div>
                      </div>
                    `;
                    document.body.appendChild(img);
                    img.showModal();
                    img.addEventListener('close', () => {
                      img.remove();
                    });
                  }}
                >
                  View
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    //image
  );
}
