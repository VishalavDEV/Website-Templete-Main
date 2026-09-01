import React from 'react';
import { recognitionData } from '../data/portfolioData';
import { Trophy, AlertCircle, MapPin, ExternalLink } from 'lucide-react';

export default function Recognition() {
  return (
    <section id="recognition" className="arch-section recognition-section">
      <div className="arch-grid-lines"></div>

      <div className="container">
        {/* SECTION HEADER */}
        <div className="section-header-bar">
          <div className="header-left">
            <span className="section-number">07</span>
            <div className="header-titles">
              <span className="section-label">AWARDS & HONORS</span>
              <h2 className="section-title display-title">Recognition</h2>
            </div>
          </div>
          <div className="header-line"></div>
        </div>

        {/* MINIMALIST AWARDS LIST */}
        <div className="recognition-list">
          {recognitionData.map((award, idx) => (
            <div key={idx} className="award-row">
              <div className="award-year-col">
                <span className="award-year-text">{award.year}</span>
              </div>

              <div className="award-info-col">
                <h3 className="award-title-text">{award.title}</h3>
                <div className="award-org-meta">
                  <span className="award-org-name">{award.organization}</span>
                  <span className="bullet-sep">•</span>
                  <MapPin size={12} className="meta-icon" />
                  <span className="award-location">{award.location}</span>
                </div>
              </div>

              <div className="award-project-ref">
                <span className="mono-text ref-label">NOMINATED PROJECT:</span>
                <span className="ref-name">{award.projectRef}</span>
              </div>
            </div>
          ))}
        </div>

        {/* REQUIRED DISCLAIMER NOTE */}
        <div className="recognition-disclaimer-box">
          <AlertCircle size={18} className="disclaimer-icon" />
          <p className="disclaimer-text">
            "All awards, honors, and organizations displayed in this template are fictional demonstration content."
          </p>
        </div>
      </div>

      <style>{`
        .recognition-section {
          background-color: var(--bg-pure);
          border-bottom: 1px solid var(--border-light);
        }

        .recognition-list {
          display: flex;
          flex-direction: column;
          border: 1px solid var(--border-light);
          background-color: var(--bg-pure);
          margin-bottom: 40px;
        }

        .award-row {
          display: grid;
          grid-template-columns: 140px 1.5fr 1fr;
          gap: 32px;
          align-items: center;
          padding: 28px 36px;
          border-bottom: 1px solid var(--border-light);
          transition: background-color 0.2s ease;
        }

        .award-row:last-child {
          border-bottom: none;
        }

        .award-row:hover {
          background-color: var(--bg-warm);
        }

        .award-year-text {
          font-family: var(--font-display);
          font-size: 2.2rem;
          font-weight: 800;
          color: var(--accent-green);
          line-height: 1;
        }

        .award-title-text {
          font-size: 1.4rem;
          font-weight: 700;
          color: var(--accent-charcoal);
          margin-bottom: 6px;
        }

        .award-org-meta {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.9rem;
          color: var(--text-muted);
        }

        .award-org-name {
          font-weight: 600;
          color: var(--text-main);
        }

        .award-project-ref {
          display: flex;
          flex-direction: column;
          gap: 4px;
          background-color: var(--bg-gray);
          padding: 12px 18px;
          border-left: 2px solid var(--accent-green);
        }

        .ref-label {
          font-size: 0.65rem;
          color: var(--accent-green);
        }

        .ref-name {
          font-family: var(--font-heading);
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text-main);
        }

        .recognition-disclaimer-box {
          display: flex;
          align-items: center;
          gap: 14px;
          background-color: var(--bg-warm);
          border: 1px solid var(--border-light);
          padding: 18px 24px;
        }

        .disclaimer-icon {
          color: var(--accent-terracotta);
          flex-shrink: 0;
        }

        .disclaimer-text {
          font-family: var(--font-mono);
          font-size: 0.78rem;
          color: var(--text-muted);
          margin: 0;
        }

        @media (max-width: 900px) {
          .award-row {
            grid-template-columns: 1fr;
            gap: 16px;
            padding: 24px;
          }
        }
      `}</style>
    </section>
  );
}
