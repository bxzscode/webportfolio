import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { ContactForm } from '@/components/ContactForm';
import { Container } from '@/components/Container';
import { FadeIn } from '@/components/FadeIn';
import { ProjectCard } from '@/components/ProjectCard';
import { SectionHeading } from '@/components/SectionHeading';
import { SkillGroup } from '@/components/SkillGroup';
import { Timeline } from '@/components/Timeline';
import { profile, type TimelineItem } from '@/data/profile';

export const metadata: Metadata = {
  title: profile.site.title,
  description: profile.site.description,
  openGraph: {
    title: profile.site.title,
    description: profile.site.description,
    url: profile.site.url,
    images: [{ url: profile.site.ogImage }],
  },
};

export default function HomePage() {
  const featuredProjects = profile.featuredProjectSlugs.length
    ? profile.projects.filter((project) =>
        profile.featuredProjectSlugs.includes(project.slug),
      )
    : profile.projects.slice(0, 3);

  const experienceItems: TimelineItem[] = profile.experience.map((item) => ({
    title: item.role,
    subtitle: item.company,
    dates: item.dates,
    bullets: item.bullets,
  }));

  const educationItems: TimelineItem[] = profile.education.map((item) => ({
    title: item.degree,
    subtitle: item.school,
    dates: item.dates,
    bullets: item.details,
  }));

  return (
    <>
      <section id="home" data-section className="section">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <FadeIn>
              <p className="section-kicker">{profile.hero.kicker}</p>
              <h1 className="mt-4 text-4xl font-semibold sm:text-5xl lg:text-6xl">
                {profile.name}
              </h1>
              <p className="mt-3 text-lg text-muted">{profile.role}</p>
              <p className="mt-4 text-base text-muted sm:text-lg">
                {profile.shortBio}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href={profile.ctas.primary.href} className="btn btn-primary">
                  {profile.ctas.primary.label}
                </Link>
                <Link href={profile.ctas.secondary.href} className="btn btn-ghost">
                  {profile.ctas.secondary.label}
                </Link>
              </div>
              <div className="mt-6 flex flex-wrap gap-4 text-sm text-muted">
                <span>{profile.location}</span>
                <span>{profile.hero.availability}</span>
              </div>
            </FadeIn>
            <FadeIn>
              <div className="card p-6">
                <div className="relative aspect-square overflow-hidden rounded-2xl bg-slate-100 dark:bg-slate-800">
                  <Image
                    src={profile.avatar.src}
                    alt={profile.avatar.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 420px"
                    priority
                    className="object-cover"
                  />
                </div>
                <div className="mt-4 space-y-2">
                  <p className="text-lg font-semibold">{profile.name}</p>
                  <p className="text-sm text-muted">{profile.location}</p>
                  <div className="flex flex-wrap gap-2">
                    {profile.focusAreas.map((area) => (
                      <span key={area} className="badge">
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      <section id="about" data-section className="section">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <FadeIn>
              <SectionHeading
                title={profile.ui.aboutTitle}
                subtitle={profile.ui.aboutSubtitle}
              />
              <div className="mt-6 space-y-4 text-muted">
                {profile.longBio.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </FadeIn>
            <FadeIn className="space-y-6">
              <div className="card">
                <p className="text-xs uppercase tracking-[0.2em] text-muted">
                  {profile.ui.focusAreasLabel}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {profile.focusAreas.map((area) => (
                    <span key={area} className="badge">
                      {area}
                    </span>
                  ))}
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                {profile.stats.map((stat) => (
                  <div key={stat.label} className="card text-center">
                    <p className="text-2xl font-semibold">{stat.value}</p>
                    <p className="mt-1 text-sm text-muted">{stat.label}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      <section id="projects" data-section className="section">
        <Container>
          <SectionHeading
            title={profile.ui.featuredProjectsLabel}
            subtitle={profile.ui.featuredProjectsSubtitle}
            actions={
              <Link href="/projects" className="text-sm text-accent">
                {profile.ui.seeAllProjectsLabel}
              </Link>
            }
          />
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {featuredProjects.map((project, index) => (
              <ProjectCard
                key={project.slug}
                project={project}
                priority={index === 0}
              />
            ))}
          </div>
        </Container>
      </section>

      <section id="skills" data-section className="section">
        <Container>
          <SectionHeading
            title={profile.ui.skillsTitle}
            subtitle={profile.ui.skillsSubtitle}
          />
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {profile.skills.map((group) => (
              <SkillGroup key={group.category} group={group} />
            ))}
          </div>
        </Container>
      </section>

      <section id="experience" data-section className="section">
        <Container>
          <SectionHeading
            title={profile.ui.experienceEducationTitle}
            subtitle={profile.ui.experienceEducationSubtitle}
          />
          <div className="mt-10 grid gap-10 lg:grid-cols-2">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold">{profile.ui.experienceLabel}</h3>
              <Timeline items={experienceItems} />
            </div>
            <div className="space-y-6">
              <h3 className="text-xl font-semibold">{profile.ui.educationLabel}</h3>
              <Timeline items={educationItems} />
            </div>
          </div>
        </Container>
      </section>

      <section id="certifications" data-section className="section">
        <Container>
          <SectionHeading
            title={profile.ui.certificationsLabel}
            subtitle={profile.ui.certificationsSubtitle}
          />
          {profile.certifications.length ? (
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {profile.certifications.map((certification) => (
                <div key={certification.title} className="card space-y-2">
                  <p className="text-lg font-semibold">{certification.title}</p>
                  <p className="text-sm text-muted">{certification.issuer}</p>
                  <p className="text-xs text-muted">{certification.date}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="mt-6 text-sm text-muted">
              {profile.ui.certificationsEmptyLabel}
            </p>
          )}
        </Container>
      </section>

      <section id="contact" data-section className="section">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <FadeIn>
              <SectionHeading
                title={profile.contact.heading}
                subtitle={profile.contact.description}
              />
              <div className="mt-6 space-y-4 text-sm text-muted">
                <p>{profile.contact.availability}</p>
              </div>
              <div className="mt-6">
                <p className="text-xs uppercase tracking-[0.2em] text-muted">
                  {profile.ui.contactLinksLabel}
                </p>
                <div className="mt-3 flex flex-wrap gap-3">
                  {profile.socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-muted hover:text-ink"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </FadeIn>
            <FadeIn>
              <ContactForm />
            </FadeIn>
          </div>
        </Container>
      </section>
    </>
  );
}
