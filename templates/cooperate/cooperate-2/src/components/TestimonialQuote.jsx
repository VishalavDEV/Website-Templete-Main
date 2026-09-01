import React from 'react';
import { TESTIMONIAL } from '../data/content';

export default function TestimonialQuote({ data = TESTIMONIAL, dark = false }) {
  return (
    <section
      style={{
        padding: '120px 0',
        backgroundColor: dark ? 'var(--charcoal-900)' : 'var(--bg-cream-100)',
        color: dark ? 'var(--bg-cream)' : 'var(--text-charcoal)',
        borderTop: '1px solid var(--border-light)',
        borderBottom: '1px solid var(--border-light)'
      }}
    >
      <div className="container" style={{ maxWidth: '900px', textAlign: 'center' }}>
        
        {/* Giant Serif Quotation Mark */}
        <div
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(5rem, 10vw, 8rem)',
            lineHeight: '0.8',
            color: 'var(--accent-terracotta)',
            userSelect: 'none',
            opacity: 0.85,
            marginBottom: '1.5rem'
          }}
        >
          “
        </div>

        {/* Big Editorial Quote */}
        <blockquote
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(1.75rem, 3.5vw, 3rem)',
            letterSpacing: '-0.02em',
            lineHeight: '1.15',
            margin: '0 auto 2.5rem auto'
          }}
        >
          {data.quote.replace(/^[“"]|[”"]$/g, '')}
        </blockquote>

        {/* Attribution */}
        <div style={{ paddingTop: '1.5rem', borderTop: '1px solid var(--border-light)', maxWidth: '320px', margin: '0 auto' }}>
          <p className="font-mono" style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em' }}>
            {data.author}
          </p>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>
            {data.role}
          </p>
          <p className="font-serif italic" style={{ fontSize: '0.85rem', color: 'var(--text-charcoal)', marginTop: '0.2rem' }}>
            {data.company}
          </p>
          {data.metric && (
            <p className="font-mono text-terracotta" style={{ fontSize: '0.75rem', marginTop: '0.5rem' }}>
              Key Impact: {data.metric}
            </p>
          )}
        </div>

      </div>
    </section>
  );
}
