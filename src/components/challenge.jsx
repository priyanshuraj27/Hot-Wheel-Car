import React from "react";
import challenge from "../assets/challenge.png";

const ChallengeSection = () => {
return (
    <div className="w-full bg-[#f9f9f9] left-0 right-0">
       <div className="w-full px-4 sm:px-8 md:px-16 py-4 flex flex-col md:flex-row items-center justify-between gap-46">
            
            {/* Challenge Image */}
            <img
                src={challenge}
                alt="Challenge Accepted"
                className="w-48 sm:w-56 md:w-64"
            />
            {/* Removed the overlay div to ensure content is visible */}
            {/* Text Section */}
            <div className="flex-1 text-center md:text-left md:ml-6">
                <h2 className="text-red-600 font-bold text-base sm:text-lg md:text-xl mb-1">
                    TRY.FAIL.REPEAT.GROW
                </h2>
                <p className="text-black font-semibold text-xs sm:text-sm md:text-base leading-tight">
                    When kids play with Hot Wheels, every attempt teaches them to take in new challenges
                </p>
            </div>

            {/* Button */}
            <button className="bg-black text-white font-bold px-5 py-1.5 rounded hover:bg-gray-800 text-sm w-full md:w-auto">
                Learn More
            </button>
        </div>
    </div>
);
};

export default ChallengeSection;