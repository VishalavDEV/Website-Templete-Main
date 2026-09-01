import React from 'react';
import { bookDetailsData } from '../data/bookData';

export default function Timeline() {
  return (
    <section id="timeline" className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="text-center center-content">
          <span className="section-label reveal-on-scroll">CHRONOLOGY</span>
          <h2 className="section-heading reveal-on-scroll delay-1">
            The Narrative Timeline
          </h2>
          <p className="section-desc reveal-on-scroll delay-2">
            Follow the escalation of events as past memories crash into future reality.
          </p>
        </div>

        <div className="timeline-wrapper reveal-on-scroll delay-3">
          <div className="timeline-line">
            <div className="timeline-line-progress" />
          </div>

          <div className="timeline-steps">
            {bookDetailsData.timelineMilestones.map((item) => (
              <div key={item.step} className="timeline-item">
                <div className="timeline-node">{item.step}</div>
                <h3 className="timeline-title">{item.title}</h3>
                <span className="timeline-sub">{item.subtitle}</span>
                <p className="timeline-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
