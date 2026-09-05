"use client";

import { AnimatePresence, motion, useReducedMotion, type Variants } from "framer-motion";
import { useSection, SECTIONS_ANCHOR_ID, type SectionKey } from "@/lib/context/SectionContext";
import { useTranslations } from "@/lib/context/LanguageContext";
import CurriculoSection from "@/components/curriculo/CurriculoSection";
import ProjetosSection from "@/components/projetos/ProjetosSection";

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, y: -12, transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] } },
};

const reducedVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.15 } },
  exit: { opacity: 0, transition: { duration: 0.1 } },
};

export default function SectionSwitcher() {
  const { activeSection, toggleSection } = useSection();
  const { t } = useTranslations();
  const reduceMotion = useReducedMotion();
  const variants = reduceMotion ? reducedVariants : sectionVariants;

  const CARDS: { key: SectionKey; label: string; description: string }[] = [
    {
      key: "curriculo",
      label: t.switcher.curriculoLabel,
      description: t.switcher.curriculoDescription,
    },
    {
      key: "projetos",
      label: t.switcher.projetosLabel,
      description: t.switcher.projetosDescription,
    },
  ];

  return (
    <section id={SECTIONS_ANCHOR_ID} className="scroll-mt-24 border-t border-neutral-200">
      <div className="mx-auto max-w-content px-6 py-14 md:px-10">
        <div className="grid gap-px overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-200 sm:grid-cols-2">
          {CARDS.map((card, index) => {
            const active = activeSection === card.key;
            const isFirst = index === 0;
            const cornerClasses = isFirst
              ? "rounded-tl-3xl rounded-tr-3xl sm:rounded-tr-none sm:rounded-bl-3xl"
              : "rounded-bl-3xl rounded-br-3xl sm:rounded-bl-none sm:rounded-tr-3xl";
            return (
              <button
                key={card.key}
                type="button"
                onClick={() => toggleSection(card.key)}
                aria-pressed={active}
                className={`group flex h-full flex-col justify-between gap-8 border-2 bg-white px-8 py-10 text-left transition-colors duration-300 ${cornerClasses} ${
                  active
                    ? "border-ink"
                    : "border-transparent hover:bg-neutral-50"
                }`}
              >
                <span className="text-xs uppercase tracking-[0.2em] text-neutral-600">
                  {active ? t.switcher.selected : t.switcher.viewMore}
                </span>
                <div>
                  <p className="font-serif text-2xl text-ink">{card.label}</p>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                    {card.description}
                  </p>
                </div>
                <span
                  className={`text-sm transition-transform duration-300 ${
                    active
                      ? "text-neutral-900"
                      : "text-neutral-600 group-hover:translate-x-1 group-hover:text-neutral-900"
                  }`}
                >
                  {active ? t.switcher.close : t.switcher.open}
                </span>
              </button>
            );
          })}
        </div>

        <motion.div
          layout
          transition={{ duration: reduceMotion ? 0 : 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden"
        >
          <AnimatePresence mode="wait" initial={false}>
            {activeSection && (
              <motion.div
                key={activeSection}
                variants={variants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="pt-14"
              >
                {activeSection === "curriculo" ? <CurriculoSection /> : <ProjetosSection />}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
