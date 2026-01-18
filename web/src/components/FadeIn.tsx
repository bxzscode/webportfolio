'use client';

import { useEffect, useRef, useState } from 'react';

import { cx } from '@/lib/cx';

type FadeInProps = {
  children: React.ReactNode;
  className?: string;
};

export function FadeIn({ children, className }: FadeInProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={cx('fade-in', isVisible && 'is-visible', className)}>
      {children}
    </div>
  );
}
