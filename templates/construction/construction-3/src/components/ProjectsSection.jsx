import React, { useState, useEffect } from 'react';
import { fetchProjects } from '../api/client';

export default function ProjectsSection({ onOpenVideoModal }) {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects().then(data => {
      if (data) setProjects(data);
    });
  }, []);

  return (
    <section className="futurix-projects-section" id="projects">
      <div className="container">
        <div className="section-title-box">
          <div className="smart-tech-pill">
            <span>PORTFOLIO SHOWCASE</span>
            <span className="cyber-slashes">///</span>
          </div>
          <h2>Landmark Structures & Smart BIM Engineering</h2>
        </div>

        <div className="projects-grid">
          {projects.map((proj) => (
            <div className="project-card" key={proj.id}>
              <div className="project-image-box" onClick={onOpenVideoModal} style={{ cursor: 'pointer' }}>
                <img src={proj.image} alt={proj.title} />
                <span className="project-status-badge">{proj.status}</span>
              </div>
              <div className="project-body">
                <span className="project-category">{proj.category}</span>
                <h3 className="project-title">{proj.title}</h3>
                <p className="project-desc">{proj.description}</p>
                <div className="project-meta-row">
                  <span>📐 {proj.area}</span>
                  <span>⏱️ {proj.completionTime}</span>
                </div>
                <div className="project-tags">
                  {proj.techTags?.map((tag, i) => (
                    <span className="tech-tag-pill" key={i}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
