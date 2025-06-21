import { motion, Variant } from "motion/react";

type sentenceVariantsType = {
  hidden: Variant;
  visible: Variant;
};

export function sentenceVariants(stagger: number): sentenceVariantsType {

  return {
    hidden: {},
    // change staggerChildren variable to speed up or slow down typing.
    visible: { opacity: 1, transition: { staggerChildren: stagger } }
  }
};

export const letterVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { opacity: { duration: 0 } } }
};

export const Typewriter = ({ text, className, stagger }: { text: string, className: string, stagger: number}) => (
  <motion.p
    key={text}
    variants={sentenceVariants(stagger)}
    initial="hidden"
    animate="visible"
    className={className}
  >
    {text.split("").map((char, i) => (
      <motion.span key={`${char}-${i}`} variants={letterVariants}>
        {char}
      </motion.span>
    ))}
  </motion.p>
);
