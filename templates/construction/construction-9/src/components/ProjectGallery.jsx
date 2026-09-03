import React, { useState, useEffect } from 'react';
import { fetchProjects } from '../services/api';

export default function ProjectGallery({ onSelectProject }) {
  const [projects, setProjects] = useState([]);
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const data = await fetchProjects();
      setProjects(data);
      setLoading(false);
    }
    load();
  }, []);

  const categories = ['ALL', 'Monoliths', 'Mega-Structures', 'Pavilions', 'Infrastructure'];

  const filteredProjects = activeCategory === 'ALL'
    ? projects
    : projects.filter(p => p.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <section id="projects" className="section-padding" style={{ background: 'var(--bg-surface-elevated)', position: 'relative' }}>
      <div className="container">
        {/* Header & Filter Controls */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          marginBottom: '48px',
          flexWrap: 'wrap',
          gap: '24px'
        }}>
          <div className="section-header" style={{ marginBottom: 0 }}>
            <span className="brutalist-badge">
              // ARCHITECTURAL CATALOG
            </span>
            <h2 className="section-title">
              MONOLITHS & LANDMARKS
            </h2>
            <p className="section-desc" style={{ marginBottom: 0 }}>
              Engineered monolithic brutalist portfolios spanning towering urban shafts to subterranean high-altitude research bunkers.
            </p>
          </div>

          {/* Category Filters */}
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '10px 18px',
                  background: activeCategory === cat ? 'var(--accent-orange)' : 'var(--bg-surface)',
                  color: activeCategory === cat ? '#0c0d10' : 'var(--text-main)',
                  border: '1px solid',
                  borderColor: activeCategory === cat ? 'var(--accent-orange)' : 'var(--border-strong)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.8rem',
                  fontWeight: 800,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  transition: 'all 0.2s ease'
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))',
          gap: '32px'
        }}>
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              onClick={() => onSelectProject(proj)}
              style={{
                background: 'var(--bg-surface)',
                border: '1px solid var(--border-strong)',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                display: 'flex',
                flexDirection: 'column'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.borderColor = 'var(--accent-orange)';
                e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'var(--border-strong)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Image Container */}
              <div style={{
                position: 'relative',
                width: '100%',
                height: '280px',
                overflow: 'hidden',
                background: '#1a1c22'
              }}>
                <img
                  src={proj.image}
                  alt={proj.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease'
                  }}
                  onMouseEnter={e => e.target.style.transform = 'scale(1.05)'}
                  onMouseLeave={e => e.target.style.transform = 'scale(1.0)'}
                />
                <div style={{
                  position: 'absolute',
                  top: '12px',
                  left: '12px',
                  background: 'rgba(12, 13, 16, 0.85)',
                  padding: '4px 10px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  color: 'var(--accent-cyan)',
                  border: '1px solid rgba(0, 229, 255, 0.4)'
                }}>
                  {proj.category.toUpperCase()}
                </div>

                <div style={{
                  position: 'absolute',
                  bottom: '12px',
                  right: '12px',
                  background: 'var(--accent-orange)',
                  color: '#0c0d10',
                  padding: '4px 10px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  fontWeight: 800
                }}>
                  INSPECT BLUEPRINT ↗
                </div>
              </div>

              {/* Card Body */}
              <div style={{
                padding: '28px',
                display: 'flex',
                flexDirection: 'column',
                flexGrow: 1,
                justifyContent: 'space-between'
              }}>
                <div>
                  <div style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    color: 'var(--accent-orange)',
                    letterSpacing: '0.08em',
                    marginBottom: '8px'
                  }}>
                    {proj.location}
                  </div>

                  <h3 style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.4rem',
                    fontWeight: 800,
                    marginBottom: '12px',
                    lineHeight: 1.2
                  }}>
                    {proj.title}
                  </h3>

                  <p style={{
                    fontSize: '0.92rem',
                    color: 'var(--text-muted)',
                    lineHeight: 1.6,
                    marginBottom: '20px'
                  }}>
                    {proj.summary}
                  </p>
                </div>

                <div style={{
                  paddingTop: '16px',
                  borderTop: '1px solid var(--border-subtle)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.78rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  color: 'var(--text-dim)'
                }}>
                  <span>{proj.height}</span>
                  <span style={{ color: 'var(--text-main)', fontWeight: 700 }}>{proj.concreteGrade.split(' ')[0]}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
