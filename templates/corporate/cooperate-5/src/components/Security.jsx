import React, { useState } from 'react';
import { ShieldCheck } from 'lucide-react';
import { SECURITY_LAYERS } from '../data/corporateData';

export default function Security() {
  const [activeLayerId, setActiveLayerId] = useState('sec-1');

  return (
    <section className="section-ivory" id="security">
      <div className="container">
        {/* Section Header */}
        <div className="editorial-header" style={{ maxWidth: '800px' }}>
          <div className="editorial-tag">
            <div className="editorial-tag-line"></div>
            <span className="label-caps">ZERO TRUST FRAMEWORK</span>
          </div>
          <h2 className="editorial-heading-lg">SECURITY AT EVERY LAYER.</h2>
          <p className="editorial-desc">
            Sovereign defensive architectures embedded into every microservice, data packet, runtime container, and physical host node.
          </p>
        </div>

        {/* Security Layout */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
          {/* Left Column: Security Shield Visualizer */}
          <div style={{ background: '#FFFFFF', border: '1px solid var(--border-light)', borderRadius: '20px', padding: '48px', textAlign: 'center' }}>
            <div style={{ width: '220px', height: '220px', margin: '0 auto 30px' }}>
              <svg viewBox="0 0 240 240" style={{ width: '100%', height: '100%' }}>
                <polygon
                  points="120,20 210,55 210,130 120,220 30,130 30,55"
                  fill="var(--bg-forest)"
                  stroke="var(--color-copper)"
                  strokeWidth="2"
                />
                <polygon
                  points="120,45 185,72 185,130 120,195 55,130 55,72"
                  fill="var(--bg-forest-card)"
                  stroke="var(--border-forest)"
                  strokeWidth="1.5"
                />
                <circle cx="120" cy="120" r="14" fill="var(--color-copper)" />
                <rect x="117" y="120" width="6" height="18" fill="var(--bg-forest)" />
              </svg>
            </div>

            <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <span className="service-chip" style={{ fontSize: '11px', fontWeight: 600 }}>24/7 MONITORING</span>
              <span className="service-chip" style={{ fontSize: '11px', fontWeight: 600 }}>ZERO TRUST ARCHITECTURE</span>
              <span className="service-chip" style={{ fontSize: '11px', fontWeight: 600 }}>CONTINUOUS DETECTION</span>
            </div>
          </div>

          {/* Right Column: Layer List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {SECURITY_LAYERS.map((layer) => {
              const isSelected = activeLayerId === layer.id;
              return (
                <div
                  key={layer.id}
                  onClick={() => setActiveLayerId(layer.id)}
                  style={{
                    background: isSelected ? 'var(--bg-forest)' : '#FFFFFF',
                    color: isSelected ? '#FFFFFF' : 'var(--text-dark-primary)',
                    border: `1px solid ${isSelected ? 'var(--bg-forest)' : 'var(--border-light)'}`,
                    borderRadius: '14px',
                    padding: '22px 28px',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontFamily: 'var(--font-serif)', fontSize: '18px', fontWeight: 600 }}>
                      {layer.name}
                    </span>
                    <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', color: isSelected ? 'var(--color-copper-light)' : 'var(--color-copper)' }}>
                      {layer.status}
                    </span>
                  </div>

                  <div style={{ fontSize: '12px', color: isSelected ? 'var(--color-sage)' : 'var(--text-dark-muted)', marginTop: '4px' }}>
                    {layer.role}
                  </div>

                  {isSelected && (
                    <div style={{ fontSize: '14px', color: 'var(--text-light-secondary)', marginTop: '12px', paddingTop: '12px', borderTop: '1px solid var(--border-forest)', lineHeight: '1.6' }}>
                      {layer.details}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
