import React, { useState } from "react";
import TestimonialPhoto1 from "../../profile.png";
import TestimonialPhoto2 from "../../profile.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NextArrow, PrevArrow } from "./CustomArrow";
import { useSelector } from "react-redux";

function TestimonialsSection() {
  // Sample testimonial data
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      testimony:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec feugiat purus. Nullam euismod, metus in posuere ultricies, mi odio tincidunt ex, non tincidunt magna nisl id odio.",
      photo: TestimonialPhoto1,
    },
    {
      id: 2,
      name: "Jane Smith",
      testimony:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec feugiat purus. Nullam euismod, metus in posuere ultricies, mi odio tincidunt ex, non tincidunt magna nisl id odio.",
      photo: TestimonialPhoto2,
    },
    {
      id: 3,
      name: "John Doe",
      testimony:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec feugiat purus. Nullam euismod, metus in posuere ultricies, mi odio tincidunt ex, non tincidunt magna nisl id odio.",
      photo: TestimonialPhoto1,
    },
    {
      id: 4,
      name: "Jane Smith",
      testimony:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec feugiat purus. Nullam euismod, metus in posuere ultricies, mi odio tincidunt ex, non tincidunt magna nisl id odio.",
      photo: TestimonialPhoto2,
    },
    {
      id: 5,
      name: "John Doe",
      testimony:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec feugiat purus. Nullam euismod, metus in posuere ultricies, mi odio tincidunt ex, non tincidunt magna nisl id odio.",
      photo: TestimonialPhoto1,
    },
    {
      id: 6,
      name: "Jane Smith",
      testimony:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec feugiat purus. Nullam euismod, metus in posuere ultricies, mi odio tincidunt ex, non tincidunt magna nisl id odio.",
      photo: TestimonialPhoto2,
    },
    // Add more testimonials as needed
  ];

  const [expandedTestimonials, setExpandedTestimonials] = useState([]);

  // Function to toggle expansion of a testimonial
  const toggleExpand = (id) => {
    if (expandedTestimonials.includes(id)) {
      setExpandedTestimonials(
        expandedTestimonials.filter((item) => item !== id)
      );
    } else {
      setExpandedTestimonials([...expandedTestimonials, id]);
    }
  };
  const theme = useSelector((state) => state.darkMode);

  // Settings for the carousel slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    centerMode: true,
    centerPadding: "50px", // Adjust this value for the gap between slides
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          centerPadding: "40px", // Adjust this value for the gap between slides
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          centerPadding: "20px", // Adjust this value for the gap between slides
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="w-full  md: py-16 overflow-auto" id="testinomial">
      <div className="w-full text-center mb-8">
        <h2 className="w-fit text-3xl font-bold text-start text-transparent bg-gradient-to-r from-[#c31b5f] to-[#fad02c] bg-clip-text ml-[5%] font-sans sm:text-4xl md:text-5xl lg:text-3xl">
          Hear from Our Clients
        </h2>
      </div>
      <Slider {...settings}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="outline-none focus:outline-none">
            <div className="bg-[#fad12c93] rounded-lg shadow-md p-6 mx-3">
              <img
                src={testimonial.photo}
                alt={`${testimonial.name} testimonial`}
                className="h-24 w-24 rounded-full self-center mb-4"
              />
              <h3 className="text-xl font-semibold ">{testimonial.name}</h3>
              <p className="text-lg mt-2 mb-2 text-gray-400">
                {expandedTestimonials.includes(testimonial.id)
                  ? testimonial.testimony
                  : `${testimonial.testimony.slice(0, 100)}...`}
              </p>
              {testimonial.testimony.length > 100 && (
                <button
                  className="text-[#C31B5F] font-semibold focus:outline-none"
                  onClick={() => toggleExpand(testimonial.id)}
                >
                  {expandedTestimonials.includes(testimonial.id)
                    ? "See Less"
                    : "See More"}
                </button>
              )}
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default TestimonialsSection;
