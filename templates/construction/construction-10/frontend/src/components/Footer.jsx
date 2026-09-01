import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{ background: 'var(--bg-surface)', borderTop: '1px solid var(--border-subtle)', padding: '60px 0 30px', position: 'relative' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '40px', marginBottom: '48px' }} className="footer-grid">
          
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
              <div
                style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '4px',
                  background: 'var(--accent-primary)',
                  color: 'var(--accent-primary-text)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 900,
                  fontSize: '0.85rem'
                }}
              >
                A
              </div>
              <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-main)' }}>
                AEROVISION
              </span>
            </div>

            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.6, maxWidth: '340px' }}>
              Architectural design and computational engineering for high-performance supertall towers and responsive envelopes.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 style={{ fontSize: '0.82rem', fontFamily: 'var(--font-mono)', color: 'var(--text-main)', marginBottom: '14px', textTransform: 'uppercase', fontWeight: 700 }}>
              Studio
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.86rem' }}>
              <a href="#hero" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Overview</a>
              <a href="#projects" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Selected Works</a>
              <a href="#wind-tunnel" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Aerodynamics</a>
              <a href="#estimator" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Estimator</a>
            </div>
          </div>

          {/* Typologies */}
          <div>
            <h4 style={{ fontSize: '0.82rem', fontFamily: 'var(--font-mono)', color: 'var(--text-main)', marginBottom: '14px', textTransform: 'uppercase', fontWeight: 700 }}>
              Typologies
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.86rem' }}>
              <span style={{ color: 'var(--text-muted)' }}>Supertall Towers</span>
              <span style={{ color: 'var(--text-muted)' }}>Kinetic Envelopes</span>
              <span style={{ color: 'var(--text-muted)' }}>Civic Pavilions</span>
              <span style={{ color: 'var(--text-muted)' }}>Sky-Habitats</span>
            </div>
          </div>

          {/* Locations */}
          <div>
            <h4 style={{ fontSize: '0.82rem', fontFamily: 'var(--font-mono)', color: 'var(--text-main)', marginBottom: '14px', textTransform: 'uppercase', fontWeight: 700 }}>
              Offices
            </h4>
            <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)', lineHeight: 1.5, marginBottom: '6px' }}>
              London · Tokyo · Singapore
            </p>
            <p style={{ fontSize: '0.86rem', color: 'var(--text-main)', fontWeight: 600 }}>
              contact@aerovision.studio
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '24px', borderTop: '1px solid var(--border-subtle)', flexWrap: 'wrap', gap: '14px' }}>
          <div style={{ fontSize: '0.78rem', color: 'var(--text-dim)' }}>
            © 2026 Aerovision Studio Ltd. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            style={{
              background: 'transparent',
              border: '1px solid var(--border-subtle)',
              borderRadius: '4px',
              padding: '6px 12px',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              color: 'var(--text-main)',
              fontSize: '0.75rem',
              fontWeight: 600,
              cursor: 'pointer'
            }}
          >
            <ArrowUp size={13} /> Back to top
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 576px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
