# Vibe Coding 小白建站指南 — 网站实施计划

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 基于 Astro 5.x 构建一个完整的教学网站，将 PRD V1.0 和 V1.1 的全部内容转化为结构化的、可交互的网站体验。

**Architecture:** Astro SSG + Content Collections (MDX) 驱动内容层，Tailwind CSS v4 实现现代极简设计系统，Pagefind 提供离线全文搜索，View Transitions API 实现平滑页面过渡。所有页面在构建时预渲染，核心交互（搜索、代码预览、主题切换）通过 Astro Islands 实现客户端水合。

**Tech Stack:** Astro 5.x | TypeScript | Tailwind CSS v4 | MDX | Pagefind | Shiki | View Transitions API

**Project Root:** `website/`

---

## 文件结构总览

```
website/
├── src/
│   ├── content/
│   │   └── zh/
│   │       ├── intro/
│   │       │   ├── what-is-vibe-coding.mdx
│   │       │   ├── why-now.mdx
│   │       │   └── misconceptions.mdx
│   │       ├── setup/
│   │       │   ├── checklist.mdx
│   │       │   ├── tool-installation.mdx
│   │       │   └── account-registration.mdx
│   │       ├── phases/
│   │       │   ├── phase-00.mdx  (环境搭建)
│   │       │   ├── phase-01.mdx  (产品定义)
│   │       │   ├── phase-02.mdx  (设计与原型)
│   │       │   ├── phase-03.mdx  (前端开发)
│   │       │   ├── phase-04.mdx  (后端与数据)
│   │       │   ├── phase-05.mdx  (测试)
│   │       │   ├── phase-06.mdx  (部署上线)
│   │       │   ├── phase-07.mdx  (运维与监控)
│   │       │   ├── phase-08.mdx  (运营与增长)
│   │       │   └── phase-09.mdx  (文案创作)
│   │       ├── cases/
│   │       │   └── photography-portfolio.mdx
│   │       ├── skills/
│   │       │   └── index.mdx
│   │       ├── faq/
│   │       │   └── index.mdx
│   │       ├── prompts/
│   │       │   └── index.mdx
│   │       └── exercises/
│   │           └── index.mdx
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.astro
│   │   │   ├── Sidebar.astro
│   │   │   ├── Footer.astro
│   │   │   └── MobileNav.astro
│   │   ├── ui/
│   │   │   ├── Card.astro
│   │   │   ├── Button.astro
│   │   │   ├── Badge.astro
│   │   │   ├── Icon.astro
│   │   │   ├── Tag.astro
│   │   │   └── PhaseCard.astro
│   │   ├── content/
│   │   │   ├── PhaseNav.astro
│   │   │   ├── TableOfContents.astro
│   │   │   ├── CodePreview.astro
│   │   │   ├── PromptCard.astro
│   │   │   ├── SkillCard.astro
│   │   │   ├── Timeline.astro
│   │   │   └── Admonition.astro
│   │   └── interactive/
│   │       ├── SearchDialog.tsx
│   │       ├── ThemeToggle.tsx
│   │       └── CodeSandbox.tsx
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   ├── DocLayout.astro
│   │   └── PhaseLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── intro/[slug].astro
│   │   ├── setup/[slug].astro
│   │   ├── phases/[slug].astro
│   │   ├── cases/[slug].astro
│   │   ├── skills/index.astro
│   │   ├── faq/index.astro
│   │   ├── prompts/index.astro
│   │   └── exercises/index.astro
│   ├── lib/
│   │   ├── constants.ts
│   │   └── utils.ts
│   └── styles/
│       └── global.css
├── public/
│   ├── favicon.svg
│   └── og-image.png (optional)
├── astro.config.mjs
├── tsconfig.json
├── tailwind.config.ts
├── package.json
└── README.md
```

---

## P0 — 项目基础与核心架构 (最高优先级)

---

### Task 0.1: 初始化 Astro 项目

**Files:**
- Create: `website/package.json`
- Create: `website/astro.config.mjs`
- Create: `website/tsconfig.json`
- Create: `website/README.md`

- [ ] **Step 1: 创建项目目录并初始化**

```bash
cd "c:\Users\WindowsU3\Desktop\workspace\learn\vibeCoding"
mkdir -p website
cd website

# 创建 package.json
cat > package.json << 'EOF'
{
  "name": "vibe-coding-guide",
  "type": "module",
  "version": "1.0.0",
  "description": "Vibe Coding 小白建站指南 - 从零到上线完全教学网站",
  "scripts": {
    "dev": "astro dev",
    "build": "astro build",
    "preview": "astro preview",
    "astro": "astro"
  }
}
EOF
```

- [ ] **Step 2: 安装 Astro 和核心依赖**

```bash
cd "c:\Users\WindowsU3\Desktop\workspace\learn\vibeCoding\website"
npm install astro@latest
npm install @astrojs/mdx @astrojs/tailwindcss @astrojs/sitemap
npm install tailwindcss @tailwindcss/vite
npm install pagefind
npm install typescript @types/node --save-dev
```

- [ ] **Step 3: 创建 astro.config.mjs**

```js
// website/astro.config.mjs
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://vibe-coding-guide.vercel.app',
  output: 'static',
  integrations: [
    mdx(),
    sitemap(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  i18n: {
    defaultLocale: 'zh',
    locales: ['zh', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
```

- [ ] **Step 4: 创建 tsconfig.json**

```json
{
  "extends": "astro/tsconfigs/strict",
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"],
      "@components/*": ["src/components/*"],
      "@layouts/*": ["src/layouts/*"],
      "@content/*": ["src/content/*"],
      "@lib/*": ["src/lib/*"]
    },
    "jsx": "react-jsx",
    "jsxImportSource": "react"
  },
  "include": ["src/**/*", "astro.config.mjs"]
}
```

- [ ] **Step 5: 验证项目初始化**

```bash
cd "c:\Users\WindowsU3\Desktop\workspace\learn\vibeCoding\website"
npx astro --version
# Expected: Astro v5.x.x
```

- [ ] **Step 6: 初始化 git 并提交**

```bash
cd "c:\Users\WindowsU3\Desktop\workspace\learn\vibeCoding"
echo "node_modules/\n.env\ndist/\n.pagefind/" >> website/.gitignore
git add website/package.json website/astro.config.mjs website/tsconfig.json website/.gitignore
git commit -m "feat: initialize Astro project scaffold"
```

---

### Task 0.2: 全局样式和主题系统

**Files:**
- Create: `website/src/styles/global.css`
- Create: `website/tailwind.config.ts`

- [ ] **Step 1: 创建全局 CSS 文件**

```css
/* website/src/styles/global.css */
@import "tailwindcss";

/* 自定义主题变量 */
:root {
  /* 主色板 */
  --color-primary: #0F172A;
  --color-primary-light: #1E293B;
  --color-accent: #0891B2;
  --color-accent-light: #06B6D4;
  --color-accent-dark: #0E7490;
  
  /* 中性色 */
  --color-bg: #F8FAFC;
  --color-bg-secondary: #F1F5F9;
  --color-surface: #FFFFFF;
  --color-border: #E2E8F0;
  
  /* 文字 */
  --color-text: #1E293B;
  --color-text-secondary: #64748B;
  --color-text-muted: #94A3B8;
  
  /* 功能色 */
  --color-success: #10B981;
  --color-warning: #F59E0B;
  --color-error: #EF4444;
  --color-info: #3B82F6;
  
  /* 排版 */
  --font-sans: 'Noto Sans SC', system-ui, -apple-system, sans-serif;
  --font-mono: 'JetBrains Mono', 'Fira Code', monospace;
  
  /* 间距系统 */
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-6: 1.5rem;
  --space-8: 2rem;
  --space-12: 3rem;
  --space-16: 4rem;
  
  /* 圆角 */
  --radius-sm: 0.375rem;
  --radius-md: 0.5rem;
  --radius-lg: 0.75rem;
  --radius-xl: 1rem;
  
  /* 阴影 */
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.07);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.08);
}

/* 深色模式 */
.dark {
  --color-primary: #F8FAFC;
  --color-primary-light: #E2E8F0;
  --color-accent: #22D3EE;
  --color-accent-light: #67E8F9;
  --color-accent-dark: #06B6D4;
  
  --color-bg: #0F172A;
  --color-bg-secondary: #1E293B;
  --color-surface: #1E293B;
  --color-border: #334155;
  
  --color-text: #F1F5F9;
  --color-text-secondary: #94A3B8;
  --color-text-muted: #64748B;
}

/* 全局基础样式 */
html {
  font-family: var(--font-sans);
  background-color: var(--color-bg);
  color: var(--color-text);
  scroll-behavior: smooth;
}

body {
  min-height: 100vh;
  line-height: 1.75;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* 排版样式 */
h1, h2, h3, h4, h5, h6 {
  font-weight: 700;
  line-height: 1.3;
  color: var(--color-primary);
}

h1 { font-size: 2.5rem; letter-spacing: -0.02em; }
h2 { font-size: 1.75rem; letter-spacing: -0.01em; }
h3 { font-size: 1.375rem; }
h4 { font-size: 1.125rem; }

a {
  color: var(--color-accent);
  text-decoration: none;
  transition: color 0.2s;
}
a:hover { color: var(--color-accent-light); }

code {
  font-family: var(--font-mono);
  font-size: 0.875em;
  padding: 0.2em 0.4em;
  background: var(--color-bg-secondary);
  border-radius: var(--radius-sm);
}

pre {
  font-family: var(--font-mono);
  background: var(--color-primary) !important;
  border-radius: var(--radius-lg);
  padding: 1.25rem;
  overflow-x: auto;
}

pre code {
  background: transparent;
  padding: 0;
  font-size: 0.8125rem;
}

/* 动画 */
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(1rem); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fade-in-up {
  animation: fadeInUp 0.5s ease-out both;
}
```

- [ ] **Step 2: 创建 Tailwind 配置**

```ts
// website/tailwind.config.ts
import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0F172A',
          light: '#1E293B',
        },
        accent: {
          DEFAULT: '#0891B2',
          light: '#06B6D4',
          dark: '#0E7490',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          secondary: '#F1F5F9',
        },
      },
      fontFamily: {
        sans: ['Noto Sans SC', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.5s ease-out both',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(1rem)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
} satisfies Config;
```

- [ ] **Step 3: 提交**

```bash
git add website/src/styles/global.css website/tailwind.config.ts
git commit -m "feat: add global styles and theme system"
```

---

### Task 0.3: 基础布局和通用组件

**Files:**
- Create: `website/src/components/layout/Header.astro`
- Create: `website/src/components/layout/Footer.astro`
- Create: `website/src/components/layout/Sidebar.astro`
- Create: `website/src/components/layout/MobileNav.astro`
- Create: `website/src/components/ui/Icon.astro`
- Create: `website/src/layouts/BaseLayout.astro`
- Create: `website/src/lib/constants.ts`

- [ ] **Step 1: 创建站点常量**

```ts
// website/src/lib/constants.ts
export const SITE_TITLE = 'Vibe Coding 建站指南';
export const SITE_DESCRIPTION = '从零开始，用 AI 辅助编程搭建并发布你的第一个网站';

export const NAV_ITEMS = [
  { label: '了解 Vibe Coding', href: '/intro/what-is-vibe-coding' },
  { label: '准备工作', href: '/setup/checklist' },
  { label: '全流程实战', href: '/phases/phase-00' },
  { label: '案例库', href: '/cases/photography-portfolio' },
  { label: 'Skills 索引', href: '/skills' },
  { label: 'FAQ', href: '/faq' },
] as const;

export const PHASES = [
  { id: 'phase-00', num: 0, title: '环境搭建', icon: '🔧', description: '工具安装、账号注册、开发环境配置' },
  { id: 'phase-01', num: 1, title: '产品定义', icon: '📋', description: '写 PRD、需求拆解、提示词模板' },
  { id: 'phase-02', num: 2, title: '设计与原型', icon: '🎨', description: 'UI/UX 设计、Figma 联动' },
  { id: 'phase-03', num: 3, title: '前端开发', icon: '💻', description: '多页面站点、响应式设计、组件化' },
  { id: 'phase-04', num: 4, title: '后端与数据', icon: '🗄️', description: '数据库、API 接口、前后端联调' },
  { id: 'phase-05', num: 5, title: '测试', icon: '🧪', description: '功能测试、AI 辅助自动化测试' },
  { id: 'phase-06', num: 6, title: '部署上线', icon: '🚀', description: 'Vercel/Netlify、域名、CI/CD' },
  { id: 'phase-07', num: 7, title: '运维与监控', icon: '📊', description: '日志、性能监控、安全防护' },
  { id: 'phase-08', num: 8, title: '运营与增长', icon: '📈', description: 'SEO、内容运营、数据分析' },
  { id: 'phase-09', num: 9, title: '文案创作', icon: '✍️', description: '网站文案、营销文案、AI 辅助写作' },
] as const;

export const SOCIAL_LINKS = {
  github: 'https://github.com',
} as const;
```

- [ ] **Step 2: 创建 Icon 组件**

```astro
---
// website/src/components/ui/Icon.astro
export interface Props {
  name: 'menu' | 'close' | 'search' | 'sun' | 'moon' | 'github' | 'arrow-right' | 'check' | 'copy' | 'external-link';
  size?: number;
  class?: string;
}

const { name, size = 20 } = Astro.props;
---

<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
{
  name === 'menu' && <><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>
}
{
  name === 'close' && <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>
}
{
  name === 'search' && <><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></>
}
{
  name === 'sun' && <><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></>
}
{
  name === 'moon' && <><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></>
}
{
  name === 'github' && <><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></>
}
{
  name === 'arrow-right' && <><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></>
}
{
  name === 'check' && <><polyline points="20 6 9 17 4 12"/></>
}
{
  name === 'copy' && <><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></>
}
{
  name === 'external-link' && <><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></>
}
</svg>
```

- [ ] **Step 3: 创建 Header 组件**

```astro
---
// website/src/components/layout/Header.astro
import { SITE_TITLE, NAV_ITEMS } from '@lib/constants';
import Icon from '@components/ui/Icon.astro';
import ThemeToggle from '@components/interactive/ThemeToggle.tsx';
import SearchDialog from '@components/interactive/SearchDialog.tsx';

export interface Props {
  currentPath?: string;
}
const { currentPath = '' } = Astro.props;
---

<header class="sticky top-0 z-50 bg-[var(--color-bg)]/80 backdrop-blur-md border-b border-[var(--color-border)]">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between h-16">
      {/* Logo */}
      <a href="/" class="flex items-center gap-2 font-bold text-lg text-[var(--color-primary)] hover:text-[var(--color-accent)] transition-colors">
        <span class="text-2xl">⚡</span>
        <span class="hidden sm:inline">{SITE_TITLE}</span>
      </a>

      {/* Desktop Navigation */}
      <nav class="hidden lg:flex items-center gap-8">
        {NAV_ITEMS.slice(0, 4).map((item) => (
          <a
            href={item.href}
            class="text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors"
          >
            {item.label}
          </a>
        ))}
      </nav>

      {/* Actions: Search + Theme + Mobile Menu */}
      <div class="flex items-center gap-3">
        <SearchDialog client:load />
        <ThemeToggle client:idle />
        <button id="mobile-menu-btn" class="lg:hidden p-2 text-[var(--color-text-secondary)] hover:text-[var(--color-text)]" aria-label="菜单">
          <Icon name="menu" size={24} />
        </button>
      </div>
    </div>
  </div>
</header>

<script>
  document.getElementById('mobile-menu-btn')?.addEventListener('click', () => {
    const sidebar = document.getElementById('mobile-sidebar');
    if (sidebar) {
      sidebar.classList.toggle('hidden');
      sidebar.classList.toggle('flex');
    }
  });
</script>
```

- [ ] **Step 4: 创建 Footer 组件**

```astro
---
// website/src/components/layout/Footer.astro
import { SITE_TITLE, SOCIAL_LINKS } from '@lib/constants';
---

<footer class="border-t border-[var(--color-border)] bg-[var(--color-bg-secondary)]">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div>
        <h3 class="font-bold text-lg mb-3">{SITE_TITLE}</h3>
        <p class="text-sm text-[var(--color-text-secondary)]">
          面向零编程基础人群的 Vibe Coding 实操指南。<br/>
          用 AI 辅助编程，从想法到上线，几小时搞定。
        </p>
      </div>
      <div>
        <h4 class="font-semibold text-sm mb-3">快速导航</h4>
        <ul class="space-y-2 text-sm text-[var(--color-text-secondary)]">
          <li><a href="/intro/what-is-vibe-coding" class="hover:text-[var(--color-accent)]">了解 Vibe Coding</a></li>
          <li><a href="/phases/phase-00" class="hover:text-[var(--color-accent)]">全流程实战</a></li>
          <li><a href="/skills" class="hover:text-[var(--color-accent)]">Skills 索引</a></li>
          <li><a href="/faq" class="hover:text-[var(--color-accent)]">FAQ</a></li>
        </ul>
      </div>
      <div>
        <h4 class="font-semibold text-sm mb-3">相关资源</h4>
        <ul class="space-y-2 text-sm text-[var(--color-text-secondary)]">
          <li><a href="https://docs.astro.build" target="_blank" class="hover:text-[var(--color-accent)]">Astro 文档</a></li>
          <li><a href="https://tailwindcss.com" target="_blank" class="hover:text-[var(--color-accent)]">Tailwind CSS</a></li>
          <li><a href="https://vercel.com" target="_blank" class="hover:text-[var(--color-accent)]">Vercel</a></li>
        </ul>
      </div>
    </div>
    <div class="mt-8 pt-6 border-t border-[var(--color-border)] text-center text-xs text-[var(--color-text-muted)]">
      <p>© {new Date().getFullYear()} Vibe Coding 建站指南. Built with Astro ⚡</p>
    </div>
  </div>
</footer>
```

- [ ] **Step 5: 创建 Sidebar 组件**

```astro
---
// website/src/components/layout/Sidebar.astro
import { PHASES } from '@lib/constants';

export interface Props {
  currentPhase?: string;
  class?: string;
}

const { currentPhase = '', class: className = '' } = Astro.props;
---

<aside class={`w-64 shrink-0 border-r border-[var(--color-border)] bg-[var(--color-bg)] overflow-y-auto ${className}`}>
  <nav class="p-4">
    <div class="mb-6">
      <h3 class="text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-wider mb-3">全流程实战</h3>
      <ul class="space-y-1">
        {PHASES.map((phase) => {
          const isActive = currentPhase === phase.id;
          return (
            <li>
              <a
                href={`/phases/${phase.id}`}
                class={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${
                  isActive
                    ? 'bg-[var(--color-accent)]/10 text-[var(--color-accent)] font-medium'
                    : 'text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-secondary)] hover:text-[var(--color-text)]'
                }`}
              >
                <span class="text-base">{phase.icon}</span>
                <div class="flex-1 min-w-0">
                  <div class="truncate">{phase.title}</div>
                  <div class="text-xs text-[var(--color-text-muted)] truncate">阶段 {phase.num}</div>
                </div>
              </a>
            </li>
          );
        })}
      </ul>
    </div>

    <div>
      <h3 class="text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-wider mb-3">更多内容</h3>
      <ul class="space-y-1">
        <li><a href="/intro/what-is-vibe-coding" class="block px-3 py-2 rounded-lg text-sm text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-secondary)] hover:text-[var(--color-text)] transition-colors">了解 Vibe Coding</a></li>
        <li><a href="/setup/checklist" class="block px-3 py-2 rounded-lg text-sm text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-secondary)] hover:text-[var(--color-text)] transition-colors">准备工作</a></li>
        <li><a href="/cases/photography-portfolio" class="block px-3 py-2 rounded-lg text-sm text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-secondary)] hover:text-[var(--color-text)] transition-colors">案例库</a></li>
        <li><a href="/skills" class="block px-3 py-2 rounded-lg text-sm text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-secondary)] hover:text-[var(--color-text)] transition-colors">Skills 索引</a></li>
        <li><a href="/faq" class="block px-3 py-2 rounded-lg text-sm text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-secondary)] hover:text-[var(--color-text)] transition-colors">FAQ</a></li>
        <li><a href="/prompts" class="block px-3 py-2 rounded-lg text-sm text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-secondary)] hover:text-[var(--color-text)] transition-colors">提示词速查</a></li>
        <li><a href="/exercises" class="block px-3 py-2 rounded-lg text-sm text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-secondary)] hover:text-[var(--color-text)] transition-colors">练习总览</a></li>
      </ul>
    </div>
  </nav>
</aside>
```

- [ ] **Step 6: 创建 BaseLayout**

```astro
---
// website/src/layouts/BaseLayout.astro
import '@styles/global.css';
import Header from '@components/layout/Header.astro';
import Footer from '@components/layout/Footer.astro';

export interface Props {
  title: string;
  description?: string;
  currentPath?: string;
}

const { title, description = '' } = Astro.props;
const currentPath = Astro.url.pathname;
---

<!doctype html>
<html lang="zh-CN" class="scroll-smooth">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <title>{title} | Vibe Coding 建站指南</title>
    <meta name="description" content={description} />
    <meta name="theme-color" content="#0F172A" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
    <ViewTransition />
  </head>
  <body class="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
    <Header currentPath={currentPath} />
    <slot />
    <Footer />
  </body>
</html>
```

- [ ] **Step 7: 提交**

```bash
git add website/src/components/layout/ website/src/components/ui/Icon.astro website/src/layouts/BaseLayout.astro website/src/lib/constants.ts
git commit -m "feat: add base layout and navigation components"
```

---

### Task 0.4: Content Collections 配置

**Files:**
- Create: `website/src/content/config.ts`
- Create: `website/src/content/zh/intro/what-is-vibe-coding.mdx`
- Create: `website/src/content/zh/intro/why-now.mdx`
- Create: `website/src/content/zh/intro/misconceptions.mdx`

- [ ] **Step 1: 创建 Content Collections 配置**

```ts
// website/src/content/config.ts
import { defineCollection, z } from 'astro:content';

const phasesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    phase: z.number(),
    description: z.string(),
    icon: z.string(),
    order: z.number(),
    draft: z.boolean().optional(),
  }),
});

const docsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    section: z.string(),
    order: z.number(),
    draft: z.boolean().optional(),
  }),
});

export const collections = {
  phases: phasesCollection,
  intro: docsCollection,
  setup: docsCollection,
  cases: docsCollection,
};
```

- [ ] **Step 2: 创建 intro 内容文件（占位，实际内容后续填充）**

```mdx
---
# website/src/content/zh/intro/what-is-vibe-coding.mdx
title: '什么是 Vibe Coding？'
description: '一句话理解 Vibe Coding——用自然语言告诉 AI 你想要什么，AI 帮你写代码'
section: 'intro'
order: 1
---

## 一句话定义

**Vibe Coding** 是一种全新的编程方式：你不再需要手写每一行代码，而是用自然语言描述你想要什么，AI 帮你生成代码。

> "像跟朋友聊天一样告诉 AI 你想要什么网站，它帮你写代码"

### 核心三部曲

1. **你描述** — 用自然语言告诉 AI 你的需求
2. **AI 生成** — AI 根据你的描述写出完整代码
3. **你验收** — 预览效果，提出修改意见，循环迭代

### 故事的开始

想象一下：一个完全不会编程的人，用了 2 个小时，做出了自己的博客网站。

这不是科幻故事，这是正在发生的事。

### 为什么这很重要？

过去，建一个网站需要：
- 学习 HTML / CSS / JavaScript（至少几个月）
- 理解服务器、域名、部署等概念（数周）
- 反复调试、修复 bug（数天到数周）

而现在，有了 AI 编程助手，**一个完全不懂代码的人，在有人引导的情况下，完全可以在几小时内完成从想法到上线**。
```

```mdx
---
# website/src/content/zh/intro/why-now.mdx
title: '为什么现在可以？'
description: 'AI 编程工具的突破性进展让 Vibe Coding 成为可能'
section: 'intro'
order: 2
---

## 三大原因

### 1. AI 变聪明了

近半年 AI 代码生成质量大幅提升：
- Claude 的 Sonnet / Opus 系列能生成完整的 HTML/CSS/JS 页面
- 代码理解能力达到专业开发者水平
- 能处理复杂的交互逻辑和响应式设计

### 2. 工具变简单了

- Cursor / Windsurf 等 IDE 内置 AI，可以实时对话修改代码
- Claude Code 让你在终端里直接用自然语言编程
- VS Code 完全免费，开箱即用

### 3. 部署变免费了

- **Vercel**：一键部署前端项目，免费 HTTPS 和域名
- **Netlify**：同样免费，支持表单和函数
- **GitHub Pages**：纯静态网站完全免费

**门槛从未如此之低。**
```

```mdx
---
# website/src/content/zh/intro/misconceptions.mdx
title: '常见误区澄清'
description: '打消对 Vibe Coding 的常见顾虑'
section: 'intro'
order: 3
---

## 误区 vs 真相

| ❌ 误区 | ✅ 真相 |
|---------|--------|
| "这是作弊" | "这是新技能——学会与 AI 协作是未来的核心竞争力" |
| "生成的代码质量不行" | "满足个人项目完全够用，而且 AI 代码质量在飞速提升" |
| "还是需要学编程" | "理解基本概念有帮助，但不是必须的" |
| "AI 会取代程序员" | "AI 是工具，不是替代品。它让不会编程的人也能创造" |
| "只有简单的页面能做" | "从个人博客到小型电商，AI 都能处理" |

### 正确的态度

Vibe Coding 不是要替代传统编程学习，而是**给所有人一个创造的门票**。

就像照相机没有取代画家，而是让更多人能记录美好瞬间——Vibe Coding 让更多人能把想法变成现实。
```

- [ ] **Step 3: 创建 utils.ts - 内容工具函数**

```ts
// website/src/lib/utils.ts
import { getCollection } from 'astro:content';

export async function getAllPhases() {
  const phases = await getCollection('phases');
  return phases.sort((a, b) => a.data.order - b.data.order);
}

export async function getPhaseBySlug(slug: string) {
  const phases = await getCollection('phases');
  return phases.find((p) => p.slug === slug);
}

export async function getDocsBySection(section: string) {
  const docs = await getCollection(section as 'intro' | 'setup' | 'cases');
  return docs.sort((a, b) => a.data.order - b.data.order);
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}
```

- [ ] **Step 4: 提交**

```bash
git add website/src/content/config.ts website/src/content/zh/ website/src/lib/utils.ts
git commit -m "feat: add content collections configuration and intro content"
```

---

### Task 0.5: 页面路由与布局模板

**Files:**
- Create: `website/src/layouts/DocLayout.astro`
- Create: `website/src/layouts/PhaseLayout.astro`
- Create: `website/src/pages/index.astro`
- Create: `website/src/pages/intro/[slug].astro`
- Create: `website/src/pages/setup/[slug].astro`
- Create: `website/src/pages/phases/[slug].astro`

- [ ] **Step 1: 创建 DocLayout**

```astro
---
// website/src/layouts/DocLayout.astro
import BaseLayout from './BaseLayout.astro';
import Sidebar from '@components/layout/Sidebar.astro';

export interface Props {
  title: string;
  description?: string;
  currentPath?: string;
}

const { title, description } = Astro.props;
---

<BaseLayout title={title} description={description}>
  <div class="flex max-w-7xl mx-auto">
    <Sidebar class="hidden lg:block h-[calc(100vh-4rem)] sticky top-16" />
    <main class="flex-1 min-w-0 px-4 sm:px-6 lg:px-8 py-8 lg:py-12 max-w-3xl mx-auto">
      <article class="prose prose-slate max-w-none
        prose-headings:text-[var(--color-primary)]
        prose-a:text-[var(--color-accent)] prose-a:no-underline hover:prose-a:text-[var(--color-accent-light)]
        prose-code:text-sm prose-code:bg-[var(--color-bg-secondary)] prose-code:px-1 prose-code:py-0.5 prose-code:rounded
        prose-pre:bg-[var(--color-primary)] prose-pre:border prose-pre:border-[var(--color-border)]
        prose-img:rounded-xl prose-img:shadow-md
        prose-hr:border-[var(--color-border)]
        prose-strong:text-[var(--color-primary)]
        prose-blockquote:border-l-[var(--color-accent)] prose-blockquote:text-[var(--color-text-secondary)]
      ">
        <slot />
      </article>
    </main>
  </div>
</BaseLayout>
```

- [ ] **Step 2: 创建 PhaseLayout**

```astro
---
// website/src/layouts/PhaseLayout.astro
import BaseLayout from './BaseLayout.astro';
import Sidebar from '@components/layout/Sidebar.astro';
import PhaseNav from '@components/content/PhaseNav.astro';
import type { CollectionEntry } from 'astro:content';

export interface Props {
  title: string;
  phase: CollectionEntry<'phases'>;
  description?: string;
}

const { title, phase, description } = Astro.props;
const { data } = phase;
---

<BaseLayout title={`阶段${data.phase}：${data.title}`} description={description || data.description}>
  <div class="flex max-w-7xl mx-auto">
    <Sidebar class="hidden lg:block h-[calc(100vh-4rem)] sticky top-16" currentPhase={phase.slug} />
    <main class="flex-1 min-w-0 px-4 sm:px-6 lg:px-8 py-8 lg:py-12 max-w-3xl mx-auto">
      {/* 阶段头部指示器 */}
      <div class="flex items-center gap-3 mb-8 pb-8 border-b border-[var(--color-border)]">
        <span class="text-3xl">{data.icon}</span>
        <div>
          <div class="text-xs font-semibold text-[var(--color-accent)] uppercase tracking-wider">
            阶段 {data.phase} / 9
          </div>
          <h1 class="text-2xl lg:text-3xl font-bold mt-1">{data.title}</h1>
          <p class="text-[var(--color-text-secondary)] mt-1">{data.description}</p>
        </div>
      </div>

      {/* 阶段间导航 */}
      <PhaseNav currentPhase={phase.slug} currentNum={data.phase} />

      {/* 正文内容 */}
      <article class="prose prose-slate max-w-none
        prose-headings:text-[var(--color-primary)]
        prose-a:text-[var(--color-accent)] prose-a:no-underline hover:prose-a:text-[var(--color-accent-light)]
        prose-code:text-sm prose-code:bg-[var(--color-bg-secondary)] prose-code:px-1 prose-code:py-0.5 prose-code:rounded
        prose-pre:bg-[var(--color-primary)] prose-pre:border prose-pre:border-[var(--color-border)]
        prose-img:rounded-xl prose-img:shadow-md
        prose-hr:border-[var(--color-border)]
        prose-strong:text-[var(--color-primary)]
        prose-blockquote:border-l-[var(--color-accent)] prose-blockquote:text-[var(--color-text-secondary)]
        prose-ul:list-disc prose-ol:list-decimal
      ">
        <slot />
      </article>

      {/* 底部导航 */}
      <PhaseNav currentPhase={phase.slug} currentNum={data.phase} class="mt-12 pt-6 border-t border-[var(--color-border)]" />
    </main>
  </div>
</BaseLayout>
```

- [ ] **Step 3: 创建首页**

```astro
---
// website/src/pages/index.astro
import BaseLayout from '@layouts/BaseLayout.astro';
import PhaseCard from '@components/ui/PhaseCard.astro';
import { PHASES, SITE_TITLE, SITE_DESCRIPTION } from '@lib/constants';
---

<BaseLayout title="首页" description={SITE_DESCRIPTION}>
  <!-- Hero Section -->
  <section class="relative overflow-hidden">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
      <div class="text-center max-w-3xl mx-auto">
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] text-sm font-medium mb-6 animate-fade-in-up">
          <span class="w-2 h-2 rounded-full bg-[var(--color-accent)] animate-pulse" />
          零编程基础也能建站
        </div>
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight animate-fade-in-up" style="animation-delay: 100ms">
          <span class="text-[var(--color-primary)]">用</span>
          <span class="text-[var(--color-accent)]"> AI </span>
          <span class="text-[var(--color-primary)]">建网站，</span><br/>
          <span class="text-[var(--color-primary)]">像聊天一样简单</span>
        </h1>
        <p class="mt-6 text-lg lg:text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style="animation-delay: 200ms">
          {SITE_DESCRIPTION} —— 完全免费，无需任何编程经验。
        </p>
        <div class="mt-10 flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style="animation-delay: 300ms">
          <a
            href="/intro/what-is-vibe-coding"
            class="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-[var(--color-accent)] text-white font-semibold hover:bg-[var(--color-accent-light)] transition-all shadow-lg shadow-[var(--color-accent)]/20"
          >
            开始学习
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </a>
          <a
            href="/phases/phase-00"
            class="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl border border-[var(--color-border)] text-[var(--color-text)] font-semibold hover:bg-[var(--color-bg-secondary)] transition-colors"
          >
            直接进入实战
          </a>
        </div>
      </div>
    </div>

    <!-- 装饰背景元素 -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none -z-10">
      <div class="absolute inset-0 bg-gradient-radial from-[var(--color-accent)]/5 to-transparent rounded-full" />
    </div>
  </section>

  <!-- 9 阶段路线图 -->
  <section class="py-16 lg:py-24">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-2xl lg:text-3xl font-bold">全流程实战路线图</h2>
        <p class="mt-3 text-[var(--color-text-secondary)]">9 个阶段，从想法到上线，手把手带你走完</p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        {PHASES.map((phase, i) => (
          <PhaseCard
            phase={phase}
            index={i}
            href={`/phases/${phase.id}`}
          />
        ))}
      </div>
    </div>
  </section>

  <!-- 为什么选择 Vibe Coding -->
  <section class="py-16 lg:py-24 bg-[var(--color-bg-secondary)]">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-2xl lg:text-3xl font-bold">为什么选择 Vibe Coding？</h2>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="p-6 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)]">
          <div class="w-12 h-12 rounded-lg bg-[var(--color-accent)]/10 flex items-center justify-center text-2xl mb-4">⏱️</div>
          <h3 class="font-semibold text-lg mb-2">几小时而非几个月</h3>
          <p class="text-sm text-[var(--color-text-secondary)]">传统建站需要数月学习编程，Vibe Coding 让你几小时内从想法到上线。</p>
        </div>
        <div class="p-6 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)]">
          <div class="w-12 h-12 rounded-lg bg-[var(--color-accent)]/10 flex items-center justify-center text-2xl mb-4">💰</div>
          <h3 class="font-semibold text-lg mb-2">完全免费</h3>
          <p class="text-sm text-[var(--color-text-secondary)]">所有工具都有免费版，部署也是免费的。你只需要一台电脑和一点时间。</p>
        </div>
        <div class="p-6 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)]">
          <div class="w-12 h-12 rounded-lg bg-[var(--color-accent)]/10 flex items-center justify-center text-2xl mb-4">🎯</div>
          <h3 class="font-semibold text-lg mb-2">无需编程经验</h3>
          <p class="text-sm text-[var(--color-text-secondary)]">用自然语言跟 AI 对话即可。理解基本概念有帮助，但不是必须的。</p>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="py-16 lg:py-24">
    <div class="max-w-3xl mx-auto text-center px-4 sm:px-6 lg:px-8">
      <h2 class="text-2xl lg:text-3xl font-bold mb-4">准备好了吗？</h2>
      <p class="text-[var(--color-text-secondary)] mb-8">不需要任何编程基础，现在就开始你的第一个网站。</p>
      <a
        href="/setup/checklist"
        class="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[var(--color-primary)] text-white font-semibold hover:bg-[var(--color-primary-light)] transition-colors"
      >
        查看准备工作
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
      </a>
    </div>
  </section>
</BaseLayout>
```

- [ ] **Step 4: 创建动态路由页面**

`intro/[slug].astro`:
```astro
---
// website/src/pages/intro/[slug].astro
import { getCollection } from 'astro:content';
import DocLayout from '@layouts/DocLayout.astro';

export async function getStaticPaths() {
  const docs = await getCollection('intro');
  return docs.map((doc) => ({
    params: { slug: doc.slug },
    props: { doc },
  }));
}

const { doc } = Astro.props;
const { Content } = await doc.render();
---

<DocLayout title={doc.data.title} description={doc.data.description}>
  <Content />
</DocLayout>
```

`setup/[slug].astro`:
```astro
---
// website/src/pages/setup/[slug].astro
import { getCollection } from 'astro:content';
import DocLayout from '@layouts/DocLayout.astro';

export async function getStaticPaths() {
  const docs = await getCollection('setup');
  return docs.map((doc) => ({
    params: { slug: doc.slug },
    props: { doc },
  }));
}

const { doc } = Astro.props;
const { Content } = await doc.render();
---

<DocLayout title={doc.data.title} description={doc.data.description}>
  <Content />
</DocLayout>
```

`phases/[slug].astro`:
```astro
---
// website/src/pages/phases/[slug].astro
import { getCollection } from 'astro:content';
import PhaseLayout from '@layouts/PhaseLayout.astro';

export async function getStaticPaths() {
  const phases = await getCollection('phases');
  return phases.map((phase) => ({
    params: { slug: phase.slug },
    props: { phase },
  }));
}

const { phase } = Astro.props;
const { Content } = await phase.render();
---

<PhaseLayout title={phase.data.title} phase={phase} description={phase.data.description}>
  <Content />
</PhaseLayout>
```

- [ ] **Step 5: 创建 PhaseCard 组件**

```astro
---
// website/src/components/ui/PhaseCard.astro
import type { PHASES } from '@lib/constants';

export interface Props {
  phase: typeof PHASES[number];
  index: number;
  href: string;
}

const { phase, index, href } = Astro.props;
---

<a
  href={href}
  class="group p-5 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)] hover:border-[var(--color-accent)] hover:shadow-md transition-all"
  style={`animation: fadeInUp 0.5s ease-out ${index * 80}ms both;`}
>
  <div class="flex items-start gap-4">
    <div class="flex-shrink-0 w-10 h-10 rounded-lg bg-[var(--color-accent)]/10 flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
      {phase.icon}
    </div>
    <div class="min-w-0">
      <div class="flex items-center gap-2 mb-1">
        <span class="text-xs font-semibold text-[var(--color-accent)]">阶段 {phase.num}</span>
      </div>
      <h3 class="font-semibold text-[var(--color-primary)] group-hover:text-[var(--color-accent)] transition-colors">
        {phase.title}
      </h3>
      <p class="text-sm text-[var(--color-text-secondary)] mt-1 line-clamp-2">
        {phase.description}
      </p>
    </div>
  </div>
</a>
```

- [ ] **Step 6: 创建 PhaseNav 组件**

```astro
---
// website/src/components/content/PhaseNav.astro
import { PHASES } from '@lib/constants';

export interface Props {
  currentPhase: string;
  currentNum: number;
  class?: string;
}

const { currentPhase, currentNum, class: className = '' } = Astro.props;
const prevPhase = currentNum > 0 ? PHASES[currentNum - 1] : null;
const nextPhase = currentNum < PHASES.length - 1 ? PHASES[currentNum + 1] : null;
---

<div class={`flex items-center justify-between gap-4 ${className}`}>
  {prevPhase ? (
    <a
      href={`/phases/${prevPhase.id}`}
      class="flex items-center gap-2 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors group"
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="group-hover:-translate-x-1 transition-transform"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
      <span class="hidden sm:inline">
        <span class="text-xs block text-[var(--color-text-muted)]">上一阶段</span>
        <span>{prevPhase.icon} {prevPhase.title}</span>
      </span>
    </a>
  ) : <div />}

  {nextPhase ? (
    <a
      href={`/phases/${nextPhase.id}`}
      class="flex items-center gap-2 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors group text-right"
    >
      <span class="hidden sm:inline">
        <span class="text-xs block text-[var(--color-text-muted)]">下一阶段</span>
        <span>{nextPhase.icon} {nextPhase.title}</span>
      </span>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="group-hover:translate-x-1 transition-transform"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
    </a>
  ) : <div />}
</div>
```

- [ ] **Step 7: 创建 setup 内容文件**

```mdx
---
# website/src/content/zh/setup/checklist.mdx
title: '必备清单'
description: '建站前需要准备的所有工具和账号'
section: 'setup'
order: 1
---

## 你需要的东西

| 项目 | 推荐 | 费用 | 难度 |
|------|------|------|------|
| 电脑 | 任何 Windows / Mac 电脑 | 已有 | ★☆☆ |
| 浏览器 | Chrome（推荐）或 Edge | 免费 | ★☆☆ |
| AI 编程工具 | Claude Code 或 Cursor | 有免费版 | ★★☆ |
| 代码编辑器 | VS Code | 免费 | ★★☆ |
| 版本控制 | GitHub 账号 | 免费 | ★★☆ |
| 部署平台 | Vercel 或 Netlify 账号 | 免费 | ★★☆ |

## 一键安装脚本

```bash
# 安装核心 tools
npm install -g @anthropic-ai/claude-code

# 安装核心 skills
npx skills add phuryn/pm-skills@create-prd -g -y
npx skills add anthropics/skills@webapp-testing -g -y
```

## 验证环境

打开终端（Terminal），输入：
```bash
node --version   # 应该显示 v18 或更高
npm --version    # 应该显示 v9 或更高
```
```

- [ ] **Step 8: 提交**

```bash
git add website/src/layouts/DocLayout.astro website/src/layouts/PhaseLayout.astro
git add website/src/pages/ website/src/components/ui/PhaseCard.astro website/src/components/content/PhaseNav.astro
git add website/src/content/zh/setup/
git commit -m "feat: add page routing, layouts, homepage, and setup content"
```

---

### Task 0.6: 阶段内容迁移 (阶段 0-9 MDX 文件)

**Files:**
- Create: `website/src/content/zh/phases/phase-00.mdx` 到 `website/src/content/zh/phases/phase-09.mdx`

这是一个批量任务。每个阶段 MDX 文件使用相同的前言格式，内容从 V1.1 PRD 文档迁移，结合实际操作指南、提示词模板、Skills 清单和练习。

- [ ] **Step 1: 创建阶段 0 — 环境搭建**

```mdx
---
title: '环境搭建'
phase: 0
description: '工具安装、账号注册、开发环境配置'
icon: '🔧'
order: 0
---

## 做什么

安装工具，注册账号，搭建开发环境。这是建站的"地基"工作。

## 必备清单

| 项目 | 推荐 | 用途 |
|------|------|------|
| 电脑 | Windows / Mac | 开发设备 |
| 浏览器 | Chrome | 预览和调试 |
| AI 编程助手 | Claude Code 或 Cursor | AI 对话生成代码 |
| VS Code | 免费安装 | 代码编辑与项目管理 |
| GitHub | 注册账号 | 代码托管 |
| Node.js | 下载 LTS 版 | 运行 JavaScript 项目 |
| Vercel / Netlify | 注册账号 | 免费部署 |

## 分步安装

### 1. 注册 AI 编程工具账号

- 打开 Claude Code 或 Cursor 官网
- 点击注册 → 用 Google / GitHub / 邮箱注册
- 安装桌面版（如果有）

### 2. 安装 VS Code

- 官网下载 → 双击安装 → 默认选项下一步
- 安装完成后，打开 VS Code

### 3. 注册 GitHub

- 打开 github.com
- 点击 Sign up
- 用户名建议用：`yourname`

### 4. 注册 Vercel

- 打开 vercel.com
- 用 GitHub 账号直接登录（最简单）
- 免费计划已经包含你需要的所有功能

## 验证环境

打开终端（Terminal），输入：

```bash
node --version   # 应该显示 v18 或更高
npm --version    # 应该显示 v9 或更高
```

## 🎯 练习

**任务**：按清单注册完所有账号，在终端验证 node 和 npm 安装成功。在 GitHub 上创建一个空仓库，命名为 `my-first-site`。
```

- [ ] **Step 2: 创建阶段 1 — 产品定义**

将 V1.1 阶段 1 内容转化为 MDX，包含：
- 什么是 PRD（大白话解释）
- 写 PRD 的提示词模板
- Skills 清单
- MCP 工具辅助说明
- 练习

```mdx
---
title: '产品定义'
phase: 1
description: '写 PRD、需求拆解、提示词模板'
icon: '📋'
order: 1
---

## 做什么

把"想法"变成"文档"，这是建站最重要的一步。

## 什么是 PRD？

**PRD（Product Requirements Document，产品需求文档）** 是你跟 AI 之间的"设计蓝图"。没有 PRD，AI 只能猜你想要什么；有了 PRD，AI 能精准地一次到位。

一个好的 PRD 包含：
- **这是什么网站**（一句话说清）
- **给谁用**（目标用户）
- **有什么功能**（功能清单）
- **长什么样**（风格参考）
- **先做什么、后做什么**（优先级）

## 提示词模板

```markdown
请帮我写一份产品需求文档（PRD），项目是 [网站名称]。

我的背景：我是一个完全不会编程的小白，想用 AI 帮我建站。

网站信息：
- 网站类型：[个人博客 / 作品集 / 电商 / 公司官网]
- 主要用途：[描述核心目的]
- 目标用户：[谁会来看/用这个网站]
- 我希望包含的功能：
  1. [功能 A]
  2. [功能 B]
  3. [功能 C]

风格偏好：[简洁 / 科技感 / 温馨 / 复古]
参考网站（如果有）：[URL]

请按标准的 PRD 结构输出：摘要 → 背景 → 目标 → 功能需求 → 非功能需求 → 发布计划。
```

## 可用的 Skills

| Skill | 作用 | 安装命令 |
|-------|------|----------|
| `phuryn/pm-skills@create-prd` | 创建完整 PRD | `npx skills add phuryn/pm-skills@create-prd -g -y` |
| `mblode/agent-skills@docs-writing` | 文档写作辅助 | `npx skills add mblode/agent-skills@docs-writing -g -y` |

## 提示词技巧

| ❌ 不好的提示词 | ✅ 好的提示词 |
|----------------|--------------|
| "帮我写个网站的需求文档" | "帮我写一个个人摄影作品展示网站的 PRD，核心功能是展示照片集和联系方式" |
| "风格好看就行" | "主色调用深蓝和白色，参考 dribbble 上的简约风格" |

## 🎯 练习

**任务**：选一个你想做的网站（个人博客 / 作品集 / 小店展示页），使用本节的提示词模板，让 AI 帮你生成一份 PRD。然后你自己阅读并回答：
- 这份 PRD 跟你想的一样吗？
- 有没有漏掉的功能？
- 优先级排序你同意吗？
```

- [ ] **Step 3: 创建阶段 2 — 设计与原型**

```mdx
---
title: '设计与原型'
phase: 2
description: 'UI/UX 设计、Figma 联动、风格方案'
icon: '🎨'
order: 2
---

## 做什么

在写代码之前，先想清楚网站长什么样子。

## 设计风格提示词模板

```
请为我的 [网站类型] 推荐 3 种设计风格方案：

网站用途：[一句话描述]

每种方案请给出：
1. 主色、辅色、文字颜色
2. 适合的字体
3. 一句话风格描述
4. 参考风格的关键词

最终我选 [方案X]，请基于这个方案生成首页的 HTML 代码。
```

## 可用的 Skills

| Skill | 作用 | 安装命令 |
|-------|------|----------|
| `nexu-io/open-design@ui-ux-pro-max` | UI/UX 设计专家 | `npx skills add nexu-io/open-design@ui-ux-pro-max -g -y` |

## Figma MCP 联动（进阶）

如果你想让设计更专业，可以用 Figma MCP 直接把设计稿生成到 Figma 中：

1. 在 Claude 中启用 Figma MCP
2. 告诉 AI："帮我在 Figma 中创建一个 [网站类型] 的设计稿"
3. AI 会调用 use_figma 工具在 Figma 中生成页面
4. 你可以在 Figma 中微调后，再让 AI 生成对应代码

## 🎯 练习

**任务**：让 AI 为你生成 3 种设计风格方案。选一个你喜欢的，让 AI 生成该风格的首页 HTML 代码。在浏览器中预览效果。
```

- [ ] **Step 4: 创建阶段 3-9 内容文件**

为阶段 3 到 9 创建类似结构的内容文件，每个文件包含：
1. 阶段标题和描述（frontmatter）
2. 做什么（阶段目标）
3. 核心概念（大白话解释）
4. 提示词模板
5. Skills 清单
6. 练习

关键内容要点：
- **阶段 3 (前端开发)**：多页面站点、响应式设计、HTML/CSS/JS 基础概念、选择方案对比
- **阶段 4 (后端与数据)**：零后端方案 (Formspree)、BaaS (Supabase)、自建后端三种路径
- **阶段 5 (测试)**：代码审查、测试清单、浏览器控制台调试
- **阶段 6 (部署上线)**：Vercel/Netlify/GitHub Pages 对比、部署步骤
- **阶段 7 (运维与监控)**：网站健康检查、性能优化
- **阶段 8 (运营与增长)**：SEO 优化、内容更新计划
- **阶段 9 (文案创作)**：网站文案、营销文案模板

使用 V1.1 PRD 文档中的内容进行填充。

```bash
# 批量创建占位（实际内容需要从 V1.1 文档迁移）
for i in $(seq -w 03 09); do
  touch "website/src/content/zh/phases/phase-${i}.mdx"
done
```

- [ ] **Step 5: 提交**

```bash
git add website/src/content/zh/phases/
git commit -m "feat: add all 10 phase content files (phase 00-09)"
```

---

## P1 — 导航系统与搜索

---

### Task 1.1: 搜索组件 (Pagefind 集成)

**Files:**
- Create: `website/src/components/interactive/SearchDialog.tsx`
- Modify: `website/astro.config.mjs`

- [ ] **Step 1: 安装 Pagefind**

```bash
cd "c:\Users\WindowsU3\Desktop\workspace\learn\vibeCoding\website"
npm install pagefind @pagefind/astro
```

- [ ] **Step 2: 更新 astro.config.mjs 加入 Pagefind**

```js
// 在 astro.config.mjs 中添加 pagefind 集成
import pagefind from '@pagefind/astro';

export default defineConfig({
  // ... 现有配置
  integrations: [
    mdx(),
    sitemap(),
    pagefind(),  // 新增
  ],
});
```

- [ ] **Step 3: 创建搜索对话框组件**

```tsx
// website/src/components/interactive/SearchDialog.tsx
import { useState, useEffect, useRef, useCallback } from 'react';
import Icon from '@components/ui/Icon.astro';

// 搜索结果的类型定义
interface SearchResult {
  url: string;
  title: string;
  excerpt: string;
  meta?: Record<string, string>;
}

export default function SearchDialog() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const searchRef = useRef<any>(null);

  // 初始化 Pagefind
  useEffect(() => {
    async function initPagefind() {
      try {
        const pagefind = await import('/pagefind/pagefind.js');
        searchRef.current = pagefind;
      } catch {
        // Pagefind 索引在 build 后生成
      }
    }
    initPagefind();
  }, []);

  // 搜索逻辑
  const doSearch = useCallback(async (q: string) => {
    if (!q.trim() || !searchRef.current) {
      setResults([]);
      return;
    }
    setLoading(true);
    try {
      const search = await searchRef.current.search(q);
      const results = await Promise.all(
        search.results.slice(0, 10).map(async (r: any) => {
          const data = await r.data();
          return {
            url: data.url,
            title: data.meta?.title || '无标题',
            excerpt: data.excerpt || '',
          };
        })
      );
      setResults(results);
    } catch {
      setResults([]);
    } finally {
      setLoading(false);
    }
  }, []);

  // 快捷键 Ctrl+K 打开搜索
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setOpen(true);
      }
      if (e.key === 'Escape') setOpen(false);
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  // 打开时聚焦输入框
  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [open]);

  return (
    <>
      {/* 搜索触发器 */}
      <button
        onClick={() => setOpen(true)}
        class="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] text-sm text-[var(--color-text-muted)] hover:border-[var(--color-accent)] hover:text-[var(--color-text)] transition-colors"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        <span class="hidden sm:inline">搜索</span>
        <kbd class="hidden md:inline-flex text-xs px-1.5 py-0.5 rounded bg-[var(--color-bg-secondary)] border border-[var(--color-border)]">⌘K</kbd>
      </button>

      {/* 搜索弹窗 */}
      {open && (
        <div class="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh]">
          <div class="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setOpen(false)} />
          <div class="relative w-full max-w-lg mx-4 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl shadow-2xl overflow-hidden animate-fade-in-up">
            <div class="flex items-center gap-3 px-4 border-b border-[var(--color-border)]">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-[var(--color-text-muted)] shrink-0"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
              <input
                ref={inputRef}
                type="text"
                placeholder="搜索内容..."
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  doSearch(e.target.value);
                }}
                class="flex-1 py-3.5 bg-transparent border-0 outline-none text-[var(--color-text)] placeholder:text-[var(--color-text-muted)]"
              />
              <button onClick={() => setOpen(false)} class="text-[var(--color-text-muted)] hover:text-[var(--color-text)]">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              </button>
            </div>
            <div class="max-h-80 overflow-y-auto p-2">
              {loading && (
                <div class="flex items-center justify-center py-8 text-sm text-[var(--color-text-muted)]">
                  <div class="w-5 h-5 border-2 border-[var(--color-accent)] border-t-transparent rounded-full animate-spin mr-2" />
                  搜索中...
                </div>
              )}
              {!loading && results.length > 0 && (
                <ul>
                  {results.map((result, i) => (
                    <li key={i}>
                      <a
                        href={result.url}
                        onClick={() => setOpen(false)}
                        class="block p-3 rounded-lg hover:bg-[var(--color-bg-secondary)] transition-colors"
                      >
                        <div class="text-sm font-medium text-[var(--color-text)]">{result.title}</div>
                        <div class="text-xs text-[var(--color-text-muted)] mt-1 line-clamp-2" dangerouslySetInnerHTML={{ __html: result.excerpt }} />
                      </a>
                    </li>
                  ))}
                </ul>
              )}
              {!loading && query && results.length === 0 && (
                <div class="py-8 text-center text-sm text-[var(--color-text-muted)]">
                  没有找到相关内容
                </div>
              )}
              {!query && (
                <div class="py-8 text-center text-sm text-[var(--color-text-muted)]">
                  输入关键词搜索全站内容
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
```

- [ ] **Step 4: 提交**

```bash
git add website/src/components/interactive/SearchDialog.tsx
git commit -m "feat: add Pagefind search dialog component"
```

---

### Task 1.2: 完整内容迁移 (阶段 3-9 + 附录页面)

**Files:**
- Modify: `website/src/content/zh/phases/phase-03.mdx` ~ `phase-09.mdx`
- Create: `website/src/content/zh/cases/photography-portfolio.mdx`
- Create: `website/src/content/zh/skills/index.mdx`
- Create: `website/src/content/zh/faq/index.mdx`
- Create: `website/src/content/zh/prompts/index.mdx`
- Create: `website/src/content/zh/exercises/index.mdx`
- Create: `website/src/pages/cases/[slug].astro`
- Create: `website/src/pages/skills/index.astro`
- Create: `website/src/pages/faq/index.astro`
- Create: `website/src/pages/prompts/index.astro`
- Create: `website/src/pages/exercises/index.astro`

这是一个大规模的内容迁移任务。内容来自 PRD V1.0 和 V1.1 文档。

- [ ] **Step 1: 创建阶段 3-9 的完整 MDX 内容**

每个阶段文件的内容结构：
1. 标题/阶段号/图标/描述（frontmatter）
2. "做什么" 简介
3. 核心内容（根据 V1.1 PRD 各阶段内容）
4. 提示词模板
5. Skills 清单
6. MCP 工具
7. 🎯 练习任务

- [ ] **Step 2: 创建案例库页面**

```mdx
---
# website/src/content/zh/cases/photography-portfolio.mdx
title: '案例项目：小橘的摄影集'
description: '贯穿全流程的真实案例——一个摄影爱好者建站的全过程'
section: 'cases'
order: 1
---

## 项目介绍

一个摄影爱好者想展示自己拍的照片，并吸引客户约拍。

## 各阶段实践

| 阶段 | 具体做法 |
|------|----------|
| 阶段 1 (PRD) | "写一份个人摄影作品展示网站的 PRD，核心功能：作品分类展示、关于我、联系预约" |
| 阶段 2 (设计) | "设计风格：极简、黑白为主、突出照片本身" |
| 阶段 3 (前端) | "4 个页面：首页 → 作品集 → 关于 → 联系，用瀑布流布局展示照片" |
| 阶段 4 (后端) | "用 Formspree 接收预约表单，用 Cloudinary 免费托管照片" |
| 阶段 5 (测试) | "检查所有图片链接、表单提交、移动端显示" |
| 阶段 6 (部署) | "用 Vercel 部署" |
| 阶段 7 (运维) | "设置 Vercel 监控，每周检查一次访问日志" |
| 阶段 8 (运营) | "优化 SEO 关键词'[城市]摄影师'，制定每周更新计划" |
| 阶段 9 (文案) | "首页主标题：'用镜头讲述你的故事'" |
```

- [ ] **Step 3: 创建附录页面路由**

`cases/[slug].astro`:
```astro
---
import { getCollection } from 'astro:content';
import DocLayout from '@layouts/DocLayout.astro';

export async function getStaticPaths() {
  const docs = await getCollection('cases');
  return docs.map((doc) => ({
    params: { slug: doc.slug },
    props: { doc },
  }));
}

const { doc } = Astro.props;
const { Content } = await doc.render();
---
<DocLayout title={doc.data.title} description={doc.data.description}>
  <Content />
</DocLayout>
```

- [ ] **Step 4: 创建其他附录页面 (skills/faq/prompts/exercises)**

```astro
---
// website/src/pages/skills/index.astro
import BaseLayout from '@layouts/BaseLayout.astro';
---

<BaseLayout title="Skills 索引" description="所有可用的 Skills 一键安装指南">
  <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <h1 class="text-3xl font-bold mb-2">Skills 索引</h1>
    <p class="text-[var(--color-text-secondary)] mb-8">所有在本指南中出现的 AI Skills，按类别整理，支持一键安装。</p>
    ...
  </div>
</BaseLayout>
```

为每个附录页面创建类似结构。Skills 索引可从 V1.1 PRD 文档的 Skills 快速索引章节直接迁移。

- [ ] **Step 5: 提交**

```bash
git add website/src/content/zh/phases/phase-03.mdx website/src/content/zh/phases/phase-04.mdx
git add website/src/content/zh/phases/phase-05.mdx website/src/content/zh/phases/phase-06.mdx
git add website/src/content/zh/phases/phase-07.mdx website/src/content/zh/phases/phase-08.mdx
git add website/src/content/zh/phases/phase-09.mdx
git add website/src/content/zh/cases/ website/src/content/zh/skills/
git add website/src/content/zh/faq/ website/src/content/zh/prompts/ website/src/content/zh/exercises/
git add website/src/pages/cases/ website/src/pages/skills/ website/src/pages/faq/
git add website/src/pages/prompts/ website/src/pages/exercises/
git commit -m "feat: add phase 03-09 content, case studies, and reference pages"
```

---

## P2 — 交互组件与主题

---

### Task 2.1: 深色/浅色主题切换

**Files:**
- Create: `website/src/components/interactive/ThemeToggle.tsx`

- [ ] **Step 1: 创建主题切换组件**

```tsx
// website/src/components/interactive/ThemeToggle.tsx
import { useState, useEffect } from 'react';

type Theme = 'light' | 'dark';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    const saved = localStorage.getItem('theme') as Theme | null;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initial = saved || (prefersDark ? 'dark' : 'light');
    setTheme(initial);
    document.documentElement.classList.toggle('dark', initial === 'dark');
  }, []);

  function toggle() {
    const next = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
    localStorage.setItem('theme', next);
    document.documentElement.classList.toggle('dark', next === 'dark');
  }

  return (
    <button
      onClick={toggle}
      class="p-2 rounded-lg text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-secondary)] hover:text-[var(--color-text)] transition-colors"
      aria-label={theme === 'light' ? '切换到深色模式' : '切换到浅色模式'}
    >
      {theme === 'light' ? (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
      ) : (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
      )}
    </button>
  );
}
```

- [ ] **Step 2: 提交**

```bash
git add website/src/components/interactive/ThemeToggle.tsx
git commit -m "feat: add dark/light theme toggle component"
```

---

### Task 2.2: 代码预览沙盒组件

**Files:**
- Create: `website/src/components/interactive/CodeSandbox.tsx`
- Create: `website/src/components/content/CodePreview.astro`

- [ ] **Step 1: 创建 CodePreview — 在 MDX 中嵌入代码演示的封装组件

```astro
---
// website/src/components/content/CodePreview.astro
export interface Props {
  title?: string;
  html?: string;
  css?: string;
  js?: string;
  height?: string;
}

const { title = '代码演示', html = '', css = '', js = '', height = '300px' } = Astro.props;
const sandboxId = `sandbox-${Math.random().toString(36).slice(2, 9)}`;
---

<div class="my-6 rounded-xl border border-[var(--color-border)] overflow-hidden">
  <div class="flex items-center justify-between px-4 py-2 bg-[var(--color-bg-secondary)] border-b border-[var(--color-border)]">
    <span class="text-xs font-medium text-[var(--color-text-secondary)]">{title}</span>
    <button
      id={`run-${sandboxId}`}
      class="text-xs px-3 py-1 rounded-md bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-light)] transition-colors"
    >
      运行 ▶
    </button>
  </div>
  <div id={sandboxId} class="bg-white" style={`height: ${height}; overflow: auto;`}>
    <iframe
      id={`iframe-${sandboxId}`}
      class="w-full h-full border-0"
      sandbox="allow-scripts"
      srcdoc="<html><head><style>body{margin:0;font-family:sans-serif;padding:1rem;}</style></head><body><p class='text-gray-400 text-sm'>点击「运行」查看效果</p></body></html>"
    />
  </div>
</div>

<script>
  const sandboxId = '${sandboxId}';
  const btn = document.getElementById(`run-${sandboxId}`);
  const iframe = document.getElementById(`iframe-${sandboxId}`) as HTMLIFrameElement;

  btn?.addEventListener('click', () => {
    const html = `${'`${html}'}`;
    const css = `${'`${css}'}`;
    const js = `${'`${js}'}`;
    iframe.srcdoc = `<!DOCTYPE html>
<html>
<head>
  <style>${css}</style>
</head>
<body>
  ${html}
  <script>${js}<\/script>
</body>
</html>`;
  });
</script>
```

- [ ] **Step 2: 提交**

```bash
git add website/src/components/content/CodePreview.astro website/src/components/interactive/CodeSandbox.tsx
git commit -m "feat: add code preview sandbox component"
```

---

## P3 — 内容完善与动效

---

### Task 3.1: 提示词模板卡片组件

**Files:**
- Create: `website/src/components/content/PromptCard.astro`
- Create: `website/src/components/content/SkillCard.astro`
- Create: `website/src/components/content/Admonition.astro`

- [ ] **Step 1: 创建 PromptCard 组件**

```astro
---
// website/src/components/content/PromptCard.astro
export interface Props {
  title?: string;
  type?: 'good' | 'bad';
}

const { title, type = 'good' } = Astro.props;
---

<div class={`my-4 rounded-xl border overflow-hidden ${
  type === 'good'
    ? 'border-emerald-200 bg-emerald-50 dark:bg-emerald-950/20 dark:border-emerald-800'
    : 'border-red-200 bg-red-50 dark:bg-red-950/20 dark:border-red-800'
}`}>
  {title && (
    <div class={`px-4 py-2 text-xs font-semibold border-b ${
      type === 'good'
        ? 'bg-emerald-100 dark:bg-emerald-900/30 border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-200'
        : 'bg-red-100 dark:bg-red-900/30 border-red-200 dark:border-red-800 text-red-800 dark:text-red-200'
    }`}>
      {type === 'good' ? '✅ ' : '❌ '}{title}
    </div>
  )}
  <div class="p-4 text-sm">
    <slot />
  </div>
</div>
```

- [ ] **Step 2: 创建 Admonition 组件**

```astro
---
// website/src/components/content/Admonition.astro
export interface Props {
  type?: 'info' | 'warning' | 'tip' | 'danger';
  title?: string;
}

const { type = 'info', title } = Astro.props;
const config = {
  info: { icon: '💡', bg: 'bg-blue-50 dark:bg-blue-950/20', border: 'border-blue-200 dark:border-blue-800' },
  warning: { icon: '⚠️', bg: 'bg-amber-50 dark:bg-amber-950/20', border: 'border-amber-200 dark:border-amber-800' },
  tip: { icon: '💎', bg: 'bg-emerald-50 dark:bg-emerald-950/20', border: 'border-emerald-200 dark:border-emerald-800' },
  danger: { icon: '🚫', bg: 'bg-red-50 dark:bg-red-950/20', border: 'border-red-200 dark:border-red-800' },
};
const { icon, bg, border } = config[type];
---

<div class={`my-4 rounded-xl border ${bg} ${border} p-4`}>
  <div class="flex gap-3">
    <span class="text-lg leading-none">{icon}</span>
    <div>
      {title && <div class="font-semibold text-sm mb-1">{title}</div>}
      <div class="text-sm text-[var(--color-text-secondary)]">
        <slot />
      </div>
    </div>
  </div>
</div>
```

- [ ] **Step 3: 提交**

```bash
git add website/src/components/content/
git commit -m "feat: add prompt card, skill card, and admonition components"
```

---

### Task 3.2: 首页动效优化与移动端适配

**Files:**
- Modify: `website/src/pages/index.astro` (已有，优化动效)
- Create: `website/src/components/layout/MobileNav.astro`

- [ ] **Step 1: 创建 MobileNav 组件**

```astro
---
// website/src/components/layout/MobileNav.astro
import { NAV_ITEMS, PHASES } from '@lib/constants';
---

<div id="mobile-sidebar" class="hidden fixed inset-0 z-40 bg-[var(--color-bg)] flex-col lg:hidden">
  <div class="flex items-center justify-between p-4 border-b border-[var(--color-border)]">
    <span class="font-bold">导航菜单</span>
    <button id="close-mobile-nav" class="p-2 text-[var(--color-text-secondary)]">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
    </button>
  </div>
  <nav class="flex-1 overflow-y-auto p-4">
    <div class="space-y-1 mb-6">
      {NAV_ITEMS.map((item) => (
        <a href={item.href} class="block px-3 py-2.5 rounded-lg text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-secondary)] hover:text-[var(--color-text)] transition-colors">
          {item.label}
        </a>
      ))}
    </div>
    <div class="border-t border-[var(--color-border)] pt-4">
      <h3 class="text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-wider mb-2 px-3">全流程实战</h3>
      <div class="space-y-1">
        {PHASES.map((phase) => (
          <a href={`/phases/${phase.id}`} class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-secondary)] transition-colors">
            <span>{phase.icon}</span>
            <span class="text-sm">{phase.title}</span>
          </a>
        ))}
      </div>
    </div>
  </nav>
</div>

<script>
  const closeBtn = document.getElementById('close-mobile-nav');
  closeBtn?.addEventListener('click', () => {
    const sidebar = document.getElementById('mobile-sidebar');
    sidebar?.classList.add('hidden');
    sidebar?.classList.remove('flex');
  });
</script>
```

- [ ] **Step 2: 提交**

```bash
git add website/src/components/layout/MobileNav.astro
git commit -m "feat: add mobile navigation drawer"
```

---

## P4 — 最终优化与部署

---

### Task 4.1: Favicon 和 SEO

**Files:**
- Create: `website/public/favicon.svg`
- Modify: `website/src/layouts/BaseLayout.astro` (完善 SEO meta)

- [ ] **Step 1: 创建 Favicon**

```svg
<!-- website/public/favicon.svg -->
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <rect width="100" height="100" rx="20" fill="#0F172A"/>
  <text x="50" y="68" font-family="system-ui" font-size="55" font-weight="bold" text-anchor="middle" fill="#06B6D4">⚡</text>
</svg>
```

- [ ] **Step 2: 完善 BaseLayout 的 SEO**

在 `<head>` 中添加：
```astro
<link rel="canonical" href={Astro.url} />
<meta property="og:title" content={title} />
<meta property="og:description" content={description} />
<meta property="og:type" content="website" />
<meta name="twitter:card" content="summary_large_image" />
```

- [ ] **Step 3: 提交**

```bash
git add website/public/favicon.svg
git commit -m "feat: add favicon and SEO meta tags"
```

---

### Task 4.2: 国际化结构预留

**Files:**
- Modify: `website/src/content/config.ts` (支持多语言内容集合)

- [ ] **Step 1: 更新 content config 支持多语言**

在 `src/content/config.ts` 中添加多语言支持：
```ts
// 内容集合保持不变，添加语言标记
const zhDocs = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    section: z.string(),
    order: z.number(),
    draft: z.boolean().optional(),
  }),
});

const enDocs = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    section: z.string(),
    order: z.number(),
    draft: z.boolean().optional(),
  }),
});
```

（实际国际化内容本地化留到后续迭代，此任务仅完成结构预留）

- [ ] **Step 2: 提交**

```bash
git add website/src/content/config.ts
git commit -m "feat: prepare i18n content collection structure"
```

---

### Task 4.3: 构建与部署配置

**Files:**
- Modify: `website/astro.config.mjs` (最终确认)
- Create: `website/vercel.json` (Vercel 部署配置)

- [ ] **Step 1: 创建 vercel.json**

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "astro",
  "cleanUrls": true,
  "trailingSlash": false
}
```

- [ ] **Step 2: 测试构建**

```bash
cd "c:\Users\WindowsU3\Desktop\workspace\learn\vibeCoding\website"
npm run build
# 预期的输出应该包含所有静态页面和 Pagefind 索引
```

- [ ] **Step 3: 提交最终构建**

```bash
git add website/vercel.json website/astro.config.mjs
git commit -m "chore: add deployment configuration"
```

---

## 验收标准

| 检查项 | 预期结果 | 验证方式 |
|--------|---------|----------|
| 首页加载 | Hero 动画、9 阶段卡片、三栏优势展示 | `npm run dev` 打开浏览器 |
| 导航系统 | 顶部导航、左侧侧边栏、移动端抽屉 | 点击所有导航链接 |
| 阶段页面 | 10 个阶段可正常切换，上下阶段导航可用 | `/phases/phase-00` ~ `/phases/phase-09` |
| 搜索功能 | Ctrl+K 打开搜索，输入关键词返回结果 | 构建完成后测试 |
| 深色模式 | 点击切换图标，所有页面颜色切换正确 | 全局测试 |
| 内容渲染 | MDX 格式化正确、表格/代码块/提示框正常显示 | 浏览所有页面 |
| 响应式 | 手机/平板/桌面端布局正确 | Chrome DevTools 设备模拟 |
| 构建 | `npm run build` 成功，无错误 | CI 或本地构建 |
| Pagefind | 生成索引文件，搜索可用 | build 后检查 `_pagefind/` 目录 |
| SEO | 每个页面有 title/meta description/OG tags | 查看页面源码 |

---

## 实施顺序建议

建议按以下顺序执行任务：

1. **Task 0.1 → 0.2 → 0.3 → 0.4 → 0.5** (核心架构，必须按序)
2. **Task 0.6** (内容迁移 — 可并行 0.6 与 1.1)
3. **Task 1.1** (搜索 — 需要 build 才能完全验证)
4. **Task 2.1 → 2.2** (交互组件 — 独立)
5. **Task 3.1 → 3.2** (内容组件与动效 — 独立)
6. **Task 4.1 → 4.2 → 4.3** (最终优化 — 最后执行)
