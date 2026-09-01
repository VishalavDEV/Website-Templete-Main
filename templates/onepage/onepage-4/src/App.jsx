import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Portfolio from './components/Portfolio';
import CtaBanner from './components/CtaBanner';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AmbientCanvas from './components/AmbientCanvas';

export default function App() {
  useEffect(() => {
    // Global Scroll Reveal Observer with Automatic Staggering
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target); // Stop observing once revealed
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
    );

    const initObserver = () => {
      const sections = document.querySelectorAll('section');
      sections.forEach((sec) => {
        // Headers scale & drift in
        const headers = sec.querySelectorAll('.section-title, .section-subtitle, .section-tag');
        headers.forEach((h) => {
          if (!h.classList.contains('revealed')) {
            h.classList.add('reveal-scale');
            observer.observe(h);
          }
        });

        // Grid cards wave in with staggered timing
        const cards = sec.querySelectorAll('.glass-card, .floating-hero-card');
        cards.forEach((card, index) => {
          if (!card.classList.contains('revealed')) {
            if (!card.classList.contains('reveal-on-scroll') &&
                !card.classList.contains('reveal-scale') &&
                !card.classList.contains('reveal-left') &&
                !card.classList.contains('reveal-right')) {
              card.classList.add('reveal-on-scroll');
              const delayClass = `delay-${(index % 6) + 1}`;
              card.classList.add(delayClass);
            }
            observer.observe(card);
          }
        });
      });

      // Target custom explicit reveal elements
      const customElements = document.querySelectorAll('.reveal-on-scroll, .reveal-scale, .reveal-left, .reveal-right');
      customElements.forEach((el) => observer.observe(el));
    };

    const timer = setTimeout(initObserver, 80);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="app-container" style={{ position: 'relative', minHeight: '100vh' }}>
      {/* Global Interactive Constellation Canvas Background */}
      <AmbientCanvas />

      {/* Sticky Modern Navbar */}
      <Navbar />

      <main style={{ position: 'relative', zIndex: 1 }}>
        {/* Section 1: Hero Landing */}
        <Hero />

        {/* Section 2: About Us */}
        <About />

        {/* Section 3: Capabilities & Services */}
        <Services />

        {/* Section 4: Why Us / Difference */}
        <WhyUs />

        {/* Section 5: Portfolio Work */}
        <Portfolio />

        {/* Section 6: CTA Banner */}
        <CtaBanner />

        {/* Section 7: Team Members */}
        <Team />

        {/* Section 8: Testimonials */}
        <Testimonials />

        {/* Section 9: Initiate Dialogue / Contact */}
        <Contact />
      </main>

      {/* Premium Footer */}
      <Footer />
    </div>
  );
}
