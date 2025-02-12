'use client'
import Valentine from "./components/Valentine";
import {useEffect } from 'react';
import Cookies from 'js-cookie';

export default function Home() {
  useEffect(() => {
    // Check if user has visited before
    const hasVisited = Cookies.get('hasVisited');
    
    if (!hasVisited) {
      // Set a cookie that expires in 7 days
      Cookies.set('hasVisited', 'true', { expires: 7 });
    }
  }, []);

  return (
    <div>
      <Valentine />
    </div>
  );
}
