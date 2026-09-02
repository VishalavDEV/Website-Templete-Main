import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from '../components/Icons';
import { SERVICES, CASE_STUDIES } from '../data/content';

export default function ServiceDetails() {
  const { id } = useParams();
  const service = SERVICES.find(s => s.id === id) || SERVICES[0];
  const relatedCase = CASE_STUDIES[0];

  return (
    <div>
      
      {/* ───────────────────────────────────────────────────────────── */}
      {/* COMPACT EDITORIAL PAGE HERO                                   */}
      {/* ───────────────────────────────────────────────────────────── */}
      <section className="page-hero-editorial">
        <div className="container">
          <div style={{ marginBottom: '1.5rem' }}>
            <Link to="/services" className="link-editorial font-mono" style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--text-secondary)' }}>
              <ArrowLeft size={14} />
              <span>Back to Practice Directory</span>
            </Link>
          </div>

          <div className="page-hero-header-grid">
            <div>
              <span className="font-mono text-terracotta" style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em' }}>
                PRACTICE AREA {service.number}
              </span>
              <h1 className="page-hero-title">
                {service.title}
              </h1>
              <p className="font-serif italic" style={{ fontSize: '1.35rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
                {service.tagline}
              </p>
              <div className="page-hero-divider"></div>
              <p className="page-hero-desc">
                {service.description}
              </p>
            </div>

            <div>
              <div className="page-hero-visual-frame">
                <img src={service.image} alt={service.title} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────── */}
      {/* KEY CAPABILITIES (NUMBERED EDITORIAL SECTION)                 */}
      {/* ───────────────────────────────────────────────────────────── */}
      <section className="container section-py">
        <div style={{ borderBottom: '1px solid var(--border-light)', paddingBottom: '1.5rem', marginBottom: '3rem' }}>
          <p className="font-mono text-terracotta" style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
            CAPABILITIES & FRAMEWORKS
          </p>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', marginTop: '0.5rem' }}>
            Key advisory deliverables
          </h2>
        </div>

        <div className="service-report-capabilities-grid">
          {service.deliverables.map((del, i) => (
            <div key={i} className="service-report-cap-card">
              <span className="service-report-cap-num">0{i + 1}</span>
              <h3 className="service-report-cap-title">{del}</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                Empirical discovery, quantitative risk modeling, and executive governance alignment tailored to cross-border operating conditions.
              </p>
            </div>
          ))}
        </div>

        {/* Asymmetric Visual Section */}
        <div className="service-report-asymmetric-visuals">
          <div style={{ border: '1px solid var(--border-light)', aspectRatio: '16/9', overflow: 'hidden', backgroundColor: 'var(--bg-cream-200)' }}>
            <img src={service.image} alt={service.title} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', padding: '2rem', backgroundColor: 'var(--bg-cream-100)', border: '1px solid var(--border-light)' }}>
            <span className="font-mono text-ochre" style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase' }}>PRACTICE BENCHMARK</span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {service.metrics.map((m, idx) => (
                <div key={idx} style={{ borderTop: idx === 0 ? 'none' : '1px solid var(--border-light)', paddingTop: idx === 0 ? 0 : '1rem' }}>
                  <p style={{ fontFamily: 'var(--font-serif)', fontSize: '2.25rem', color: 'var(--text-charcoal)', lineHeight: 1 }}>{m.value}</p>
                  <p className="font-mono" style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>{m.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Structured 3-Phase Methodology */}
        <div style={{ marginTop: '5rem', paddingTop: '4rem', borderTop: '1px solid var(--border-light)' }}>
          <div style={{ maxWidth: '640px', marginBottom: '3rem' }}>
            <p className="font-mono text-terracotta" style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em' }}>METHODOLOGY</p>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', marginTop: '0.5rem' }}>
              Execution cadence and governance
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {service.methodology.map((m, idx) => (
              <div key={idx} style={{ padding: '2rem', border: '1px solid var(--border-light)', backgroundColor: 'var(--bg-cream)', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span className="font-mono text-terracotta" style={{ fontSize: '0.85rem', fontWeight: 700 }}>PHASE {m.step}</span>
                  <span className="font-mono" style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>WEEKS {idx * 4 + 1}–{(idx + 1) * 4}</span>
                </div>
                <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', marginTop: '0.5rem' }}>{m.title}</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Action / Partner Engagement Callout */}
        <div style={{ marginTop: '5rem', padding: '3.5rem 2.5rem', backgroundColor: 'var(--charcoal-800)', color: 'var(--bg-cream)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
          <div>
            <p className="font-mono text-ochre" style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em' }}>Executive Engagement</p>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.25rem', color: 'var(--bg-cream)', marginTop: '0.5rem' }}>
              Consult our {service.shortTitle} practice partners.
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--bg-cream-300)', marginTop: '0.5rem' }}>
              Confidential diagnostic briefings available for executive committees and boards.
            </p>
          </div>
          <Link to="/contact" className="btn-editorial-primary" style={{ backgroundColor: 'var(--bg-cream)', color: 'var(--text-charcoal)' }}>
            <span>Initiate Briefing</span>
            <ArrowRight size={14} />
          </Link>
        </div>

      </section>

    </div>
  );
}
