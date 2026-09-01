import React from 'react';
import { expertise } from '../data.js';
import { useScrollAnimation } from '../hooks/useScrollAnimation.js';
import './Expertise.css';

export default function Expertise() {
  const { ref: headRef, isVisible: headVisible } = useScrollAnimation(0.1);

  return (
    <section id="expertise" className="em-expertise section-padding">
      <div className="container">
        <div ref={headRef} className={`em-expertise__header fade-up ${headVisible ? 'visible' : ''}`}>
          <span className="section-label">04 — Areas of Expertise</span>
          <div className="divider" style={{ marginTop: '1rem' }}></div>
        </div>
        <div className="em-expertise__list">
          {expertise.map((item, i) => (
            <ExpertiseItem key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ExpertiseItem({ item, index }) {
  const { ref, isVisible } = useScrollAnimation(0.15);

  return (
    <div
      ref={ref}
      className={`em-expertise-item fade-up ${isVisible ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 0.07}s` }}
    >
      <div className="em-expertise-item__inner">
        <div className="em-expertise-item__number section-label">
          {String(index + 1).padStart(2, '0')}
        </div>
        <div className="em-expertise-item__content">
          <h3 className="em-expertise-item__title">{item.title}</h3>
          <p className="em-expertise-item__desc body-md">{item.description}</p>
          <div className="em-expertise-item__tags">
            {item.tags.map((tag, i) => (
              <span key={i} className="em-expertise-item__tag">{tag}</span>
            ))}
          </div>
        </div>
      </div>
      <div className="divider"></div>
    </div>
  );
}
