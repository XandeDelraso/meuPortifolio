import type { LocalizedText } from "@/lib/i18n/translations";

export type Project = {
  slug: string;
  title: string;
  description: LocalizedText;
  details: LocalizedText;
  tags: string[];
  href: string;
  repoHref?: string;
  image: string;
  imageAlt: LocalizedText;
};

export const projects: Project[] = [
  {
    slug: "jobtrack",
    title: "JobTrack",
    description: {
      pt: "JobTrack é um rastreador pessoal de candidaturas a vagas, em produção. Organiza tudo em um quadro Kanban por status, detecta candidaturas duplicadas automaticamente, mantém histórico de cada candidatura (mudanças de status, entrevistas, follow-ups) e conta com dashboard de métricas e exportação para CSV.",
      en: "JobTrack is a personal job application tracker, in production. It organizes everything in a Kanban board by status, automatically detects duplicate applications, keeps a history for each application (status changes, interviews, follow-ups) and includes a metrics dashboard and CSV export.",
    },
    details: {
      pt: "Frontend em React 18, TypeScript e Vite, com Tailwind CSS e Radix UI (shadcn/ui). Estado gerenciado com TanStack Query para dados do servidor e Zustand para interface. Formulários com React Hook Form e Zod, drag-and-drop com dnd-kit e gráficos com Recharts. Backend em Supabase (PostgreSQL, autenticação e Row Level Security), com triggers no banco para histórico automático e busca de candidaturas similares. Testes com Vitest e Testing Library, deploy na Vercel.",
      en: "Frontend built with React 18, TypeScript and Vite, using Tailwind CSS and Radix UI (shadcn/ui). State management with TanStack Query for server state and Zustand for UI state. Forms with React Hook Form and Zod, drag-and-drop with dnd-kit and charts with Recharts. Backend on Supabase (PostgreSQL, auth and Row Level Security), with database triggers for automatic history logging and similar-application detection. Tests with Vitest and Testing Library, deployed on Vercel.",
    },
    tags: ["React", "TypeScript", "Supabase", "PostgreSQL", "TanStack Query", "Zustand"],
    href: "https://jobtrack.com.br/",
    repoHref: "https://github.com/XandeDelraso/jobtrack",
    image: "/images/projects/jobtrack.png",
    imageAlt: {
      pt: "Dashboard Kanban do JobTrack mostrando candidaturas organizadas por status",
      en: "JobTrack Kanban dashboard showing applications organized by status",
    },
  },
  {
    slug: "senainotas",
    title: "SenaiNotas",
    description: {
      pt: "Calculadora de médias baseada na fórmula oficial de avaliação do SENAI CIMATEC, com simulação de notas e preview em tempo real.",
      en: "Grade calculator based on SENAI CIMATEC's official grading formula, with grade simulation and real-time preview.",
    },
    details: {
      pt: "Ferramenta client-side para simular notas e visualizar o impacto na média final em tempo real, seguindo exatamente os critérios de avaliação usados pela instituição.",
      en: "A client-side tool to simulate grades and see the impact on the final average in real time, following exactly the evaluation criteria used by the institution.",
    },
    tags: ["JavaScript", "HTML/CSS"],
    href: "https://notacimatec.vercel.app/",
    repoHref: "https://github.com/XandeDelraso/SenaiNotas",
    image: "/images/projects/senainotas.png",
    imageAlt: {
      pt: "Interface do SenaiNotas com pesos de avaliação e calculadora de média",
      en: "SenaiNotas interface with grading weights and average calculator",
    },
  },
];
