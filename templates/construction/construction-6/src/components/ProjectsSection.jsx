import React, { useState } from 'react';

export default function ProjectsSection({ projects }) {
  const [filter, setFilter] = useState('ALL');

  const fallbackProjects = [
    {
      id: 'proj-1',
      name: 'The Summit Glass Pavilion',
      category: 'ALPINE RESIDENTIAL',
      location: 'Zermatt, Swiss Alps',
      scale: '8,400 sq ft',
      image: './assets/images/arcstone-villa.jpg',
      description: 'Cantilevered luxury chalet with floor-to-ceiling glass and alpine thermal design.'
    },
    {
      id: 'proj-2',
      name: 'Aethelgard High-Rise',
      category: 'COMMERCIAL TOWER',
      location: 'Metropolis Core',
      scale: '78 Floors',
      image: './assets/images/titan-hero.jpg',
      description: 'Futuristic commercial core with diagrid aerodynamic framing.'
    },
    {
      id: 'proj-3',
      name: 'Harbor Cable-Stayed Span',
      category: 'INFRASTRUCTURE',
      location: 'Coastal Expressway',
      scale: '2.4 km',
      image: './assets/images/titan-bridge.jpg',
      description: 'Seismic-isolated deepwater cable-stayed bridge.'
    }
  ];

  const projectList = (projects && projects.length > 0) ? projects : fallbackProjects;

  const categories = ['ALL', 'ALPINE RESIDENTIAL', 'COMMERCIAL TOWER', 'INFRASTRUCTURE'];

  const filtered = filter === 'ALL' 
    ? projectList 
    : projectList.filter(p => p.category.toUpperCase().includes(filter) || filter.includes(p.category.toUpperCase()));

  return (
    <section className="arcstone-section bg-darker" id="projects">
      <div className="container">
        <div className="section-header-center">
          <span className="section-subtitle">CURATED PORTFOLIO</span>
          <h2 className="section-title">Iconic Landmark Projects</h2>
          <p className="section-desc-center">Explore our recent architectural residences and bespoke commercial structures, served live from Spring Boot.</p>
          
          {/* Category Filter Pills */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '24px', flexWrap: 'wrap' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                style={{
                  padding: '8px 18px',
                  borderRadius: '99px',
                  border: filter === cat ? '1px solid var(--color-sage)' : '1px solid rgba(255,255,255,0.1)',
                  background: filter === cat ? 'var(--color-sage)' : 'rgba(255,255,255,0.04)',
                  color: filter === cat ? '#ffffff' : 'var(--color-text-muted)',
                  cursor: 'pointer',
                  fontWeight: '600',
                  fontSize: '0.8rem',
                  letterSpacing: '0.05em',
                  transition: 'all 0.25s ease'
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="projects-grid" style={{ marginTop: '40px' }}>
          {filtered.map((project) => (
            <div className="arcstone-project-card" key={project.id}>
              <div className="project-media-box">
                <img src={project.image} alt={project.name} />
                <div className="project-hover-overlay">
                  <span className="project-category">{project.category}</span>
                  <h3 className="project-name">{project.name}</h3>
                  <p>{project.location} • {project.scale}</p>
                  {project.description && (
                    <p style={{ fontSize: '0.8rem', color: '#cbd5e1', marginTop: '6px' }}>{project.description}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
