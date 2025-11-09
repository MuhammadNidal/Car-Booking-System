import HeroSection from "../components/home/Hero";
import IssuesSections from "../components/home/IssuesSections";
import OurServices from "../components/home/OurServices";
import StatsSection from "../components/home/StatsSection";
import TestimonialSection from "../components/home/TestimonialSection";
import ConsultationSection from "../components/home/ConsultationSection";
import CallToActionSection from "../components/home/CallToActionSection";
import SliderComponent from "../components/home/Slider";
import BrowseCategory from "../components/home/BrowseCategory";
import CarShowcase from "../components/home/CarShowcase";

const Home = () => {
  return (
    <main>
      <HeroSection />
      <CarShowcase />
      <CallToActionSection />
      <BrowseCategory />
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
