'use client';

import { useMemo, useState } from 'react';

import { profile, type Project } from '@/data/profile';
import { cx } from '@/lib/cx';

import { ProjectCard } from './ProjectCard';

type ProjectFiltersProps = {
  projects: Project[];
};

export function ProjectFilters({ projects }: ProjectFiltersProps) {
  const allLabel = profile.ui.filterAllLabel;
  const tags = useMemo(() => {
    const tagSet = new Set<string>();
    projects.forEach((project) =>
      project.techStack.forEach((tech) => tagSet.add(tech)),
    );
    return [allLabel, ...Array.from(tagSet).sort()];
  }, [projects, allLabel]);

  const [activeTag, setActiveTag] = useState(allLabel);

  const filteredProjects = useMemo(() => {
    if (activeTag === allLabel) {
      return projects;
    }
    return projects.filter((project) => project.techStack.includes(activeTag));
  }, [activeTag, projects, allLabel]);

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-sm text-muted">{profile.ui.filterLabel}</span>
        {tags.map((tag) => (
          <button
            key={tag}
            type="button"
            onClick={() => setActiveTag(tag)}
            className={cx(
              'badge transition',
              activeTag === tag &&
                'border-accent/60 bg-accent/10 text-ink dark:text-ink',
            )}
            aria-pressed={activeTag === tag}
          >
            {tag}
          </button>
        ))}
      </div>
      {filteredProjects.length ? (
        <div className="grid gap-6 md:grid-cols-2">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              priority={index < 2}
            />
          ))}
        </div>
      ) : (
        <p className="text-sm text-muted">{profile.ui.projectsEmptyLabel}</p>
      )}
    </div>
  );
}
