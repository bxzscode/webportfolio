'use client';

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

type Theme = 'light' | 'dark';

type ThemeContextValue = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

const STORAGE_KEY = 'theme';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>('light');

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)',
    ).matches;
    const nextTheme =
      stored === 'light' || stored === 'dark'
        ? stored
        : prefersDark
          ? 'dark'
          : 'light';

    applyTheme(nextTheme);
    setThemeState(nextTheme);
  }, []);

  const applyTheme = (nextTheme: Theme) => {
    document.documentElement.classList.toggle('dark', nextTheme === 'dark');
    document.documentElement.style.colorScheme = nextTheme;
    window.localStorage.setItem(STORAGE_KEY, nextTheme);
  };

  const setTheme = (nextTheme: Theme) => {
    setThemeState(nextTheme);
    applyTheme(nextTheme);
  };

  const toggleTheme = () => {
    setThemeState((prev) => {
      const nextTheme = prev === 'dark' ? 'light' : 'dark';
      applyTheme(nextTheme);
      return nextTheme;
    });
  };

  const value = useMemo(
    () => ({
      theme,
      setTheme,
      toggleTheme,
    }),
    [theme],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}
