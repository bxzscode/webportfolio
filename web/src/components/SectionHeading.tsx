import type { ReactNode } from 'react';

import { cx } from '@/lib/cx';

type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  actions?: ReactNode;
  className?: string;
};

export function SectionHeading({
  title,
  subtitle,
  actions,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cx(
        'flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between',
        className,
      )}
    >
      <div className="space-y-3">
        <h2 className="section-heading">{title}</h2>
        {subtitle ? <p className="text-muted max-w-2xl">{subtitle}</p> : null}
      </div>
      {actions ? <div className="shrink-0">{actions}</div> : null}
    </div>
  );
}
