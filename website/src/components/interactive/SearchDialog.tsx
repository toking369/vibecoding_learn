import { useState, useEffect, useRef, useCallback, type KeyboardEvent } from 'react';

interface SearchResult {
  url: string;
  title: string;
  excerpt: string;
}

export default function SearchDialog() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const pagefindRef = useRef<any>(null);

  // Initialize Pagefind
  useEffect(() => {
    async function init() {
      try {
        // Pagefind is loaded from /pagefind/ after build.
        // We construct the URL dynamically so Vite/Rollup doesn't try to
        // resolve it at build time (the index only exists post-build).
        const mod = 'pagefind';
        const url = `/${mod}/${mod}.js`;
        const pagefind = await import(url);
        pagefindRef.current = pagefind;
      } catch {
        // Pagefind index is only available after build
        console.debug('Pagefind not available in dev mode');
      }
    }
    init();
  }, []);

  // Search function
  const doSearch = useCallback(async (q: string) => {
    if (!q.trim() || !pagefindRef.current) {
      setResults([]);
      return;
    }
    setLoading(true);
    try {
      const search = await pagefindRef.current.search(q);
      const items = search?.results?.slice(0, 10) ?? [];
      const data = await Promise.all(
        items.map(async (r: any) => {
          const d = await r.data();
          return {
            url: d.url,
            title: d.meta?.title || '无标题',
            excerpt: d.excerpt || '',
          } as SearchResult;
        })
      );
      setResults(data);
    } catch {
      setResults([]);
    } finally {
      setLoading(false);
    }
  }, []);

  // Debounced search on query change
  useEffect(() => {
    const timer = setTimeout(() => doSearch(query), 200);
    return () => clearTimeout(timer);
  }, [query, doSearch]);

  // Keyboard shortcuts
  useEffect(() => {
    function handleKeyDown(e: globalThis.KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setOpen(true);
      }
      if (e.key === 'Escape') setOpen(false);
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Focus input when opened, lock scrolling
  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  // Listen for clicks on the header search button
  useEffect(() => {
    const btn = document.getElementById('search-btn');
    if (!btn) return;
    const handler = () => setOpen(true);
    btn.addEventListener('click', handler);
    return () => btn.removeEventListener('click', handler);
  }, []);

  return (
    <>
      {open && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh]">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />

          {/* Dialog */}
          <div className="relative w-full max-w-lg mx-4 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl shadow-2xl overflow-hidden animate-fade-in-up">
            {/* Search input */}
            <div className="flex items-center gap-3 px-4 border-b border-[var(--color-border)]">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[var(--color-text-muted)] shrink-0">
                <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
              <input
                ref={inputRef}
                type="text"
                placeholder="搜索内容..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="flex-1 py-3.5 bg-transparent border-0 outline-none text-[var(--color-text)] placeholder:text-[var(--color-text-muted)]"
              />
              <button
                onClick={() => setOpen(false)}
                className="text-[var(--color-text-muted)] hover:text-[var(--color-text)]"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            </div>

            {/* Results */}
            <div className="max-h-80 overflow-y-auto p-2">
              {loading && (
                <div className="flex items-center justify-center py-8 text-sm text-[var(--color-text-muted)]">
                  <div className="w-5 h-5 border-2 border-[var(--color-accent)] border-t-transparent rounded-full animate-spin mr-2" />
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
                        className="block p-3 rounded-lg hover:bg-[var(--color-bg-secondary)] transition-colors"
                      >
                        <div className="text-sm font-medium text-[var(--color-text)]">{result.title}</div>
                        <div className="text-xs text-[var(--color-text-muted)] mt-1 line-clamp-2" dangerouslySetInnerHTML={{ __html: result.excerpt }} />
                      </a>
                    </li>
                  ))}
                </ul>
              )}

              {!loading && query && results.length === 0 && (
                <div className="py-8 text-center text-sm text-[var(--color-text-muted)]">没有找到相关内容</div>
              )}

              {!query && (
                <div className="py-8 text-center text-sm text-[var(--color-text-muted)]">输入关键词搜索全站内容</div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
