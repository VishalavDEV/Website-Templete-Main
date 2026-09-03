import React, { useState, useEffect } from 'react';
import { fetchProjects } from '../services/api';

export default function Portfolio() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects().then(data => setProjects(data));
  }, []);

  return (
    <section className="sectionWrapper" id="projects">
      <div className="sectionHeadingBox">
        <div className="sectionTag">BIOPHILIC LANDMARKS</div>
        <h2 className="sectionTitle">Featured Living Megastructures</h2>
        <p style={{ color: 'var(--text-body)', maxWidth: 640, margin: '14px auto 0 auto', fontSize: '0.95rem' }}>
          Realized architectural landmarks combining certified sustainably harvested mass-timber and living bio-walls.
        </p>
      </div>

      <div className="portfolioGrid">
        {projects.map(proj => (
          <div key={proj.id} className="portfolioCard">
            <div className="portfolioImgWrap">
              <img src={proj.img} alt={proj.title} className="portfolioImg" />
            </div>
            <div className="portfolioBody">
              <div>
                <h3 className="portfolioTitle">{proj.title}</h3>
                <p className="portfolioDesc">{proj.desc}</p>
              </div>
              <div className="portfolioMeta">
                <span>📍 {proj.location}</span>
                <span style={{ fontWeight: 800 }}>{proj.specs}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
