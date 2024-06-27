import React from "react";

function VideoSection() {
  return (
    <section className=" py-20">
      <div className="container flex flex-col items-center">
        <h2 className="text-4xl font-extrabold font-Popins my-3 text-center dark:text-gray-400">
          Watch our Brand Story
        </h2>

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
