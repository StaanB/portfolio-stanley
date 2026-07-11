import type { DictionaryKey } from "@/content/dictionaries";

export type SkillGroup = {
  labelKey: DictionaryKey;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    labelKey: "skillsFrontend",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind/SASS", "HTML/CSS"],
  },
  {
    labelKey: "skillsBackendMobile",
    items: ["Node.js", "NestJS", "Ruby on Rails", "Flutter", "Java", "GraphQL", "REST API"],
  },
  {
    labelKey: "skillsAiData",
    items: [
      "Agentes de IA",
      "RAG",
      "Pinecone",
      "Fine-tuning",
      "Gemini",
      "Claude Code",
      "Gemini CLI",
      "Codex",
    ],
  },
  {
    labelKey: "skillsQuality",
    items: ["Jest", "Cypress", "Docker", "Git/GitHub", "SCRUM", "Specs técnicas"],
  },
  {
    labelKey: "skillsCloud",
    items: ["AWS", "Pipelines", "Automação"],
  },
];
