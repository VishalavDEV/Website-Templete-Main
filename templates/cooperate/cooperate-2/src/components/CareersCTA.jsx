import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from './Icons';

export default function CareersCTA() {
  return (
    <section style={{ position: 'relative', overflow: 'hidden', backgroundColor: 'var(--text-charcoal)', color: 'var(--bg-cream)', padding: '120px 0' }}>
      
      {/* Background Atmosphere */}
      <div style={{ position: 'absolute', inset: 0, opacity: 0.15, mixBlendMode: 'luminosity', pointerEvents: 'none' }}>
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop"
          alt="Atmosphere"
          style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(100%)' }}
        />
      </div>

      <div className="container" style={{ position: 'relative' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <p className="font-mono text-ochre" style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
              Careers at ORION
            </p>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', lineHeight: '1.05', color: 'var(--bg-cream)' }}>
              Do work <br />
              <span className="italic font-serif">that matters.</span>
            </h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--bg-cream-300)', lineHeight: '1.6', maxWidth: '520px' }}>
              Join a multidisciplinary team of strategic thinkers, industrial engineers, and economists solving defining challenges facing business and society.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'flex-start' }}>
            <Link
              to="/careers"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
                maxWidth: '360px',
                padding: '1.25rem 1.75rem',
                backgroundColor: 'var(--bg-cream)',
                color: 'var(--text-charcoal)',
                fontSize: '0.75rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                transition: 'all 0.2s ease'
              }}
            >
              <span>Explore Opportunities</span>
              <ArrowRight size={16} />
            </Link>
            
            <Link
              to="/about"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
                maxWidth: '360px',
                padding: '1.25rem 1.75rem',
                border: '1px solid rgba(255,255,255,0.2)',
                color: 'var(--bg-cream)',
                fontSize: '0.75rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                transition: 'all 0.2s ease'
              }}
            >
              <span>Our Firm Culture</span>
              <span className="text-ochre font-mono">›</span>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
