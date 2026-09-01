import React from 'react';
import { EDUCATION_DATA } from '../data/portfolioData';
import { GraduationCap, Calendar, Award } from 'lucide-react';

export default function Education() {
  return (
    <section id="chapter-07" className="education-section">
      <div className="container">
        <div className="chapter-badge">CHAPTER 07</div>
        <h2 className="section-title">Learning the Landscape</h2>
        <p className="section-subtitle">
          Academic foundation in visual storytelling, coupled with specialized field fellowships and environmental research programs.
        </p>

        <div className="education-cards-grid">
          {EDUCATION_DATA.map((edu, idx) => (
            <div key={edu.degree} className="education-card">
              <div className="edu-period">
                <Calendar size={14} />
                <span>{edu.period}</span>
              </div>

              <div className="edu-icon-badge">
                <GraduationCap size={22} />
              </div>

              <h3 className="edu-degree">{edu.degree}</h3>
              <h4 className="edu-institution">{edu.institution}</h4>
              <p className="edu-description">{edu.description}</p>

              <div className="fictional-tag">
                <span>FICTIONAL ACADEMIC PROGRAM</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
