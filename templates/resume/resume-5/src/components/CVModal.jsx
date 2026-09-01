import React from 'react';
import { X, Printer, Download, MapPin, Mail, Phone, Globe, Calendar, Award } from 'lucide-react';
import { profileData, experienceData, educationData, skillsData, projectsData, recognitionData } from '../data/portfolioData';

export default function CVModal({ onClose }) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="modal-backdrop no-print-backdrop" onClick={onClose}>
      <div className="cv-modal-card" onClick={(e) => e.stopPropagation()}>
        {/* MODAL CONTROL BAR (Hidden on print) */}
        <div className="cv-top-bar no-print">
          <div className="cv-top-title">
            <span className="mono-text">ADRIAN VALE — CURRICULUM VITAE (PDF / PRINT VIEW)</span>
          </div>
          <div className="cv-top-actions">
            <button className="btn-primary print-action-btn" onClick={handlePrint}>
              <Printer size={16} />
              <span>Print / Download PDF</span>
            </button>
            <button className="modal-close-btn" onClick={onClose} aria-label="Close CV Modal">
              <X size={20} />
            </button>
          </div>
        </div>

        {/* PRINTABLE CV BODY DOCUMENT */}
        <div className="cv-document-body" id="printable-cv">
          {/* HEADER SECTION */}
          <header className="cv-doc-header">
            <div className="header-main">
              <h1 className="cv-name">{profileData.name}</h1>
              <h2 className="cv-title-sub">{profileData.profession}</h2>
              <p className="cv-tagline-text">"{profileData.tagline}"</p>
            </div>

            <div className="header-contact-meta">
              <div className="meta-item"><MapPin size={12} /> {profileData.location}</div>
              <div className="meta-item"><Mail size={12} /> {profileData.email}</div>
              <div className="meta-item"><Phone size={12} /> {profileData.phone}</div>
              <div className="meta-item"><Globe size={12} /> adrianvale.example</div>
            </div>
          </header>

          <hr className="cv-divider" />

          {/* PROFESSIONAL SUMMARY */}
          <section className="cv-sec">
            <h3 className="cv-sec-title">PROFESSIONAL PROFILE</h3>
            <p className="cv-summary-text">
              {profileData.heroStatement} With over {profileData.experienceYears} of experience heading sustainable mass-timber developments, public cultural pavilions, and urban regeneration masterplans in Denmark and Sweden, Adrian Vale synthesizes ecological site analysis, human ergonomics, and parametric daylighting.
            </p>
          </section>

          {/* WORK EXPERIENCE */}
          <section className="cv-sec">
            <h3 className="cv-sec-title">CAREER EXPERIENCE</h3>
            <div className="cv-items-stack">
              {experienceData.map((exp, idx) => (
                <div key={idx} className="cv-exp-item">
                  <div className="exp-line-header">
                    <div className="exp-role-co">
                      <span className="exp-role-title">{exp.role}</span> — <span className="exp-co">{exp.company}</span>
                    </div>
                    <span className="exp-date">{exp.period}</span>
                  </div>
                  <div className="exp-loc-line">{exp.location} | {exp.type}</div>
                  <ul className="exp-bullets">
                    {exp.responsibilities.map((r, rIdx) => (
                      <li key={rIdx}>{r}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* ACADEMIC DEGREES */}
          <section className="cv-sec">
            <h3 className="cv-sec-title">ACADEMIC FOUNDATION</h3>
            <div className="cv-items-stack">
              {educationData.map((edu, idx) => (
                <div key={idx} className="cv-edu-item">
                  <div className="exp-line-header">
                    <span className="exp-role-title">{edu.degree}</span>
                    <span className="exp-date">{edu.year}</span>
                  </div>
                  <div className="exp-loc-line">{edu.institution} — {edu.location}</div>
                  <div className="edu-note">{edu.thesis} ({edu.honors})</div>
                </div>
              ))}
            </div>
          </section>

          {/* SELECTED PROJECTS SUMMARY */}
          <section className="cv-sec">
            <h3 className="cv-sec-title">SELECTED ARCHITECTURAL WORKS</h3>
            <div className="cv-projects-grid">
              {projectsData.map((p) => (
                <div key={p.id} className="cv-proj-row">
                  <span className="p-num">PROJ {p.num}</span>
                  <div className="p-details">
                    <span className="p-name">{p.name} ({p.year})</span>
                    <span className="p-type">{p.type} — {p.location}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* TECHNICAL SKILLS */}
          <section className="cv-sec">
            <h3 className="cv-sec-title">TECHNICAL EXPERTISE & TOOLS</h3>
            <div className="cv-skills-grid">
              {skillsData.map((cat, idx) => (
                <div key={idx} className="cv-skill-cat">
                  <span className="cat-hdr">{cat.category}:</span>
                  <span className="cat-items">{cat.skills.map(s => s.name).join(', ')}</span>
                </div>
              ))}
            </div>
          </section>

          {/* RECOGNITION */}
          <section className="cv-sec">
            <h3 className="cv-sec-title">RECOGNITION & AWARDS</h3>
            <div className="cv-awards-list">
              {recognitionData.map((a, idx) => (
                <div key={idx} className="cv-award-item">
                  <span className="a-year">{a.year}</span> — <span className="a-title">{a.title}</span> ({a.organization})
                </div>
              ))}
            </div>
          </section>

          {/* MANDATORY LEGAL FOOTER */}
          <footer className="cv-doc-footer">
            <p className="cv-legal">
              "{profileData.disclaimer}"
            </p>
          </footer>
        </div>
      </div>

      <style>{`
        .cv-modal-card {
          width: 100%;
          max-width: 900px;
          max-height: 92vh;
          background-color: #ffffff;
          border: 1px solid var(--border-dark);
          box-shadow: 0 30px 90px rgba(0, 0, 0, 0.4);
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
        }

        .cv-top-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 28px;
          background-color: var(--bg-warm);
          border-bottom: 1px solid var(--border-medium);
        }

        .cv-top-actions {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .print-action-btn {
          padding: 10px 20px;
          font-size: 0.75rem;
        }

        .cv-document-body {
          overflow-y: auto;
          padding: 50px 60px;
          background-color: #ffffff;
          color: #1a1a1a;
          font-family: 'Plus Jakarta Sans', sans-serif;
          line-height: 1.5;
        }

        .cv-doc-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 24px;
        }

        .cv-name {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 2.4rem;
          font-weight: 800;
          color: #141414;
          letter-spacing: -0.02em;
          margin-bottom: 4px;
        }

        .cv-title-sub {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.9rem;
          color: #1B3629;
          font-weight: 700;
          letter-spacing: 0.05em;
          margin-bottom: 8px;
        }

        .cv-tagline-text {
          font-size: 0.95rem;
          font-style: italic;
          color: #555555;
        }

        .header-contact-meta {
          display: flex;
          flex-direction: column;
          gap: 6px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.75rem;
          color: #444444;
        }

        .meta-item {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .cv-divider {
          border: none;
          border-top: 2px solid #141414;
          margin: 20px 0 28px;
        }

        .cv-sec {
          margin-bottom: 28px;
        }

        .cv-sec-title {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.82rem;
          font-weight: 700;
          color: #1B3629;
          letter-spacing: 0.1em;
          border-bottom: 1px solid #d0cec5;
          padding-bottom: 6px;
          margin-bottom: 14px;
        }

        .cv-summary-text {
          font-size: 0.92rem;
          color: #333333;
          line-height: 1.6;
        }

        .cv-items-stack {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .exp-line-header {
          display: flex;
          justify-content: space-between;
          font-size: 0.98rem;
        }

        .exp-role-title {
          font-weight: 700;
          color: #141414;
        }

        .exp-co {
          color: #1B3629;
          font-weight: 600;
        }

        .exp-date {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.8rem;
          color: #666666;
        }

        .exp-loc-line {
          font-size: 0.82rem;
          color: #666666;
          margin-bottom: 8px;
        }

        .exp-bullets {
          padding-left: 20px;
          font-size: 0.86rem;
          color: #444444;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .edu-note {
          font-size: 0.85rem;
          font-style: italic;
          color: #555555;
        }

        .cv-projects-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
        }

        .cv-proj-row {
          display: flex;
          gap: 12px;
          font-size: 0.85rem;
          background-color: #faf9f5;
          padding: 8px 12px;
          border: 1px solid #eae8e3;
        }

        .p-num {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.72rem;
          color: #1B3629;
          font-weight: 700;
        }

        .p-details {
          display: flex;
          flex-direction: column;
        }

        .p-name {
          font-weight: 700;
          color: #141414;
        }

        .p-type {
          font-size: 0.75rem;
          color: #666666;
        }

        .cv-skills-grid {
          display: flex;
          flex-direction: column;
          gap: 8px;
          font-size: 0.85rem;
        }

        .cat-hdr {
          font-weight: 700;
          color: #141414;
          margin-right: 8px;
        }

        .cat-items {
          color: #444444;
        }

        .cv-awards-list {
          display: flex;
          flex-direction: column;
          gap: 6px;
          font-size: 0.86rem;
        }

        .a-year {
          font-family: 'JetBrains Mono', monospace;
          font-weight: 700;
          color: #1B3629;
        }

        .a-title {
          font-weight: 600;
          color: #141414;
        }

        .cv-doc-footer {
          margin-top: 36px;
          padding-top: 16px;
          border-top: 1px dashed #cccccc;
          text-align: center;
        }

        .cv-legal {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.65rem;
          color: #777777;
        }

        /* PRINT STYLES */
        @media print {
          .no-print, .no-print-backdrop {
            background: none !important;
            padding: 0 !important;
          }
          .cv-modal-card {
            max-width: 100% !important;
            max-height: none !important;
            box-shadow: none !important;
            border: none !important;
          }
          .cv-document-body {
            padding: 0 !important;
            overflow: visible !important;
          }
        }
      `}</style>
    </div>
  );
}
