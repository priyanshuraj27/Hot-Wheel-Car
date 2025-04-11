import React, { useState } from 'react';
import banner1 from '../assets/banner1.png';
import banner2 from '../assets/banner2.png';
import banner3 from '../assets/banner3.png';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HotWheelsSlider = () => {
  const banners = [banner2, banner3, banner1];
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + banners.length) % banners.length);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % banners.length);
  };

  const getIndex = (offset) => {
    return (current + offset + banners.length) % banners.length;
  };

  return (
    <div className="bg-[#dd8343] w-full flex flex-col items-center justify-center py-10 space-y-6 start-0 end-0">
      {/* Carousel Container */}
      <div className="relative w-full max-w-[10000px] px-16">
        {/* Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow hover:scale-110 transition"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow hover:scale-110 transition"
        >
          <ChevronRight />
        </button>

        {/* Slide Layout */}
        <div className="flex items-center justify-center gap-21 transition-all duration-500">
          {/* Left Image */}
          <div className="w-[25%] h-[350px] opacity-50 scale-90 transition-transform duration-300">
            <img
              src={banners[getIndex(-1)]}
              className="w-full h-full object-cover rounded-xl shadow-lg"
              alt="left"
            />
          </div>

          {/* Center Image */}
          <div className="w-[70%] h-[350px] scale-100 transition-transform duration-300">
            <img
              src={banners[current]}
              className="w-full h-full object-cover rounded-2xl shadow-xl border-4 border-white"
              alt="center"
            />
          </div>

          {/* Right Image */}
          <div className="w-[25%] h-[350px] opacity-50 scale-90 transition-transform duration-300">
            <img
              src={banners[getIndex(1)]}
              className="w-full h-full object-cover rounded-xl shadow-lg"
              alt="right"
            />
          </div>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="flex space-x-2">
        {banners.map((_, idx) => (
          <div
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-2 h-2 rounded-full cursor-pointer ${
              idx === current ? 'bg-[#D8F6F9]' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>

      {/* Shop Buttons */}
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-10">
        <button className="bg-[#D8F6F9] text-[#f65e5c] font-bold text-lg px-6 py-3 rounded-full shadow-md">
          SHOP BY THEME
        </button>
        <button className="bg-[#dff6f5] text-[#f65e5c] font-bold text-lg px-6 py-3 rounded-full shadow-md">
          SHOP BY CATEGORIES
        </button>
      </div>
    </div>
  );
};

export default HotWheelsSlider;
