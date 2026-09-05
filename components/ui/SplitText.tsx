"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

const container: Variants = {
  hidden: {},
  visible: (delay: number) => ({
    transition: { staggerChildren: 0.045, delayChildren: delay },
  }),
};

const letter: Variants = {
  hidden: { opacity: 0, y: "0.55em" },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

type SplitTextProps = {
  text: string;
  as?: "h1" | "h2" | "span";
  className?: string;
  delay?: number;
};

export default function SplitText({ text, as = "span", className, delay = 0 }: SplitTextProps) {
  const reduceMotion = useReducedMotion();
  const MotionTag = motion[as];

  if (reduceMotion) {
    const Tag = as;
    return <Tag className={className}>{text}</Tag>;
  }

  return (
    <MotionTag
      className={className}
      aria-label={text}
      initial="hidden"
      animate="visible"
      custom={delay}
      variants={container}
      style={{ overflow: "hidden" }}
    >
      {Array.from(text).map((char, i) => (
        <motion.span
          key={i}
          aria-hidden="true"
          variants={letter}
          className="inline-block"
        >
          {char === " " ? " " : char}
        </motion.span>
      ))}
    </MotionTag>
  );
}
