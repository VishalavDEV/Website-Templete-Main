import React, { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { ScrollProgress } from './components/layout/ScrollProgress';
import { GlowBackdrop } from './components/common/GlowBackdrop';
import { InteractiveCanvas } from './components/common/InteractiveCanvas';
import { MarqueeBanner } from './components/common/MarqueeBanner';
import { ToastContainer, ToastMessage } from './components/common/Toast';

import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { ServicesSection } from './components/sections/ServicesSection';
import { WorkSection } from './components/sections/WorkSection';
import { ResumeSection } from './components/sections/ResumeSection';
import { TestimonialsSection } from './components/sections/TestimonialsSection';
import { ContactSection } from './components/sections/ContactSection';

export const App: React.FC = () => {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const addToast = (type: 'success' | 'error' | 'info', title: string, description?: string) => {
    const id = Date.now().toString() + Math.random().toString(36).substring(2, 6);
    setToasts((prev) => [...prev, { id, type, title, description }]);

    // Auto dismiss after 4 seconds
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <div className="min-h-screen relative selection:bg-blue-600 selection:text-white bg-[#f8fafc] text-slate-900">
      {/* Top Scroll Indicator */}
      <ScrollProgress />

      {/* Atmospheric Ambient Glow */}
      <GlowBackdrop />

      {/* Subtle Constellation Particle Network */}
      <InteractiveCanvas />

      {/* Header */}
      <Navbar />

      {/* Main Sections */}
      <main className="relative z-10">
        <HeroSection />
        <MarqueeBanner />
        <AboutSection />
        <ServicesSection />
        <WorkSection />
        <ResumeSection />
        <TestimonialsSection />
        <ContactSection onShowToast={addToast} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Toast Notification Container */}
      <ToastContainer toasts={toasts} onDismiss={removeToast} />
    </div>
  );
};

export default App;
