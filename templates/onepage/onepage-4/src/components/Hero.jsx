import React from 'react';
import { ArrowRight, ChevronRight, Activity } from 'lucide-react';
import { heroData } from '../data/content';

export default function Hero() {
  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const offsetTop = el.offsetTop - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '7rem',
        paddingBottom: '5rem',
        overflow: 'hidden'
      }}
    >

      {/* Desktop Floating Visual Cards (Visible >1024px) */}
      <div className="hero-desktop-floats">
        <div 
          className="floating-hero-card hero-left-1 animate-float"
          style={{ top: '18%', left: '3.5%', maxWidth: '265px' }}
        >
          <div style={{ position: 'relative', width: '48px', height: '48px', borderRadius: '14px', overflow: 'hidden', flexShrink: 0, border: '1.5px solid rgba(0, 102, 255, 0.3)', boxShadow: '0 4px 14px rgba(0, 102, 255, 0.2)' }}>
            <img src="images/portfolio_vortex.png" alt="AI Neural Platform" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div>
            <div style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--text-main)' }}>
              AI Neural Engine
            </div>
            <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--accent-emerald)', display: 'flex', alignItems: 'center', gap: '0.35rem', marginTop: '0.1rem' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-emerald)', boxShadow: '0 0 8px var(--accent-emerald)' }}></span>
              99.9% Autonomous
            </div>
          </div>
        </div>

        <div 
          className="floating-hero-card hero-left-2 animate-float-alt"
          style={{ top: '56%', left: '4.5%', maxWidth: '265px' }}
        >
          <div style={{ position: 'relative', width: '48px', height: '48px', borderRadius: '14px', overflow: 'hidden', flexShrink: 0, border: '1.5px solid rgba(124, 58, 237, 0.3)', boxShadow: '0 4px 14px rgba(124, 58, 237, 0.2)' }}>
            <img src="images/portfolio_prism.png" alt="Zero Trust Cyber Security" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div>
            <div style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--text-main)' }}>
              Zero-Trust Cyber Vault
            </div>
            <div style={{ fontSize: '0.75rem', fontWeight: 500, color: 'var(--text-subtle)', marginTop: '0.1rem' }}>
              SOC-2 Type II Certified
            </div>
          </div>
        </div>

        <div 
          className="floating-hero-card hero-right-1 animate-float-alt"
          style={{ top: '20%', right: '3.5%', maxWidth: '265px' }}
        >
          <div style={{ position: 'relative', width: '48px', height: '48px', borderRadius: '14px', overflow: 'hidden', flexShrink: 0, border: '1.5px solid rgba(6, 182, 212, 0.3)', boxShadow: '0 4px 14px rgba(6, 182, 212, 0.2)' }}>
            <img src="images/portfolio_nova.png" alt="Sub-10ms Edge Network" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div>
            <div style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--text-main)' }}>
              Sub-10ms Latency
            </div>
            <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--accent-blue)', marginTop: '0.1rem' }}>
              Global Edge Network
            </div>
          </div>
        </div>

        <div 
          className="floating-hero-card hero-right-2 animate-float"
          style={{ top: '58%', right: '4.5%', maxWidth: '265px' }}
        >
          <div style={{ position: 'relative', width: '48px', height: '48px', borderRadius: '14px', overflow: 'hidden', flexShrink: 0, border: '1.5px solid rgba(225, 29, 72, 0.3)', boxShadow: '0 4px 14px rgba(225, 29, 72, 0.2)' }}>
            <img src="images/portfolio_luminary.png" alt="Real-time Growth Platform" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div>
            <div style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--text-main)' }}>
              Real-time Growth
            </div>
            <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--accent-pink)', display: 'flex', alignItems: 'center', gap: '0.35rem', marginTop: '0.1rem' }}>
              <Activity size={12} /> +340% Throughput
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Light Glow Orbs */}
      <div 
        style={{
          position: 'absolute',
          top: '20%',
          right: '10%',
          width: '450px',
          height: '450px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,102,255,0.12) 0%, rgba(124,58,237,0.05) 50%, transparent 70%)',
          filter: 'blur(40px)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />
      <div 
        style={{
          position: 'absolute',
          bottom: '15%',
          left: '5%',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(6,182,212,0.12) 0%, rgba(0,102,255,0.05) 50%, transparent 70%)',
          filter: 'blur(40px)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
        
        {/* Live Status Pill Badge */}
        <div 
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.625rem',
            padding: '0.5rem 1.25rem',
            borderRadius: 'var(--radius-full)',
            background: 'rgba(255, 255, 255, 0.85)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(0, 102, 255, 0.25)',
            boxShadow: '0 4px 16px rgba(0, 102, 255, 0.08)',
            marginBottom: '2rem'
          }}
        >
          <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-main)' }}>
            {heroData.badge}
          </span>
        </div>

        {/* Main Hero Headline */}
        <h1 
          style={{
            fontSize: 'clamp(2.5rem, 5vw + 1rem, 4.75rem)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            lineHeight: 1.1,
            maxWidth: '1000px',
            margin: '0 auto 1.75rem auto'
          }}
        >
          {heroData.titleLine1}{' '}
          <span className="text-gradient">{heroData.titleHighlight}</span>{' '}
          {heroData.titleLine2}
        </h1>

        {/* Subtitle */}
        <p 
          style={{
            fontSize: 'clamp(1.05rem, 1.5vw, 1.25rem)',
            color: 'var(--text-muted)',
            maxWidth: '740px',
            margin: '0 auto 2.75rem auto',
            lineHeight: 1.6
          }}
        >
          {heroData.subtitle}
        </p>

        {/* CTA Buttons */}
        <div 
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1.25rem',
            flexWrap: 'wrap',
            marginBottom: '3.5rem'
          }}
        >
          <button 
            onClick={() => handleScrollTo('portfolio')} 
            className="btn btn-primary"
            style={{ padding: '1rem 2.25rem', fontSize: '1rem' }}
          >
            {heroData.primaryCta} <ArrowRight size={18} />
          </button>
          <button 
            onClick={() => handleScrollTo('contact')} 
            className="btn btn-secondary"
            style={{ padding: '1rem 2.25rem', fontSize: '1rem' }}
          >
            {heroData.secondaryCta} <ChevronRight size={18} />
          </button>
        </div>

        {/* Tablet & Mobile Floating Feature Badges Grid */}
        <div className="hero-mobile-floats">
          <div className="floating-hero-card">
            <div style={{ position: 'relative', width: '40px', height: '40px', borderRadius: '12px', overflow: 'hidden', flexShrink: 0, border: '1.5px solid rgba(0, 102, 255, 0.3)' }}>
              <img src="images/portfolio_vortex.png" alt="AI Neural Platform" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--text-main)' }}>AI Neural Engine</div>
              <div style={{ fontSize: '0.7rem', fontWeight: 600, color: 'var(--accent-emerald)' }}>99.9% Autonomous</div>
            </div>
          </div>

          <div className="floating-hero-card">
            <div style={{ position: 'relative', width: '40px', height: '40px', borderRadius: '12px', overflow: 'hidden', flexShrink: 0, border: '1.5px solid rgba(124, 58, 237, 0.3)' }}>
              <img src="images/portfolio_prism.png" alt="Zero Trust Cyber Security" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--text-main)' }}>Zero-Trust Cyber Vault</div>
              <div style={{ fontSize: '0.7rem', fontWeight: 500, color: 'var(--text-subtle)' }}>SOC-2 Type II</div>
            </div>
          </div>

          <div className="floating-hero-card">
            <div style={{ position: 'relative', width: '40px', height: '40px', borderRadius: '12px', overflow: 'hidden', flexShrink: 0, border: '1.5px solid rgba(6, 182, 212, 0.3)' }}>
              <img src="images/portfolio_nova.png" alt="Sub-10ms Edge Network" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--text-main)' }}>Sub-10ms Latency</div>
              <div style={{ fontSize: '0.7rem', fontWeight: 600, color: 'var(--accent-blue)' }}>Global Edge Network</div>
            </div>
          </div>

          <div className="floating-hero-card">
            <div style={{ position: 'relative', width: '40px', height: '40px', borderRadius: '12px', overflow: 'hidden', flexShrink: 0, border: '1.5px solid rgba(225, 29, 72, 0.3)' }}>
              <img src="images/portfolio_luminary.png" alt="Real-time Growth Platform" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--text-main)' }}>Real-time Growth</div>
              <div style={{ fontSize: '0.7rem', fontWeight: 600, color: 'var(--accent-pink)', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                <Activity size={10} /> +340% Throughput
              </div>
            </div>
          </div>
        </div>

        {/* Metrics Grid Strip */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
            gap: '1rem',
            maxWidth: '1050px',
            margin: '0 auto'
          }}
        >
          {heroData.metrics.map((metric, index) => (
            <div 
              key={index}
              className="glass-card"
              style={{
                padding: 'clamp(1rem, 2.5vw, 1.5rem) clamp(0.75rem, 2vw, 1.25rem)',
                textAlign: 'center',
                background: 'rgba(255, 255, 255, 0.75)'
              }}
            >
              <div 
                style={{
                  fontSize: 'clamp(1.6rem, 3.5vw, 2.25rem)',
                  fontWeight: 800,
                  letterSpacing: '-0.02em',
                  marginBottom: '0.25rem'
                }}
                className="text-gradient"
              >
                {metric.value}
              </div>
              <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-subtle)' }}>
                {metric.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
