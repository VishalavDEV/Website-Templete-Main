import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { categoriesData, projectsData } from '../data/content';
import ProjectModal from './ProjectModal';

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeProject, setActiveProject] = useState(null);

  const filteredProjects = activeCategory === "all"
    ? projectsData
    : projectsData.filter(p => p.category === activeCategory);

  return (
    <section id="portfolio" className="section" style={{ background: 'transparent' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="section-tag">
            PORTFOLIO & CASE STUDIES
          </div>
          <h2 className="section-title">
            Featured <span className="text-gradient">Benchmark Projects</span>
          </h2>
          <p className="section-subtitle">
            Explore our portfolio of high-impact web applications, brand design systems, AI products, and spatial interfaces.
          </p>
        </div>

        {/* Category Filter Buttons */}
        <div 
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            flexWrap: 'wrap',
            marginBottom: '3.5rem'
          }}
        >
          {categoriesData.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                style={{
                  padding: '0.55rem 1.15rem',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  transition: 'all 0.25s ease',
                  background: isActive ? 'var(--gradient-primary)' : 'rgba(255, 255, 255, 0.8)',
                  color: isActive ? '#ffffff' : 'var(--text-main)',
                  boxShadow: isActive ? '0 6px 20px rgba(0, 102, 255, 0.25)' : 'var(--shadow-sm)',
                  border: isActive ? 'none' : '1px solid var(--border-light)'
                }}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Filtered Project Cards Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.75rem'
          }}
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card"
              style={{
                background: '#ffffff',
                display: 'flex',
                flexDirection: 'column',
                cursor: 'pointer',
                transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
              onClick={() => setActiveProject(project)}
            >
              {/* Project Card AI Image Graphic Banner */}
              <div 
                style={{
                  height: 'clamp(180px, 26vh, 240px)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  loading="lazy"
                  decoding="async"
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover',
                    transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
                  }} 
                  className="portfolio-img"
                />

                {/* Dark gradient overlay for text readability */}
                <div 
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(to top, rgba(15, 23, 42, 0.75) 0%, rgba(15, 23, 42, 0.1) 60%, transparent 100%)',
                    pointerEvents: 'none'
                  }}
                />

                {/* Top Pill Tag */}
                <div style={{ position: 'absolute', top: '1.25rem', left: '1.25rem', display: 'flex', gap: '0.5rem', zIndex: 2 }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, padding: '0.3rem 0.85rem', borderRadius: '12px', background: 'rgba(255, 255, 255, 0.95)', color: 'var(--text-main)', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
                    {project.categoryLabel}
                  </span>
                </div>

                {/* Right Top Action Arrow */}
                <div 
                  style={{
                    position: 'absolute',
                    top: '1.25rem',
                    right: '1.25rem',
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.95)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--text-main)',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                    zIndex: 2
                  }}
                >
                  <ArrowUpRight size={18} />
                </div>

                {/* Banner Bottom Title */}
                <div style={{ position: 'absolute', bottom: '1.25rem', left: '1.25rem', right: '1.25rem', zIndex: 2 }}>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#ffffff', textShadow: '0 2px 8px rgba(0,0,0,0.4)' }}>
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.65rem' }}>
                    <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--accent-blue)' }}>
                      {project.client}
                    </span>
                    <span style={{ fontSize: '0.785rem', fontWeight: 700, padding: '0.2rem 0.6rem', borderRadius: '8px', background: 'rgba(16, 185, 129, 0.12)', color: 'var(--accent-emerald)' }}>
                      ⚡ {project.metrics}
                    </span>
                  </div>

                  <h4 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text-main)' }}>
                    {project.tagline}
                  </h4>

                  <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                    {project.description}
                  </p>
                </div>

                {/* Footer Link */}
                <div style={{ paddingTop: '1rem', borderTop: '1px solid var(--border-light)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.85rem', fontWeight: 700, color: 'var(--accent-blue)' }}>
                  <span>View Full Case Study</span>
                  <ArrowUpRight size={16} />
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Detail Modal */}
        <ProjectModal 
          project={activeProject} 
          onClose={() => setActiveProject(null)} 
        />

      </div>
    </section>
  );
}
