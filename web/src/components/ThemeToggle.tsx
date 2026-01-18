'use client';

import { useEffect, useState } from 'react';

import { profile } from '@/data/profile';

import { useTheme } from './ThemeProvider';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const label = profile.ui.themeToggleLabel;

  return (
    <button
      type="button"
      className="btn btn-ghost h-10 w-10 p-0"
      onClick={toggleTheme}
      aria-label={label}
      title={label}
    >
      <span className="sr-only">{label}</span>
      {!mounted ? (
        <span className="h-4 w-4 rounded-full bg-muted/40" />
      ) : theme === 'dark' ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="h-5 w-5"
        >
          <path
            d="M12 3a7 7 0 1 0 7 7A9 9 0 0 1 12 3Z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="h-5 w-5"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 3v2" />
          <path d="M12 19v2" />
          <path d="M5 5l1.5 1.5" />
          <path d="M17.5 17.5L19 19" />
          <path d="M3 12h2" />
          <path d="M19 12h2" />
          <path d="M5 19l1.5-1.5" />
          <path d="M17.5 6.5L19 5" />
        </svg>
      )}
    </button>
  );
}
