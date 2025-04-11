import React from "react";
import car1 from "../assets/car1.png";
import car2 from "../assets/car2.png";
import car3 from "../assets/car3.png";
import car4 from "../assets/car4.png";

const testimonials = [
  {
    text: "My son loves them",
    name: "Ashley’s Father",
    subtitle: "Lazy Unemployed man",
    avatar: "https://i.pravatar.cc/40?img=1"
  },
  {
    text: "My kids are now racers🥲",
    name: "Shantabai",
    subtitle: "Proud mum from Satara",
    avatar: "https://i.pravatar.cc/40?img=2"
  },
  {
    text: "My husband is a child I swear to god😂",
    name: "Soham’s Wife",
    subtitle: "Over possessive wife",
    avatar: "https://i.pravatar.cc/40?img=3"
  },
];

const HotWheelsShowcase = () => {
  return (
    <div className="bg-[#DF8A4D] min-h-screen p-6">
      <h2 className="text-white text-3xl font-bold mb-6">BEST SELLERS</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
        {[car1, car2, car3, car4].map((car, index) => (
          <div
            key={index}
            className="bg-yellow-500 rounded-3xl p-6 flex flex-col items-center w-full"
          >
            <img src={car} alt={`car-${index + 1}`} className="w-48 h-48 object-contain mb-4" />
            <button className="bg-orange-600 text-white font-bold py-2 px-6 rounded-full hover:bg-orange-700">
              BUY NOW
            </button>
          </div>
        ))}
      </div>

      <h3 className="text-black text-2xl font-semibold mb-4">They Love Hot wheels don’t they 😉</h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
        {testimonials.map((testimonial, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-5xl shadow-md flex flex-col gap-4"
          >
            <p className="text-lg font-medium">“{testimonial.text}”</p>
            <div className="flex items-center gap-4">
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="font-semibold text-sm">{testimonial.name}</p>
                <p className="text-xs text-gray-500">{testimonial.subtitle}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotWheelsShowcase;
