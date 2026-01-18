'use client';

import Image from 'next/image';
import Link from 'next/link';

import { profile, type Project } from '@/data/profile';

type ProjectCardProps = {
  project: Project;
  priority?: boolean;
};

export function ProjectCard({ project, priority = false }: ProjectCardProps) {
  const coverImage = project.images[0];

  return (
    <article className="card group flex h-full flex-col overflow-hidden p-0">
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        <Image
          src={coverImage}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          priority={priority}
          className="object-cover transition duration-500 group-hover:scale-[1.02]"
        />
      </div>
      <div className="flex flex-1 flex-col gap-4 p-6">
        <div>
          <h3 className="text-xl font-semibold">{project.title}</h3>
          <p className="mt-2 text-sm text-muted">{project.description}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.techStack.slice(0, 4).map((tech) => (
            <span key={tech} className="badge">
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-auto flex flex-wrap items-center gap-4 text-sm">
          <Link
            href={`/projects/${project.slug}`}
            className="text-accent hover:text-accent/80"
          >
            {profile.ui.viewProjectLabel}
          </Link>
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="text-muted hover:text-accent"
            >
              {profile.ui.viewCodeLabel}
            </a>
          ) : null}
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="text-muted hover:text-accent"
            >
              {profile.ui.liveDemoLabel}
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
