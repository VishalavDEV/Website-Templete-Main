import React from 'react';
import { EDUCATION, RECOGNITION } from '../data/culinaryData';
import { GraduationCap, Award, Info } from 'lucide-react';

export default function EducationRecognition() {
  return (
    <section id="recognition" className="duo-section">
      <div className="container duo-grid">
        {/* Education Column */}
        <div id="education">
          <span className="section-label">05 / EDUCATION</span>
          <h2 className="section-title">Learning the Craft</h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {EDUCATION.map((edu, idx) => (
              <div key={idx} className="edu-rec-card">
                <div className="edu-rec-header">
                  <span className="edu-rec-year">{edu.year}</span>
                  <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--color-charcoal-muted)' }}>
                    DIPLOMA / CERTIFICATION
                  </span>
                </div>
                <h3 className="edu-rec-title">{edu.degree}</h3>
                <div className="edu-rec-org">
                  <GraduationCap size={15} style={{ display: 'inline', marginRight: '4px' }} />
                  {edu.institution} <span style={{ textTransform: 'none', fontWeight: 400, color: 'var(--color-charcoal-muted)' }}>({edu.note})</span>
                </div>
                <p className="edu-rec-details">{edu.details}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Recognition Column */}
        <div>
          <span className="section-label">06 / RECOGNITION</span>
          <h2 className="section-title">Recognition</h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {RECOGNITION.map((rec, idx) => (
              <div key={idx} className="edu-rec-card">
                <div className="edu-rec-header">
                  <span className="edu-rec-year">{rec.year}</span>
                  <Award size={18} style={{ color: 'var(--color-wine)' }} />
                </div>
                <h3 className="edu-rec-title">{rec.title}</h3>
                <div className="edu-rec-org">
                  {rec.organization} <span style={{ textTransform: 'none', fontWeight: 400, color: 'var(--color-charcoal-muted)' }}>({rec.note})</span>
                </div>
                <p className="edu-rec-details">{rec.description}</p>
              </div>
            ))}
          </div>

          <div className="recognition-disclaimer">
            <Info size={14} style={{ display: 'inline', marginRight: '4px', verticalAlign: 'middle' }} />
            All awards, credentials, schools, and organizations shown above are fictional demonstration content.
          </div>
        </div>
      </div>
    </section>
  );
}
