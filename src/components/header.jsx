import React from "react";
import logo from "../assets/logo.png";
import car from "../assets/car.png";
import helmet from "../assets/helmet.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-yellow-400 px-6 py-3">
      <div className="flex flex-col md:flex-row items-center justify-between w-full space-y-4 md:space-y-0">
        <div className="flex justify-center md:justify-start w-full md:w-auto">
          <img src={logo} alt="Logo" className="h-10" />
        </div>
        <div className="flex flex-col sm:flex-row md:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 md:space-x-6 w-full md:w-auto">
          <div className="flex items-center space-x-2">
            <img src={car} alt="Car Icon" className="h-10" />
            <span className="text-red-600 font-bold italic text-lg">Browse</span>
          </div>
          <div className="flex items-center border-2 border-red-500 rounded-full px-4 py-1 bg-yellow-400 w-full max-w-xs md:w-80">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-red-500 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-4.35-4.35M16.65 16.65A7.5 7.5 0 1116.65 2a7.5 7.5 0 010 15z"
              />
            </svg>
            <input
              type="text"
              placeholder="SEARCH FOR YOUR NEXT RIDE..."
              className="bg-transparent placeholder-gray-700 text-gray-800 focus:outline-none w-full text-sm"
            />
          </div>
          <div className="flex items-center space-x-2">
            <img src={helmet} alt="Helmet Icon" className="h-10" />
            <span className="text-red-600 font-bold italic text-lg">Sign In</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
