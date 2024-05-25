import React from "react";
import { useInView } from "react-intersection-observer";
import Button from "./Button";

function VideoSection() {
  const { ref, inView } = useInView({
    triggerOnce: true, // Animate only once when the component comes into view
    threshold: 0.1, // Trigger when 10% of the component is visible
  });

  return (
    <section
      id="video"
      ref={ref}
      className="w-full flex flex-col lg:flex-row justify-evenly  py-16 items-center  mt-16 "
    >
      {/* Video */}
      <div
        className={`flex flex-col justify-center mb-10 lg:mb-0 ${
          inView ? "animate-slideInLeft" : "opacity-0"
        }`}
      >
        <iframe
          className="w-full lg:w-[560px] lg:h-[315px] h-[200px] md:h-[315px]"
          src=""
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* About the Video */}
      <div
        className={`flex flex-col justify-center px-10 ${
          inView ? "animate-slideInRight" : "opacity-0"
        }`}
      >
        <h2 className="text-transparent bg-gradient-to-r from-[#C31B5F] to-[#FAD02C] bg-clip-text font-bold text-3xl sm:text-4xl md:text-5xl lg:text-4xl">
          About the Video
        </h2>
        <p className="text-wrap text-justify my-5  max-w-md text-base md:text-lg lg:text-xl text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          nec feugiat purus. Nullam euismod, metus in posuere ultricies, mi odio
          tincidunt ex, non tincidunt magna nisl id odio. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Vestibulum nec feugiat purus.
        </p>
        <Button text="Watch More" className="mt-5" />
      </div>
    </section>
  );
}

export default VideoSection;
