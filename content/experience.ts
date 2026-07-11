export type ExperienceEntry = {
  company: string;
  role: { pt: string; en: string };
  startDate: string; // "YYYY-MM"
  endDate?: string; // absent = current
  location?: string;
  highlights?: { pt: string; en: string }[];
};

const rawExperience: ExperienceEntry[] = [
  {
    company: "Prolog App",
    role: { pt: "Dev Front-end Pleno", en: "Mid-level Front-end Dev" },
    startDate: "2025-12",
    location: "Palhoça, SC",
    highlights: [
      {
        pt: "Migração de sistema legado de PHP para React; feature de manutenção por placas inteiras e visualizador de arquivos, ambos com zero bugs em produção",
        en: "Legacy system migration from PHP to React; fleet-wide maintenance feature and file viewer, both with zero bugs in production",
      },
    ],
  },
  {
    company: "Oxeanbits",
    role: { pt: "Dev Front-end Junior", en: "Junior Front-end Dev" },
    startDate: "2024-04",
    endDate: "2025-11",
    location: "Salvador, BA",
    highlights: [
      {
        pt: "Produtos de gestão de tarefas/agilidade (Lean Construction) para clientes internacionais",
        en: "Task/agility management products (Lean Construction) for international clients",
      },
    ],
  },
  {
    company: "Instituto Mix de Profissões",
    role: {
      pt: "Monitor de laboratório de informática",
      en: "Computer lab monitor",
    },
    startDate: "2019-09",
    endDate: "2023-03",
    location: "Salvador, BA",
  },
  {
    company: "Freelance",
    role: { pt: "Dev Front-End", en: "Front-End Dev" },
    startDate: "2021-05",
    endDate: "2021-06",
    highlights: [
      {
        pt: "Site de restaurante em HTML/CSS a partir de Figma",
        en: "Restaurant website in HTML/CSS built from Figma",
      },
    ],
  },
];

export const experience: ExperienceEntry[] = [...rawExperience].sort(
  (a, b) =>
    (b.endDate ?? "9999").localeCompare(a.endDate ?? "9999") ||
    b.startDate.localeCompare(a.startDate)
);
