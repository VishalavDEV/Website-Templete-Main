import React from 'react';
import { education } from '../data.js';
import { useScrollAnimation } from '../hooks/useScrollAnimation.js';
import './Education.css';

export default function Education() {
  const { ref: sectionRef, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="story" className="em-education section-padding">
      <div className="container">
        <div ref={sectionRef}>
          <div className={`em-education__header fade-up ${isVisible ? 'visible' : ''}`}>
            <span className="section-label">05 — Foundations</span>
            <div className="divider" style={{ marginTop: '1rem' }}></div>
          </div>
          <div className="em-education__split">
            <div className={`em-education__left fade-up delay-100 ${isVisible ? 'visible' : ''}`}>
              <h2 className="em-education__title">
                Academic<br /><em>Background</em>
              </h2>
              <p className="body-md em-education__intro">
                Formal training in visual communication and design theory — foundations that continue to inform every strategic and creative decision.
              </p>
            </div>
            <div className={`em-education__list fade-up delay-200 ${isVisible ? 'visible' : ''}`}>
              {education.map((item, i) => (
                <div key={i} className="em-edu-item">
                  <div className="em-edu-item__period section-label">{item.period}</div>
                  <div className="em-edu-item__content">
                    <h3 className="em-edu-item__degree">{item.degree}</h3>
                    <p className="em-edu-item__institution">{item.institution}</p>
                    <div className="em-edu-item__areas">
                      {item.areas.map((area, j) => (
                        <span key={j} className="em-edu-item__area">{area}</span>
                      ))}
                    </div>
                  </div>
                  {i < education.length - 1 && <div className="divider"></div>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
