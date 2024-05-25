import React from "react";

function ServiceCard({ title, description, children: icon }) {
  return (
    <div className="w-full p-10 flex flex-col items-start rounded-tl-[15%] hover:text-white rounded-br-[15%] hover:rounded-tr-[15%] hover:rounded-bl-[15%] hover:rounded-tl-none hover:rounded-br-none shadow-lg dark:shadow-sm dark:shadow-[#f8f3e2] hover:bg-[#fad02c] duration-700 ">
      <div className="flex items-center justify-center">
        <div className="w-12 h-12 text-white text-2xl rounded-lg bg-gradient-to-br from-[#c31b5f] to-[#fad02c] flex items-center justify-center mt-3">
          {icon}
        </div>
      </div>
      <div className="flex flex-col">
        <h3 className="text-xl font-semibold  dark:text-white mt-4">{title}</h3>
        <p className="  dark:text-gray-400 mt-2">{description}</p>
      </div>
    </div>
  );
}

export default ServiceCard;
