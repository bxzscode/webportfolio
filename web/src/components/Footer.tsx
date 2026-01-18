import Link from 'next/link';

import { profile } from '@/data/profile';

import { Container } from './Container';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200/60 dark:border-slate-800/70">
      <Container className="py-10">
        <div className="grid gap-8 md:grid-cols-[1.5fr_1fr_1fr]">
          <div className="space-y-3">
            <p className="text-lg font-semibold">{profile.name}</p>
            <p className="text-sm text-muted">{profile.footer.description}</p>
          </div>
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.2em] text-muted">
              {profile.ui.footerQuickLinksLabel}
            </p>
            <div className="flex flex-col gap-2 text-sm">
              {profile.footer.links.map((link) => (
                <Link key={link.href} href={link.href} className="text-muted">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.2em] text-muted">
              {profile.ui.contactLinksLabel}
            </p>
            <div className="flex flex-col gap-2 text-sm">
              {profile.socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-slate-200/60 pt-6 text-xs text-muted dark:border-slate-800/70">
          {year} {profile.name}. {profile.footer.note}
        </div>
      </Container>
    </footer>
  );
}
