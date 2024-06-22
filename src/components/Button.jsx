import React from "react";
import classNames from "classnames";

function Button({ onClick, className, children, ...props }) {
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
  return (
    <button
      onClick={onClick}
      className=" px-6 py-3 w-fit bg-[#c31b5f] rounded-full text-white hover:shadow-dark-2 shadow-lg hover:-translate-y-3 duration-300 ease-in-out font-Popins hover:dark:shadow-gray-600"
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
