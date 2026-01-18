import type { SkillGroup as SkillGroupType } from '@/data/profile';

type SkillGroupProps = {
  group: SkillGroupType;
};

export function SkillGroup({ group }: SkillGroupProps) {
  return (
    <div className="card">
      <h3 className="text-lg font-semibold">{group.category}</h3>
      <div className="mt-4 flex flex-wrap gap-2">
        {group.items.map((item) => (
          <span key={item} className="badge">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
