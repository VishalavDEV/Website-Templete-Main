import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowDown, ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <section
      style={{
        position: 'relative',
        minHeight: 'calc(100vh - 120px)',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        backgroundColor: '#064E3B',
        color: 'var(--ivory)'
      }}
    >
      {/* Soft Emerald Glow Background Radial */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(4, 120, 87, 0.4) 0%, rgba(6, 78, 59, 0) 70%)',
          pointerEvents: 'none',
          filter: 'blur(40px)'
        }}
      />

      {/* Decorative Gold Rings */}
      <div
        className="animate-float"
        style={{
          position: 'absolute',
          top: '15%',
          left: '5%',
          width: '260px',
          height: '260px',
          border: '1px solid rgba(212, 175, 55, 0.18)',
          borderRadius: '50%',
          pointerEvents: 'none'
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '10%',
          right: '45%',
          width: '380px',
          height: '380px',
          border: '1px solid rgba(212, 175, 55, 0.12)',
          borderRadius: '50%',
          pointerEvents: 'none'
        }}
      />

      {/* Hero Layout: Grid with Left Text & Right Image */}
      <div
        className="container-custom"
        style={{
          position: 'relative',
          zIndex: 10,
          width: '100%',
          paddingTop: '4rem',
          paddingBottom: '5rem'
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '3rem',
            alignItems: 'center'
          }}
        >
          {/* Left Text Content */}
          <div style={{ gridColumn: 'span 12' }} className="hero-text-col animate-slide-up">
            {/* Small Gold Eyebrow */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                padding: '0.4rem 1.2rem',
                background: 'rgba(212, 175, 55, 0.12)',
                border: '1px solid var(--border-gold)',
                marginBottom: '1.8rem'
              }}
            >
              <Sparkles size={14} style={{ color: 'var(--gold-primary)' }} />
              <span
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.72rem',
                  fontWeight: '600',
                  letterSpacing: '0.22em',
                  color: 'var(--gold-light)',
                  textTransform: 'uppercase'
                }}
              >
                THE ART OF FINE JEWELLERY
              </span>
            </div>

            {/* Main Heading with Gold Highlight on "Shine." */}
            <h1
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2.8rem, 5.2vw, 4.8rem)',
                fontWeight: '300',
                lineHeight: 1.12,
                letterSpacing: '-0.02em',
                marginBottom: '1.4rem',
                color: '#FAF7F0'
              }}
            >
              Timeless Beauty,<br />
              Crafted to <span style={{ color: 'var(--gold-primary)', fontStyle: 'italic', fontWeight: '400' }}>Shine.</span>
            </h1>

            {/* Description */}
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(1rem, 1.25vw, 1.15rem)',
                fontWeight: '300',
                color: '#D4DEC9',
                maxWidth: '560px',
                lineHeight: 1.7,
                marginBottom: '2.5rem'
              }}
            >
              Discover exquisite jewellery crafted with timeless elegance and extraordinary attention to detail.
            </p>

            {/* CTA Buttons */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '1.2rem'
              }}
            >
              <Link to="/shop" className="btn-emerald">
                EXPLORE COLLECTION <ChevronRight size={16} style={{ color: 'var(--gold-primary)' }} />
              </Link>
              <Link to="/about" className="btn-outline-gold">
                DISCOVER OUR STORY
              </Link>
            </div>
          </div>

          {/* Right Image Showcase */}
          <div style={{ gridColumn: 'span 12' }} className="hero-img-col">
            <div
              style={{
                position: 'relative',
                width: '100%',
                aspectRatio: '4 / 4.8',
                overflow: 'hidden',
                border: '1px solid var(--border-gold)',
                boxShadow: 'var(--shadow-lg)'
              }}
              className="img-zoom-container"
            >
              <img
                src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=1200"
                alt="Aurelia Royal Emerald & Gold Jewellery"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, rgba(6, 78, 59, 0.1) 0%, rgba(6, 78, 59, 0.5) 100%)'
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        style={{
          position: 'absolute',
          bottom: '1.8rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.4rem',
          color: 'var(--gold-primary)',
          opacity: 0.85
        }}
      >
        <span style={{ fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Scroll</span>
        <ArrowDown size={14} className="animate-float" />
      </div>

      <style>{`
        @media (min-width: 992px) {
          .hero-text-col { grid-column: span 7 !important; }
          .hero-img-col { grid-column: span 5 !important; }
        }
      `}</style>
    </section>
  );
}
