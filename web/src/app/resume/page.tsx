import type { Metadata } from 'next';
import Link from 'next/link';

import { Container } from '@/components/Container';
import { SectionHeading } from '@/components/SectionHeading';
import { profile } from '@/data/profile';

export const metadata: Metadata = {
  title: `${profile.ui.resumePageTitle} | ${profile.name}`,
  description: profile.ui.resumePageIntro,
  openGraph: {
    title: `${profile.ui.resumePageTitle} | ${profile.name}`,
    description: profile.ui.resumePageIntro,
    url: `${profile.site.url}/resume`,
    images: [{ url: profile.site.ogImage }],
  },
};

export default function ResumePage() {
  return (
    <section className="section">
      <Container>
        <SectionHeading
          title={profile.ui.resumePageTitle}
          subtitle={profile.ui.resumePageIntro}
        />
        <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="card space-y-4">
            <p className="text-sm text-muted">{profile.resume.summary}</p>
            <Link
              href={profile.resume.href}
              className="btn btn-primary w-fit"
              target="_blank"
              rel="noreferrer"
            >
              {profile.resume.label}
            </Link>
          </div>
          <div className="card space-y-4">
            <p className="text-sm text-muted">{profile.contact.availability}</p>
            <div className="flex flex-wrap gap-3 text-sm">
              {profile.socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-accent"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
