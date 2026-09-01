import React from 'react';
import { X, Printer, Download } from 'lucide-react';
import { profileData, careerData, educationData, recognitionData, expertiseData } from '../data/portfolioData';

export default function CvModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content-box" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '900px' }}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close CV">
          <X size={28} />
        </button>

        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '2rem' }} className="cv-print-btn">
          <button onClick={handlePrint} className="btn-editorial-primary">
            <Printer size={16} />
            <span>Print / Save PDF</span>
          </button>
        </div>

        <div className="cv-document">
          <header className="cv-header">
            <div>
              <h1 className="cv-name">{profileData.name}</h1>
              <p className="cv-title">{profileData.profession.toUpperCase()}</p>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.4rem' }}>
                {profileData.location} • hello@elaravoss.example • 12+ Years Experience
              </p>
            </div>
            <div style={{ textAlign: 'right' }}>
              <span style={{ fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-light)' }}>
                CURRICULUM VITAE
              </span>
            </div>
          </header>

          <section className="cv-section">
            <h2 className="cv-section-title">PROFESSIONAL PROFILE</h2>
            <p style={{ fontSize: '0.95rem', lineHeight: '1.7', color: 'var(--text-muted)' }}>
              {profileData.bio}
            </p>
          </section>

          <section className="cv-section">
            <h2 className="cv-section-title">CREATIVE EXPERIENCE</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.8rem' }}>
              {careerData.map((item, idx) => (
                <div key={idx}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                    <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.3rem' }}>{item.role}</h3>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-light)', fontWeight: '600' }}>{item.period}</span>
                  </div>
                  <div style={{ fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent-burgundy)', margin: '0.2rem 0 0.6rem 0' }}>
                    {item.studio} — {item.location}
                  </div>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    {item.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} style={{ fontSize: '0.88rem', color: 'var(--text-muted)', paddingLeft: '1rem', position: 'relative' }}>
                        <span style={{ position: 'absolute', left: 0 }}>•</span> {resp}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="cv-section">
            <h2 className="cv-section-title">CREATIVE PRACTICE & EXPERTISE</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              {expertiseData.map((cat, idx) => (
                <div key={idx}>
                  <h4 style={{ fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-main)', marginBottom: '0.5rem' }}>
                    {cat.category}
                  </h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    {cat.skills.join(' • ')}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="cv-section">
            <h2 className="cv-section-title">EDUCATION</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              {educationData.map((edu, idx) => (
                <div key={idx} style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem' }}>{edu.degree}</h3>
                    <span style={{ fontSize: '0.85rem', color: 'var(--accent-burgundy)' }}>{edu.institution}</span>
                  </div>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-light)' }}>{edu.period}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="cv-section">
            <h2 className="cv-section-title">RECOGNITION</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              {recognitionData.map((rec, idx) => (
                <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem' }}>
                  <span><strong>{rec.award}</strong> — {rec.organization}</span>
                  <span style={{ color: 'var(--text-light)' }}>{rec.year}</span>
                </div>
              ))}
            </div>
          </section>

          <footer style={{ marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-subtle)', fontSize: '0.75rem', color: 'var(--text-light)', textAlign: 'center' }}>
            * This Curriculum Vitae represents fictional demonstration profile content for Elara Voss.
          </footer>
        </div>
      </div>
    </div>
  );
}
