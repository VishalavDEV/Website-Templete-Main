import React from 'react';
import { skillsData } from '../data/portfolioData';
import { Cpu, LayoutGrid, Wrench, Sparkles, CheckCircle2 } from 'lucide-react';

export default function ExpertiseGrid() {
  const getCategoryIcon = (idx) => {
    if (idx === 0) return <LayoutGrid size={18} />;
    if (idx === 1) return <Cpu size={18} />;
    if (idx === 2) return <Wrench size={18} />;
    return <Sparkles size={18} />;
  };

  return (
    <section id="expertise" className="arch-section expertise-section">
      <div className="arch-grid-lines"></div>

      <div className="container">
        {/* SECTION HEADER */}
        <div className="section-header-bar">
          <div className="header-left">
            <span className="section-number">04</span>
            <div className="header-titles">
              <span className="section-label">TECHNICAL COMPETENCIES</span>
              <h2 className="section-title display-title">Design Tools & Expertise</h2>
            </div>
          </div>
          <div className="header-line"></div>
        </div>

        {/* BLUEPRINT SKILLS CATEGORY GRID */}
        <div className="expertise-matrix-grid">
          {skillsData.map((cat, catIdx) => (
            <div key={cat.category} className="expertise-cat-block arch-card">
              <div className="arch-corner-tick tick-tl"></div>
              <div className="arch-corner-tick tick-tr"></div>
              <div className="arch-corner-tick tick-bl"></div>
              <div className="arch-corner-tick tick-br"></div>

              <div className="cat-header">
                <div className="cat-title-left">
                  <div className="cat-icon">{getCategoryIcon(catIdx)}</div>
                  <h3 className="cat-name">{cat.category}</h3>
                </div>
                <span className="mono-text cat-code">{cat.code}</span>
              </div>

              <div className="skills-modular-list">
                {cat.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="skill-module-item">
                    <div className="module-top">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level-badge">{skill.level}</span>
                    </div>
                    <span className="skill-spec-text">{skill.spec}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .expertise-section {
          background-color: var(--bg-warm);
          border-bottom: 1px solid var(--border-light);
        }

        .expertise-matrix-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 32px;
        }

        .expertise-cat-block {
          background-color: var(--bg-pure);
          display: flex;
          flex-direction: column;
        }

        .cat-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 20px;
          margin-bottom: 24px;
          border-bottom: 1px solid var(--border-light);
        }

        .cat-title-left {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .cat-icon {
          color: var(--accent-green);
          padding: 8px;
          background-color: var(--bg-gray);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .cat-name {
          font-family: var(--font-heading);
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--accent-charcoal);
          letter-spacing: -0.01em;
        }

        .cat-code {
          color: var(--accent-green);
        }

        .skills-modular-list {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }

        .skill-module-item {
          background-color: var(--bg-warm);
          border: 1px solid var(--border-light);
          padding: 14px 16px;
          display: flex;
          flex-direction: column;
          gap: 6px;
          transition: all 0.2s ease;
        }

        .skill-module-item:hover {
          border-color: var(--accent-green);
          background-color: var(--bg-pure);
        }

        .module-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .skill-name {
          font-family: var(--font-heading);
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text-main);
        }

        .skill-level-badge {
          font-family: var(--font-mono);
          font-size: 0.65rem;
          padding: 3px 8px;
          background-color: var(--accent-charcoal);
          color: var(--bg-pure);
          letter-spacing: 0.05em;
        }

        .skill-spec-text {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--text-muted);
        }

        @media (max-width: 1024px) {
          .expertise-matrix-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 640px) {
          .skills-modular-list {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
