import React from 'react';

export default function Hero() {
  return (
    <section id="hero" style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      paddingTop: '120px',
      paddingBottom: '80px',
      overflow: 'hidden',
      background: 'var(--bg-main)'
    }}>
      {/* Background Architectural Image with Brutalist Gradient Shroud */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'url(/assets/images/chronos-hero.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center 30%',
        opacity: 0.38,
        filter: 'grayscale(60%) contrast(120%)',
        zIndex: 0
      }} />

      {/* Concrete Grain Grid Overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
        zIndex: 1,
        pointerEvents: 'none'
      }} />

      {/* Vignette Gradients */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(circle at 75% 50%, transparent 20%, var(--bg-main) 85%), linear-gradient(to bottom, transparent 60%, var(--bg-main) 100%)',
        zIndex: 2
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 5, width: '100%' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 0.8fr',
          gap: '48px',
          alignItems: 'center'
        }} className="hero-grid">

          {/* Left Column: Monolithic Typography & CTAs */}
          <div>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '24px', flexWrap: 'wrap' }}>
              <span className="brutalist-badge">
                <span style={{ width: '6px', height: '6px', background: 'var(--accent-orange)' }} />
                CHRONOS // MONOLITHIC SPEC 8.0
              </span>
              <span className="brutalist-badge badge-cyan">
                C80 ULTRA-HIGH COMPRESSION CONCRETE
              </span>
            </div>

            <h1 style={{
              fontSize: 'clamp(2.8rem, 5.5vw, 5rem)',
              lineHeight: 0.98,
              letterSpacing: '-0.03em',
              textTransform: 'uppercase',
              marginBottom: '28px',
              fontFamily: 'var(--font-display)'
            }}>
              RAW CONCRETE.<br />
              <span style={{
                color: 'transparent',
                WebkitTextStroke: '2px var(--text-main)',
                letterSpacing: '-0.02em'
              }}>
                MONOLITHIC
              </span><br />
              <span style={{ color: 'var(--accent-orange)' }}>
                TIMELESS MASS.
              </span>
            </h1>

            <p style={{
              fontSize: '1.15rem',
              color: 'var(--text-muted)',
              lineHeight: 1.65,
              maxWidth: '580px',
              marginBottom: '40px'
            }}>
              Engineering unyielding architectural monoliths, board-formed fair-faced concrete mega-structures, and seismic cantilever landmarks across Northern Europe and East Asia.
            </p>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <a href="#projects" className="btn-primary">
                EXPLORE LANDMARKS
                <span style={{ fontSize: '1.1rem' }}>→</span>
              </a>
              <a href="#estimator" className="btn-secondary">
                CONCRETE MIX ESTIMATOR
              </a>
            </div>

            {/* Micro Specs Bar */}
            <div style={{
              marginTop: '56px',
              paddingTop: '28px',
              borderTop: '1px solid var(--border-subtle)',
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '24px'
            }}>
              <div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-dim)', letterSpacing: '0.1em' }}>
                  PEAK COMPRESSION
                </div>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', fontWeight: 800, color: 'var(--text-main)', marginTop: '4px' }}>
                  95.0 <span style={{ fontSize: '0.9rem', color: 'var(--accent-orange)' }}>MPa</span>
                </div>
              </div>

              <div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-dim)', letterSpacing: '0.1em' }}>
                  STRUCTURAL LIFE
                </div>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', fontWeight: 800, color: 'var(--text-main)', marginTop: '4px' }}>
                  150+ <span style={{ fontSize: '0.9rem', color: 'var(--accent-orange)' }}>YRS</span>
                </div>
              </div>

              <div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-dim)', letterSpacing: '0.1em' }}>
                  CARBON MINERALIZATION
                </div>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', fontWeight: 800, color: 'var(--text-main)', marginTop: '4px' }}>
                  -42% <span style={{ fontSize: '0.9rem', color: 'var(--accent-cyan)' }}>CO₂</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Brushed Steel Monolith Feature Card */}
          <div style={{
            position: 'relative',
            background: 'var(--bg-surface)',
            border: '2px solid var(--border-strong)',
            padding: '24px',
            boxShadow: 'var(--shadow-lg)'
          }}>
            {/* Corner Industrial Crosshairs */}
            <div style={{ position: 'absolute', top: '-6px', left: '-6px', width: '12px', height: '12px', background: 'var(--accent-orange)' }} />
            <div style={{ position: 'absolute', top: '-6px', right: '-6px', width: '12px', height: '12px', background: 'var(--accent-orange)' }} />
            <div style={{ position: 'absolute', bottom: '-6px', left: '-6px', width: '12px', height: '12px', background: 'var(--accent-orange)' }} />
            <div style={{ position: 'absolute', bottom: '-6px', right: '-6px', width: '12px', height: '12px', background: 'var(--accent-orange)' }} />

            {/* Featured Image */}
            <div style={{
              position: 'relative',
              width: '100%',
              height: '320px',
              overflow: 'hidden',
              border: '1px solid var(--border-subtle)',
              marginBottom: '20px'
            }}>
              <img
                src="/assets/images/chronos-tower.jpg"
                alt="Chronos Apex Monolith"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  filter: 'contrast(110%)'
                }}
              />
              <div style={{
                position: 'absolute',
                top: '12px',
                right: '12px',
                background: 'rgba(12, 13, 16, 0.85)',
                padding: '4px 10px',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                color: 'var(--accent-orange)',
                border: '1px solid var(--accent-orange)'
              }}>
                SECTOR: 57°42'N 11°58'E
              </div>
            </div>

            {/* Technical Spec Box */}
            <div style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.78rem',
              color: 'var(--text-muted)',
              display: 'flex',
              flexDirection: 'column',
              gap: '8px'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '6px' }}>
                <span style={{ color: 'var(--text-dim)' }}>PROJECT:</span>
                <span style={{ fontWeight: 700, color: 'var(--text-main)' }}>APEX MONOLITH SPIRE</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '6px' }}>
                <span style={{ color: 'var(--text-dim)' }}>FRAMEWORK:</span>
                <span style={{ color: 'var(--text-main)' }}>BOARD-FORMED C80/95</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '6px' }}>
                <span style={{ color: 'var(--text-dim)' }}>CANTILEVER:</span>
                <span style={{ color: 'var(--accent-orange)' }}>24.0m POST-TENSIONED</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--text-dim)' }}>FOUNDATION PILING:</span>
                <span style={{ color: 'var(--text-main)' }}>-58.0m BEDROCK ANCHOR</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
