import { animate, motion } from "framer-motion";

// variants
const stairAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};

// calculate the reverse index for staggered delay
const reverseIndex = (i) => {
  const totalSteps = 6;
  return totalSteps - i - 1;
};

const Stairs = () => {
  return (
    <>
      {[...Array(6)].map((_, i) => {
        return (
          <motion.div
            key={i}
            variants={stairAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.5,
              ease: "easeInOut",
              delay: reverseIndex(i) * 0.1,
            }}
            className="h-full w-full bg-rose-500 relative"
          />
        );
      })}
    </>
  );
};

export default Stairs;
