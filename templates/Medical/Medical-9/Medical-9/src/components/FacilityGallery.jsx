import React, { useState } from 'react';
import { FACILITIES } from '../data/medicalData';
import { Maximize2, X, Sparkles, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function FacilityGallery() {
  const [selectedFacility, setSelectedFacility] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = ['all', 'Operating Suites', 'Diagnostics', 'Patient Suites'];

  const filteredFacilities = activeCategory === 'all'
    ? FACILITIES
    : FACILITIES.filter((f) => f.category === activeCategory);

  return (
    <section id="facilities" style={{ padding: '5rem 0' }}>
      <div className="section-container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3rem auto' }}>
          <div className="badge-pill" style={{ marginBottom: '1rem' }}>
            <Sparkles size={14} />
            <span>State-of-the-Art Infrastructure</span>
          </div>
          <h2 className="heading-editorial" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
            Medical Facilities & <span className="gradient-text">Operating Suites</span>
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)' }}>
            Take a virtual tour through our Class 100 sterile operating environments, 7T MRI diagnostics, 
            and circadian-lit VIP patient suites.
          </p>
        </div>

        {/* Category Pills */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', marginBottom: '2.5rem' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={activeCategory === cat ? 'btn-primary' : 'btn-secondary'}
              style={{ padding: '0.5rem 1.25rem', fontSize: '0.85rem' }}
            >
              {cat === 'all' ? 'All Facilities' : cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
          gap: '2rem'
        }}>
          {filteredFacilities.map((fac) => (
            <div
              key={fac.id}
              className="glass-card"
              onClick={() => setSelectedFacility(fac)}
              style={{ cursor: 'pointer', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
            >
              <div style={{ position: 'relative', overflow: 'hidden' }}>
                <img
                  src={fac.image}
                  alt={fac.title}
                  style={{
                    width: '100%',
                    height: '240px',
                    objectFit: 'cover',
                    transition: 'transform 0.4s ease'
                  }}
                />
                <div style={{
                  position: 'absolute',
                  top: '12px',
                  right: '12px',
                  background: 'rgba(255, 255, 255, 0.88)',
                  backdropFilter: 'blur(8px)',
                  padding: '6px',
                  borderRadius: '50%',
                  color: 'var(--primary-cyan)'
                }}>
                  <Maximize2 size={16} />
                </div>
                <span style={{
                  position: 'absolute',
                  bottom: '12px',
                  left: '12px',
                  background: 'rgba(15, 23, 42, 0.75)',
                  color: 'white',
                  padding: '4px 10px',
                  borderRadius: '6px',
                  fontSize: '0.75rem',
                  fontWeight: '600'
                }}>
                  {fac.category}
                </span>
              </div>

              <div style={{ padding: '1.5rem', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: '700', color: 'var(--text-main)', marginBottom: '0.5rem' }}>
                    {fac.title}
                  </h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: '1.5', marginBottom: '1rem' }}>
                    {fac.description}
                  </p>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {fac.specs.map((spec, idx) => (
                    <span key={idx} style={{
                      fontSize: '0.72rem',
                      background: 'var(--bg-subtle)',
                      padding: '3px 8px',
                      borderRadius: '4px',
                      color: 'var(--text-muted)',
                      fontWeight: '600'
                    }}>
                      • {spec}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedFacility && (
        <div className="lightbox-backdrop" onClick={() => setSelectedFacility(null)}>
          <div
            className="glass-panel"
            onClick={(e) => e.stopPropagation()}
            style={{
              width: '100%',
              maxWidth: '850px',
              overflow: 'hidden',
              borderRadius: 'var(--radius-lg)',
              background: '#ffffff',
              boxShadow: 'var(--shadow-lg)'
            }}
          >
            <div style={{ position: 'relative' }}>
              <img
                src={selectedFacility.image}
                alt={selectedFacility.title}
                style={{ width: '100%', maxHeight: '480px', objectFit: 'cover', display: 'block' }}
              />
              <button
                onClick={() => setSelectedFacility(null)}
                style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  background: 'rgba(0,0,0,0.6)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '50%',
                  width: '36px',
                  height: '36px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <X size={20} />
              </button>
            </div>

            <div style={{ padding: '2rem' }}>
              <div className="badge-pill" style={{ marginBottom: '0.5rem' }}>
                {selectedFacility.category}
              </div>
              <h3 className="heading-editorial" style={{ fontSize: '1.8rem', marginBottom: '0.75rem' }}>
                {selectedFacility.title}
              </h3>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                {selectedFacility.description}
              </p>

              <div style={{ background: 'var(--bg-subtle)', padding: '1rem 1.25rem', borderRadius: 'var(--radius-sm)' }}>
                <div style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--text-main)', marginBottom: '0.5rem' }}>
                  Technical Specifications & Capabilities
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '0.5rem' }}>
                  {selectedFacility.specs.map((spec, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                      <ShieldCheck size={14} style={{ color: 'var(--accent-teal)' }} />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
