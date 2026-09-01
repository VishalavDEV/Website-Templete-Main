import React, { useState } from 'react';
import DynamicBackground from './components/DynamicBackground';
import Header from './components/Header';
import Hero from './components/Hero';
import LaptopRealShowcase from './components/LaptopRealShowcase';
import FeatureGrid from './components/FeatureGrid';
import SpecDrawer from './components/SpecDrawer';
import PressTeaser from './components/PressTeaser';
import ContactSection from './components/ContactSection';
import DeviceViewSwitcher from './components/DeviceViewSwitcher';
import Footer from './components/Footer';
import { useCountdown } from './hooks/useCountdown';
import { useSoundEffects } from './hooks/useSoundEffects';

export default function App() {
  const [targetDate] = useState(() => {
    const d = new Date();
    d.setDate(d.getDate() + 38);
    d.setHours(d.getHours() + 14);
    return d.toISOString();
  });

  const [activeDevice, setActiveDevice] = useState('laptop'); // 'laptop' | 'tablet' | 'phone'

  const timeLeft = useCountdown(targetDate);
  const { isPlaying, toggleAmbient, playClick, playSuccess } = useSoundEffects();

  const [isSpecDrawerOpen, setIsSpecDrawerOpen] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState(null);

  const handleSelectFeature = (feature) => {
    playClick();
    setSelectedFeature(feature);
    setIsSpecDrawerOpen(true);
  };

  const handleOpenGeneralSpecs = () => {
    playClick();
    setSelectedFeature(null);
    setIsSpecDrawerOpen(true);
  };

  const handleScrollToSection = (id) => {
    playClick();
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  // Device frame wrapper classes
  const getDeviceFrameClass = () => {
    switch (activeDevice) {
      case 'phone':
        return 'max-w-[400px] mx-auto my-8 rounded-[44px] border-8 border-slate-800 shadow-[0_0_60px_rgba(255,0,60,0.35)] overflow-hidden bg-obsidian-950';
      case 'tablet':
        return 'max-w-[780px] mx-auto my-8 rounded-[36px] border-8 border-slate-800 shadow-[0_0_60px_rgba(255,0,60,0.35)] overflow-hidden bg-obsidian-950';
      case 'laptop':
      default:
        return 'w-full';
    }
  };

  return (
    <div className="relative min-h-screen text-slate-100 selection:bg-cyber-red selection:text-white font-sans bg-obsidian-950">
      
      {/* Gaming Red Dynamic Motion Background */}
      <DynamicBackground />

      {/* Device Simulation Banner (when in tablet or phone mode) */}
      {activeDevice !== 'laptop' && (
        <div className="relative z-40 bg-cyber-red/15 border-b border-cyber-red/30 py-2 px-4 text-center text-xs font-mono text-rose-300 flex items-center justify-center space-x-2">
          <span className="w-2 h-2 rounded-full bg-cyber-red animate-pulse" />
          <span>Simulating {activeDevice === 'phone' ? 'Mobile (390px)' : 'Tablet (768px)'} Viewport Mode</span>
          <button
            onClick={() => setActiveDevice('laptop')}
            className="underline hover:text-white ml-2 text-white font-bold"
          >
            Exit to Fullscreen
          </button>
        </div>
      )}

      {/* Main Container with Responsive Device Frame */}
      <div className={`transition-all duration-500 ${getDeviceFrameClass()}`}>
        
        {/* Dynamic Island / Notch for Phone Mode */}
        {activeDevice === 'phone' && (
          <div className="w-full bg-obsidian-950 pt-3 pb-1 flex justify-center sticky top-0 z-50">
            <div className="w-24 h-4 rounded-full bg-black border border-white/10 flex items-center justify-between px-3">
              <div className="w-1.5 h-1.5 rounded-full bg-slate-800" />
              <div className="w-2 h-2 rounded-full bg-cyber-red shadow-neon-red" />
            </div>
          </div>
        )}

        <div className="relative z-10 flex flex-col min-h-screen">
          
          {/* Sticky Glass Navbar */}
          <Header
            isAudioPlaying={isPlaying}
            onToggleAudio={toggleAmbient}
            onOpenSpecDrawer={handleOpenGeneralSpecs}
          />

          <main className="flex-grow">
            
            {/* Hero Section with Countdown & Email Notification */}
            <Hero
              timeLeft={timeLeft}
              onNotifySuccess={() => {}}
              playClick={playClick}
              playSuccess={playSuccess}
              onExploreClick={() => handleScrollToSection('showcase-section')}
            />

            {/* Real Laptop Gaming Studio Showcase */}
            <div id="showcase-section">
              <LaptopRealShowcase
                onSelectFeature={handleSelectFeature}
                playClick={playClick}
              />
            </div>

            {/* 6 Core Gaming Innovation Feature Pillars */}
            <div id="features-section">
              <FeatureGrid onSelectFeature={handleSelectFeature} />
            </div>

            {/* Press Reviews & Real-time Live Waitlist */}
            <PressTeaser />

            {/* Direct Contact Details & Inquiries Form */}
            <ContactSection
              playClick={playClick}
              playSuccess={playSuccess}
            />

          </main>

          {/* Luxury Gaming Footer */}
          <Footer />

        </div>

      </div>

      {/* Tactical Architecture / Feature Inspect Modal */}
      <SpecDrawer
        isOpen={isSpecDrawerOpen}
        onClose={() => setIsSpecDrawerOpen(false)}
        selectedFeature={selectedFeature}
      />

      {/* Floating Corner Device Switcher (Laptop / Tab / Phone) */}
      <DeviceViewSwitcher
        activeDevice={activeDevice}
        onSelectDevice={(device) => setActiveDevice(device)}
        playClick={playClick}
      />

    </div>
  );
}
