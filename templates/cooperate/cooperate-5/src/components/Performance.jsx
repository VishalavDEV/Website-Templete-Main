import React from 'react';
import { PERFORMANCE_METRICS } from '../data/corporateData';

export default function Performance() {
  return (
    <section className="section-forest-surface" id="performance">
      <div className="container">
        {/* Section Header */}
        <div className="editorial-header" style={{ maxWidth: '800px' }}>
          <div className="editorial-tag">
            <div className="editorial-tag-line"></div>
            <span className="label-caps-forest">VERIFIED PERFORMANCE</span>
          </div>
          <h2 className="editorial-heading-lg" style={{ color: 'var(--text-light-primary)' }}>
            MEASURED IN OUTCOMES.
          </h2>
          <p className="editorial-desc">
            We hold our engineering architectures to rigorous quantitative service-level agreements and measurable commercial KPIs.
          </p>
        </div>

        {/* Editorial Outcomes Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '30px' }}>
          {PERFORMANCE_METRICS.map((metric, idx) => (
            <div key={idx} style={{ background: 'var(--bg-forest-card)', border: '1px solid var(--border-forest)', borderRadius: '16px', padding: '36px 28px', transition: 'transform 0.2s ease' }}>
              <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', color: 'var(--color-sage)', textTransform: 'uppercase', marginBottom: '16px' }}>
                OUTCOME // 0{idx + 1}
              </div>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(40px, 4vw, 54px)', fontWeight: 600, color: 'var(--color-copper-light)', lineHeight: 1, marginBottom: '12px' }}>
                {metric.value}
              </div>
              <div style={{ fontSize: '17px', fontWeight: 600, color: '#FFFFFF', marginBottom: '8px' }}>
                {metric.label}
              </div>
              <p style={{ fontSize: '13px', color: 'var(--text-light-secondary)', lineHeight: '1.6' }}>
                {metric.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
