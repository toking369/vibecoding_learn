import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#2D1B69',
          light: '#4C2D8A',
          dark: '#1A103C',
        },
        accent: {
          DEFAULT: '#E85D3A',
          light: '#FB8B67',
          dark: '#C94D2E',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          hover: '#FAFAF8',
          secondary: '#F5F4F1',
        },
      },
      fontFamily: {
        display: ['ZCOOL QingKe HuangYou', 'Noto Sans SC', 'sans-serif'],
        sans: ['Noto Sans SC', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) both',
        'fade-in-down': 'fadeInDown 0.5s ease-out both',
        'fade-in-left': 'fadeInLeft 0.6s cubic-bezier(0.16, 1, 0.3, 1) both',
        'fade-in-right': 'fadeInRight 0.6s cubic-bezier(0.16, 1, 0.3, 1) both',
        'scale-in': 'scaleIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) both',
        float: 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'spin-slow': 'spin-slow 8s linear infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(1.5rem)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-1rem)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-1.5rem)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInRight: {
          '0%': { opacity: '0', transform: 'translateX(1.5rem)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 8px rgba(232, 93, 58, 0.15)' },
          '50%': { boxShadow: '0 0 20px rgba(232, 93, 58, 0.25)' },
        },
      },
    },
  },
} satisfies Config;
