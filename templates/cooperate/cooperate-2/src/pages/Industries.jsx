import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from '../components/Icons';
import { INDUSTRIES } from '../data/content';

export default function Industries() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const activeIndustry = INDUSTRIES[selectedIdx] || INDUSTRIES[0];

  return (
    <div>
      
      {/* ───────────────────────────────────────────────────────────── */}
      {/* COMPACT EDITORIAL PAGE HERO                                   */}
      {/* ───────────────────────────────────────────────────────────── */}
      <section className="page-hero-editorial">
        <div className="container">
          <div className="page-hero-header-grid">
            <div>
              <p className="font-mono text-terracotta" style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
                INDUSTRY VERTICALS & DOMAIN DEPTH
              </p>
              <h1 className="page-hero-title">
                Deep sectoral expertise across <br />
                <span className="italic font-serif">the global economy.</span>
              </h1>
              <div className="page-hero-divider"></div>
              <p className="page-hero-desc">
                We combine macro-level industry foresight with operational precision across six primary sectors, advising the world's most consequential market leaders.
              </p>
            </div>

            <div>
              <div className="page-hero-visual-frame">
                <img
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop"
                  alt="Global Industry Verticals"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────── */}
      {/* INTERACTIVE INDUSTRY EXPLORER (LEFT LIST + RIGHT DYNAMIC)     */}
      {/* ───────────────────────────────────────────────────────────── */}
      <section className="container">
        <div className="industry-explorer-wrap">
          
          {/* Left: Numbered Industry Selector */}
          <div className="industry-selector-list">
            {INDUSTRIES.map((ind, idx) => (
              <button
                key={ind.id}
                onClick={() => setSelectedIdx(idx)}
                className={`industry-selector-btn ${selectedIdx === idx ? 'is-active' : ''}`}
              >
                <div style={{ display: 'flex', alignItems: 'baseline' }}>
                  <span className="industry-sel-num">0{idx + 1}</span>
                  <span className="industry-sel-name">{ind.name}</span>
                </div>
                <span className="font-mono" style={{ fontSize: '0.85rem' }}>
                  {selectedIdx === idx ? '●' : '→'}
                </span>
              </button>
            ))}
          </div>

          {/* Right: Dynamic Industry Presentation Panel */}
          <div className="industry-detail-panel">
            
            {/* Dynamic Large Image Frame */}
            <div className="industry-detail-image-frame">
              <img
                src={activeIndustry.image}
                alt={activeIndustry.name}
                key={activeIndustry.id}
              />
              <div className="work-badge">
                SECTOR DOMAIN 0{selectedIdx + 1}
              </div>
            </div>

            {/* Narrative & Focus */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 3.5vw, 2.75rem)' }}>
                {activeIndustry.name}
              </h2>
              <p className="font-serif italic" style={{ fontSize: '1.15rem', color: 'var(--text-secondary)' }}>
                {activeIndustry.headline}
              </p>
              <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                {activeIndustry.description}
              </p>
            </div>

            {/* Core Capabilities Checklist */}
            <div style={{ padding: '2rem', backgroundColor: 'var(--bg-cream-100)', border: '1px solid var(--border-light)' }}>
              <p className="font-mono text-terracotta" style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '1rem' }}>
                Priority Strategic Vectors
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                {(activeIndustry.capabilities || []).map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--text-charcoal)' }}>
                    <Check size={16} className="text-terracotta" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Verified Stats */}
            {activeIndustry.stats && (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '1.5rem', borderTop: '1px solid var(--border-light)', paddingTop: '1.5rem' }}>
                {activeIndustry.stats.map((s, idx) => (
                  <div key={idx}>
                    <p style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', color: 'var(--text-charcoal)', lineHeight: 1 }}>{s.value}</p>
                    <p className="font-mono" style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>{s.label}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Action */}
            <div style={{ paddingTop: '0.5rem' }}>
              <Link to="/contact" className="btn-editorial-primary">
                <span>Engage {activeIndustry.name} Practice</span>
                <ArrowRight size={14} />
              </Link>
            </div>

          </div>

        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────── */}
      {/* SECTOR MONOGRAPHS SECTION                                     */}
      {/* ───────────────────────────────────────────────────────────── */}
      <section className="section-py bg-cream-100 border-t">
        <div className="container">
          <div style={{ maxWidth: '640px', marginBottom: '4rem' }}>
            <p className="font-mono text-terracotta" style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em' }}>RESEARCH MONOGRAPHS</p>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3rem)', marginTop: '0.5rem' }}>
              Sectoral dynamics shaping the next decade
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', paddingBottom: '1.5rem', borderBottom: '1px solid var(--border-light)' }}>
              <span className="font-mono text-ochre" style={{ fontSize: '0.75rem', fontWeight: 700 }}>FINANCIAL ARCHITECTURE</span>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem' }}>The Unbundling of Core Capital</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                How non-bank lenders and tokenized collateral repositories are altering treasury liquidity buffers across European banking groups.
              </p>
              <Link to="/insights" className="btn-editorial-underline">
                <span>Read analysis</span>
                <ArrowRight size={12} />
              </Link>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', paddingBottom: '1.5rem', borderBottom: '1px solid var(--border-light)' }}>
              <span className="font-mono text-ochre" style={{ fontSize: '0.75rem', fontWeight: 700 }}>INDUSTRIAL SOVEREIGNTY</span>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem' }}>Autonomous Factory Telemetry</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                Transitioning heavy discrete manufacturing from reactive scheduled maintenance to real-time closed-loop edge automation.
              </p>
              <Link to="/insights" className="btn-editorial-underline">
                <span>Read analysis</span>
                <ArrowRight size={12} />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
