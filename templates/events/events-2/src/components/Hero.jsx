import React from 'react';
import { Calendar, MapPin, ArrowRight, ArrowDown, Globe, PlayCircle } from 'lucide-react';
import { Countdown } from './Countdown';
import { SpecularButton } from './SpecularButton';
import '../styles/hero.css';

export const Hero = ({ isCompletedMode, onRegisterClick, onExploreClick, onExploreHighlights }) => {
  return (
    <section className="hero-section relative min-h-screen w-full max-w-full overflow-x-hidden pt-28 lg:pt-36 pb-12 lg:pb-16 flex items-center">
      {/* Glow Orbs & Particles */}
      <div className="hero-glow-1" />
      <div className="hero-glow-2" />
      <div className="hero-grid-bg" />

      <div className="container w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="hero-content grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <div className="hero-badge-pill inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-6">
              <span>THE FUTURE OF TECHNOLOGY & INTELLIGENCE</span>
            </div>

            <h1 className="hero-title text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4">
              CYBER<span className="text-gradient">NEXUS 2026</span>
            </h1>

            <h2 className="text-xl sm:text-2xl font-semibold text-slate-800 mb-4">
              Global Technology & Intelligence Summit
            </h2>

            <p className="hero-description text-base sm:text-lg text-slate-600 mb-8 max-w-xl leading-relaxed">
              Join 5,000+ visionary software architects, AI researchers, enterprise leaders, and DeepTech founders for three days of transformative keynotes, interactive labs, and executive networking.
            </p>

            {/* Date & Location Pills */}
            <div className="hero-meta-bar flex flex-wrap items-center gap-3 sm:gap-4 mb-8">
              <div className="hero-meta-item flex items-center gap-2.5 px-4 py-2.5 bg-white rounded-xl border border-slate-200 shadow-sm text-sm font-semibold text-slate-800">
                <Calendar size={18} className="hero-meta-icon text-indigo-600" />
                <span>August 28–30, 2026</span>
              </div>
              <div className="hero-meta-item flex items-center gap-2.5 px-4 py-2.5 bg-white rounded-xl border border-slate-200 shadow-sm text-sm font-semibold text-slate-800">
                <MapPin size={18} className="hero-meta-icon text-indigo-600" />
                <span>Chennai Convention Centre, India</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="hero-cta-group flex flex-wrap items-center gap-4 mb-8 w-full sm:w-auto">
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

          {/* Right Column: Hero Card & Floating Stats Badge with non-colliding layout */}
          <div className="hero-card-showcase lg:col-span-5 relative w-full pb-6">
            <div className="hero-main-card relative bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xl">
              
              {/* Media Container */}
              <div className="hero-card-image-wrapper relative w-full h-56 sm:h-64 rounded-2xl overflow-hidden shadow-inner">
                <img
                  src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1000&q=80"
                  alt="CYBERNEXUS Mainstage Presentation"
                  className="hero-card-image w-full h-full object-cover"
                />
                <div className="hero-card-badge absolute top-3.5 left-3.5 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-bold text-indigo-600 border border-slate-200 shadow-sm">
                  {isCompletedMode ? 'RECAP EDITION' : 'LIVE SUMMIT 2026'}
                </div>
              </div>

              {/* Spaced Popup Card - Clean relative spacing preventing image collision */}
              <div className="hero-floating-badge z-10 w-full bg-slate-900 text-white rounded-2xl p-3.5 sm:p-4 shadow-lg border border-slate-700 flex items-center gap-3.5 my-4">
                <div className="floating-badge-icon w-10 h-10 rounded-xl bg-indigo-600/30 text-indigo-400 flex items-center justify-center flex-shrink-0">
                  <Globe size={20} />
                </div>
                <div>
                  <div className="text-sm sm:text-base font-extrabold text-white">25+ Countries</div>
                  <div className="text-xs text-slate-300">Global Tech Delegation</div>
                </div>
              </div>

              {/* Text info below media & popup */}
              <div className="hero-card-text mt-2">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
                  {isCompletedMode ? 'Global AI Summit 2025 Highlights' : 'Architecting Intelligence & Systems'}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {isCompletedMode
                    ? 'Access 36+ recorded sessions, keynotes, and photo archives from our Bengaluru summit.'
                    : 'Featuring 80+ international keynote speakers across 4 technical tracks and quantum labs.'}
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

