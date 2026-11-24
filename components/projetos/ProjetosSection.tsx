"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import ProjectCard from "@/components/projetos/ProjectCard";
import { useTranslations } from "@/lib/context/LanguageContext";
import { projects, professionalProjects } from "@/lib/data/projects";

type ProjectTab = "pessoais" | "profissionais";

const TAB_ORDER: ProjectTab[] = ["pessoais", "profissionais"];

export default function ProjetosSection() {
  const { t } = useTranslations();
  const reduceMotion = useReducedMotion();
  const [activeTab, setActiveTab] = useState<ProjectTab>("pessoais");
  const tabRefs = useRef<Record<ProjectTab, HTMLButtonElement | null>>({
    pessoais: null,
    profissionais: null,
  });

  const tabs: { key: ProjectTab; label: string; count: number }[] = [
    { key: "pessoais", label: t.projects.tabPersonal, count: projects.length },
    { key: "profissionais", label: t.projects.tabProfessional, count: professionalProjects.length },
  ];

  const list = activeTab === "pessoais" ? projects : professionalProjects;
  const intro = activeTab === "pessoais" ? t.projects.intro : t.projects.professionalIntro;

  // Navegação por setas entre as abas (padrão WAI-ARIA de tabs).
  function handleKeyDown(event: KeyboardEvent<HTMLButtonElement>) {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
    event.preventDefault();
    const current = TAB_ORDER.indexOf(activeTab);
    const delta = event.key === "ArrowRight" ? 1 : -1;
    const next = TAB_ORDER[(current + delta + TAB_ORDER.length) % TAB_ORDER.length];
    setActiveTab(next);
    tabRefs.current[next]?.focus();
  }

  return (
    <div>
      <Reveal>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <span className="text-xs uppercase tracking-[0.2em] text-neutral-600">
            {t.projects.sectionLabel}
          </span>

          <div
            role="tablist"
            aria-label={t.projects.tabsLabel}
            className="inline-flex self-start rounded-full border border-neutral-300 bg-white p-1"
          >
            {tabs.map((tab) => {
              const active = activeTab === tab.key;
              return (
                <button
                  key={tab.key}
                  ref={(el) => {
                    tabRefs.current[tab.key] = el;
                  }}
                  id={`projetos-tab-${tab.key}`}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  aria-controls="projetos-tabpanel"
                  tabIndex={active ? 0 : -1}
                  onClick={() => setActiveTab(tab.key)}
                  onKeyDown={handleKeyDown}
                  className={`relative rounded-full px-5 py-2 text-sm tracking-wide transition-colors duration-300 ${
                    active ? "text-white" : "text-neutral-600 hover:text-neutral-900"
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="projetos-tab-pill"
                      className="absolute inset-0 rounded-full bg-ink"
                      transition={{ duration: reduceMotion ? 0 : 0.35, ease: [0.22, 1, 0.36, 1] }}
                    />
                  )}
                  <span className="relative z-10">
                    {tab.label}
                    <span
                      className={`ml-2 font-mono text-[0.7rem] ${
                        active ? "text-neutral-300" : "text-neutral-500"
                      }`}
                    >
                      {String(tab.count).padStart(2, "0")}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </Reveal>

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={activeTab}
          id="projetos-tabpanel"
          role="tabpanel"
          aria-labelledby={`projetos-tab-${activeTab}`}
          initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
          transition={{ duration: reduceMotion ? 0.1 : 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-neutral-600">{intro}</p>

          <div className="mt-10 flex flex-col gap-8">
            {list.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
