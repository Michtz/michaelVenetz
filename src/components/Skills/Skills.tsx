import type { FC } from 'react';
import { skillSections } from './Skills.data';
import type { SkillGroup, SkillSection } from './Skills.data';
import styles from './Skills.module.scss';

const SkillGroupBlock: FC<{ group: SkillGroup }> = ({ group }) => (
  <div className={styles.group}>
    {group.category !== '' && (
      <span className={styles.categoryLabel}>{group.category}</span>
    )}
    <div className={styles.chips}>
      {group.items.map((item) => (
        <span key={item} className={styles.chip}>
          {item}
        </span>
      ))}
    </div>
  </div>
);

const SkillSectionBlock: FC<{ section: SkillSection }> = ({ section }) => (
  <div className={styles.subsection} id={section.id}>
    <h3 className={styles.subsectionHeading}>{section.heading}</h3>
    <p className={styles.description}>{section.description}</p>
    <div className={styles.groups}>
      {section.groups.map((group, index) => (
        <SkillGroupBlock key={group.category || index} group={group} />
      ))}
    </div>
  </div>
);

const Skills: FC = () => {
  return (
    <section id="skills" aria-label="Skills" className={styles.skills}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Stack &amp; Tools</h2>
        <div className={styles.sections}>
          {skillSections.map((section) => (
            <SkillSectionBlock key={section.id} section={section} />
          ))}
        </div>
      </div>
    </section>
  );
};

export { Skills };
