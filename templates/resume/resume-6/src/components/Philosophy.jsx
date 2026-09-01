import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation.js';
import './Philosophy.css';

export default function Philosophy() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section className="em-philosophy" ref={ref}>
      <div className="container">
        <div className={`em-philosophy__inner fade-up ${isVisible ? 'visible' : ''}`}>
          <div className="em-philosophy__eyebrow">
            <div className="em-philosophy__eyebrow-line"></div>
            <span className="section-label" style={{ color: 'var(--em-gray-mid)' }}>Design Philosophy</span>
            <div className="em-philosophy__eyebrow-line"></div>
          </div>
          <blockquote className={`em-philosophy__quote fade-up delay-100 ${isVisible ? 'visible' : ''}`}>
            "Strategy gives creativity direction.<br />
            Creativity gives strategy <em>meaning.</em>"
          </blockquote>
          <div className={`em-philosophy__body fade-up delay-200 ${isVisible ? 'visible' : ''}`}>
            <p className="body-lg">
              Elena approaches every project as the intersection of rigorous strategic thinking and genuine creative courage. For her, the most powerful brands are not built on aesthetics alone — they are built on a deeply understood reason to exist.
            </p>
            <p className="body-lg">
              This philosophy guides how she works: always starting with deep research, cultural listening, and strategic clarity before any visual decision is made. The result is creative work that is not only beautiful — but meaningful, durable, and true.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
