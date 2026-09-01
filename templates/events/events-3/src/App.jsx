import React, { useState, useEffect } from 'react';
import CustomCursor from './components/CustomCursor';
import QuantumTechBackground from './components/QuantumTechBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Tracks from './components/Tracks';
import Speakers from './components/Speakers';
import Schedule from './components/Schedule';
import Hackathon from './components/Hackathon';
import Sponsors from './components/Sponsors';
import Venue from './components/Venue';
import Gallery from './components/Gallery';
import Register from './components/Register';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function App() {
  const [theme, setTheme] = useState('dark');

  // Dark/Light Theme Toggle Handler
  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  // Scroll Reveal Observer Setup
  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -80px 0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const revealElements = document.querySelectorAll('.section-padding, .glass-card, .section-header');

    revealElements.forEach((el) => {
      el.classList.add('reveal');
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app-root" style={{ position: 'relative', minHeight: '100vh', background: '#ffffff' }}>
      <CustomCursor />
      
      {/* Full-Bleed Interactive Quantum, Neural, Spatial & Pepper Background Canvas on White */}
      <QuantumTechBackground mode="unified" />

      <Navbar theme={theme} toggleTheme={toggleTheme} />
      
      <main style={{ position: 'relative', zIndex: 5 }}>
        <Hero />
        <About />
        <Tracks />
        <Speakers />
        <Schedule />
        <Hackathon />
        <Sponsors />
        <Venue />
        <Gallery />
        <Register />
        <FAQ />
      </main>

      <Footer />
    </div>
  );
}


