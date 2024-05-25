import React from "react";
import Profile from "../profile.png";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import Button from "./Button";

function HeroSection() {
  return (
    <section className="w-full flex justify-evenly flex-wrap-reverse  dark:bg-[#14081e] py-20">
      <div className="flex flex-col justify-center mt-8 px-10 ">
        <div className="flex mb-2 animate-slideInLeft">
          <FaFacebook className="text-2xl text-[#4267B2]  cursor-pointer mr-5" />
          <FaInstagram
            className="text-2xl   cursor-pointer mr-5 text-transparent bg-clip-text text-[#f3f4f6] rounded-md "
            style={{
              background:
                "linear-gradient(45deg, #405DE6, #5851DB, #833AB4, #C13584, #E1306C, #FD1D1D, #F56040, #F77737, #FCAF45, #FFDC80)",
            }}
          />
          <FaTwitter className="text-2xl text-[#1DA1F2]  cursor-pointer mr-5" />
          <FaLinkedin className="text-2xl text-[#0A66C2]  cursor-pointer mr-5" />
        </div>
        <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl animate-slideInLeft text-transparent bg-gradient-to-r from-[#C31B5F] to-[#FAD02C] bg-clip-text">
          SocialLeads
        </h1>
        <p className="text-justify max-w-md  text-sm md:text-lg lg:text-xl mt-3 text-[#4c4c4c] dark:text-gray-400 animate-slideInLeft ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          nec feugiat purus. Nullam euismod, metus in posuere ultricies, mi odio
          tincidunt ex, non tincidunt magna nisl id odio.
        </p>
        <Button text="Get Started" className="mt-5 animate-slideInLeft" />
      </div>
      <div className="flex justify-center mt-10 ">
        <img
          src={Profile}
          alt="Profile"
          className="drop-shadow-2xl rounded-full h-70 w-80 lg:h-96 lg:w-96 object-cover animate-slideInLeft delay-2000 image-shadow "
        />
      </div>
    </section>
  );
}

export default HeroSection;
