import React, { useEffect, useRef } from 'react';

export const Hero = () => {
  const visualRef = useRef(null);
  const typographyRef = useRef(null);
  const stamp1Ref = useRef(null);
  const stamp2Ref = useRef(null);
  const coordsRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let targetX = 0;
    let targetY = 0;
    let currX = 0;
    let currY = 0;
    let scrollY = 0;
    let animId;

    const handleMouseMove = (e) => {
      targetX = (e.clientX / window.innerWidth - 0.5) * 2;
      targetY = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    const handleScroll = () => {
      scrollY = window.scrollY;
    };

    const render = () => {
      currX += (targetX - currX) * 0.065;
      currY += (targetY - currY) * 0.065;

      if (scrollY < window.innerHeight * 1.2) {
        // Visual Plate Layer (counter-perspective + subtle tilt)
        if (visualRef.current) {
          const transX = currX * -24;
          const transY = currY * -16 - scrollY * 0.15;
          const rotY = currX * -2.2;
          const rotX = currY * 1.8;
          visualRef.current.style.transform = `translate3d(${transX.toFixed(2)}px, ${transY.toFixed(2)}px, 0) rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg)`;
        }

        // Monumental Typography Layer (forward translation)
        if (typographyRef.current) {
          const transX = currX * 28;
          const transY = currY * 18 - scrollY * 0.35;
          typographyRef.current.style.transform = `translate3d(${transX.toFixed(2)}px, ${transY.toFixed(2)}px, 0)`;
        }

        // Technical stamps moving independently
        if (stamp1Ref.current) {
          const transX = currX * -12;
          const transY = currY * -8 - scrollY * 0.1;
          stamp1Ref.current.style.transform = `translate3d(${transX.toFixed(2)}px, ${transY.toFixed(2)}px, 0)`;
        }

        if (stamp2Ref.current) {
          const transX = currX * 16;
          const transY = currY * 12 - scrollY * 0.18;
          stamp2Ref.current.style.transform = `translate3d(${transX.toFixed(2)}px, ${transY.toFixed(2)}px, 0)`;
        }

        // Coordinates stamp
        if (coordsRef.current) {
          const transX = currX * -38;
          const transY = currY * -28 - scrollY * 0.22;
          coordsRef.current.style.transform = `translate3d(${transX.toFixed(2)}px, ${transY.toFixed(2)}px, 0)`;
        }
      }

      animId = requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });
    animId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <section className="hero-section" id="hero" aria-label="Monolith Editorial Hero">
      {/* Parallax Stage */}
      <div className="hero-stage">
        {/* Technical Metadata Stamp 01: Top Left */}
        <div ref={stamp1Ref} className="hero-tech-stamp hero-stamp-top-left" aria-hidden="true">
          <span>MONOLITH / 001 — EST. 2026</span>
        </div>

        {/* Technical Metadata Stamp 02: Top Center */}
        <div ref={stamp2Ref} className="hero-tech-stamp hero-stamp-top-center" aria-hidden="true">
          <span>SPATIAL DESIGN STUDIO</span>
        </div>

        {/* Technical Metadata Stamp 03: Floating Coordinates */}
        <div ref={coordsRef} className="hero-stamp-coordinates" aria-hidden="true">
          <span>LAT 13°05' / LONG 80°16'</span>
        </div>

        {/* Huge Architectural Visual Plate (06 — HERO VISUAL) */}
        <div ref={visualRef} className="hero-visual-layer">
          <div className="hero-visual-frame">
            <img
              src="./images/hero.jpg"
              alt="Monolithic Architectural Geometry" concrete cantilever pavilion in warm desert stone landscape with solitary human figure"
              className="hero-image"
              loading="eager"
            />
            {/* Registration Corner Marks */}
            <span className="visual-corner-mark corner-top-left" aria-hidden="true">
              FIG. 01 — TECTONIC STUDY
            </span>
            <span className="visual-corner-mark corner-top-right" aria-hidden="true">
              MONOGRAPH 2026
            </span>

            {/* Visual Plate Caption Badge */}
            <div className="visual-caption-badge">
              <span className="badge-dot" aria-hidden="true"></span>
              <span className="badge-code">PAVILION OCHRE / REINFORCED CONCRETE</span>
            </div>
          </div>
        </div>
      </div>

      {/* Monumental Editorial Headline (05 — HERO) */}
      <div ref={typographyRef} className="hero-typography-layer">
        <div className="hero-eyebrow">
          <span className="hero-issue-tag">Vol. IV — Digital Exhibition</span>
          <span className="meta-label">Architecture / Spatial Design</span>
        </div>

        <h1 className="hero-title" id="hero-headline">
          <span className="title-line"><span>WE BUILD</span></span>
          <span className="title-line"><span>SPACES THAT</span></span>
          <span className="title-line"><span>OUTLIVE</span></span>
          <span className="title-line title-accent"><span>TRENDS.</span></span>
        </h1>
      </div>

      {/* Hero Bottom Metadata Bar */}
      <div className="hero-metadata-bar">
        <div className="meta-group">
          <span className="meta-label">Spatial Focus</span>
          <span className="meta-value">Architecture • Interiors • Experimental Structures</span>
        </div>

        <div className="meta-group">
          <span className="meta-label">Physical Tectonics & Materiality</span>
          <div className="meta-swatches">
            <span className="swatch-item"><span className="swatch-box swatch-stone"></span> Raw Basalt</span>
            <span className="swatch-item"><span className="swatch-box swatch-clay"></span> Terra Clay</span>
            <span className="swatch-item"><span className="swatch-box swatch-rust"></span> Weathered Rust</span>
          </div>
        </div>

        {/* Scroll Indicator (07 — HERO METADATA): SCROLL TO ENTER ↓ */}
        <div className="hero-scroll-cue">
          <a href="#manifesto" className="scroll-enter-btn" id="hero-scroll-trigger">
            <span>SCROLL TO ENTER</span>
            <span className="scroll-enter-arrow">↓</span>
          </a>
        </div>
      </div>
    </section>
  );
};
