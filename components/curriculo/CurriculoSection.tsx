"use client";

import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import Tag from "@/components/ui/Tag";
import ResumeSection from "@/components/curriculo/ResumeSection";
import { useTranslations } from "@/lib/context/LanguageContext";
import {
  about,
  education,
  experience,
  certifications,
  volunteering,
  techStack,
  contact,
  resumePdfHref,
} from "@/lib/data/resume";

export default function CurriculoSection() {
  const { t, locale } = useTranslations();

  return (
    <div>
      <div className="flex flex-col gap-6 border-b border-neutral-200 pb-10 sm:flex-row sm:items-end sm:justify-between">
        <Reveal>
          <span className="text-xs uppercase tracking-[0.2em] text-neutral-600">
            {t.resume.sectionLabel}
          </span>
        </Reveal>
        <Reveal delay={0.08}>
          <Button href={resumePdfHref} variant="primary" external>
            {t.resume.downloadPdf}
          </Button>
        </Reveal>
      </div>

      <ResumeSection index="00" title={t.resume.sectionTitles.about}>
        <div>
          <p className="max-w-2xl text-balance font-serif text-xl leading-relaxed text-ink md:text-2xl">
            {about.text[locale]}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {about.badges.map((fact) => (
              <span
                key={fact.pt}
                className="rounded-full border border-neutral-300 px-4 py-2 text-sm text-neutral-600"
              >
                {fact[locale]}
              </span>
            ))}
          </div>
        </div>
      </ResumeSection>

      <ResumeSection index="01" title={t.resume.sectionTitles.education}>
        <div>
          <p className="font-serif text-xl text-ink">{education.course[locale]}</p>
          <p className="mt-1 text-sm text-neutral-600">
            {education.institution} — {education.period[locale]}
          </p>
        </div>
      </ResumeSection>

      <ResumeSection index="02" title={t.resume.sectionTitles.experience}>
        <div className="flex flex-col gap-10">
          {experience.map((job) => (
            <div key={job.company}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <p className="font-serif text-xl text-ink">
                  {job.role[locale]} · {job.company}
                </p>
                <p className="text-sm text-neutral-600">{job.period[locale]}</p>
              </div>
              <p className="mt-1 text-sm text-neutral-600">{job.location[locale]}</p>
              <ul className="mt-4 flex flex-col gap-2">
                {job.bullets.map((bullet) => (
                  <li
                    key={bullet.pt}
                    className="flex gap-3 text-sm leading-relaxed text-neutral-600"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-neutral-600" />
                    {bullet[locale]}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </ResumeSection>

      <ResumeSection index="03" title={t.resume.sectionTitles.certifications}>
        <ul className="flex flex-col gap-4">
          {certifications.map((cert) => (
            <li
              key={cert.name.pt}
              className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 text-sm"
            >
              <span className="text-ink">
                {cert.name[locale]}{" "}
                <span className="text-neutral-600">— {cert.issuer}</span>
              </span>
              <span className="text-neutral-600">
                {cert.hours} · {cert.date[locale]}
              </span>
            </li>
          ))}
        </ul>
      </ResumeSection>

      <ResumeSection index="04" title={t.resume.sectionTitles.volunteering}>
        {volunteering.map((item) => (
          <div key={item.name.pt}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <p className="font-serif text-xl text-ink">{item.name[locale]}</p>
              <p className="text-sm text-neutral-600">{item.period[locale]}</p>
            </div>
            <p className="mt-1 text-sm text-neutral-600">{item.role[locale]}</p>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-neutral-600">
              {item.description[locale]}
            </p>
          </div>
        ))}
      </ResumeSection>

      <ResumeSection index="05" title={t.resume.sectionTitles.stack}>
        <div className="flex flex-col gap-6">
          {techStack.map((group) => (
            <div key={group.category.pt}>
              <p className="text-xs uppercase tracking-[0.15em] text-neutral-600">
                {group.category[locale]}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Tag key={item.pt} label={item[locale]} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </ResumeSection>

      <ResumeSection index="06" title={t.resume.sectionTitles.contact}>
        <div className="flex flex-col gap-2 text-sm">
          <a
            href={`mailto:${contact.email}`}
            className="text-neutral-700 transition-colors duration-300 hover:text-neutral-900"
          >
            {contact.email}
          </a>
          <a
            href={contact.linkedin.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-700 transition-colors duration-300 hover:text-neutral-900"
          >
            {contact.linkedin.label}
          </a>
          <a
            href={contact.github.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-700 transition-colors duration-300 hover:text-neutral-900"
          >
            {contact.github.label}
          </a>
        </div>

        <div className="mt-10">
          <Button href={resumePdfHref} variant="outline" external>
            {t.resume.downloadPdfLong}
          </Button>
        </div>
      </ResumeSection>
    </div>
  );
}
