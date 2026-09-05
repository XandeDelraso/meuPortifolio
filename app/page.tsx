import Hero from "@/components/sections/Hero";
import SectionSwitcher from "@/components/sections/SectionSwitcher";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Alexandre Del Raso Filho — Desenvolvedor Full Stack",
  description:
    "Portfólio pessoal de Alexandre Del Raso Filho, desenvolvedor full stack em Salvador, Bahia. Currículo e projetos — vitrine para vagas e freelance.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <SectionSwitcher />
    </>
  );
}
