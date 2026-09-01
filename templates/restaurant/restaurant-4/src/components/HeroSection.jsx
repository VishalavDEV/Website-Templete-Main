import React from 'react';

export default function HeroSection() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero-section">
      <div className="hero-bg-wrapper">
        <img src="assets/images/hero.jpg" alt="Sunlit Garden Restaurant Atmosphere" className="hero-bg-img" />
      </div>
      <div className="hero-curved-panel">
        <h1 className="hero-title">
          SEASONAL.<br />
          SLOW. SINCERE.
        </h1>
        <p className="hero-tagline">
          A contemporary garden restaurant shaped by nature, craft, and the changing seasons in Chennai.
        </p>
        <div className="hero-divider"></div>
        <div className="hero-meta" style={{ display: 'none' }}></div>
        <div className="hero-actions-group">
          <button className="btn-hero-primary" data-cursor="sage" onClick={() => scrollTo('menu')}>
            EXPLORE THE TABLE
          </button>
          <button className="btn-hero-secondary" data-cursor="VIEW" onClick={() => scrollTo('house')}>
            OUR STORY
          </button>
        </div>
      </div>
      <div className="circular-scroll-badge">&darr;</div>
    </section>
  );
}
