import React from 'react';
import { EXPERTISE_CATEGORIES } from '../data/culinaryData';

export default function Expertise() {
  const radius = 46;
  const circumference = 2 * Math.PI * radius;

  return (
    <section id="expertise" className="expertise-section">
      <div className="container">
        <span className="section-label">04 / EXPERTISE</span>
        <h2 className="section-title">The Craft</h2>
        <p style={{ maxWidth: '640px', color: 'var(--color-charcoal-light)', marginBottom: '3rem' }}>
          Mastery across creative vision, operational precision, specialized culinary techniques, and immersive storytelling.
        </p>

        <div className="expertise-grid">
          {EXPERTISE_CATEGORIES.map((category, idx) => {
            const strokeDashoffset = circumference - (category.percentage / 100) * circumference;

            return (
              <div key={idx} className="expertise-card">
                <div className="expertise-svg-wrapper">
                  <svg className="expertise-svg" viewBox="0 0 120 120">
                    <circle 
                      className="expertise-circle-bg" 
                      cx="60" 
                      cy="60" 
                      r={radius} 
                    />
                    <circle 
                      className="expertise-circle-progress" 
                      cx="60" 
                      cy="60" 
                      r={radius}
                      style={{
                        strokeDasharray: circumference,
                        strokeDashoffset: strokeDashoffset
                      }}
                    />
                  </svg>
                  <span className="expertise-svg-value">{category.percentage}%</span>
                </div>

                <h3 className="expertise-title">{category.title}</h3>

                <ul className="expertise-items">
                  {category.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="expertise-item-tag">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
