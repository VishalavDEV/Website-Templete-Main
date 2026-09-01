import React from 'react';
import { projectsData } from '../data/portfolioData';

export default function Projects() {
  return (
    <section id="projects" className="editorial-section">
      <div className="section-label">
        <span>07 / PROJECTS</span>
      </div>

      <div className="collections-header">
        <h2 className="collections-title">Beyond the Collection</h2>
        <p style={{ color: 'var(--text-light)', fontSize: '0.9rem', letterSpacing: '0.15em', marginTop: '0.5rem' }}>
          EXPERIMENTAL EXHIBITIONS & MATERIAL RESEARCH INSTALLATIONS
        </p>
      </div>

      <div className="projects-poster-grid">
        {projectsData.map((proj, idx) => (
          <div key={idx} className="project-poster-card">
            <div>
              <span className="poster-year">{proj.year}</span>
              <h3 className="poster-title">{proj.title}</h3>
              <p className="poster-subtitle">{proj.subtitle} — {proj.location}</p>
              <p className="poster-desc">{proj.description}</p>
            </div>

            <div className="poster-tag">
              <span>{proj.tag}</span>
            </div>
          </div>
        ))}
      </div>

      <p style={{ fontSize: '0.75rem', color: 'var(--text-light)', letterSpacing: '0.1em', marginTop: '2.5rem', textTransform: 'uppercase' }}>
        * All projects and events displayed are fictional demonstration content.
      </p>
    </section>
  );
}
