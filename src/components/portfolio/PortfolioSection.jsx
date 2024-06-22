import React from "react";
import pinkyWave from "../../assets/pinky-wave.webp";
import Button from "../Button";
function PortfolioSection() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container flex flex-col items-center max-w-xl">
        <img src={pinkyWave} alt="portfolio" className="w-[83%] mb-5" />
        <h2 className="text-4xl font-extrabold font-Popins my-3 text-center">
          We Design that stands out in the crowd
        </h2>
        <hr
          className="w-24 "
          style={{
            height: "4px",
            backgroundColor: "#c31b5f",
            border: "none",
          }}
        />
        <p className="my-3 font-Popins text-center mb-10">
          Our Brand strategy & design services are tailored to meet your needs.
          We are here to help you.
        </p>
        <Button>View Portfolio</Button>
      </div>
    </section>
  );
}

export default PortfolioSection;
