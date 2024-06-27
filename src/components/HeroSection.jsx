import React, { useState, useEffect } from "react";
import { FaRegCheckCircle, FaPlay, FaRegCalendarAlt } from "react-icons/fa";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Button from "./Button";

function HeroSection() {
  const words = [
    "Ambitious",
    "Visionary",
    "Decision Making",
    "Growth-oriented",
    "Audacious",
  ];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [showWord, setShowWord] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowWord(false);
      setTimeout(() => {
        setCurrentWordIndex((prevIndex) =>
          prevIndex === words.length - 1 ? 0 : prevIndex + 1
        );
        setShowWord(true);
      }, 500); // Delay before showing the next word
    }, 2500); // Interval time to include the delay

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <section className="w-full overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse">
        <div className="z-10 pt-11 lg:pt-3 mx-auto w-full lg:w-1/2 animate-fadeInRight">
          <img
            src="https://cdn.tailgrids.com/1.0/assets/images/hero/hero-image-01.png"
            alt="hero"
            className="w-full md:ml-auto h-screen-[1/2] px-2 md:h-screen-[2/3] object-cover"
          />
        </div>
        <div className="py-4 px-2 md:ml-[8%] md:mb-[8%] w-full lg:w-1/2 flex flex-col animate-fadeInLeft">
          <h1
            className=" text-4xl md:text-5xl lg:text-7xl py-3 "
            style={{
              lineHeight: "0.83em",
            }}
          >
            <span className="text-[#c31b5f] font-extrabold">
              SOCIAL
              <br /> MEDIA
            </span>
            <br />
            <span className="text-[#fad02c] font-extrabold">MARKETING</span>
          </h1>
          <p className="p-3  ">
            <span className="text-md md:text-xl lg:text-2xl font-Poppins font-semibold dark:text-gray-400 inline-block md:mr-4 md:my-4 mr-1 my-1">
              FOR
            </span>
            <span className="font-playwrite text-xl md:text-2xl lg:text-4xl text-[#c31b5f] inline-block md:mb-4">
              {" "}
              <TransitionGroup>
                {showWord && (
                  <CSSTransition
                    key={words[currentWordIndex]}
                    timeout={500}
                    classNames="fade"
                  >
                    <span>{words[currentWordIndex]}</span>
                  </CSSTransition>
                )}
              </TransitionGroup>
            </span>
            <br />
            <span className="text-md md:text-xl lg:text-2xl font-Poppins font-semibold dark:text-gray-400">
              FOUNDERS & COACHES
            </span>
          </p>
          <ul className="py-3 ">
            <li className="flex items-center text-sm md:text-md lg:text-xl font-Poppins dark:text-gray-400">
              <FaRegCheckCircle className="text-[#c31b5f] mr-3" /> Build your
              SOCIAL presence.
            </li>
            <li className="flex items-center text-sm md:text-md lg:text-xl font-Poppins dark:text-gray-400">
              <FaRegCheckCircle className="text-[#c31b5f] mr-3" /> Increase your
              ROI by generating LEADS.
            </li>
          </ul>
          <div className="flex gap-5 flex-wrap py-3">
            <Button className="animate-fadeInLeft">
              <div className="flex text-sm md:text-md lg:text-lg items-center">
                <FaPlay className="text-sm md:text-md lg:text-xl mr-3" />
                Play our Story
              </div>
            </Button>
            <Button className="animate-fadeInLeft">
              <div className="flex text-sm md:text-md lg:text-lg items-center">
                <FaRegCalendarAlt className="text-sm md:text-md lg:text-lg mr-3" />
                Book SocialLEADS call
              </div>
            </Button>
          </div>
          <p className="text-xs md:text-sm lg:text-base font-Poppins text-[#A0A0A0] ml-3">
            -Preksha Bothra : Personal Branding & Lead Gen Strategist
          </p>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
