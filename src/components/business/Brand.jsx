import React from "react";
import BusinessCard from "./BusinessCard";
import { useInView } from "react-intersection-observer";
import Button from "../Button";

function Brand() {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });
  const cardContentItems = [
    {
      title: "Brand Startegy",
      description:
        "Set your business up for long-term success with a brand strategy & voice that will bring your competitive positioning to life.",
      links: [
        { href: "", text: "Branding & Rebranding" },
        { href: "", text: "Brand Naming & Taglines" },
        { href: "", text: "Positioning & Messaging" },
        { href: "", text: "Brand Story & Purpose" },
      ],
    },
    {
      title: "Brand Identity",
      description:
        "Create a visual identity that will help you stand out in the market and attract your target audience.",
      links: [
        { href: "", text: "Logo Design" },
        { href: "", text: "Brand Guidelines" },
        { href: "", text: "Brand Collateral" },
        { href: "", text: "Packaging Design" },
      ],
    },
    {
      title: "Brand Marketing",
      description:
        "Develop a marketing strategy that will help you reach your target audience and grow your business.",
      links: [
        { href: "", text: "Digital Marketing" },
        { href: "", text: "Social Media Marketing" },
        { href: "", text: "Content Marketing" },
        { href: "", text: "Email Marketing" },
      ],
    },
  ];

  return (
    <section
      className="w-full py-20 px-3 flex flex-col items-center justify-center"
      ref={ref}
    >
      <div className=" gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-20">
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
      <Button>Book Free Call</Button>
    </section>
  );
}

export default Brand;
