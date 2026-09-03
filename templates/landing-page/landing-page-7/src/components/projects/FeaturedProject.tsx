import React, { useState, useEffect, useRef } from 'react';
import { Project, PROJECTS_DATA } from '../../data/projects';
import { ProjectViewer } from './ProjectViewer';
import { useToast } from '../../context/ToastContext';

export const FeaturedProject: React.FC = () => {
  const [scale, setScale] = useState(1.0);
  const [overlayOpen, setOverlayOpen] = useState(false);
  const canvasRef = useRef<HTMLDivElement>(null);
  const { showToast } = useToast();

  const featured = PROJECTS_DATA[0]; // House of Silence

  useEffect(() => {
    const handleScroll = () => {
      if (!canvasRef.current) return;
      const rect = canvasRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight && rect.bottom > 0) {
        const progress = (windowHeight - rect.top) / (windowHeight + rect.height);
        const calculatedScale = 1.0 + Math.min(Math.max(progress * 0.15, 0), 0.15);
        setScale(calculatedScale);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenProject = () => {
    setOverlayOpen(true);
    showToast('PROJECT OPENED');
  };

  return (
    <>
      <section className="featured-project-section" id="featured-project" aria-label="Featured Architecture Project">
        <div className="featured-header-bar">
          <span className="hero-issue-tag">03 / 08 — FEATURED MONOGRAPH</span>
          <span className="meta-label">RESIDENTIAL // COASTAL MONOLITH</span>
        </div>

        <div ref={canvasRef} className="featured-canvas-wrapper">
          <img
            src={featured.image}
            alt="House of Silence coastal brutalist architecture with reflecting pool"
            className="featured-image-plate"
            loading="lazy"
            style={{ transform: `scale(${scale})` }}
          />

          <div className="featured-overlay-content">
            <div className="featured-titles-block">
              <span className="featured-location-tag">CHENNAI, INDIA • 2026</span>
              <h2 className="featured-project-name">{featured.name}</h2>
              <p className="featured-project-desc">{featured.description}</p>
            </div>

            <button
              className="btn-explore-project"
              onClick={handleOpenProject}
              aria-label={`Explore ${featured.name} Monograph`}
            >
              EXPLORE PROJECT <span className="arrow-icon">→</span>
            </button>
          </div>
        </div>

        <div className="featured-specs-grid">
          <div className="spec-column">
            <span className="spec-num">01</span>
            <span className="spec-heading">MATERIAL MASS</span>
            <span className="spec-sub">Board-Formed Concrete & Terracotta</span>
          </div>
          <div className="spec-column">
            <span className="spec-num">02</span>
            <span className="spec-heading">SOLAR DIAL</span>
            <span className="spec-sub">Recessed Light Channels & Courtyards</span>
          </div>
          <div className="spec-column">
            <span className="spec-num">03</span>
            <span className="spec-heading">ATMOSPHERE</span>
            <span className="spec-sub">Passive Cooling Reflecting Pool</span>
          </div>
          <div className="spec-column">
            <span className="spec-num">04</span>
            <span className="spec-heading">TECTONICS</span>
            <span className="spec-sub">7.8m Column-Free Cantilever</span>
          </div>
        </div>
      </section>

      <ProjectViewer
        project={featured}
        isOpen={overlayOpen}
        onClose={() => setOverlayOpen(false)}
      />
    </>
  );
};
