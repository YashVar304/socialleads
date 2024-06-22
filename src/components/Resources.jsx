import React from "react";
import resources from "../assets/resources.png";
import Button from "./Button";

function Resources() {
  return (
    <section className=" py-20 flex  justify-center w-full px-3">
      <div className="max-w-4xl flex flex-col md:flex-row justify-center  ">
        <div className="container px-0 ">
          <img
            src={resources}
            alt=""
            className="w-full h-full md:rounded-l-3xl rounded-t-3xl md:rounded-tr-none"
          />
        </div>
        <div className="container  px-4 text-center bg-gray-7 flex flex-col justify-center items-center py-10 md:rounded-r-3xl rounded-b-3xl md:rounded-bl-none">
          <p className="text-3xl font-extrabold font-Popins my-3 ">
            Download the Marketing Bunch & Grow your Business
          </p>
          <p className="my-3 font-Popins">
            Join SocialLEADS and get access to 100+ marketing, designing and
            business growth resources including some surprises that helps you
            generate LEADS socially.
          </p>
          <Button>Go for it</Button>
          <p className="text-[#a0a0a0] my-3">100% Privacy. No spam.</p>
        </div>
      </div>
    </section>
  );
}

export default Resources;
