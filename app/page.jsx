import AboutSection from "./sections/AboutSection";
import FeatureSection from "./sections/FeatureSection";
import HeroSection from "./sections/HeroSection";
import ProjectsSection from "./sections/ProjectsSection";
import ContactSection from "./sections/ContactSection";
import ServicesSection from "./sections/ServicesSection";
import TeamSection from "./sections/TeamSection";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <div className="bg-[#F3F3F3] pb-12">
        <ProjectsSection />
        <ServicesSection />
        <TeamSection />
      </div>
      <FeatureSection />
      <ContactSection />
    </div>
  );
};

export default Home;
