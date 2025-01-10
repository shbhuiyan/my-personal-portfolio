"use client";
import { motion } from "framer-motion";

const MyPhoto = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.5, ease: "easeIn" },
        }}
      >
        <div className="w-[298px] h-[298px] xl:w-[420px] xl:h-[420px] ring-8 ring-accent rounded-full">
          <img
            src="https://i.ibb.co.com/fCcjwk0/My-Profile.png"
            quality={100}
            alt="sakhawat;s image"
            className="object-contain"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default MyPhoto;
