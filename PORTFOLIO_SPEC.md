# Spec — Portfólio Pessoal (Stanley Brenner)

# Informações relevantes
- Linkedin Stanley: https://www.linkedin.com/in/stanley-brenner-dev/ (pode ser usado pra pegar as referências de carreira)
- Github: https://github.com/StaanB (pode ser usado pra pegar os projetos e os links desses projetos para a Vercel)
- Currículo (PDF do LinkedIn) — conteúdo já extraído na seção 4.1. **O arquivo PDF foi removido do disco, do repositório e do histórico do git** porque continha o telefone pessoal do Stanley, que não faz parte do conteúdo do site.

## 1. Visão geral

**Objetivo:** vitrine pessoal/profissional (Produto/Tech) para networking — não é uma landing de vendas, é um cartão de visitas digital que mostra quem você é, o que já fez e como te contatar.

**Referência de estilo:** [vanholtz.co](https://vanholtz.co) — minimalista, editorial, muito espaço em branco, navegação numerada/simples, tipografia como protagonista, tom profissional mas pessoal. Vamos adaptar essa linguagem visual (não copiar 1:1) para um contexto de Produto/Tech em vez de estúdio de design.

**Não-objetivos:** sem blog robusto no MVP, sem CMS complexo, sem contas de usuário, sem formulário com backend próprio (usar mailto ou serviço externo simples).

---

## 2. Público e mensagem

- **Público primário:** recrutadores, hiring managers, pessoas da rede profissional, possíveis colaboradores.
- **Call-to-action principal:** contato (email/LinkedIn), não "comprar" nada.
- **Situação de carreira (definida):** empregado atualmente (Prolog App, desde dez/2025), mas o site exibe um bloco de status tipo "aberto a conversar" — nunca "disponível para contratação imediata". Texto sugerido: PT-BR *"Empregado atualmente, mas sempre aberto a trocar ideia sobre novos projetos e oportunidades"* / EN *"Currently employed, but always open to a conversation about new projects and opportunities"*.
- **Requisito técnico — flag de status:** esse status precisa ser **uma flag simples de trocar**, não texto hardcoded espalhado pelo site — uma constante/config única (ex. `status: "employed" | "open_to_work"` num arquivo de conteúdo) que alimenta o texto e o indicador visual (ex. bolinha verde/laranja) em todo lugar que ele aparece. Trocar de "empregado" pra "buscando oportunidade" deve ser uma linha, não uma busca por todo o código.

**Cargo do hero (atualizado):** "Software Developer" (EN) / "Desenvolvedor de Software" (PT-BR) — com nível **Pleno-Sênior** explícito no subtítulo/bio (ex: "Pleno-Sênior" / "Mid-Senior"), não mais um título genérico. Posicionamento revisado pra cima em relação à primeira versão da spec, com base na experiência já consolidada.

**Mensagem central (atualizada):** você não é só front-end — hoje transita nas 3 pontas (front, back, mobile) e já entrega com autonomia real:

- **Full-stack na prática, não só no currículo:** front-end (React, Next.js, TypeScript), back-end (Node/NestJS, Ruby on Rails) e mobile (Flutter, Java) — na Prolog App já atua com Flutter e Java além do front.
- **Entregas de alto impacto e zero bugs em produção:** migração de um sistema legado de PHP para React, uma página de manutenção por placas inteiras entregue sem nenhum bug registrado, e um visualizador de arquivos construído do zero também sem bugs em produção. Esses 3 números (0 bugs, 0 bugs, migração completa de stack) são prova concreta de qualidade de entrega — devem virar destaque visual no site, não só texto corrido.
- **AI-first como forma de trabalhar, não só como projeto pessoal:** usa Claude Code, Gemini e Codex tanto em fluxo híbrido quanto AI-first, sabe **escrever specs** (como esta) pra guiar esse processo — isso é uma competência de engenharia moderna que poucos concorrentes vão saber articular.
- **Trajetória:** estudando para transição a gestão técnica (tech lead) — vale um menção sutil (ex: "hoje explorando liderança técnica"), sem virar o foco principal do hero.

**Headline do hero (definida — mescla dos 3 posicionamentos):** "Desenvolvedor Pleno-Sênior full-stack (React, Next.js, Node, Flutter) com um fluxo de desenvolvimento AI-first — da spec ao deploy — e entregas com zero bugs em produção, incluindo migrações completas de stack."

### 2.1 Bio (parágrafo do "Sobre") — definida

**Escolhida (opção 1):** "Sou desenvolvedor Pleno-Sênior full-stack, atuando com React, Next.js, Node/NestJS, Ruby on Rails e Flutter em produtos SaaS de alta demanda. Na Prolog App, migrei um sistema legado de PHP para React e construí duas features do zero — uma página de manutenção por placas inteiras e um visualizador de arquivos — ambas em produção sem nenhum bug registrado. Hoje também trabalho num fluxo AI-first, usando Claude Code, Gemini e Codex desde a escrita da spec até o deploy, e estou me preparando para o próximo passo: liderança técnica."

*(Versão EN a produzir na fase de tradução — fluxo definido na seção 7.1: escrevo, você revisa, depois traduzo.)*

**Ainda pendente:** tom geral (mais formal/corporativo vs. mais pessoal/informal) — a bio escolhida já é razoavelmente equilibrada, pode servir como padrão de tom pro resto do site.

---

## 3. Arquitetura de informação (sitemap)

**Revisado (era one-page com seções ancoradas — mudou depois de validar o protótipo interativo, seção 5):** não é mais scroll-por-seção. É um **app shell sem sidebar em caixa** — logo/nav ancorados num canto pequeno (sem borda/box) e um rodapé fino de contato, ambos fixos e nunca recarregando — com um painel de conteúdo que troca de tela com transição (wipe), inspirado 1:1 na estrutura do site de referência (que também não é one-page — é multi-rota com uma "casca" fixa):

```
/                      → Home = a lista de projetos em si (não um hero separado + seções empilhadas)
├── /projetos/[slug]   → página de cada case, em ordem cronológica (Este Portfólio, AniMatch, Prolog App, Stanley IA, DPMS, Digitalize)
│                         com "próximo projeto" encadeando pro seguinte
├── /sobre             → headline, bio, highlights, experiência (timeline) e skills — tela mais simples, mas ainda animada
```

- Rota própria por projeto `/projetos/[slug]` — cases densos o bastante (arquitetura, pipeline, stack) pra justificar página dedicada, e ajuda SEO/compartilhamento individual.
- **Fechado:** a headline principal do hero (seção 2) e a timeline de experiência **vivem dentro de `/sobre`**, não têm seção própria de primeiro nível — já implementado assim no protótipo (seção 5).
- Contato vira rodapé fixo (email, redes), não uma seção separada pra rolar até.

---

## 4. Conteúdo — status por item

| Item | Status |
|---|---|
| 1. Identidade (nome, título, localização) | ✅ Resolvido — Stanley Brenner, Software Developer (Pleno-Sênior), Florianópolis/Palhoça-SC (4.1) |
| 2. Foto | ✅ Resolvido — **sem foto**. Quem quiser ver o rosto acha no LinkedIn; o site segue só tipografia/cor, como a referência vanholtz.co |
| 3. Posicionamento (headline) | ✅ Resolvido — mescla das 3 opções da seção 2 |
| 4. Bio (parágrafo maior) | ✅ Resolvido — opção 1 escolhida (seção 2.1) |
| 5. Disponibilidade | ✅ Resolvido — "empregado, mas aberto a conversar", como flag trocável (seção 2 e 6.1) |
| 6. Projetos/cases (6 fechados) | ✅ AniMatch, DPMS, Digitalize, Stanley IA (assistente-ia-two), Prolog App (4.7 — emprego atual) com todo o conteúdo (4.2, 4.3, 4.5, 4.7) + case meta "como este portfólio foi construído" (4.6) |
| 7. Skills agrupadas | ✅ Resolvido — agrupamento proposto na seção 4.4, abraçando multi-stack e IA |
| 8. Experiência (timeline) | ✅ Resolvido — puxado do CV (4.1) |
| 9. Contato | ✅ Resolvido — email `stanleybrenner@gmail.com` (do CV), LinkedIn, GitHub |

**O que falta de você agora, especificamente:** nada bloqueando o conteúdo — só a escolha da tipografia (seção 5.1, comparação já gerada) e revisar o protótipo interativo num celular real.

### 4.4 Skills — agrupamento proposto

Abraçando a atuação multi-stack e o uso de IA como diferencial central (não como categoria escondida no fim):

- **Front-end:** React, Next.js, TypeScript, JavaScript, Tailwind/SASS, HTML/CSS
- **Back-end & Mobile:** Node.js, NestJS, Ruby on Rails, Flutter, Java, GraphQL, REST API
- **IA & Dados:** Agentes de IA, RAG, busca vetorial (Pinecone), fine-tuning/ajuste fino, LLMs (Gemini), desenvolvimento AI-first com Claude Code, Gemini CLI e Codex
- **Qualidade & Processo:** Jest, Cypress, Docker, Git/GitHub, SCRUM, escrita de specs técnicas
- **Cloud/DevOps (em expansão):** AWS, pipelines, automação

### 4.1 Conteúdo já extraído do currículo (LinkedIn PDF)

- **Nome/título:** Stanley Brenner — Desenvolvedor Full Stack JavaScript | React · Next.js · Node.js · TypeScript
- **Localização:** Florianópolis e Região (experiência atual em Palhoça, SC)
- **Resumo:** Engenheiro de Software com foco em Front-End, atuando desde 2023 em produtos SaaS. Trabalha com React, Next.js, TypeScript e Ruby, com experiência também em Flutter (mobile/desktop) e aprendizado ativo em Cloud/DevOps (Docker, AWS, pipelines).
- **Experiência:**
  - **Prolog App | Gestão de Frotas** — Dev Front-end Pleno, dez/2025–atual (Palhoça, SC). Atua também com **Flutter e Java**, não só front web. Entregas de destaque: migração de sistema legado de **PHP para React**; página de manutenção por placas inteiras entregue **com zero bugs registrados em produção**; visualizador de arquivos construído do zero, também **com zero bugs em produção**.
  - **Oxeanbits** — Dev Front-end Junior, abr/2024–nov/2025 (1a8m, Salvador). Produtos de gestão de tarefas/agilidade (Lean Construction) para clientes internacionais; stack: React, SASS, Jest, Cypress, Figma, Ruby on Rails, Docker, ClickUp
  - **Instituto Mix de Profissões** — Monitor de laboratório de informática, set/2019–mar/2023 (Salvador)
  - **Freelance** — Dev Front-End, mai/2021–jun/2021 (site de restaurante em HTML/CSS a partir de Figma)
- **Formação:** UniFatecie — Sistemas Web (2024–2026, em curso); EBAC — Full Stack Python (2023–2024)
- **Idiomas:** Português (nativo), Inglês (fluente), Japonês (básico)
- **Projetos pessoais linkados no currículo:** `portfolio-staanb.vercel.app`, `assistente-ia-two.vercel.app` — usar como base junto com o GitHub para popular a seção de Projetos.
- **Prints já disponíveis em `assets/`:** AniMatch (projeto pessoal, detalhado abaixo), DPMS e app de digitalização mobile (contexto profissional — vêm de trabalho remunerado, então tratar como cases sem expor dados/clientes sensíveis).

### 4.2 Case — AniMatch (projeto pessoal, destaque principal)

Extraído dos READMEs de [ANIMATCH-WEB](https://github.com/StaanB/ANIMATCH-WEB) e [ANIMATCH-API](https://github.com/StaanB/ANIMATCH-API):

- **O que é:** sistema de recomendação de animes com IA — o usuário loga com a conta AniList e recebe 6 recomendações personalizadas com justificativa em linguagem natural.
- **Problema que resolve:** recomendação genérica de anime não considera o gosto real do usuário; o AniMatch monta um "perfil semântico" a partir dos favoritos/top-votados e busca animes similares por significado, não por tags simples.
- **Arquitetura (pipeline de 4 etapas):**
  1. Cache local (24h) por usuário+idioma
  2. Busca paralela no AniList via GraphQL (favoritos, top-votados, já assistidos)
  3. Busca vetorial semântica no **Pinecone** (embedding `multilingual-e5-large`) → top 35 candidatos similares
  4. Ranking final com **Gemini Flash**: escolhe os 6 melhores e gera a justificativa de cada recomendação no idioma do usuário, com fallback matemático se a IA falhar
- **Stack:** Next.js 16 (App Router) + TypeScript + Tailwind no frontend; NestJS + Pinecone + Gemini Flash no backend; OAuth 2.0 da AniList com cookie `httpOnly`; deploy Vercel (front) + Render (back)
- **Detalhes técnicos que valem virar destaque no case:**
  - i18n nativa (PT-BR/EN) sem lib externa, com detecção automática de idioma do navegador — **exatamente o tipo de solução que também vamos usar no próprio portfólio** (ver seção 7.1)
  - Estratégia de "wake-up inteligente": como o backend gratuito no Render hiberna, o front dispara um `/health` fire-and-forget e só mostra o spinner de "conectando" se passar de 1.5s — evita tela travada sem motivo
  - Cache client-side em `sessionStorage` por usuário+idioma, evitando chamadas repetidas de IA
  - GitHub Action com cron mensal pra repopular os embeddings no Pinecone automaticamente
- **Por que é um bom case pro portfólio:** mostra full-stack completo (front + back + IA + infra), decisões de custo/performance conscientes (cache em várias camadas, fallback quando a IA falha) e não é só CRUD — tem pipeline de dados real.
- **Repos:** [animatch-web](https://github.com/StaanB/ANIMATCH-WEB) · [animatch-api](https://github.com/StaanB/ANIMATCH-API)

### 4.3 Cases — DPMS e Digitalize (projetos profissionais)

Tratamento definido: **sem nome/logo de cliente, sem prints internos** — só função exercida, stack e entregas. Formato "case de atuação", não "vitrine do produto do cliente":

- **DPMS (Oxeanbits):**
  - Contexto: sistema "Order to Invoice" para gestão industrial (a partir do print em `assets/dpms-home.png`, referente a login).
  - Função: Desenvolvedor Front-end Junior — construção e manutenção de features/módulos, refatoração de código legado, componentização e integração com APIs.
  - Stack a destacar: React, **SASS** (arquitetura de estilos, não só CSS solto), Jest, Cypress, Figma, Ruby on Rails (básico), Docker, i18n, SCRUM/ClickUp.
  - Ângulo do case: já que não pode mostrar telas reais do produto, o destaque vai para a **engenharia de SASS** (organização de estilos em escala, variáveis, mixins) e o processo (testes automatizados com Jest/Cypress, fluxo ágil) — isso é conteúdo seu, não do cliente.
- **Digitalize (app mobile):**
  - Contexto: aplicativo de digitalização/gestão modular (a partir do print `assets/digitalize-sample.webp`).
  - Empresa/período: Oxeanbits, dentro do mesmo vínculo abr/2024–nov/2025 (seção 4.1).
  - Stack: **Flutter** (mobile), **Ruby** (backend/integração) e **GraphQL** (camada de dados) — vale destacar como contraponto ao case de DPMS/AniMatch: mostra que você transita de front web (React/Next) pra mobile (Flutter) e sabe consumir GraphQL, não só REST.
- **Formato no site:** sem screenshot do produto — usar um card com ícone/tipografia (consistente com a paleta preto+laranja) no lugar da imagem, texto focado em responsabilidade + stack + resultado (ex: "reduziu tempo de X", "modularizou Y").

### 4.5 Case — Assistente IA / "Stanley IA" (4º case, projeto pessoal)

Extraído do README de [ASSISTENTE-IA-STAANB](https://github.com/StaanB/ASSISTENTE-IA-STAANB) e verificado ao vivo em `assistente-ia-two.vercel.app`:

- **O que é:** "Stanley IA" — chatbot conversacional (PT-BR/EN) que responde perguntas sobre o próprio Stanley Brenner, com respostas curtas e tom levemente sarcástico, fundamentadas exclusivamente num índice RAG privado (evita alucinação do LLM). Funciona como peça de portfólio técnico que também demonstra arquitetura full-stack moderna com IA.
- **Problema que resolve:** LLMs genéricos "alucinam" quando perguntados sobre alguém específico; o Stanley IA restringe as respostas a um contexto recuperado via RAG, garantindo que só fale o que está de fato documentado sobre o Stanley.
- **Diferença estrutural do AniMatch:** aqui é um único repositório frontend (Next.js), que consome um backend FastAPI separado hospedado no Hugging Face Spaces — não existe um repo "API" público equivalente ao `ANIMATCH-API`.
- **Arquitetura (pipeline):**
  1. Frontend (Vercel) → rotas Next.js `/api/assistant` e `/api/health`
  2. Proxy fino — essas rotas encaminham pro backend FastAPI (thin proxy pattern: desacopla o cliente do domínio externo do backend)
  3. Backend (Hugging Face Spaces, Docker) — processa o chat com RAG, indexação e queries
  4. Persistência — ChromaDB com volume montado em `/data/chroma`
  5. Fluxo: prompt do usuário → `assistantAdapter.requestAssistantResponse()` → backend transmite tokens via **SSE (Server-Sent Events)** → UI atualiza em tempo real com auto-linking de URLs → fallback gracioso em erro
- **Stack:** Next.js (App Router) + TypeScript + Tailwind no frontend (hooks customizados como `useConversationLifecycle`, i18n PT-BR/EN persistido em `localStorage`); FastAPI + embedding `BAAI/bge-m3` + ChromaDB (`PersistentClient`) + LLM `Qwen/Qwen2.5-7B-Instruct` via Hugging Face Inference no backend; deploy Vercel (front) + Hugging Face Spaces/Docker (back).
- **Detalhes técnicos que valem virar destaque no case:**
  - RAG anti-alucinação: contexto estrito com top-K matches do ChromaDB, truncagem por orçamento de caracteres, instrução de sistema obrigatória ("use ONLY this context")
  - Streaming via SSE — reduz latência percebida, tokens chegam progressivamente na UI
  - Thin proxy pattern — rotas Next.js não expõem o domínio do backend ao cliente
  - Decisão de custo/escalabilidade consciente: Hugging Face Spaces (free tier) + Qwen2.5-7B pelo equilíbrio custo/qualidade/latência; volume persistente evita reprocessar embeddings a cada deploy
  - Robustez: abort controller pra cancelar requisições, mock mode (`NEXT_PUBLIC_ASSISTANT_USE_MOCK`) pra desenvolver sem depender do backend
  - UX: respostas limitadas a ≤3 frases por design, indicador de status online/offline com nome do modelo, sanitização de URLs nas respostas
- **Por que é um bom case pro portfólio:** reforça o ângulo AI-first do posicionamento (seção 2) com uma prova técnica concreta — RAG, streaming, arquitetura desacoplada — não é só "usei uma API de LLM".
- **Repo:** [ASSISTENTE-IA-STAANB](https://github.com/StaanB/ASSISTENTE-IA-STAANB) · **Deploy:** [assistente-ia-two.vercel.app](https://assistente-ia-two.vercel.app)

### 4.6 Case — "Como este portfólio foi construído" (meta)

- **Definido:** o próprio processo de construção do site vira um case, com página própria `/projetos/como-fiz-este-portfolio` (ou slug equivalente) — reforça o posicionamento AI-first com prova concreta, não só discurso.
- **Conteúdo a estruturar:** fluxo real usado — spec escrita e iterada em conversa com Claude Code (este documento), wireframe/design system prototipado no Claude Design (via `DesignSync`), logo/identidade visual gerada no Canva (via MCP), implementação assistida (Next.js/Tailwind/Framer Motion/GSAP) também com Claude Code.
- **Ângulo do case:** não é "usei IA pra escrever código" genérico — é mostrar o processo de principio a fim (spec → design → asset → build → deploy) com as ferramentas reais, o que é raro de ver documentado e reforça a competência de "saber orquestrar IA", já citada como diferencial na seção 2.
- **Pendente:** decidir nível de detalhe (screenshots do processo? trechos da spec? antes/depois do wireframe?) — retomar quando o layout e a logo estiverem prontos, pra já ter material concreto pra mostrar.

### 4.7 Case — Prolog App (emprego atual)

Pesquisado via LinkedIn e site público ([prologapp.com](https://prologapp.com/)):

- **O que é a empresa:** Prolog App é uma plataforma de gestão de frotas, no mercado desde 2016, usada por mais de 900 operações no Brasil e em outros países (África do Sul, Paraguai). Atende transporte de carga, transporte de passageiros, operações industriais, agrícolas, mineração e locadoras.
- **Produtos principais:** checklist eletrônico (substitui inspeção em papel por formulário digital com relatório automático), gestão de pneus (rastreamento de desgaste pra reduzir descarte precoce e consumo de combustível) e gestão de manutenção (digitaliza o fluxo de solicitação de manutenção do início à resolução) — integra com ERPs/TMSs de terceiros.
- **Diferente do tratamento de DPMS/Digitalize:** aqui não é trabalho pra cliente de uma agência (Oxeanbits) — é o produto da própria empresa onde Stanley trabalha hoje, então dá pra nomear a empresa e descrever o produto com base no material público deles. Ainda assim, sem prints de telas internas reais ou dados de operações de clientes da Prolog, só o que já é público no site/LinkedIn deles.
- **Papel e entregas (já levantado na seção 4.1):** Dev Front-end Pleno, dez/2025–atual, atuando também com **Flutter e Java** (não só front web). Destaques: migração de um sistema legado de **PHP para React**; a feature de **manutenção por placas inteiras** (mapeia diretamente pro produto "gestão de manutenção" da empresa) entregue com **zero bugs em produção**; visualizador de arquivos construído do zero, também **zero bugs em produção**.
- **Por que é um bom case pro portfólio:** é o emprego atual, prova recência e contexto real de produto SaaS de escala (900+ operações, presença internacional) — complementa os cases pessoais (AniMatch, Stanley IA) com evidência de entrega em produção de verdade, sob um domínio de negócio concreto (logística/frotas).
- **Fontes:** [Prolog App | LinkedIn](https://br.linkedin.com/company/prologapp) · [prologapp.com](https://prologapp.com/)

## 5. Design system

**Referência de interação:** vanholtz.co não é só visual — o site inteiro é construído em cima de animação: transição de página inteira ao navegar, scroll com efeito (elementos deslizam/revelam em blocos, não é scroll "seco"), hover com transição em links e imagens. Essa é a peça central que você quer replicar em espírito (não pixel a pixel).

- **Direção visual:** minimalista/editorial, tipografia grande e confiante, muito espaço negativo — mas com identidade visual marcada por cor (não neutra como uma agência de design costuma ser).
- **Paleta base:** **preto + laranja/abóbora**, sem tema claro/escuro alternável — o site é fixo em fundo predominantemente preto com laranja como cor de destaque (texto de impacto, links, hovers, CTAs, ícones).
  - Justificativa de escolha de cor: laranja transmite confiança, energia e criatividade sem a agressividade do vermelho; em testes de conversão, CTAs em laranja superam botões verdes (~+2,4%) e azuis (~+3,1%) por combinar urgência com acessibilidade visual — ótimo tanto pra guiar o olho do recrutador quanto pra dar personalidade ao portfólio. Fontes: [ofspace.co](https://www.ofspace.co/blog/orange-in-branding-and-marketing), [thewhitelabelagency.com](https://thewhitelabelagency.com/how-color-psychology-impacts-conversion-rates/), [wavespace.agency](https://www.wavespace.agency/blog/black-and-orange-websites).
  - **Tom definido: `#FF6B1A`** (Abóbora Vívido) como cor de destaque principal (links, hovers, ícones, CTA), sobre preto quase puro `#0A0908` e cinza morno `#A89E92` para texto secundário — comparativo visual com prós/contras gerado e aprovado. Segunda opção validada como alternativa mais "editorial/sóbria": `#E8590C` (Abóbora Queimado).
- **Navegação:** numerada ou por âncoras, igual à referência — com transição animada entre seções/páginas (não troca instantânea).
- **Estrutura de interação (definida a partir dos prints em `reference/`):** o site não é 3 páginas soltas, é um único shell **sem sidebar em caixa** — logo/nav ancorados num canto pequeno e um rodapé fino de contato/redes, ambos fixos e sem borda, nunca recarregando — só a área de conteúdo troca. Três telas:
  1. **Home:** a "home" não é hero + seções empilhadas — é a **lista de projetos** em si, em tipografia grande/bold, um embaixo do outro, com ano + link, hover mudando cor/posição, animação de entrada em cascata ao carregar.
  2. **Página de projeto:** mesmo canto de logo/nav e rodapé fixos, título/tagline grande, descrição em colunas, metadados (papel, ano, link), stack em tags, e um link **"Próximo projeto"** gigante no rodapé que encadeia pro case seguinte (igual ao "next project → PUSH" do site de referência).
  3. **Sobre:** mais simples que as outras duas, mas ainda animada — headline editorial (a mesma do hero), bio, highlights (0 bugs, migração), timeline de experiência e skills.
  - **Transição entre telas:** wipe de cor (bloco sólido cobrindo a tela e revelando o conteúdo novo por baixo), não fade genérico — reforça a estética de blocos/ângulos do site de referência.
  - **Protótipo interativo já validado:** construído em `wireframes/00-prototipo-interativo.html` (também sincronizado no projeto "Portfólio Stanley Brenner" no Claude Design) — já usa a paleta final (preto/laranja), não é mais wireframe cinza. Serve de referência de comportamento pra implementação real em Framer Motion/GSAP.
  - **Sem sidebar em caixa:** revisado depois de reexaminar os prints — o Van Holtz não usa uma barra lateral fixa com borda. Logo + nav ficam num bloco pequeno ancorado no canto superior esquerdo (sem box), contato/redes/idioma viram um rodapé fino (`footer-strip`), e o conteúdo ocupa a tela inteira de ponta a ponta.
  - **Lista de projetos "roleta":** cada linha da home tem deslocamento horizontal e rotação levemente diferentes (não é uma lista alinhada em coluna reta) — títulos em contorno (outline) por padrão; ao passar o mouse, o projeto em foco fica sólido/laranja e "endireita" (rotação zera), os demais ficam ainda mais apagados. Isso replica o efeito de contraste sólido/contorno observado no print `reference/home-van-holtz.png`.
  - **Contraste/acessibilidade — versão final (resolvida):** depois de duas iterações, o estado padrão da lista de projetos é **laranja sólido** (não contorno) — resolve o problema de mobile de raiz, porque não existe mais um estado "fantasma" que só a `:hover` revelava (mobile não tem hover). No `:hover`/`:active`, o título vira **contorno laranja vazado** (preenchimento transparente + `-webkit-text-stroke` na mesma cor de destaque) — nunca contorno preto/escuro, porque sobre o fundo quase-preto (`#0A0908`) um contorno escuro fica invisível ou quase. Manter tudo na mesma cor (laranja) garante que o estado de foco nunca "some", só troca de peso visual (preenchido → vazado).
  - **Cor de fundo — decisão validada:** cheguei a levantar a possibilidade de inverter (fundo laranja, texto preto/branco) e montei uma [comparação visual](https://claude.ai/code/artifact/7fc2a7fa-6346-4b8e-a5f8-58cf3b2d78ad) — **mantido preto de fundo + laranja de destaque** (opção atual). Fundo laranja em 100% das telas (incluindo páginas de projeto com parágrafo longo) cansa a leitura e faz o laranja perder a função de "destaque" que justificou a escolha de cor na primeira vez (seção 5, justificativa de cor). **Ideia registrada, não decidida:** usar laranja de fundo só na home (que é curta, sem parágrafo) e preto nas páginas internas, igual ao próprio Van Holtz faz — ainda não prototipado, só ficou registrado como possibilidade se quiser revisitar depois.
  - **Limite do protótipo em CSS puro / próximo passo com lib:** o que está em `00-prototipo-interativo.html` usa só CSS (`transform`, `transition`, custom properties) pra aproximar o efeito "roleta"/kinetic do Van Holtz e da referência de estilo Persona que você mencionou. Pra motion de verdade nesse nível — rotação amarrada ao scroll, hover com física (magnetic/spring), drift contínuo — vale a pena investir em **GSAP** (já previsto na seção 6: Framer Motion + GSAP ScrollTrigger) na implementação real, em vez de tentar esticar CSS puro além do que ele aguenta bem. Registrado aqui pra não se perder — é trabalho da fase 5/6 do roadmap (seção 8), não do protótipo.
### 5.1 Tipografia ✅ Resolvido

**Sobre a fonte do Van Holtz:** não dá pra confirmar o arquivo exato sem acesso ao CSS deles (site de terceiro, não é algo pra "inspecionar" via scraping) — mas visualmente o desenho da "O"/"G" não bate com nenhuma família gratuita comum, então é provável que seja uma fonte paga/customizada. Em vez de tentar imitar 1:1, gerei 3 opções reais e gratuitas (Google Fonts) com o mesmo espírito (caixa alta, traço grosso, cantos retos): **[comparação ao vivo](https://claude.ai/code/artifact/7be61ee9-3f17-4c37-87a2-e917b5c81019)**.

**Escolhida: Opção 1 — Archivo Black (display) + Work Sans (corpo).** A mais próxima do Van Holtz — bloco denso, geométrica, sem cantos suaves. Já aplicada no protótipo interativo (`wireframes/00-prototipo-interativo.html`), ambas fontes gratuitas via Google Fonts, prontas pra usar com `next/font/google` na implementação real (sem custo de licença, sem FOUT se configurado certo).
- **Motion (requisito, não opcional):**
  - Transição de página inteira ao navegar entre seções/rotas (fade, wipe ou slide — a definir)
  - Scroll com efeito: elementos entram em cena de forma coreografada conforme o scroll (não é só fade-in simples)
  - Hover com transição em todos os elementos interativos (links, cards de projeto, imagens)
  - Micro-interações nos ícones de redes sociais
- **Redes sociais:** todo texto de rede social (LinkedIn, GitHub, etc.) deve ser um link clicável de verdade — sem "texto solto", igual à referência.
- **Identidade visual (logo):** ✅ Resolvido — duas peças distintas, geradas no Canva:
  - **Wordmark "STANLEY B."** — bloco/negrito, inspirado no estilo "VAN HOLTZ CO." (tipografia geométrica pesada, caixa alta), laranja `#FF6B1A` sobre preto `#0A0908`. Uso: elemento flutuante fixo no site (mesmo espírito do "VAN HOLTZ CO." fixo no canto do site de referência). Arquivo: `assets/logo-wordmark-stanley-b.png`.
  - **Favicon "SB"** — só as 2 iniciais, badge compacto, mesma paleta. Uso: ícone da aba do navegador. Arquivo: `assets/favicon-sb.png`.
  - Exportação original do Canva veio com fundo preto sólido (conta Free não permite PNG transparente) — você removeu o fundo manualmente e substituiu os dois arquivos em `assets/` pelas versões com fundo transparente. Prontos pra uso direto sobre qualquer seção do site.
  - **Pendente de polish (menor):** ainda dá pra apertar um pouco o enquadramento (espaço vazio nas bordas) na hora de integrar como asset real do site (fase 6 — Polish, seção 8), mas não bloqueia nada.

---

## 6. Stack técnica (recomendação)

- **Framework:** Next.js (App Router) + TypeScript
- **Estilo:** Tailwind CSS
- **Conteúdo:** MDX ou JSON local para os projetos (sem CMS no MVP — evita overhead pra um site de vitrine pessoal)
- **Deploy:** Vercel (domínio próprio depois, se quiser)
- **Formulário de contato:** mailto direto ou link para LinkedIn — evita backend/serviço de email no MVP
- **Analytics:** Vercel Analytics (leve, sem cookie banner)
- **Animações:** Framer Motion + GSAP (ScrollTrigger) — necessário para transições de página, coreografia de scroll e hovers no nível do vanholtz.co. Framer Motion cobre transições de página/hover; GSAP ScrollTrigger cobre as animações amarradas ao scroll.
- **Testes:** **Vitest** (não Jest) — mais rápido e nativo pra projetos Vite/Next moderno, evita config extra de transformadores ESM que o Jest ainda exige. Escopo do MVP: testes unitários dos componentes genéricos (`<ProjectCard />`, `<ExperienceItem />`, componente de status/flag da seção 6.1) e da lógica de i18n (troca de idioma, persistência em `localStorage`) — não é necessário e2e no MVP.

### 6.1 Arquitetura de conteúdo — dirigida por dados (requisito)

Todo conteúdo que muda com frequência ou pode crescer (status de carreira, projetos, experiências) deve ser **dado, não código espalhado pela UI** — objetivo: adicionar/remover um projeto ou uma experiência deve ser editar uma entrada de array/JSON, nunca mexer em componente ou duplicar JSX.

- **`content/status.ts`** (ou similar): fonte única da flag de disponibilidade —
  ```ts
  export const careerStatus = {
    state: "employed", // "employed" | "open_to_work"
    labels: {
      employed: { pt: "Empregado, mas aberto a conversar", en: "Currently employed, open to a conversation" },
      open_to_work: { pt: "Buscando novas oportunidades", en: "Open to new opportunities" },
    },
  }
  ```
  O componente de status lê essa flag e decide texto + cor do indicador (ex: verde para `employed`, laranja para `open_to_work`) — trocar de estado é editar uma linha.

- **`content/projects.ts`**: array de projetos, **ordenado automaticamente por data — não por posição manual no array.** Formato revisado pra escalar melhor (pensando em cases futuros, não só os 6 atuais):

  ```ts
  type Project = {
    slug: string;
    title: string;
    date: string;              // "YYYY-MM" — chave de ordenação. Prolog App usa a data de início (2025-12), não muda.
    endDate?: string;           // ausente/"atual" = trabalho em andamento (ex: Prolog App)
    type: "employer" | "personal" | "meta"; // controla o tratamento: "employer" nunca expõe dado de cliente sem aprovação
    tagline: { pt: string; en: string };
    summary: { pt: string; en: string };
    role: { pt: string; en: string };
    stack: string[];
    highlights: { pt: string; en: string }[];
    links?: { label: string; url: string }[];
    hasScreenshot: boolean;
    featured?: boolean;         // escape hatch: fixar um case no topo mesmo fora de ordem, se um dia fizer sentido (ex: relançamento de um case antigo)
  };

  export const projects: Project[] = [ /* ... */ ]
    .sort((a, b) => (b.endDate ?? "9999") .localeCompare(a.endDate ?? "9999") || b.date.localeCompare(a.date));
  ```

  - **Por que isso resolve o ponto que ficou como "⚠️ importante" antes:** a ordem cronológica (mais recente primeiro) deixa de depender de alguém lembrar de inserir no lugar certo — é derivada do campo `date`/`endDate` automaticamente. Adicionar um projeto novo é só um objeto novo no array, em qualquer posição; a ordem de exibição sempre sai certa.
  - **Campo `type` pensando no futuro:** hoje só muda o *tratamento editorial* (DPMS/Digitalize/Prolog não expõem dado de cliente sem aprovação, seção 4.3/4.7), mas fica pronto pra, no futuro, filtrar ou agrupar a lista por tipo se o número de cases crescer bastante.
  - Um único componente genérico `<ProjectCard />` + `<ProjectPage />` renderiza qualquer item da lista — sem componente dedicado por projeto.
  - **Datas reais confirmadas** (Prolog App por você, AniMatch e Stanley IA pelo commit inicial no GitHub via `gh api`, DPMS/Digitalize por você):
    | Projeto | Data | Fonte |
    |---|---|---|
    | Este Portfólio | 2026-07-09 | hoje |
    | AniMatch | 2026-04-13 | 1º commit, `ANIMATCH-WEB` |
    | Prolog App | 2025-12 | início do vínculo, sem `endDate` (emprego atual) |
    | Stanley IA | 2025-10-02 | 1º commit, `ASSISTENTE-IA-STAANB` |
    | DPMS | 2024-04 | início do vínculo Oxeanbits |
    | Digitalize | 2024-04 | início do vínculo Oxeanbits (mesma data, mesmo vínculo) |
  - **⚠️ Nuance importante — ordem cronológica pura vs. "emprego atual":** por data literal, o AniMatch (1º commit abr/2026) fica *acima* da Prolog App (início dez/2025) — mesmo a Prolog sendo o emprego atual e mais relevante pra um recrutador. Cheguei a sugerir usar o campo `featured` pra fixar a Prolog App no topo independente da data, mas a decisão foi **manter ordem cronológica pura, sem pin manual** — reflete honestamente quando cada coisa aconteceu, e o campo `featured` fica disponível no schema como opção pra revisitar isso depois, se quiser.

- **`content/experience.ts`**: mesma lógica de ordenação por data pra timeline de experiência:

  ```ts
  type ExperienceEntry = {
    company: string;
    role: { pt: string; en: string };
    startDate: string;          // "YYYY-MM"
    endDate?: string;           // ausente = "atual"
    location?: string;
    highlights?: { pt: string; en: string }[];
  };
  ```
  Renderizado por um único componente `<ExperienceItem />`, também ordenado por `startDate` desc — mesmo racional do `projects.ts`, não duplica a lógica de ordenação manual.

Essa arquitetura também facilita a tradução (cada campo de texto guarda `{ pt, en }`) e mantém o site fácil de manter sozinho depois, sem precisar mexer em componentes toda vez que a carreira ou os projetos mudarem.

### 6.2 Fluxo de desenvolvimento — TDD (requisito, não opcional)

**Importante:** a implementação segue **TDD de verdade** — teste primeiro, componente depois — não "constrói tudo e testa no final". Isso importa especialmente porque a intenção é rodar isso como um **ciclo autônomo** (comando `/goal` ou equivalente) sem supervisão passo a passo: TDD dá ao agente um critério objetivo de "terminei essa parte" (teste verde) em vez de precisar adivinhar se o componente está certo.

Ordem por unidade de trabalho (componente, hook, ou função de conteúdo):
1. **Escrever o teste primeiro**, descrevendo o comportamento esperado (ex: `<ProjectCard />` renderiza título+stack a partir de um objeto `Project`; `careerStatus` muda o texto e a cor do indicador quando `state` muda; o sort de `projects.ts` ordena por data desc com `endDate` ausente = "atual" no topo do seu grupo).
2. **Rodar e confirmar que falha** pelo motivo certo (componente ainda não existe / comportamento ainda não implementado) — não seguir se o teste falhar por engano de sintaxe do próprio teste.
3. **Implementar o mínimo** pra fazer passar — sem antecipar funcionalidade que o teste não pede.
4. **Rodar de novo, confirmar verde.**
5. **Refatorar** se precisar (nome melhor, extrair função), mantendo os testes verdes o tempo todo.
6. Só então seguir pra próxima unidade.

**Prioridade de cobertura** (da seção 6, já era o escopo — a mudança aqui é a *ordem*, não o *quê*): lógica de dados primeiro (`content/*.ts`, sort, flag de status, dicionário i18n) — são funções puras, mais rápidas de testar e mais fáceis de acertar o contrato antes de qualquer UI — depois os componentes genéricos (`<ProjectCard />`, `<ExperienceItem />`, indicador de status), depois a integração das páginas. Animações/motion (Framer Motion, GSAP) não entram no TDD — são visuais, verificadas olhando (skill `/verify` ou manual), não por asserção de teste.

### 6.3 Checklist técnico pra execução autônoma (`/goal`)

Levantamento honesto do que falta fixar pra um ciclo sem supervisão não travar em decisão ambígua no meio do caminho. **Repositório criado:** [github.com/StaanB/portfolio-stanley](https://github.com/StaanB/portfolio-stanley), `main` com só spec/assets/referências/protótipo (sem código de app ainda — isso entra por PR, fase por fase, ver abaixo). Decisões fixadas aqui pra não precisar reperguntar a cada rodada:

- **Gerenciador de pacotes:** `npm` (já é o que está instalado no ambiente, sem necessidade de instalar pnpm/yarn).
- **TypeScript:** modo `strict: true` desde o início.
- **Lint:** `eslint-config-next` padrão do `create-next-app`, sem config customizada extra no MVP.
- **Testes — dependências que faltavam no stack (6, "Testes"):** Vitest sozinho não testa componente React — precisa também de `@testing-library/react`, `@testing-library/jest-dom` e `jsdom` (ambiente de DOM simulado). Isso não estava explícito antes.
- **Git:** `git init` faz parte da fase 4 (setup), não é opcional nem posterior. **Um commit por unidade de trabalho do TDD (6.2)** — além de boa prática, isso gera um histórico limpo que vira material real pro case meta "como este portfólio foi construído" (4.6): dá pra literalmente mostrar o log de commits como prova do processo.
- **Fluxo de branch/PR (decidido):** o repositório sobe pro GitHub com uma `main` vazia. A partir daí, **1 branch + 1 PR por fase do roadmap** (seção 8) — não 1 PR por unidade de TDD (muito granular pra um site desse tamanho, viraria overhead sem ganho real). Os commits granulares do TDD (6.2) ficam dentro de cada branch normalmente; o PR representa uma entrega coerente (ex: "camada de dados + testes", "componentes genéricos", "página Home", "página de Projeto", "página Sobre", "Polish"). Ciclo por fase: **abrir branch → implementar em TDD → abrir PR → revisar (usar a skill `/code-review` no diff antes de aprovar) → mergear → seguir pra próxima fase.** O merge fica condicionado ao PR passar na revisão, não é automático.
- **Assets:** `assets/logo-wordmark-stanley-b.png`, `assets/favicon-sb.png` e os prints de referência precisam ser copiados/importados pra dentro do projeto Next.js (`public/` ou via `import` de imagem) — não migram sozinhos.
- **Tradução do protótipo pro Next.js real (atenção):** o protótipo interativo (`wireframes/00-prototipo-interativo.html`) troca de "tela" via JS dentro de uma única página — isso é uma técnica de protótipo, **não é pra portar literalmente**. Na implementação real, isso vira rotas de verdade do App Router (`/`, `/projetos/[slug]`, `/sobre`) com SSR, e o "nunca recarrega" fica por conta de um `app/layout.tsx` persistente (logo/nav/rodapé no layout, não em cada página) + transição via Framer Motion (`AnimatePresence`) — o efeito visual é o mesmo, a arquitetura por baixo é diferente e melhor (SEO, compartilhamento de link por case).
- **⚠️ Onde o ciclo autônomo deve parar e pedir confirmação:** deploy/publicação (fase 7) não deve rodar sem check-in — publicar o site é uma ação visível publicamente, fora do escopo de "só codar". O `/goal` pode ir com segurança até o fim da fase 6 (Polish: build local passando, testes verdes, Lighthouse ok) e parar aí pra você revisar antes do `vercel --prod` ou equivalente. Mesma lógica pra criar o repositório no GitHub (se ainda não existir) — confirmo com você antes de criar algo na sua conta.

---

## 7. Requisitos não-funcionais

- **Performance:** Lighthouse ≥ 95 em todas as métricas; imagens otimizadas (`next/image`), fontes com `font-display: swap`.
- **SEO:** meta tags, Open Graph (importante pra quando o link for compartilhado no LinkedIn), sitemap.xml, favicon.
- **Acessibilidade:** contraste AA, navegação por teclado, alt text em imagens.
- **Responsivo:** mobile-first, testado em 375px, 768px, 1440px.
  - **No protótipo (`wireframes/00-prototipo-interativo.html`):** breakpoint em 760px já cobre o essencial — bloco de logo/nav e scrim menores, títulos da home com fonte reduzida e sem o deslocamento diagonal "roleta" (proj-row empilha em coluna: ano acima do título, sem o efeito de contorno/foco que depende de hover), tagline hover-only escondida (não faz sentido em touch), corpo do case (`p-body`) empilha em 1 coluna. **Aplicado por raciocínio, ainda sem verificação visual ao vivo** (extensão do Chrome não conectou na sessão) — pedir pro Stanley conferir num celular real antes de considerar fechado.
  - **Pra implementação real:** os efeitos que dependem de `:hover` (contorno/foco da lista de projetos, deslocamento diagonal) precisam de um comportamento alternativo em touch — provavelmente ativar no toque/tap em vez de hover, ou simplificar pra uma lista reta em mobile como já está no protótipo.
  - **Rodapé de contato oculto no mobile:** o rodapé fino (status, localização, email, redes, idioma) fica lotado/cortado em telas pequenas (confirmado por print) — decidido ocultar esse bloco inteiro em mobile (`display:none` no breakpoint 760px) em vez de tentar encaixar tudo. Consequência pra implementação real: esse conteúdo (contato, redes, toggle de idioma) precisa de outro lugar pra existir em mobile — candidatos naturais são a página `/sobre` (que já tem esse tipo de conteúdo) ou um menu/drawer próprio — **a decidir na fase de build**, não é um requisito fechado ainda.

### 7.1 Idioma — PT-BR + EN

Decidido: o site terá os dois idiomas, com toggle manual (🌐 PT ↔ EN) — mesma abordagem já validada no seu próprio projeto AniMatch (ver seção 4.2), então reaproveitamos o padrão:

- Um dicionário de strings centralizado (`dictionaries.ts` ou equivalente) com todas as chaves de UI em `pt` e `en` — sem lib externa tipo `next-intl`/`react-i18next`, seguindo o mesmo racional do AniMatch (site simples, não precisa do overhead).
- Detecção automática na primeira visita via `navigator.language` do browser, com override manual persistido em `localStorage`.
- Conteúdo que precisa de tradução própria (não é só string de botão): bio, resumo dos projetos/cases, descrição de experiência — cada bloco de texto correndo em pt/en, não é tradução automática.
- CV está em PT-BR — a versão em EN dos textos (bio, cases, experiência) precisa ser escrita/adaptada, não é 1:1 literal do currículo.

**Fluxo de produção de texto (definido):** eu escrevo os textos em PT-BR primeiro (bio, cases, experiência) → você revisa e ajusta o que quiser → depois de aprovado, eu traduzo pra EN mantendo o mesmo tom.

---

## 8. Roadmap de implementação

| Fase | Entregável |
|---|---|
| 1. Conteúdo | Você fornece bio, projetos, skills, experiência, contato |
| 2. Wireframe | ✅ Feito — substituído por um **protótipo interativo** (não mais telas estáticas cinza) em `wireframes/00-prototipo-interativo.html`, sincronizado no projeto "Portfólio Stanley Brenner" no Claude Design |
| 3. Design system | Paleta e logo ✅ prontos (seção 5); tipografia com 3 opções geradas, aguardando escolha (5.1) |
| 4. Setup do projeto | Next.js + Tailwind + deploy inicial na Vercel + **`README.md` do repositório** (o que é o projeto, stack, como rodar local, link pro site quando existir — documentação padrão de projeto, não confundir com o README de perfil da seção 10) |
| 5. Build das seções | **TDD (6.2)**: teste → componente → refatora, nessa ordem. Dados primeiro (`content/*.ts`, sort, status, i18n) → componentes genéricos (`ProjectCard`, `ExperienceItem`, status) → páginas (Home/lista → Projeto → Sobre) |
| 6. Polish | Animações, SEO, OG image, responsividade, acessibilidade, testes Vitest |
| 7. Launch | Domínio próprio (opcional), compartilhar no LinkedIn |
| 8. Pós-launch | Atualizar README do GitHub (`StaanB/StaanB`) com link do portfólio e posicionamento novo — seção 10 |

---

## 9. Decisões pendentes (precisam da sua resposta)

1. **Revisão do protótipo num celular real (única pendência):** os ajustes de mobile (seção 7) foram aplicados por raciocínio, não testados ao vivo — pedir confirmação visual antes de considerar o design 100% fechado.

### Já fechado (não precisa mais decidir)
- Frase de posicionamento / headline do hero (2) — mora dentro de `/sobre` (3, 5)
- Bio final escolhida (2.1)
- Foto → sem foto (4)
- Bloco de disponibilidade → "empregado, aberto a conversar", como flag trocável (2, 6.1)
- Skills agrupadas, com IA em destaque (4.4)
- Timeline de experiência → mora dentro de `/sobre`, junto da bio e skills (3, 5)
- Arquitetura de conteúdo dirigida por dados p/ projetos, experiência e status, com campo de data pra ordenação automática (6.1)
- Idioma → PT-BR + EN com toggle manual, dicionário próprio (7.1)
- Domínio → subdomínio Vercel por enquanto
- Paleta de laranja → `#FF6B1A` principal, `#E8590C` alternativa (5)
- Título do hero → "Software Developer" / "Desenvolvedor de Software" (2)
- Mensagem central / gancho do posicionamento (2)
- Estrutura de projetos → rota própria `/projetos/[slug]` por case, sem sidebar em caixa (3, 5)
- Cases AniMatch, DPMS, Digitalize, Stanley IA, Prolog App, meta → conteúdo completo (4.2–4.7)
- Tratamento de DPMS/Digitalize sem dado de cliente (4.3)
- Fluxo de tradução → PT-BR primeiro, revisão, depois EN (7.1)
- Autenticação Canva → resolvida, MCP disponível (5)
- Ferramenta de wireframe → Claude Design via `DesignSync`, evoluído pra protótipo interativo (5, 8)
- Ordem cronológica dos projetos, contraste do efeito "roleta" → resolvidos (5, 6.1)
- Tipografia → Archivo Black (display) + Work Sans (corpo), já aplicada no protótipo (5.1)
- Cor de fundo → mantido preto + laranja de destaque; inversão avaliada e descartada por enquanto (5)
- Datas reais dos projetos → confirmadas (Prolog/DPMS/Digitalize por você, AniMatch/Stanley IA pelo commit inicial no GitHub); ordem cronológica pura, sem pin manual (6.1)
- Fluxo de desenvolvimento → TDD obrigatório (teste antes do componente), pensado pra rodar como ciclo autônomo (6.2)

---

## 10. Pós-launch — atualização do README pessoal do GitHub

Fazer **depois** que o portfólio estiver no ar (o README vai linkar pra ele). Chequei o README atual (`github.com/StaanB/StaanB`) — está desatualizado em relação ao posicionamento novo:

**O que tem hoje:**
- Diz "atualmente aprendendo AWS e Golang" — não reflete o momento atual (Pleno-Sênior, AI-first, full-stack)
- Não menciona o AniMatch, nem o trabalho com IA/agentes/RAG
- Não linka pro portfólio (ainda não existia)
- Já usa: `profile-3d-contrib` (gráfico de contribuição), `github-profile-summary-cards`, `skillicons.dev` (ícones de stack), badges de contato

**O que atualizar (elementos populares que vale trazer):**
- Trocar "aprendendo AWS e Golang" por algo alinhado à mensagem central: full-stack + AI-first + entregas com zero bugs
- Adicionar link direto pro portfólio no topo (badge ou linha de destaque)
- Adicionar **GitHub Readme Stats** (`github-readme-stats.vercel.app`) — card de stats + linguagens mais usadas — **mas ver nota de instabilidade abaixo antes de adicionar**
- Adicionar **streak stats** (`github-readme-streak-stats`) — mostra sequência de contribuições, populariza bem o perfil
- Atualizar `skillicons.dev` pra incluir Pinecone/Gemini/IA (se tiver ícone) e remover tecnologias que não usa mais
- Manter o tom pessoal/informal que já existe (emojis, menção a animes) — é autêntico e não precisa virar corporativo só porque o portfólio é mais sério
- Badges de contato: adicionar o link do portfólio junto com LinkedIn/Instagram/Gmail

**Quando fizer o resto:** só depois que a spec virar site — nessa hora eu volto e preparo o README atualizado pra você aprovar.

### 10.1 Manutenção já feita (09/jul/2026) — antes do launch, era conserto de bug

Investigado a pedido do Stanley (não era conteúdo, era coisa quebrada de verdade):

- **Action "GitHub-Profile-3D-Contrib" falhando às vezes:** confirmado — 1 falha em 410 execuções (99.75% ok). Causa: o step de commit rodava `git commit -m "generated"` sem checar se havia mudança; em dias sem diff no gráfico gerado, o commit falhava e quebrava o job. **Corrigido e já no ar:** [`b013fd4`](https://github.com/StaanB/StaanB/commit/b013fd4) — agora checa `git diff --staged --quiet` antes de tentar commitar.
- **Imagem quebrada no README:** era o badge do **`github-profile-trophy.vercel.app`** — o serviço público está fora do ar (retorna "Payment required / DEPLOYMENT_DISABLED", não é problema do lado do Stanley). **Removido** no mesmo commit — não tinha como consertar um serviço de terceiro que não existe mais.
- **⚠️ Achado extra pra ficar de olho:** ao tentar usar `github-readme-stats.vercel.app` como substituto do trophy, a instância pública retornou **503 em 3 tentativas seguidas** — é um problema conhecido desse serviço (instância compartilhada fica sobrecarregada). **Não adicionei** pra não trocar um badge quebrado por outro instável. Se quiser mesmo assim usá-lo no update pós-launch (10), a opção mais robusta é **hospedar sua própria instância** (é open-source, deploy grátis na Vercel, sem depender da instância pública compartilhada) — decisão pra quando chegar nessa fase.
- Trocado `http://` por `https://` nos links dos cards de stats existentes (evita um redirect 308 à toa).

### 10.2 Ainda quebrado — "GitHub Commits" / "GitHub Details" (cards do `github-profile-summary-cards`)

Confirmado com print do Stanley que continuam quebrados mesmo depois do fix de http→https (10.1). Investiguei mais a fundo:

- **Causa raiz real:** não é o link, é o **proxy de imagem do próprio GitHub (Camo)**. O serviço `github-profile-summary-cards.vercel.app` responde certinho (200, SVG válido) quando acessado direto — mas o Camo (que o GitHub usa pra servir toda imagem externa em README, por segurança) **rejeita a resposta com 400 "Non-Image content-type returned"**, porque o header `Content-Type: image/svg+xml; charset=utf-8` que o serviço devolve não bate com o que o Camo aceita. Bug do lado do serviço terceiro, não dá pra consertar só editando o README.
- **Tentei o substituto óbvio (`github-readme-stats`)** de novo, sem sucesso — **está fora do ar de verdade**: testei os dois endpoints principais (`/api` e `/api/top-langs`), com retry, 503 em todos. Não é instabilidade pontual, confirmei duas vezes com intervalo.

**Plano de melhoria:**
1. ✅ **Feito** — cards do `summary-cards` removidos: [`a6d2317`](https://github.com/StaanB/StaanB/commit/a6d2317). `skillicons.dev` e os badges de contato (shields.io) continuam de pé — esses dois nunca falharam nos testes.
2. **Aprovado condicionalmente, não feito ainda:** hospedar sua própria instância do `github-readme-stats` (open-source, deploy grátis na Vercel) — resolve a dependência da instância pública sobrecarregada e o problema do Camo não se repetiria (você controla o header de content-type). Combinado: só faz sentido se o resultado final ficar visualmente igual ao README de hoje, sem regressão — senão não compensa o esforço extra de manter uma instância própria no ar.
3. **Aprovado condicionalmente, não feito ainda:** README mais "estático" — só skillicons + badges de contato + gráfico de contribuição 3D, sem card dinâmico de terceiro. Combinado: só se eu deixar bem organizado (não é só remover, é reorganizar o espaçamento/hierarquia depois que os cards saírem).

**Nota:** 2 e 3 são alternativas entre si (uma mantém card de stats, a outra abre mão dele) — não fazem sentido juntas. Ficam registradas as duas condições; a escolha entre elas fica pra quando entrarmos nessa fase (pós-launch, seção 10).
