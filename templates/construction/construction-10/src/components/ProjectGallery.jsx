import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function ProjectGallery({ projects, onSelectProject }) {
  const [filter, setFilter] = useState('ALL');

  const categories = ['ALL', 'Supertall Aerodynamic Towers', 'Kinetic Responsive Envelopes', 'Cultural & Civic Pavilions', 'Sky-Habitats & Penthouses', 'Sustainable Living Towers'];

  const filteredProjects = filter === 'ALL' ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="projects" style={{ padding: '90px 0', position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '20px', marginBottom: '44px' }}>
          <div>
            <div className="section-tag" style={{ marginBottom: '14px' }}>
              Portfolio
            </div>
            <h2 className="section-title" style={{ marginBottom: '10px' }}>
              Selected Works
            </h2>
            <p className="section-desc">
              A curated collection of sustainable towers, cultural pavilions, and responsive architectural envelopes.
            </p>
          </div>

          {/* Filter Pills */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                style={{
                  background: filter === cat ? 'var(--accent-primary)' : 'var(--bg-surface)',
                  color: filter === cat ? 'var(--accent-primary-text)' : 'var(--text-muted)',
                  border: '1px solid',
                  borderColor: filter === cat ? 'var(--accent-primary)' : 'var(--border-subtle)',
                  borderRadius: '4px',
                  padding: '7px 14px',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                {cat === 'ALL' ? 'All Works' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '32px' }}>
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="aero-card"
              style={{
                padding: 0,
                display: 'flex',
                flexDirection: 'column',
                cursor: 'pointer',
                overflow: 'hidden'
              }}
              onClick={() => onSelectProject(project)}
            >
              {/* Image Container */}
              <div style={{ position: 'relative', height: '260px', overflow: 'hidden' }}>
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.4s ease'
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.04)')}
                  onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                />

                <div style={{ position: 'absolute', top: '14px', left: '14px' }}>
                  <span
                    style={{
                      background: 'var(--bg-glass)',
                      backdropFilter: 'blur(8px)',
                      border: '1px solid var(--border-subtle)',
                      color: 'var(--text-main)',
                      fontSize: '0.74rem',
                      fontFamily: 'var(--font-mono)',
                      fontWeight: '600',
                      padding: '4px 10px',
                      borderRadius: '4px'
                    }}
                  >
                    {project.height}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <div style={{ fontSize: '0.74rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '600' }}>
                  {project.location}
                </div>

                <h3 style={{ fontSize: '1.2rem', marginBottom: '10px', lineHeight: 1.3, color: 'var(--text-main)' }}>
                  {project.title}
                </h3>

                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '20px', flexGrow: 1 }}>
                  {project.summary}
                </p>

                {/* Specs Row */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', padding: '12px 14px', background: 'var(--card-subtle-bg)', borderRadius: '6px', border: '1px solid var(--border-subtle)', marginBottom: '18px' }}>
                  <div>
                    <div style={{ fontSize: '0.68rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)' }}>
                      BUILT AREA
                    </div>
                    <div style={{ fontSize: '0.88rem', fontFamily: 'var(--font-mono)', fontWeight: 700, color: 'var(--text-main)', marginTop: '2px' }}>
                      {project.grossFloorArea}
                    </div>
                  </div>

                  <div>
                    <div style={{ fontSize: '0.68rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)' }}>
                      SOLAR HARVEST
                    </div>
                    <div style={{ fontSize: '0.88rem', fontFamily: 'var(--font-mono)', fontWeight: 700, color: 'var(--text-main)', marginTop: '2px' }}>
                      {project.energyHarvest}
                    </div>
                  </div>
                </div>

                {/* Link */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: 'var(--text-main)', fontSize: '0.86rem', fontWeight: 600 }}>
                  <span>View Project Details</span>
                  <ArrowUpRight size={16} />
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
