import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  const [activeTab, setActiveTab] = useState('ALPHA');
  const [pulse, setPulse] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPulse((prev) => (prev + 1) % 100);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      style={{
        minHeight: '85vh',
        display: 'flex',
        alignItems: 'stretch',
        backgroundColor: '#111111',
        borderBottom: '1px solid rgba(255, 255, 255, 0.14)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          width: '100%',
          display: 'grid',
          gridTemplateColumns: '45% 55%',
        }}
        className="hero-split-grid"
      >
        {/* LEFT 45%: Strategic Typography & Direct Actions */}
        <div
          style={{
            padding: '80px 40px 60px 40px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            borderRight: '1px solid rgba(255, 255, 255, 0.14)',
            backgroundColor: '#111111',
          }}
        >
          <div>
            {/* Small Label */}
            <div className="section-label">
              VANTAGE / GLOBAL BUSINESS TRANSFORMATION
            </div>

            {/* Main Heading */}
            <h1
              className="hero-title"
              style={{
                color: '#FFFFFF',
                marginBottom: '20px',
              }}
            >
              BUILD<br />
              WHAT'S<br />
              <span className="accent-text">NEXT.</span>
            </h1>

            {/* Supporting Paragraph */}
            <p
              className="subheading"
              style={{
                maxWidth: '460px',
                marginBottom: '32px',
              }}
            >
              We help ambitious organizations turn complexity into measurable business advantage.
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px' }}>
              <Link to="/services" className="btn btn-primary">
                <span>Explore capabilities</span>
                <span className="arrow-glyph">→</span>
              </Link>
              <a href="#approach" className="btn btn-secondary">
                <span>Our approach</span>
              </a>
            </div>
          </div>

          {/* Bottom Telemetry Ticker */}
          <div
            style={{
              paddingTop: '24px',
              marginTop: '32px',
              borderTop: '1px solid rgba(255, 255, 255, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              fontSize: '11px',
              color: '#9B9B9B',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}
          >
            <span>DISPATCH // NYC - LDN - ZRH - SGP</span>
            <span style={{ color: '#C8F169' }}>■ LIVE EXECUTIVE FEED</span>
          </div>
        </div>

        {/* RIGHT 55%: Executive Command Center & Strategic Dashboard */}
        <div
          style={{
            backgroundColor: '#161616',
            position: 'relative',
            padding: '48px 40px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            overflow: 'hidden',
          }}
          className="grid-lines-bg"
        >
          {/* Top Status Bar with Interactive Filter Nodes */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingBottom: '16px',
              borderBottom: '1px solid rgba(255, 255, 255, 0.12)',
            }}
          >
            <div style={{ display: 'flex', gap: '8px' }}>
              {['ALPHA', 'BETA', 'GAMMA'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  style={{
                    padding: '4px 10px',
                    fontSize: '11px',
                    fontWeight: 800,
                    letterSpacing: '0.08em',
                    backgroundColor: activeTab === tab ? '#C8F169' : 'transparent',
                    color: activeTab === tab ? '#111111' : '#9B9B9B',
                    border: '1px solid rgba(255, 255, 255, 0.14)',
                    borderRadius: '2px',
                  }}
                >
                  {tab} TELEMETRY
                </button>
              ))}
            </div>

            <div style={{ fontSize: '11px', color: '#9B9B9B', letterSpacing: '0.08em' }}>
              LATENCY: <strong style={{ color: '#FFFFFF' }}>14MS</strong>
            </div>
          </div>

          {/* Central Composite Visual: Image Mask + Metric Overlays */}
          <div
            style={{
              position: 'relative',
              margin: '24px 0',
            }}
          >
            {/* Architectural Visual Container */}
            <div
              style={{
                height: '240px',
                borderRadius: '2px',
                overflow: 'hidden',
                border: '1px solid rgba(255, 255, 255, 0.14)',
                position: 'relative',
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80"
                alt="Corporate Architecture"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  filter: 'grayscale(100%) contrast(120%) brightness(75%)',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(135deg, rgba(17,17,17,0.7) 0%, rgba(200,241,105,0.08) 100%)',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  top: '12px',
                  right: '12px',
                  backgroundColor: 'rgba(17, 17, 17, 0.85)',
                  padding: '4px 10px',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  fontSize: '10px',
                  fontWeight: 700,
                  color: '#C8F169',
                }}
              >
                GRID REF // 40.7589° N, 73.9787° W
              </div>
            </div>

            {/* Floating Quantitative Overlays */}
            <div
              style={{
                position: 'absolute',
                bottom: '-20px',
                left: '20px',
                right: '20px',
                backgroundColor: '#111111',
                border: '1px solid rgba(255, 255, 255, 0.16)',
                padding: '16px 24px',
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '16px',
                borderRadius: '2px',
                boxShadow: '0 16px 40px rgba(0,0,0,0.8)',
              }}
            >
              <div>
                <div style={{ fontSize: 'clamp(22px, 2.4vw, 30px)', fontWeight: 800, color: '#C8F169', lineHeight: 1 }}>
                  +42%
                </div>
                <div style={{ fontSize: '10px', fontWeight: 800, color: '#9B9B9B', letterSpacing: '0.08em', marginTop: '4px' }}>
                  GROWTH
                </div>
              </div>

              <div>
                <div style={{ fontSize: 'clamp(22px, 2.4vw, 30px)', fontWeight: 800, color: '#FFFFFF', lineHeight: 1 }}>
                  18
                </div>
                <div style={{ fontSize: '10px', fontWeight: 800, color: '#9B9B9B', letterSpacing: '0.08em', marginTop: '4px' }}>
                  MARKETS
                </div>
              </div>

              <div>
                <div style={{ fontSize: 'clamp(22px, 2.4vw, 30px)', fontWeight: 800, color: '#899DFF', lineHeight: 1 }}>
                  1,240+
                </div>
                <div style={{ fontSize: '10px', fontWeight: 800, color: '#9B9B9B', letterSpacing: '0.08em', marginTop: '4px' }}>
                  PROJECTS
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Live System Telemetry Matrix */}
          <div
            style={{
              paddingTop: '28px',
              borderTop: '1px solid rgba(255, 255, 255, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              fontSize: '11px',
              color: '#9B9B9B',
            }}
          >
            <span>ACTIVE CORE: STRATEGY + AI DATA MESH</span>
            <div style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
              {[30, 70, 45, 90, 60, 85, 40, 95].map((val, i) => (
                <div
                  key={i}
                  style={{
                    width: '3px',
                    height: `${(val * ((pulse + i * 15) % 100)) / 120 + 6}px`,
                    backgroundColor: i % 2 === 0 ? '#C8F169' : '#899DFF',
                    transition: 'height 0.6s ease',
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .hero-split-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
