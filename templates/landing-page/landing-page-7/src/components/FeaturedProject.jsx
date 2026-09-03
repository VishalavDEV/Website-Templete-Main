import React, { useState, useEffect, useRef } from 'react';
import { ProjectOverlay } from './ProjectOverlay.jsx';

export const FeaturedProject = () => {
  const [overlayOpen, setOverlayOpen] = useState(false);
  const [imageScale, setImageScale] = useState(1);
  const [textOffset, setTextOffset] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight && rect.bottom > 0) {
        const progress = (windowHeight - rect.top) / (rect.height + windowHeight);
        const scale = 1.0 + progress * 0.12;
        const offset = (progress - 0.5) * -40;

        setImageScale(Math.min(Math.max(scale, 1.0), 1.16));
        setTextOffset(offset);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <section 
        ref={sectionRef}
        className="featured-project-section" 
        id="featured-project" 
        aria-label="Featured Project"
      >
        {/* Section Header: 01 / FEATURED WORK */}
        <div className="featured-header-bar">
          <span className="section-number">01 / FEATURED WORK</span>
          <span className="section-category">Residential / Experimental • 2026</span>
        </div>

        {/* Large Full-Width Architectural Image Canvas */}
        <div className="featured-canvas-wrapper">
          <img 
            src="/images/house_of_silence.jpg" 
            alt="House of Silence — coastal brutalist residential sanctuary in Chennai India"
            className="featured-image-plate"
            style={{
              transform: `scale(${imageScale})`,
            }}
          />

          {/* Overlaid Project Identity with Parallax Speed */}
          <div 
            className="featured-overlay-content"
            style={{
              transform: `translateY(${textOffset}px)`,
            }}
          >
            <div className="featured-titles-block">
              <span className="featured-location-tag">
                Chennai, India • Fictional Monograph
              </span>
              <h2 className="featured-project-name">HOUSE OF SILENCE</h2>
              <p className="featured-project-desc">
                A residence shaped around light, shadow and silence.
              </p>
            </div>

            {/* [EXPLORE PROJECT] Interactive CTA Button */}
            <button 
              className="btn-explore-project"
              onClick={() => setOverlayOpen(true)}
              aria-haspopup="dialog"
              aria-label="Explore House of Silence Project Exhibition"
            >
              <span>Explore Project</span>
              <span className="arrow-icon">→</span>
            </button>
          </div>
        </div>

        {/* Progressive Project Metadata Grid */}
        <div className="featured-specs-grid">
          <div className="spec-column">
            <span className="spec-num">01</span>
            <span className="spec-heading">PRIVATE RESIDENCE</span>
            <span className="spec-sub">Typology: Monolithic Sanctuary</span>
          </div>

          <div className="spec-column">
            <span className="spec-num">02</span>
            <span className="spec-heading">420 SQ M</span>
            <span className="spec-sub">Footprint: 2 Levels + Reflecting Pool</span>
          </div>

          <div className="spec-column">
            <span className="spec-num">03</span>
            <span className="spec-heading">2026</span>
            <span className="spec-sub">Status: Design Commission</span>
          </div>

          <div className="spec-column">
            <span className="spec-num">04</span>
            <span className="spec-heading">CHENNAI, INDIA</span>
            <span className="spec-sub">Coordinates: 13°05' N, 80°16' E</span>
          </div>
        </div>
      </section>

      {/* Fullscreen Editorial Project Presentation Overlay (Part 13) */}
      <ProjectOverlay 
        isOpen={overlayOpen} 
        onClose={() => setOverlayOpen(false)}
        projectData={{ name: 'HOUSE OF SILENCE' }}
      />
    </>
  );
};
