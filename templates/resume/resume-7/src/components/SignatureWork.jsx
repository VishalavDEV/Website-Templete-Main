import React, { useState } from 'react';
import { ArrowUpRight, Utensils } from 'lucide-react';
import { PROJECTS } from '../data/culinaryData';
import ConceptModal from './ConceptModal';

export default function SignatureWork() {
  const [selectedProject, setSelectedProject] = useState(null);

  const getLayoutClass = (layoutType) => {
    switch (layoutType) {
      case 'horizontal': return 'project-layout-horizontal';
      case 'vertical': return 'project-layout-vertical';
      case 'split': return 'project-layout-split';
      case 'full-width': return 'project-layout-full-width';
      case 'overlapping': return 'project-layout-overlapping';
      default: return 'project-layout-horizontal';
    }
  };

  return (
    <section id="signature-work" className="signature-section">
      <div className="container">
        <span className="section-label">02 / SIGNATURE WORK</span>
        <h2 className="section-title">Selected Culinary Concepts</h2>
        <p style={{ maxWidth: '640px', color: 'var(--color-charcoal-light)', marginBottom: '3rem' }}>
          Each concept represents a dedicated study in micro-seasonality, wood smoke dynamics, botanical extractions, or ocean halophytes.
        </p>

        <div className="projects-stack">
          {PROJECTS.map((project) => {
            const layoutClass = getLayoutClass(project.layoutType);
            
            return (
              <div key={project.id} className="project-card">
                <div className={layoutClass}>
                  <div className="project-img-wrapper">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="project-img" 
                    />
                    <div style={{ position: 'absolute', bottom: '1rem', right: '1rem', backgroundColor: 'var(--bg-primary)', padding: '0.4rem 0.8rem', fontSize: '0.7rem', letterSpacing: '0.15em', fontWeight: 600 }}>
                      CONCEPT {project.number}
                    </div>
                  </div>

                  <div className="project-content">
                    <div className="project-header-meta">
                      <span>PROJECT {project.number}</span>
                      <span>YEAR / {project.year}</span>
                    </div>

                    <h3 className="project-title">{project.title}</h3>
                    <div className="project-type">{project.type}</div>
                    
                    <p className="project-desc">{project.description}</p>

                    <div className="ingredients-pills">
                      {project.keyIngredients.map((ing, idx) => (
                        <span key={idx} className="ingredient-tag">
                          <Utensils size={12} style={{ display: 'inline', marginRight: '4px', color: 'var(--color-wine)' }} />
                          {ing}
                        </span>
                      ))}
                    </div>

                    <button 
                      className="btn-secondary" 
                      onClick={() => setSelectedProject(project)}
                      style={{ padding: '0.7rem 1.5rem', fontSize: '0.75rem' }}
                    >
                      Explore Concept <ArrowUpRight size={15} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {selectedProject && (
        <ConceptModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </section>
  );
}
