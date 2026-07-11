export type ProjectType = "employer" | "personal" | "meta";

export type Project = {
  slug: string;
  title: { pt: string; en: string };
  date: string; // "YYYY-MM" or "YYYY-MM-DD" — sort key
  endDate?: string; // absent/ongoing
  type: ProjectType;
  tagline: { pt: string; en: string };
  summary: { pt: string; en: string };
  role: { pt: string; en: string };
  stack: string[];
  highlights: { pt: string; en: string }[];
  links?: { label: string; url: string }[];
  hasScreenshot: boolean;
  featured?: boolean;
};

const rawProjects: Project[] = [
  {
    slug: "este-portfolio",
    title: { pt: "Este Portfólio", en: "This Portfolio" },
    date: "2026-07-09",
    type: "meta",
    tagline: {
      pt: "Como este portfólio foi construído, do zero ao deploy",
      en: "How this portfolio was built, from zero to deploy",
    },
    summary: {
      pt: "O próprio processo de construção deste site é um case: spec escrita e iterada em conversa com Claude Code, wireframe e design system prototipados no Claude Design, identidade visual gerada no Canva, e implementação em Next.js/Tailwind/Framer Motion/GSAP também assistida por IA — um fluxo AI-first de ponta a ponta, não só \"código gerado por IA\".",
      en: "The construction process of this site is itself a case: spec written and iterated in conversation with Claude Code, wireframe and design system prototyped in Claude Design, visual identity generated in Canva, and implementation in Next.js/Tailwind/Framer Motion/GSAP also AI-assisted — an end-to-end AI-first workflow, not just \"AI-generated code\".",
    },
    role: {
      pt: "Autor e orquestrador do processo (spec, design, build)",
      en: "Author and orchestrator of the process (spec, design, build)",
    },
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "GSAP", "Vitest"],
    highlights: [
      {
        pt: "Spec técnica escrita antes de qualquer código, guiando todo o processo",
        en: "Technical spec written before any code, guiding the whole process",
      },
      {
        pt: "Fluxo TDD: teste antes do componente, unidade por unidade",
        en: "TDD flow: test before component, unit by unit",
      },
      {
        pt: "Identidade visual (logo, favicon) gerada no Canva via MCP",
        en: "Visual identity (logo, favicon) generated in Canva via MCP",
      },
    ],
    hasScreenshot: false,
  },
  {
    slug: "animatch",
    title: { pt: "AniMatch", en: "AniMatch" },
    date: "2026-04-13",
    type: "personal",
    tagline: {
      pt: "Recomendação de anime com IA, baseada em perfil semântico",
      en: "AI anime recommendations, based on a semantic profile",
    },
    summary: {
      pt: "Sistema de recomendação de animes: o usuário loga com a conta AniList e recebe 6 recomendações personalizadas com justificativa em linguagem natural. Em vez de recomendar por tags simples, o AniMatch monta um perfil semântico a partir dos favoritos e top-votados do usuário e busca animes similares por significado.",
      en: "Anime recommendation system: the user logs in with their AniList account and gets 6 personalized recommendations with a natural-language justification. Instead of recommending by simple tags, AniMatch builds a semantic profile from the user's favorites and top-rated anime and searches for similar titles by meaning.",
    },
    role: {
      pt: "Autor único — full-stack (front, back, pipeline de IA)",
      en: "Sole author — full-stack (front, back, AI pipeline)",
    },
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "NestJS",
      "Pinecone",
      "Gemini Flash",
      "GraphQL",
    ],
    highlights: [
      {
        pt: "Pipeline de 4 etapas: cache local (24h) → busca paralela no AniList via GraphQL → busca vetorial semântica no Pinecone (top 35 candidatos) → ranking final com Gemini Flash gerando a justificativa",
        en: "4-stage pipeline: local cache (24h) → parallel AniList search via GraphQL → semantic vector search in Pinecone (top 35 candidates) → final ranking with Gemini Flash generating the justification",
      },
      {
        pt: "i18n nativa (PT-BR/EN) sem lib externa, com detecção automática de idioma do navegador",
        en: "Native i18n (PT-BR/EN) with no external lib, with automatic browser-language detection",
      },
      {
        pt: "Estratégia de \"wake-up inteligente\" pro backend gratuito hibernado: só mostra spinner se a resposta passar de 1.5s",
        en: "\"Smart wake-up\" strategy for the hibernating free-tier backend: only shows a loading spinner if the response takes over 1.5s",
      },
      {
        pt: "Fallback matemático caso a IA de ranking falhe, sem quebrar a experiência",
        en: "Mathematical fallback if the ranking AI fails, without breaking the experience",
      },
    ],
    links: [
      { label: "animatch-web", url: "https://github.com/StaanB/ANIMATCH-WEB" },
      { label: "animatch-api", url: "https://github.com/StaanB/ANIMATCH-API" },
    ],
    hasScreenshot: true,
  },
  {
    slug: "prolog-app",
    title: { pt: "Prolog App", en: "Prolog App" },
    date: "2025-12",
    type: "employer",
    tagline: {
      pt: "Gestão de frotas para 900+ operações — emprego atual",
      en: "Fleet management for 900+ operations — current job",
    },
    summary: {
      pt: "Prolog App é uma plataforma de gestão de frotas no mercado desde 2016, usada por mais de 900 operações no Brasil e no exterior (África do Sul, Paraguai), atendendo transporte de carga e passageiros, operações industriais, agrícolas, mineração e locadoras. Atuo como Dev Front-end Pleno, também com Flutter e Java, não só front web.",
      en: "Prolog App is a fleet management platform on the market since 2016, used by 900+ operations in Brazil and abroad (South Africa, Paraguay), serving cargo and passenger transport, industrial, agricultural, mining and rental operations. I work as a Mid-level Front-end Dev, also with Flutter and Java, not just web front-end.",
    },
    role: {
      pt: "Dev Front-end Pleno (também Flutter e Java)",
      en: "Mid-level Front-end Dev (also Flutter and Java)",
    },
    stack: ["React", "Flutter", "Java", "PHP"],
    highlights: [
      {
        pt: "Migração completa de um sistema legado de PHP para React",
        en: "Complete migration of a legacy system from PHP to React",
      },
      {
        pt: "Feature de manutenção por placas inteiras entregue com zero bugs registrados em produção",
        en: "Fleet-wide maintenance feature delivered with zero bugs recorded in production",
      },
      {
        pt: "Visualizador de arquivos construído do zero, também com zero bugs em produção",
        en: "File viewer built from scratch, also with zero bugs in production",
      },
    ],
    links: [{ label: "prologapp.com", url: "https://prologapp.com/" }],
    hasScreenshot: false,
  },
  {
    slug: "stanley-ia",
    title: { pt: "Stanley IA", en: "Stanley IA" },
    date: "2025-10-02",
    type: "personal",
    tagline: {
      pt: "Chatbot RAG que responde sobre mim, sem alucinar",
      en: "RAG chatbot that answers questions about me, without hallucinating",
    },
    summary: {
      pt: "Chatbot conversacional (PT-BR/EN) que responde perguntas sobre o Stanley Brenner, com respostas curtas e tom levemente sarcástico, fundamentadas exclusivamente num índice RAG privado — evitando que o LLM \"alucine\" ao ser perguntado sobre alguém específico.",
      en: "Conversational chatbot (PT-BR/EN) that answers questions about Stanley Brenner, with short, slightly sarcastic answers, grounded exclusively in a private RAG index — preventing the LLM from \"hallucinating\" when asked about a specific person.",
    },
    role: {
      pt: "Autor único — frontend + arquitetura do backend RAG",
      en: "Sole author — frontend + RAG backend architecture",
    },
    stack: ["Next.js", "TypeScript", "FastAPI", "ChromaDB", "Hugging Face"],
    highlights: [
      {
        pt: "RAG anti-alucinação: contexto estrito com top-K matches do ChromaDB e instrução de sistema obrigatória (\"use ONLY this context\")",
        en: "Anti-hallucination RAG: strict context with top-K ChromaDB matches and a mandatory system instruction (\"use ONLY this context\")",
      },
      {
        pt: "Streaming via SSE (Server-Sent Events) — tokens chegam progressivamente na UI",
        en: "Streaming via SSE (Server-Sent Events) — tokens arrive progressively in the UI",
      },
      {
        pt: "Thin proxy pattern: rotas Next.js não expõem o domínio do backend ao cliente",
        en: "Thin proxy pattern: Next.js routes never expose the backend domain to the client",
      },
      {
        pt: "Backend no Hugging Face Spaces (free tier) com volume persistente pra não reprocessar embeddings a cada deploy",
        en: "Backend on Hugging Face Spaces (free tier) with a persistent volume to avoid reprocessing embeddings on every deploy",
      },
    ],
    links: [
      {
        label: "ASSISTENTE-IA-STAANB",
        url: "https://github.com/StaanB/ASSISTENTE-IA-STAANB",
      },
      { label: "assistente-ia-two.vercel.app", url: "https://assistente-ia-two.vercel.app" },
    ],
    hasScreenshot: false,
  },
  {
    slug: "dpms",
    title: { pt: "DPMS", en: "DPMS" },
    date: "2024-04",
    endDate: "2025-11",
    type: "employer",
    tagline: {
      pt: "Order to Invoice para gestão industrial",
      en: "Order to Invoice for industrial management",
    },
    summary: {
      pt: "Sistema \"Order to Invoice\" para gestão industrial. Atuei na construção e manutenção de features/módulos, refatoração de código legado, componentização e integração com APIs — com destaque pra engenharia de SASS em escala (variáveis, mixins, organização de estilos) e testes automatizados com Jest/Cypress num fluxo SCRUM.",
      en: "An \"Order to Invoice\" system for industrial management. I worked on building and maintaining features/modules, refactoring legacy code, componentization and API integration — with a focus on SASS engineering at scale (variables, mixins, style organization) and automated tests with Jest/Cypress in a SCRUM flow.",
    },
    role: {
      pt: "Desenvolvedor Front-end Junior",
      en: "Junior Front-end Developer",
    },
    stack: ["React", "SASS", "Jest", "Cypress", "Ruby on Rails", "Docker"],
    highlights: [
      {
        pt: "Arquitetura de estilos em SASS organizada em escala (variáveis, mixins), não só CSS solto",
        en: "SASS style architecture organized at scale (variables, mixins), not just loose CSS",
      },
      {
        pt: "Testes automatizados com Jest e Cypress dentro de um fluxo ágil (SCRUM/ClickUp)",
        en: "Automated tests with Jest and Cypress within an agile flow (SCRUM/ClickUp)",
      },
      {
        pt: "Refatoração de código legado e integração com APIs",
        en: "Legacy code refactoring and API integration",
      },
    ],
    hasScreenshot: true,
  },
  {
    slug: "digitalize",
    title: { pt: "Digitalize", en: "Digitalize" },
    date: "2024-04",
    endDate: "2025-11",
    type: "employer",
    tagline: {
      pt: "App mobile de digitalização, do front web ao Flutter",
      en: "Mobile digitization app, from web front-end to Flutter",
    },
    summary: {
      pt: "Aplicativo mobile de digitalização/gestão modular. Contraponto ao trabalho de front web: mostra a transição pra mobile em Flutter, consumindo uma camada de dados em GraphQL com integração Ruby no backend.",
      en: "A mobile digitization/modular-management app. A counterpoint to the web front-end work: shows the transition to mobile with Flutter, consuming a GraphQL data layer with a Ruby backend integration.",
    },
    role: {
      pt: "Desenvolvedor Front-end Junior (mobile)",
      en: "Junior Front-end Developer (mobile)",
    },
    stack: ["Flutter", "Ruby", "GraphQL"],
    highlights: [
      {
        pt: "Transição de front web (React/Next) pra mobile (Flutter)",
        en: "Transition from web front-end (React/Next) to mobile (Flutter)",
      },
      {
        pt: "Consumo de camada de dados em GraphQL, não só REST",
        en: "Consuming a GraphQL data layer, not just REST",
      },
    ],
    hasScreenshot: false,
  },
];

export const projects: Project[] = [...rawProjects].sort(
  (a, b) =>
    (b.endDate ?? "9999").localeCompare(a.endDate ?? "9999") ||
    b.date.localeCompare(a.date)
);
