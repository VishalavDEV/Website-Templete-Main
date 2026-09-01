import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from '../components/Icons';
import { CASE_STUDIES } from '../data/content';

export default function CaseStudies() {
  const [selectedSector, setSelectedSector] = useState('ALL');

  const sectors = ['ALL', 'INDUSTRIAL & LOGISTICS', 'FINANCIAL SERVICES', 'HEALTHCARE & LIFE SCIENCES', 'RENEWABLE ENERGY & UTILITIES', 'CONSUMER & RETAIL', 'ENTERPRISE TECHNOLOGY'];

  const filteredCases = selectedSector === 'ALL'
    ? CASE_STUDIES
    : CASE_STUDIES.filter(c => c.sector.toUpperCase() === selectedSector);

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
                SELECTED CLIENT ENGAGEMENTS & IMPACT
              </p>
              <h1 className="page-hero-title">
                Quantified outcomes for <br />
                <span className="italic font-serif">systemic transformations.</span>
              </h1>
              <div className="page-hero-divider"></div>
              <p className="page-hero-desc">
                We measure engagement success exclusively in shareholder value generated, structural margin expanded, and operational resilience permanently installed.
              </p>
            </div>

            <div>
              <div className="page-hero-visual-frame">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop"
                  alt="ORION Verified Case Work"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────── */}
      {/* SECTOR FILTER TABS                                            */}
      {/* ───────────────────────────────────────────────────────────── */}
      <section className="container" style={{ padding: '1.5rem 0', borderBottom: '1px solid var(--border-light)' }}>
        <div style={{ display: 'flex', gap: '0.5rem', overflowX: 'auto', paddingBottom: '0.5rem' }}>
          {sectors.map((sec) => (
            <button
              key={sec}
              onClick={() => setSelectedSector(sec)}
              style={{
                padding: '0.5rem 1rem',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                whiteSpace: 'nowrap',
                backgroundColor: selectedSector === sec ? 'var(--text-charcoal)' : 'transparent',
                color: selectedSector === sec ? 'var(--bg-cream)' : 'var(--text-secondary)',
                fontWeight: selectedSector === sec ? 700 : 400,
                transition: 'all 0.2s ease'
              }}
            >
              {sec}
            </button>
          ))}
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────── */}
      {/* LARGE EDITORIAL PROJECT INDEX                                 */}
      {/* ───────────────────────────────────────────────────────────── */}
      <section className="container section-py">
        <div>
          {filteredCases.map((item, index) => {
            const compType = index % 3;

            // Composition 01: 8-Col Image Left + 4-Col Narrative Right
            if (compType === 0) {
              return (
                <div key={item.id} className="case-index-editorial-item">
                  <div className="case-index-meta-row">
                    <span className="case-index-num">{item.number} / {item.sector}</span>
                    <span className="font-mono text-secondary" style={{ fontSize: '0.75rem' }}>TIMELINE: {item.timeline}</span>
                  </div>

                  <div className="case-index-grid-a">
                    <Link to={`/case-studies/${item.id}`} style={{ width: '100%', aspectRatio: '16/9', overflow: 'hidden', border: '1px solid var(--border-light)', display: 'block', backgroundColor: 'var(--bg-cream-200)' }}>
                      <img src={item.image} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 40%', transition: 'transform var(--transition-slow)' }} />
                    </Link>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                      <Link to={`/case-studies/${item.id}`} className="case-index-title">
                        {item.title}
                      </Link>
                      <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                        {item.summary}
                      </p>
                      <div className="work-metric-box">
                        <div className="work-metric-number">{item.headlineMetric}</div>
                        <div className="work-metric-label">{item.metricLabel}</div>
                      </div>
                      <div>
                        <Link to={`/case-studies/${item.id}`} className="btn-editorial-underline">
                          <span>View case study</span>
                          <ArrowRight size={14} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            // Composition 02: 4-Col Narrative Left + 8-Col Image Right
            if (compType === 1) {
              return (
                <div key={item.id} className="case-index-editorial-item">
                  <div className="case-index-meta-row">
                    <span className="case-index-num">{item.number} / {item.sector}</span>
                    <span className="font-mono text-secondary" style={{ fontSize: '0.75rem' }}>CLIENT: {item.client}</span>
                  </div>

                  <div className="case-index-grid-b">
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                      <Link to={`/case-studies/${item.id}`} className="case-index-title">
                        {item.title}
                      </Link>
                      <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                        {item.summary}
                      </p>
                      <div className="work-metric-box">
                        <div className="work-metric-number">{item.headlineMetric}</div>
                        <div className="work-metric-label">{item.metricLabel}</div>
                      </div>
                      <div>
                        <Link to={`/case-studies/${item.id}`} className="btn-editorial-underline">
                          <span>View case study</span>
                          <ArrowRight size={14} />
                        </Link>
                      </div>
                    </div>

                    <Link to={`/case-studies/${item.id}`} style={{ width: '100%', aspectRatio: '16/10', overflow: 'hidden', border: '1px solid var(--border-light)', display: 'block', backgroundColor: 'var(--bg-cream-200)' }}>
                      <img src={item.image} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', transition: 'transform var(--transition-slow)' }} />
                    </Link>
                  </div>
                </div>
              );
            }

            // Composition 03: Full Panoramic 21:8 Banner with Split Narrative Underneath
            return (
              <div key={item.id} className="case-index-editorial-item">
                <div className="case-index-meta-row">
                  <span className="case-index-num">{item.number} / {item.sector}</span>
                  <span className="font-mono text-terracotta" style={{ fontSize: '0.75rem', fontWeight: 700 }}>VERIFIED TRANSFORMATION</span>
                </div>

                <div className="case-index-grid-c">
                  <Link to={`/case-studies/${item.id}`} style={{ width: '100%', aspectRatio: '21/8', overflow: 'hidden', border: '1px solid var(--border-light)', display: 'block', backgroundColor: 'var(--bg-cream-200)' }}>
                    <img src={item.image} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 35%', transition: 'transform var(--transition-slow)' }} />
                  </Link>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem', alignItems: 'center' }}>
                    <div>
                      <Link to={`/case-studies/${item.id}`} className="case-index-title">
                        {item.title}
                      </Link>
                      <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginTop: '0.75rem' }}>
                        {item.summary}
                      </p>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem' }}>
                      <div className="work-metric-box" style={{ margin: 0 }}>
                        <div className="work-metric-number">{item.headlineMetric}</div>
                        <div className="work-metric-label">{item.metricLabel}</div>
                      </div>
                      <Link to={`/case-studies/${item.id}`} className="btn-editorial-underline">
                        <span>View case study</span>
                        <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
}
