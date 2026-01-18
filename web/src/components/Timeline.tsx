import type { TimelineItem } from '@/data/profile';

type TimelineProps = {
  items: TimelineItem[];
};

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="space-y-6">
      {items.map((item) => (
        <div key={`${item.title}-${item.dates}`} className="relative pl-6">
          <span className="absolute left-0 top-2 h-2 w-2 rounded-full bg-accent" />
          <div className="card space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <p className="text-lg font-semibold">{item.title}</p>
                <p className="text-sm text-muted">{item.subtitle}</p>
              </div>
              <span className="text-xs text-muted">{item.dates}</span>
            </div>
            <ul className="space-y-2 text-sm text-muted">
              {item.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent/70" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
