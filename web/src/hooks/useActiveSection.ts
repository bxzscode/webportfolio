'use client';

import { useEffect, useState } from 'react';

export function useActiveSection(sectionIds: string[]) {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? '');

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => Boolean(element));

    if (!elements.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (!visible.length) {
          return;
        }

        const mostVisible = visible.sort(
          (a, b) => b.intersectionRatio - a.intersectionRatio,
        )[0];

        if (mostVisible?.target?.id) {
          setActiveId(mostVisible.target.id);
        }
      },
      {
        rootMargin: '-35% 0px -55% 0px',
        threshold: [0.1, 0.6],
      },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [sectionIds]);

  return activeId;
}
