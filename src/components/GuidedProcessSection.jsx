// src/GuidedProcessSection.js
import React from "react";
import Button from "./Button";
const GuidedProcessSection = () => {
  return (
    <section className="flex flex-col items-center py-20 font-Popins px-3">
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold mb-2">
          <span className="text-black">BUILD</span>
          <span className="text-[#c31b5f] font-playwrite">Your</span>
          <span className="text-black">PARADISE</span>
        </h1>
        <p className="text-2xl text-gray-700 mb-6">with our guided process</p>
        <div className="w-24 h-1 text-[#c31b5f] mx-auto mb-6"></div>
      </div>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between">
        <div className="flex flex-col items-center p-4 bg-gray-4 border-black border flex-1">
          <div className="mb-4 text-[#c31b5f]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
            </svg>
          </div>
          <h2 className="text-xl font-bold mb-2">1. Free Discovery Call</h2>
          <p className="text-gray-700 mb-4 text-center">
            Define, prioritize, and plan your brand’s goals to create a roadmap
            for success.
          </p>
          <Button>Book a Call</Button>
        </div>
        <div className="flex flex-col items-center p-4 bg-gray-4 border-black border flex-1">
          <div className="mb-4 text-[#c31b5f]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
            </svg>
          </div>
          <h2 className="text-xl font-bold mb-2">2. Strategy & Brand Design</h2>
          <p className="text-gray-700 mb-4 text-center">
            Develop a brand strategy to ensure the visuals, messaging, and user
            experience work in unison. Then design the logo & brand identity.
          </p>
        </div>
        <div className="flex flex-col items-center p-4 bg-gray-4 border-black border flex-1">
          <div className="mb-4 text-[#c31b5f]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
            </svg>
          </div>
          <h2 className="text-xl font-bold mb-2">3. Grow Your Business</h2>
          <p className="text-gray-700 mb-4 text-center">
            Watch your brand grow with a clear message & visually consistent
            style, that will be recognized & trusted by your customers.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GuidedProcessSection;
