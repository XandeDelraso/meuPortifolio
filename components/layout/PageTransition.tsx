"use client";

import { AnimatePresence, motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { useLanguage } from "@/lib/context/LanguageContext";

const overlayVariants: Variants = {
  initial: { scaleY: 1 },
  animate: {
    scaleY: 0,
    transition: { duration: 0.6, delay: 0.15, ease: [0.76, 0, 0.24, 1] },
  },
  exit: {
    scaleY: 1,
    transition: { duration: 0.45, ease: [0.76, 0, 0.24, 1] },
  },
};

const contentVariants: Variants = {
  initial: { opacity: 0, y: 24 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    y: -12,
    transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function PageTransition({ children }: { children: ReactNode }) {
  const { targetLocale, commitLocale } = useLanguage();
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <>{children}</>;
  }

  return (
    <AnimatePresence mode="wait" initial={false} onExitComplete={commitLocale}>
      <motion.div key={targetLocale} initial="initial" animate="animate" exit="exit" className="relative">
        <motion.div
          aria-hidden
          variants={overlayVariants}
          className="pointer-events-none fixed inset-0 z-[70] origin-top bg-ink"
        />
        <motion.div variants={contentVariants}>{children}</motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
