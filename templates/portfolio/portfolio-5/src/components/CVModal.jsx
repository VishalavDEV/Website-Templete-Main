import React from 'react';
import { X, Printer, Download, Mail, MapPin, Globe, Calendar, CheckCircle2 } from 'lucide-react';
import { PROFILE_DATA, FIELD_EXPERIENCE, EDUCATION_DATA, PUBLICATIONS_DATA, RECOGNITION_DATA, EXPERTISE_SKILLS } from '../data/portfolioData';

export default function CVModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="cv-modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Modal Top Actions */}
        <div className="cv-modal-header no-print">
          <div className="cv-header-title">
            <span>OFFICIAL CV / RESUME DOCUMENT</span>
            <span className="cv-tag">NOAH EVERWOOD</span>
          </div>
          <div className="cv-actions">
            <button className="btn-secondary btn-sm" onClick={handlePrint}>
              <Printer size={14} /> Print / Save PDF
            </button>
            <button className="modal-close-btn-sm" onClick={onClose}>
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Printable Resume Document Area */}
        <div className="cv-printable-document" id="printable-cv">
          {/* Resume Header */}
          <header className="cv-doc-header">
            <div className="cv-doc-titles">
              <h1 className="cv-doc-name">{PROFILE_DATA.name}</h1>
              <h2 className="cv-doc-profession">{PROFILE_DATA.title}</h2>
              <p className="cv-doc-tagline">"{PROFILE_DATA.tagline}"</p>
            </div>

            <div className="cv-doc-contact-block">
              <div><MapPin size={12} /> {PROFILE_DATA.location}</div>
              <div><Mail size={12} /> hello@noaheverwood.example</div>
              <div><Globe size={12} /> Queenstown Field Base</div>
              <div className="cv-exp-pill">{PROFILE_DATA.experienceYears} Field Experience</div>
            </div>
          </header>

          <hr className="cv-divider" />

          {/* Profile Summary */}
          <section className="cv-section">
            <h3 className="cv-sec-title">PROFESSIONAL SUMMARY</h3>
            <p className="cv-summary-text">
              {PROFILE_DATA.bioParagraphs[0]} {PROFILE_DATA.bioParagraphs[1]}
            </p>
          </section>

          {/* Field Experience */}
          <section className="cv-section">
            <h3 className="cv-sec-title">FIELD EXPERIENCE</h3>
            <div className="cv-experience-list">
              {FIELD_EXPERIENCE.map((exp) => (
                <div key={exp.role + exp.period} className="cv-exp-item">
                  <div className="cv-exp-meta">
                    <span className="cv-exp-role">{exp.role}</span>
                    <span className="cv-exp-period">{exp.period}</span>
                  </div>
                  <div className="cv-exp-org">{exp.organization} — <em>{exp.type}</em></div>
                  <p className="cv-exp-desc">{exp.description}</p>
                  <ul className="cv-bullet-list">
                    {exp.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Core Expertise */}
          <section className="cv-section">
            <h3 className="cv-sec-title">CORE SKILLS & TECHNICAL COMPETENCIES</h3>
            <div className="cv-skills-grid">
              {EXPERTISE_SKILLS.map((cat) => (
                <div key={cat.category} className="cv-skill-cat">
                  <strong>{cat.category}:</strong> {cat.skills.join(', ')}
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section className="cv-section">
            <h3 className="cv-sec-title">EDUCATION & FELLOWSHIPS</h3>
            <div className="cv-edu-list">
              {EDUCATION_DATA.map((edu) => (
                <div key={edu.degree} className="cv-edu-item">
                  <div className="cv-edu-meta">
                    <strong>{edu.degree}</strong> ({edu.period})
                  </div>
                  <div className="cv-edu-inst">{edu.institution}</div>
                  <div className="cv-edu-desc">{edu.description}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Publications & Awards */}
          <div className="cv-two-col">
            <section className="cv-section">
              <h3 className="cv-sec-title">PUBLICATIONS</h3>
              {PUBLICATIONS_DATA.map((pub) => (
                <div key={pub.publication} className="cv-pub-item">
                  <strong>{pub.year}: "{pub.storyTitle}"</strong> — {pub.publication}
                </div>
              ))}
            </section>

            <section className="cv-section">
              <h3 className="cv-sec-title">RECOGNITION</h3>
              {RECOGNITION_DATA.map((rec) => (
                <div key={rec.award} className="cv-pub-item">
                  <strong>{rec.year}: {rec.award}</strong> — {rec.organization}
                </div>
              ))}
            </section>
          </div>

          <footer className="cv-doc-footer">
            <span>FICTIONAL RESUME DEMONSTRATION DOCUMENT</span>
            <span>NOAH EVERWOOD © 2026</span>
          </footer>
        </div>
      </div>
    </div>
  );
}
