"use client";

import Image from "next/image";
import { motion } from "motion/react";
import Star from "../components/star";

export default function Home() {

  return (
    <motion.div
      initial={{ filter: "blur(15px)" }}
      animate={{ filter: "blur(0px)" }}
      transition={{ duration: 2, ease: "easeOut" }}
      className="h-screen w-screen bg-radial from-[#424242] to-[#000000] text-white"
    >
      <div className="flex justify-center items-center h-screen w-full">
        <Image src="/pic.png" width={360} height={540} alt="me" className="w-full h-full object-contain" />
        <motion.div
          initial={{ rotate: 360 }}
          animate={{ rotate: 0 }}
          transition={{
            duration: 2, // Fast initial spin
            ease: "easeOut",
            repeat: 0,     // Only once for the initial spin
          }}
          className="absolute left-1/2 transform -translate-x-1/2 object-contain"
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
              className="pointer-events-none"
            >
              <Star />
            </ motion.div>
          </ motion.div>
        </ motion.div>
      </div>
    </motion.div >
  );
}
