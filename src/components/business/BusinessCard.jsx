import React from "react";
import { FaUser } from "react-icons/fa";
import Button from "../Button";

const BusinessCard = ({ inView, title, description, links, index, icon }) => (
  <div
    className={`p-10  bg-gray-7 flex flex-col rounded-3xl ${
      inView
        ? index == 0
          ? "animate-fadeInLeft"
          : "animate-fadeInRight"
        : "opacity-0"
    }`}
  >
    <div className="flex justify-center items-center mb-6">
      {icon ? { icon } : <FaUser className="text-5xl text-[#c31b5f] mr-3" />}
      <h2 className="font-bold font-Popins text-xl md:text-2xl text-[#c31b5f] ">
        {title}
      </h2>
    </div>
    <h3 className="text-lg md:text-xl lg:text-3xl mb-6 font-Popins">
      {description}
    </h3>
    <ul className="list-disc ml-10 mb-5 font-Popins text-[#c31b5f] ">
      {links.map((link, index) => (
        <li key={index}>
          <a href={link.href}>{link.text}</a>
        </li>
      ))}
    </ul>
    <Button>Book a 1:1 Call </Button>
  </div>
);

export default BusinessCard;
