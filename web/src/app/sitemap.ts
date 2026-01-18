import type { MetadataRoute } from 'next';

import { profile } from '@/data/profile';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = profile.site.url.replace(/\/$/, '');
  const staticRoutes = ['', '/projects', '/resume', '/contact'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));

  const projectRoutes = profile.projects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...projectRoutes];
}
