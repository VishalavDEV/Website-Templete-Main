import React from 'react';

export default function PageHeader({ code, tag, title, description, telemetry }) {
  return (
    <section className="section-forest" style={{ paddingTop: '160px', paddingBottom: '90px' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '50px', alignItems: 'flex-end' }}>
          <div>
            <div className="editorial-tag">
              <div className="editorial-tag-line" style={{ background: 'var(--color-copper)' }}></div>
              <span className="label-caps-forest" style={{ color: 'var(--color-copper-light)' }}>
                {tag || 'ENTERPRISE OVERVIEW'}
              </span>
            </div>
            <h1 className="editorial-heading-lg" style={{ color: 'var(--text-light-primary)', margin: '14px 0 0' }}>
              {title}
            </h1>
          </div>

          <div>
            <p className="editorial-desc" style={{ color: 'var(--text-light-secondary)', fontSize: '18px' }}>
              {description}
            </p>
            {telemetry && (
              <div style={{ marginTop: '24px', display: 'inline-block', padding: '6px 16px', background: 'var(--bg-forest-card)', borderRadius: '999px', border: '1px solid var(--border-forest)', fontSize: '12px', fontWeight: 600, color: 'var(--color-sage)', letterSpacing: '0.08em' }}>
                {telemetry}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
