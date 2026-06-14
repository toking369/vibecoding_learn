# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Purpose

This repository is a **knowledge base and practical guide** teaching complete beginners (zero programming background) how to build websites using **Vibe Coding** — AI-assisted programming where natural language replaces manual coding. It covers the full lifecycle from idea to launch.

The content is published as an Astro static site at `website/`.

## Project Structure

```
website/
├── src/
│   ├── content/
│   │   └── zh/
│   │       ├── intro/           # 了解 Vibe Coding（3 pages）
│   │       ├── phases/          # 9 个实战阶段（phase-00 ~ phase-09）
│   │       └── cases/           # 案例库（9 个完整案例）
│   ├── components/
│   │   ├── layout/              # Header, Sidebar, Footer, MobileNav
│   │   ├── ui/                  # Icon, PhaseCard
│   │   ├── content/             # PhaseNav, CodePreview, PromptCard, Admonition
│   │   └── interactive/         # SearchDialog (Pagefind), ThemeToggle (React)
│   ├── layouts/
│   │   ├── BaseLayout.astro     # HTML shell, noise overlay, skip-to-content, scroll reveal
│   │   ├── DocLayout.astro      # Content pages (intro/cases) — right-side TOC
│   │   └── PhaseLayout.astro    # Phase pages — left sidebar + prev/next nav
│   ├── pages/
│   │   ├── index.astro          # Home page
│   │   ├── intro/[slug].astro   # Dynamic routes
│   │   ├── phases/[slug].astro
│   │   ├── cases/[slug].astro
│   │   ├── skills/index.astro   # Skills index
│   │   ├── faq/index.astro      # FAQ (30 questions + 30 pitfalls)
│   │   ├── prompts/index.astro  # Prompt templates
│   │   └── exercises/index.astro
│   ├── lib/
│   │   ├── constants.ts         # NAV_ITEMS, PHASES, SITE_TITLE
│   │   └── utils.ts             # Content collection helpers
│   └── styles/
│       └── global.css           # Design system + all content styles
├── public/
│   └── favicon.svg
├── astro.config.mjs
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── vercel.json
```

## Tech Stack

| Layer | Technology | Notes |
|-------|-----------|-------|
| Framework | Astro 6.x (SSG) | Static site generation |
| Styling | Tailwind CSS v4 + CSS custom properties | `.content-article` replaces `@tailwindcss/typography` (not installed) |
| Content | MDX + Content Collections | Structured content in `src/content/zh/` |
| Search | Pagefind (astro-pagefind) | Full-text static search |
| Interactive islands | React 19 | ThemeToggle, SearchDialog |
| Code highlighting | Shiki (Astro built-in) | |
| Icons | Inline SVG (Icon.astro component) | |

## Design System

CSS custom properties defined in `src/styles/global.css`:

### Colors
- **Brand**: `#2D1B69` (warm indigo) → `--color-brand`
- **Accent**: `#E85D3A` (vibrant coral) → `--color-accent`
- **Background**: `#FCFCFA` (warm off-white)
- **Surface**: `#FFFFFF` with `--color-surface-hover: #FAFAF8`
- **Text**: `#292524` (warm dark gray)
- **Border**: `#E7E5E4`
- Dark mode: all tokens switch via `.dark` class

### Typography
- Display: `ZCOOL QingKe HuangYou` (Chinese display, loaded async via `media="print"`)
- Body: `Noto Sans SC`
- Mono: `JetBrains Mono`

### Content Styling
All MDX content uses `.content-article` class (not Tailwind prose — typography plugin is not installed). Key styles:
- `h2`: margin-top 3rem
- `h3`: margin-top 2.5rem
- `p`: margin-bottom 1.25rem, line-height 1.85
- `table`: rounded border, hover rows
- `pre`: rounded-xl border, copy button
- `blockquote`: left accent bar
- `a`: accent color, hover underline

## Layout System

| Layout | Used by | Features |
|--------|---------|----------|
| `BaseLayout` | All pages | HTML shell, header, footer, mobile nav, noise overlay, skip-to-content, scroll reveal observer, code copy button |
| `DocLayout` | intro/, cases/ | Content-only, right-side auto TOC (built from h2, desktop only), scroll spy |
| `PhaseLayout` | phases/ | Left sidebar (phase nav), prev/next navigation, no right TOC |

## Key Features

- **Dark/Light theme**: localStorage + anti-flash inline script in `<head>`, React ThemeToggle island (`client:idle`)
- **Search**: Pagefind, SearchDialog loaded `client:idle`, triggered by ⌘K or search button
- **Code copy**: Each `<pre>` block gets a hover "📋 复制" button (injected by BaseLayout script)
- **Scroll reveal**: `.reveal` class + IntersectionObserver for fade-in on scroll
- **View transitions**: Disabled (removed ClientRouter — caused page flicker on nav clicks)
- **Right TOC**: Auto-generated from h2 headings in DocLayout, with scroll spy highlighting

## Content Guidelines

### Audience
- Zero-programming beginners (小白). Many have never opened a terminal.
- Chinese-speaking users. All content is in Simplified Chinese (zh).

### Tone
- Warm, encouraging, patient. Use analogies and 大白话 (plain language).
- Every section should follow: what-to-do → prompt templates → tools/skills → practice exercise.
- Always explain jargon with real-world analogies before using the term.

### Content Types

1. **Phase pages** (phase-00 ~ phase-09): Follow the 9-stage methodology. Each prompt section should include:
   - Recommended Skill with install command
   - How to use the Skill
   - Fallback prompt template if not using Skill
   - Practice exercise at the end

2. **Intro pages** (what-is-vibe-coding, why-now, misconceptions): Educational, concept-heavy. Use comparisons, tables, and examples extensively.

3. **Case studies** (9 projects): Detailed step-by-step walkthrough covering all 9 phases. Each case includes:
   - **Project overview** —人物画像、目标、用时、最终成果
   - **Skills list** — 一键安装命令
   - **Phase 0** — 准备工作（注册账号、安装工具）
   - **Phase 1** — PRD 提示词（可直接复制给 AI）
   - **Phase 2** — 设计原型提示词
   - **Phase 3** — 前端开发（分步骤复制粘贴的详细提示词）
   - **Phase 4** — 数据库构建提示词（含完整的建表 SQL/MongoDB/Firestore 结构）
   - **Phase 5** — 测试清单
   - **Phase 6** — 部署方案
   - **Phase 7-9** — 运维、运营、文案优化
   - **File structure** — 完整项目文件清单
   - **进阶挑战** — 扩展功能列表
   
   Case study index is at `src/pages/cases/index.astro` with `src/components/interactive/CaseFilter.astro` for filtering by difficulty/category/tech.

4. **FAQ pages**: Categorized Q&A, organized by topic.

## MDX Guidelines

- Use `{'{varName}'}` to escape curly braces in regular text (not inside fenced code blocks).
- Inside fenced code blocks (``` ```), `{varName}` is safe — no escaping needed.
- Add a "复制这段提示词给 AI" section before each major step (PRD, design, database, prompts) so readers can copy-paste directly.
- Database sections should include: copy-paste prompt → "得到的结果" → actual SQL/schema → configuration steps.

## Setup & Commands

```bash
cd website
npm install            # Install dependencies
npm run dev            # Dev server (localhost:4321)
npm run build          # Static build → dist/
npm run preview        # Preview production build
```
