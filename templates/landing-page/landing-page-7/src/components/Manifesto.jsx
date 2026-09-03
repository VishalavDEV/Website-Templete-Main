import React, { useEffect, useRef, useState } from 'react';

export const Manifesto = () => {
  const sectionRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const phrase1Words = ["WE", "DON'T", "DESIGN", "OBJECTS."];
  const phrase2Words = ["WE", "DESIGN", "EXPERIENCES", "THROUGH", "SPACE."];

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Start calculating progress when top reaches 80% of window
      const totalDistance = rect.height + windowHeight * 0.4;
      const currentPassed = windowHeight * 0.8 - rect.top;
      const progress = Math.min(Math.max(currentPassed / totalDistance, 0), 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Threshold calculations for staggered word reveals
  // Phrase 1: from progress 0.15 to 0.45
  // Phrase 2: from progress 0.45 to 0.80
  const isWordVisible = (phraseIndex, wordIndex) => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return true;
    }

    if (phraseIndex === 1) {
      const step = 0.30 / phrase1Words.length;
      return scrollProgress >= 0.12 + (wordIndex * step);
    } else {
      const step = 0.35 / phrase2Words.length;
      return scrollProgress >= 0.45 + (wordIndex * step);
    }
  };

  return (
    <section 
      ref={sectionRef} 
      className="manifesto-section" 
      id="manifesto" 
      aria-label="Studio Manifesto"
    >
      <div className="manifesto-stage">
        {/* Editorial Section Header */}
        <div className="manifesto-header-bar">
          <span className="section-number">02 / 08</span>
          <span className="section-category">Manifesto & Spatial Ethos</span>
        </div>

        {/* Scroll-based Revealing Statement */}
        <div className="manifesto-headline-block">
          {/* Phase 1: WE DON'T DESIGN OBJECTS. */}
          <h2 className="manifesto-statement" aria-label="We don't design objects.">
            {phrase1Words.map((word, idx) => (
              <span key={idx} className="manifesto-word-wrap">
                <span 
                  className={`manifesto-word ${isWordVisible(1, idx) ? 'visible' : 'hidden'}`}
                  style={{ transitionDelay: `${idx * 40}ms` }}
                >
                  {word}
                </span>
              </span>
            ))}
          </h2>

          {/* Phase 2: WE DESIGN EXPERIENCES THROUGH SPACE. */}
          <h2 className="manifesto-statement statement-contrast" aria-label="We design experiences through space.">
            {phrase2Words.map((word, idx) => (
              <span key={idx} className="manifesto-word-wrap">
                <span 
                  className={`manifesto-word ${isWordVisible(2, idx) ? 'visible' : 'hidden'}`}
                  style={{ transitionDelay: `${idx * 50}ms` }}
                >
                  {word}
                </span>
              </span>
            ))}
          </h2>
        </div>

        {/* Editorial Lead Paragraph */}
        <div className="manifesto-lead-container">
          <p className="manifesto-lead-text">
            We believe architecture should create a relationship between people, material, light and time.
          </p>
        </div>
      </div>
    </section>
  );
};
