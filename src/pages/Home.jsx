import React from "react";
import TestimonialsSection from "../components/testinomialSlider/TestinomialsSection";
import HeroSection from "../components/HeroSection";
import VideoSection from "../components/VideoSection";
import ServicesSection from "../components/services/ServiceSection";
import ProjectsSection from "../components/project/ProjectSection";
import InquiryForm from "../components/InquiryForm";

function Home() {
  return (
    <>
      <HeroSection />
      <VideoSection />
      <TestimonialsSection />
      <ServicesSection />
      <ProjectsSection />
      <InquiryForm />
    </>
  );
}

export default Home;
