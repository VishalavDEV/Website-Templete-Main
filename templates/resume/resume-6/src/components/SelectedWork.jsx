import React, { useState } from 'react';
import { projects } from '../data.js';
import { useScrollAnimation } from '../hooks/useScrollAnimation.js';
import './SelectedWork.css';

export default function SelectedWork() {
  const { ref: headRef, isVisible: headVisible } = useScrollAnimation(0.1);

  return (
    <section id="work" className="em-work section-padding">
      <div className="container">
        <div ref={headRef} className={`em-work__header fade-up ${headVisible ? 'visible' : ''}`}>
          <span className="section-label">03 — Selected Work</span>
          <div className="divider" style={{ marginTop: '1rem' }}></div>
          <div className={`em-work__header-row fade-up delay-100 ${headVisible ? 'visible' : ''}`}>
            <h2 className="em-work__title">Portfolio &<br /><em>Case Studies</em></h2>
            <p className="em-work__subtitle body-md">
              A curated selection of brand identity, editorial,<br />and cultural experience projects.
            </p>
          </div>
        </div>
        <div className="em-work__grid">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }) {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const [hovered, setHovered] = useState(false);

  const layoutClasses = ['em-card--full', 'em-card--half', 'em-card--half', 'em-card--two-thirds', 'em-card--one-third'];
  const layoutClass = layoutClasses[index % layoutClasses.length];

  return (
    <article
      ref={ref}
      className={`em-project-card ${layoutClass} fade-up ${isVisible ? 'visible' : ''}`}
      style={{ transitionDelay: `${(index % 2) * 0.15}s` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="em-project-card__image-wrap img-hover-scale">
        <img
          src={project.image}
          alt={project.name}
          className="em-project-card__image"
          loading="lazy"
        />
        <div className={`em-project-card__overlay ${hovered ? 'em-project-card__overlay--visible' : ''}`}>
          <span className="em-project-card__cta">
            View Case Study
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </div>
      </div>
      <div className="em-project-card__meta">
        <div className="em-project-card__top">
          <span className="em-project-card__num section-label">{project.id}</span>
          <span className="em-project-card__year body-sm">{project.year}</span>
        </div>
        <h3 className="em-project-card__name">{project.name}</h3>
        <p className="em-project-card__category section-label">{project.category}</p>
        <p className="em-project-card__desc body-sm">{project.description}</p>
        <div className="em-project-card__tags">
          {project.tags.map((tag, i) => (
            <span key={i} className="em-project-card__tag">{tag}</span>
          ))}
        </div>
      </div>
    </article>
  );
}
