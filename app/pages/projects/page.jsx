"use client";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { FaChevronLeft, FaChevronRight, FaGithub } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';


const projects = [
  {
    id: "01",
    projectImage: "https://i.ibb.co.com/PDh3zYs/my-portfolio.png",
    projectName: "My personal portfolio",
    technologies: [
      "React",
      "Next.Js",
      "chadcn/ui",
      "JavaScript",
      "TailwindCss",
    ],
    liveLink: "https://sakhawat-h.netlify.app",
    githubLink: "https://github.com/shbhuiyan/my-personal-portfolio",
    details:
      "This is my personal portfolio, a reflection of my professional journey and skills as a frontend web developer. It represents my passion for creating dynamic, responsive, and user-centric web solutions.",
  },
  {
    id: "02",
    projectImage: "https://i.ibb.co.com/fpRdywp/a9.png",
    projectName: "Career Counseling",
    technologies: ["React", "Node.Js", "Express", "MongoDB", "Tailwind"],
    liveLink: "https://my-career-hub-assignment-in-ph.netlify.app",
    githubLink: "https://github.com/shbhuiyan/assignment9-in-ph",
    details:
      "A platform that offers personalized career guidance and resources, empowering users to make well-informed professional decisions by providing tailored advice, actionable insights, and tools to explore, plan, and advance their career paths.",
  },
  {
    id: "03",
    projectImage: "https://i.ibb.co.com/1ncLSbg/a10.png",
    projectName: "Sports Equipment Store",
    technologies: ["React", "Node", "Express", "MongoDB", "Tailwind"],
    liveLink: "https://sports-hub-a-10-in-ph.netlify.app",
    githubLink: "https://github.com/shbhuiyan/assignment10-client-side-in-ph",
    details:
      "A responsive e-commerce website for browsing, purchasing, and reviewing sports equipment, featuring user authentication, and comprehensive product management tools to enhance the shopping experience and streamline inventory control.",
  },
  {
    id: "04",
    projectImage: "https://i.ibb.co.com/xD4KZX3/a11.png",
    projectName: "Product Recommendation",
    technologies: ["React", "Express", "MongoDB", "Tailwind", "JWT", "Node.Js"],
    liveLink: "https://b-10-a11-ask-me-queries.netlify.app",
    githubLink: "https://github.com/shbhuiyan/assisgnment11-client-side-in-ph",
    details:
      "A platform that enables users to manage their queries and recommendations, offering secure login, query management, and a responsive design, providing a seamless experience for users to interact and manage their preferences. ",
  },
];

const Projects = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentSlideIndex = swiper.activeIndex;
    setProject(projects[currentSlideIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          {/* left side */}
          <div className="w-full h-[460px] xl:w-[50%] flex flex-col order-2 xl:order-none xl:justify-between">
            <div key={project.id} className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-outline">
                {project.id}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project?.projectName}
              </h2>
              <p className="text-white/60">{project?.details}</p>
              {/* technologies map */}
              <ul className="flex gap-4 flex-wrap">
                {project?.technologies?.map((tech, i) => {
                  return (
                    <li key={i} className="text-lg text-accent">
                      {tech}
                    </li>
                  );
                })}
              </ul>
              <div className="border border-white/20"></div>
              {/* Button */}
              <div className="flex items-center gap-4">
                {/* Live Preview */}
                <Link href={`${project?.liveLink}`}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Preview</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                {/* Github Preview */}
                <Link href={`${project.githubLink}`}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <FaGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repo</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>

          {/* right side */}
          <div className="w-full xl:w-[50%]">
            <Swiper
            navigation={true} modules={[Navigation]}
              spaceBetween={30}
              slidesPerView={1}
              onSlideChange={handleSlideChange}
              className="mySwiper mb-12"
            >
              {projects.map((project) => {
                return (
                  <SwiperSlide key={project?.id}>
                    <div className="flex justify-center items-center border-2 border-accent rounded-lg p-4">

                      {/* image */}
                      <div className="rounded-lg w-full h-full">
                        <img
                          className="rounded-lg h-full"
                          src={project.projectImage}
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
