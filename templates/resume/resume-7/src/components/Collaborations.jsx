import React from 'react';
import { TALKS } from '../data/culinaryData';
import { Mic, ArrowUpRight } from 'lucide-react';

export default function Collaborations() {
  return (
    <section id="collaborations" className="collaborations-section">
      <div className="container">
        <span className="section-label">PUBLIC TALKS & SYMPOSIA</span>
        <h2 className="section-title">Beyond the Kitchen</h2>
        <p style={{ maxWidth: '640px', color: 'var(--color-charcoal-light)', marginBottom: '3rem' }}>
          Keynote lectures, workshops, and panel discussions on culinary ethics, season-based design, and kitchen leadership.
        </p>

        <div className="poster-talks-grid">
          {TALKS.map((talk, idx) => (
            <div key={idx} className="poster-talk-card">
              <span className="poster-talk-year">{talk.year}</span>
              <div>
                <div className="poster-talk-event">
                  <Mic size={14} style={{ display: 'inline', marginRight: '6px', color: 'var(--color-wine)' }} />
                  {talk.event} &bull; {talk.year}
                </div>
                <h3 className="poster-talk-title">{talk.title}</h3>
              </div>
              <p className="poster-talk-summary">{talk.summary}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
