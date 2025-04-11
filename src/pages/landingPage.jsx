import React, { useState } from 'react';
import banner1 from '../assets/banner1.png';
import banner2 from '../assets/banner2.png';
import banner3 from '../assets/banner3.png';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HotWheelsSlider = () => {
  const banners = [banner2, banner3, banner1];
  const [current, setCurrent] = useState(0);
  const [fadeDirection, setFadeDirection] = useState('');

  const prevSlide = () => {
    setFadeDirection('fade-left');
    setTimeout(() => {
      setCurrent((prev) => (prev - 1 + banners.length) % banners.length);
    }, 300);
  };

  const nextSlide = () => {
    setFadeDirection('fade-right');
    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 300);
  };

  const getIndex = (offset) => {
    return (current + offset + banners.length) % banners.length;
  };

  return (
    <div className="bg-[#DF8A4D] w-full flex flex-col items-center justify-center py-20 space-y-6">
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
          <div className="w-[25%] h-[350px] opacity-40 scale-90 transition-all duration-300 blur-[1px] hover:scale-95">
            <img
              src={banners[getIndex(-1)]}
              className="w-full h-full object-cover rounded-xl shadow-lg"
              alt="left"
            />
          </div>

          {/* Center Image with Animation */}
          <div className="w-[70%] h-[350px] transition-all duration-500 transform-gpu">
            <img
              src={banners[current]}
              alt="center"
              className={`w-full h-full object-cover rounded-2xl shadow-2xl transition-all duration-500 scale-105 hover:scale-110 ${
                fadeDirection === 'fade-left'
                  ? 'animate-fade-left-smooth'
                  : fadeDirection === 'fade-right'
                  ? 'animate-fade-right-smooth'
                  : ''
              }`}
              onAnimationEnd={() => setFadeDirection('')}
            />
          </div>

          {/* Right Image */}
          <div className="w-[25%] h-[350px] opacity-40 scale-90 transition-all duration-300 blur-[1px] hover:scale-95">
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
            onClick={() => {
              setFadeDirection(idx > current ? 'fade-right' : 'fade-left');
              setTimeout(() => setCurrent(idx), 300);
            }}
            className={`w-2 h-2 rounded-full cursor-pointer ${
              idx === current ? 'bg-[#D8F6F9]' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>

      {/* Shop Buttons */}
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-18">
        <button className="bg-[#D8F6F9] text-[#f65e5c] font-bold text-lg px-6 py-3 rounded-full shadow-md hover:scale-105 transition">
          SHOP BY THEME
        </button>
        <button className="bg-[#dff6f5] text-[#f65e5c] font-bold text-lg px-6 py-3 rounded-full shadow-md hover:scale-105 transition">
          SHOP BY CATEGORIES
        </button>
      </div>
    </div>
  );
};

export default HotWheelsSlider;
