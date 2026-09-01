import React from 'react';
import { educationData } from '../data/portfolioData';
import { GraduationCap, Award, BookOpen, MapPin } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="arch-section education-section">
      <div className="arch-grid-lines"></div>

      <div className="container">
        {/* SECTION HEADER */}
        <div className="section-header-bar">
          <div className="header-left">
            <span className="section-number">05</span>
            <div className="header-titles">
              <span className="section-label">ACADEMIC BACKGROUND</span>
              <h2 className="section-title display-title">Academic Foundation</h2>
            </div>
          </div>
          <div className="header-line"></div>
        </div>

        {/* EDUCATION DEGREES CARDS */}
        <div className="education-grid">
          {educationData.map((edu, idx) => (
            <div key={idx} className="education-card arch-card">
              <div className="arch-corner-tick tick-tl"></div>
              <div className="arch-corner-tick tick-tr"></div>
              <div className="arch-corner-tick tick-bl"></div>
              <div className="arch-corner-tick tick-br"></div>

              <div className="edu-top-bar">
                <div className="edu-icon-wrap">
                  <GraduationCap size={24} />
                </div>
                <div className="edu-year-tag">
                  <span className="mono-text">{edu.year}</span>
                </div>
              </div>

              <h3 className="edu-degree">{edu.degree}</h3>

              <div className="edu-institution-row">
                <span className="inst-name">{edu.institution}</span>
                <span className="bullet-sep">•</span>
                <span className="inst-loc">{edu.location}</span>
              </div>

              <div className="edu-details-box">
                <div className="detail-item">
                  <BookOpen size={14} className="detail-icon" />
                  <span className="detail-label">Specialization:</span>
                  <span className="detail-text">{edu.focus}</span>
                </div>

                <div className="detail-item">
                  <Award size={14} className="detail-icon" />
                  <span className="detail-label">Distinction:</span>
                  <span className="detail-text highlight">{edu.honors}</span>
                </div>
              </div>

              <div className="edu-thesis-box">
                <span className="mono-text thesis-label">ACADEMIC THESIS</span>
                <p className="thesis-text">"{edu.thesis}"</p>
              </div>

              <div className="edu-type-footer">
                <span className="mono-text">{edu.type}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .education-section {
          background-color: var(--bg-pure);
          border-bottom: 1px solid var(--border-light);
        }

        .education-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 36px;
        }

        .education-card {
          background-color: var(--bg-pure);
          display: flex;
          flex-direction: column;
        }

        .edu-top-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 24px;
        }

        .edu-icon-wrap {
          width: 50px;
          height: 50px;
          background-color: var(--accent-charcoal);
          color: var(--bg-pure);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .edu-year-tag {
          padding: 6px 14px;
          background-color: var(--bg-gray);
          border: 1px solid var(--border-light);
        }

        .edu-degree {
          font-family: var(--font-display);
          font-size: 1.6rem;
          font-weight: 700;
          color: var(--accent-charcoal);
          margin-bottom: 10px;
          line-height: 1.25;
        }

        .edu-institution-row {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.95rem;
          color: var(--accent-green);
          font-weight: 600;
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 1px solid var(--border-light);
        }

        .edu-details-box {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 24px;
        }

        .detail-item {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 0.9rem;
        }

        .detail-icon {
          color: var(--accent-green);
          margin-top: 3px;
          flex-shrink: 0;
        }

        .detail-label {
          font-weight: 600;
          color: var(--text-main);
        }

        .detail-text {
          color: var(--text-muted);
        }

        .detail-text.highlight {
          color: var(--accent-green);
          font-weight: 600;
        }

        .edu-thesis-box {
          background-color: var(--bg-warm);
          border-left: 3px solid var(--accent-green);
          padding: 16px 20px;
          margin-top: auto;
          margin-bottom: 20px;
        }

        .thesis-label {
          font-size: 0.68rem;
          color: var(--accent-green);
          margin-bottom: 6px;
          display: block;
        }

        .thesis-text {
          font-size: 0.9rem;
          font-style: italic;
          color: var(--text-main);
          line-height: 1.5;
        }

        .edu-type-footer {
          padding-top: 14px;
          border-top: 1px dashed var(--border-light);
          text-align: right;
        }

        @media (max-width: 900px) {
          .education-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
