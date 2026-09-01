import React, { useState } from 'react';
import { INGREDIENTS } from '../data/culinaryData';
import { Sparkles, Info, X, Compass } from 'lucide-react';

export default function IngredientExplorer() {
  const [activeIngredient, setActiveIngredient] = useState(null);

  return (
    <section id="ingredients" className="ingredients-section">
      <div className="container">
        <span className="section-label">INTERACTIVE CULINARY PALETTE</span>
        <h2 className="section-title">Ingredients of Inspiration</h2>
        <p style={{ maxWidth: '640px', color: 'var(--color-charcoal-light)', marginBottom: '2rem' }}>
          Select or hover any raw botanical to reveal its seasonal peak, texture profile, and culinary application in Lucien Moreau's menus.
        </p>

        <div className="ingredients-grid">
          {INGREDIENTS.map((ing) => (
            <div 
              key={ing.id} 
              className="ingredient-card"
              onClick={() => setActiveIngredient(ing)}
            >
              <div className="ingredient-thumb-wrapper">
                <img 
                  src={ing.image} 
                  alt={ing.name} 
                  className="ingredient-thumb" 
                />
              </div>

              <div className="ingredient-season-tag">{ing.season}</div>
              <h3 className="ingredient-card-title">
                {ing.name}
              </h3>
              
              <p className="ingredient-flavor-direction">{ing.flavorDirection}</p>

              <div className="ingredient-click-hint">
                <Sparkles size={14} /> Reveal Inspiration Details
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Ingredient Detail Modal */}
      {activeIngredient && (
        <div className="modal-overlay" onClick={() => setActiveIngredient(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '650px' }}>
            <button className="modal-close-btn" onClick={() => setActiveIngredient(null)}>
              <X size={20} />
            </button>

            <div style={{ display: 'grid', gridTemplateColumns: '180px 1fr', gap: '2rem', alignItems: 'center' }}>
              <div style={{ border: 'var(--border-fine)', overflow: 'hidden' }}>
                <img src={activeIngredient.image} alt={activeIngredient.name} style={{ width: '100%', aspectRatio: '1/1', objectFit: 'cover' }} />
              </div>

              <div>
                <span className="section-label">{activeIngredient.season}</span>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', marginBottom: '0.75rem', color: 'var(--color-charcoal)' }}>
                  {activeIngredient.name}
                </h3>
                <p style={{ fontSize: '0.95rem', lineHeight: '1.6', color: 'var(--color-charcoal-light)', marginBottom: '1.25rem' }}>
                  {activeIngredient.inspiration}
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.85rem', borderTop: 'var(--border-fine)', paddingTop: '1rem' }}>
                  <div>
                    <strong style={{ color: 'var(--color-charcoal)' }}>Texture: </strong>
                    <span style={{ color: 'var(--color-charcoal-muted)' }}>{activeIngredient.texture}</span>
                  </div>
                  <div>
                    <strong style={{ color: 'var(--color-charcoal)' }}>Flavor Vector: </strong>
                    <span style={{ color: 'var(--color-wine)' }}>{activeIngredient.flavorDirection}</span>
                  </div>
                  <div>
                    <strong style={{ color: 'var(--color-charcoal)' }}>Featured In: </strong>
                    <span style={{ color: 'var(--color-olive)' }}>{activeIngredient.relatedConcept}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
