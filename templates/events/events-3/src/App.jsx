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
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme') || localStorage.getItem('vertex_theme');
      if (savedTheme === 'light' || savedTheme === 'dark') {
        return savedTheme;
      }
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
        return 'light';
      }
    }
    return 'dark';
  });

  // Sync theme with root <html> and localStorage
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
    root.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    localStorage.setItem('vertex_theme', theme);
  }, [theme]);

  // Dark/Light Theme Toggle Handler
  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
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
    <div className="app-root w-full max-w-full overflow-x-hidden min-h-screen relative bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300">
      <CustomCursor />
      
      {/* Full-Bleed Interactive Quantum, Neural, Spatial & Pepper Background Canvas */}
      <QuantumTechBackground mode="unified" theme={theme} />

      <Navbar theme={theme} toggleTheme={toggleTheme} />
      
      <main className="relative z-10 w-full max-w-full overflow-x-hidden">
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


