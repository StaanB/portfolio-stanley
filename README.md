# Portfólio — Stanley Brenner

Site pessoal de portfólio, construído em público como o próprio case "AI-first" do projeto (ver seção 4.6 da spec).

**Site:** ainda não publicado (fase 7 do roadmap).

## Stack

- [Next.js](https://nextjs.org/) (App Router) + [TypeScript](https://www.typescriptlang.org/) (`strict`)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vitest](https://vitest.dev/) + [Testing Library](https://testing-library.com/) + jsdom — TDD (teste antes do componente)
- [Framer Motion](https://www.framer.com/motion/) / [GSAP](https://gsap.com/) — animações e transições (fase 6)
- Deploy: [Vercel](https://vercel.com/)

## Rodando localmente

```bash
npm install
npm run dev
```

Abre em `http://localhost:3000`.

## Testes

```bash
npm test        # roda uma vez
npm run test:watch
```

## Estrutura

- `app/` — rotas (App Router): `/`, `/projetos/[slug]`, `/sobre`
- `content/` — dados do site (projetos, experiência, status), tipados e ordenados por data
- `PORTFOLIO_SPEC.md` — spec completa do projeto (visão, conteúdo, design system, roadmap)
- `assets/` — logo, favicon e screenshots usados no site
- `wireframes/` — protótipo interativo usado como referência de design/interação
- `reference/` — material de apoio (não versionado, só local)

## Processo

Desenvolvido com fluxo TDD (teste → componente → refatora) e 1 branch/PR por fase do roadmap — detalhes em `PORTFOLIO_SPEC.md`, seções 6.2 e 6.3.
