import React from 'react';
import { X, Sparkles, Utensils, Calendar, Layers } from 'lucide-react';

export default function ConceptModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close detail modal">
          <X size={20} />
        </button>

        <div style={{ marginBottom: '1.5rem' }}>
          <div style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-wine)', marginBottom: '0.5rem' }}>
            CULINARY CONCEPT DEEP DIVE &bull; PROJECT {project.number}
          </div>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', color: 'var(--color-charcoal)' }}>
            {project.title}
          </h2>
          <div style={{ display: 'flex', gap: '1.5rem', marginTop: '0.5rem', fontSize: '0.85rem', color: 'var(--color-charcoal-muted)' }}>
            <span><Calendar size={14} style={{ display: 'inline', marginRight: '4px' }} /> {project.year}</span>
            <span><Layers size={14} style={{ display: 'inline', marginRight: '4px' }} /> {project.type}</span>
          </div>
        </div>

        <div style={{ border: 'var(--border-fine)', marginBottom: '1.5rem', overflow: 'hidden' }}>
          <img src={project.image} alt={project.title} style={{ width: '100%', maxHeight: '380px', objectFit: 'cover' }} />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <div>
            <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--color-charcoal)' }}>
              Concept & Philosophy
            </h4>
            <p style={{ fontSize: '0.95rem', lineHeight: '1.7', color: 'var(--color-charcoal-light)' }}>
              {project.longDescription}
            </p>
          </div>

          <div style={{ padding: '1.25rem', backgroundColor: 'var(--bg-cream)', borderLeft: '3px solid var(--color-wine)' }}>
            <h4 style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-wine)', marginBottom: '0.5rem' }}>
              Culinary Approach & Technique
            </h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--color-charcoal-light)' }}>
              {project.approach}
            </p>
          </div>

          <div>
            <h4 style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-charcoal-muted)', marginBottom: '0.75rem' }}>
              Core Plating & Ingredient Elements
            </h4>
            <div className="ingredients-pills">
              {project.keyIngredients.map((ing, idx) => (
                <span key={idx} className="ingredient-tag">
                  <Utensils size={12} style={{ display: 'inline', marginRight: '6px', color: 'var(--color-wine)' }} />
                  {ing}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
