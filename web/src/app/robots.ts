import type { MetadataRoute } from 'next';

import { profile } from '@/data/profile';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = profile.site.url.replace(/\/$/, '');

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
