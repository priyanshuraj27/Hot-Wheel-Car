import React from "react";
import challenge from "../assets/challenge.png";

const ChallengeSection = () => {
  return (
    <div className="w-full bg-[#f9f9f9] left-0 right-0">
      <div className="w-full px-4 sm:px-8 py-4 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Challenge Image */}
        <div className="w-full md:w-1/3 flex justify-center">
          <img
            src={challenge}
            alt="Challenge Accepted"
            className="w-48 sm:w-56 md:w-64"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/3 text-center md:text-left px-4">
          <h2 className="text-red-600 font-bold text-base sm:text-lg md:text-xl mb-1">
            TRY.FAIL.REPEAT.GROW
          </h2>
          <p className="text-black font-semibold text-xs sm:text-sm md:text-base leading-tight">
            When kids play with Hot Wheels, every attempt teaches them to take in
            new challenges
          </p>
        </div>

        {/* Button Section */}
        <div className="w-full md:w-1/3 flex justify-center">
          <button className="bg-black text-white font-bold h-14 px-6 rounded hover:bg-gray-800 text-sm">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChallengeSection;
