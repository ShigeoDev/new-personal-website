import { motion } from "motion/react";

export default function TitleLine({className, width = 100, height = 100} : {className?: string, width?: number, height?: number}) {
  return (

    <svg className={className} width={width + "%"} height={height + "%"} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <motion.path
        d="M100 50 L75 25 L0 25"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.5, ease: "linear", delay: 2}}
      />
    </svg>
  );
}
