# Vibe Coding 小白建站指南 — 教学网站设计文档

> **版本**：1.0
> **创建日期**：2026 年 6 月 14 日
> **状态**：已批准 ✅
> **技术栈**：Astro 5.x + Tailwind CSS + MDX + Pagefind

---

## 1. 项目概述

### 1.1 定位

一个面向零编程基础小白的**完整教学网站**，将 PRD V1.0（概念科普）和 V1.1（全流程实战手册）的全部内容转化为结构化的、可交互的网站体验。

### 1.2 核心目标

- 让零基础读者通过网站系统学习 Vibe Coding 建站
- 覆盖从概念认知 → 工具安装 → 9 阶段实战 → 部署上线 → 运营增长的全链路
- 提供交互式代码预览和全文搜索功能

### 1.3 目标用户

- **核心**：零编程基础的小白（L0）
- **次要**：有轻度编程经验想系统化学习的初级学习者（L1-L2）
- 中文用户为主，预留国际化扩展

---

## 2. 信息架构

### 2.1 站点地图

```
首页 (index.astro)
├── 了解 Vibe Coding (/intro/)
│   ├── 什么是 Vibe Coding
│   ├── 为什么现在可以
│   └── 常见误区澄清
├── 准备工作 (/setup/)
│   ├── 必备清单
│   ├── 工具安装教程
│   └── 账号注册指南
├── 全流程实战 (/phases/) ─── 9 个阶段
│   ├── 阶段 0：环境搭建
│   ├── 阶段 1：产品定义
│   ├── 阶段 2：设计与原型
│   ├── 阶段 3：前端开发
│   ├── 阶段 4：后端与数据
│   ├── 阶段 5：测试
│   ├── 阶段 6：部署上线
│   ├── 阶段 7：运维与监控
│   ├── 阶段 8：运营与增长
│   └── 阶段 9：文案创作
├── 附录参考 (/references/)
│   ├── 案例库 (/cases/)
│   ├── Skills 索引 (/skills/)
│   ├── 提示词模板速查 (/prompts/)
│   ├── FAQ / 避坑指南 (/faq/)
│   └── 交互式练习总览 (/exercises/)
```

### 2.2 导航模型

桌面端：左侧可折叠侧边栏（显示当前章节层级）+ 顶部全局导航（Logo、搜索、主题切换）
平板端：侧边栏变为抽屉式，顶部导航精简
手机端：汉堡菜单 + 底部导航栏

---

## 3. 视觉设计

### 3.1 配色方案

| 用途 | 色值 | 描述 |
|------|------|------|
| 主色 | `#0F172A` | 深空蓝黑 — 专业、沉稳、科技感 |
| 强调色 | `#0891B2` | 青蓝色 — 活力、技术、年轻感 |
| 背景色 | `#F8FAFC` | 近白灰 — 干净、不刺眼 |
| 文字色 | `#1E293B` | 深灰 — 长时间阅读不累 |
| 辅色 | `#64748B` | 中灰 — 次要信息 |
| 高亮色 | `#F59E0B` | 琥珀色（少量使用）— 提示/强调 |

支持浅色/深色双模式切换。

### 3.2 排版

| 用途 | 字体 | 字重 |
|------|------|------|
| 中文标题 | Noto Sans SC | 700 / 600 |
| 英文/数字 | Inter | 与标题字重匹配 |
| 代码 | JetBrains Mono | 400 / 500 |
| 正文 | Noto Sans SC | 400 |

### 3.3 布局规则

- 桌面端：侧边栏 280px + 主内容区（最大 960px 居中）
- 平板：全宽内容，侧边栏为覆盖式抽屉
- 手机：全宽内容，底部标签导航
- 采用 4px 基线网格系统，间距使用 4/8/12/16/20/24/32/40/48/64px 序列

### 3.4 关键设计元素

- **卡片**：白色背景 + 轻微阴影（`box-shadow: 0 1px 3px rgba(0,0,0,0.06)`），圆角 12px
- **代码块**：暗色背景（`#0F172A`）+ JetBrains Mono 字体，行号显示
- **阶段导航**：左侧编号圆点 + 阶段名称，当前阶段高亮
- **进度指示**：顶部显示"阶段 X / 9"，阅读进度条
- **首页时间线**：9 个阶段卡片沿中轴线排列，交错左右排列

---

## 4. 技术架构

### 4.1 技术栈选型

| 层次 | 技术 | 说明 |
|------|------|------|
| 框架 | Astro 5.x (SSG) | 静态站点生成，构建时预渲染所有页面 |
| 语言 | TypeScript | 类型安全 |
| 内容 | MDX + Content Collections | 结构化的内容管理，支持 JSX 组件嵌入 |
| 样式 | Tailwind CSS v4 | 工具类优先，配合 CSS 自定义属性 |
| 代码高亮 | Shiki（Astro 内置） | 语法高亮，多主题支持 |
| 搜索 | Pagefind | 静态全文搜索，无需后端服务 |
| 页面过渡 | View Transitions API | 原生浏览器 API，平滑页面切换 |
| 动效 | CSS @keyframes + Intersection Observer | 轻量级入场动画 |

### 4.2 项目目录结构

```
website/
├── src/
│   ├── content/
│   │   ├── zh/
│   │   │   ├── intro/           # 了解 Vibe Coding（*.mdx）
│   │   │   ├── setup/           # 准备工作（*.mdx）
│   │   │   ├── phases/          # 9 个阶段（phase-00 ~ phase-09）
│   │   │   ├── cases/           # 案例库
│   │   │   ├── skills/          # Skills 索引
│   │   │   ├── faq/             # FAQ / 避坑
│   │   │   └── prompts/         # 提示词模板速查
│   │   └── en/                  # （预留）英文版
│   ├── components/
│   │   ├── layout/              # Header, Sidebar, Footer, MobileNav
│   │   ├── ui/                  # Card, Button, Badge, Tag, Icon
│   │   ├── content/             # PhaseNav, TOC, CodePreview, PromptCard
│   │   └── interactive/         # SearchDialog, CodeSandbox
│   ├── layouts/
│   │   ├── BaseLayout.astro     # 基础 HTML 结构 + 全局样式
│   │   ├── DocLayout.astro      # 文档页面（侧边栏 + 内容）
│   │   └── PhaseLayout.astro    # 阶段页面（进度导航 + 内容）
│   ├── pages/
│   │   ├── index.astro          # 首页
│   │   ├── intro/[slug].astro   # 了解 VC 动态路由
│   │   ├── setup/[slug].astro   # 准备动态路由
│   │   ├── phases/[slug].astro  # 阶段动态路由
│   │   ├── cases/[slug].astro   # 案例动态路由
│   │   ├── skills/index.astro   # Skills 索引页
│   │   ├── faq/index.astro      # FAQ 页
│   │   └── prompts/index.astro  # 提示词速查
│   ├── lib/
│   │   ├── content.ts           # Content Collections 工具函数
│   │   ├── utils.ts             # 通用工具
│   │   └── constants.ts         # 站点常量（导航、阶段列表等）
│   └── styles/
│       ├── global.css           # 全局样式 + 主题变量
│       └── theme.css            # 浅色/深色主题定义
├── public/
│   ├── favicon.svg
│   └── fonts/                   # 自托管字体（可选）
├── astro.config.mjs
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

### 4.3 Content Collections  Schema

```typescript
// 阶段内容集合
const phases = defineCollection({
  schema: z.object({
    title: z.string(),            // 阶段标题
    phase: z.number(),            // 阶段编号 0-9
    description: z.string(),      // 简短描述
    icon: z.string(),             // Emoji 图标
    order: z.number(),            // 排序
    draft: z.boolean().optional(), // 草稿状态
  })
})

// 文档内容集合（intro / setup / cases 共用）
const docs = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    section: z.string(),          // 所属板块
    order: z.number(),
    draft: z.boolean().optional(),
  })
})
```

### 4.4 关键交互组件

| 组件 | 类型 | 技术方案 |
|------|------|----------|
| 搜索弹窗 | Astro Island (client:load) | Pagefind UI 封装 |
| 代码预览沙盒 | Astro Island (client:visible) | iframe + 动态写入 HTML |
| 阶段进度导航 | 服务端渲染 | CSS + 状态类 |
| 深色模式切换 | Astro Island (client:idle) | localStorage + CSS 变量 |
| 滚动渐进动画 | 纯 CSS + Intersection Observer | CSS @keyframes + 类切换 |

### 4.5 性能目标

- Lighthouse 评分 ≥ 95（所有类别）
- 首次加载 JS < 50KB
- 页面 100% 静态预生成
- 字体和关键 CSS 内联到 HTML

---

## 5. 内容迁移策略

### 5.1 内容来源

| PRD 来源 | 映射到网站位置 |
|----------|---------------|
| V1.0 第一章（Vibe Coding 概念） | `/intro/` |
| V1.0 第二章（准备工作） | `/setup/` |
| V1.0 第三章（建站流程） | 拆解分布到各阶段页面 |
| V1.0 第四章（案例库） | `/cases/` |
| V1.0 第五章（FAQ） | `/faq/` |
| V1.1 阶段 0-9 | `/phases/phase-00` ~ `/phases/phase-09` |
| V1.1 Skills 索引 | `/skills/` |
| V1.1 提示词模板 | 嵌入各阶段页面 + `/prompts/` 汇总 |
| V1.1 交互式练习 | 嵌入各阶段页面 + `/exercises/` 汇总 |

### 5.2 内容格式

所有内容以 MDX 格式编写，支持：
- 标准 Markdown 语法
- 内嵌 Astro/React 组件（代码预览、提示词卡片等）
- 前端代码块的语法高亮（Shiki）
- 表格、列表、警告块等扩展语法

---

## 6. 国际化预留

### 6.1 目录结构

```
src/content/
  zh/       # 中文内容（主要）
  en/       # 英文内容（未来）
```

### 6.2 Astro i18n 配置

使用 Astro 内置的 i18n 路由支持：
- 默认语言：中文（`zh`）
- 配置 `astro.config.mjs` 中的 `i18n` 选项
- 所有内容路径以语言代码开头（`/zh/phases/...`，URL 中可省略默认语言）

---

## 7. 实施优先级

| 优先级 | 内容 | 预计工作量 |
|--------|------|-----------|
| P0 | Astro 项目初始化 + 基础布局 + 首页 | 2 天 |
| P0 | 内容集合配置 + MDX 内容迁移 | 3 天 |
| P1 | 阶段页面布局 + 导航系统 | 2 天 |
| P1 | Pagefind 搜索集成 | 0.5 天 |
| P2 | 代码预览交互组件 | 1 天 |
| P2 | 深色/浅色主题 | 0.5 天 |
| P3 | 动效 + 微交互优化 | 1 天 |
| P3 | Skills 索引页 + 提示词速查页 | 1 天 |
| P4 | 国际化结构预留 | 0.5 天 |
| P4 | 性能优化 + 部署配置 | 0.5 天 |

---

## 8. 部署方案

- 平台：Vercel（推荐）或 Netlify
- 构建命令：`astro build`
- 输出目录：`dist/`
- 环境变量：无需特殊配置（纯静态）
- 域名：可选自定义域名，默认使用平台提供的免费域名
