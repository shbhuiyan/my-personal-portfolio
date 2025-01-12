"use client";
import Social from "@/components/Social/Social";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import CountUp from "react-countup";
import Image from "next/image";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const stats = [
  {
    num: 0,
    text: "Years of experience",
  },
  {
    num: 22,
    text: "Projects Completed",
  },
  {
    num: 8,
    text: "Technologies learned",
  },
  {
    num: 300,
    text: "Code Commits",
  },
];

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between lg:pt-8 lg:pb-20">

          {/* Text for banner */}
          <motion.div initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { delay: 2, duration: 0.5, ease: "easeIn" }}} className="text-center lg:text-left">
            <span className="text-xl">

              <Typewriter words={['Frontend web Developer', 'Fullstack web Developer', 'JavaScript web Developer', 'React web Developer']} loop={0} cursor cursorStyle='|' typeSpeed={80} deleteSpeed={50} delaySpeed={1500} />

            </span>
            <h1 className="h1 mb-6">
              Hello I'm <br />{" "}
              <span className="text-accent">Sakhawat Hossen</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I'm a passionate Frontend Web Developer specializing in React.js,
              JavaScript, and responsive design.
            </p>

            {/* btn and social */}
            <div className="flex flex-col lg:flex-row items-center gap-6">
              <a href="Resume of Sakhawat.pdf" download="Resume of Sakhawat.pdf">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span>Download Resume</span>
                <FiDownload />
              </Button>
              </a>
              <div className="mb-8 lg:mb-0">
                <Social />
              </div>
            </div>
          </motion.div>

          {/* photo for banner */}
          <div className="my-8 lg:my-0">
            <div className="w-full h-full relative">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { delay: 2, duration: 0.5, ease: "easeIn" },
                }}
              >
                <div className="w-[298px] h-[298px] xl:w-[420px] xl:h-[420px] ring-8 ring-accent rounded-full">
                  <Image
                    src="/assets/My-Profile.png"
                    priority
                    quality={100}
                    fill
                    alt="sakhawat;s image"
                    className="object-contain"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* stats */}
      <div className="pt-4 pb-12 lg:pt-20">
        <div className="container mx-auto">
          <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto lg:max-w-none">
            {stats.map((item, i) => {
              return (
                <div
                  className="flex-1 flex gap-4 items-center justify-center lg:justify-start"
                  key={i}
                >
                  <CountUp
                    end={item.num}
                    duration={5}
                    delay={2}
                    className="text-4xl lg:text-6xl font-extrabold"
                  />
                  <p
                    className={`${
                      item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                    } leading-snug text-white/80`}
                  >
                    {" "}
                    {item.text}{" "}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
