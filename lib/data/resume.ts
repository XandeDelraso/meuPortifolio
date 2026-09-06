import type { LocalizedText } from "@/lib/i18n/translations";

export const about: {
  text: LocalizedText;
  badges: LocalizedText[];
} = {
  text: {
    pt: "Me chamo Alexandre, tenho 23 anos e sou de Salvador, Bahia. Estou na reta final de Engenharia de Computação na Universidade Senai Cimatec, e atuo como desenvolvedor full stack há mais de 2 anos, hoje na equipe de automação da iP3 Soluções.",
    en: "My name is Alexandre, I'm 23 years old and I'm from Salvador, Bahia. I'm in the final stretch of my Computer Engineering degree at Universidade Senai Cimatec, and I've been working as a full stack developer for over 2 years, currently on the automation team at iP3 Soluções.",
  },
  badges: [
    { pt: "Salvador, BA", en: "Salvador, BA" },
    { pt: "23 anos", en: "23 years old" },
    { pt: "Full stack há 2+ anos", en: "Full stack for 2+ years" },
    { pt: "Eng. de Computação", en: "Computer Eng." },
  ],
};

export const education = {
  course: { pt: "Engenharia de Computação", en: "Computer Engineering" } satisfies LocalizedText,
  institution: "Universidade Senai Cimatec",
  period: {
    pt: "agosto de 2021 até o momento (reta final do curso)",
    en: "August 2021 to present (final stretch of the program)",
  } satisfies LocalizedText,
};

export type ExperienceEntry = {
  company: string;
  role: LocalizedText;
  period: LocalizedText;
  location: LocalizedText;
  bullets: LocalizedText[];
};

export const experience: ExperienceEntry[] = [
  {
    company: "iP3 Soluções",
    role: { pt: "Estagiário de Automação", en: "Automation Intern" },
    period: { pt: "set/2025 até atual", en: "Sep/2025 to present" },
    location: { pt: "Salvador, BA (híbrido)", en: "Salvador, BA (hybrid)" },
    bullets: [
      {
        pt: "Integração entre SQL e VB6 para consistência e fluxo de dados",
        en: "Integration between SQL and VB6 to ensure data consistency and flow",
      },
      {
        pt: "Criação, estruturação e otimização de consultas SQL",
        en: "Creation, structuring and optimization of SQL queries",
      },
      {
        pt: "Desenvolvimento e manutenção de funcionalidades do sistema principal da empresa (VB6)",
        en: "Development and maintenance of features for the company's core system (VB6)",
      },
      {
        pt: "Desenvolvimento frontend (HTML, ASP)",
        en: "Frontend development (HTML, ASP)",
      },
    ],
  },
  {
    company: "Infleet",
    role: {
      pt: "Estagiário de Site Reliability Engineering",
      en: "Site Reliability Engineering Intern",
    },
    period: { pt: "ago/2023 a ago/2025", en: "Aug/2023 to Aug/2025" },
    location: { pt: "Salvador, BA (híbrido)", en: "Salvador, BA (hybrid)" },
    bullets: [
      {
        pt: "Criação, consumo e manutenção de endpoints, com testes via Postman e Insomnia",
        en: "Creation, consumption and maintenance of endpoints, with testing via Postman and Insomnia",
      },
      {
        pt: "Automações internas em Elixir e desenvolvimento de funcionalidades para o produto core",
        en: "Internal automations in Elixir and feature development for the core product",
      },
      {
        pt: "Observabilidade e monitoramento com Zabbix e Grafana",
        en: "Observability and monitoring with Zabbix and Grafana",
      },
      {
        pt: "Acompanhamento de dados e métricas via Metabase",
        en: "Data and metrics tracking via Metabase",
      },
      {
        pt: "Contato direto com clientes e hardware durante o ciclo de implantação",
        en: "Direct contact with clients and hardware during the deployment cycle",
      },
    ],
  },
];

export type CertificationEntry = {
  name: LocalizedText;
  issuer: string;
  hours: string;
  date: LocalizedText;
};

export const certifications: CertificationEntry[] = [
  {
    name: { pt: "Python Essentials 1", en: "Python Essentials 1" },
    issuer: "Cisco Academy",
    hours: "30h",
    date: { pt: "abr/2026", en: "Apr/2026" },
  },
  {
    name: {
      pt: "Junior Cybersecurity Analyst Career Path",
      en: "Junior Cybersecurity Analyst Career Path",
    },
    issuer: "Cisco Academy",
    hours: "120h",
    date: { pt: "ago/2025", en: "Aug/2025" },
  },
  {
    name: {
      pt: "AWS Academy Graduate — Machine Learning Foundations",
      en: "AWS Academy Graduate — Machine Learning Foundations",
    },
    issuer: "AWS Academy",
    hours: "20h",
    date: { pt: "jun/2026", en: "Jun/2026" },
  },
  {
    name: { pt: "Elixir e Phoenix do Zero", en: "Elixir and Phoenix from Scratch" },
    issuer: "Udemy",
    hours: "14h",
    date: { pt: "set/2024", en: "Sep/2024" },
  },
];

export type VolunteeringEntry = {
  name: LocalizedText;
  role: LocalizedText;
  period: LocalizedText;
  description: LocalizedText;
};

export const volunteering: VolunteeringEntry[] = [
  {
    name: { pt: "Projeto AIARA", en: "AIARA Project" },
    role: { pt: "Voluntário", en: "Volunteer" },
    period: { pt: "mar/2024 a dez/2024", en: "Mar/2024 to Dec/2024" },
    description: {
      pt: "Participação no desenvolvimento inicial de um aplicativo de apoio ao tratamento de afasia cerebral, prototipagem em Figma, definição de fluxos e requisitos, coautoria de artigo acadêmico sobre a pesquisa.",
      en: "Participated in the early development of an app to support treatment for cerebral aphasia, prototyping in Figma, defining flows and requirements, and co-authored an academic paper about the research.",
    },
  },
];

export const techStack: { category: LocalizedText; items: LocalizedText[] }[] = [
  {
    category: { pt: "Linguagens", en: "Programming Languages" },
    items: [
      { pt: "Python", en: "Python" },
      { pt: "Elixir", en: "Elixir" },
      { pt: "JavaScript", en: "JavaScript" },
      { pt: "TypeScript", en: "TypeScript" },
      { pt: "C#", en: "C#" },
      { pt: "VB6", en: "VB6" },
    ],
  },
  {
    category: { pt: "Backend & APIs", en: "Backend & APIs" },
    items: [
      { pt: "APIs REST", en: "APIs REST" },
      { pt: "Phoenix (Elixir)", en: "Phoenix (Elixir)" },
      { pt: "PostgreSQL", en: "PostgreSQL" },
      { pt: "SQL Server", en: "SQL Server" },
      { pt: "Supabase", en: "Supabase" },
    ],
  },
  {
    category: { pt: "Testes & Qualidade", en: "Testing & Quality" },
    items: [
      { pt: "Vitest", en: "Vitest" },
      { pt: "Testing Library", en: "Testing Library" },
      { pt: "Postman", en: "Postman" },
      { pt: "Insomnia", en: "Insomnia" },
    ],
  },
  {
    category: { pt: "IA Generativa", en: "Generative AI" },
    items: [
      { pt: "GitHub Copilot", en: "GitHub Copilot" },
      { pt: "Claude", en: "Claude" },
      { pt: "Codex", en: "Codex" },
    ],
  },
  {
    category: { pt: "Ferramentas & Infra", en: "Tools & Infra" },
    items: [
      { pt: "Git/GitHub", en: "Git/GitHub" },
      { pt: "Docker", en: "Docker" },
      { pt: "Linux", en: "Linux" },
      { pt: "AWS", en: "AWS" },
      { pt: "CI/CD", en: "CI/CD" },
      { pt: "Grafana", en: "Grafana" },
      { pt: "Zabbix", en: "Zabbix" },
    ],
  },
  {
    category: { pt: "Idiomas", en: "Spoken Languages" },
    items: [
      { pt: "Português (nativo)", en: "Portuguese (native)" },
      { pt: "Inglês (fluente)", en: "English (fluent)" },
      { pt: "Espanhol (básico)", en: "Spanish (basic)" },
    ],
  },
];

export const contact = {
  email: "xandefdelraso@hotmail.com",
  linkedin: {
    label: "linkedin.com/in/alexandre-del-raso-filho",
    href: "https://linkedin.com/in/alexandre-del-raso-filho",
  },
  github: {
    label: "github.com/XandeDelraso",
    href: "https://github.com/XandeDelraso",
  },
};

export const resumePdfHref: LocalizedText = {
  pt: "/resume/ALEXANDREFILHO.pdf",
  en: "/resume/ALEXANDREFILHO_EN.pdf",
};
