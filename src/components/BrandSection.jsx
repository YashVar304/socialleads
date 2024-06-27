// src/BrandSection.js
import React from "react";
import Button from "./Button";

const BrandSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center py-12 px-10 font-Popins w-full">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4 dark:text-white">
          Stop slowing down the growth of your business
        </h1>
        <p className="mb-6 text-gray-700 dark:text-gray-6">
          Stop wasting hours of your time trying to build your business without
          a plan. Create your business with a solid brand strategy. We’ll show
          you how.
        </p>
        <ul className="text-left text-lg list-none mb-8 dark:text-white">
          <li className="flex items-start mb-2">
            <span className="text-[#c31b5f] mr-2">✔</span>
            Build an authentic & differentiated brand
          </li>
          <li className="flex items-start mb-2">
            <span className="text-[#c31b5f] mr-2">✔</span>
            Cut through the noise and deliver a clear message
          </li>
          <li className="flex items-start mb-2">
            <span className="text-[#c31b5f] mr-2">✔</span>
            Create a brand with a consistent visual style that represents your
            brand’s personality
          </li>
          <li className="flex items-start mb-2">
            <span className="text-[#c31b5f] mr-2">✔</span>
            Be recognized and trusted by your customers
          </li>
          <li className="flex items-start mb-2">
            <span className="text-[#c31b5f] mr-2">✔</span>
            Get total brand clarity & skyrocket your growth
          </li>
        </ul>
        <Button>Book a Call</Button>
      </div>
      <div className="mt-12">
        <div className="flex justify-center">
          <div className="relative flex items-center justify-center w-64 h-64">
            <img
              src="https://justcreative.com/wp-content/uploads/2021/04/strategy-design-growth-chart.svg"
              alt=""
            />
          </div>
        </div>
        <p className="text-center mt-4 text-gray-700">
          We combine <span className="font-semibold">strategy</span>,{" "}
          <span className="font-semibold">design</span> and{" "}
          <span className="font-semibold">growth</span> into our brand building
          process.
        </p>
      </div>
    </section>
  );
};

export default BrandSection;
