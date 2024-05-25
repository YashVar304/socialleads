import React from "react";
import Header from "./components/header/Header";
import HeroSection from "./components/HeroSection";
import VideoSection from "./components/VideoSection";
import TestimonialsSection from "./components/testinomialSlider/TestinomialsSection";
import ServicesSection from "./components/services/ServiceSection";
import Footer from "./components/footer/Footer";
import ProjectsSection from "./components/project/ProjectSection";
import InquiryForm from "./components/InquiryForm";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WebDevelopment from "./pages/WebDevelopment";
import VideoEditing from "./pages/VideoEditing";
import Designing from "./pages/Designing";
import SocialMediaManagement from "./pages/SocialMediaManagement";
import PersonalBranding from "./pages/PersonalBranding";
import LeadGeneration from "./pages/LeadGeneration";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/web-development" element={<WebDevelopment />} />
        <Route path="/video-editing" element={<VideoEditing />} />
        <Route path="/designing" element={<Designing />} />
        <Route
          path="/social-media-management"
          element={<SocialMediaManagement />}
        />
        <Route path="/personal-branding" element={<PersonalBranding />} />
        <Route path="/lead-generation" element={<LeadGeneration />} />
        {/* Add other routes here */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
