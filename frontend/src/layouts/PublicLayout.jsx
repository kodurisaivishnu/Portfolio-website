import { Outlet } from "react-router";
import { Toaster } from "sonner";
import Background from "../components/ui/Background";
import Spotlight from "../components/ui/Spotlight";
import ScrollProgress from "../components/ui/ScrollProgress";
import Marquee from "../components/ui/Marquee";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutMe from "../components/AboutMe";
import AboutMeIntro from "../components/AboutMeIntro";
import TechnicalSkills from "../components/TechnicalSkills";
import CodingProfiles from "../components/CodingProfiles";
import ProjectCarousel from "../components/ProjectCarousel";
import Contact from "../components/Contact";
import Experience from "../components/Experience";

const PublicLayout = () => {
  return (
    <div className="relative flex flex-col min-h-screen bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-100 transition-colors duration-300">
      <Background />
      <Spotlight />
      <ScrollProgress />
      <Navbar />
      <main className="flex-grow">
        {/* Hero */}
        <Outlet />
        {/* Scrolling highlights ticker */}
        <Marquee />
        {/* Sections */}
        <AboutMeIntro />
        <Experience />
        <TechnicalSkills />
        <ProjectCarousel />
        <CodingProfiles />
        <AboutMe />
        <Contact />
      </main>
      <Footer />
      <Toaster richColors position="bottom-right" />
    </div>
  );
};

export default PublicLayout;
