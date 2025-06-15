import Star from "./star";
import { motion } from "motion/react";

export default function AnimatedStar() {
  return (
    <motion.div
      initial={{ rotate: 360 }}
      animate={{ rotate: 0 }}
      transition={{
        duration: 2, // Fast initial spin
        ease: "easeOut",
        repeat: 0,     // Only once for the initial spin
      }}
      className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[min(100vw,100vh)] h-[min(100vw,100vh)]"
    >
      <motion.div
        initial={{ rotate: 360 }}
        animate={{ rotate: 0 }}
        transition={{
          duration: 20, // Slow spin
          ease: "linear",
          repeat: Infinity, // infinite 
          delay: 1.95
        }}
      >
        <motion.div
          whileHover={{
            scale: 1.25,
            transition: {
              ease: "easeInOut",
              duration: 0.25,
            }
          }}
          className="pointer-events-none flex justify-center items-center"
        >
          <Star />
        </ motion.div>
      </ motion.div>
    </ motion.div>
  );
}
