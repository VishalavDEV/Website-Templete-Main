import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { CASE_STUDIES } from '../data/corporateData';

const PROJECT_PHOTOS = [
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=85"
];

export default function WorkPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ paddingTop: '75px' }}>
      {/* 12. Header with Balanced Spacing */}
      <section style={{ padding: '50px 0 40px', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container-asym">
          <div className="meta-tag-copper" style={{ marginBottom: '10px' }}>
            PORTFOLIO // SELECTED DELIVERIES
          </div>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(36px, 4.4vw, 60px)', fontWeight: 700, color: 'var(--c-charcoal)', lineHeight: 1.1 }}>
            Proven architectures.
          </h1>
          <p style={{ fontSize: '18px', color: 'var(--c-eucalyptus)', maxWidth: '740px', marginTop: '14px', lineHeight: '1.6' }}>
            Explore how Axiom Systems transforms mission-critical operations, reduces multi-million dollar latency costs, and eliminates system fragility.
          </p>
        </div>
      </section>

      {/* 12. Dynamic Case Studies with Proper Spacing */}
      <section style={{ padding: '60px 0 100px' }}>
        <div className="container-asym">
          <div className="asym-projects-stream" style={{ marginTop: '10px', gap: '80px' }}>
            {/* P1: Left Text / Right Image */}
            <div className="asym-proj-comp-01">
              <div>
                <div className="meta-tag-copper" style={{ marginBottom: '8px' }}>PROJECT 01 // {CASE_STUDIES[0].industry}</div>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '34px', fontWeight: 700, color: 'var(--c-charcoal)', marginBottom: '8px' }}>
                  {CASE_STUDIES[0].title}
                </h2>
                <div className="meta-tag-eucalyptus" style={{ marginBottom: '14px' }}>CLIENT: {CASE_STUDIES[0].client}</div>
                <p style={{ fontSize: '16px', color: 'var(--c-eucalyptus)', lineHeight: '1.65', marginBottom: '20px' }}>
                  {CASE_STUDIES[0].subtitle}
                </p>
                <div style={{ borderLeft: '3px solid var(--c-copper)', paddingLeft: '18px', marginBottom: '22px' }}>
                  <div style={{ fontFamily: 'var(--font-serif)', fontSize: '40px', fontWeight: 700, color: 'var(--c-copper)' }}>{CASE_STUDIES[0].impactMetric}</div>
                  <div className="meta-tag-eucalyptus">{CASE_STUDIES[0].impactLabel}</div>
                </div>
                <div style={{ marginBottom: '18px' }}>
                  <div className="meta-tag-eucalyptus" style={{ marginBottom: '4px' }}>PROBLEM OVERVIEW:</div>
                  <p style={{ fontSize: '14px', color: 'var(--c-eucalyptus)', lineHeight: '1.6' }}>{CASE_STUDIES[0].overview}</p>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
                  {CASE_STUDIES[0].techStack.map((tech, tIdx) => (
                    <span key={tIdx} style={{ fontSize: '11px', fontWeight: 600, color: 'var(--c-charcoal)', background: 'var(--c-stone-light)', padding: '5px 12px', borderRadius: '2px', border: '1px solid var(--border-light)' }}>
                      {tech}
                    </span>
                  ))}
                </div>
                <Link to="/contact" className="btn-copper-primary">
                  <span>View Case Study</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
              <div>
                <img src={PROJECT_PHOTOS[0]} alt={CASE_STUDIES[0].title} className="asym-proj-img" />
              </div>
            </div>

            {/* P2: Left Image / Right Text */}
            <div className="asym-proj-comp-02">
              <div>
                <img src={PROJECT_PHOTOS[1]} alt={CASE_STUDIES[1].title} className="asym-proj-img" />
              </div>
              <div>
                <div className="meta-tag-copper" style={{ marginBottom: '8px' }}>PROJECT 02 // {CASE_STUDIES[1].industry}</div>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '34px', fontWeight: 700, color: 'var(--c-charcoal)', marginBottom: '8px' }}>
                  {CASE_STUDIES[1].title}
                </h2>
                <div className="meta-tag-eucalyptus" style={{ marginBottom: '14px' }}>CLIENT: {CASE_STUDIES[1].client}</div>
                <p style={{ fontSize: '16px', color: 'var(--c-eucalyptus)', lineHeight: '1.65', marginBottom: '20px' }}>
                  {CASE_STUDIES[1].subtitle}
                </p>
                <div style={{ borderLeft: '3px solid var(--c-copper)', paddingLeft: '18px', marginBottom: '22px' }}>
                  <div style={{ fontFamily: 'var(--font-serif)', fontSize: '40px', fontWeight: 700, color: 'var(--c-copper)' }}>{CASE_STUDIES[1].impactMetric}</div>
                  <div className="meta-tag-eucalyptus">{CASE_STUDIES[1].impactLabel}</div>
                </div>
                <div style={{ marginBottom: '18px' }}>
                  <div className="meta-tag-eucalyptus" style={{ marginBottom: '4px' }}>PROBLEM OVERVIEW:</div>
                  <p style={{ fontSize: '14px', color: 'var(--c-eucalyptus)', lineHeight: '1.6' }}>{CASE_STUDIES[1].overview}</p>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
                  {CASE_STUDIES[1].techStack.map((tech, tIdx) => (
                    <span key={tIdx} style={{ fontSize: '11px', fontWeight: 600, color: 'var(--c-charcoal)', background: 'var(--c-stone-light)', padding: '5px 12px', borderRadius: '2px', border: '1px solid var(--border-light)' }}>
                      {tech}
                    </span>
                  ))}
                </div>
                <Link to="/contact" className="btn-copper-primary">
                  <span>View Case Study</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* P3: Full-Width Image / Text Overlapping */}
            <div className="asym-proj-comp-03">
              <img src={PROJECT_PHOTOS[2]} alt={CASE_STUDIES[2].title} className="asym-proj-bg-img" />
              <div className="asym-proj-overlap-card">
                <div className="meta-tag-copper" style={{ marginBottom: '6px' }}>PROJECT 03 // {CASE_STUDIES[2].industry}</div>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '30px', fontWeight: 700, color: '#FFFFFF', marginBottom: '8px' }}>
                  {CASE_STUDIES[2].title}
                </h2>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--c-eucalyptus-light)', marginBottom: '12px' }}>
                  CLIENT: {CASE_STUDIES[2].client}
                </div>
                <p style={{ fontSize: '15px', color: 'var(--c-eucalyptus-light)', lineHeight: '1.6', marginBottom: '16px' }}>
                  {CASE_STUDIES[2].subtitle}
                </p>
                <div style={{ marginBottom: '18px' }}>
                  <div style={{ fontFamily: 'var(--font-serif)', fontSize: '36px', fontWeight: 700, color: 'var(--c-copper)' }}>{CASE_STUDIES[2].impactMetric}</div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--c-eucalyptus-light)', textTransform: 'uppercase' }}>{CASE_STUDIES[2].impactLabel}</div>
                </div>
                <Link to="/contact" className="btn-copper-primary">
                  <span>View Case Study</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* P4: Left Image / Right Text */}
            <div className="asym-proj-comp-04">
              <div>
                <img src={PROJECT_PHOTOS[3]} alt={CASE_STUDIES[3].title} className="asym-proj-img" />
              </div>
              <div>
                <div className="meta-tag-copper" style={{ marginBottom: '8px' }}>PROJECT 04 // {CASE_STUDIES[3].industry}</div>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '34px', fontWeight: 700, color: 'var(--c-charcoal)', marginBottom: '8px' }}>
                  {CASE_STUDIES[3].title}
                </h2>
                <div className="meta-tag-eucalyptus" style={{ marginBottom: '14px' }}>CLIENT: {CASE_STUDIES[3].client}</div>
                <p style={{ fontSize: '16px', color: 'var(--c-eucalyptus)', lineHeight: '1.65', marginBottom: '20px' }}>
                  {CASE_STUDIES[3].subtitle}
                </p>
                <div style={{ borderLeft: '3px solid var(--c-copper)', paddingLeft: '18px', marginBottom: '22px' }}>
                  <div style={{ fontFamily: 'var(--font-serif)', fontSize: '40px', fontWeight: 700, color: 'var(--c-copper)' }}>{CASE_STUDIES[3].impactMetric}</div>
                  <div className="meta-tag-eucalyptus">{CASE_STUDIES[3].impactLabel}</div>
                </div>
                <div style={{ marginBottom: '18px' }}>
                  <div className="meta-tag-eucalyptus" style={{ marginBottom: '4px' }}>PROBLEM OVERVIEW:</div>
                  <p style={{ fontSize: '14px', color: 'var(--c-eucalyptus)', lineHeight: '1.6' }}>{CASE_STUDIES[3].overview}</p>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
                  {CASE_STUDIES[3].techStack.map((tech, tIdx) => (
                    <span key={tIdx} style={{ fontSize: '11px', fontWeight: 600, color: 'var(--c-charcoal)', background: 'var(--c-stone-light)', padding: '5px 12px', borderRadius: '2px', border: '1px solid var(--border-light)' }}>
                      {tech}
                    </span>
                  ))}
                </div>
                <Link to="/contact" className="btn-copper-primary">
                  <span>View Case Study</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
