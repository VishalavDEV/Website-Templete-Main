import React from 'react';
import { philosophyData } from '../data/portfolioData';
import { Compass, Sparkles, Feather, Clock } from 'lucide-react';

export default function Philosophy() {
  const getPrincipleIcon = (index) => {
    if (index === 0) return <Compass size={20} />;
    if (index === 1) return <Feather size={20} />;
    return <Clock size={20} />;
  };

  return (
    <section id="practice" className="arch-section philosophy-section">
      <div className="arch-grid-lines"></div>

      <div className="container">
        {/* SECTION HEADER */}
        <div className="section-header-bar">
          <div className="header-left">
            <span className="section-number">{philosophyData.sectionNum}</span>
            <div className="header-titles">
              <span className="section-label">PHILOSOPHY & APPROACH</span>
              <h2 className="section-title display-title">{philosophyData.title}</h2>
            </div>
          </div>
          <div className="header-line"></div>
        </div>

        {/* LARGE VISUAL STATEMENT */}
        <div className="quote-banner">
          <div className="quote-mark">“</div>
          <h3 className="hero-quote-text">
            {philosophyData.quote}
          </h3>
        </div>

        {/* TWO-COLUMN ESSAY & MATERIAL VISUAL */}
        <div className="philosophy-grid">
          <div className="essay-column">
            <h4 className="essay-headline">
              Spatial design as a dialogue between natural ecology and urban culture.
            </h4>
            <p className="essay-paragraph">
              {philosophyData.essay}
            </p>
            <p className="essay-paragraph secondary">
              By prioritizing low-carbon bio-materials, natural ventilation stacks, and circular building components, my practice delivers projects that age gracefully. We reject superficial trends in favor of structural clarity, volumetric warmth, and acoustic serenity.
            </p>

            <div className="philosophy-tags">
              <span className="tag-item">#SUSTAINABILITY</span>
              <span className="tag-item">#MASS_TIMBER</span>
              <span className="tag-item">#PASSIVE_SOLAR</span>
              <span className="tag-item">#HUMAN_SCALE</span>
            </div>
          </div>

          <div className="visual-column">
            <div className="material-image-frame">
              <div className="arch-corner-tick tick-tl"></div>
              <div className="arch-corner-tick tick-tr"></div>
              <div className="arch-corner-tick tick-bl"></div>
              <div className="arch-corner-tick tick-br"></div>

              <img 
                src={philosophyData.materialImage} 
                alt="Architectural Material Tactility Study" 
                className="material-img"
              />

              <div className="material-overlay-tag">
                <Sparkles size={14} />
                <span>MATERIAL STUDY / OAK, CAST CONCRETE & BRONZE</span>
              </div>
            </div>
          </div>
        </div>

        {/* THREE PHILOSOPHY PRINCIPLES GRID */}
        <div className="principles-container">
          <div className="principles-label-row">
            <span className="mono-text">CORE PRACTICE PRINCIPLES</span>
            <div className="line-anim"></div>
          </div>

          <div className="principles-grid">
            {philosophyData.principles.map((principle, idx) => (
              <div key={principle.number} className="principle-card arch-card">
                <div className="arch-corner-tick tick-tl"></div>
                <div className="arch-corner-tick tick-tr"></div>
                <div className="arch-corner-tick tick-bl"></div>
                <div className="arch-corner-tick tick-br"></div>

                <div className="principle-top">
                  <span className="principle-num">0{idx + 1} — {principle.title}</span>
                  <div className="principle-icon">{getPrincipleIcon(idx)}</div>
                </div>

                <h4 className="principle-title">{principle.subtitle}</h4>
                <p className="principle-desc">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .philosophy-section {
          background-color: var(--bg-pure);
          border-bottom: 1px solid var(--border-light);
        }

        .section-header-bar {
          display: flex;
          align-items: flex-end;
          gap: 32px;
          margin-bottom: 60px;
        }

        .header-left {
          display: flex;
          align-items: center;
          gap: 24px;
        }

        .header-titles {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .section-title {
          font-size: 2.4rem;
          color: var(--accent-charcoal);
        }

        .header-line {
          flex: 1;
          height: 1px;
          background-color: var(--border-medium);
          margin-bottom: 12px;
        }

        /* QUOTE BANNER */
        .quote-banner {
          background-color: var(--bg-warm);
          border: 1px solid var(--border-light);
          border-left: 4px solid var(--accent-green);
          padding: 48px 56px;
          margin-bottom: 70px;
          position: relative;
        }

        .quote-mark {
          position: absolute;
          top: 10px;
          left: 20px;
          font-family: var(--font-display);
          font-size: 5rem;
          color: var(--border-medium);
          opacity: 0.4;
          line-height: 1;
          pointer-events: none;
        }

        .hero-quote-text {
          font-family: var(--font-display);
          font-size: clamp(1.8rem, 3.5vw, 2.8rem);
          font-weight: 700;
          color: var(--accent-charcoal);
          line-height: 1.25;
          letter-spacing: -0.02em;
          position: relative;
          z-index: 1;
        }

        /* PHILOSOPHY GRID */
        .philosophy-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
          margin-bottom: 80px;
        }

        .essay-headline {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--accent-charcoal);
          margin-bottom: 20px;
          line-height: 1.35;
        }

        .essay-paragraph {
          font-size: 1.05rem;
          color: var(--text-muted);
          line-height: 1.75;
          margin-bottom: 20px;
        }

        .essay-paragraph.secondary {
          font-size: 0.98rem;
          color: var(--text-light);
        }

        .philosophy-tags {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          margin-top: 30px;
        }

        .tag-item {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          letter-spacing: 0.08em;
          padding: 6px 12px;
          background-color: var(--bg-gray);
          color: var(--accent-green);
          border: 1px solid var(--border-light);
        }

        /* MATERIAL VISUAL FRAME */
        .material-image-frame {
          position: relative;
          padding: 16px;
          background-color: var(--bg-warm);
          border: 1px solid var(--border-light);
        }

        .material-img {
          width: 100%;
          aspect-ratio: 4/3;
          object-fit: cover;
          display: block;
          border: 1px solid var(--border-medium);
          filter: contrast(1.02);
        }

        .material-overlay-tag {
          position: absolute;
          bottom: 28px;
          left: 28px;
          right: 28px;
          background-color: rgba(20, 20, 20, 0.9);
          color: var(--bg-pure);
          font-family: var(--font-mono);
          font-size: 0.68rem;
          letter-spacing: 0.08em;
          padding: 10px 16px;
          display: flex;
          align-items: center;
          gap: 8px;
          backdrop-filter: blur(4px);
        }

        /* THREE PRINCIPLES GRID */
        .principles-container {
          display: flex;
          flex-direction: column;
          gap: 28px;
        }

        .principles-label-row {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .principles-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .principle-card {
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .principle-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 16px;
        }

        .principle-num {
          font-family: var(--font-mono);
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: var(--accent-green);
        }

        .principle-icon {
          color: var(--accent-charcoal);
          padding: 8px;
          background-color: var(--bg-gray);
        }

        .principle-title {
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--text-main);
          margin-bottom: 12px;
        }

        .principle-desc {
          font-size: 0.92rem;
          color: var(--text-muted);
          line-height: 1.6;
        }

        @media (max-width: 1024px) {
          .philosophy-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .principles-grid {
            grid-template-columns: 1fr;
          }
          .quote-banner {
            padding: 32px;
          }
        }
      `}</style>
    </section>
  );
}
