import { useState, useEffect } from 'react';

type Theme = 'light' | 'dark';

const THEME_KEY = 'theme';

/**
 * Get initial theme from localStorage or system preference.
 * Called inline to avoid flash-of-wrong-theme on hydration.
 */
function getInitialTheme(): Theme {
  if (typeof localStorage !== 'undefined') {
    const saved = localStorage.getItem(THEME_KEY) as Theme | null;
    if (saved === 'light' || saved === 'dark') return saved;
  }
  if (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  }
  return 'light';
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Sync with any theme change that happened before hydration
    const current = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    setTheme(current);
  }, []);

  function toggle() {
    const next = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
    localStorage.setItem(THEME_KEY, next);
    document.documentElement.classList.toggle('dark', next === 'dark');
  }

  // Prevent hydration mismatch: render a placeholder until client-side
  if (!mounted) {
    return (
      <button className="p-2 rounded-lg text-[var(--color-text-secondary)] opacity-0" aria-label="切换主题" aria-hidden="true" tabIndex={-1}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      </button>
    );
  }

  return (
    <button
      onClick={toggle}
      className="p-2 rounded-lg text-[var(--color-text-secondary)] hover:bg-[var(--color-surface-hover)] hover:text-[var(--color-text)] transition-colors"
      aria-label={theme === 'light' ? '切换到深色模式' : '切换到浅色模式'}
    >
      <svg
        width="20" height="20"
        viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="2"
        className="transition-transform duration-300"
        style={{ transform: `rotate(${theme === 'dark' ? 180 : 0}deg)` }}
      >
        {theme === 'light' ? (
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        ) : (
          <>
            <circle cx="12" cy="12" r="5" />
            <line x1="12" y1="1" x2="12" y2="3" />
            <line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="3" y2="12" />
            <line x1="21" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.32" />
          </>
        )}
      </svg>
    </button>
  );
}
