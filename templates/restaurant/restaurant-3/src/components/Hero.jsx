import React, { useEffect, useState } from 'react';

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 150);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={`hero-section ${isLoaded ? 'is-loaded' : ''}`} id="hero">
      <div className="hero-image-wrapper">
        <img src="assets/images/hero.jpg" alt="Sunlit Mediterranean fish dish beside coastal window view" loading="eager" />
      </div>

      <div className="hero-overlay-panel">
        <span className="hero-tag">LUMIÈRE</span>
        <div className="hero-title-reveal">
          <h1 className="hero-title">THE TASTE OF<br />SLOW SUMMERS</h1>
        </div>
        <p className="hero-description">
          A contemporary coastal dining room in Chennai inspired by salt winds, sunbaked stone, wood fires, and line-caught seafood.
        </p>
        <a href="#menu" className="hero-btn" data-cursor="EXPLORE">
          <span>DISCOVER THE MENU</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </a>
      </div>

      <div className="hero-scroll-indicator">
        <span>SCROLL TO EXPLORE</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
}
