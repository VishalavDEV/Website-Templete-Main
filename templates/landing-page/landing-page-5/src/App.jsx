import React, { useState } from 'react';
import AuraBackground from './components/AuraBackground';
import LoadingScreen from './components/LoadingScreen';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import About from './components/About';
import BentoFeatures from './components/BentoFeatures';
import InteractiveShowcase from './components/InteractiveShowcase';
import Process from './components/Process';
import ProjectShowcase from './components/ProjectShowcase';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';

import './styles/global.css';
import './styles/animations.css';

export default function App() {
  const [loadingComplete, setLoadingComplete] = useState(false);

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        backgroundColor: '#faf8f2', /* Base color on page wrapper for multiply blend mode */
        color: 'var(--text-main)',
      }}
    >
      {/* Rose Gold Atmospheric Aura Background (Layer 1 & 2 Multiply Blend Modes) */}
      <AuraBackground />

      {/* Cinematic Intro Loader */}
      <LoadingScreen onComplete={() => setLoadingComplete(true)} />

      {/* Custom Rose Gold Cursor for Desktop */}
      <CustomCursor />

      {/* Top Scroll Indicator */}
      <ScrollProgress />

      {/* Page Content Wrapped Above Background Layers */}
      <div style={{ position: 'relative', zIndex: 1, width: '100%' }}>
        {/* Sticky Glass Navbar */}
        <Navbar />

        <main>
          {/* Full-Screen Hero */}
          <Hero />

          {/* Social Proof Marquee */}
          <SocialProof />

          {/* Asymmetrical Story & Counters */}
          <About />

          {/* Bento Grid 6-Card Features */}
          <BentoFeatures />

          {/* Interactive 3D Cursor-Reactive Console */}
          <InteractiveShowcase />

          {/* 4-Step Process Timeline */}
          <Process />

          {/* Project Casework Showcase */}
          <ProjectShowcase />

          {/* Testimonial Carousel */}
          <Testimonials />

          {/* Call to Action */}
          <CTA />
        </main>

        {/* Refined Footer */}
        <Footer />
      </div>
    </div>
  );
}
