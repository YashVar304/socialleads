import React from "react";
import HeroSection from "../components/HeroSection";
import VideoSection from "../components/VideoSection";

import Resources from "../components/Resources";
import Business from "../components/business/Business";
import FlockCliches from "../components/FlockClitches";
import PortfolioSection from "../components/portfolio/PortfolioSection";
import Brand from "../components/business/Brand";
import BrandSection from "../components/BrandSection";
import GuidedProcessSection from "../components/GuidedProcessSection";

function Home() {
  return (
    <>
      <HeroSection />
      <Resources />
      <Business />
      <FlockCliches />
      <VideoSection />
      <PortfolioSection />
      <Brand />
      <BrandSection />
      <GuidedProcessSection />
    </>
  );
}

export default Home;
