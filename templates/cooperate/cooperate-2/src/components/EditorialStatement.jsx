import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from './Icons';

export default function EditorialStatement({
  eyebrow = "PERSPECTIVE",
  supportingText = "ORION works with leaders across industries to solve complex strategic, operational, and technological challenges.",
  statsLabel = "18 years of navigating structural change",
  linkText = "Learn about our approach",
  linkTo = "/about"
}) {
  return (
    <section className="section-py-sm">
      <div className="container">
        <div style={{ paddingBottom: '3rem', borderBottom: '1px solid var(--border-light)' }}>
          <p className="font-mono text-terracotta" style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '1rem' }}>
            {eyebrow}
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3.5rem', alignItems: 'start' }}>
            <div>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.25rem, 4.5vw, 4rem)', lineHeight: '1.08', color: 'var(--text-charcoal)' }}>
                The future belongs to organizations that can turn <span className="italic font-serif">uncertainty</span> into <span className="italic font-serif">advantage</span>.
              </h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '2rem', paddingTop: '0.5rem' }}>
              <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                {supportingText}
              </p>
              <div style={{ paddingTop: '1.5rem', borderTop: '1px solid var(--border-light)' }}>
                <p className="font-mono" style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>
                  {statsLabel}
                </p>
                {linkText && linkTo && (
                  <Link to={linkTo} className="btn-editorial-underline">
                    <span>{linkText}</span>
                    <ArrowRight size={14} />
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
