import React, { useEffect } from 'react';
import { X, Calendar, MapPin, Layers, Award, Sparkles, Compass, CheckCircle2, ArrowRight } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="project-modal-card" onClick={(e) => e.stopPropagation()}>
        {/* MODAL HEADER */}
        <div className="modal-top-bar">
          <div className="top-bar-left">
            <span className="modal-project-num">PROJECT {project.num}</span>
            <span className="top-bar-divider">|</span>
            <span className="mono-text">{project.category}</span>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
            <X size={22} />
          </button>
        </div>

        <div className="modal-scroll-content">
          {/* HERO PROJECT BANNER IMAGE */}
          <div className="modal-hero-image-wrap">
            <img src={project.image} alt={project.name} className="modal-hero-img" />
            <div className="modal-hero-overlay">
              <h2 className="modal-project-title display-title">{project.name}</h2>
              <div className="modal-meta-pills">
                <span className="meta-pill"><MapPin size={12} /> {project.location}</span>
                <span className="meta-pill"><Calendar size={12} /> {project.year}</span>
                <span className="meta-pill badge-green"><Sparkles size={12} /> {project.status}</span>
              </div>
            </div>
          </div>

          {/* TWO COLUMN DETAILS */}
          <div className="modal-grid">
            {/* LEFT COLUMN: OVERVIEW & CONCEPT */}
            <div className="modal-left">
              <div className="modal-section-block">
                <h3 className="block-title">PROJECT OVERVIEW</h3>
                <p className="block-text">{project.fullOverview}</p>
              </div>

              <div className="modal-section-block">
                <h3 className="block-title">ARCHITECTURAL DESIGN CONCEPT</h3>
                <p className="block-text">{project.designConcept}</p>
              </div>

              {/* BLUEPRINT WIREFRAME DIAGRAM MOCKUP */}
              <div className="blueprint-diagram-box">
                <div className="diagram-header">
                  <span className="mono-text">ARCHITECTURAL BLUEPRINT SPECIFICATION // AXONOMETRIC</span>
                  <Compass size={14} className="icon-green" />
                </div>
                <div className="blueprint-svg-container">
                  <svg className="blueprint-svg" viewBox="0 0 400 180" xmlns="http://www.w3.org/2000/svg">
                    {/* Grid lines */}
                    <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#e0e0e0" strokeWidth="0.5"/>
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                    {/* Isometric Building Wireframe */}
                    <g stroke="#1B3629" strokeWidth="1.5" fill="none">
                      <polygon points="120,130 240,160 320,110 200,80" fill="rgba(27,54,41,0.05)" />
                      <polygon points="120,130 200,80 200,30 120,80" fill="rgba(27,54,41,0.08)" />
                      <polygon points="200,80 320,110 320,60 200,30" fill="rgba(27,54,41,0.03)" />
                      <line x1="240" y1="160" x2="240" y2="110" strokeDasharray="3,3" />
                      <line x1="120" y1="130" x2="240" y2="160" stroke="#1B3629" />
                      <line x1="240" y1="160" x2="320" y2="110" stroke="#1B3629" />
                      <line x1="320" y1="110" x2="320" y2="60" stroke="#1B3629" />
                      <line x1="120" y1="80" x2="200" y2="30" stroke="#1B3629" />
                      <line x1="200" y1="30" x2="320" y2="60" stroke="#1B3629" />
                      {/* Dimension lines */}
                      <line x1="110" y1="135" x2="190" y2="85" stroke="#B05844" strokeWidth="1" strokeDasharray="2,2"/>
                      <text x="140" y="100" fill="#B05844" fontSize="10" fontFamily="JetBrains Mono">34.5m SOLAR AXIS</text>
                    </g>
                  </svg>
                </div>
                <div className="diagram-footer">
                  {project.diagrams?.map((diag, i) => (
                    <div key={i} className="diagram-item">
                      <span className="diag-label">{diag.label}:</span>
                      <span className="diag-detail">{diag.detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: METRICS & MATERIALS */}
            <div className="modal-right">
              {/* KEY METRICS CARD */}
              <div className="arch-card modal-side-card">
                <div className="arch-corner-tick tick-tl"></div>
                <div className="arch-corner-tick tick-tr"></div>
                <div className="arch-corner-tick tick-bl"></div>
                <div className="arch-corner-tick tick-br"></div>

                <h4 className="side-card-title">PROJECT SPECIFICATIONS</h4>

                <div className="specs-list">
                  <div className="spec-row">
                    <span className="spec-label">Gross Floor Area</span>
                    <span className="spec-val">{project.metrics?.area}</span>
                  </div>
                  <div className="spec-row">
                    <span className="spec-label">Carbon Reduction</span>
                    <span className="spec-val highlight">{project.metrics?.carbonReduction}</span>
                  </div>
                  <div className="spec-row">
                    <span className="spec-label">Energy Standard</span>
                    <span className="spec-val">{project.metrics?.energyRating}</span>
                  </div>
                  <div className="spec-row">
                    <span className="spec-label">Timeline</span>
                    <span className="spec-val">{project.metrics?.yearCompleted}</span>
                  </div>
                </div>
              </div>

              {/* MATERIAL PALETTE */}
              <div className="arch-card modal-side-card">
                <h4 className="side-card-title">SPECIFIED MATERIAL PALETTE</h4>
                <div className="materials-list">
                  {project.materials?.map((mat, idx) => (
                    <div key={idx} className="mat-item">
                      <CheckCircle2 size={14} className="mat-icon" />
                      <span>{mat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="modal-cta-box">
                <button className="btn-primary full-width" onClick={onClose}>
                  <span>Return to Portfolio</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .project-modal-card {
          width: 100%;
          max-width: 1100px;
          max-height: 90vh;
          background-color: var(--bg-pure);
          border: 1px solid var(--border-dark);
          box-shadow: 0 30px 80px rgba(0, 0, 0, 0.3);
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
          animation: modalPop 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes modalPop {
          from { opacity: 0; transform: scale(0.96) translateY(10px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }

        .modal-top-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 28px;
          border-bottom: 1px solid var(--border-light);
          background-color: var(--bg-warm);
        }

        .top-bar-left {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .modal-project-num {
          font-family: var(--font-mono);
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--accent-green);
        }

        .top-bar-divider {
          color: var(--border-medium);
        }

        .modal-close-btn {
          background: none;
          border: 1px solid var(--border-medium);
          padding: 6px;
          cursor: pointer;
          color: var(--text-main);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
        }

        .modal-close-btn:hover {
          background-color: var(--accent-charcoal);
          color: var(--bg-pure);
        }

        .modal-scroll-content {
          overflow-y: auto;
          padding: 32px;
        }

        .modal-hero-image-wrap {
          position: relative;
          width: 100%;
          height: 380px;
          overflow: hidden;
          margin-bottom: 36px;
          border: 1px solid var(--border-medium);
        }

        .modal-hero-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .modal-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 40%, rgba(18, 18, 18, 0.85) 100%);
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 32px;
          color: var(--bg-pure);
        }

        .modal-project-title {
          font-size: 2.5rem;
          color: #ffffff;
          margin-bottom: 12px;
        }

        .modal-meta-pills {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .meta-pill {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          padding: 6px 14px;
          background-color: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(4px);
          color: #ffffff;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .badge-green {
          background-color: var(--accent-green);
        }

        .modal-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 36px;
        }

        .modal-section-block {
          margin-bottom: 32px;
        }

        .block-title {
          font-family: var(--font-mono);
          font-size: 0.85rem;
          letter-spacing: 0.1em;
          color: var(--accent-green);
          margin-bottom: 12px;
          border-bottom: 1px solid var(--border-light);
          padding-bottom: 8px;
        }

        .block-text {
          font-size: 1rem;
          color: var(--text-muted);
          line-height: 1.7;
        }

        /* BLUEPRINT WIREFRAME */
        .blueprint-diagram-box {
          background-color: var(--bg-warm);
          border: 1px solid var(--border-light);
          padding: 20px;
          margin-top: 24px;
        }

        .diagram-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 14px;
          padding-bottom: 8px;
          border-bottom: 1px solid var(--border-light);
        }

        .icon-green {
          color: var(--accent-green);
        }

        .blueprint-svg-container {
          background-color: var(--bg-pure);
          border: 1px solid var(--border-medium);
          height: 180px;
          overflow: hidden;
        }

        .blueprint-svg {
          width: 100%;
          height: 100%;
        }

        .diagram-footer {
          margin-top: 14px;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .diagram-item {
          display: flex;
          gap: 8px;
          font-family: var(--font-mono);
          font-size: 0.72rem;
        }

        .diag-label {
          color: var(--accent-green);
          font-weight: 700;
        }

        .diag-detail {
          color: var(--text-muted);
        }

        /* RIGHT SIDE CARDS */
        .modal-side-card {
          margin-bottom: 24px;
        }

        .side-card-title {
          font-family: var(--font-mono);
          font-size: 0.8rem;
          letter-spacing: 0.08em;
          color: var(--text-main);
          margin-bottom: 16px;
          padding-bottom: 8px;
          border-bottom: 1px solid var(--border-light);
        }

        .specs-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .spec-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.88rem;
        }

        .spec-label {
          color: var(--text-muted);
        }

        .spec-val {
          font-family: var(--font-mono);
          font-weight: 600;
          color: var(--text-main);
        }

        .spec-val.highlight {
          color: var(--accent-green);
        }

        .materials-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .mat-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.9rem;
          color: var(--text-muted);
        }

        .mat-icon {
          color: var(--accent-green);
        }

        .modal-cta-box {
          margin-top: 28px;
        }

        @media (max-width: 900px) {
          .modal-grid {
            grid-template-columns: 1fr;
          }
          .modal-hero-image-wrap {
            height: 260px;
          }
        }
      `}</style>
    </div>
  );
}
