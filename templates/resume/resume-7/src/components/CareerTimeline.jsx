import React from 'react';
import { CAREER_TIMELINE } from '../data/culinaryData';
import { Award, MapPin, Briefcase } from 'lucide-react';

export default function CareerTimeline() {
  return (
    <section id="career" className="career-section">
      <div className="container">
        <span className="section-label">03 / CAREER</span>
        <h2 className="section-title">The Kitchen Journey</h2>
        <p style={{ maxWidth: '640px', color: 'var(--color-charcoal-light)', marginBottom: '3rem' }}>
          Sixteen years structured as a dining course progression—from foundational classical technique to visionary culinary direction.
        </p>

        <div className="timeline-menu-container">
          <div className="timeline-track-line"></div>

          {CAREER_TIMELINE.map((item, idx) => (
            <div key={idx} className="timeline-item">
              <div className="timeline-node">
                <div className="timeline-node-inner"></div>
              </div>

              <div className="timeline-card">
                <div className="timeline-course-header">
                  <span className="timeline-course-label">{item.courseLabel}</span>
                  <span className="timeline-period">{item.period}</span>
                </div>

                <h3 className="timeline-role">{item.role}</h3>
                
                <div className="timeline-org">
                  <span>{item.organization}</span>
                  <span className="timeline-org-note">({item.note})</span>
                  <span style={{ marginLeft: 'auto', color: 'var(--color-charcoal-muted)', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '3px' }}>
                    <MapPin size={13} /> {item.location}
                  </span>
                </div>

                <p className="timeline-desc">{item.responsibilities}</p>

                <div className="timeline-contribution">
                  <strong>Key Contribution: </strong> {item.contribution}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
