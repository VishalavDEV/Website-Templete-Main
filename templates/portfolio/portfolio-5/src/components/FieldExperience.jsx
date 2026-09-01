import React from 'react';
import { FIELD_EXPERIENCE } from '../data/portfolioData';
import { Compass, Calendar, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function FieldExperience() {
  return (
    <section id="chapter-04" className="experience-section">
      <div className="container">
        <div className="chapter-badge">CHAPTER 04</div>
        <h2 className="section-title">Life in the Field</h2>
        <p className="section-subtitle">
          A career path forged across remote wilderness reserves, non-profit ecological foundations, and visual environmental storytelling collectives.
        </p>

        {/* Winding Trail Experience Layout */}
        <div className="winding-trail-container">
          {/* Central Trail SVG Line */}
          <div className="trail-line-svg">
            <svg viewBox="0 0 100 800" preserveAspectRatio="none" className="winding-svg">
              <path 
                d="M 50,0 C 90,150 10,300 50,450 C 90,600 10,700 50,800" 
                fill="none" 
                stroke="#4E7058" 
                strokeWidth="2" 
                strokeDasharray="6 6"
              />
            </svg>
          </div>

          <div className="experience-list">
            {FIELD_EXPERIENCE.map((exp, index) => (
              <div 
                key={exp.role + exp.period} 
                className={`exp-card-wrapper ${index % 2 === 1 ? 'exp-card-right' : 'exp-card-left'}`}
              >
                <div className="trail-node-marker">
                  <span className="node-pulse"></span>
                  <Compass size={14} className="node-icon" />
                </div>

                <div className="exp-card">
                  <div className="exp-header">
                    <div className="exp-period-badge">
                      <Calendar size={13} />
                      <span>{exp.period}</span>
                    </div>
                    <span className="fictional-org-tag">FICTIONAL ORG</span>
                  </div>

                  <h3 className="exp-role">{exp.role}</h3>
                  <h4 className="exp-org">{exp.organization}</h4>
                  <p className="exp-desc">{exp.description}</p>

                  <div className="exp-highlights">
                    <h5 className="highlights-title">KEY RESPONSIBILITIES & FIELD DELIVERABLES</h5>
                    <ul className="highlights-list">
                      {exp.highlights.map((item, i) => (
                        <li key={i}>
                          <CheckCircle2 size={14} className="check-icon" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
