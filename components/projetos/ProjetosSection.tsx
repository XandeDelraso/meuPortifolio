"use client";

import Reveal from "@/components/ui/Reveal";
import ProjectCard from "@/components/projetos/ProjectCard";
import { useTranslations } from "@/lib/context/LanguageContext";
import { projects } from "@/lib/data/projects";

export default function ProjetosSection() {
  const { t } = useTranslations();

  return (
    <div>
      <Reveal>
        <span className="text-xs uppercase tracking-[0.2em] text-neutral-600">
          {t.projects.sectionLabel}
        </span>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-neutral-600">
          {t.projects.intro}
        </p>
      </Reveal>

      <div className="mt-10 flex flex-col gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </div>
    </div>
  );
}
