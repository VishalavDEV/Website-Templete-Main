import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Check } from '../components/Icons';
import { CASE_STUDIES } from '../data/content';

export default function CaseStudyDetails() {
  const { id } = useParams();
  const caseItem = CASE_STUDIES.find(c => c.id === id) || CASE_STUDIES[0];
  const nextCase = CASE_STUDIES[(CASE_STUDIES.findIndex(c => c.id === caseItem.id) + 1) % CASE_STUDIES.length];

  return (
    <div>
      
      {/* ───────────────────────────────────────────────────────────── */}
      {/* COMPACT EDITORIAL PAGE HERO & METADATA BAR                    */}
      {/* ───────────────────────────────────────────────────────────── */}
      <section className="page-hero-editorial">
        <div className="container">
          <div style={{ marginBottom: '1.5rem' }}>
            <Link to="/work" className="link-editorial font-mono" style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--text-secondary)' }}>
              <ArrowLeft size={14} />
              <span>Back to Case Studies</span>
            </Link>
          </div>

          <div style={{ maxWidth: '960px', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <span className="font-mono text-terracotta" style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em' }}>
              {caseItem.number} / {caseItem.sector}
            </span>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.5rem, 5.5vw, 4.75rem)', lineHeight: '1.02', color: 'var(--text-charcoal)' }}>
              {caseItem.title}
            </h1>
          </div>

          {/* Clean Thin Divider & Metadata Strip */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', borderTop: '1px solid var(--border-light)', borderBottom: '1px solid var(--border-light)', padding: '1.75rem 0', marginTop: '2.5rem' }}>
            <div>
              <p className="font-mono text-secondary" style={{ fontSize: '0.7rem', textTransform: 'uppercase' }}>Client</p>
              <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.15rem', color: 'var(--text-charcoal)', marginTop: '0.2rem' }}>{caseItem.client}</p>
            </div>
            <div>
              <p className="font-mono text-secondary" style={{ fontSize: '0.7rem', textTransform: 'uppercase' }}>Sector Domain</p>
              <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.15rem', color: 'var(--text-charcoal)', marginTop: '0.2rem' }}>{caseItem.sector}</p>
            </div>
            <div>
              <p className="font-mono text-secondary" style={{ fontSize: '0.7rem', textTransform: 'uppercase' }}>Timeline</p>
              <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.15rem', color: 'var(--text-charcoal)', marginTop: '0.2rem' }}>{caseItem.timeline}</p>
            </div>
            <div>
              <p className="font-mono text-secondary" style={{ fontSize: '0.7rem', textTransform: 'uppercase' }}>Core Practice</p>
              <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.15rem', color: 'var(--text-charcoal)', marginTop: '0.2rem' }}>{caseItem.practice}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────── */}
      {/* LARGE EDITORIAL HERO IMAGE (16:7 PANORAMIC)                   */}
      {/* ───────────────────────────────────────────────────────────── */}
      <section className="container" style={{ padding: '3.5rem 0 5rem 0' }}>
        <div style={{ border: '1px solid var(--border-light)', aspectRatio: '16/7', overflow: 'hidden', backgroundColor: 'var(--bg-cream-200)' }}>
          <img src={caseItem.image} alt={caseItem.title} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 35%' }} />
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────── */}
      {/* STRUCTURED EDITORIAL REPORT SECTIONS (CHALLENGE / APPROACH)    */}
      {/* ───────────────────────────────────────────────────────────── */}
      <section className="container" style={{ paddingBottom: '100px', display: 'flex', flexDirection: 'column', gap: '5rem' }}>
        
        {/* The Challenge */}
        <div style={{ display: 'grid', gridTemplateColumns: '4fr 8fr', gap: '3.5rem', borderTop: '1px solid var(--border-light)', paddingTop: '3rem' }}>
          <div>
            <span className="font-mono text-terracotta" style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em' }}>01 / THE CONTEXT</span>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.25rem', marginTop: '0.5rem' }}>The Challenge</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', fontSize: '1.1rem', color: 'var(--text-charcoal)', lineHeight: '1.75' }}>
            <p>{caseItem.challenge}</p>
          </div>
        </div>

        {/* The Approach */}
        <div style={{ display: 'grid', gridTemplateColumns: '4fr 8fr', gap: '3.5rem', borderTop: '1px solid var(--border-light)', paddingTop: '3rem' }}>
          <div>
            <span className="font-mono text-terracotta" style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em' }}>02 / STRATEGIC ARCHITECTURE</span>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.25rem', marginTop: '0.5rem' }}>The Approach</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-charcoal)', lineHeight: '1.75' }}>
              {caseItem.solution}
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem', marginTop: '1rem' }}>
              {caseItem.deliverables.map((del, i) => (
                <div key={i} style={{ padding: '1.5rem', borderLeft: '2px solid var(--accent-ochre)', backgroundColor: 'var(--bg-cream-100)' }}>
                  <span className="font-mono text-secondary" style={{ fontSize: '0.7rem' }}>PILLAR 0{i + 1}</span>
                  <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', color: 'var(--text-charcoal)', marginTop: '0.25rem' }}>{del}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* The Results: Large Metrics & Scorecard */}
        <div style={{ display: 'grid', gridTemplateColumns: '4fr 8fr', gap: '3.5rem', borderTop: '1px solid var(--border-light)', paddingTop: '3rem' }}>
          <div>
            <span className="font-mono text-terracotta" style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em' }}>03 / QUANTIFIED IMPACT</span>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.25rem', marginTop: '0.5rem' }}>The Result</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-charcoal)', lineHeight: '1.75' }}>
              {caseItem.impact}
            </p>

            {/* Large Metrics Row */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', borderTop: '1px solid var(--border-light)', borderBottom: '1px solid var(--border-light)', padding: '2.5rem 0' }}>
              <div>
                <p style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(3rem, 5vw, 4.5rem)', color: 'var(--text-charcoal)', lineHeight: 1 }}>{caseItem.headlineMetric}</p>
                <p className="font-mono text-secondary" style={{ fontSize: '0.75rem', textTransform: 'uppercase', marginTop: '0.5rem' }}>{caseItem.metricLabel}</p>
              </div>
              <div>
                <p style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(3rem, 5vw, 4.5rem)', color: 'var(--accent-terracotta)', lineHeight: 1 }}>{caseItem.timeline}</p>
                <p className="font-mono text-secondary" style={{ fontSize: '0.75rem', textTransform: 'uppercase', marginTop: '0.5rem' }}>Diagnosis to Full Rollout</p>
              </div>
              <div>
                <p style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(3rem, 5vw, 4.5rem)', color: 'var(--accent-ochre)', lineHeight: 1 }}>100%</p>
                <p className="font-mono text-secondary" style={{ fontSize: '0.75rem', textTransform: 'uppercase', marginTop: '0.5rem' }}>Target Governance Met</p>
              </div>
            </div>

            {/* Testimonial Quote */}
            <div style={{ padding: '2.5rem', backgroundColor: 'var(--bg-cream-100)', borderLeft: '4px solid var(--accent-terracotta)' }}>
              <blockquote className="font-serif italic" style={{ fontSize: '1.35rem', color: 'var(--text-charcoal)', lineHeight: '1.45' }}>
                “{caseItem.quote.text}”
              </blockquote>
              <div style={{ marginTop: '1rem', display: 'flex', alignItems: 'baseline', gap: '0.5rem', fontSize: '0.85rem' }}>
                <span style={{ fontWeight: 700 }}>{caseItem.quote.author}</span>
                <span style={{ color: 'var(--text-secondary)' }}>— {caseItem.quote.role}</span>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* ───────────────────────────────────────────────────────────── */}
      {/* NEXT CASE STUDY BANNER                                        */}
      {/* ───────────────────────────────────────────────────────────── */}
      <section className="section-py bg-cream-100 border-t">
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
          <div>
            <p className="font-mono text-terracotta" style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em' }}>Next Case Study</p>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.25rem', marginTop: '0.5rem' }}>{nextCase.title}</h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{nextCase.sector} · {nextCase.headlineMetric}</p>
          </div>
          <Link to={`/case-studies/${nextCase.id}`} className="btn-editorial-primary">
            <span>Read Next Study</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>

    </div>
  );
}
