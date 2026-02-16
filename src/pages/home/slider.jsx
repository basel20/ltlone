import React, { useState, useEffect } from "react";
import Navbar from "../../components/navbar";

const Slider = ({ slides }) => {

  const [currentIndex, setCurrentIndex] = useState(0);
   
  // Automatically change the slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  

  return (
    <div className="relative w-full h-[85vh] overflow-hidden px-4 sm:px-16 mb-8">
      {/* Slider with background image */}
      <div
        className="w-full h-full bg-cover bg-center bg-no-repeat relative rounded-3xl"
        style={{
          backgroundImage: `url(${slides[currentIndex].image})`,
        }}
      >
        {/* Background overlay for readability */}
        <div className="absolute inset-0 bg-black/50 z-10 rounded-3xl"></div>

        {/* Slider content */}
        <div className="absolute inset-0 flex items-center justify-center text-center px-4 z-10">
          <div className="text-white flex flex-col gap-12">
            <h1 className="text-3xl mr-16 sm:text-4xl md:text-5xl lg:text-6xl font-bold md:mr-64 mb-2 font-cairo">
              {slides[currentIndex].title}
            </h1>
            <h1 className="text-3xl ml-16 sm:text-4xl md:text-5xl lg:text-6xl md:ml-64 font-bold text-[#f9cf04]">{slides[currentIndex].description}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
