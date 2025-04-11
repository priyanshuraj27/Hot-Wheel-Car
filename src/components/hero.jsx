import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    image: "https://images.unsplash.com/photo-1594787318286-3d835c1d207f?auto=format&fit=crop&q=80&w=1200",
    title: "LET'S RACE",
    theme: "bg-blue-500"
  },
  {
    image: "https://images.unsplash.com/photo-1600710998089-0d8d849a3a0e?auto=format&fit=crop&q=80&w=1200",
    title: "F1 COLLECTION",
    theme: "bg-gray-800"
  },
  {
    image: "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?auto=format&fit=crop&q=80&w=1200",
    title: "MONSTER TRUCKS",
    theme: "bg-blue-600"
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      {/* Slides */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-opacity duration-500 ${
              currentSlide === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className={`absolute inset-0 ${slide.theme} opacity-90`}></div>
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-white text-6xl font-bold tracking-wider">{slide.title}</h2>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              currentSlide === index ? 'bg-white w-8' : 'bg-white/50'
            }`}
          />
        ))}
      </div>

      {/* Action Buttons */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-4">
        <button className="bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors">
          SHOP BY THEME
        </button>
        <button className="bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors">
          SHOP BY CATEGORIES
        </button>
      </div>
    </div>
  );
};

export default Hero;