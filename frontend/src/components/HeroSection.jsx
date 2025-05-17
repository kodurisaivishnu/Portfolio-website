import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Intro from "./Intro";
import { motion } from "framer-motion";

const slides = [
  {
    src: "/p0_cooding.png",
    alt: "Cooding Profiles",
    label: "Cooding Profiles",
  },
  {
    src: "/p1_vitual_interview.png",
    alt: "Virtual Interview",
    label: "AI Virtual Interview",
  },
  { src: "/p2_chat_app.png", alt: "Chat App", label: "Real-time Chat App" },
  { src: "/p3_portfolio.png", alt: "Portfolio", label: "My Portfolio" },
  { src: "/p4_air_bnb.png", alt: "Airbnb Clone", label: "Airbnb Clone" },
];

const HeroSection = () => {
  return (
    <motion.section
      className="min-h-[80vh] px-8 py-10 flex flex-col items-center justify-center text-center"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}>
      {/* Intro Text */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}>
        <Intro />
      </motion.div>

      {/* Carousel and Profile Image */}
      <motion.div
        className="flex flex-col md:flex-row items-center justify-between w-full gap-10 mt-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}>
        {/* Carousel */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}>
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 2500 }}
            loop
            className="rounded-lg shadow-md">
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-full h-64 bg-white p-4 rounded-lg flex items-center justify-center">
                  <img
                    src={slide.src}
                    alt={slide.alt}
                    className="w-full h-full object-contain rounded-lg"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white text-sm md:text-lg py-2 px-4 rounded-b-lg">
                    {slide.label}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}>
          <img
            src="/image.png"
            alt="Your Profile"
            className="rounded-xl shadow-lg w-72 h-auto object-cover"
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;
