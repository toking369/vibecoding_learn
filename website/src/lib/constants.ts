export const SITE_TITLE = 'Vibe Coding 建站指南';
export const SITE_DESCRIPTION = '从零开始，用 AI 辅助编程搭建并发布你的第一个网站';

export const NAV_ITEMS = [
  { label: '了解 Vibe Coding', href: '/intro/what-is-vibe-coding' },
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
