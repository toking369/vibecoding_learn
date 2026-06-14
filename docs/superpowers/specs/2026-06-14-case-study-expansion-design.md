# 案例库扩展设计文档

## 概述

将案例库从单页详情扩展为「列表页 + 多案例详情页」体系，新增 8 个案例，总计 9 个，覆盖不同难度、类型和技术方向的真实项目。

## 动机

当前案例库只有一个摄影集页面（`/cases/photography-portfolio`），用户缺少浏览和对比入口。扩展后用户可在列表页按需筛选，找到最适合自己的项目进行学习。

## 架构

```
/cases/                     (列表页 — 新建)
/cases/photography-portfolio (详情页 — 已有，作为案例 1)
/cases/tech-blog            (案例 2 — 新建)
/cases/design-company       (案例 3 — 新建)
/cases/handmade-shop        (案例 4 — 新建)
/cases/community-forum      (案例 5 — 新建)
/cases/ai-wallpaper         (案例 6 — 新建)
/cases/english-learning     (案例 7 — 新建)
/cases/finance-dashboard    (案例 8 — 新建)
/cases/campus-delivery      (案例 9 — 新建)
```

### 技术实现

| 层 | 方案 |
|---|------|
| 列表页渲染 | Astro SSG，`getCollection('cases')` 动态生成页面 |
| 列表页交互（筛选） | 原生 JS 客户端脚本（轻量、无框架依赖） |
| 详情页路由 | 现有的 `[slug].astro` 模式，新增 `cases/index.astro` |
| 内容管理 | MDX + frontmatter，扩展 frontmatter 字段 |
| 布局 | 列表页用 `BaseLayout`，详情页用 `DocLayout`（不变） |

## 数据模型

### Frontmatter Schema

每个案例 MDX 文件使用扩展后的 frontmatter：

| 字段 | 类型 | 必填 | 说明 |
|------|------|------|------|
| `title` | string | ✅ | 中文标题 |
| `description` | string | ✅ | 一句话简介 |
| `emoji` | string | ✅ | 列表页图标 |
| `section` | 'cases' | ✅ | 固定为 'cases' |
| `order` | number | ✅ | 排序（1-9） |
| `difficulty` | '入门'｜'进阶'｜'高阶' | ✅ | 难度等级 |
| `category` | string | ✅ | 项目类型（作品展示/内容站/电商/社区/AI工具/学习平台/企业官网/SaaS/小程序） |
| `tech_type` | string | ✅ | 技术方向（纯前端/前端+CMS/全栈/AI+全栈/前后端分离） |
| `frontend` | string | ✅ | 前端技术栈 |
| `database` | string | ✅ | 数据库选型 |
| `backend` | string | ✅ | 后端技术栈 |
| `ai_api` | string | 按需 | 使用的 AI API |
| `payment` | string | 按需 | 支付方案 |
| `auth` | string | 按需 | 认证方案 |
| `deploy` | string | ✅ | 部署平台 |
| `estimated_hours` | number | ✅ | 预估完成时间（小时） |

## 9 个案例列表

| # | emoji | 项目名 | 难度 | 类型 | 技术方向 |
|---|-------|--------|------|------|---------|
| 1 | 🖼️ | 小橘的摄影集 | 入门 | 作品展示 | 纯前端 |
| 2 | 📝 | 程序员的博客 | 入门 | 内容站 | 前端+CMS |
| 3 | 🏢 | 设计公司官网 | 入门 | 企业官网 | 前端+轻后端 |
| 4 | 🛒 | 手作饰品小店 | 进阶 | 电商 | 全栈 |
| 5 | 🗺️ | 城市活动社区 | 高阶 | 社区 | 全栈+认证 |
| 6 | 🤖 | AI 壁纸生成器 | 高阶 | AI 工具 | AI+全栈 |
| 7 | 📚 | 英语学习平台 | 进阶 | 学习平台 | 全栈 |
| 8 | 📊 | 个人财务仪表盘 | 进阶 | SaaS 工具 | 全栈+可视化 |
| 9 | 🚚 | 校园外卖点餐 | 高阶 | 小程序风格 | 前后端分离 |

## 列表页设计

### 页面布局

- **标题区**：页面标题「案例库」+ 副标题
- **筛选栏**：三行 Tab——难度（全部/入门/进阶/高阶）、类型（全部/作品展示/电商/AI工具…）、技术方向（全部/纯前端/全栈…）
- **卡片网格**：3 列（桌面）/ 2 列（平板）/ 1 列（手机），CSS Grid
- **空状态**：筛选无结果时显示提示

### 卡片内容（6 个信息维度）

每个卡片展示：
1. emoji + 项目名（左上）
2. 难度徽章（彩色：入门🟢/进阶🟡/高阶🔴）
3. 类型标签
4. 技术方向标签
5. 技术栈标签行（如 `Astro` `Tailwind`）
6. 预估时间 ⏱️ N 小时

### 筛选交互

- 三行 Tab 独立点击切换，多维度组合筛选（如「进阶 + 全栈」）
- 使用 Astro `client:load` 脚本实现纯前端过滤
- 筛选即时生效，无页面刷新
- 滚动到页面顶部显示固定筛选栏

### 移动端

- Tab 行：水平滚动容器（overflow-x: auto）
- 卡片：从 3 列降为 1 列

## 详情页内容原则

每个案例的 MDX 内容**不设统一模板**，保留个性化结构。原则如下：

- **基础框架**：保留项目概览 + 用到的 Skills 一览 + 准备工作（同现有摄影集风格）
- **按需增减**：根据项目类型，从以下内容中选取合适的章节组合（不强制全部包含）：
  - 技术选型分析（项目选型 / 前端对比 / 数据库选择）
  - 数据库设计（表结构 / 建表）
  - 前端开发（页面结构 / 组件 / 代码）
  - 后端搭建（API / 核心逻辑 / 联调）
  - 测试
  - 部署方案
  - SEO 优化
  - 文案 & 营销
- **个性化**：不同类型的项目侧重点不同——纯静态项目突出前端和部署，全栈项目突出数据库和后端，AI 项目突出 API 集成
- **语调一致**：保留口语化、鼓励性的中文语调，零编程基础导向
- **现有案例不动**：摄影集页面保持原样，仅补充 frontmatter 字段

## 需要新建/修改的文件

### 新建文件

| 文件 | 说明 |
|------|------|
| `src/pages/cases/index.astro` | 案例库列表页 |
| `src/components/ui/CaseCard.astro` | 案例卡片组件 |
| `src/components/ui/CaseFilter.astro` | 筛选栏组件（含客户端脚本） |
| `src/content/zh/cases/tech-blog.mdx` | 案例 2：技术博客 |
| `src/content/zh/cases/design-company.mdx` | 案例 3：设计公司官网 |
| `src/content/zh/cases/handmade-shop.mdx` | 案例 4：手作饰品小店 |
| `src/content/zh/cases/community-forum.mdx` | 案例 5：城市活动社区 |
| `src/content/zh/cases/ai-wallpaper.mdx` | 案例 6：AI 壁纸生成器 |
| `src/content/zh/cases/english-learning.mdx` | 案例 7：英语学习平台 |
| `src/content/zh/cases/finance-dashboard.mdx` | 案例 8：个人财务仪表盘 |
| `src/content/zh/cases/campus-delivery.mdx` | 案例 9：校园外卖点餐 |

### 修改文件

| 文件 | 变更 |
|------|------|
| `src/lib/constants.ts` | 更新 `NAV_ITEMS` 中「案例库」链接指向 `/cases` |
| `src/pages/cases/[slug].astro` | 无需改动（已支持动态路由） |
| `src/content/zh/cases/photography-portfolio.mdx` | 增加 emoji/difficulty/category 等 frontmatter 字段 |

## 不涉及

- 不修改全局样式（`global.css`）
- 不修改布局组件（`BaseLayout`/`DocLayout`/`PhaseLayout`）
- 不修改路由系统
- 不新增依赖
- 不需要弹窗/模态框组件（已确认不要求）
