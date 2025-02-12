'use client'

import { useEffect } from 'react';

export default function Balloon() {

  const createHeart = (r_size: number, r_left: number, r_bg: number, r_time: number) => {
    return {
      width: `${r_size}px`,
      height: `${r_size}px`,
      left: `${r_left}%`,
      background: `rgba(255,${r_bg - 25},${r_bg},1)`,
      animation: `love ${r_time}s ease`
    };
  };

  useEffect(() => {
    const loveInterval = setInterval(() => {
      const r_num = Math.floor(Math.random() * 1) + 1;
      const r_size = Math.floor(Math.random() * 20) + 5;
      const r_left = Math.floor(Math.random() * 100) + 1;
      const r_bg = Math.floor(Math.random() * 25) + 100;
      const r_time = Math.floor(Math.random() * 70) + 2;

      const heartDiv = document.createElement('div');
      heartDiv.className = 'heart';
      Object.assign(heartDiv.style, createHeart(r_size, r_left, r_bg, r_time));
      
      const heartDiv2 = document.createElement('div');
      heartDiv2.className = 'heart';
      Object.assign(heartDiv2.style, createHeart(r_size - 10, r_left + r_num, r_bg + 25, r_time + 5));

      const bgHeart = document.querySelector('.bg_heart');
      bgHeart?.appendChild(heartDiv);
      bgHeart?.appendChild(heartDiv2);

      // Cleanup hearts
      const hearts = document.querySelectorAll('.heart');
      hearts.forEach((heart) => {
        const top = parseInt(getComputedStyle(heart).top);
        const width = parseInt(getComputedStyle(heart).width);
        if (top <= -100 || width >= 150) {
          heart.remove();
        }
      });
    }, 500);

    return () => clearInterval(loveInterval);
  }, []);
  return(
    <div className="bg_heart"></div>
  )
}