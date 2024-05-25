import React from "react";
import ServiceCard from "./ServiceCard";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { FaPaintBrush, FaPhotoVideo } from "react-icons/fa";
import { TiSocialAtCircular } from "react-icons/ti";
import { FaUserTie } from "react-icons/fa";
import { IoMagnetOutline } from "react-icons/io5";

function ServicesSection() {
  // Sample service data
  const services = [
    {
      id: 1,
      name: "Web Development",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec feugiat purus. Nullam euismod, metus in posuere ultricies, mi odio tincidunt ex, non tincidunt magna nisl id odio.",
      photo: <HiOutlineComputerDesktop />,
    },
    {
      id: 2,
      name: "Designing",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec feugiat purus. Nullam euismod, metus in posuere ultricies, mi odio tincidunt ex, non tincidunt magna nisl id odio.",
      photo: <FaPaintBrush />,
    },
    {
      id: 3,
      name: "Video Editing",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec feugiat purus. Nullam euismod, metus in posuere ultricies, mi odio tincidunt ex, non tincidunt magna nisl id odio.",
      photo: <FaPhotoVideo />,
    },
    {
      id: 4,
      name: "Social Media Management",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec feugiat purus. Nullam euismod, metus in posuere ultricies, mi odio tincidunt ex, non tincidunt magna nisl id odio.",
      photo: <TiSocialAtCircular />,
    },
    {
      id: 5,
      name: "Personal Branding",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec feugiat purus. Nullam euismod, metus in posuere ultricies, mi odio tincidunt ex, non tincidunt magna nisl id odio.",
      photo: <FaUserTie />,
    },
    {
      id: 6,
      name: "Lead Generation",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec feugiat purus. Nullam euismod, metus in posuere ultricies, mi odio tincidunt ex, non tincidunt magna nisl id odio.",
      photo: <IoMagnetOutline />,
    },
    // Add more services as needed
  ];

  return (
    <section className="md:py-16">
      <div className=" w-full flex flex-col  ">
        <div className="ml-[5%] ">
          <h2 className="inline-block w-fit  text-transparent bg-clip-text bg-gradient-to-r from-[#c31b5f] to-[#fad02c]   text-3xl font-bold">
            Our Services
          </h2>
          <p className="text-gray-400 text-2xl mr-[30%] mt-2 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            nec feugiat purus. Nullam euismod, metus in posuere ultricies, mi
          </p>
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-[5%] py-10 ">
          {services.map((service) => (
            <div key={service.id} className="m-4">
              <ServiceCard
                title={service.name}
                description={service.description}
              >
                {service.photo}
              </ServiceCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
