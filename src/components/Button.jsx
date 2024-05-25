import React from "react";

function Button({ text, onClick, className, ...props }) {
  return (
    <button
      onClick={onClick}
      className={`inline-block px-5 py-3 mt-6 text-xs size-fit md:text-sm lg:text-lg bg-gradient-to-r from-[#C31B5F] to-[#FAD02C] text-white transition duration-300 ease-in-out cursor-pointer overflow-hidden rounded-lg animate-slideInLeft ${className}`}
      {...props}
    >
      {text}
    </button>
  );
}

export default Button;
