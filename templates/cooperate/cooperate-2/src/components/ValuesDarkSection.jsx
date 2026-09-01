import React from 'react';
import { VALUES } from '../data/content';

export default function ValuesDarkSection() {
  return (
    <section className="values-dark-section">
      <div className="container">
        
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem', paddingBottom: '2.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)', marginBottom: '3rem' }}>
          <div>
            <p className="font-mono text-ochre" style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.5rem' }}>
              Operating Principles
            </p>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.25rem, 4vw, 3.5rem)', color: 'var(--bg-cream)' }}>
              How we <span className="italic font-serif">work</span>
            </h2>
          </div>
          <p style={{ maxWidth: '440px', fontSize: '0.95rem', color: 'var(--bg-cream-300)', lineHeight: '1.6' }}>
            Our values are the non-negotiable standards of intellectual rigor and integrity by which we measure every recommendation.
          </p>
        </div>

        {/* Numbered Rows */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
          {VALUES.map((val) => (
            <div key={val.number} className="values-row">
              <div className="values-row-grid">
                
                {/* Number */}
                <div>
                  <span className="font-mono" style={{ fontSize: '0.85rem', letterSpacing: '0.1em', color: 'var(--accent-ochre)', fontWeight: 700 }}>
                    {val.number}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <div>
                  <h3 className="values-title" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', color: 'var(--bg-cream)', transition: 'color 0.2s ease' }}>
                    {val.title}
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: 'rgba(245,243,238,0.7)', marginTop: '0.5rem' }}>
                    {val.subtitle}
                  </p>
                </div>

                {/* Description */}
                <div>
                  <p style={{ fontSize: '0.95rem', color: 'var(--bg-cream-300)', lineHeight: '1.6' }}>
                    {val.description}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
