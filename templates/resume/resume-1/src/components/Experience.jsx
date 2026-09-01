// src/components/Experience.jsx
import { experiences } from '../data/resumeData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

function ExpItem({ exp, index }) {
  const ref = useScrollAnimation();

  return (
    <div ref={ref} className={`t1-exp-item t1-fade-in t1-fade-in-delay-${Math.min(index + 1, 4)}`}>
      {/* Timeline marker */}
      <div className="t1-exp-marker-col">
        <div className={`t1-exp-dot${exp.current ? ' current' : ''}`} aria-hidden="true">
          <span role="img" aria-label={exp.title}>{exp.icon}</span>
        </div>
      </div>

      {/* Card */}
      <article className="t1-exp-card" aria-label={`${exp.title} at ${exp.company}`}>
        <div className="t1-exp-header">
          <h3 className="t1-exp-title">{exp.title}</h3>
          {exp.current && (
            <span className="t1-exp-badge" aria-label="Current position">Current</span>
          )}
        </div>

        <div className="t1-exp-company-row">
          <span className="t1-exp-company">{exp.company}</span>
          <span className="t1-exp-separator" aria-hidden="true">·</span>
          <span className="t1-exp-meta">
            <span aria-hidden="true" style={{ display: 'inline-flex', width: 13, height: 13, marginRight: 3 }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
            </span>
            {exp.duration}
          </span>
          <span className="t1-exp-separator" aria-hidden="true">·</span>
          <span className="t1-exp-meta">
            <span aria-hidden="true" style={{ display: 'inline-flex', width: 13, height: 13, marginRight: 3 }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
            </span>
            {exp.location}
          </span>
        </div>

        <p className="t1-exp-description">{exp.description}</p>

        <ul className="t1-exp-bullets" aria-label="Key responsibilities and achievements">
          {exp.bullets.map((bullet, i) => (
            <li key={i}>{bullet}</li>
          ))}
        </ul>
      </article>
    </div>
  );
}

export default function Experience() {
  const headerRef = useScrollAnimation();

  return (
    <section id="experience" className="t1-section" aria-label="Professional experience">
      <div className="t1-container">
        <div ref={headerRef} className="t1-section-header t1-fade-in">
          <div className="t1-section-label">My Journey</div>
          <h2 className="t1-section-title">Professional Experience</h2>
          <p className="t1-section-subtitle">
            A track record of building high-quality software and delivering results across diverse technology stacks.
          </p>
        </div>

        <div className="t1-experience-timeline" aria-label="Career timeline">
          {experiences.map((exp, index) => (
            <ExpItem key={exp.id} exp={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
