import { FC, memo, PropsWithChildren } from 'react';

import { Skill as SkillType, SkillGroup as SkillGroupType } from '../../../data/dataDef';

export const SkillGroup: FC<PropsWithChildren<{ skillGroup: SkillGroupType }>> = memo(({ skillGroup }) => {
  const { name, skills } = skillGroup;
  return (
    <div className="flex flex-col">
      <span className="text-center text-lg font-bold mb-2">{name}</span>
      <div className="flex flex-wrap gap-2 justify-center">
        {skills.map((skill, index) => (
          <Skill key={`${skill.name}-${index}`} skill={skill} />
        ))}
      </div>
    </div>
  );
});

SkillGroup.displayName = 'SkillGroup';

export const Skill: FC<{ skill: SkillType }> = memo(({ skill }) => {
  const { name } = skill;
  return (
    <div className="bg-neutral-300 px-3 py-1 rounded-full text-sm font-medium">
      {name}
    </div>
  );
});

Skill.displayName = 'Skill';
