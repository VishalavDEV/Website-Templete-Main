// src/components/Skills.jsx
import { skills } from '../data/resumeData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import Icons from './Icons';

const iconMap = {
  monitor: Icons.monitor,
  server: Icons.server,
  database: Icons.database,
  star: Icons.star,
};

function SkillCard({ category, index }) {
  const ref = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`t1-skill-category-card t1-fade-in t1-fade-in-delay-${Math.min(index + 1, 4)}`}
      aria-label={`${category.category} skills`}
    >
      <div className="t1-skill-cat-header">
        <div className="t1-skill-cat-icon" aria-hidden="true">
          {iconMap[category.icon] || Icons.code}
        </div>
        <h3 className="t1-skill-cat-title">{category.category}</h3>
      </div>
      <div className="t1-skill-tags" role="list" aria-label={`${category.category} skill list`}>
        {category.items.map((skill) => (
          <span key={skill} className="t1-skill-pill" role="listitem">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  const headerRef = useScrollAnimation();

  return (
    <section id="skills" className="t1-section" aria-label="Skills and expertise">
      <div className="t1-container">
        <div ref={headerRef} className="t1-section-header t1-fade-in">
          <div className="t1-section-label">What I know</div>
          <h2 className="t1-section-title">Skills &amp; Expertise</h2>
          <p className="t1-section-subtitle">
            A versatile toolkit built through hands-on experience across the full development stack.
          </p>
        </div>

        <div className="t1-skills-categories">
          {skills.map((category, index) => (
            <SkillCard key={category.id} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
