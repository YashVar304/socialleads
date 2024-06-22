import React from "react";

function VideoSection() {
  return (
    <section className=" py-20">
      <div className="container flex flex-col items-center">
        <h2 className="text-4xl font-extrabold font-Popins my-3 text-center">
          Watch our Brand Story
        </h2>
        <p className="my-3 font-Popins text-center mb-10">
          Join SocialLEADS and get access to 100+ marketing, designing and
          business growth resources including some surprises that helps you
          generate LEADS socially.
        </p>
        <div className="container w-full h-[500px] rounded-3xl px-0">
          <iframe
            className="w-full h-full rounded-3xl "
            src="https://www.youtube.com/embed/7e90gBu4pas"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default VideoSection;
