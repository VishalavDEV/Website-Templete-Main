import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import AmbientBackground from './components/AmbientBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import BentoFeatures from './components/BentoFeatures';
import FeatureTabs from './components/FeatureTabs';
import Metrics from './components/Metrics';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CTABanner from './components/CTABanner';
import Footer from './components/Footer';
import DemoModal from './components/DemoModal';

export default function App() {
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <ThemeProvider>
      <div className="min-h-screen relative selection:bg-brand-violet/30 overflow-x-hidden transition-colors duration-500"
        style={{
          backgroundColor: 'var(--bg-base)',
          color: 'var(--text-main)'
        }}
      >
        {/* Ambient background particles and floating glow orbs */}
        <AmbientBackground />

        {/* Main layout container */}
        <div className="relative z-10 flex flex-col min-h-screen">
          {/* Navigation Bar */}
          <Navbar onOpenDemo={() => setDemoOpen(true)} />

          {/* Main Content Sections */}
          <main className="flex-grow">
            <Hero onOpenDemo={() => setDemoOpen(true)} />
            <TrustBar />
            <BentoFeatures />
            <FeatureTabs />
            <Metrics />
            <Pricing />
            <Testimonials />
            <FAQ />
            <CTABanner />
          </main>

          {/* Global Footer */}
          <Footer />
        </div>

        {/* Interactive Live Demo Simulation Modal */}
        <DemoModal isOpen={demoOpen} onClose={() => setDemoOpen(false)} />
      </div>
    </ThemeProvider>
  );
}
