import React from 'react';

export default function Hero({ onOpenVideo }) {
  return (
    <section className="hero" id="home">
      {/* Left & Right Vertical Ticking Scroll Indicators */}
      <div className="scroll-indicator left">
        <div className="tick"></div>SCROLL DOWN
      </div>
      <div className="scroll-indicator right">
        <div className="tick"></div>SCROLL DOWN
      </div>

      <div className="hero-grid">
        {/* Left Column */}
        <div className="hero-text left">
          <span className="eyebrow">Since 2008</span>
          <h2>We Build<br />Every Structure</h2>
        </div>

        {/* Center Floating Visual with Amber Glow Ring */}
        <div className="hero-image-wrap">
          <div className="glow-ring"></div>
          <img src="./assets/images/hero-villa.jpg" alt="BuildHub Landmark Villa" />
        </div>

        {/* Right Column */}
        <div className="hero-text right">
          <span className="eyebrow">Precision Engineering</span>
          <h2>To Stand The<br />Test Of Time</h2>
        </div>
      </div>

      {/* Bottom Left Tag & Bottom Right CTA */}
      <div className="bottom-tag">© BuildHub Constructions • Premier Architecture</div>
      <div className="bottom-cta">
        <a href="#bim3d">View Our Work & 3D BIM →</a>
      </div>
    </section>
  );
}
