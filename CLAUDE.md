# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Purpose

This repository is a **knowledge base and practical guide** teaching complete beginners (zero programming background) how to build websites using **Vibe Coding** — AI-assisted programming where natural language replaces manual coding. It covers the full lifecycle from idea to launch.

## Key Documents

| File | Content |
|------|---------|
| `产品文档/PRD-vibe-coding-小白建站指南-V1.0.md` | 入门版 — Vibe Coding 概念科普 + 单页建站教程 |
| `产品文档/PRD-vibe-coding-小白建站指南-V1.1.md` | 进阶版 — 全流程实战手册，9 阶段覆盖产品/设计/前端/后端/数据库/测试/部署/运维/运营/文案 |

## Core Methodology

The "Vibe Coding" approach follows this flow across all phases:

1. **Describe** — Tell AI what you want in natural language
2. **Generate** — AI produces the code/solution
3. **Review** — Preview and verify the output
4. **Iterate** — Refine with follow-up prompts
5. **Deploy** — Launch the result

## Development Lifecycle (9 Phases)

Phase 0: Setup — Tools, accounts, environment
Phase 1: Product Definition — PRD writing, requirements, prompt engineering
Phase 2: Design & Prototyping — UI/UX, Figma MCP integration
Phase 3: Frontend — HTML/CSS/JS → Tailwind → React/Next.js/Vue
Phase 4: Backend & Data — BaaS (Supabase/Firebase) → Node.js/Express → Python/FastAPI
Phase 5: Testing — Code review, checklists, AI-assisted testing
Phase 6: Deployment — Vercel, Netlify, GitHub Pages, Render
Phase 7: Ops & Monitoring — Health checks, performance optimization
Phase 8: Growth — SEO, content planning, analytics
Phase 9: Copywriting — Website copy, marketing copy

## AI Tools & Skills Ecosystem

### Core AI Tools
- **Claude Code** — Primary AI coding assistant (CLI or VSCode extension)
- **Cursor** — AI-native IDE alternative
- **VS Code** — Code editor

### Skills CLI (Package Manager for Agent Skills)
```bash
npx skills find [keyword]          # Search for skills
npx skills add <pkg@skill> -g -y   # Install a skill globally
npx skills check                    # Check for updates
```

This repo references 30+ skills across 8 categories; see the Skills index in V1.1 doc.

### MCP (Model Context Protocol) Tools
- **WebSearch** — Market research, keyword analysis
- **WebFetch** — Reference site analysis
- **Figma MCP** — Design-to-code workflow
- **Playwright MCP** — Browser preview & testing
- **Node REPL MCP** — Run JavaScript/Node.js inline

## Technology Stacks Covered

### Frontend (Progressive complexity)
- Level 1: Pure HTML + CSS + JS (no setup needed)
- Level 2: + Tailwind CSS (CDN or local)
- Level 3: React / Next.js (requires Node.js)
- Level 4: Vue / Nuxt (alternative)

### Backend (3 paths)
- Zero-backend: Formspree, Giscus, Google Sheets
- BaaS: Supabase (recommended), Firebase
- Self-hosted: Node.js/Express or Python/FastAPI/Flask

### Database
- SQLite (simplest, file-based)
- Supabase PostgreSQL (cloud, recommended)
- Firebase Firestore (real-time)
- Via Prisma ORM (AI-friendly query layer)

## Deployment Targets
- Vercel (recommended for static + Next.js, free)
- Netlify (static sites, free)
- GitHub Pages (pure static, free)
- Render (backend projects, free tier)

## Voice & Audience

When writing content in this repo:
- **Audience**: Zero-programming beginners (小白). Many have never opened a terminal.
- **Tone**: Warm, encouraging, patient. Use analogies and 大白话 (plain language).
- **Structure**: Every section should have: what-to-do → prompt templates → tools/skills → practice exercise.
- **Concepts**: Always explain jargon with real-world analogies before using the term.
