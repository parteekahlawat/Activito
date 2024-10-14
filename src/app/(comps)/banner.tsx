import Image from 'next/image';
import { useEffect } from 'react';
import Typed from 'typed.js';

const Banner = () => {
  useEffect(() => {
    const options = {
      strings: [
        "Get Ready to Play!",
        "Welcome to the Game Zone!",
        "Play With Friends!"
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true
    };

    // Initialize Typed.js
    const typed = new Typed(".auto-input", options);

    // Cleanup on unmount
    return () => {
      typed.destroy();
    };
  }, []); // Empty dependency array to run only on mount and unmount

  return (
    <div id="controls-carousel" className="relative w-full" data-carousel="static">
      <div className="relative h-screen overflow-hidden rounded-lg">
        <div className="duration-700 ease-in-out" data-carousel-item>
          <Image
            src="/banner_img1.jpg"
            alt="Banner Image"
            layout="fill" 
            objectFit="cover" 
            className="absolute block w-full h-full"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-white text-6xl font-bold">
              <span className="auto-input"></span> {/* This span will display the typing effect */}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
