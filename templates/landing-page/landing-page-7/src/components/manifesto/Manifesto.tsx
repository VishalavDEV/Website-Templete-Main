import React, { useEffect, useRef, useState } from 'react';

export const Manifesto: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // When section enters the viewport
      const totalDistance = windowHeight + rect.height;
      const currentPos = windowHeight - rect.top;
      const progress = Math.max(0, Math.min(1, currentPos / totalDistance));

      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const statement1 = ["WE", "DON'T", "DESIGN", "OBJECTS."];
  const statement2 = ["WE", "DESIGN", "EXPERIENCES", "THROUGH", "SPACE."];

  return (
    <section ref={sectionRef} className="manifesto-section" id="manifesto" aria-label="Studio Manifesto">
      <div className="manifesto-stage">
        <div className="manifesto-header-bar">
          <span className="hero-issue-tag">02 / 08 — MANIFESTO</span>
          <span className="meta-label">SPATIAL PHILOSOPHY</span>
        </div>

        <div className="manifesto-headline-block">
          <h2 className="manifesto-statement">
            {statement1.map((word, idx) => {
              const threshold = 0.15 + (idx / statement1.length) * 0.25;
              const isVisible = scrollProgress >= threshold;
              return (
                <span key={idx} className="manifesto-word-wrap">
                  <span className={`manifesto-word ${isVisible ? 'visible' : 'hidden'}`}>
                    {word}
                  </span>
                </span>
              );
            })}
          </h2>

          <h2 className="manifesto-statement statement-contrast">
            {statement2.map((word, idx) => {
              const threshold = 0.4 + (idx / statement2.length) * 0.3;
              const isVisible = scrollProgress >= threshold;
              return (
                <span key={idx} className="manifesto-word-wrap">
                  <span className={`manifesto-word ${isVisible ? 'visible' : 'hidden'}`}>
                    {word}
                  </span>
                </span>
              );
            })}
          </h2>
        </div>

        <div className="manifesto-lead-container">
          <p className="manifesto-lead-text">
            We believe architecture should create a relationship between people, material, light and time.
          </p>
        </div>
      </div>
    </section>
  );
};
