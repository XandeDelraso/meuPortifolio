"use client";

import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import Tag from "@/components/ui/Tag";
import { useTranslations } from "@/lib/context/LanguageContext";
import type { Project } from "@/lib/data/projects";

export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const { t, locale } = useTranslations();

  return (
    <Reveal delay={index * 0.1}>
      <a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group grid gap-8 overflow-hidden rounded-3xl border border-neutral-200 bg-white p-2 transition-colors duration-300 hover:border-neutral-400 md:grid-cols-2 md:p-2"
      >
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-neutral-100 md:aspect-auto">
          <Image
            src={project.image}
            alt={project.imageAlt[locale]}
            fill
            sizes="(min-width: 768px) 45vw, 90vw"
            className="object-cover object-top transition-transform duration-500 ease-editorial group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-end justify-between bg-black/0 p-6 opacity-0 transition-all duration-300 group-hover:bg-black/50 group-hover:opacity-100">
            <span className="text-sm tracking-wide text-white">
              {t.projects.viewProject}
            </span>
          </div>
        </div>

        <div className="flex flex-col justify-center gap-4 px-4 py-6 md:px-6 md:py-10">
          <h3 className="font-serif text-3xl text-ink md:text-4xl">
            {project.title}
          </h3>

          <p className="text-sm leading-relaxed text-neutral-600">
            {project.description[locale]}
          </p>

          <p className="text-sm leading-relaxed text-neutral-600">
            {project.details[locale]}
          </p>

          <div className="mt-2 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Tag key={tag} label={tag} />
            ))}
          </div>

          <div className="mt-2 flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <span className="text-neutral-700 underline decoration-neutral-300 underline-offset-4 transition-colors duration-300 group-hover:text-neutral-900 group-hover:decoration-neutral-600">
              {t.projects.viewSite}
            </span>
            {project.repoHref && (
              <a
                href={project.repoHref}
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-10 text-neutral-600 underline decoration-neutral-300 underline-offset-4 transition-colors duration-300 hover:text-neutral-900"
              >
                {t.projects.repository}
              </a>
            )}
          </div>
        </div>
      </a>
    </Reveal>
  );
}
