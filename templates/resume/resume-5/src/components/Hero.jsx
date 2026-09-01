import React from 'react';
import { ArrowDownRight, Download, Crosshair, MapPin, Award, Layers } from 'lucide-react';
import { profileData } from '../data/portfolioData';

export default function Hero({ onOpenCV, onExploreProjects }) {
  return (
    <section id="profile" className="arch-section hero-section">
      <div className="arch-grid-lines"></div>

      <div className="container hero-container">
        {/* LEFT COLUMN: Architectural Typography & Profile Statement */}
        <div className="hero-left">
          <div className="hero-badge">
            <span className="section-label">ARCHITECT / SPATIAL DESIGNER</span>
          </div>

          <h1 className="hero-title display-title">
            <span className="name-first">ADRIAN</span>
            <span className="name-last">VALE</span>
          </h1>

          <div className="hero-subtitle-box">
            <p className="hero-subtitle">{profileData.tagline}</p>
          </div>

          <p className="hero-statement">
            "{profileData.heroStatement}"
          </p>

          <div className="hero-actions">
            <button className="btn-primary" onClick={onExploreProjects}>
              <span>View Selected Projects</span>
              <ArrowDownRight size={18} />
            </button>

            <button className="btn-outline" onClick={onOpenCV}>
              <Download size={16} />
              <span>Download CV</span>
            </button>
          </div>

          {/* BLUEPRINT METADATA GRID */}
          <div className="hero-metadata-grid">
            <div className="meta-card">
              <div className="meta-header">
                <MapPin size={14} className="meta-icon" />
                <span className="mono-text">LOCATION</span>
              </div>
              <span className="meta-value">{profileData.location}</span>
            </div>

            <div className="meta-card">
              <div className="meta-header">
                <Award size={14} className="meta-icon" />
                <span className="mono-text">EXPERIENCE</span>
              </div>
              <span className="meta-value">{profileData.experienceYears}</span>
            </div>

            <div className="meta-card full-width-meta">
              <div className="meta-header">
                <Layers size={14} className="meta-icon" />
                <span className="mono-text">PRIMARY FOCUS</span>
              </div>
              <span className="meta-value">{profileData.specialization}</span>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Original AI Architect Portrait with Technical Overlays */}
        <div className="hero-right">
          <div className="portrait-wrapper">
            {/* Corner Crosshairs */}
            <div className="arch-corner-tick tick-tl"></div>
            <div className="arch-corner-tick tick-tr"></div>
            <div className="arch-corner-tick tick-bl"></div>
            <div className="arch-corner-tick tick-br"></div>

            {/* Technical Blueprint Overlay Labels */}
            <div className="portrait-tag tag-top-left">
              <Crosshair size={12} />
              <span>{profileData.gridRef}</span>
            </div>

            <div className="portrait-tag tag-top-right">
              <span>{profileData.profileYear}</span>
            </div>

            <div className="portrait-tag tag-bottom-left">
              <span>{profileData.coordinates}</span>
            </div>

            <div className="portrait-tag tag-bottom-right">
              <span>{profileData.locationTag}</span>
            </div>

            {/* Image Container */}
            <div className="portrait-image-container">
              <img 
                src="images/portrait.jpg" 
                alt="Adrian Vale — Fictional Architect Portrait" 
                className="portrait-img"
              />
              <div className="portrait-grid-overlay"></div>
            </div>

            {/* Sub-label under portrait */}
            <div className="portrait-caption">
              <span className="mono-text">FIG 0.1 — ARCHITECTURAL STUDIO / COPENHAGEN</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-section {
          padding-top: 60px;
          padding-bottom: 120px;
          background: linear-gradient(180deg, var(--bg-pure) 0%, var(--bg-warm) 100%);
          overflow: hidden;
        }

        .hero-container {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 60px;
          align-items: center;
          position: relative;
          z-index: 1;
        }

        .hero-left {
          display: flex;
          flex-direction: column;
        }

        .hero-badge {
          margin-bottom: 20px;
        }

        .hero-title {
          font-size: clamp(3.8rem, 7vw, 6.5rem);
          line-height: 0.92;
          margin-bottom: 28px;
          display: flex;
          flex-direction: column;
          color: var(--accent-charcoal);
        }

        .name-first {
          font-weight: 800;
        }

        .name-last {
          font-weight: 400;
          color: var(--accent-green);
          letter-spacing: -0.04em;
        }

        .hero-subtitle-box {
          border-left: 3px solid var(--accent-green);
          padding-left: 20px;
          margin-bottom: 24px;
        }

        .hero-subtitle {
          font-family: var(--font-heading);
          font-size: 1.6rem;
          font-weight: 600;
          color: var(--text-main);
          letter-spacing: -0.01em;
          line-height: 1.3;
        }

        .hero-statement {
          font-size: 1.1rem;
          color: var(--text-muted);
          max-width: 580px;
          line-height: 1.7;
          margin-bottom: 40px;
        }

        .hero-actions {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-bottom: 50px;
          flex-wrap: wrap;
        }

        .hero-metadata-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          padding-top: 32px;
          border-top: 1px solid var(--border-light);
        }

        .meta-card {
          background-color: var(--bg-pure);
          border: 1px solid var(--border-light);
          padding: 16px 20px;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .full-width-meta {
          grid-column: 1 / -1;
        }

        .meta-header {
          display: flex;
          align-items: center;
          gap: 8px;
          color: var(--accent-green);
        }

        .meta-icon {
          color: var(--accent-green);
        }

        .meta-value {
          font-family: var(--font-heading);
          font-size: 1.05rem;
          font-weight: 600;
          color: var(--text-main);
        }

        /* HERO RIGHT: PORTRAIT */
        .hero-right {
          position: relative;
        }

        .portrait-wrapper {
          position: relative;
          padding: 24px;
          background-color: var(--bg-pure);
          border: 1px solid var(--border-light);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.05);
        }

        .portrait-image-container {
          position: relative;
          aspect-ratio: 3/4;
          overflow: hidden;
          border: 1px solid var(--border-medium);
        }

        .portrait-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          filter: contrast(1.03) brightness(1.02);
          transition: transform 0.6s ease;
        }

        .portrait-wrapper:hover .portrait-img {
          transform: scale(1.03);
        }

        .portrait-grid-overlay {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background: linear-gradient(0deg, rgba(20, 20, 20, 0.2) 0%, transparent 40%);
        }

        .portrait-tag {
          position: absolute;
          background-color: var(--accent-charcoal);
          color: var(--bg-pure);
          font-family: var(--font-mono);
          font-size: 0.65rem;
          letter-spacing: 0.1em;
          padding: 6px 12px;
          z-index: 2;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .tag-top-left { top: 8px; left: 8px; }
        .tag-top-right { top: 8px; right: 8px; background-color: var(--bg-pure); color: var(--text-main); border: 1px solid var(--border-medium); }
        .tag-bottom-left { bottom: 44px; left: 8px; background-color: var(--bg-pure); color: var(--text-main); border: 1px solid var(--border-medium); }
        .tag-bottom-right { bottom: 44px; right: 8px; background-color: var(--accent-green); }

        .portrait-caption {
          margin-top: 14px;
          text-align: center;
          padding-top: 10px;
          border-top: 1px dashed var(--border-light);
        }

        @media (max-width: 1024px) {
          .hero-container {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .hero-right {
            max-width: 500px;
            margin: 0 auto;
            width: 100%;
          }
        }

        @media (max-width: 640px) {
          .hero-title {
            font-size: 3.2rem;
          }
          .hero-subtitle {
            font-size: 1.3rem;
          }
          .hero-metadata-grid {
            grid-template-columns: 1fr;
          }
          .hero-actions {
            flex-direction: column;
            width: 100%;
          }
          .hero-actions button {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
