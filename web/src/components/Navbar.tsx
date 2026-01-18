'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import { profile } from '@/data/profile';
import { useActiveSection } from '@/hooks/useActiveSection';
import { cx } from '@/lib/cx';

import { Container } from './Container';
import { ThemeToggle } from './ThemeToggle';

const sectionIds = profile.navigation.sections.map((item) =>
  item.href.replace('#', '').trim(),
);

export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const activeSection = useActiveSection(sectionIds);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/60 nav-surface dark:border-slate-800/70">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="text-lg font-semibold">
          {profile.name}
        </Link>
        <nav
          className="hidden items-center gap-6 md:flex"
          aria-label={profile.ui.mainNavLabel}
        >
          {profile.navigation.sections.map((item) => {
            const id = item.href.replace('#', '');
            const href = isHome ? item.href : `/${item.href}`;
            const isActive = isHome && activeSection === id;

            return (
              <Link
                key={item.href}
                href={href}
                className={cx(
                  'text-sm font-medium text-muted transition-colors hover:text-ink',
                  isActive && 'text-ink',
                )}
                aria-current={isActive ? 'page' : undefined}
              >
                {item.label}
              </Link>
            );
          })}
          <Link href={profile.navCta.href} className="btn btn-primary">
            {profile.navCta.label}
          </Link>
          <ThemeToggle />
        </nav>
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="btn btn-ghost h-10 px-4"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? profile.ui.closeMenuLabel : profile.ui.openMenuLabel}
          </button>
        </div>
      </Container>
      <div
        id="mobile-menu"
        className={cx(
          'md:hidden',
          menuOpen ? 'block' : 'hidden',
        )}
      >
        <div className="border-t border-slate-200/60 bg-white/90 px-4 py-4 dark:border-slate-800/70 dark:bg-slate-950/90">
          <div className="flex flex-col gap-4">
            {profile.navigation.sections.map((item) => {
              const href = isHome ? item.href : `/${item.href}`;

              return (
                <Link
                  key={item.href}
                  href={href}
                  className="text-sm font-medium text-muted hover:text-ink"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href={profile.navCta.href}
              className="btn btn-primary"
              onClick={() => setMenuOpen(false)}
            >
              {profile.navCta.label}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
