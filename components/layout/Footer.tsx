"use client";

import Link from "next/link";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/SocialIcons";
import { useTranslations } from "@/lib/context/LanguageContext";
import { contact } from "@/lib/data/resume";

export default function Footer() {
  const { t } = useTranslations();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-200">
      <div className="mx-auto max-w-content px-6 py-14 md:px-10">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="font-serif text-2xl text-ink">{t.footer.title}</p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-neutral-600">
              {t.footer.text}
            </p>
          </div>

          <div className="flex flex-col gap-2 text-sm text-neutral-600">
            <span className="mb-1 text-xs uppercase tracking-[0.15em] text-neutral-600">
              {t.footer.contact}
            </span>
            <a
              href={`mailto:${contact.email}`}
              className="transition-colors duration-300 hover:text-neutral-900"
            >
              {contact.email}
            </a>
          </div>

          <div className="flex flex-col gap-2 text-sm text-neutral-600">
            <span className="mb-1 text-xs uppercase tracking-[0.15em] text-neutral-600">
              {t.footer.social}
            </span>
            <a
              href={contact.linkedin.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition-colors duration-300 hover:text-neutral-900"
            >
              <LinkedInIcon className="h-4 w-4" />
              LinkedIn
            </a>
            <a
              href={contact.github.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition-colors duration-300 hover:text-neutral-900"
            >
              <GitHubIcon className="h-4 w-4" />
              GitHub
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col-reverse items-center justify-between gap-4 border-t border-neutral-200 pt-6 text-xs text-neutral-600 sm:flex-row">
          <p>{t.footer.copyright.replace("{year}", String(year))}</p>
          <Link
            href="/"
            className="font-mono tracking-[0.2em] text-neutral-600 transition-colors duration-300 hover:text-neutral-700"
            aria-label="0x41 — hexadecimal de A, de Alexandre"
            title="0x41 — hexadecimal de 'A'"
          >
            0x41
          </Link>
        </div>
      </div>
    </footer>
  );
}
