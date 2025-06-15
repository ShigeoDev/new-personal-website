"use client";

import Image from "next/image";
import { motion } from "motion/react";
import Star from "../components/star";
import Person from "../components/person";

export default function Home() {

  return (
    <motion.div
      initial={{ filter: "blur(15px)" }}
      animate={{ filter: "blur(0px)" }}
      transition={{ duration: 2, ease: "easeOut" }}
      className="h-screen w-screen bg-radial from-[#424242] to-[#000000] overflow-clip"
    >
      <div className="flex justify-center items-end h-screen relative">
        <Person />
      </div>
    </motion.div >
  );
}
