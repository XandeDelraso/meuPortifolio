"use client";

import { useReducedMotion } from "framer-motion";
import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { translations, type Dictionary, type Locale } from "@/lib/i18n/translations";

const STORAGE_KEY = "alexandredrf:locale";

type LanguageContextValue = {
  locale: Locale;
  targetLocale: Locale;
  toggleLocale: () => void;
  commitLocale: () => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("pt");
  const [targetLocale, setTargetLocale] = useState<Locale>("pt");
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored === "pt" || stored === "en") {
        setLocale(stored);
        setTargetLocale(stored);
      }
    } catch {
      // localStorage unavailable (private browsing, etc.) — fall back to default "pt"
    }
  }, []);

  function toggleLocale() {
    const next: Locale = targetLocale === "pt" ? "en" : "pt";
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // ignore write failures, preference just won't persist
    }
    setTargetLocale(next);
    if (reduceMotion) {
      setLocale(next);
    }
  }

  function commitLocale() {
    setLocale(targetLocale);
  }

  return (
    <LanguageContext.Provider value={{ locale, targetLocale, toggleLocale, commitLocale }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}

export function useTranslations(): { t: Dictionary; locale: Locale } {
  const { locale } = useLanguage();
  return { t: translations[locale], locale };
}
