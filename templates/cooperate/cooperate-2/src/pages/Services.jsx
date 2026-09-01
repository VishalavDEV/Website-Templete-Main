import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from '../components/Icons';
import { SERVICES } from '../data/content';

export default function Services() {
  const [hoveredIdx, setHoveredIdx] = useState(null);

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
                PRACTICE AREAS & CAPABILITIES
              </p>
              <h1 className="page-hero-title">
                Strategic advisory engineered for <br />
                <span className="italic font-serif">systemic advantage.</span>
              </h1>
              <div className="page-hero-divider"></div>
              <p className="page-hero-desc">
                We operate across five interconnected disciplines, combining boardroom corporate finance with factory-floor execution and applied artificial intelligence architecture.
              </p>
            </div>

            <div>
              <div className="page-hero-visual-frame">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop"
                  alt="ORION Practice Operations"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────── */}
      {/* LARGE NUMBERED SERVICE DIRECTORY                               */}
      {/* ───────────────────────────────────────────────────────────── */}
      <section className="container services-directory-wrap">
        <div style={{ marginBottom: '2.5rem' }}>
          <p className="font-mono text-secondary" style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
            01 / PRACTICE INDEX
          </p>
        </div>

        <div className="services-directory-list">
          {SERVICES.map((service, idx) => (
            <Link
              key={service.id}
              to={`/services/${service.id}`}
              className="services-directory-row"
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
            >
              <div className="services-directory-grid">
                
                {/* Large Number */}
                <div className="services-directory-num">
                  {service.number}
                </div>

                {/* Service Title */}
                <div>
                  <h2 className="services-directory-title">
                    {service.title}
                  </h2>
                  <p className="font-serif italic" style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>
                    {service.tagline}
                  </p>
                </div>

                {/* Description */}
                <div className="services-directory-desc">
                  <p>{service.description}</p>
                </div>

                {/* Sliding Arrow & Optional Hover Thumb */}
                <div className="services-directory-arrow">
                  <ArrowRight size={24} />
                </div>

              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────── */}
      {/* 4-PHASE ENGAGEMENT ROADMAP                                     */}
      {/* ───────────────────────────────────────────────────────────── */}
      <section className="values-dark-section">
        <div className="container">
          <div style={{ maxWidth: '680px', marginBottom: '4rem' }}>
            <p className="font-mono text-ochre" style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.5rem' }}>The Engagement Model</p>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.25rem, 4vw, 3.25rem)', color: 'var(--bg-cream)' }}>
              Four phases from diagnosis to sustainable capability.
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2.5rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: '1.5rem' }}>
              <span className="font-mono text-ochre" style={{ fontSize: '0.75rem', fontWeight: 700 }}>PHASE 01</span>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: 'var(--bg-cream)' }}>Diagnostic Baseline</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--bg-cream-300)', lineHeight: '1.6' }}>
                4-6 weeks of intensive empirical discovery, uncovering true unit economics and hidden structural risks.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: '1.5rem' }}>
              <span className="font-mono text-ochre" style={{ fontSize: '0.75rem', fontWeight: 700 }}>PHASE 02</span>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: 'var(--bg-cream)' }}>Strategy Architecture</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--bg-cream-300)', lineHeight: '1.6' }}>
                Co-designing asymmetric strategic vectors with probabilistic risk and balance sheet simulations.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: '1.5rem' }}>
              <span className="font-mono text-ochre" style={{ fontSize: '0.75rem', fontWeight: 700 }}>PHASE 03</span>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: 'var(--bg-cream)' }}>Transformation</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--bg-cream-300)', lineHeight: '1.6' }}>
                Embedding partner-led execution cells into key operating units with weekly single-point accountability.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: '1.5rem' }}>
              <span className="font-mono text-ochre" style={{ fontSize: '0.75rem', fontWeight: 700 }}>PHASE 04</span>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: 'var(--bg-cream)' }}>Institutional Mastery</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--bg-cream-300)', lineHeight: '1.6' }}>
                Systematic capability transfer and leadership coaching, ensuring results endure long after we depart.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
