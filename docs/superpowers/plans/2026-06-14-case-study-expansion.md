# 案例库扩展实施计划

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 将案例库从单页详情扩展为「列表页 + 9 个多案例详情页」体系，包含多维筛选和个性化内容。

**Architecture:** 列表页使用 Astro SSG 生成，三维 Tab 筛选用原生 JS 客户端脚本实现，卡片组件展示 6 个信息维度。详情页沿用现有 `DocLayout` + `[slug].astro` 路由模式。现有摄影集页面保留不变，仅补充 frontmatter 字段。

**Tech Stack:** Astro 6 + Tailwind CSS v4 + MDX Content Collections + 原生 JS

---

## 文件结构

### 新建文件 (11 个)

| 文件 | 职责 |
|------|------|
| `src/pages/cases/index.astro` | 案例库列表页，渲染全部卡片 + 筛选栏 |
| `src/components/ui/CaseCard.astro` | 案例卡片组件，展示 6 个信息维度 |
| `src/components/interactive/CaseFilter.astro` | 筛选栏组件，三行 Tab + 客户端过滤脚本 |
| `src/content/zh/cases/tech-blog.mdx` | 案例 2：程序员的博客 |
| `src/content/zh/cases/design-company.mdx` | 案例 3：设计公司官网 |
| `src/content/zh/cases/handmade-shop.mdx` | 案例 4：手作饰品小店 |
| `src/content/zh/cases/community-forum.mdx` | 案例 5：城市活动社区 |
| `src/content/zh/cases/ai-wallpaper.mdx` | 案例 6：AI 壁纸生成器 |
| `src/content/zh/cases/english-learning.mdx` | 案例 7：英语学习平台 |
| `src/content/zh/cases/finance-dashboard.mdx` | 案例 8：个人财务仪表盘 |
| `src/content/zh/cases/campus-delivery.mdx` | 案例 9：校园外卖点餐 |

### 修改文件 (2 个)

| 文件 | 变更 |
|------|------|
| `src/lib/constants.ts` | 更新 `NAV_ITEMS` 中「案例库」href 从 `/cases/photography-portfolio` 改为 `/cases` |
| `src/content/zh/cases/photography-portfolio.mdx` | frontmatter 新增 emoji/difficulty/category/tech_type/frontend/database/backend/deploy/estimated_hours |

---

### Task 1: 更新常量 & 摄影集 frontmatter

**Files:**
- Modify: `src/lib/constants.ts`
- Modify: `src/content/zh/cases/photography-portfolio.mdx`

- [ ] **Step 1.1: 更新 NAV_ITEMS 中案例库链接**

将 `NAV_ITEMS` 中「案例库」的 `href` 从 `/cases/photography-portfolio` 改为 `/cases`：

```ts
// src/lib/constants.ts — 修改 NAV_ITEMS 数组
{ label: '案例库', href: '/cases' },
```

- [ ] **Step 1.2: 为摄影集 frontmatter 补充字段**

在 `src/content/zh/cases/photography-portfolio.mdx` 的 frontmatter 末尾新增：

```yaml
emoji: '🖼️'
difficulty: '入门'
category: '作品展示'
tech_type: '纯前端'
frontend: 'Astro + Tailwind CSS'
database: '无'
backend: '无'
ai_api: '无'
payment: '无'
auth: '无'
deploy: 'Vercel'
estimated_hours: 2
```

保留原有 `title/description/section/order` 不变。

- [ ] **Step 1.3: Commit**

```bash
git add src/lib/constants.ts src/content/zh/cases/photography-portfolio.mdx
git commit -m "feat: update NAV_ITEMS and photo portfolio frontmatter for case listing"
```

---

### Task 2: 创建 CaseCard 组件

**Files:**
- Create: `src/components/ui/CaseCard.astro`

一个卡片展示 6 个信息维度：emoji+名称、难度徽章、类型标签、技术方向标签、技术栈标签行、预估时间。

- [ ] **Step 2.1: 编写 CaseCard.astro**

```astro
---
// src/components/ui/CaseCard.astro
export interface Props {
  title: string;
  description: string;
  emoji: string;
  slug: string;
  difficulty: '入门' | '进阶' | '高阶';
  category: string;
  tech_type: string;
  frontend: string;
  database: string;
  backend: string;
  deploy: string;
  estimated_hours: number;
  index: number;
}
const { title, description, emoji, slug, difficulty, category, tech_type, frontend, database, backend, deploy, estimated_hours, index } = Astro.props;

const difficultyColors: Record<string, string> = {
  '入门': 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300',
  '进阶': 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300',
  '高阶': 'bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300',
};

const techTags = [frontend, database, backend].filter(t => t && t !== '无');
---

<a href={`/cases/${slug}`} class="group relative p-5 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)] hover:border-[var(--color-accent)]/30 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 reveal" style={`transition-delay: ${index * 80}ms`}>
  <div class="absolute inset-0 rounded-xl bg-gradient-to-br from-[var(--color-accent)]/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" aria-hidden="true" />
  <div class="relative z-[1] flex flex-col gap-3">
    <!-- Row 1: emoji + title -->
    <div class="flex items-start gap-3">
      <span class="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--color-accent)]/10 to-[var(--color-accent)]/5 flex items-center justify-center text-xl group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300">{emoji}</span>
      <div class="min-w-0 flex-1">
        <h3 class="font-semibold text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors leading-tight">{title}</h3>
        <p class="text-sm text-[var(--color-text-secondary)] mt-1 line-clamp-2 leading-relaxed">{description}</p>
      </div>
    </div>
    <!-- Row 2: badges row -->
    <div class="flex flex-wrap items-center gap-1.5">
      <span class={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${difficultyColors[difficulty]}`}>{difficulty}</span>
      <span class="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-[var(--color-bg-secondary)] text-[var(--color-text-secondary)]">{category}</span>
      <span class="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-[var(--color-bg-secondary)] text-[var(--color-text-secondary)]">{tech_type}</span>
      <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs text-[var(--color-text-muted)]">
        <span>⏱️</span>
        <span>{estimated_hours} 小时</span>
      </span>
    </div>
    <!-- Row 3: tech tags -->
    <div class="flex flex-wrap gap-1">
      {techTags.map((tag) => (
        <code class="text-[0.7rem] px-1.5 py-0.5 rounded-md bg-[var(--color-bg-secondary)] text-[var(--color-text-muted)] font-mono">{tag}</code>
      ))}
    </div>
  </div>
</a>
```

- [ ] **Step 2.2: Commit**

```bash
git add src/components/ui/CaseCard.astro
git commit -m "feat: add CaseCard component with 6-dimension display"
```

---

### Task 3: 创建 CaseFilter 组件和筛选脚本

**Files:**
- Create: `src/components/interactive/CaseFilter.astro`

三行 Tab 筛选栏 + 原生 JS 过滤脚本，支持多维度组合筛选。

- [ ] **Step 3.1: 编写 CaseFilter.astro**

```astro
---
// src/components/interactive/CaseFilter.astro
// Three-row filter bar with client-side filtering — pure JS, no framework

interface CaseData {
  slug: string;
  difficulty: string;
  category: string;
  tech_type: string;
}

export interface Props {
  cases: CaseData[];
}

const { cases } = Astro.props;

// Extract unique values for each dimension, preserving order of appearance
const difficulties = ['全部', ...new Set(cases.map(c => c.difficulty))] as string[];
const categories = ['全部', ...new Set(cases.map(c => c.category))] as string[];
const techTypes = ['全部', ...new Set(cases.map(c => c.tech_type))] as string[];

const filterGroups = [
  { id: 'difficulty', label: '难度', items: difficulties },
  { id: 'category', label: '类型', items: categories },
  { id: 'tech_type', label: '技术方向', items: techTypes },
];
---

<div id="case-filter" class="mb-8 space-y-2">
  {filterGroups.map((group) => (
    <div class="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
      <span class="text-xs font-semibold text-[var(--color-text-muted)] whitespace-nowrap shrink-0 w-14">{group.label}</span>
      <div class="flex gap-1.5" data-filter-group={group.id}>
        {group.items.map((item, i) => (
          <button
            class="filter-btn text-xs px-3 py-1.5 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text-secondary)] hover:border-[var(--color-accent)]/30 hover:text-[var(--color-accent)] transition-colors duration-150 whitespace-nowrap {i === 0 ? 'active' : ''}"
            data-filter-group={group.id}
            data-filter-value={item}
          >{item}</button>
        ))}
      </div>
    </div>
  ))}
</div>

<script>
  (function initFilter() {
    const container = document.getElementById('case-filter');
    if (!container) return;

    const cards = document.querySelectorAll('[data-case-card]');
    // Map each card's data attributes
    const cardData: { el: Element; difficulty: string; category: string; tech_type: string }[] = [];
    cards.forEach(el => {
      cardData.push({
        el,
        difficulty: el.getAttribute('data-difficulty') || '',
        category: el.getAttribute('data-category') || '',
        tech_type: el.getAttribute('data-tech-type') || '',
      });
    });

    // Active filters: '全部' means no filter for that group
    const activeFilters: Record<string, string> = {
      difficulty: '全部',
      category: '全部',
      tech_type: '全部',
    };

    function filterCards() {
      cardData.forEach(({ el, difficulty, category, tech_type }) => {
        const matchDifficulty = activeFilters.difficulty === '全部' || difficulty === activeFilters.difficulty;
        const matchCategory = activeFilters.category === '全部' || category === activeFilters.category;
        const matchTech = activeFilters.tech_type === '全部' || tech_type === activeFilters.tech_type;
        el.classList.toggle('filter-hidden', !(matchDifficulty && matchCategory && matchTech));
      });
    }

    // Click handlers for filter buttons
    container.addEventListener('click', (e) => {
      const btn = (e.target as HTMLElement).closest('.filter-btn') as HTMLElement | null;
      if (!btn) return;

      const group = btn.getAttribute('data-filter-group');
      const value = btn.getAttribute('data-filter-value');
      if (!group || !value) return;

      // Deactivate siblings, activate this one
      const siblings = container.querySelectorAll(`[data-filter-group="${group}"] .filter-btn`);
      siblings.forEach(s => s.classList.remove('active'));
      btn.classList.add('active');

      activeFilters[group] = value;
      filterCards();
    });

    // Show empty state if all hidden
    const emptyState = document.getElementById('filter-empty-state');

    function updateEmptyState() {
      const visible = cardData.filter(d => !d.el.classList.contains('filter-hidden')).length;
      if (emptyState) {
        emptyState.classList.toggle('hidden', visible > 0);
      }
    }

    // Patch filterCards to also call updateEmptyState
    const originalFilter = filterCards;
    filterCards = function() {
      originalFilter();
      updateEmptyState();
    };
  })();
</script>

<style>
  .filter-btn.active {
    background: var(--color-accent);
    color: white !important;
    border-color: var(--color-accent) !important;
  }
  .dark .filter-btn.active {
    background: var(--color-accent);
    color: white !important;
  }
  .filter-hidden {
    display: none !important;
  }
  /* Hide scrollbar for filter rows */
  .scrollbar-none::-webkit-scrollbar { display: none; }
  .scrollbar-none { -ms-overflow-style: none; scrollbar-width: none; }
</style>
```

- [ ] **Step 3.2: Commit**

```bash
git add src/components/interactive/CaseFilter.astro
git commit -m "feat: add CaseFilter component with multi-dimension filtering"
```

---

### Task 4: 创建案例库列表页

**Files:**
- Create: `src/pages/cases/index.astro`

列表页使用 `BaseLayout`，从 content collection 获取所有案例数据，渲染 CaseFilter + CaseCard 网格。

- [ ] **Step 4.1: 编写 cases/index.astro**

```astro
---
// src/pages/cases/index.astro
// Case study listing page — card grid with multi-dimension filtering
import BaseLayout from '@layouts/BaseLayout.astro';
import CaseCard from '@components/ui/CaseCard.astro';
import CaseFilter from '@components/interactive/CaseFilter.astro';
import { getCollection } from 'astro:content';

const allCases = await getCollection('cases');
const sorted = allCases.sort((a, b) => a.data.order - b.data.order);
---

<BaseLayout title="案例库" description="从入门到高阶，9 个真实项目带你实战 Vibe Coding——选择适合你的项目开始学习">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
    <!-- Header -->
    <div class="mb-10">
      <h1 class="text-3xl lg:text-4xl font-bold mb-2">
        <span class="gradient-text">案例库</span>
      </h1>
      <p class="text-[var(--color-text-secondary)] text-lg">
        从入门到高阶，9 个真实项目带你实战 Vibe Coding。选择适合你的项目开始学习。
      </p>
    </div>

    <!-- Filter bar -->
    <CaseFilter cases={sorted.map(c => ({ slug: c.id, difficulty: c.data.difficulty, category: c.data.category, tech_type: c.data.tech_type }))} />

    <!-- Empty state -->
    <div id="filter-empty-state" class="hidden text-center py-16">
      <div class="text-4xl mb-4">🔍</div>
      <p class="text-[var(--color-text-secondary)]">没有找到匹配的项目，试试调整筛选条件</p>
    </div>

    <!-- Card grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
      {sorted.map((doc, i) => {
        const d = doc.data;
        // Cast to access extended frontmatter fields
        const data = d as Record<string, any>;
        return (
          <div
            data-case-card
            data-difficulty={data.difficulty || ''}
            data-category={data.category || ''}
            data-tech-type={data.tech_type || ''}
          >
            <CaseCard
              title={data.title}
              description={data.description || ''}
              emoji={data.emoji || '📁'}
              slug={doc.id.split('/').pop() || doc.id}
              difficulty={(data.difficulty as '入门' | '进阶' | '高阶') || '入门'}
              category={data.category || ''}
              tech_type={data.tech_type || ''}
              frontend={data.frontend || ''}
              database={data.database || ''}
              backend={data.backend || ''}
              deploy={data.deploy || ''}
              estimated_hours={data.estimated_hours || 1}
              index={i}
            />
          </div>
        );
      })}
    </div>
  </div>
</BaseLayout>
```

- [ ] **Step 4.2: Commit**

```bash
git add src/pages/cases/index.astro
git commit -m "feat: add case study listing page with filter and cards"
```

---

### Task 5: 案例 2 — 程序员的博客 (tech-blog)

**Files:**
- Create: `src/content/zh/cases/tech-blog.mdx`

一个使用 Astro + Decap CMS 搭建的个人技术博客，聚焦纯前端+内容管理。

- [ ] **Step 5.1: 编写 tech-blog.mdx**

```mdx
---
title: '程序员的博客'
description: '从零搭建一个个人技术博客——支持 CMS 内容管理、评论系统、SEO 优化'
emoji: '📝'
section: 'cases'
order: 2
difficulty: '入门'
category: '内容站'
tech_type: '前端+CMS'
frontend: 'Astro + Tailwind CSS'
database: '无（CMS 托管）'
backend: 'Decap CMS（Git-based）'
ai_api: '无'
payment: '无'
auth: '无'
deploy: 'Vercel'
estimated_hours: 3
---

## 项目概览

**人物**：小林，前端爱好者，想把技术笔记整理成博客分享出去
**目标**：做一个支持 Markdown 写作、有评论功能的个人博客
**用时**：约 3 小时
**最终成果**：一个带 CMS 的响应式博客网站，部署在 Vercel

---

## 用到的 Skills 一览

```bash
# 前端开发
npx skills add busirocket/agents-skills@busirocket-tailwindcss-v4 -g -y

# 部署
npx skills add yonatangross/orchestkit@devops-deployment -g -y
```

---

## 阶段 0：准备工作

### 需要注册的账号

| 平台 | 用途 | 费用 |
|------|------|------|
| GitHub | 存放代码 + 作为 CMS 后端 | 免费 |
| Vercel | 部署网站 | 免费 |

### 需要安装的工具

| 工具 | 用途 |
|------|------|
| VS Code | 写代码的编辑器 |
| Node.js | 本地开发环境 |

---

## 阶段 1：技术选型分析

### 为什么选 Astro？

| 方案 | 类型 | 优点 | 缺点 |
|------|------|------|------|
| Astro | 静态站点生成器 | 零 JS 默认、Markdown 原生支持、速度快 | 生态较新 |
| Next.js | React 全栈框架 | 生态丰富 | 复杂度高 |
| Hugo | Go 静态生成 | 极快 | 模板语法冷门 |

**选择 Astro**：博客是内容型网站，Astro 对 Markdown/MDX 有一等支持，自带 Content Collections，零 JS 开销最适合博客。

### 为什么选 Decap CMS？

Decap CMS（原 Netlify CMS）是 Git-based CMS，编辑直接在 GitHub 仓库中提交 Markdown 文件——不需要额外数据库，对新手零成本。

---

## 阶段 2：前端开发

### 博客结构

```
src/content/blog/     ← MDX 文章存放在这里
src/pages/blog/       ← 列表页 + 文章页路由
src/components/       ← BlogCard, TagCloud, 评论组件
```

### 关键功能

- 文章列表页（按日期倒序）
- 标签分类 + 标签云
- RSS/Atom 订阅
- 评论系统接入（Giscus——基于 GitHub Discussions，免费无广告）

### SEO 设置

在 `astro.config.mjs` 中配置 sitemap 插件，每篇文章自动生成：

```ts
import sitemap from '@astrojs/sitemap';
// 集成已在配置中
```

---

## 阶段 3：部署方案

- **平台**：Vercel（免费 Hobby 计划）
- **CI/CD**：连接 GitHub 仓库，推送 main 分支自动部署
- **域名**：Vercel 提供 `.vercel.app` 免费域名，也可绑定自定义域名

---

## 阶段 4：SEO 优化

- 每篇文章 frontmatter 包含 `title`、`description`、`tags`
- 自动生成 `sitemap.xml`
- 使用语义化 HTML 结构（`<article>`、`<time>`、`<nav>`）
- RSS Feed 方便搜索引擎抓取

---

## 阶段 5：文案 & 营销

- 文章开头用「一句话总结」抓住读者
- 代码块保持简洁，附带实际运行结果
- 在掘金、SegmentFault 等平台同步发布，末尾加原文链接
```

- [ ] **Step 5.2: Commit**

```bash
git add src/content/zh/cases/tech-blog.mdx
git commit -m "feat: add case 2 — tech blog"
```

---

### Task 6: 案例 3 — 设计公司官网 (design-company)

**Files:**
- Create: `src/content/zh/cases/design-company.mdx`

一个设计公司品牌官网，包含作品集展示、团队介绍、联系表单（对接 Supabase）。

- [ ] **Step 6.1: 编写 design-company.mdx**

```mdx
---
title: '设计公司官网'
description: '从零搭建一个设计公司品牌官网——响应式、作品展示、联系表单'
emoji: '🏢'
section: 'cases'
order: 3
difficulty: '入门'
category: '企业官网'
tech_type: '前端+轻后端'
frontend: 'Astro + Tailwind CSS'
database: 'Supabase（表单数据）'
backend: 'Supabase Edge Functions'
ai_api: '无'
payment: '无'
auth: '无'
deploy: 'Vercel'
estimated_hours: 4
---

## 项目概览

**人物**：小张，开了一家设计工作室，需要一个官网展示作品
**目标**：一个 5 页的响应式官网 + 联系表单
**用时**：约 4 小时
**最终成果**：一个专业的公司官网，部署在 Vercel

---

## 用到的 Skills 一览

```bash
# 设计
npx skills add nexu-io/open-design@ui-ux-pro-max -g -y

# 前端
npx skills add busirocket/agents-skills@busirocket-tailwindcss-v4 -g -y

# 后端
npx skills add aj-geddes/useful-ai-prompts@nodejs-express-server -g -y

# 部署
npx skills add yonatangross/orchestkit@devops-deployment -g -y
```

---

## 阶段 0：准备工作

（同摄影集——GitHub + Vercel 账号，VS Code + Node.js）

额外注册：[Supabase](https://supabase.com) — 用于存储表单提交数据，免费额度足够。

---

## 阶段 1：技术选型分析

### 前端选型

| 方案 | 适合场景 |
|------|---------|
| Astro | 内容型官网，SEO 友好 |
| Next.js | 需要更多交互时 |
| 纯 HTML/CSS | 过于原始，维护成本高 |

**选择 Astro**：官网以展示为主，交互少，Astro 零 JS 的策略让页面加载极快，对 SEO 最友好。

### 数据库选择

为什么选 Supabase 而不是其他？

| 方案 | 费用 | 复杂度 | 适合 |
|------|------|--------|------|
| Supabase | 免费（500MB） | 低 | 联系表单、轻量数据 |
| MongoDB Atlas | 免费（512MB） | 中 | 文档型数据 |
| MySQL | 需自建 | 高 | 复杂关系型 |
| Google Sheets API | 免费 | 低 | 极简方案 |

**选择 Supabase**：可视化建表、PostgreSQL 底层、免费额度充足、有 JS SDK 一行代码搞定数据写入。

---

## 阶段 2：数据库构建（联系表单）

Supabase 中建表 `contacts`：

```sql
CREATE TABLE contacts (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

建好表后，在 Supabase Dashboard 的 **SQL Editor** 中执行即可，不需要写后端代码。

---

## 阶段 3：前端开发

### 页面结构

- 首页（Hero + 服务介绍 + 作品精选 + 联系 CTA）
- 作品集（网格展示）
- 关于我们（团队介绍）
- 服务（服务项目详情）
- 联系（表单）

### 联系表单对接

在 Astro 页面中使用原生 JS 提交表单到 Supabase：

```javascript
const { data, error } = await supabase
  .from('contacts')
  .insert([{ name, email, company, message }]);
```

---

## 阶段 4：部署方案

- Vercel + GitHub 自动部署
- Supabase 托管数据库，无需额外服务器
- 绑定自定义域名

---

## 阶段 5：SEO 优化

- 每个页面独立 TDK（title/description/keywords）
- 结构化数据（LocalBusiness Schema）
- OG 标签（分享到微信/社交媒体时展示卡片）
- 图片加 `alt` 属性

---

## 阶段 6：文案 & 营销

- 首页用「你设计，我们建」类短句抓住注意力
- 作品集每个项目写背景故事而非只放图片
- 在站酷、小红书发布设计过程帖引流
```

- [ ] **Step 6.2: Commit**

```bash
git add src/content/zh/cases/design-company.mdx
git commit -m "feat: add case 3 — design company website"
```

---

### Task 7: 案例 4 — 手作饰品小店 (handmade-shop)

**Files:**
- Create: `src/content/zh/cases/handmade-shop.mdx`

全栈电商小站：商品展示、购物车、支付集成。

- [ ] **Step 7.1: 编写 handmade-shop.mdx**

```mdx
---
title: '手作饰品小店'
description: '从零搭建一个手作饰品在线商店——商品管理、购物车、在线支付'
emoji: '🛒'
section: 'cases'
order: 4
difficulty: '进阶'
category: '电商'
tech_type: '全栈'
frontend: 'Next.js + Tailwind CSS'
database: 'Supabase（PostgreSQL）'
backend: 'Next.js API Routes'
ai_api: '无'
payment: 'Stripe'
auth: 'Supabase Auth'
deploy: 'Vercel'
estimated_hours: 8
---

## 项目概览

**人物**：小美，手工饰品创作者，想在网上卖自己的作品
**目标**：一个带购物车和在线支付的小型电商网站
**用时**：约 8 小时
**最终成果**：一个全栈电商小站，支持 Stripe 支付，部署在 Vercel

---

## 用到的 Skills 一览

```bash
# 前端
npx skills add busirocket/agents-skills@busirocket-tailwindcss-v4 -g -y

# 后端
npx skills add aj-geddes/useful-ai-prompts@nodejs-express-server -g -y

# 部署
npx skills add yonatangross/orchestkit@devops-deployment -g -y
```

---

## 阶段 0：准备工作

（GitHub + Vercel 账号 + VS Code + Node.js）

额外注册：
- [Stripe](https://stripe.com) — 支付处理
- [Supabase](https://supabase.com) — 数据库 + 用户认证

---

## 阶段 1：技术选型分析

### 项目技术选型

| 方案 | 前端 | 后端 | 数据库 | 支付 | 推荐指数 |
|------|------|------|--------|------|---------|
| A | Next.js | API Routes | Supabase PostgreSQL | Stripe | ⭐⭐⭐⭐⭐ |
| B | React | Express + Node | MongoDB | 微信支付 | ⭐⭐⭐ |
| C | Astro | Astro DB | Turso | LemonSqueezy | ⭐⭐⭐ |

**推荐方案 A**：Next.js API Routes 让前后端在一个项目中完成，减少部署复杂度。Supabase 提供数据库 + 认证二合一。Stripe 有成熟的 React SDK（`@stripe/react-stripe-js`），新手友好。

### 数据库选择

| 数据库 | 优点 | 缺点 |
|--------|------|------|
| Supabase (PostgreSQL) | 免费额度充足、可视化、实时订阅 | 存储有限（500MB） |
| MongoDB Atlas | 文档灵活 | 关系查询不便 |
| 自建 MySQL | 完全控制 | 需要服务器 |

**选择 Supabase**：电商需要关系型数据（商品→订单→用户），PostgreSQL 天然适合。Supabase 的 Row Level Security 让前端可以直接安全查询数据库。

---

## 阶段 2：数据库构建

### 表结构

```sql
-- 商品表
CREATE TABLE products (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  price INTEGER NOT NULL,  -- 单位：分，避免浮点误差
  image_url TEXT,
  stock INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 订单表
CREATE TABLE orders (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  user_id UUID REFERENCES auth.users,
  status TEXT DEFAULT 'pending',
  total INTEGER NOT NULL,
  stripe_payment_id TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 订单项表
CREATE TABLE order_items (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  order_id BIGINT REFERENCES orders,
  product_id BIGINT REFERENCES products,
  quantity INTEGER NOT NULL,
  price INTEGER NOT NULL
);
```

### RLS 策略

```sql
-- 商品表公开可读
CREATE POLICY "Products are public" ON products
  FOR SELECT USING (true);

-- 用户只能看自己的订单
CREATE POLICY "Users see own orders" ON orders
  FOR SELECT USING (auth.uid() = user_id);
```

---

## 阶段 3：后端搭建

### API 设计

| 端点 | 方法 | 功能 |
|------|------|------|
| `/api/products` | GET | 获取商品列表 |
| `/api/products/[id]` | GET | 获取商品详情 |
| `/api/checkout` | POST | 创建 Stripe 支付 Session |
| `/api/webhook` | POST | Stripe 支付回调（更新订单状态） |

---

## 阶段 4：部署方案

- **前端**：Vercel（Next.js 原生支持）
- **数据库**：Supabase（托管 PostgreSQL）
- **支付**：Stripe（配置 Webhook 指向 Vercel 域名）
- **域名**：绑定自定义域名

---

## 阶段 5：SEO 优化

- 每个商品独立详情页，SEO 友好
- OG 图片：商品图 + 价格 + 名称
- 结构化数据（Product Schema）
- Sitemap 自动包含所有商品页

---

## 阶段 6：文案 & 营销

- 商品描述写「故事」而非「参数」：这件耳环的灵感来源？
- 小红书 + 抖音发布制作过程短视频，引流到网站
- 首单优惠码（Stripe Coupon 功能）
- 邮件订阅上新通知（Supabase 存订阅用户）
```

- [ ] **Step 7.2: Commit**

```bash
git add src/content/zh/cases/handmade-shop.mdx
git commit -m "feat: add case 4 — handmade shop e-commerce"
```

---

### Task 8: 案例 5 — 城市活动社区 (community-forum)

- [ ] **Step 8.1: 编写 community-forum.mdx**

```mdx
---
title: '城市活动社区'
description: '从零搭建一个同城活动社区——用户认证、活动发布、报名参与、评论互动'
emoji: '🗺️'
section: 'cases'
order: 5
difficulty: '高阶'
category: '社区'
tech_type: '全栈+认证'
frontend: 'React + Tailwind CSS'
database: 'Firebase Firestore'
backend: 'Firebase Cloud Functions'
ai_api: '无'
payment: '无'
auth: 'Firebase Auth'
deploy: 'Vercel'
estimated_hours: 10
---

## 项目概览

**人物**：小陈，社区运营者，想做一个本地的活动发布和报名平台
**目标**：用户可注册登录、发布活动、报名参加、评论互动
**用时**：约 10 小时
**最终成果**：一个带实时数据的小型社区平台

---

## 用到的 Skills 一览

```bash
# 前端
npx skills add busirocket/agents-skills@busirocket-tailwindcss-v4 -g -y

# 后端
npx skills add aj-geddes/useful-ai-prompts@nodejs-express-server -g -y

# 测试
npx skills add wshobson/agents@javascript-testing-patterns -g -y

# 部署
npx skills add yonatangross/orchestkit@devops-deployment -g -y
```

---

## 阶段 0：准备工作

额外注册：[Firebase](https://firebase.google.com) — 提供 Auth + Firestore + Cloud Functions

---

## 阶段 1：技术选型分析

### 为什么选 Firebase？

| 方案 | 数据库 | 认证 | 实时 | 费用 |
|------|--------|------|------|------|
| Firebase | Firestore | ✅ 内置 | ✅ 实时监听 | 免费额度大 |
| Supabase | PostgreSQL | ✅ 内置 | ✅ 实时 | 免费 500MB |
| 自建 | 需要自建 | 需要集成 | 需要 WebSocket | 费用高 |

**选择 Firebase**：社区需要实时功能（新活动、评论即时显示），Firestore 的 `onSnapshot` 一行代码实现实时订阅，对新手最友好。

### 数据库选择

Firestore 是 NoSQL 文档数据库，适合社区这种数据结构灵活的场景：

```
集合: users/{uid}        ← 用户资料
集合: events/{id}        ← 活动帖
  子集合: comments/{id}  ← 评论
集合: registrations/{id} ← 报名记录
```

---

## 阶段 2：数据库构建（Firestore 控制台创建）

### 集合结构

```
users/{uid}
  ├── name: string
  ├── avatar: string
  └── bio: string

events/{eventId}
  ├── title: string
  ├── description: string
  ├── date: timestamp
  ├── location: string
  ├── maxParticipants: number
  ├── organizerId: string
  ├── createdAt: timestamp
  └── status: 'upcoming' | 'ongoing' | 'ended'

events/{eventId}/comments/{commentId}
  ├── userId: string
  ├── content: string
  └── createdAt: timestamp

registrations/{regId}
  ├── eventId: string
  ├── userId: string
  └── createdAt: timestamp
```

### 安全规则（Firestore Rules）

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // 活动公开可读
    match /events/{eventId} {
      allow read: if true;
      allow write: if request.auth != null;
    }
    // 评论需登录
    match /events/{eventId}/comments/{commentId} {
      allow read: if true;
      allow create: if request.auth != null;
    }
    // 报名需登录
    match /registrations/{regId} {
      allow read: if request.auth != null;
      allow create: if request.auth != null;
    }
    // 用户资料自己管理
    match /users/{uid} {
      allow read: if true;
      allow write: if request.auth != null && request.auth.uid == uid;
    }
  }
}
```

---

## 阶段 3：后端搭建

Firebase Cloud Functions 处理后台逻辑：

| 函数 | 触发 | 功能 |
|------|------|------|
| `onNewRegistration` | Firestore 写入 | 报名数超限时自动拒绝 |
| `onEventComplete` | 定时触发 | 活动结束后自动更新状态 |

---

## 阶段 4：前端开发

### 页面结构

- 首页：活动列表（按日期排序，实时更新）
- 活动详情：介绍 + 评论 + 报名按钮
- 发布活动：表单页面
- 个人中心：我的活动 + 我的报名

### 实时数据

```javascript
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';

// 一行代码实现实时活动列表
const q = query(collection(db, 'events'), orderBy('date'));
onSnapshot(q, (snapshot) => {
  // 自动更新 UI
});
```

---

## 阶段 5：部署方案

- **前端**：Vercel
- **后端/数据库**：Firebase（无需额外服务器）
- **认证**：Firebase Auth，支持邮箱 + Google 登录

---

## 阶段 6：SEO 优化

- 活动详情页 SSR（使用 Next.js 或 Firestore SSR）
- 每个活动独立 URL
- Open Graph 标签（分享到微信群时展示活动信息）

---

## 阶段 7：文案 & 营销

- 本地社群运营：微信群 + 公众号引流
- 活动海报自动生成（Canvas API）
- 推荐算法：根据用户报名历史推荐类似活动
```

- [ ] **Step 8.2: Commit**

```bash
git add src/content/zh/cases/community-forum.mdx
git commit -m "feat: add case 5 — community forum"
```

---

### Task 9: 案例 6 — AI 壁纸生成器 (ai-wallpaper)

- [ ] **Step 9.1: 编写 ai-wallpaper.mdx**

```mdx
---
title: 'AI 壁纸生成器'
description: '从零搭建一个 AI 壁纸生成网站——输入描述即可生成独一无二的壁纸'
emoji: '🤖'
section: 'cases'
order: 6
difficulty: '高阶'
category: 'AI 工具'
tech_type: 'AI+全栈'
frontend: 'Next.js + Tailwind CSS'
database: 'PostgreSQL（Supabase）'
backend: 'Next.js API Routes'
ai_api: 'Replicate（Stable Diffusion）'
payment: 'Stripe（按次付费）'
auth: 'Supabase Auth'
deploy: 'Vercel'
estimated_hours: 10
---

## 项目概览

**人物**：小王，AI 爱好者，想做一个能赚钱的 AI 工具
**目标**：用户输入文字描述，AI 生成壁纸，可付费下载高清版
**用时**：约 10 小时
**最终成果**：一个 AI 壁纸生成 + 画廊网站，支持付费下载

---

## 用到的 Skills 一览

```bash
# 前端
npx skills add busirocket/agents-skills@busirocket-tailwindcss-v4 -g -y

# 后端
npx skills add aj-geddes/useful-ai-prompts@nodejs-express-server -g -y

# 部署
npx skills add yonatangross/orchestkit@devops-deployment -g -y
```

---

## 阶段 0：准备工作

额外注册：
- [Replicate](https://replicate.com) — AI 模型 API，注册送免费额度
- [Supabase](https://supabase.com) — 数据库 + 认证
- [Stripe](https://stripe.com) — 支付

---

## 阶段 1：技术选型分析

### 项目技术选型

| 组件 | 选择 | 理由 |
|------|------|------|
| 前端框架 | Next.js | SSR 对 SEO 友好，API Routes 一站式后端 |
| AI 模型 | Replicate | 一行代码调用 Stable Diffusion，无需 GPU |
| 数据库 | Supabase PostgreSQL | 存储生成记录 + 用户数据 |
| 支付 | Stripe | 成熟的付费下载方案 |
| 存储 | Supabase Storage | 存储生成的壁纸图片 |

### 为什么选 Replicate 而不是其他 AI API？

| 方案 | 费用 | 模型选择 | 集成难度 |
|------|------|---------|---------|
| Replicate | 按秒计费，首充 $5 | 50+ 模型 | ⭐ 一行代码 |
| OpenAI DALL-E | $0.04/张 | 仅 OpenAI | ⭐⭐ 简单 |
| 自部署 Stable Diffusion | GPU 成本高 | 自定义 | ⭐⭐⭐⭐⭐ 极难 |

---

## 阶段 2：数据库构建

```sql
-- 壁纸生成记录
CREATE TABLE wallpapers (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  user_id UUID REFERENCES auth.users,
  prompt TEXT NOT NULL,
  image_url TEXT NOT NULL,
  thumbnail_url TEXT,
  is_public BOOLEAN DEFAULT true,
  is_purchased BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 付费下载记录
CREATE TABLE purchases (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  user_id UUID REFERENCES auth.users,
  wallpaper_id BIGINT REFERENCES wallpapers,
  stripe_payment_id TEXT,
  amount INTEGER NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

---

## 阶段 3：后端搭建

### API 设计

| 端点 | 功能 |
|------|------|
| `POST /api/generate` | 调用 Replicate 生成壁纸 |
| `GET /api/gallery` | 获取公开壁纸列表 |
| `POST /api/download` | 创建 Stripe 支付 Session |

### 调用 Replicate（仅需 3 行代码）

```javascript
import Replicate from 'replicate';
const replicate = new Replicate({ auth: process.env.REPLICATE_API_KEY });
const output = await replicate.run(
  "stability-ai/stable-diffusion:db21e45d3f7023abc2a46ab38e6d9b5c6b4b9b5f5c5b5c5b5c5b5c5b5c5b5c5",
  { input: { prompt: userPrompt } }
);
// output 就是生成的图片 URL
```

---

## 阶段 4：部署方案

- **前端 + API**：Vercel
- **数据库 + 存储**：Supabase
- **AI 模型**：Replicate（外部 API）
- **支付**：Stripe Webhook → Vercel

---

## 阶段 5：SEO 优化

- 壁纸画廊页 SSR（每个壁纸独立 URL）
- 结构化数据（CreativeWork Schema）
- 图片懒加载 + WebP 格式

---

## 阶段 6：文案 & 营销

- 免费版：生成低分辨率带水印
- 付费版：$1.99 下载高清无水印
- 小红书/抖音发「AI 生成壁纸」短视频引流
- 每日免费额度机制（登录用户每天 3 次免费生成）
```

- [ ] **Step 9.2: Commit**

```bash
git add src/content/zh/cases/ai-wallpaper.mdx
git commit -m "feat: add case 6 — AI wallpaper generator"
```

---

### Task 10: 案例 7 — 英语学习平台 (english-learning)

- [ ] **Step 10.1: 编写 english-learning.mdx**

```mdx
---
title: '英语学习平台'
description: '从零搭建一个在线英语学习平台——课程管理、学习进度追踪、小测验'
emoji: '📚'
section: 'cases'
order: 7
difficulty: '进阶'
category: '学习平台'
tech_type: '全栈'
frontend: 'Astro + React islands + Tailwind CSS'
database: 'Supabase（PostgreSQL）'
backend: 'Supabase Edge Functions'
ai_api: 'OpenAI API（AI 对话练习）'
payment: 'Stripe（订阅付费）'
auth: 'Supabase Auth'
deploy: 'Vercel'
estimated_hours: 8
---

## 项目概览

**人物**：小刘，英语老师，想做一个在线学习平台辅助教学
**目标**：课程展示 + 学习进度追踪 + AI 口语练习 + 小测验
**用时**：约 8 小时
**最终成果**：一个带 AI 功能的学习平台

---

## 用到的 Skills 一览

```bash
# 前端
npx skills add busirocket/agents-skills@busirocket-tailwindcss-v4 -g -y

# AI
npx skills add use-ai-sdk -g -y

# 部署
npx skills add yonatangross/orchestkit@devops-deployment -g -y
```

---

## 阶段 1：技术选型分析

### 为什么选 Astro + React islands？

学习平台大部分是内容页（课程介绍），少部分需要交互（测验、AI 对话）。Astro 的 islands 架构正好匹配——静态内容用 Astro，交互组件用 React。

### 数据库选择

| 表 | 说明 |
|----|------|
| `courses` | 课程信息 |
| `lessons` | 课时内容 |
| `user_progress` | 学习进度 |
| `quiz_attempts` | 测验记录 |
| `subscriptions` | 订阅信息 |

PostgreSQL 的关系型结构完美匹配这种有严格数据关系的场景。

---

## 阶段 2：数据库构建

```sql
CREATE TABLE courses (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  level TEXT CHECK (level IN ('beginner', 'intermediate', 'advanced')),
  price INTEGER,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE lessons (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  course_id BIGINT REFERENCES courses,
  title TEXT NOT NULL,
  content_url TEXT,
  order_num INTEGER,
  duration_minutes INTEGER
);

CREATE TABLE user_progress (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  user_id UUID REFERENCES auth.users,
  lesson_id BIGINT REFERENCES lessons,
  completed BOOLEAN DEFAULT false,
  score INTEGER,
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, lesson_id)
);
```

---

## 阶段 3：AI 口语练习功能

使用 OpenAI API 做一个 AI 对话练习：

```javascript
import OpenAI from 'openai';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

async function aiTutor(userMessage, level) {
  const response = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [
      { role: 'system', content: `你是英语陪练，用户水平：${level}。请用适合的词汇和语速回应，并在对话结束后给出语法纠正建议。` },
      { role: 'user', content: userMessage },
    ],
  });
  return response.choices[0].message.content;
}
```

---

## 阶段 4：部署 + SEO + 营销

- **部署**：Vercel + Supabase
- **SEO**：课程页面独立 URL + 结构化数据（Course Schema）+ 博客引流
- **营销**：免费试学课程 → 邮件收集 → 订阅转化。小红书发「30 天英语学习打卡」系列
```

- [ ] **Step 10.2: Commit**

```bash
git add src/content/zh/cases/english-learning.mdx
git commit -m "feat: add case 7 — English learning platform"
```

---

### Task 11: 案例 8 — 个人财务仪表盘 (finance-dashboard)

- [ ] **Step 11.1: 编写 finance-dashboard.mdx**

```mdx
---
title: '个人财务仪表盘'
description: '从零搭建一个个人财务管理工具——记账、分类统计、可视化图表'
emoji: '📊'
section: 'cases'
order: 8
difficulty: '进阶'
category: 'SaaS 工具'
tech_type: '全栈+可视化'
frontend: 'Next.js + Tailwind CSS + Chart.js'
database: 'MongoDB Atlas'
backend: 'Next.js API Routes'
ai_api: '无'
payment: '无'
auth: 'NextAuth.js'
deploy: 'Vercel'
estimated_hours: 7
---

## 项目概览

**人物**：小杨，上班族，想做一个工具追踪自己的收支
**目标**：记账 + 分类统计 + 可视化图表
**用时**：约 7 小时
**最终成果**：一个带图表的个人财务仪表盘

---

## 用到的 Skills 一览

```bash
# 前端
npx skills add busirocket/agents-skills@busirocket-tailwindcss-v4 -g -y

# 后端
npx skills add aj-geddes/useful-ai-prompts@nodejs-express-server -g -y

# 部署
npx skills add yonatangross/orchestkit@devops-deployment -g -y
```

---

## 阶段 1：技术选型分析

### 为什么选 MongoDB？

财务数据结构灵活——每笔交易可能有不同的字段（餐饮有餐厅名、购物有商品名）。MongoDB 的文档模型天然适合。

### 为什么选 Chart.js？

| 库 | 复杂度 | 可定制性 | 包大小 |
|----|--------|---------|--------|
| Chart.js | 低 | 高 | 60KB |
| D3.js | 高 | 极高 | 250KB |
| Recharts | 中 | 中 | 100KB |

对新手来说，Chart.js 的配置最简单直观。

---

## 阶段 2：数据库构建

MongoDB 集合结构（一个文档示例）：

```json
// transactions 集合
{
  "_id": ObjectId("..."),
  "userId": "user_123",
  "type": "expense",        // income | expense
  "amount": 128.00,
  "category": "餐饮",
  "tags": ["午餐", "外卖"],
  "note": "沙县小吃",
  "date": "2026-06-14",
  "createdAt": ISODate("...")
}

// budgets 集合
{
  "_id": ObjectId("..."),
  "userId": "user_123",
  "category": "餐饮",
  "monthlyLimit": 2000,
  "month": "2026-06"
}
```

---

## 阶段 3：API 设计

| 端点 | 功能 |
|------|------|
| `GET /api/transactions` | 获取交易列表（支持分页 + 筛选） |
| `POST /api/transactions` | 新增交易 |
| `DELETE /api/transactions/:id` | 删除交易 |
| `GET /api/stats/monthly` | 月度统计（按分类汇总） |
| `GET /api/stats/trend` | 趋势数据（用于折线图） |

---

## 阶段 4：可视化图表

### 首页看板展示

- 饼图：本月支出分类占比
- 折线图：近 6 月收支趋势
- 环形图：预算使用进度
- 表格：最近 10 笔交易

---

## 阶段 5：部署 + SEO + 营销

- **部署**：Vercel + MongoDB Atlas
- **SEO**：不需要（工具型应用，登录后使用）
- **营销**：在知乎/小红书发「我做了个记账工具」帖子，免费使用吸引用户，后续考虑 Pro 版本
```

- [ ] **Step 11.2: Commit**

```bash
git add src/content/zh/cases/finance-dashboard.mdx
git commit -m "feat: add case 8 — finance dashboard"
```

---

### Task 12: 案例 9 — 校园外卖点餐 (campus-delivery)

- [ ] **Step 12.1: 编写 campus-delivery.mdx**

```mdx
---
title: '校园外卖点餐'
description: '从零搭建一个校园外卖点餐系统——商家端、用户端、实时订单、管理后台'
emoji: '🚚'
section: 'cases'
order: 9
difficulty: '高阶'
category: '小程序风格'
tech_type: '前后端分离'
frontend: 'React + Tailwind CSS'
database: 'MySQL + Redis'
backend: 'Node.js + Express'
ai_api: '无'
payment: '微信支付模拟'
auth: 'JWT'
deploy: '云服务器（阿里云/腾讯云）'
estimated_hours: 12
---

## 项目概览

**人物**：小周，大学生，想做一个校园内外卖点餐平台
**目标**：学生点餐 + 商家接单 + 实时订单状态
**用时**：约 12 小时
**最终成果**：一个前后端分离的外卖系统

---

## 用到的 Skills 一览

```bash
# 前端
npx skills add busirocket/agents-skills@busirocket-tailwindcss-v4 -g -y

# 后端
npx skills add aj-geddes/useful-ai-prompts@nodejs-express-server -g -y

# 部署
npx skills add yonatangross/orchestkit@devops-deployment -g -y
```

---

## 阶段 1：技术选型分析

### 为什么前后端分离？

外卖系统有 3 个客户端（用户端 / 商家端 / 管理后台），前后端分离让同一个 API 服务所有客户端。

### 为什么 MySQL + Redis？

| 数据库 | 用途 | 理由 |
|--------|------|------|
| MySQL | 主数据库 | 订单、用户、商家、商品——强关系型数据 |
| Redis | 缓存 + 实时 | 购物车临时存储、订单状态实时推送 |

### 后端框架对比

| 框架 | 生态 | 学习曲线 | 适合 |
|------|------|---------|------|
| Express | 最丰富 | 低 | 推荐——教程最多 |
| Fastify | 性能好 | 中 | 略小众 |
| NestJS | 企业级 | 高 | 过重 |

---

## 阶段 2：数据库构建

### MySQL 核心表

```sql
-- 用户表
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  phone VARCHAR(20) UNIQUE NOT NULL,
  name VARCHAR(50),
  role ENUM('customer', 'merchant', 'admin') DEFAULT 'customer',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 商家表
CREATE TABLE merchants (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT REFERENCES users(id),
  name VARCHAR(100) NOT NULL,
  address VARCHAR(200),
  status ENUM('open', 'closed') DEFAULT 'open'
);

-- 商品表
CREATE TABLE products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  merchant_id INT REFERENCES merchants(id),
  name VARCHAR(100) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  image_url VARCHAR(500),
  stock INT DEFAULT 0
);

-- 订单表
CREATE TABLE orders (
  id INT AUTO_INCREMENT PRIMARY KEY,
  customer_id INT REFERENCES users(id),
  merchant_id INT REFERENCES merchants(id),
  status ENUM('pending', 'confirmed', 'preparing', 'delivering', 'completed', 'cancelled'),
  total DECIMAL(10,2),
  delivery_address VARCHAR(200),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 订单项表
CREATE TABLE order_items (
  id INT AUTO_INCREMENT PRIMARY KEY,
  order_id INT REFERENCES orders(id),
  product_id INT REFERENCES products(id),
  quantity INT,
  price DECIMAL(10,2)
);
```

### Redis 用途

```javascript
// 购物车（临时存储，过期时间 1 小时）
redis.set(`cart:${userId}`, JSON.stringify(cartItems), 'EX', 3600);

// 订单状态推送（发布/订阅）
redis.publish(`order:${orderId}`, JSON.stringify({ status: 'preparing' }));
```

---

## 阶段 3：后端搭建

### API 架构

```
server/
├── routes/
│   ├── auth.js          # 登录注册
│   ├── merchants.js     # 商家 CRUD
│   ├── products.js      # 商品 CRUD
│   ├── orders.js        # 订单流程
│   └── admin.js         # 管理后台
├── middleware/
│   ├── auth.js          # JWT 验证
│   └── role.js          # 角色鉴权
├── models/              # MySQL 查询
└── app.js               # Express 入口
```

### 订单状态流转

```
pending → confirmed → preparing → delivering → completed
                     ↘ cancelled
```

---

## 阶段 4：部署方案

- **前端**：Vercel 或云服务器 Nginx 托管
- **后端**：阿里云/腾讯云轻量服务器（2核4G 够用）
- **数据库**：云数据库 MySQL + Redis（或同服务器部署）
- **WebSocket**：Socket.io 实现实时订单提醒

---

## 阶段 5：SEO + 营销

- **SEO**：商家和商品页 SSR，本地搜索优化
- **营销**：校园地推 + 首单优惠 + 邀请有礼
- **推广**：在校园贴吧、微信群、小红书本地号推广
```

- [ ] **Step 12.2: Commit**

```bash
git add src/content/zh/cases/campus-delivery.mdx
git commit -m "feat: add case 9 — campus food delivery"
```

---

### Task 13: 验证构建

- [ ] **Step 13.1: 验证列表页可访问**

```bash
cd website
npm run build 2>&1 | tail -20
```

Expected: Build succeeds, listing all pages including `/cases/` and all 9 `/cases/[slug]` pages.

- [ ] **Step 13.2: 验证导航链接**

确认导航栏「案例库」链接指向 `/cases` 而非 `/cases/photography-portfolio`。

- [ ] **Step 13.3: 最终 commit**

```bash
git add -A
git commit -m "feat: expand case study library to 9 projects with listing page"
```
