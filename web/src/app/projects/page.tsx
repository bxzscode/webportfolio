import type { Metadata } from 'next';

import { Container } from '@/components/Container';
import { ProjectFilters } from '@/components/ProjectFilters';
import { SectionHeading } from '@/components/SectionHeading';
import { profile } from '@/data/profile';

export const metadata: Metadata = {
  title: `${profile.ui.projectsPageTitle} | ${profile.name}`,
  description: profile.ui.projectsPageIntro,
  openGraph: {
    title: `${profile.ui.projectsPageTitle} | ${profile.name}`,
    description: profile.ui.projectsPageIntro,
    url: `${profile.site.url}/projects`,
    images: [{ url: profile.site.ogImage }],
  },
};

export default function ProjectsPage() {
  return (
    <section className="section">
      <Container>
        <SectionHeading
          title={profile.ui.projectsPageTitle}
          subtitle={profile.ui.projectsPageIntro}
        />
        <div className="mt-8">
          <ProjectFilters projects={profile.projects} />
        </div>
      </Container>
    </section>
  );
}
