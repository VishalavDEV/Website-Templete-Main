import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import MotorcycleCanvas from './components/MotorcycleCanvas';
import HeroOverlay from './components/HeroOverlay';
import TechSpecs from './components/TechSpecs';
import RevRoom from './components/RevRoom';
import ContactSection from './components/ContactSection';
import ReservationModal from './components/ReservationModal';
import { COLORWAYS } from './components/MotorcycleModel';

export default function App() {
  const [activeColorway] = useState(COLORWAYS[0]);
  const [isAudioOn, setIsAudioOn] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scrollYProgress, setScrollYProgress] = useState(0);

  // Track scroll progression for hero motorcycle staging
  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      const currentScroll = window.scrollY;
      const progress = Math.min(1.0, Math.max(0, currentScroll / heroHeight));
      setScrollYProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToExplore = () => {
    const el = document.getElementById('telemetry');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="hyperion-app-root">
      {/* Background atmosphere */}
      <div className="cinematic-bg-glow" />
      <div className="cinematic-grid-overlay" />

      {/* Top Navigation */}
      <Navbar 
        isAudioOn={isAudioOn}
        setIsAudioOn={setIsAudioOn}
        onReserveClick={() => setIsModalOpen(true)}
      />

      {/* HERO SECTION — 360° Manual Turntable for HTM 350 DUDE */}
      <section id="hero" className="hero-main-viewport">
        {/* Real Multi-Angle 360° Turntable Canvas */}
        <MotorcycleCanvas
          activeColorway={activeColorway}
          scrollYProgress={scrollYProgress}
        />

        {/* Hero Text Overlay on the left */}
        <div className="hero-overlay-grid">
          <HeroOverlay 
            onExploreClick={scrollToExplore}
            onLaunchUpdatesClick={() => setIsModalOpen(true)}
          />
        </div>
      </section>

      {/* Deep-Dive Down-Page Sections */}
      <main className="content-container">
        {/* 1. Tech Specs & Telemetry */}
        <TechSpecs />

        {/* 2. Interactive Rev Room */}
        <RevRoom />

        {/* 3. Official Contact Details & Test Ride Reservation */}
        <ContactSection />

        {/* Final CTA Banner */}
        <section className="cta-launch-banner">
          <div className="banner-content">
            <div className="banner-badge">NEXT-GEN REBEL MOTORCYCLES</div>
            <h2 className="banner-heading">DOMINATE THE STREETS ON THE HTM 350 DUDE</h2>
            <p className="banner-desc">
              Experience explosive single-cylinder torque, razor-sharp cornering agility, and unmistakable street presence.
            </p>
            <a 
              href="#contact"
              id="btn-footer-reserve"
              className="btn-hero-primary large-cta"
            >
              <span>SCHEDULE A TEST RIDE TODAY</span>
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <span className="brand-title">HTM 350 DUDE</span>
            <p className="footer-motto">Built to break the ordinary // Next-Gen Street Agility.</p>
          </div>
          <div className="footer-copyright">
            © 2026 HTM Motorcycles Division. All rights reserved. 360° Experience.
          </div>
        </div>
      </footer>

      {/* VIP Launch Updates Modal */}
      <ReservationModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
