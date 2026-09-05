import type { Metadata } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/layout/SmoothScroll";
import PageTransition from "@/components/layout/PageTransition";
import FilmGrain from "@/components/ui/FilmGrain";
import RegistrationMarks from "@/components/ui/RegistrationMarks";
import { SectionProvider } from "@/lib/context/SectionContext";
import { LanguageProvider } from "@/lib/context/LanguageContext";
import { SITE_URL } from "@/lib/seo";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
  display: "swap",
});

const SITE_TITLE = "Alexandre Del Raso Filho — Desenvolvedor Full Stack";
const SITE_DESCRIPTION =
  "Portfólio pessoal de Alexandre Del Raso Filho, desenvolvedor full stack em Salvador, Bahia. Currículo e projetos — vitrine para vagas e freelance.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  authors: [{ name: "Alexandre Del Raso Filho" }],
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: "Alexandre Del Raso Filho",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${fraunces.variable} ${inter.variable} ${mono.variable}`}>
      <body className="flex min-h-screen flex-col bg-paper font-sans text-ink antialiased">
        <FilmGrain />
        <RegistrationMarks />
        <SmoothScroll>
          <LanguageProvider>
            <SectionProvider>
              <Header />
              <PageTransition>
                <main className="flex-1">{children}</main>
              </PageTransition>
              <Footer />
            </SectionProvider>
          </LanguageProvider>
        </SmoothScroll>
      </body>
    </html>
  );
}
