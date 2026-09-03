import React, { useState, useEffect } from 'react';
import { monolithStyles } from './styles';
import { ToastProvider } from './context/ToastContext';
import { SplashCursor } from './components/react-bits/SplashCursor';
import { ParticleText } from './components/react-bits/ParticleText';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/navigation/Navbar';
import { Hero } from './components/hero/Hero';
import { Manifesto } from './components/manifesto/Manifesto';
import { FeaturedProject } from './components/projects/FeaturedProject';
import { ProjectIndex } from './components/projects/ProjectIndex';
import { ProcessSection } from './components/process/ProcessSection';
import { Studio } from './components/studio/Studio';
import { FinalCTA } from './components/cta/FinalCTA';
import { Footer } from './components/footer/Footer';
import { ProjectInquiry } from './components/contact/ProjectInquiry';

export const AppContent: React.FC = () => {
  const [inquiryModalOpen, setInquiryModalOpen] = useState<boolean>(false);

  useEffect(() => {
    document.title = 'MONOLITH — Architecture Beyond Structure';
  }, []);

  const openInquiry = () => setInquiryModalOpen(true);
  const closeInquiry = () => setInquiryModalOpen(false);

  return (
    <div className="monolith-app">
      {/* 100% Injected Self-Contained React Styling */}
      <style dangerouslySetInnerHTML={{ __html: monolithStyles }} />

      {/* 21 — Global Architectural Dust & Drawing Ink Particle Trail */}
      <SplashCursor />

      {/* Tactile Paper Texture Noise Overlay */}
      <div className="paper-texture" aria-hidden="true" />

      {/* 12-column architectural grid background */}
      <div className="architectural-grid-lines" aria-hidden="true">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="col-line" />
        ))}
      </div>

      {/* 31 — Custom Contextual Cursor (VIEW, OPEN, EXPLORE) */}
      <CustomCursor />

      {/* Navigation: Navbar & MobileMenu */}
      <Navbar onOpenInquiry={openInquiry} />

      {/* Main Exhibition Sections */}
      <main id="main-content">
        {/* 01, 05, 06, 07 — Hero Section */}
        <Hero />

        {/* 09, 10 — Studio Manifesto */}
        <Manifesto />

        {/* 11, 12, 13 — Featured Work: House of Silence */}
        <FeaturedProject />

        {/* 21 — ParticleText Transition: SPACE */}
        <ParticleText text="SPACE" />

        {/* 14, 15, 16 — Project Index & Floating Preview */}
        <ProjectIndex />

        {/* 17, 18, 19, 20 — Materials & Process Timeline */}
        <ProcessSection />

        {/* 22, 23, 24 — Studio Section, Stats & Team */}
        <Studio />

        {/* 25 — Final CTA */}
        <FinalCTA onOpenInquiry={openInquiry} />
      </main>

      {/* 27 — Minimal Studio Footer */}
      <Footer onOpenInquiry={openInquiry} />

      {/* 26 — Project Commission Inquiry Modal */}
      <ProjectInquiry
        isOpen={inquiryModalOpen}
        onClose={closeInquiry}
      />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <ToastProvider>
      <AppContent />
    </ToastProvider>
  );
};

export default App;
