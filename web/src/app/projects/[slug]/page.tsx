import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { Container } from '@/components/Container';
import { profile } from '@/data/profile';

type ProjectPageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return profile.projects.map((project) => ({
    slug: project.slug,
  }));
}

export function generateMetadata({ params }: ProjectPageProps): Metadata {
  const project = profile.projects.find((item) => item.slug === params.slug);

  if (!project) {
    return {
      title: `${profile.ui.projectsPageTitle} | ${profile.name}`,
      description: profile.ui.projectsPageIntro,
    };
  }

  const pageTitle = `${project.title} | ${profile.name}`;

  return {
    title: pageTitle,
    description: project.description,
    openGraph: {
      title: pageTitle,
      description: project.description,
      url: `${profile.site.url}/projects/${project.slug}`,
      images: [{ url: project.images[0] ?? profile.site.ogImage }],
    },
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = profile.projects.find((item) => item.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <section className="section">
      <Container>
        <div className="space-y-6">
          <Link href="/projects" className="text-sm text-accent">
            {profile.ui.backToProjectsLabel}
          </Link>
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.2em] text-muted">
              {profile.ui.projectsPageTitle}
            </p>
            <h1 className="text-3xl font-semibold sm:text-4xl">
              {project.title}
            </h1>
            <p className="text-muted">{project.description}</p>
          </div>
        </div>
        <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-8">
            <div className="space-y-3">
              <h3 className="text-xl font-semibold">
                {profile.ui.projectProblemLabel}
              </h3>
              <p className="text-muted">{project.problem}</p>
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-semibold">
                {profile.ui.projectSolutionLabel}
              </h3>
              <p className="text-muted">{project.solution}</p>
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-semibold">
                {profile.ui.projectImpactLabel}
              </h3>
              <p className="text-muted">{project.impact}</p>
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-semibold">
                {profile.ui.projectTechStackLabel}
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span key={tech} className="badge">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="space-y-6">
            {project.images.map((image) => (
              <div
                key={image}
                className="card overflow-hidden p-0"
              >
                <div className="relative aspect-[16/10] w-full">
                  <Image
                    src={image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
            <div className="card space-y-3">
              <p className="text-sm uppercase tracking-[0.2em] text-muted">
                {profile.ui.projectLinksLabel}
              </p>
              <div className="flex flex-col gap-2 text-sm">
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-accent"
                  >
                    {profile.ui.liveDemoLabel}
                  </a>
                ) : null}
                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-accent"
                  >
                    {profile.ui.viewCodeLabel}
                  </a>
                ) : null}
                {!project.liveUrl && !project.githubUrl ? (
                  <span className="text-sm text-muted">
                    {profile.ui.projectLinksEmptyLabel}
                  </span>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
