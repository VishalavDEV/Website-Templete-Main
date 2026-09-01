import React from 'react';
import { researchData } from '../data/portfolioData';
import { FileText, MapPin, Calendar, ArrowUpRight } from 'lucide-react';

export default function Research() {
  return (
    <section id="research" className="arch-section research-section">
      <div className="arch-grid-lines"></div>

      <div className="container">
        {/* SECTION HEADER */}
        <div className="section-header-bar">
          <div className="header-left">
            <span className="section-number">06</span>
            <div className="header-titles">
              <span className="section-label">ACADEMIC & PUBLIC ENGAGEMENT</span>
              <h2 className="section-title display-title">Research & Public Work</h2>
            </div>
          </div>
          <div className="header-line"></div>
        </div>

        {/* EXPERIMENTAL POSTER LAYOUT FOR RESEARCH PAPERS */}
        <div className="research-posters-grid">
          {researchData.projects.map((res) => (
            <div key={res.code} className="poster-card arch-card">
              <div className="arch-corner-tick tick-tl"></div>
              <div className="arch-corner-tick tick-tr"></div>
              <div className="arch-corner-tick tick-bl"></div>
              <div className="arch-corner-tick tick-br"></div>

              <div className="poster-top-bar">
                <span className="mono-text poster-code">{res.code}</span>
                <span className="mono-text poster-year">{res.year}</span>
              </div>

              <h3 className="poster-title display-title">{res.title}</h3>

              <div className="poster-subtitle-box">
                <p className="poster-subtitle">{res.subtitle}</p>
              </div>

              <p className="poster-summary">{res.summary}</p>

              <div className="poster-footer">
                <span className="mono-text poster-status">PUBLISHED MONOGRAPH</span>
                <FileText size={16} className="poster-icon" />
              </div>
            </div>
          ))}
        </div>

        {/* SUBSECTION: SELECTED EXHIBITIONS */}
        <div className="exhibitions-block">
          <div className="exhibitions-header">
            <h3 className="exhibitions-title">SELECTED EXHIBITIONS & CURATED PAVILIONS</h3>
            <span className="mono-text">2021 — 2025</span>
          </div>

          <div className="exhibitions-list">
            {researchData.exhibitions.map((exh, idx) => (
              <div key={idx} className="exhibition-row">
                <div className="exh-left">
                  <span className="exh-year">{exh.year}</span>
                  <span className="bullet-sep">•</span>
                  <h4 className="exh-name">{exh.title}</h4>
                </div>

                <div className="exh-right">
                  <div className="exh-loc">
                    <MapPin size={14} />
                    <span>{exh.location}</span>
                  </div>
                  <span className="exh-role">{exh.role}</span>
                  <ArrowUpRight size={16} className="exh-arrow" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .research-section {
          background-color: var(--bg-warm);
          border-bottom: 1px solid var(--border-light);
        }

        .research-posters-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
          margin-bottom: 70px;
        }

        .poster-card {
          background-color: var(--bg-pure);
          display: flex;
          flex-direction: column;
          padding: 36px 28px;
          border: 1px solid var(--border-light);
          position: relative;
          transition: all 0.3s ease;
        }

        .poster-card:hover {
          transform: translateY(-4px);
          border-color: var(--accent-charcoal);
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.05);
        }

        .poster-top-bar {
          display: flex;
          justify-content: space-between;
          margin-bottom: 20px;
          padding-bottom: 12px;
          border-bottom: 1px solid var(--border-light);
        }

        .poster-code {
          color: var(--accent-green);
          font-weight: 700;
        }

        .poster-year {
          color: var(--text-light);
        }

        .poster-title {
          font-size: 2.2rem;
          line-height: 1;
          color: var(--accent-charcoal);
          margin-bottom: 16px;
        }

        .poster-subtitle-box {
          border-left: 2px solid var(--accent-green);
          padding-left: 12px;
          margin-bottom: 16px;
        }

        .poster-subtitle {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text-main);
          line-height: 1.4;
        }

        .poster-summary {
          font-size: 0.9rem;
          color: var(--text-muted);
          line-height: 1.6;
          margin-bottom: 28px;
        }

        .poster-footer {
          margin-top: auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 16px;
          border-top: 1px dashed var(--border-light);
        }

        .poster-status {
          font-size: 0.68rem;
          color: var(--accent-green);
        }

        .poster-icon {
          color: var(--accent-charcoal);
        }

        /* EXHIBITIONS BLOCK */
        .exhibitions-block {
          background-color: var(--bg-pure);
          border: 1px solid var(--border-light);
          padding: 40px;
        }

        .exhibitions-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 28px;
          padding-bottom: 16px;
          border-bottom: 2px solid var(--accent-charcoal);
        }

        .exhibitions-title {
          font-family: var(--font-heading);
          font-size: 1.3rem;
          font-weight: 700;
          color: var(--accent-charcoal);
        }

        .exhibitions-list {
          display: flex;
          flex-direction: column;
        }

        .exhibition-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 0;
          border-bottom: 1px solid var(--border-light);
          transition: background-color 0.2s ease;
        }

        .exhibition-row:last-child {
          border-bottom: none;
        }

        .exh-left {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .exh-year {
          font-family: var(--font-mono);
          font-size: 1.1rem;
          font-weight: 800;
          color: var(--accent-green);
        }

        .exh-name {
          font-family: var(--font-heading);
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--text-main);
        }

        .exh-right {
          display: flex;
          align-items: center;
          gap: 28px;
        }

        .exh-loc {
          display: flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-mono);
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        .exh-role {
          font-size: 0.9rem;
          color: var(--text-muted);
        }

        .exh-arrow {
          color: var(--accent-charcoal);
          transition: transform 0.2s ease;
        }

        .exhibition-row:hover .exh-arrow {
          transform: translate(3px, -3px);
          color: var(--accent-green);
        }

        @media (max-width: 1024px) {
          .research-posters-grid {
            grid-template-columns: 1fr;
          }
          .exhibition-row {
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
          }
          .exh-right {
            gap: 16px;
            flex-wrap: wrap;
          }
        }
      `}</style>
    </section>
  );
}
