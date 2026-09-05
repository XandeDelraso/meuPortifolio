"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/context/LanguageContext";
import type { Locale } from "@/lib/i18n/translations";

const OPTIONS: { key: Locale; label: string }[] = [
  { key: "en", label: "EN" },
  { key: "pt", label: "PT" },
];

export default function LanguagePill() {
  const { targetLocale, toggleLocale } = useLanguage();

  return (
    <div
      role="group"
      aria-label="Idioma / Language"
      className="inline-flex items-center gap-0.5 rounded-full border border-neutral-300 p-1 text-xs font-medium tracking-wide"
    >
      {OPTIONS.map((option) => {
        const active = targetLocale === option.key;
        return (
          <button
            key={option.key}
            type="button"
            onClick={() => {
              if (!active) toggleLocale();
            }}
            aria-pressed={active}
            className="relative flex h-7 w-9 items-center justify-center rounded-full"
          >
            {active && (
              <motion.span
                layoutId="language-pill-bg"
                className="absolute inset-0 rounded-full bg-neutral-900"
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              />
            )}
            <motion.span
              whileTap={{ scale: 0.92 }}
              className={`relative z-10 transition-colors duration-300 ${
                active ? "text-white" : "text-neutral-500"
              }`}
            >
              {option.label}
            </motion.span>
          </button>
        );
      })}
    </div>
  );
}
