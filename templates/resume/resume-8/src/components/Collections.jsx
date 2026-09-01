import React from 'react';
import { ArrowUpRight, Eye } from 'lucide-react';
import { collectionsData } from '../data/portfolioData';

export default function Collections({ onSelectCollection }) {
  return (
    <section id="collections" className="editorial-section" style={{ paddingTop: '8rem' }}>
      <div className="section-label">
        <span>02 / COLLECTIONS</span>
      </div>

      <div className="collections-header">
        <h2 className="collections-title">Selected Work</h2>
        <p style={{ marginTop: '0.5rem', color: 'var(--text-light)', fontSize: '0.9rem', letterSpacing: '0.1em' }}>
          FIVE ORIGINAL FICTIONAL FASHION CONCEPTS
        </p>
      </div>

      <div className="collections-container">
        {collectionsData.map((col) => {
          return (
            <div key={col.id} className="collection-block">
              <span className="collection-number-bg">{col.number}</span>

              {/* COLLECTION 01: Horizontal Editorial Spread */}
              {col.layoutStyle === 'horizontal-spread' && (
                <div className="layout-horizontal-spread">
                  <div className="collection-info">
                    <span className="collection-season">{col.season} — {col.year}</span>
                    <h3 className="collection-name">{col.name}</h3>
                    <p className="collection-concept">{col.concept}</p>
                    
                    <div className="collection-meta-list">
                      <div className="meta-row">
                        <span className="meta-key">Type</span>
                        <span className="meta-val">{col.type}</span>
                      </div>
                      <div className="meta-row">
                        <span className="meta-key">Materials</span>
                        <span className="meta-val">{col.materials}</span>
                      </div>
                      <div className="meta-row">
                        <span className="meta-key">Looks</span>
                        <span className="meta-val">{col.lookCount} Looks</span>
                      </div>
                    </div>

                    <button 
                      onClick={() => onSelectCollection(col)} 
                      className="btn-editorial-primary"
                      style={{ alignSelf: 'flex-start' }}
                    >
                      <span>Explore Collection</span>
                      <ArrowUpRight size={16} />
                    </button>
                  </div>

                  <div className="spread-image-wrapper">
                    <img src={col.heroImage} alt={col.name} className="spread-img" />
                  </div>
                </div>
              )}

              {/* COLLECTION 02: Vertical Sequence */}
              {col.layoutStyle === 'vertical-sequence' && (
                <div className="layout-vertical-sequence">
                  <div className="vertical-image-stack">
                    <div className="sequence-img-card">
                      <img src={col.heroImage} alt={col.name} className="sequence-img" />
                    </div>
                  </div>

                  <div className="collection-info" style={{ paddingTop: '2rem' }}>
                    <span className="collection-season">{col.season} — {col.year}</span>
                    <h3 className="collection-name">{col.name}</h3>
                    <p className="collection-concept">{col.concept}</p>
                    
                    <div className="collection-meta-list">
                      <div className="meta-row">
                        <span className="meta-key">Materials</span>
                        <span className="meta-val">{col.materials}</span>
                      </div>
                      <div className="meta-row">
                        <span className="meta-key">Design Notes</span>
                        <span className="meta-val">{col.notes}</span>
                      </div>
                    </div>

                    <button 
                      onClick={() => onSelectCollection(col)} 
                      className="btn-editorial-secondary"
                      style={{ alignSelf: 'flex-start' }}
                    >
                      <span>View Collection Specs</span>
                      <Eye size={16} />
                    </button>
                  </div>
                </div>
              )}

              {/* COLLECTION 03: Details Grid */}
              {col.layoutStyle === 'details-grid' && (
                <div className="layout-details-grid">
                  <div className="details-grid-header">
                    <span className="collection-season">{col.season} — {col.year}</span>
                    <h3 className="collection-name">{col.name}</h3>
                    <p className="collection-concept">{col.concept}</p>
                  </div>

                  <div className="details-gallery-grid">
                    <div className="details-grid-item hero-item">
                      <img src={col.heroImage} alt={col.name} className="details-grid-img" />
                    </div>
                    {col.gallery.slice(0, 2).map((img, i) => (
                      <div key={i} className="details-grid-item">
                        <img src={img} alt={`${col.name} look ${i+1}`} className="details-grid-img" />
                      </div>
                    ))}
                  </div>

                  <button 
                    onClick={() => onSelectCollection(col)} 
                    className="btn-editorial-primary"
                    style={{ alignSelf: 'flex-start' }}
                  >
                    <span>View Modular Details</span>
                    <ArrowUpRight size={16} />
                  </button>
                </div>
              )}

              {/* COLLECTION 04: Split Story Layout */}
              {col.layoutStyle === 'split-story' && (
                <div className="layout-split-story">
                  <div className="split-story-left">
                    <span className="collection-season">{col.season} — {col.year}</span>
                    <h3 className="collection-name">{col.name}</h3>
                    <p className="collection-concept">{col.concept}</p>
                    
                    <div style={{ marginTop: '2rem', marginBottom: '2rem' }}>
                      <span className="meta-key">Materials</span>
                      <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', marginTop: '0.2rem' }}>
                        {col.materials}
                      </p>
                    </div>

                    <button 
                      onClick={() => onSelectCollection(col)} 
                      className="btn-editorial-primary"
                      style={{ alignSelf: 'flex-start' }}
                    >
                      <span>Read Story</span>
                      <ArrowUpRight size={16} />
                    </button>
                  </div>

                  <div className="split-story-right">
                    <img src={col.heroImage} alt={col.name} className="split-story-img" />
                  </div>
                </div>
              )}

              {/* COLLECTION 05: Typography Floating Layout */}
              {col.layoutStyle === 'typography-floating' && (
                <div className="layout-typography-floating">
                  <div className="floating-typography-box">
                    <span className="collection-season">{col.season} — {col.year}</span>
                    <h3 className="floating-big-title">{col.name}</h3>
                    <p className="collection-concept">{col.concept}</p>
                    
                    <div style={{ marginTop: '2rem', marginBottom: '2.5rem' }}>
                      <p style={{ fontStyle: 'italic', color: 'var(--text-muted)' }}>
                        "{col.notes}"
                      </p>
                    </div>

                    <button 
                      onClick={() => onSelectCollection(col)} 
                      className="btn-editorial-secondary"
                      style={{ alignSelf: 'flex-start' }}
                    >
                      <span>Explore Sculptures</span>
                      <ArrowUpRight size={16} />
                    </button>
                  </div>

                  <div className="floating-visual-card">
                    <img src={col.heroImage} alt={col.name} className="floating-img" />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
