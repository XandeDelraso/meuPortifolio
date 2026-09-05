"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import SplitText from "@/components/ui/SplitText";
import ContactModal from "@/components/ui/ContactModal";
import { useSection } from "@/lib/context/SectionContext";
import { useTranslations } from "@/lib/context/LanguageContext";

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const { openSection } = useSection();
  const { t } = useTranslations();
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <section className="relative overflow-hidden">
      <div className="relative z-10 mx-auto grid max-w-content gap-12 px-6 py-16 md:grid-cols-[1.15fr_0.85fr] md:items-center md:gap-10 md:px-10 md:py-24">
        <div className="flex flex-col">
          <SplitText
            as="h1"
            text="Alexandre"
            delay={0.15}
            className="text-balance font-serif text-[clamp(3rem,8vw,6rem)] font-medium leading-[0.95] tracking-tight text-ink"
          />

          <Reveal delay={0.18}>
            <p className="mt-6 text-[clamp(1.1rem,4vw,1.6rem)] font-medium leading-snug text-neutral-600">
              <span className="block whitespace-nowrap">{t.hero.headlineLine1}</span>
              <span className="block whitespace-nowrap">{t.hero.headlineLine2}</span>
            </p>
          </Reveal>

          <Reveal delay={0.26}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button onClick={() => setContactOpen(true)} variant="primary">
                {t.hero.ctaContact}
              </Button>
              <Button onClick={() => openSection("curriculo")} variant="outline">
                {t.hero.ctaResume}
              </Button>
              <Button onClick={() => openSection("projetos")} variant="outline">
                {t.hero.ctaProjects}
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.4} className="mt-14">
            <button
              type="button"
              onClick={() => openSection("curriculo")}
              className="group inline-flex items-center gap-4 text-xs uppercase tracking-[0.32em] text-neutral-600 transition-colors duration-300 hover:text-neutral-900"
            >
              <span>{t.hero.scrollIndicator}</span>
              <motion.span
                aria-hidden
                animate={reduceMotion ? undefined : { y: [0, 6, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                className="inline-block"
              >
                ↓
              </motion.span>
            </button>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="relative mx-auto w-full max-w-sm md:max-w-none">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-neutral-200">
            <Image
              src="/images/alexandre-eu.jpg"
              alt={t.hero.photoAlt}
              fill
              priority
              sizes="(min-width: 768px) 40vw, 80vw"
              className="object-cover grayscale contrast-[1.05]"
            />
          </div>
        </Reveal>
      </div>

      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </section>
  );
}
