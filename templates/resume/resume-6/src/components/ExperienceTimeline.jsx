import React from 'react';
import { experience } from '../data.js';
import { useScrollAnimation } from '../hooks/useScrollAnimation.js';
import './ExperienceTimeline.css';

export default function ExperienceTimeline() {
  const { ref: headRef, isVisible: headVisible } = useScrollAnimation(0.1);

  return (
    <section id="experience" className="em-experience section-padding">
      <div className="container">
        <div ref={headRef} className={`em-experience__header fade-up ${headVisible ? 'visible' : ''}`}>
          <span className="section-label">02 — Career Story</span>
          <div className="divider" style={{ marginTop: '1rem' }}></div>
          <h2 className={`em-experience__title fade-up delay-100 ${headVisible ? 'visible' : ''}`}>
            A Decade of Creative<br /><em>Leadership.</em>
          </h2>
        </div>
        <div className="em-experience__timeline">
          {experience.map((exp, i) => (
            <ExperienceItem key={exp.id} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceItem({ exp, index }) {
  const { ref, isVisible } = useScrollAnimation(0.15);
  const [expanded, setExpanded] = React.useState(false);

  return (
    <div
      ref={ref}
      className={`em-exp-item fade-up ${isVisible ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 0.08}s` }}
    >
      <div className="em-exp-item__top">
        <span className="em-exp-item__num section-label">Experience {exp.id}</span>
        <span className="em-exp-item__period">{exp.period}</span>
      </div>
      <div className="divider"></div>
      <div className="em-exp-item__body">
        <div className="em-exp-item__left">
          <div className="em-exp-item__year-block">
            {exp.period.split(' — ').map((yr, i) => (
              <span key={i} className="em-exp-item__year">{yr}</span>
            ))}
          </div>
          <div className="em-exp-item__vline"></div>
        </div>
        <div className="em-exp-item__right">
          <div className="em-exp-item__role-wrap">
            <h3 className="em-exp-item__role">{exp.role}</h3>
            <div className="em-exp-item__company-block">
              <span className="em-exp-item__company">{exp.company}</span>
              <span className="em-exp-item__company-desc body-sm">{exp.companyDesc}</span>
            </div>
          </div>
          <p className="em-exp-item__desc body-md">{exp.description}</p>
          <button
            className="em-exp-item__toggle"
            onClick={() => setExpanded(!expanded)}
            aria-expanded={expanded}
          >
            <span>{expanded ? 'Hide' : 'View'} Achievements</span>
            <svg
              className={`em-exp-item__toggle-icon ${expanded ? 'em-exp-item__toggle-icon--open' : ''}`}
              width="14" height="14" viewBox="0 0 14 14" fill="none"
            >
              <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <div className={`em-exp-item__achievements ${expanded ? 'em-exp-item__achievements--open' : ''}`}>
            <ul className="em-exp-item__list">
              {exp.achievements.map((ach, i) => (
                <li key={i} className="em-exp-item__list-item">
                  <span className="em-exp-item__bullet">—</span>
                  <span className="body-sm">{ach}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
