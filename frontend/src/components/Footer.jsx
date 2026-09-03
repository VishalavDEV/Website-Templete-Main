import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{
      backgroundColor: '#07090c',
      borderTop: '1px solid var(--border-dark)',
      padding: '80px 0 40px 0',
      color: 'var(--text-muted)'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '48px',
          marginBottom: '64px'
        }}>
          {/* Brand Col */}
          <div>
            <a href="#home" style={{
              display: 'flex',
              alignItems: 'center',
              fontSize: '1.8rem',
              fontWeight: '800',
              letterSpacing: '-0.03em',
              color: '#ffffff',
              fontFamily: 'var(--font-display)',
              marginBottom: '16px'
            }}>
              <span style={{ color: 'var(--accent)' }}>a</span>sentus
            </a>
            <p style={{ fontSize: '0.9rem', lineHeight: 1.7, maxWidth: '280px' }}>
              Precision computational engineering and minimalist architectural web design systems.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '0.95rem', fontWeight: '700', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              Navigation
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.9rem' }}>
              <li><a href="#home" style={{ transition: 'var(--transition-smooth)' }}>Home Carousel</a></li>
              <li><a href="#pricing" style={{ transition: 'var(--transition-smooth)' }}>Pricing Matrix</a></li>
              <li><a href="#about" style={{ transition: 'var(--transition-smooth)' }}>About Atelier</a></li>
              <li><a href="#products" style={{ transition: 'var(--transition-smooth)' }}>Showcase Projects</a></li>
              <li><a href="#faq" style={{ transition: 'var(--transition-smooth)' }}>FAQ & Specs</a></li>
            </ul>
          </div>

          {/* Architecture Capabilities */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '0.95rem', fontWeight: '700', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              Capabilities
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.9rem' }}>
              <li><span>Parametric Modeling</span></li>
              <li><span>Java Spring Boot APIs</span></li>
              <li><span>Responsive Web Systems</span></li>
              <li><span>High-Tech UI Frameworks</span></li>
            </ul>
          </div>

          {/* Back to top */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'space-between' }}>
            <div>
              <h4 style={{ color: '#ffffff', fontSize: '0.95rem', fontWeight: '700', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                Return To Summit
              </h4>
              <button
                onClick={scrollToTop}
                className="btn-outline"
                style={{ padding: '10px 20px', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8rem' }}
              >
                Top of Page <ArrowUp size={16} />
              </button>
            </div>
          </div>
        </div>

        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.05)',
          paddingTop: '32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '16px',
          fontSize: '0.85rem'
        }}>
          <div>
            � {new Date().getFullYear()} Asentus Architecture & Engineering. All rights reserved.
          </div>
          <div>
            Engineered with React + Spring Boot REST.
          </div>
        </div>
      </div>
    </footer>
  );
}
