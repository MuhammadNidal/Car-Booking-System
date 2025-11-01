import React from "react";
import HeroSection from "../components/home/Hero";
import LogosSection from "../components/home/LogosSection";
import IssuesSections from "../components/home/IssuesSections";
import OurServices from "../components/home/OurServices";
import Slider from "../components/home/Slider";
import StatsSection from "../components/home/StatsSection";
import TestimonialSection from "../components/home/TestimonialSection";
import ConsultationSection from "../components/home/ConsultationSection";
import CallToActionSection from "../components/home/CallToActionSection";

const Home = () => {
  return (
    <main>
      <HeroSection />
      <LogosSection />
      <CallToActionSection />
      <Slider />
      <IssuesSections />
      <OurServices />
      <StatsSection />
      <TestimonialSection />
      <ConsultationSection />
    </main>
  );
};

export default Home;
