"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import { useLenis } from "lenis/react";

export type SectionKey = "curriculo" | "projetos";

export const SECTIONS_ANCHOR_ID = "secoes";

type LenisInstance = ReturnType<typeof useLenis>;

type SectionContextValue = {
  activeSection: SectionKey | null;
  toggleSection: (key: SectionKey) => void;
  openSection: (key: SectionKey) => void;
  goHome: () => void;
};

const SectionContext = createContext<SectionContextValue | null>(null);

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function scrollToAnchor(lenis: LenisInstance) {
  if (typeof window === "undefined") return;
  const target = document.getElementById(SECTIONS_ANCHOR_ID);
  if (!target) return;

  if (lenis) {
    lenis.scrollTo(target, { offset: -24 });
    return;
  }

  target.scrollIntoView({
    behavior: prefersReducedMotion() ? "auto" : "smooth",
    block: "start",
  });
}

function scrollToTop(lenis: LenisInstance) {
  if (typeof window === "undefined") return;

  if (lenis) {
    lenis.scrollTo(0);
    return;
  }

  window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? "auto" : "smooth" });
}

export function SectionProvider({ children }: { children: ReactNode }) {
  const [activeSection, setActiveSection] = useState<SectionKey | null>(null);
  const lenis = useLenis();

  function toggleSection(key: SectionKey) {
    setActiveSection((current) => (current === key ? null : key));
    scrollToAnchor(lenis);
  }

  function openSection(key: SectionKey) {
    setActiveSection(key);
    scrollToAnchor(lenis);
  }

  function goHome() {
    setActiveSection(null);
    scrollToTop(lenis);
  }

  return (
    <SectionContext.Provider value={{ activeSection, toggleSection, openSection, goHome }}>
      {children}
    </SectionContext.Provider>
  );
}

export function useSection() {
  const ctx = useContext(SectionContext);
  if (!ctx) {
    throw new Error("useSection must be used within a SectionProvider");
  }
  return ctx;
}
