import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules"; ///Autoplay
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import { ExternalLink, GithubIcon } from "lucide-react";

const projects = [
  {
    title: "AI Interview System",
    image: "/p1_vitual_interview.png", 
    description:
      "A real-time AI mock interview system using Gemini API and Firebase. For All Domains.",
    liveLink: "https://interview-system.onrender.com/",
    githubLink: "https://github.com/kodurisaivishnu/AI-Mocker-Interview",
  },
  {
    title: "Socket Chat Application",
    image: "/p2_chat_app.png",
    description:
      "Real-time chat application using Socket.io and the MERN stack, supporting multiple concurrent users.",
    liveLink: "https://socket-chat-app-iyex.onrender.com/",
    githubLink: "https://github.com/kodurisaivishnu/Socket-chat-app",
  },
  {
    title: "Airbnb UI Design",
    image: "/p4_air_bnb.png",
    description: "Airbnb UI design clone to challenge my development skills.",
    liveLink: "https://github.com/kodurisaivishnu/wanderlust-mern-project-",
    githubLink: "https://github.com/kodurisaivishnu/wanderlust-mern-project-",
  },
  {
    title: "Personal Portfolio",
    image: "/p3_portfolio.png",
    description: "This is my personal portfolio to showcase my skills & works.",
    liveLink: "https://socket-chat-app-iyex.onrender.com/",
    githubLink: "https://github.com/kodurisaivishnu/Socket-chat-app",
  },
];

const ProjectCarousel = () => {
  return (
    <section className="px-6 md:px-16 py-12 text-center bg-gradient-to-br from-gray-100 to-white dark:from-gray-900 dark:to-black">
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 to-indigo-600"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}>
        My Projects
      </motion.h2>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]} 
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          // reverseDirection: true, //  Scroll left
        }}
        loop={true}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700 flex flex-col h-full"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200 }}>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="flex justify-between items-center px-4 py-3 bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 dark:text-white hover:text-purple-600 flex items-center gap-1 text-sm font-medium">
                  <GithubIcon size={18} />
                  GitHub
                </a>
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline flex items-center gap-1 text-sm font-medium">
                  <ExternalLink size={18} />
                  Live Demo
                </a>
              </div>
              <div className="p-4 flex flex-col justify-between flex-grow">
                <h3 className="text-lg font-semibold text-purple-700 dark:text-purple-400 mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {project.description}
                </p>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ProjectCarousel;
