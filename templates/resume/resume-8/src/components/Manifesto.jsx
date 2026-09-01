import React from 'react';
import { manifestoData } from '../data/portfolioData';

export default function Manifesto() {
  return (
    <section className="manifesto-section">
      <div className="manifesto-container">
        <span className="section-label" style={{ justifyContent: 'center' }}>
          <span>CREATIVE MANIFESTO</span>
        </span>

        <h2 className="manifesto-big-quote">
          "{manifestoData.quote}"
        </h2>

        <div className="manifesto-values-grid">
          {manifestoData.values.map((val, idx) => (
            <div key={idx} className="manifesto-value-card">
              <h3 className="value-title">{val.title}</h3>
              <p className="value-desc">{val.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
