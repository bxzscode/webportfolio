/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-serif)', 'ui-serif', 'serif'],
      },
      colors: {
        base: 'rgb(var(--bg) / <alpha-value>)',
        ink: 'rgb(var(--fg) / <alpha-value>)',
        accent: 'rgb(var(--accent) / <alpha-value>)',
        muted: 'rgb(var(--muted) / <alpha-value>)',
        surface: 'rgb(var(--surface) / <alpha-value>)',
      },
      boxShadow: {
        soft: '0 12px 40px rgba(15, 23, 42, 0.12)',
      },
    },
  },
  plugins: [],
};
