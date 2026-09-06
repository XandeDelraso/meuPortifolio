export type Locale = "pt" | "en";

export type LocalizedText = {
  pt: string;
  en: string;
};

export type Dictionary = {
  nav: {
    home: string;
    curriculo: string;
    projetos: string;
    openMenu: string;
    closeMenu: string;
  };
  hero: {
    headlineLine1: string;
    headlineLine2: string;
    ctaContact: string;
    ctaResume: string;
    ctaProjects: string;
    scrollIndicator: string;
    photoAlt: string;
  };
  switcher: {
    curriculoLabel: string;
    curriculoDescription: string;
    projetosLabel: string;
    projetosDescription: string;
    selected: string;
    viewMore: string;
    close: string;
    open: string;
  };
  resume: {
    sectionLabel: string;
    downloadPdf: string;
    downloadPdfLong: string;
    sectionTitles: {
      about: string;
      education: string;
      experience: string;
      certifications: string;
      volunteering: string;
      stack: string;
      contact: string;
    };
  };
  projects: {
    sectionLabel: string;
    intro: string;
    viewSite: string;
    repository: string;
    viewProject: string;
  };
  contactModal: {
    title: string;
  };
  footer: {
    title: string;
    text: string;
    contact: string;
    social: string;
    copyright: string;
  };
  common: {
    close: string;
  };
};

const pt: Dictionary = {
  nav: {
    home: "Home",
    curriculo: "Currículo",
    projetos: "Projetos",
    openMenu: "Abrir menu",
    closeMenu: "Fechar menu",
  },
  hero: {
    headlineLine1: "Desenvolvedor Full Stack",
    headlineLine2: "Salvador, Bahia, Brasil",
    ctaContact: "Fale comigo",
    ctaResume: "Ver currículo",
    ctaProjects: "Ver projetos",
    scrollIndicator: "Role para conhecer mais",
    photoAlt: "Retrato de Alexandre Del Raso Filho",
  },
  switcher: {
    curriculoLabel: "Currículo",
    curriculoDescription: "Formação, experiência e stack técnica, em detalhe.",
    projetosLabel: "Projetos",
    projetosDescription: "Trabalhos selecionados em produção.",
    selected: "Selecionado",
    viewMore: "Ver mais",
    close: "Fechar ↑",
    open: "Abrir ↓",
  },
  resume: {
    sectionLabel: "Currículo",
    downloadPdf: "Baixar PDF ↓",
    downloadPdfLong: "Baixar currículo em PDF ↓",
    sectionTitles: {
      about: "Sobre mim",
      education: "Formação",
      experience: "Experiência",
      certifications: "Certificações",
      volunteering: "Projetos & voluntariado",
      stack: "Stack técnica",
      contact: "Contato",
    },
  },
  projects: {
    sectionLabel: "Trabalho selecionado",
    intro:
      "Uma seleção enxuta de trabalhos que refletem como eu construo software: com disciplina de testes, dados bem modelados e deploy contínuo.",
    viewSite: "Visitar site ↗",
    repository: "Repositório ↗",
    viewProject: "Ver projeto ↗",
  },
  contactModal: {
    title: "Fale comigo",
  },
  footer: {
    title: "Vamos conversar?",
    text: "Entre em contato.",
    contact: "Contato",
    social: "Redes",
    copyright: "© {year} Alexandre Del Raso Filho. Todos os direitos reservados.",
  },
  common: {
    close: "Fechar",
  },
};

const en: Dictionary = {
  nav: {
    home: "Home",
    curriculo: "Resume",
    projetos: "Projects",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },
  hero: {
    headlineLine1: "Full Stack Developer",
    headlineLine2: "Salvador, Bahia, Brazil",
    ctaContact: "Get in touch",
    ctaResume: "View resume",
    ctaProjects: "View projects",
    scrollIndicator: "Scroll to learn more",
    photoAlt: "Portrait of Alexandre Del Raso Filho",
  },
  switcher: {
    curriculoLabel: "Resume",
    curriculoDescription: "Education, experience and tech stack, in detail.",
    projetosLabel: "Projects",
    projetosDescription: "Selected work in production.",
    selected: "Selected",
    viewMore: "View more",
    close: "Close ↑",
    open: "Open ↓",
  },
  resume: {
    sectionLabel: "Resume",
    downloadPdf: "Download PDF ↓",
    downloadPdfLong: "Download resume (PDF) ↓",
    sectionTitles: {
      about: "About me",
      education: "Education",
      experience: "Experience",
      certifications: "Certifications",
      volunteering: "Projects & Volunteer Work",
      stack: "Tech Stack",
      contact: "Contact",
    },
  },
  projects: {
    sectionLabel: "Selected work",
    intro:
      "A concise selection of work reflecting how I build software: with testing discipline, well-modeled data and continuous deployment.",
    viewSite: "Visit site ↗",
    repository: "Repository ↗",
    viewProject: "View project ↗",
  },
  contactModal: {
    title: "Get in touch",
  },
  footer: {
    title: "Let's talk?",
    text: "Keep in touch.",
    contact: "Contact",
    social: "Social",
    copyright: "© {year} Alexandre Del Raso Filho. All rights reserved.",
  },
  common: {
    close: "Close",
  },
};

export const translations: Record<Locale, Dictionary> = { pt, en };
