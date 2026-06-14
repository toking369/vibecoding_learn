# PRD V1.1：《小白用 Vibe Coding 建站 — 从 0 到 1 全流程实战指南》

> **版本**：V1.1
> **更新日期**：2026 年 6 月 14 日
> **基于**：V1.0 框架全面扩展
> **变化**：从"概念科普"升级为"全流程实战操作手册"——覆盖产品、设计、开发、测试、部署、运维、运营全链路

---

## 1. 摘要

V1.1 在 V1.0 的基础上进行了**重大升级**。不再只是教小白认识 Vibe Coding，而是提供一份**端到端的、可执行的建站全流程操作手册**。每个环节都包含：具体操作步骤 → 提示词模板 → 可用 AI Skills（含一键安装命令）→ 交互式练习。目标是让读者完成本指南后，**不仅能做出网站，还能理解从"想法"到"产品"的完整工程链路**。

---

## 2. 联系人

| 角色 | 姓名 | 说明 |
|------|------|------|
| 产品经理 / 作者 | Claude（AI 助手） | 内容撰写与结构设计 |
| 目标用户 | 小白学习者 | 零编程基础，想系统化建站的个人/小团队 |
| 技术顾问 | AI（Claude Code） | 全流程的 AI 协作伙伴 |

---

## 3. 背景与 V1.1 升级动机

### 3.1 V1.0 的成果

V1.0 成功地让小白理解了 Vibe Coding 是什么，并完成了第一个简单页面上线。但我们收到了关键反馈：

> **"我知道能做出页面了，然后呢？怎么做出一个真正的产品？"**

### 3.2 V1.1 要解决的核心问题

| 问题 | V1.0 状态 | V1.1 目标 |
|------|-----------|-----------|
| 只会做单页 | ✅ 能做 | ➡️ 能做多页面的完整站点 |
| 不知道怎么规划 | ❌ 没覆盖 | ➡️ 教写产品文档、需求拆解 |
| 不知道怎么问 AI | ⚠️ 有简单模板 | ➡️ 每个环节都有精准提示词 |
| 不知道用啥工具 | ❌ 只提到基本工具 | ➡️ 对接 Skills 生态，一键安装 |
| 不知道怎么测试 | ❌ 没覆盖 | ➡️ 教用 AI 做测试 |
| 不知道怎么上线维护 | ❌ 只讲到部署 | ➡️ 覆盖运维和运营 |
| 学完就忘 | ❌ 没练习 | ➡️ 每个阶段配交互式练习 |

### 3.3 全流程地图

下面这张图是整份指南的**路线图**，每个阶段都对应一个章节：

```
阶段 0：准备工作
   └── 工具安装 + 账号注册（同 V1.0，精简版）
   
阶段 1：产品定义 ← 🌟 新增
   ├── 写 PRD（产品需求文档）
   ├── 写提示词模板
   └── 用 Skills 辅助文档写作
   
阶段 2：设计与原型 ← 🌟 新增
   ├── UI/UX 设计与 Figma 联动
   ├── AI 生成设计稿
   └── Skills + MCP 工具
   
阶段 3：前端开发 ← 大幅增强
   ├── 多页面站点结构
   ├── 响应式设计
   └── 组件化思维
   
阶段 4：后端与数据 ← 🌟 新增
   ├── 数据库设计
   ├── API 接口开发
   └── 前后端联调
   
阶段 5：测试 ← 🌟 新增
   ├── 功能测试
   ├── 兼容性测试
   └── AI 辅助自动化测试
   
阶段 6：部署上线 ← 大幅增强
   ├── 域名绑定
   ├── HTTPS/SSL
   └── CI/CD 自动部署
   
阶段 7：运维与监控 ← 🌟 新增
   ├── 日志查看
   ├── 性能监控
   └── 安全防护
   
阶段 8：运营与增长 ← 🌟 新增
   ├── 内容运营
   ├── SEO 优化
   └── 数据分析
   
阶段 9：文案创作 ← 🌟 新增
   ├── 网站文案
   ├── 营销文案
   └── Skills 辅助写作
```

---

## 4. V1.1 目标

### 4.1 核心目标

让零编程基础的读者，通过本指南**独立完成一个具有完整产品形态的网站**——包括规划、设计、开发、测试、部署、维护全流程。

### 4.2 关键成果（OKR）

| 关键结果 | 衡量方式 |
|----------|----------|
| KR1：读者能写出自己的 PRD | 使用提供的模板+提示词完成一份产品文档 |
| KR2：读者能完成前后端全链路开发 | 网站包含前端页面 + 后端数据交互 |
| KR3：读者能自主进行测试和部署 | 测试通过 + 网站成功上线并可访问 |
| KR4：读者了解运维和运营基本方法 | 能使用 AI 完成监控、SEO 和内容更新 |

### 4.3 相比 V1.0 的新增内容

- ✅ 9 个完整阶段的全流程覆盖
- ✅ 每个阶段配**提示词模板**
- ✅ 每个阶段配**可用 Skills 清单 + 一键安装命令**
- ✅ 每个阶段配**交互式练习**
- ✅ 新增 MCP 工具链介绍
- ✅ 完整的案例项目贯穿全流程

---

## 5. 目标用户

同 V1.0，新增一层细分：

| 层级 | 描述 | 适合章节 |
|------|------|----------|
| L0 纯小白 | 完全不懂编程 | 阶段 0-3 |
| L1 初级 | 做过简单页面想深入 | 阶段 4-6 |
| L2 进阶 | 想了解产品全链路 | 阶段 7-9 |

---

## 6. 价值主张

同 V1.0，新增一个核心价值点：

**"AI 原生产品方法论"**——不是教编程，而是教**"如何与 AI 协作构建产品"**。这是 V1.1 区别于所有其他教程的独特定位。

---

## 7. 解决方案（核心内容）

下文是每个阶段的**完整实操内容**，包含：
1. 📖 **做什么**：阶段目标与产出物
2. ✍️ **提示词模板**：直接复制给 AI 用
3. 🛠️ **可用 Skills**：名称 + 安装命令 + 作用
4. 🎯 **交互式练习**：读者动手任务

---

### 阶段 0：准备工作（精简版）

> 📖 **做什么**：安装工具，注册账号，搭建开发环境

#### 0.1 必备清单

| 项目 | 推荐 | 用途 |
|------|------|------|
| 电脑 | Windows / Mac | 开发设备 |
| 浏览器 | Chrome | 预览和调试 |
| AI 编程助手 | **Claude Code** 或 **Cursor** | AI 对话生成代码 |
| VS Code | 免费安装 | 代码编辑与项目管理 |
| GitHub | 注册账号 | 代码托管 |
| Node.js | 下载 LTS 版 | 运行 JavaScript 项目 |
| Vercel / Netlify | 注册账号 | 免费部署 |

#### 0.2 一键安装脚本

```bash
# 如果还没安装 Skills CLI
npm install -g @anthropic-ai/claude-code

# 安装核心 skills
npx skills add phuryn/pm-skills@create-prd -g -y
npx skills add anthropics/skills@webapp-testing -g -y
```

#### 0.3 验证环境

打开终端（Terminal），输入：
```bash
node --version   # 应该显示 v18 或更高
npm --version    # 应该显示 v9 或更高
```

#### 🎯 练习：完成环境搭建

> **任务**：按清单注册完所有账号，在终端验证 node 和 npm 安装成功。在 GitHub 上创建一个空仓库，命名为 `my-first-site`。

---

### 阶段 1：产品定义（写 PRD + 文档）

> 📖 **做什么**：把"想法"变成"文档"，这是建站最重要的一步

#### 1.1 什么是 PRD？

**PRD（Product Requirements Document，产品需求文档）** 是你跟 AI 之间的"设计蓝图"。没有 PRD，AI 只能猜你想要什么；有了 PRD，AI 能精准地一次到位。

一个好的 PRD 包含：
- **这是什么网站**（一句话说清）
- **给谁用**（目标用户）
- **有什么功能**（功能清单）
- **长什么样**（风格参考）
- **先做什么、后做什么**（优先级）

#### 1.2 写 PRD 的提示词模板

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

#### 1.3 可用的 Skills（一键安装）

| Skill 名称 | 安装量 | 作用 | 安装命令 |
|-----------|--------|------|----------|
| `github/awesome-copilot@prd` | 19.3K ⭐ | 快速生成标准 PRD | `npx skills add github/awesome-copilot@prd -g -y` |
| `phuryn/pm-skills@create-prd` | 1.4K | 创建完整 PRD（本指南使用的） | `npx skills add phuryn/pm-skills@create-prd -g -y` |
| `product-on-purpose/pm-skills@deliver-prd` | 323 | 交付级 PRD 模板 | `npx skills add product-on-purpose/pm-skills@deliver-prd -g -y` |
| `mblode/agent-skills@docs-writing` | 441 | 文档写作辅助 | `npx skills add mblode/agent-skills@docs-writing -g -y` |
| `tldraw/tldraw@write-docs` | 405 | 写技术文档 | `npx skills add tldraw/tldraw@write-docs -g -y` |

**调用方法**：安装后，在对话中输入 `/create-prd` 或 `@prd` 即可激活。

#### 1.4 MCP 工具辅助

**MCP（Model Context Protocol）** 是 AI 助手连接外部工具的桥梁。写 PRD 时可以用的 MCP 工具：

| MCP 工具 | 作用 | 使用场景 |
|----------|------|----------|
| WebSearch | 搜索竞品和市场信息 | 研究同类网站，收集灵感 |
| WebFetch | 抓取参考网页内容 | 分析优秀网站的结构 |
| Figma（设计 MCP） | 查看设计稿 | 有设计稿时直接引用 |

#### 1.5 提示词技巧：如何让 AI 写出更好的 PRD

**黄金原则：给 AI 的信息越具体，AI 的输出越有用**

| ❌ 不好的提示词 | ✅ 好的提示词 |
|----------------|--------------|
| "帮我写个网站的需求文档" | "帮我写一个个人摄影作品展示网站的 PRD，核心功能是展示照片集和联系方式" |
| "功能列表列一下" | "我需要以下功能，帮我按优先级排序：1）首页轮播 2）作品分类 3）联系表单" |
| "风格好看就行" | "参考 dribbble.com 上的简约风格，主色调用深蓝和白色" |

#### 🎯 练习：写你的第一份 PRD

> **任务**：选一个你想做的网站（个人博客 / 作品集 / 小店展示页），使用本节的提示词模板，让 AI 帮你生成一份 PRD。然后你自己阅读并回答：
> - 这份 PRD 跟你想的一样吗？
> - 有没有漏掉的功能？
> - 优先级排序你同意吗？

---

### 阶段 2：设计与原型

> 📖 **做什么**：在写代码之前，先想清楚网站长什么样子

#### 2.1 AI 帮你做设计

不需要会用 Figma，不需要会画图。你只需要**描述**，AI 可以帮你生成设计描述或直接生成前端代码。

#### 2.2 设计阶段提示词模板

**模板 A：让 AI 帮你设计页面结构**

```
我想为 [网站类型] 设计页面布局。

页面包括以下部分：
- 首页
- [页面 B]
- [页面 C]

每个页面我希望包含：
首页：导航栏 + 大标题 + 功能介绍区 + 页脚
[页面 B]：[描述]
[页面 C]：[描述]

请帮我画出这个网站的页面结构图（用 ASCII 线框图），然后告诉我每个区域放什么内容。
```

**模板 B：让 AI 生成设计风格方案**

```
请为我的 [网站类型] 推荐 3 种设计风格方案：

网站用途：[一句话描述]

方案要求：
- 方案一：[描述风格，如"简约商务"]
- 方案二：[描述风格，如"活泼创意"]  
- 方案三：[描述风格，如"温暖自然"]

每种方案请给出：
1. 主色、辅色、文字颜色
2. 适合的字体
3. 一句话风格描述
4. 参考风格的关键词

最终我选 [方案X]，请基于这个方案生成首页的 HTML 代码。
```

#### 2.3 可用的 Skills

| Skill 名称 | 安装量 | 作用 | 安装命令 |
|-----------|--------|------|----------|
| `nexu-io/open-design@ui-ux-pro-max` | 2.4K ⭐ | UI/UX 设计专家 | `npx skills add nexu-io/open-design@ui-ux-pro-max -g -y` |
| `someone/frontend-design` ⚡ *已内置* | — | 前端设计最佳实践 | 系统自带，无需安装 |
| Figma MCP 插件 | — | 在 Figma 中生成/编辑设计 | 通过 MCP 配置 |

#### 2.4 Figma MCP 联动（进阶）

如果你想让设计更专业，可以用 **Figma MCP** 直接把设计稿生成到 Figma 中：

```
使用流程：
1. 在 Claude 中启用 Figma MCP
2. 告诉 AI："帮我在 Figma 中创建一个 [网站类型] 的设计稿"
3. AI 会调用 use_figma 工具在 Figma 中生成页面
4. 你可以在 Figma 中微调后，再让 AI 生成对应代码
```

#### 🎯 练习：设计你的首页

> **任务**：使用模板 B，让 AI 为你生成 3 种设计风格方案。选一个你喜欢的，让 AI 生成该风格的首页 HTML 代码。在浏览器中预览效果。

---

### 阶段 3：前端开发

> 📖 **做什么**：把设计变成真正的网页

#### 3.1 从单页到多页面

V1.0 只做了单页面，现在我们要做**多页面站点**。

#### 3.2 前端开发提示词模板

**模板 A：整体项目搭建**

```
请帮我创建一个多页面网站的项目结构。

网站类型：[个人博客 / 企业官网 / 作品集]
包含页面：
- index.html（首页）
- about.html（关于我）
- works.html（作品/服务）
- contact.html（联系方式）

要求：
1. 所有页面使用同一个 CSS 文件（style.css）
2. 导航栏在所有页面保持一致
3. 使用响应式设计（适配手机和电脑）
4. 风格：[描述风格]

请先生成项目文件结构，然后逐个生成每个文件的完整代码。
```

**模板 B：添加交互功能**

```
请为我的网站添加以下交互功能：

1. 导航栏在手机端显示为汉堡菜单，点击展开
2. 首页的"联系我"按钮点击后平滑滚动到联系表单
3. 作品图片鼠标悬停时放大效果

请只输出修改后的 CSS 和 JavaScript 代码，并说明替换原文件的哪些部分。
```

#### 3.3 前端开发的关键概念（用大白话解释）

| 概念 | 小白理解版 | 为什么重要 |
|------|-----------|-----------|
| HTML | 网站的"骨架"——标题、段落、图片的位置 | 决定了有什么内容 |
| CSS | 网站的"衣服"——颜色、大小、间距 | 决定了长得好不好看 |
| JavaScript | 网站的"动作"——点击、滑动、弹出 | 决定了好不好用 |
| 响应式 | 自动适配手机/平板/电脑 | 现在手机流量占大头 |
| 组件 | 像乐高积木，一块可以反复用 | 修改一处，全局更新 |

#### 3.4 前端技术方案选型

前端开发有很多不同的"技术路线"。对于小白来说，推荐**从简单到复杂**逐步升级：

##### 方案 A：纯静态 HTML/CSS/JS（小白首选 ⭐）

| 项目 | 说明 |
|------|------|
| **适用场景** | 个人博客、作品集、企业展示页、活动落地页 |
| **技术栈** | HTML5 + CSS3 + Vanilla JavaScript |
| **难度** | ★☆☆ —— AI 全权生成，你只需要会打开文件 |
| **优点** | 无需安装复杂工具，双击 HTML 就能预览，部署最简单 |
| **缺点** | 网站功能较简单，不适合复杂交互 |
| **典型案例** | 个人简历站、摄影作品集、餐厅菜单页 |

**提示词示例：**
```
请创建一个个人作品集网站，使用纯 HTML + CSS + JavaScript。
包含：首页、作品展示、关于我、联系方式四个页面。
所有页面共享同一个导航栏和 CSS 样式文件。
风格：简约、现代、适配手机。
```

##### 方案 B：纯静态 + Tailwind CSS（快速美化 ⭐⭐）

| 项目 | 说明 |
|------|------|
| **适用场景** | 想要更好看的页面，不想自己写样式 |
| **技术栈** | HTML + Tailwind CSS（一个"写样式"的工具） |
| **难度** | ★★☆ —— 需要引用 CDN 或简单安装 |
| **优点** | 不用自己写 CSS，用现成的样式类，页面更专业 |
| **缺点** | 需要额外引入 Tailwind |
| **典型案例** | 商业展示页、产品 Landing Page |

**提示词示例：**
```
请用 Tailwind CSS（通过 CDN 引入）创建一个企业官网首页。
使用 Tailwind 的 flex、grid、响应式断点等类名。
包含：导航栏、Hero 大图区、服务介绍三栏布局、页脚。
风格：现代商务，蓝色主色调。
```

##### 方案 C：React / Next.js 单页应用（进阶 ⭐⭐⭐）

| 项目 | 说明 |
|------|------|
| **适用场景** | 需要交互功能、组件复用、未来要加后端 |
| **技术栈** | React + Next.js（最流行的前端框架） |
| **难度** | ★★★ —— 需要 Node.js 环境，需运行开发服务器 |
| **优点** | 组件化开发、性能好、生态丰富 |
| **缺点** | 需要安装 Node.js，学习曲线稍陡 |
| **典型案例** | 博客系统、仪表盘、SaaS 产品前端 |

**提示词示例：**
```
请用 Next.js 14（App Router）创建一个个人博客网站。
使用 Tailwind CSS 做样式。
包含：首页文章列表、文章详情页、关于我页面。
不需要后端，先用静态数据。
```

##### 方案 D：Vue / Nuxt（进阶备选 ⭐⭐⭐）

| 项目 | 说明 |
|------|------|
| **适用场景** | 想试试 Vue 生态，或团队偏好 Vue |
| **技术栈** | Vue 3 + Nuxt |
| **难度** | ★★★ |
| **优点** | 上手比 React 平缓，中文文档好 |
| **缺点** | 生态比 React 稍小 |

**提示词示例：**
```
请用 Nuxt 3 创建一个简单的公司官网。
使用 Tailwind CSS 做样式。
包含：首页、关于我们、服务、联系我们四个页面。
```

##### 前端技术路线的选择建议

```
你是纯小白，想快速上线？
  └── ✅ 方案 A（纯静态）—— 最简单，最快

你追求好看，但又不想学 CSS？
  └── ✅ 方案 B（Tailwind CSS）—— 美观又省力

你计划这个网站会越来越大，未来会加很多功能？
  └── ✅ 方案 C（Next.js）—— 后续扩展性强

你想试试不同的框架？
  └── ✅ 方案 D（Vue/Nuxt）
```

#### 3.5 前端 UI 组件库（小白福音）

除了自己写样式，还可以直接用**现成的 UI 组件库**——就像搭乐高一样拼出好看的页面：

| 组件库 | 适用框架 | 特点 | 适合场景 |
|--------|---------|------|----------|
| **shadcn/ui** | React/Next.js | 最流行的现代 UI 库，AI 最熟悉 | 几乎所有项目 |
| **Tailwind UI** | 任何框架 | 收费但质量极高 | 商业项目 |
| **DaisyUI** | 任何框架（Tailwind 插件） | 免费、组件多 | 快速原型 |
| **Bootstrap** | 任何框架 | 最老牌、稳定性强 | 兼容旧项目 |

**提示词示例（使用 shadcn/ui）：**
```
请用 Next.js + shadcn/ui 创建一个个人博客首页。
使用 shadcn/ui 的 Card、Button、NavigationMenu 等组件。
风格：简洁、白色背景、内容突出。
```

#### 3.6 可用的前端 Skills（一键安装）

| Skill 名称 | 安装量 | 作用 | 安装命令 |
|-----------|--------|------|----------|
| `duyet/claude-plugins@react-nextjs-patterns` | 303 | React/Next.js 开发模式 | `npx skills add duyet/claude-plugins@react-nextjs-patterns -g -y` |
| `liuchiawei/agent-skills@frontend-developer` | 24 | 前端开发专家 | `npx skills add liuchiawei/agent-skills@frontend-developer -g -y` |
| `davila7/claude-code-templates@senior-fullstack` | 813 | 全栈开发模板 | `npx skills add davila7/claude-code-templates@senior-fullstack -g -y` |
| `busirocket/agents-skills@busirocket-tailwindcss-v4` | 88 | Tailwind CSS v4 专家 | `npx skills add busirocket/agents-skills@busirocket-tailwindcss-v4 -g -y` |
| `midudev/autoskills@tailwind-css-patterns` | 34 | Tailwind CSS 模式 | `npx skills add midudev/autoskills@tailwind-css-patterns -g -y` |
| `clerk/skills@clerk-setup` | 13.9K ⭐ | 用户认证（登录/注册） | `npx skills add clerk/skills@clerk-setup -g -y` |

> **使用方法**：安装后，在 Claude Code 中直接提问，AI 会自动调用安装的 skill 来提升回答质量。

#### 3.7 MCP 工具辅助前端开发

| MCP 工具 | 作用 | 在哪个场景使用 |
|----------|------|---------------|
| Playwright MCP | 打开浏览器实时预览页面效果 | 查看页面实际渲染效果 |
| Node REPL MCP | 运行 JavaScript 测试代码 | 调试交互功能 |
| Figma MCP | 从设计稿直接生成前端代码 | 有设计稿时要转代码 |
| WebFetch | 抓取参考网站的样式和结构 | 想参考某个网站的风格 |

#### 3.8 高效与 AI 协作开发的原则

1. **一次做一个页面**：做完首页，再做关于页，不要同时让 AI 生成 5 个页面
2. **渐进式修改**：先做出基本结构，再逐步美化
3. **保留历史版本**：每次大改前复制整个文件夹
4. **有问题就问 AI**：把截图发给 AI，说"这里不对，帮我修一下"
5. **让 AI 解释**：如果看不懂某个代码，直接问 "这行代码是干什么的？用大白话解释"

#### 🎯 练习：完成多页面网站

> **任务**：使用模板 A，让 AI 创建一个包含 4 个页面的完整网站项目。所有页面间可以互相跳转。在浏览器中预览并确认每个页面都能正常显示。

---

### 阶段 4：后端与数据

> 📖 **做什么**：让网站有"后台"——能存数据、能处理用户提交的信息

#### 4.1 什么时候需要后端？

| 场景 | 需要后端吗？ | 说明 |
|------|-------------|------|
| 纯展示型网站（个人介绍、作品集） | ❌ 不需要 | 前端静态页面即可 |
| 有联系表单 | ⚠️ 需要表单服务 | 可以用 Formspree 等第三方 |
| 用户登录/注册 | ✅ 需要 | 需要后端 + 数据库 |
| 博客（能自己发文章） | ✅ 需要 | 需要内容管理系统 |
| 电商/支付 | ✅ 需要 | 需要完整后端 |

#### 4.2 后端开发的提示词模板

**模板 A：联系表单后端（推荐小白首选）**

```
我想给我的静态网站加一个联系表单，用 Formspree（免费版）实现。

请帮我：
1. 修改我的 contact.html，把表单 action 指向 Formspree
2. 添加表单验证（所有字段不能为空）
3. 提交成功后显示"感谢留言"提示

我的邮箱是：[你的邮箱]
```

**模板 B：用 Node.js 做简单后端**

```
请帮我用 Node.js + Express 创建一个简单的后端服务。

功能需求：
1. 提供一个 API 接口 GET /api/messages，返回欢迎信息
2. 提供一个 POST /api/contact，接收联系表单数据
3. 数据保存在内存中（先用数组存，后续再升级到数据库）
4. 允许前端页面跨域请求（CORS）

请生成完整的 server.js 文件，并告诉我如何运行它。
```

**模板 C：数据库操作**

```
请帮我用 SQLite 创建一个简单的数据库，用于我的博客网站。

需要的数据表：
1. posts 表：id, title, content, created_at
2. messages 表：id, name, email, content, created_at

请生成：
1. 数据库建表 SQL 语句
2. Node.js 连接数据库的代码
3. 增删改查的 API 接口代码

用大白话解释每一步在做什么。
```

#### 4.3 后端技术方案选型

后端 ≠ 必须自己写服务器。对于小白，有**三种完全不同的路径**：

---

##### 路径 A：零后端方案（不需要服务器 ⭐ 小白首选）

**你根本不需要写任何后端代码。** 用第三方服务代替后端：

| 需求 | 免费服务 | 怎么用 |
|------|---------|--------|
| 联系表单 | **Formspree** | 把表单的 `action` 指向 Formspree 的 URL |
| 用户评论 | **Giscus** / **Utterances** | 基于 GitHub Issues 的评论系统 |
| 数据存储 | **Google Sheets** | 用 Google 表格当数据库（有 API） |
| 内容管理 | **Decap CMS** / **TinaCMS** | 在后台写文章，前端自动更新 |

**提示词示例：**
```
我想给我的静态网站加一个联系表单，用 Formspree（免费版）实现。
请帮我：
1. 修改我的 contact.html，把表单 action 指向 Formspree
2. 添加表单验证（所有字段不能为空）
3. 提交成功后显示"感谢留言"提示
我的邮箱是：[你的邮箱]
```

---

##### 路径 B：BaaS（后端即服务 ⭐⭐ 推荐进阶）

**BaaS（Backend as a Service）** 意思是"别人搭好的后端，你填数据就行"。你不需要写服务器，只需要调 API：

| BaaS 平台 | 免费额度 | 提供什么 | 适合场景 |
|-----------|---------|---------|----------|
| **Supabase** ⭐ | 无限免费项目 | 数据库 + 认证 + 存储 + API | 绝大多数项目（推荐） |
| **Firebase** | 有免费层 | 数据库 + 认证 + 托管 | 实时应用、移动端 |
| **Appwrite** | 有免费层 | 全套后端服务 | 开源控的选择 |
| **NocoDB** | 免费 | 把数据库变成电子表格界面 | 非技术人员管理数据 |

**提示词示例（Supabase）：**
```
请帮我用 Supabase 给我的作品集网站加一个"留言板"功能。

需要的功能：
1. 用户在网站上填写姓名和留言
2. 提交后存入 Supabase 数据库
3. 在页面底部显示所有留言列表

请告诉我：
1. 如何在 Supabase 创建数据表
2. 前端 JavaScript 怎么调 Supabase API
3. 完整的代码实现
```

**Supabase Skills：**
| Skill 名称 | 安装量 | 作用 | 安装命令 |
|-----------|--------|------|----------|
| `nice-wolf-studio/claude-code-supabase-skills@supabase-database` | 234 | Supabase 数据库专家 | `npx skills add nice-wolf-studio/claude-code-supabase-skills@supabase-database -g -y` |
| `erichowens/some_claude_skills@supabase-admin` | 117 | Supabase 管理 | `npx skills add erichowens/some_claude_skills@supabase-admin -g -y` |
| `scientiacapital/skills@supabase-sql` | 59 | Supabase SQL 查询 | `npx skills add scientiacapital/skills@supabase-sql -g -y` |

---

##### 路径 C：自己写后端（⭐⭐⭐ 深度定制）

自己写后端意味着你有**完全的控制权**，但也意味着你要维护一台服务器。对于小白，推荐从下面两个方案选一个：

###### 方案 C1：Node.js + Express（JavaScript，推荐 ⭐）

| 项目 | 说明 |
|------|------|
| **语言** | JavaScript（和前端同一门语言，不用学新的） |
| **框架** | Express（最流行的 Node.js 后端框架） |
| **难度** | ★★☆ |
| **优点** | 前后端用同一语言，AI 生成质量极高 |
| **适合** | 个人博客、小型 API、MVP 产品 |

**提示词示例：**
```
请帮我用 Node.js + Express 创建一个简单的后端服务。

功能需求：
1. 提供一个 API 接口 GET /api/hello，返回 "Hello World"
2. 提供一个 POST /api/contact，接收联系表单数据
3. 数据先保存在内存中
4. 允许前端页面跨域请求（CORS）

请生成完整的 server.js 文件，并告诉我如何运行它。
```

**Node.js Skills：**
| Skill 名称 | 安装量 | 作用 | 安装命令 |
|-----------|--------|------|----------|
| `aj-geddes/useful-ai-prompts@nodejs-express-server` | 2.7K ⭐ | Node.js + Express 服务端开发 | `npx skills add aj-geddes/useful-ai-prompts@nodejs-express-server -g -y` |
| `auth0/agent-skills@express-oauth2-jwt-bearer` | 287 | Express 用户认证 | `npx skills add auth0/agent-skills@express-oauth2-jwt-bearer -g -y` |
| `julianromli/ai-skills@backend-dev` | 63 | 后端开发辅助 | `npx skills add julianromli/ai-skills@backend-dev -g -y` |

###### 方案 C2：Python + FastAPI / Flask

| 项目 | 说明 |
|------|------|
| **语言** | Python（简单易学，AI 最擅长） |
| **框架** | FastAPI（现代）或 Flask（经典） |
| **难度** | ★★☆ |
| **优点** | Python 语法简单，AI 生成质量高 |
| **适合** | 数据处理、AI 应用、后端 API |

**提示词示例：**
```
请帮我用 Python + FastAPI 创建一个后端 API 服务。

功能需求：
1. GET /api/items —— 返回物品列表
2. POST /api/items —— 添加新物品
3. 数据保存在内存列表中
4. 允许跨域请求（CORS）

请生成 main.py 文件，以及 requirements.txt。
告诉我怎么运行（使用 uvicorn）。
```

**Python Skills：**
| Skill 名称 | 安装量 | 作用 | 安装命令 |
|-----------|--------|------|----------|
| `mindrally/skills@fastapi-python` | 10K ⭐ | FastAPI 后端开发 | `npx skills add mindrally/skills@fastapi-python -g -y` |
| `mindrally/skills@flask-python` | 699 | Flask 后端开发 | `npx skills add mindrally/skills@flask-python -g -y` |
| `bobmatnyc/claude-mpm-skills@flask` | 240 | Flask 后端开发 | `npx skills add bobmatnyc/claude-mpm-skills@flask -g -y` |
| `autohandai/community-skills@python-fastapi-patterns` | 45 | FastAPI 模式最佳实践 | `npx skills add autohandai/community-skills@python-fastapi-patterns -g -y` |

---

##### 后端技术路线的选择建议

```
你的网站只有联系表单？
  └── ✅ 路径 A（Formspree）—— 最简单，零后端

你需要存数据 + 用户登录？
  └── ✅ 路径 B（Supabase）—— 不用写后端，开箱即用

你想要完全控制后端逻辑？
  └── ✅ 路径 C1（Node.js）—— 和前端同语言
  └── ✅ 路径 C2（Python）—— 语法简单，AI 友好
```

#### 4.4 数据库技术方案

数据库是网站的"记忆"——存用户信息、文章内容、留言等。对于小白，也有多种选择：

##### 数据库方案对比

| 数据库 | 类型 | 难度 | 优点 | 适合场景 |
|--------|------|------|------|----------|
| **SQLite** | 文件型 | ★☆☆ | 最简单，不需要装服务器 | 个人项目、小博客 |
| **Supabase PostgreSQL** | 云端 | ★★☆ | 免费额度多，有 Web 管理面板 | 绝大多数项目（推荐） |
| **Firebase Firestore** | 云端 | ★★☆ | 实时同步，Google 出品 | 实时应用、移动端 |
| **MySQL / PostgreSQL** | 服务器 | ★★★ | 功能最全，行业标准 | 大型项目 |

##### 如何选数据库？

```
你只想做个个人博客，数据量很小？
  └── ✅ SQLite —— 一个文件搞定

你想要免费、云端、有管理界面？
  └── ✅ Supabase —— 给 2 个项目免费，无限 API 调用

你做的应用需要实时更新（聊天、通知）？
  └── ✅ Firebase —— 实时能力强

你的项目以后可能会很大？
  └── ✅ PostgreSQL（通过 Supabase）—— 可扩展性强
```

##### 数据库提示词模板

**SQLite（最简单）：**
```
请帮我用 SQLite 创建一个博客数据库。

需要的数据表：
1. posts 表：id, title, content, created_at
2. messages 表：id, name, email, content, created_at

请生成：
1. 建表 SQL 语句
2. Node.js 连接 SQLite 的代码
3. 增删改查的 API 接口代码
用大白话解释每一步在做什么。
```

**Supabase（推荐）：**
```
请帮我在 Supabase 中设计一个"个人博客"的数据库架构。

需要的数据表：
1. posts —— 存文章（标题、内容、发布时间、标签）
2. comments —— 存评论（文章ID、用户昵称、内容、时间）

请提供：
1. Supabase SQL 编辑器中的建表 SQL
2. 行级别安全策略（RLS）配置
3. 前端调用的 JavaScript 示例代码
```

##### 数据库 Skills

| Skill 名称 | 安装量 | 作用 | 安装命令 |
|-----------|--------|------|----------|
| `prisma/skills@prisma-upgrade-v7` | 4.5K ⭐ | Prisma ORM 升级/使用 | `npx skills add prisma/skills@prisma-upgrade-v7 -g -y` |
| `gocallum/nextjs16-agent-skills@prisma-orm-v7-skills` | 891 | Prisma ORM v7 开发 | `npx skills add gocallum/nextjs16-agent-skills@prisma-orm-v7-skills -g -y` |
| `mindrally/skills@prisma-development` | 428 | Prisma 数据库开发 | `npx skills add mindrally/skills@prisma-development -g -y` |
| `nice-wolf-studio/claude-code-supabase-skills@supabase-database` | 234 | Supabase 数据库 | `npx skills add nice-wolf-studio/claude-code-supabase-skills@supabase-database -g -y` |
| `sickn33/antigravity-awesome-skills@firebase` | 1.2K | Firebase 开发 | `npx skills add sickn33/antigravity-awesome-skills@firebase -g -y` |
| `boshi-xixixi/traeskill@backend-database-expert` | 27 | 数据库专家 | `npx skills add "boshi-xixixi/traeskill@backend database expert" -g -y` |

> **💡 什么是 ORM？** ORM 是"让 AI 帮你写数据库操作代码"的工具。你只需要描述要什么数据，AI + ORM 会自动生成增删改查的代码。Prisma 是目前最流行的 ORM，AI 对其支持极好。

#### 4.5 后端概念大白话

| 概念 | 小白理解版 |
|------|-----------|
| API | 前端和后端之间的"传话筒"——前端说"给我数据"，后端通过 API 传回去 |
| 数据库 | 一个超大的 Excel 表格，存在服务器上，能自动查询和保存 |
| 服务器 | 一台 24 小时开机的电脑，专门跑你的后端代码 |
| JSON | 一种"前端和后端都认识"的数据格式，像这样：`{"name":"张三","age":18}` |
| RESTful API | 一种通用的 API 设计规范，AI 默认会用这个 |
| 认证 (Auth) | 确认"你是你"的机制——登录、注册、Token |
| CORS | 浏览器的一种安全机制，阻止"你的网页去请求别人的服务器" |
| ORM | 让 AI 帮你写数据库操作代码的工具，不用自己写 SQL |

#### 4.6 MCP 工具辅助后端开发

| MCP 工具 | 作用 |
|----------|------|
| Node REPL MCP | 在对话中直接运行 Node.js 后端代码做测试 |
| WebSearch | 搜索 API 文档、技术方案 |
| Playwright MCP | 测试前后端联调是否正常 |

#### 🎯 练习：给网站加上后端

> **任务**：选一个方案——
> **简单版**：用 Formspree 给网站加上联系表单，然后自己测试提交一次
> **进阶版**：让 AI 创建一个 Node.js + Express 后端，跑在本地，用浏览器访问 `http://localhost:3000` 看到"欢迎"信息

---

### 阶段 5：测试

> 📖 **做什么**：确保网站正常工作，不出 bug

#### 5.1 小白需要知道的事

测试不是"找茬"，而是**检查网站能不能正常工作**。就像出门前检查钥匙、手机、钱包有没有带齐。

#### 5.2 测试提示词模板

**模板 A：让 AI 做代码审查**

```
请帮我审查以下 HTML/CSS/JS 代码，检查：

1. 有没有语法错误
2. 有没有链接打不开（图片、CSS、JS 文件路径是否正确）
3. 有没有移动端适配的问题
4. 有没有安全风险（比如 XSS）

代码：
[贴你的代码]

请列出所有问题，并告诉我怎么修。
```

**模板 B：让 AI 帮你写测试**

```
请帮我为下面的函数写一个简单的测试。

函数说明：[描述函数作用]
函数代码：
[贴代码]

请用浏览器自带的 console 就能运行的方式写测试，不需要额外安装工具。
```

**模板 C：全面检查清单**

```
请帮我生成一个网站上线前的检查清单，逐项确认以下内容：

技术检查：
- 所有页面是否能正常打开？
- 所有链接是否有效？
- 图片是否正常显示？
- 手机端显示是否正常？

内容检查：
- 有没有错别字？
- 联系方式是否正确？
- 版权年份是否正确？
```

#### 5.3 可用的 Skills

| Skill 名称 | 安装量 | 作用 | 安装命令 |
|-----------|--------|------|----------|
| `anthropics/skills@webapp-testing` | 95K ⭐ | Web 应用测试（系统自带） | 通常已内置 |
| `wshobson/agents@javascript-testing-patterns` | 15K | JavaScript 测试模式 | `npx skills add wshobson/agents@javascript-testing-patterns -g -y` |
| `wshobson/agents@e2e-testing-patterns` | 17.9K | 端到端测试模式 | `npx skills add wshobson/agents@e2e-testing-patterns -g -y` |

#### 5.4 快速测试法（浏览器控制台）

打开浏览器 → 右键 → 检查（Inspect）→ Console（控制台）标签

如果看到**红色**的错误信息，截图发给 AI 让它帮你解决。

#### 🎯 练习：全面检查你的网站

> **任务**：
> 1. 用模板 A 让 AI 审查你的代码
> 2. 用模板 C 生成检查清单
> 3. 逐项检查你的网站，把发现的问题记录并修复
> 4. 在手机上也打开你的网站看看效果（可以用手机浏览器直接访问本地服务器的地址）

---

### 阶段 6：部署上线

> 📖 **做什么**：让全世界都能访问你的网站

#### 6.1 部署方式对比

| 方式 | 适用场景 | 难度 | 费用 |
|------|---------|------|------|
| Vercel | 前端静态站 / Next.js 项目 | ★☆☆ | 免费 |
| Netlify | 前端静态站 | ★☆☆ | 免费 |
| GitHub Pages | 纯静态 HTML 站点 | ★☆☆ | 免费 |
| Railway / Render | 需要后端的项目 | ★★☆ | 有免费额度 |
| 自有服务器 | 高要求项目 | ★★★ | 付费 |

#### 6.2 部署提示词模板

**模板 A：Vercel 部署**

```
我完成了一个静态网站的 HTML/CSS/JS 文件，想部署到 Vercel。

项目文件结构：
[列出你的文件结构]

请给我：
1. 一步步的 Vercel 部署操作指南
2. 是否需要额外的配置文件（如 vercel.json）
3. 部署完成后如何绑定自定义域名
```

**模板 B：带后端的部署**

```
我有一个 Node.js + Express 的后端项目，想部署到 Render（免费版）。

项目文件：
- server.js（主文件）
- package.json
- public/（前端文件）

请给我：
1. 需要修改的文件和代码
2. Render 上的操作步骤
3. 环境变量怎么设置
```

#### 6.3 可用的 Skills

| Skill 名称 | 安装量 | 作用 | 安装命令 |
|-----------|--------|------|----------|
| `yonatangross/orchestkit@devops-deployment` | 743 | DevOps 部署专家 | `npx skills add yonatangross/orchestkit@devops-deployment -g -y` |

#### 6.4 域名知识（大白话）

| 概念 | 大白话 |
|------|--------|
| 域名 | 你网站的"门牌号"，比如 `google.com` |
| 免费子域名 | Vercel 给你的 `my-site.vercel.app`，够用了 |
| 自定义域名 | 你自己买的 `myname.com`，一年几十块钱 |
| DNS | 告诉全世界"这个域名对应哪个服务器"的通讯录 |
| HTTPS | 网站地址栏的小锁🔒，Vercel 自动帮你搞定 |

#### 🎯 练习：部署你的网站

> **任务**：将阶段 3 完成的多页面网站部署到 Vercel（免费版）。
> - 注册 Vercel（用 GitHub 登录）
> - 点击 "Add New → Project"
> - 选择你的 GitHub 仓库或直接拖拽文件夹
> - 等待自动部署完成
> - 访问生成的 URL 确认上线成功
> - 把网址分享给朋友！

---

### 阶段 7：运维与监控

> 📖 **做什么**：网站上线后，确保它稳定运行

#### 7.1 小白也需要运维吗？

**需要，但很简单。** 运维就是"确保网站一直能用"。有了 AI，90% 的问题 AI 就能帮你诊断。

#### 7.2 运维提示词模板

**模板 A：网站出问题了**

```
我的网站出问题了，请帮我诊断。

网址：[你的网站 URL]
问题描述：[描述你遇到的问题，如：页面加载很慢 / 图片不显示 / 点击按钮没反应]
我做了什么操作：[最近修改了什么]

请告诉我最可能的原因是什么，以及我该怎么修复。
```

**模板 B：性能优化**

```
请帮我优化我的网站加载速度。

网站 URL：[网址]
目前的问题：[如果有，描述；如果没有，让 AI 检查]

请检查并优化：
1. 图片是否需要压缩
2. CSS/JS 是否可以合并
3. 是否有不必要的代码
4. 有没有免费的 CDN 加速方案

输出具体的优化方案和代码修改。
```

#### 7.3 日常运维检查清单

```
□ 网站能正常访问吗？
□ 联系表单能正常提交吗？
□ 链接都有效吗？（用 AI 检查）
□ SSL 证书过期了吗？（Vercel 自动更新）
□ 有新的安全漏洞需要修复吗？（问 AI）
```

#### 🎯 练习：做一次网站健康检查

> **任务**：使用模板 A 和 B，让 AI 对你的已上线网站做一次全面的"健康检查"。按 AI 的建议改進至少 2 项。记录下来改了哪些、效果如何。

---

### 阶段 8：运营与增长

> 📖 **做什么**：让更多人知道你的网站，并持续更新内容

#### 8.1 运营的核心

```
运营 = 让网站有人看 + 让看了的人想再来
```

#### 8.2 运营提示词模板

**模板 A：SEO 优化**

```
请帮我优化我的网站，让它在百度/Google 搜索中更容易被找到。

我的网站 URL：[网址]
网站类型：[个人博客 / 作品集 / 公司官网]
核心关键词：[你的目标搜索词，如"北京摄影师"、"个人博客"]

请帮我：
1. 优化每个页面的标题和描述（title 和 meta description）
2. 检查并修复 SEO 相关的 HTML 标签问题
3. 生成 sitemap.xml 文件
4. 建议我应该做哪些内容来提升搜索排名
```

**模板 B：内容更新计划**

```
我有一个 [网站类型]，已经上线了。

请帮我规划接下来 4 周的内容更新计划：
- 每周更新什么内容
- 每篇内容的主题建议
- 更新频率建议
- 如何在社交媒体上推广

我的网站定位：[一句话描述]
我的目标读者：[谁来看]
```

#### 8.3 可用的 Skills

| Skill 名称 | 安装量 | 作用 | 安装命令 |
|-----------|--------|------|----------|
| `alirezarezvani/claude-skills@marketing-ops` | 578 | 营销运营专家 | `npx skills add alirezarezvani/claude-skills@marketing-ops -g -y` |
| `404kidwiz/claude-supercode-skills@content-marketer` | 101 | 内容营销策划 | `npx skills add 404kidwiz/claude-supercode-skills@content-marketer -g -y` |

#### 8.4 运营概念大白话

| 概念 | 大白话 |
|------|--------|
| SEO | 让搜索引擎觉得你"有用"，把你的网站排前面 |
| 关键词 | 用户搜索时用的词，比如"怎么做蛋糕" |
| 流量 | 访问你网站的人数 |
| 转化率 | 看了你网站后真正行动的人的比例 |
| 内容运营 | 持续写有用的文章/视频，让人想回来再看 |

#### 🎯 练习：SEO 优化实践

> **任务**：
> 1. 用模板 A 优化你网站的 SEO
> 2. 让 AI 生成 sitemap.xml 并添加到网站根目录
> 3. 重新部署后，手动在搜索引擎搜索你的网站名看看能不能搜到

---

### 阶段 9：文案创作

> 📖 **做什么**：写出吸引人的网站内容

#### 9.1 好的文案 vs 不好的文案

| ❌ 不好的文案 | ✅ 好的文案 |
|-------------|------------|
| "我们是专业的服务提供商" | "让 1000+ 客户放心的选择，您的下一站" |
| "我们的产品很好" | "3 个功能，帮你每天省下 2 小时" |
| "联系我们" | "聊聊你的想法？点击这里开始" |

#### 9.2 文案提示词模板

**模板 A：网站文案创作**

```
请帮我的 [网站类型] 写文案。

网站名称：[名称]
网站定位：[一句话说明]
目标用户：[描述目标用户]

我需要：
1. 首页主标题和副标题（3 个方案供选择）
2. 关于我们页面文案（200 字以内）
3. 服务/产品介绍文案（每个功能一句话）

风格要求：亲切、可信、不浮夸
请同时告诉我每个文案"为什么这么写"。
```

**模板 B：营销文案**

```
请帮我写一份推广文案。

推广内容：[描述要推广什么，如：我的新网站上线了]
目标渠道：朋友圈 / 小红书 / 公众号
目标读者：[描述读者]

请用"问题 + 解决方案 + 行动号召"的结构写，控制在 150 字以内。

写 3 个不同风格的版本：
1. 走心版
2. 幽默版
3. 专业版
```

#### 9.3 可用的 Skills

| Skill 名称 | 安装量 | 作用 | 安装命令 |
|-----------|--------|------|----------|
| `kostja94/marketing-skills@copywriting` | 2K ⭐ | 专业文案写作 | `npx skills add kostja94/marketing-skills@copywriting -g -y` |
| `coreyhaines31/marketingskills@ab-testing` | 17.4K | A/B 测试文案效果 | `npx skills add coreyhaines31/marketingskills@ab-testing -g -y` |
| `404kidwiz/claude-supercode-skills@technical-writer` | 106 | 技术写作 | `npx skills add 404kidwiz/claude-supercode-skills@technical-writer -g -y` |

#### 🎯 练习：重写网站文案

> **任务**：用模板 A 让 AI 为你的网站重新写首页主标题和副标题。选一个你最喜欢的版本，更新到你的网站上。

---

## 案例项目：贯穿全流程的实战

为了让你更好地理解每个阶段怎么做，下面用一个**完整的案例项目**把 9 个阶段串起来。

### 项目："小橘的摄影集"

一个摄影爱好者想展示自己拍的照片，并吸引客户约拍。

| 阶段 | 在这个项目中的具体做法 |
|------|----------------------|
| 阶段 1（PRD） | "写一份个人摄影作品展示网站的 PRD，核心功能：作品分类展示、关于我、联系预约" |
| 阶段 2（设计） | "设计风格：极简、黑白为主、突出照片本身" |
| 阶段 3（前端） | "4 个页面：首页 → 作品集 → 关于 → 联系，用瀑布流布局展示照片" |
| 阶段 4（后端） | "用 Formspree 接收预约表单，用 Cloudinary 免费托管照片" |
| 阶段 5（测试） | "检查所有图片链接、表单提交、移动端显示" |
| 阶段 6（部署） | "用 Vercel 部署，绑定 custom-domain" |
| 阶段 7（运维） | "设置 Vercel 监控，每周检查一次访问日志" |
| 阶段 8（运营） | "优化 SEO 关键词'[城市]摄影师'，制定每周更新计划" |
| 阶段 9（文案） | "首页主标题：'用镜头讲述你的故事'" |

---

## 交互式练习总览

本指南共包含 **9 个练习**，每个阶段一个。建议按顺序完成：

| # | 练习 | 预计时间 | 难度 |
|---|------|---------|------|
| 0 | 环境搭建 + 注册账号 | 30 分钟 | ★☆☆ |
| 1 | 写你的第一份 PRD | 20 分钟 | ★☆☆ |
| 2 | 设计你的首页方案 | 20 分钟 | ★☆☆ |
| 3 | 完成多页面网站 | 60 分钟 | ★★☆ |
| 4 | 给网站加上后端/表单 | 30 分钟 | ★★☆ |
| 5 | 全面检查你的网站 | 20 分钟 | ★☆☆ |
| 6 | 部署上线 | 15 分钟 | ★☆☆ |
| 7 | 网站健康检查 | 15 分钟 | ★☆☆ |
| 8 | SEO 优化实践 | 20 分钟 | ★★☆ |
| 9 | 重写网站文案 | 15 分钟 | ★☆☆ |

> **建议节奏**：每天完成 1-2 个练习，一周内走完全流程。
> 如果卡住了——**问 AI！** 把遇到的问题描述给 AI，让它帮你解决。

---

## Skills 快速索引（汇总）

以下是在本指南中出现的所有 Skills，按类别整理：

### 📄 产品文档
| Skill | 安装量 | 安装命令 |
|-------|--------|----------|
| `github/awesome-copilot@prd` | 19.3K⭐ | `npx skills add github/awesome-copilot@prd -g -y` |
| `phuryn/pm-skills@create-prd` | 1.4K | `npx skills add phuryn/pm-skills@create-prd -g -y` |
| `product-on-purpose/pm-skills@deliver-prd` | 323 | `npx skills add product-on-purpose/pm-skills@deliver-prd -g -y` |
| `mblode/agent-skills@docs-writing` | 441 | `npx skills add mblode/agent-skills@docs-writing -g -y` |
| `tldraw/tldraw@write-docs` | 405 | `npx skills add tldraw/tldraw@write-docs -g -y` |

### 🎨 设计
| Skill | 安装量 | 安装命令 |
|-------|--------|----------|
| `nexu-io/open-design@ui-ux-pro-max` | 2.4K⭐ | `npx skills add nexu-io/open-design@ui-ux-pro-max -g -y` |

### 💻 前端开发
| Skill | 安装量 | 安装命令 |
|-------|--------|----------|
| `duyet/claude-plugins@react-nextjs-patterns` | 303 | `npx skills add duyet/claude-plugins@react-nextjs-patterns -g -y` |
| `liuchiawei/agent-skills@frontend-developer` | 24 | `npx skills add liuchiawei/agent-skills@frontend-developer -g -y` |
| `busirocket/agents-skills@busirocket-tailwindcss-v4` | 88 | `npx skills add busirocket/agents-skills@busirocket-tailwindcss-v4 -g -y` |
| `midudev/autoskills@tailwind-css-patterns` | 34 | `npx skills add midudev/autoskills@tailwind-css-patterns -g -y` |
| `clerk/skills@clerk-setup` | 13.9K⭐ | `npx skills add clerk/skills@clerk-setup -g -y` |

### ⚙️ 后端开发
| Skill | 安装量 | 安装命令 |
|-------|--------|----------|
| `aj-geddes/useful-ai-prompts@nodejs-express-server` | 2.7K⭐ | `npx skills add aj-geddes/useful-ai-prompts@nodejs-express-server -g -y` |
| `mindrally/skills@fastapi-python` | 10K⭐ | `npx skills add mindrally/skills@fastapi-python -g -y` |
| `mindrally/skills@flask-python` | 699 | `npx skills add mindrally/skills@flask-python -g -y` |
| `bobmatnyc/claude-mpm-skills@flask` | 240 | `npx skills add bobmatnyc/claude-mpm-skills@flask -g -y` |
| `auth0/agent-skills@express-oauth2-jwt-bearer` | 287 | `npx skills add auth0/agent-skills@express-oauth2-jwt-bearer -g -y` |
| `julianromli/ai-skills@backend-dev` | 63 | `npx skills add julianromli/ai-skills@backend-dev -g -y` |

### 🗄️ 数据库
| Skill | 安装量 | 安装命令 |
|-------|--------|----------|
| `prisma/skills@prisma-upgrade-v7` | 4.5K⭐ | `npx skills add prisma/skills@prisma-upgrade-v7 -g -y` |
| `gocallum/nextjs16-agent-skills@prisma-orm-v7-skills` | 891 | `npx skills add gocallum/nextjs16-agent-skills@prisma-orm-v7-skills -g -y` |
| `mindrally/skills@prisma-development` | 428 | `npx skills add mindrally/skills@prisma-development -g -y` |
| `nice-wolf-studio/claude-code-supabase-skills@supabase-database` | 234 | `npx skills add nice-wolf-studio/claude-code-supabase-skills@supabase-database -g -y` |
| `sickn33/antigravity-awesome-skills@firebase` | 1.2K | `npx skills add sickn33/antigravity-awesome-skills@firebase -g -y` |
| `erichowens/some_claude_skills@supabase-admin` | 117 | `npx skills add erichowens/some_claude_skills@supabase-admin -g -y` |
| `scientiacapital/skills@supabase-sql` | 59 | `npx skills add scientiacapital/skills@supabase-sql -g -y` |

### 🧪 测试
| Skill | 安装量 | 安装命令 |
|-------|--------|----------|
| `anthropics/skills@webapp-testing` | 95K⭐ | 通常已内置 |
| `wshobson/agents@javascript-testing-patterns` | 15K | `npx skills add wshobson/agents@javascript-testing-patterns -g -y` |
| `wshobson/agents@e2e-testing-patterns` | 17.9K | `npx skills add wshobson/agents@e2e-testing-patterns -g -y` |

### 🚀 部署 & 全栈
| Skill | 安装量 | 安装命令 |
|-------|--------|----------|
| `davila7/claude-code-templates@senior-fullstack` | 813 | `npx skills add davila7/claude-code-templates@senior-fullstack -g -y` |
| `yonatangross/orchestkit@devops-deployment` | 743 | `npx skills add yonatangross/orchestkit@devops-deployment -g -y` |
| `borghei/claude-skills@senior-fullstack` | 202 | `npx skills add borghei/claude-skills@senior-fullstack -g -y` |

### 📢 运营 & 文案
| Skill | 安装量 | 安装命令 |
|-------|--------|----------|
| `kostja94/marketing-skills@copywriting` | 2K⭐ | `npx skills add kostja94/marketing-skills@copywriting -g -y` |
| `alirezarezvani/claude-skills@marketing-ops` | 578 | `npx skills add alirezarezvani/claude-skills@marketing-ops -g -y` |
| `404kidwiz/claude-supercode-skills@content-marketer` | 101 | `npx skills add 404kidwiz/claude-supercode-skills@content-marketer -g -y` |
| `coreyhaines31/marketingskills@ab-testing` | 17.4K | `npx skills add coreyhaines31/marketingskills@ab-testing -g -y` |
| `404kidwiz/claude-supercode-skills@technical-writer` | 106 | `npx skills add 404kidwiz/claude-supercode-skills@technical-writer -g -y`

### 🔍 查找更多 Skills
```bash
# 通用搜索
npx skills find [关键词]

# 按类别搜索示例
npx skills find "prd"              # 找产品文档类
npx skills find "react"            # 找 React 相关
npx skills find "nextjs"           # 找 Next.js 相关
npx skills find "tailwind"         # 找 Tailwind CSS
npx skills find "testing"          # 找测试类
npx skills find "design"           # 找设计类
npx skills find "deploy"           # 找部署类
npx skills find "marketing"        # 找运营类
npx skills find "database"         # 找数据库类
npx skills find "supabase"         # 找 Supabase 相关
npx skills find "python"           # 找 Python 相关
npx skills find "node.js"          # 找 Node.js 相关
npx skills find "seo"              # 找 SEO 类

# 浏览所有可用 skills
npx skills find ""
```

---

## MCP 工具链快速索引

| MCP 工具 | 阶段 | 作用 |
|----------|------|------|
| WebSearch | 1（产品定义）、8（运营） | 搜索竞品、市场调研、关键词研究、查技术文档 |
| WebFetch | 1（产品定义）、2（设计） | 抓取参考网页内容、分析竞品结构 |
| Figma MCP | 2（设计）、3（前端） | 在 Figma 中生成设计稿 → 转前端代码 |
| Playwright MCP | 3（前端）、5（测试） | 浏览器自动预览页面、交互测试、截图 |
| Node REPL MCP | 3（前端）、4（后端） | 运行和测试 JavaScript / Node.js 代码 |

> **什么是 MCP？** MCP（Model Context Protocol）是 AI 助手连接外部工具的"万能接口"。只要有 MCP，AI 就可以打开浏览器、读取网页、操作 Figma、运行代码。你不需要安装额外的插件，只要在 Claude Code 中启用对应 MCP 服务器即可。

---

## 8. 发布计划

### 8.1 版本规划

| 版本 | 内容 | 状态 |
|------|------|------|
| V1.0 | 概念科普 + 单页建站 | ✅ 已完成 |
| **V1.1** | **全流程实战 + Skills 集成 + 交互练习** | **✅ 当前版本** |
| V1.2 | 多项目模板（电商、博客、社区等） | 规划中 |
| V2.0 | 视频配套 + 在线交互式学习平台 | 未来 |

### 8.2 V1.1 交付清单

- ✅ 9 个阶段的完整操作指南
- ✅ 每个阶段配备提示词模板
- ✅ **30+ 个 Skills** 的安装与使用说明（分 8 大类别）
- ✅ 覆盖 /find-skills 技能发现方法
- ✅ MCP 工具链介绍
- ✅ 贯穿全文的实战案例
- ✅ 9 个交互式练习
- ✅ 完整 Skills 索引（一键安装）
- ✅ 大白话概念解释

---

> **文档版本**：V1.1
> **创建日期**：2026 年 6 月 14 日
> **作者**：Claude（AI 助手）
> **适用读者**：零编程基础，想系统学习 Vibe Coding 建站的小白
> **前置要求**：建议先完成 V1.0 的基础内容
