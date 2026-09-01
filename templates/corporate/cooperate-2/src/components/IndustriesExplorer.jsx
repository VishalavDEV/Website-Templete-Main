import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from './Icons';
import { INDUSTRIES } from '../data/content';

export default function IndustriesExplorer() {
  const [selectedId, setSelectedId] = useState(INDUSTRIES[0].id);
  const activeIndustry = INDUSTRIES.find(ind => ind.id === selectedId) || INDUSTRIES[0];

  return (
    <div>
      {/* Horizontal Tabs */}
      <div className="industry-tab-bar">
        {INDUSTRIES.map((ind) => {
          const isActive = ind.id === selectedId;
          return (
            <button
              key={ind.id}
              onClick={() => setSelectedId(ind.id)}
              className={`industry-tab-btn ${isActive ? 'is-active' : ''}`}
            >
              <span style={{ color: isActive ? 'var(--accent-ochre)' : 'var(--accent-terracotta)' }}>{ind.number}</span>
              <span>{ind.name}</span>
            </button>
          );
        })}
      </div>

      {/* Dynamic Display */}
      <div className="industry-showcase-grid">
        {/* Left Visual */}
        <div style={{ position: 'relative', overflow: 'hidden', border: '1px solid var(--border-light)', aspectRatio: '4/3', backgroundColor: 'var(--bg-cream-200)' }}>
          <img
            key={activeIndustry.id}
            src={activeIndustry.image}
            alt={activeIndustry.name}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div className="work-badge">
            {activeIndustry.number} / {activeIndustry.name}
          </div>
        </div>

        {/* Right Narrative */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', color: 'var(--text-charcoal)', lineHeight: '1.15' }}>
              {activeIndustry.headline}
            </h3>
            <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginTop: '1rem' }}>
              {activeIndustry.description}
            </p>
          </div>

          {/* Stats Bar */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', padding: '1.25rem 0', borderTop: '1px solid var(--border-light)', borderBottom: '1px solid var(--border-light)' }}>
            {activeIndustry.stats.map((st, i) => (
              <div key={i}>
                <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', color: 'var(--text-charcoal)', lineHeight: '1' }}>{st.value}</p>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>{st.label}</p>
              </div>
            ))}
          </div>

          {/* Capabilities */}
          <div>
            <p className="font-mono text-secondary" style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.75rem' }}>Core Capabilities</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.5rem', fontSize: '0.8rem' }}>
              {activeIndustry.capabilities.map((cap, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ width: '6px', height: '6px', backgroundColor: 'var(--accent-terracotta)', borderRadius: '50%', flexShrink: 0 }}></span>
                  <span>{cap}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <Link to="/industries" className="btn-editorial-underline">
              <span>Explore all industry practices</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
