import React from 'react';
import { recognition, talks } from '../data.js';
import { useScrollAnimation } from '../hooks/useScrollAnimation.js';
import './Recognition.css';

export default function Recognition() {
  const { ref: headRef, isVisible: headVisible } = useScrollAnimation(0.1);
  const { ref: talksRef, isVisible: talksVisible } = useScrollAnimation(0.1);

  return (
    <section id="recognition" className="em-recognition section-padding">
      <div className="container">
        <div ref={headRef} className={`em-recognition__header fade-up ${headVisible ? 'visible' : ''}`}>
          <span className="section-label">06 — Recognition</span>
          <div className="divider" style={{ marginTop: '1rem' }}></div>
        </div>
        <div className="em-recognition__grid">
          <div className={`em-recognition__awards fade-up delay-100 ${headVisible ? 'visible' : ''}`}>
            <h2 className="em-recognition__section-title">Awards &<br /><em>Distinctions</em></h2>
            <div className="em-recognition__list">
              {recognition.map((item, i) => (
                <RecognitionItem key={i} item={item} index={i} />
              ))}
            </div>
          </div>
          <div ref={talksRef} className={`em-recognition__talks fade-up delay-200 ${talksVisible ? 'visible' : ''}`}>
            <h3 className="em-recognition__talks-title">Selected Talks</h3>
            <div className="divider" style={{ marginBottom: '2rem' }}></div>
            <div className="em-talks__list">
              {talks.map((talk, i) => (
                <div key={i} className={`em-talk-item fade-up delay-${(i + 1) * 100} ${talksVisible ? 'visible' : ''}`}>
                  <div className="em-talk-item__meta">
                    <span className="em-talk-item__year section-label">{talk.year}</span>
                    <span className="em-talk-item__location section-label">{talk.location}</span>
                  </div>
                  <p className="em-talk-item__title">{talk.title}</p>
                  <p className="em-talk-item__event body-sm">{talk.event}</p>
                  <div className="divider"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function RecognitionItem({ item, index }) {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <div
      ref={ref}
      className={`em-rec-item fade-up ${isVisible ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 0.06}s` }}
    >
      <div className="em-rec-item__year">{item.year}</div>
      <div className="em-rec-item__content">
        <p className="em-rec-item__award">{item.award}</p>
        <p className="em-rec-item__org section-label">{item.org}</p>
      </div>
      <div className="divider"></div>
    </div>
  );
}
