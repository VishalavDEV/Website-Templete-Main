import React from 'react';
import { Calendar, MapPin, ArrowRight, ArrowDown, Globe, PlayCircle } from 'lucide-react';
import { Countdown } from './Countdown';
import { SpecularButton } from './SpecularButton';
import '../styles/hero.css';

export const Hero = ({ isCompletedMode, onRegisterClick, onExploreClick, onExploreHighlights }) => {
  return (
    <section className="hero-section">
      {/* Glow Orbs & Particles */}
      <div className="hero-glow-1" />
      <div className="hero-glow-2" />
      <div className="hero-grid-bg" />

      <div className="container">
        <div className="hero-content">
          {/* Left Column: Text & CTAs */}
          <div>
            <div className="hero-badge-pill">
              <span>THE FUTURE OF TECHNOLOGY & INTELLIGENCE</span>
            </div>

            <h1 className="hero-title">
              CYBER<span className="text-gradient">NEXUS 2026</span>
            </h1>

            <h2
              style={{
                fontSize: 'clamp(1.4rem, 2.5vw, 1.8rem)',
                fontWeight: '600',
                color: '#ffffff',
                marginBottom: '16px'
              }}
            >
              Global Technology & Intelligence Summit
            </h2>

            <p className="hero-description">
              Join 5,000+ visionary software architects, AI researchers, enterprise leaders, and DeepTech founders for three days of transformative keynotes, interactive labs, and executive networking.
            </p>

            {/* Date & Location Pills */}
            <div className="hero-meta-bar">
              <div className="hero-meta-item">
                <Calendar size={18} className="hero-meta-icon" />
                <span>August 28–30, 2026</span>
              </div>
              <div className="hero-meta-item">
                <MapPin size={18} className="hero-meta-icon" />
                <span>Chennai Convention Centre, India</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="hero-cta-group" style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
              {isCompletedMode ? (
                <SpecularButton
                  size="lg"
                  radius={16}
                  lineColor="#00f2fe"
                  baseColor="#7c3aed"
                  textColor="#ffffff"
                  tint="#7c3aed"
                  tintOpacity={0.3}
                  autoAnimate
                  onClick={onExploreHighlights}
                >
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                    <PlayCircle size={18} /> View Event Highlights →
                  </span>
                </SpecularButton>
              ) : (
                <SpecularButton
                  size="lg"
                  radius={16}
                  lineColor="#00f2fe"
                  baseColor="#7c3aed"
                  textColor="#ffffff"
                  tint="#7c3aed"
                  tintOpacity={0.3}
                  autoAnimate
                  onClick={onRegisterClick}
                >
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                    Register Now <ArrowRight size={18} />
                  </span>
                </SpecularButton>
              )}

              <SpecularButton
                size="lg"
                radius={16}
                lineColor="#ffffff"
                baseColor="#334155"
                textColor="#f8fafc"
                tint="#1e293b"
                tintOpacity={0.5}
                onClick={onExploreClick}
              >
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                  Explore Event <ArrowDown size={18} />
                </span>
              </SpecularButton>
            </div>

            {/* Live Countdown Component */}
            <Countdown
              isCompletedMode={isCompletedMode}
              targetDate="2026-08-28T09:00:00"
              onExploreHighlights={onExploreHighlights}
            />
          </div>

          {/* Right Column: Hero Card & Floating Stats Badge */}
          <div className="hero-card-showcase">
            <div className="hero-main-card">
              <div className="hero-card-image-wrapper">
                <img
                  src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1000&q=80"
                  alt="CYBERNEXUS Mainstage Presentation"
                  className="hero-card-image"
                />
                <div className="hero-card-badge">
                  {isCompletedMode ? 'RECAP EDITION' : 'LIVE SUMMIT 2026'}
                </div>
              </div>

              <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '8px' }}>
                {isCompletedMode ? 'Global AI Summit 2025 Highlights' : 'Architecting Intelligence & Systems'}
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                {isCompletedMode
                  ? 'Access 36+ recorded sessions, keynotes, and photo archives from our Bengaluru summit.'
                  : 'Featuring 80+ international keynote speakers across 4 technical tracks and quantum labs.'}
              </p>

              {/* Floating Badge */}
              <div className="hero-floating-badge">
                <div className="floating-badge-icon">
                  <Globe size={22} />
                </div>
                <div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#ffffff' }}>25+ Countries</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>Global Tech Delegation</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
