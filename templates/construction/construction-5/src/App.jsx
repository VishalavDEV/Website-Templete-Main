import React, { useState, useEffect } from 'react';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import TextTrack from './components/TextTrack';
import VillaPortfolio from './components/VillaPortfolio';
import MaterialsLab from './components/MaterialsLab';
import Configurator from './components/Configurator';
import InquiryForm from './components/InquiryForm';
import Footer from './components/Footer';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [currentConfig, setCurrentConfig] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem('newhouse_theme');
    if (saved === 'light') {
      setIsDarkMode(false);
      document.body.classList.remove('dark-mode');
      document.body.classList.add('light-mode');
    } else {
      setIsDarkMode(true);
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode((prev) => {
      const next = !prev;
      if (next) {
        document.body.classList.add('dark-mode');
        document.body.classList.remove('light-mode');
        localStorage.setItem('newhouse_theme', 'dark');
      } else {
        document.body.classList.add('light-mode');
        document.body.classList.remove('dark-mode');
        localStorage.setItem('newhouse_theme', 'light');
      }
      return next;
    });
  };

  return (
    <div className="newhouse-app">
      {/* 1. Hero with Realistic Liquid Reflection Pool Physics & Navbar */}
      <HeroSection isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

      {/* 2. Editorial About Split Grid */}
      <AboutSection />

      {/* 3. Kinetic Continuous Dual-Stream Text Marquee */}
      <TextTrack />

      {/* 4. Asymmetric Villa Portfolio Connected to Spring Boot */}
      <VillaPortfolio />

      {/* 5. Tactile Materials Specimen Lab */}
      <MaterialsLab />

      {/* 6. Parametric BIM Configurator HUD */}
      <Configurator onConfigureChange={setCurrentConfig} />

      {/* 7. Discrete VIP Consultation & Commission Form */}
      <InquiryForm currentConfig={currentConfig} />

      {/* 8. Master Brand Footer */}
      <Footer />
    </div>
  );
}
