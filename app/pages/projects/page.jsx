"use client";
import { motion } from "framer-motion";

const Projects = () => {
    return (
      <section className="min-h-[80vh] flex flex-col justify-center py-12 lg:py-0">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
            }}
          >
            projects
          </motion.div>
        </div>
      </section>
    );
  };

export default Projects;