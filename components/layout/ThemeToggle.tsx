'use client';

import React, { useEffect, useState, useCallback } from 'react';

function applyThemeToDOM(dark: boolean) {
  if (typeof document === 'undefined') return;
  const html = document.documentElement;
  const body = document.body;

  if (dark) {
    html.setAttribute('data-theme', 'dark');
    html.classList.add('dark-mode', 'dark-theme', 'dark');
    body.setAttribute('data-theme', 'dark');
    body.classList.add('dark-mode', 'dark-theme', 'dark');
    localStorage.setItem('taksh-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  } else {
    html.removeAttribute('data-theme');
    html.classList.remove('dark-mode', 'dark-theme', 'dark');
    body.removeAttribute('data-theme');
    body.classList.remove('dark-mode', 'dark-theme', 'dark');
    localStorage.setItem('taksh-theme', 'light');
    localStorage.setItem('theme', 'light');
  }
}

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('taksh-theme') || localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldBeDark = saved === 'dark' || (!saved && prefersDark);
    applyThemeToDOM(shouldBeDark);

    const timer = setTimeout(() => {
      setIsDark(shouldBeDark);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = useCallback(() => {
    setIsDark((prev) => {
      const next = !prev;
      applyThemeToDOM(next);
      return next;
    });
  }, []);

  return (
    <button
      id="theme-toggle"
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      title="Toggle light / dark"
    >
      {isDark ? (
        <svg
          className="icon-sun"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          width="20"
          height="20"
          style={{ display: 'block' }}
        >
          <circle cx="12" cy="12" r="5" />
          <line x1="12" y1="1" x2="12" y2="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <line x1="12" y1="21" x2="12" y2="23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <line x1="1" y1="12" x2="3" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <line x1="21" y1="12" x2="23" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ) : (
        <svg
          className="icon-moon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          width="20"
          height="20"
          style={{ display: 'block' }}
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z" />
        </svg>
      )}
    </button>
  );
}

export default ThemeToggle;
