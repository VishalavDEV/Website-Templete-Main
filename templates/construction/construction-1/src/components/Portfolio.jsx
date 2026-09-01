import React, { useState } from 'react';

const projects = [
  {
    id: 1,
    category: 'cranes',
    title: 'Apex Tower 1,200T Tandem Lift',
    location: 'Metropolis Downtown, NY',
    stat: '1,200 Tonnes Lifted',
    image: './assets/images/crane-sunset-hero.jpg',
    tags: ['Lattice Boom', 'Dual Crane Tandem', 'Structural Steel']
  },
  {
    id: 2,
    category: 'civil',
    title: 'Pacific Suspension Bridge Piling',
    location: 'Harbor Gateway, CA',
    stat: '85m Subterranean Depth',
    image: './assets/images/service-masonry.jpg',
    tags: ['Deep Caissons', 'Secant Wall', 'High-Early Concrete']
  },
  {
    id: 3,
    category: 'structural',
    title: 'Horizon Center Skyscraper Framing',
    location: 'Financial District, TX',
    stat: '64 Stories / 280m',
    image: './assets/images/service-planning.jpg',
    tags: ['Skyscraper', 'Curtain Wall', 'BIM Clash Free']
  },
  {
    id: 4,
    category: 'energy',
    title: 'Coastal Offshore Wind Turbine Rigging',
    location: 'Atlantic Energy Zone',
    stat: '14MW Turbines',
    image: './assets/images/service-craft.jpg',
    tags: ['Offshore Rigging', 'Heavy Barges', 'Clean Power']
  }
];

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('all');

  const filteredProjects = activeTab === 'all'
    ? projects
    : projects.filter(p => p.category === activeTab);

  return (
    <section className="portfolio-section" id="portfolio">
      <div className="container">
        <div className="portfolio-header-flex">
          <div>
            <div className="section-badge">FEATURED LANDMARKS</div>
            <h2 className="section-title">ENGINEERED TO PERFECTION</h2>
            <div className="heading-orange-bar"></div>
          </div>

          <div className="portfolio-filters">
            <button
              className={`filter-btn ${activeTab === 'all' ? 'active' : ''}`}
              onClick={() => setActiveTab('all')}
            >
              ALL PROJECTS
            </button>
            <button
              className={`filter-btn ${activeTab === 'cranes' ? 'active' : ''}`}
              onClick={() => setActiveTab('cranes')}
            >
              CRANES & RIGGING
            </button>
            <button
              className={`filter-btn ${activeTab === 'civil' ? 'active' : ''}`}
              onClick={() => setActiveTab('civil')}
            >
              CIVIL FOUNDATIONS
            </button>
            <button
              className={`filter-btn ${activeTab === 'structural' ? 'active' : ''}`}
              onClick={() => setActiveTab('structural')}
            >
              HIGH-RISE STRUCTURAL
            </button>
            <button
              className={`filter-btn ${activeTab === 'energy' ? 'active' : ''}`}
              onClick={() => setActiveTab('energy')}
            >
              ENERGY & INFRASTRUCTURE
            </button>
          </div>
        </div>

        <div className="portfolio-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="portfolio-card">
              <div className="portfolio-img-wrap">
                <img src={project.image} alt={project.title} loading="lazy" />
                <div className="portfolio-stat-badge">{project.stat}</div>
              </div>
              <div className="portfolio-info">
                <div className="portfolio-location">📍 {project.location}</div>
                <h3 className="portfolio-title">{project.title}</h3>
                <div className="portfolio-tags">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="tag-chip">{tag}</span>
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
