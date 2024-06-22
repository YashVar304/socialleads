import React from "react";
import dolphin from "../assets/dolphin.png";
import blackfeather from "../assets/blackFeathers.jpg";
import { useInView } from "react-intersection-observer";

const FlockCliches = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
  });
  return (
    <div className="overflow-hidden">
      <div className="h-[100px]"></div>
      <div
        className="relative text-center bg-black  bg-cover mt-32 -z-10 "
        style={{ backgroundImage: `url(${blackfeather})` }}
      >
        <div className="triangle-top dark:border-t-[#14081e]"></div>
        <div
          className="pt-20 flex flex-col justify-center mb-10 items-center h-[600px] overflow-hidden"
          ref={ref}
        >
          <img
            src={dolphin}
            alt="Logo"
            className={`w-96  z-0 absolute -top-20 ${
              inView ? "animate-zoomIn" : "animate-none"
            } `}
          />
          <h1 className="text-6xl font-extrabold text-[#c31b5f] mt-6">
            FLOCK CLICHÉS
          </h1>
          <p className="text-3xl font-light text-white mt-2 font-playwrite ">
            Dare to Flair
          </p>
        </div>
      </div>
    </div>
  );
};

export default FlockCliches;
