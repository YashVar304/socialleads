import React from "react";
import { useInView } from "react-intersection-observer";
import BusinessCard from "./BusinessCard";

function Business() {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  const cardContentItems = [
    {
      title: "For Founders and C-suite Executives",
      description: "Brand Awareness to attract large audience and increase ROI",
      links: [
        { href: "", text: "Services" },
        { href: "", text: "Work Deck" },
        { href: "", text: "About U" },
        { href: "", text: "SocialLEADS Resources" },
      ],
    },
    {
      title: "For Coaches and Consultants ",
      description:
        "Building authority to attract niche specific clients & 5x revenue growth",
      links: [
        { href: "", text: "Services" },
        { href: "", text: "Work Deck" },
        { href: "", text: "About U" },
        { href: "", text: "SocialLEADS Resources" },
      ],
    },
  ];

  return (
    <section
      id="business"
      className="body-font w-full px-3 py-20 flex justify-center"
      ref={ref}
    >
      <div className="max-w-5xl flex flex-col md:flex-row gap-10">
        {cardContentItems.map((cardContent, index) => (
          <BusinessCard
            key={index}
            inView={inView}
            title={cardContent.title}
            description={cardContent.description}
            links={cardContent.links}
            index={index % 2}
          />
        ))}
      </div>
    </section>
  );
}

export default Business;
