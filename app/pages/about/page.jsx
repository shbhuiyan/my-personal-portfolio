"use client";

import { FaCss3, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import { SiJavascript, SiMongodb, SiTailwindcss } from "react-icons/si";
import { RiFirebaseFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";


// about me data
const aboutMe = {
    title: "About Me",
    info:[
        {
            fieldName: "Name",
            fieldValue: "Sakhawat Hossen",
        },
        {
            fieldName: "Role",
            fieldValue: "Frontend Web Developer",
        },
        {
            fieldName: "Mobile",
            fieldValue: "(+880) 1869 997 997",
        },
        {
            fieldName: "Email",
            fieldValue: "shbhuiyan997@gmail.com",
        },
        {
            fieldName: "Location",
            fieldValue: "Feni,Chattogram,Bangladesh.",
        },
        {
            fieldName: "Languages",
            fieldValue: "Bangla, Hindi, English.",
        },
    ]
}

// Educations data
const educations = {
    title: "Education",
    description: "Alongside my regular studies, I am advancing myself in the web development sector through online courses. These courses help me stay updated with new technologies and trends, while continuously improving my skills. I am gaining expertise in technologies like HTML, CSS, JavaScript, and React, which are shaping me into a successful frontend developer.",
    info:[
        {
            institution: "Tanjimul Ummah Madrasah",
            degree: "Dakhil / SSC",
            passedYear: "2020"
        },
        {
            institution: "Tamirul Millat Kamil Madrasah",
            degree: "Alim / HSC",
            passedYear: "2022"
        },
        {
            institution: "International Islamic University Ctg",
            degree: "B.A Honours ELL",
            passedYear: "2024-2027"
        },
        {
            institution: "Programming Hero Online Course",
            degree: "Frontend web Development",
            passedYear: "2024"
        },
    ]
}

// skills data
const skills = {
    title: "My skills",
    description: "I am a dedicated frontend developer, skilled in creating user-friendly, responsive web applications. My expertise includes HTML, CSS, Tailwind CSS, JavaScript, and React. Additionally, I have other skills that help me provide more versatile and innovative solutions.",
    skillList:[
        {
            icon:<FaHtml5 />,
            name:"html 5"
        },
        {
            icon:<FaCss3 />,
            name:"css 3"
        },
        {
            icon:<SiTailwindcss />,
            name:"Tailwind Css"
        },
        {
            icon:<SiJavascript />,
            name:"JavaScript"
        },
        {
            icon:<FaReact />,
            name:"React.js"
        },
        {
            icon:<RiFirebaseFill />,
            name:"Firebase"
        },
        {
            icon:<SiMongodb />,
            name:"MongoDB"
        },
        {
            icon:<FaNodeJs />,
            name:"Node.Js"
        },
    ]
}


const About = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
            }}
            className="min-h-[80vh] flex flex-col justify-center py-12 lg:py-0"
          >

            <div className="container mx-auto">
                <Tabs defaultValue="skills" className="flex flex-col lg:flex-row gap-14">
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto lg:mx-0 gap-6">
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="about">About Me</TabsTrigger>
                    </TabsList>

                    {/* Content */}
                    <div className="min-h-[70vh] w-full">
                        {/* skills */}
                        <TabsContent value="skills" className="w-full h-full">
                            <div className="flex flex-col gap-[30px]">
                                <div className="flex flex-col gap-[30px] text-center lg:text-left">
                                    <h3 className="text-4xl font-bold">{skills.title}</h3>
                                    <p className="max-w-[600px] mx-auto lg:mx-0 text-white/60">{skills.description}</p>
                                </div>
                                <ul className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-[30px]">
                                    {
                                        skills.skillList.map((skill , i) => {
                                            return <li key={i}>
                                                <TooltipProvider delayDuration={100}>
                                                    <Tooltip>
                                                        <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                                            <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                                                        </TooltipTrigger>
                                                        <TooltipContent>
                                                            <p className="capitalize text-white">{skill.name}</p>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                            </li>
                                        })
                                    }
                                </ul>
                            </div>
                        </TabsContent>

                        {/* education */}
                        <TabsContent value="education" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center lg:text-left">
                                <h3 className="text-4xl font-bold"> {educations.title} </h3>
                                <p className="max-w-[600px] mx-auto lg:mx-0 text-white/60"> {educations.description} </p>
                                <ScrollArea className="h-[300px] lg:h-[200px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {
                                            educations.info.map((item , i) => {
                                                return <li key={i} className="bg-[#232329] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                                    <span className="text-accent">{item.passedYear}</span>
                                                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                                                    <div className="flex items-baseline lg:items-center gap-3">
                                                        {/* dot */}
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                        <p className="text-white/60">{item.institution}</p>
                                                    </div>
                                                </li>
                                            })
                                        }
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        {/* about */}
                        <TabsContent value="about" className="w-full text-center lg:text-left">
                            <div className="flex flex-col gap-[30px]">
                                <h3 className="text-4xl font-bold">{aboutMe.title}</h3>
                                <div className="max-w-[750px] mx-auto lg:mx-0 text-white/60 space-y-2">
                                <p>Hello, I’m <strong className="text-white">Sakhawat Hossen</strong>, a passionate <strong className="text-white">Frontend Web Developer</strong> with a keen eye for creating intuitive, user-friendly, and responsive web experiences. With a strong foundation in modern web technologies like React and expertise in building seamless interfaces, I’m dedicated to turning creative ideas into functional digital solutions.</p>
                                <p>When I’m not coding, you’ll likely find me indulging in my favorite hobbies. I love playing football, which keeps me active and sharpens my teamwork skills. I enjoy watching movies, a great way to relax and explore different stories and perspectives. Riding and traveling fuel my adventurous spirit, allowing me to experience new places, meet diverse people, and gain fresh inspiration for my projects.</p>
                                <p>If you’re interested in collaborating or simply want to connect, feel free to reach out! Let’s create something amazing together.</p>
                                </div>
                                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[800px] mx-auto xl:mx-0">
                                    {
                                        aboutMe.info.map((item , i) => {
                                            return <li key={i} className="flex items-center justify-center xl:justify-start gap-2">
                                                <span className="text-white/60">{item.fieldName}:</span> 
                                                <span className="text-lg">{item.fieldValue}</span>
                                            </li>
                                        })
                                    }
                                </ul>
                            </div>
                        </TabsContent>

                    </div>
                </Tabs>
            </div>

          </motion.div>
    );
};

export default About;