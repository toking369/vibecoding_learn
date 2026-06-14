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
│   │       └── cases/           # 案例库（1 case study）
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

3. **Case studies** (photography-portfolio): Detailed step-by-step walkthrough covering all 9 phases. Copy-paste ready prompts. Include Skills with install commands.

4. **FAQ pages**: Categorized Q&A, organized by topic.

## Setup & Commands

```bash
cd website
npm install            # Install dependencies
npm run dev            # Dev server (localhost:4321)
npm run build          # Static build → dist/
npm run preview        # Preview production build
```
