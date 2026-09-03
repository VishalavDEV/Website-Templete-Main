import React, { useEffect, useRef, useState } from 'react';

export const Hero: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1025);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    let animFrame: number;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth < 1025) return;
      targetX = (e.clientX / window.innerWidth - 0.5) * 2;
      targetY = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const updateParallax = () => {
      if (window.innerWidth >= 1025) {
        currentX += (targetX - currentX) * 0.08;
        currentY += (targetY - currentY) * 0.08;
        setMousePos({ x: currentX, y: currentY });
      }
      animFrame = requestAnimationFrame(updateParallax);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });
    animFrame = requestAnimationFrame(updateParallax);

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animFrame);
    };
  }, []);

  // Safe parallax within bounded margins on desktop only
  const imageParallaxStyle: React.CSSProperties = isMobile
    ? {}
    : {
        transform: `translate3d(${mousePos.x * 12}px, ${mousePos.y * 10 - scrollY * 0.12}px, 0px)`,
      };

  const textParallaxStyle: React.CSSProperties = isMobile
    ? {}
    : {
        transform: `translate3d(${-mousePos.x * 8}px, ${-mousePos.y * 6 - scrollY * 0.06}px, 0px)`,
      };

  return (
    <section ref={heroRef} className="hero-section" id="hero" aria-label="Hero Introduction">
      {/* Editorial Sub-Header Bar (Cleanly below navbar, zero overlap) */}
      <div className="hero-subbar">
        <div className="hero-tag-badge">
          <span className="hero-issue-tag">01 / 08 — MANIFESTO & ETHOS</span>
        </div>
        <div className="hero-meta-stamps-row">
          <span className="hero-pill-stamp">MONOLITH / 001</span>
          <span className="hero-pill-stamp">EST. 2026 // MONOGRAPH 01</span>
          <span className="hero-pill-stamp">LAT 13°05' &nbsp;|&nbsp; LONG 80°16'</span>
        </div>
      </div>

      {/* Main Hero Dynamic 2-Column Grid */}
      <div className="hero-main-layout">
        {/* Left Column: Monumental Headline */}
        <div className="hero-typography-layer" style={textParallaxStyle}>
          <h1 className="hero-title">
            <span className="title-line">
              <span>WE BUILD</span>
            </span>
            <span className="title-line title-accent">
              <span>SPACES THAT</span>
            </span>
            <span className="title-line">
              <span>OUTLIVE</span>
            </span>
            <span className="title-line">
              <span>TRENDS.</span>
            </span>
          </h1>
        </div>

        {/* Right Column: Monumental Architecture Image (Cleanly bounded) */}
        <div className="hero-visual-col" style={imageParallaxStyle}>
          <div className="hero-visual-frame">
            <img
              src="/images/hero.jpg"
              alt="Monumental brutalist raw concrete architecture framing geometric shadows"
              className="hero-image"
              loading="eager"
            />
            <div className="visual-caption-badge">
              <span className="badge-dot" />
              <span className="badge-code">SCALE 1:1 // RAW CONCRETE</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Metadata Bar */}
      <div className="hero-metadata-bar">
        <div className="meta-group">
          <span className="meta-label">DISCIPLINES</span>
          <span className="meta-value">Architecture • Interiors • Spatial Design</span>
        </div>

        <div className="meta-group meta-swatches-group">
          <span className="meta-label">MATERIAL PALETTE</span>
          <div className="meta-swatches">
            <span className="swatch-item">
              <span className="swatch-box swatch-stone" /> Stone
            </span>
            <span className="swatch-item">
              <span className="swatch-box swatch-clay" /> Clay
            </span>
            <span className="swatch-item">
              <span className="swatch-box swatch-rust" /> Rust
            </span>
          </div>
        </div>

        <div className="hero-scroll-cue">
          <a href="#manifesto" className="scroll-enter-btn" aria-label="Scroll to enter manifesto">
            <span>SCROLL TO ENTER</span>
            <span className="scroll-enter-arrow">↓</span>
          </a>
        </div>
      </div>
    </section>
  );
};
