"use client";

import { useEffect, useState } from 'react';

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const root = document.documentElement;
    const saved = localStorage.getItem('theme');
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldDark = saved ? saved === 'dark' : systemDark;

    root.classList.toggle('dark', shouldDark);
    setIsDark(shouldDark);
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    const nextDark = !isDark;

    root.classList.toggle('dark', nextDark);
    localStorage.setItem('theme', nextDark ? 'dark' : 'light');
    setIsDark(nextDark);
  };

  return (
    <button
      aria-label="Toggle theme"
      onClick={toggleTheme}
      className="rounded-full border border-border/70 bg-card/70 px-4 py-2 text-sm font-medium text-foreground backdrop-blur-md transition hover:opacity-90"
    >
      {isDark ? '☀️ Light' : '🌙 Dark'}
    </button>
  );
}
