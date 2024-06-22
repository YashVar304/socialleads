import React from "react";

const SignatureSection = () => {
  return (
    <div className="bg-white py-8 px-6 sm:px-12 lg:px-20">
      <h2 className="text-3xl font-bold mb-6">Who We Flock With</h2>
      <ul className="space-y-4">
        <li className="flex items-center">
          <svg
            className="h-6 w-6 text-pink-500 mr-2"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 6L9 17l-5-5" />
          </svg>
          <span>The ambitiously-driven</span>
        </li>
        {/* Add the rest of the list items */}
      </ul>
      <div className="mt-8">
        <button className="bg-pink-500 text-white px-6 py-3 rounded-md hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2">
          Book Free Brand Flair Call
        </button>
      </div>
      <div className="mt-8 flex items-center">
        <img
          src="https://cdn.tailgrids.com/1.0/assets/images/hero/hero-image-01.png"
          alt="Jacob Cass"
          className="w-20 h-20 rounded-full mr-4"
        />
        <div>
          <h3 className="text-lg font-bold">JACOB CASS</h3>
          <p className="text-gray-500">
            Brand Designer, Strategist & Founder of JUST Creative: An
            award-winning branding & design agency specializing in brand
            strategy, brand design & rebranding.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignatureSection;
