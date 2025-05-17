import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutMe from "../components/AboutMe";
import AboutMeIntro from "../components/AboutMeIntro";
import TechnicalSkills from "../components/TechnicalSkills";
import CodingProfiles from "../components/CodingProfiles";
import ProjectCarousel from "../components/ProjectCarousel";
import Contact from "../components/Contact";
import Experience from "../components/Experience";

const PublicLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-white transition-colors duration-300">
      <Navbar />
      <main className="flex-grow p-4 pt-20">
        <Outlet />
      </main>
      <section id="about_me">
        <AboutMeIntro />
        <CodingProfiles></CodingProfiles>
      </section>
      <section id="projects">
        <ProjectCarousel></ProjectCarousel>
        <TechnicalSkills></TechnicalSkills>
      </section>
      <AboutMe />
      <Experience></Experience>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </div>
  );
};

export default PublicLayout;
