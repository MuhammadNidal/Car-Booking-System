import React from "react";
import HeroSection from "../components/home/Hero";
import LogosSection from "../components/home/LogosSection";
import IssuesSections from "../components/home/IssuesSections";
import OurServices from "../components/home/OurServices";
import StatsSection from "../components/home/StatsSection";
import TestimonialSection from "../components/home/TestimonialSection";
import ConsultationSection from "../components/home/ConsultationSection";
import CallToActionSection from "../components/home/CallToActionSection";
import SliderComponent from "../components/home/Slider";

const Home = () => {
  return (
    <main>
      <HeroSection />
      <LogosSection />
      <CallToActionSection />
      <SliderComponent />
      {/* <IssuesSections /> */}
      <OurServices />
      <StatsSection />
      <TestimonialSection />
      <ConsultationSection />
    </main>
  );
};

export default Home;
