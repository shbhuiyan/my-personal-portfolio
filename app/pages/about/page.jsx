"use client";

import { FaCss3, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import { SiJavascript, SiMongodb, SiTailwindcss } from "react-icons/si";
import { RiFirebaseFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";


// about me data
const aboutMe = {
    title: "About Me",
    description: "Hello, I’m Sakhawat Hossen Fahad, a passionate Frontend Web Developer with a keen eye for creating intuitive, user-friendly, and responsive web experiences. With a strong foundation in modern web technologies like React and expertise in building seamless interfaces, I’m dedicated to turning creative ideas into functional digital solutions.When I’m not coding, you’ll likely find me indulging in my favorite hobbies. I love playing football, which keeps me active and sharpens my teamwork skills. I enjoy watching movies, a great way to relax and explore different stories and perspectives. Riding and traveling fuel my adventurous spirit, allowing me to experience new places, meet diverse people, and gain fresh inspiration for my projects.If you’re interested in collaborating or simply want to connect, feel free to reach out! Let’s create something amazing together.",
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
    icon:"",
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
            institution: "International Islamic University Chittagong",
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
            name:"HTML 5"
        },
        {
            icon:<FaCss3 />,
            name:"CSS 3"
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
                        <TabsContent value="skills" className="w-full">
                            <div className="flex flex-col gap-7 text-center lg:text-left">
                                <h3 className="text-4xl font-bold"> {skills.title} </h3>
                                <p className="max-w-[600px] mx-auto lg:mx-0 text-white/60"> {skills.description} </p>
                                <ScrollArea className="h-[400px]">
                                    <ul>
                                        {
                                            
                                        }
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        {/* education */}
                        <TabsContent value="education" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center lg:text-left">
                                <h3 className="text-4xl font-bold"> {educations.title} </h3>
                                <p className="max-w-[600px] mx-auto lg:mx-0 text-white/60"> {educations.description} </p>
                                <ScrollArea className="h-[200px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {
                                            educations.info.map((item , i) => {
                                                return <li key={i}>
                                                    <span>{item.passedYear}</span>
                                                    <h3>{item.degree}</h3>
                                                    <div className="">
                                                        {/* dot */}
                                                        <span></span>
                                                        <p>{item.institution}</p>
                                                    </div>
                                                </li>
                                            })
                                        }
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        {/* about */}
                        <TabsContent value="about" className="w-full">
                            about
                        </TabsContent>

                    </div>
                </Tabs>
            </div>

          </motion.div>
    );
};

export default About;