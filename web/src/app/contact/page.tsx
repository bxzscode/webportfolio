import type { Metadata } from 'next';

import { ContactForm } from '@/components/ContactForm';
import { Container } from '@/components/Container';
import { SectionHeading } from '@/components/SectionHeading';
import { profile } from '@/data/profile';

export const metadata: Metadata = {
  title: `${profile.ui.contactPageTitle} | ${profile.name}`,
  description: profile.ui.contactPageIntro,
  openGraph: {
    title: `${profile.ui.contactPageTitle} | ${profile.name}`,
    description: profile.ui.contactPageIntro,
    url: `${profile.site.url}/contact`,
    images: [{ url: profile.site.ogImage }],
  },
};

export default function ContactPage() {
  return (
    <section className="section">
      <Container>
        <SectionHeading
          title={profile.ui.contactPageTitle}
          subtitle={profile.contact.pageIntro}
        />
        <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
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
            <div className="card space-y-2">
              <p className="text-xs uppercase tracking-[0.2em] text-muted">
                {profile.location}
              </p>
              <p className="text-sm text-muted">{profile.role}</p>
            </div>
          </div>
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
