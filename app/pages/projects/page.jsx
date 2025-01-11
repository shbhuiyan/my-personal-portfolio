"use client";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BsArrowUpRight } from "react-icons/bs";




const Projects = () => {
  const [projects , setProjects] = useState([])


  useEffect(() => {
    fetch('/projects.json')
    .then(res => res.json())
    .then(data => setProjects(data))
  },[])


    return (
          <motion.section
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
            }}
            className="min-h-[80vh] flex flex-col-reverse justify-center py-12 xl:px-0"
          >
            <div className="container mx-auto">
              <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                <div className="w-full xl:w-[50%] h-[460px] flex flex-col xl:justify-between">
                  <div className="">
                    {
                      projects.map(project => {
                        return <div key={project.id} className="">
                          <div className="text-8xl leading-none font-extrabold text-outline">{project.id}</div>
                          <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">{project?.projectName}</h2>
                          <p className="text-white/60">{project.projectsTitle}</p>
                          <ul className="flex gap-4">
                            {
                              project.technologies.map((tech , i) => {
                                return <li key={i} className="text-lg text-accent">
                                  {tech}
                                </li>
                              })
                            }
                          </ul>
                          <div className="border border-white/20"></div>
                          {/* Button */}
                          <div className="">
                            {/* Live Preview */}
                            <Link href={project.liveLink}>
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
                            <Link href={project.githubLink}>
                              <TooltipProvider delayDuration={100}>
                                <Tooltip>
                                  <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                  <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                                  </TooltipTrigger>
                                  <TooltipContent>
                                    <p>Github repo</p>
                                  </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>
                            </Link>
                          </div>
                        </div>
                      })
                    }
                  </div>
                </div>
                <div className="w-full xl:w-[50%]">slider</div>
              </div>
            </div>
          </motion.section>
    );
  };

export default Projects;