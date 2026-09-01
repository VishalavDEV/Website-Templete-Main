import React, { useEffect } from 'react';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SelectedWork from './components/SelectedWork';
import Services from './components/Services';
import TypographyStrip from './components/TypographyStrip';
import FeaturedCaseStudy from './components/FeaturedCaseStudy';
import Process from './components/Process';
import Studio from './components/Studio';
import Results from './components/Results';
import Testimonials from './components/Testimonials';
import Recognition from './components/Recognition';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';

export default function App() {
  // Reveal animations on scroll
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <>
      {/* Custom Trailing Cursor Layer */}
      <CustomCursor />

      {/* Background Grid Lines Overlay */}
      <div className="bg-grid-overlay">
        <div className="bg-grid-line" />
        <div className="bg-grid-line" />
        <div className="bg-grid-line" />
        <div className="bg-grid-line" />
      </div>

      {/* Main Pages Flow */}
      <Navbar />
      
      <main style={{ flex: 1 }}>
        <Hero />
        <SelectedWork />
        <Services />
        <TypographyStrip />
        <FeaturedCaseStudy />
        <Process />
        <Studio />
        <Results />
        <TypographyStrip />
        <Testimonials />
        <Recognition />
        <ContactCTA />
      </main>

      <Footer />
    </>
  );
}
