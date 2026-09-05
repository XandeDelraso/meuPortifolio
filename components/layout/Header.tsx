"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useSection, type SectionKey } from "@/lib/context/SectionContext";
import { useTranslations } from "@/lib/context/LanguageContext";
import LanguagePill from "@/components/ui/LanguagePill";

export default function Header() {
  const { activeSection, toggleSection, goHome } = useSection();
  const { t } = useTranslations();
  const [open, setOpen] = useState(false);

  const SECTION_LINKS: { key: SectionKey; label: string }[] = [
    { key: "curriculo", label: t.nav.curriculo },
    { key: "projetos", label: t.nav.projetos },
  ];

  function handleSectionClick(key: SectionKey) {
    toggleSection(key);
    setOpen(false);
  }

  function handleHomeClick() {
    goHome();
    setOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-paper/80 backdrop-blur">
      <div className="mx-auto flex max-w-content items-center justify-between px-6 py-5 md:px-10">
        <Link
          href="/"
          className="group flex items-baseline gap-2"
          onClick={handleHomeClick}
        >
          <span className="font-serif text-lg font-medium tracking-tight text-ink">
            Alexandre Del Raso Filho
          </span>
          <span
            aria-hidden
            className="hidden font-mono text-[0.65rem] tracking-widest text-neutral-500 transition-colors duration-300 group-hover:text-neutral-800 sm:inline"
          >
            0x41
          </span>
        </Link>

        <div className="flex items-center gap-6">
          <nav className="hidden items-center gap-8 md:flex">
            <button
              type="button"
              onClick={handleHomeClick}
              className={`relative text-sm tracking-wide transition-colors duration-300 ${
                activeSection === null ? "text-ink" : "text-neutral-600 hover:text-neutral-900"
              }`}
            >
              {t.nav.home}
              {activeSection === null && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute -bottom-1.5 left-0 h-px w-full bg-ink"
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                />
              )}
            </button>

            {SECTION_LINKS.map((link) => {
              const active = activeSection === link.key;
              return (
                <button
                  key={link.key}
                  type="button"
                  onClick={() => handleSectionClick(link.key)}
                  aria-pressed={active}
                  className={`relative text-sm tracking-wide transition-colors duration-300 ${
                    active ? "text-ink" : "text-neutral-600 hover:text-neutral-900"
                  }`}
                >
                  {link.label}
                  {active && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-1.5 left-0 h-px w-full bg-ink"
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          <LanguagePill />

          <button
            type="button"
            aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
          >
            <motion.span
              animate={{ rotate: open ? 45 : 0, y: open ? 6 : 0 }}
              className="h-px w-6 bg-ink"
              transition={{ duration: 0.3 }}
            />
            <motion.span
              animate={{ opacity: open ? 0 : 1 }}
              className="h-px w-6 bg-ink"
              transition={{ duration: 0.3 }}
            />
            <motion.span
              animate={{ rotate: open ? -45 : 0, y: open ? -6 : 0 }}
              className="h-px w-6 bg-ink"
              transition={{ duration: 0.3 }}
            />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-neutral-200 md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              <button
                type="button"
                onClick={handleHomeClick}
                className={`rounded-lg px-3 py-3 text-left text-base tracking-wide transition-colors duration-300 ${
                  activeSection === null
                    ? "bg-neutral-900 text-white"
                    : "text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900"
                }`}
              >
                {t.nav.home}
              </button>
              {SECTION_LINKS.map((link) => {
                const active = activeSection === link.key;
                return (
                  <button
                    key={link.key}
                    type="button"
                    onClick={() => handleSectionClick(link.key)}
                    aria-pressed={active}
                    className={`rounded-lg px-3 py-3 text-left text-base tracking-wide transition-colors duration-300 ${
                      active
                        ? "bg-neutral-900 text-white"
                        : "text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900"
                    }`}
                  >
                    {link.label}
                  </button>
                );
              })}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
