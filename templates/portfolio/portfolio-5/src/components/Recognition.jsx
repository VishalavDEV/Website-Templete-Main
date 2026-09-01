import React from 'react';
import { RECOGNITION_DATA } from '../data/portfolioData';
import { Award, Trophy, Star, ShieldCheck } from 'lucide-react';

export default function Recognition() {
  return (
    <section id="chapter-09" className="recognition-section">
      <div className="container">
        <div className="chapter-badge">CHAPTER 09</div>
        <h2 className="section-title">Recognition</h2>
        <p className="section-subtitle">
          Honors and awards granted by fictional wildlife narrative collectives and environmental media forums.
        </p>

        <div className="recognition-grid">
          {RECOGNITION_DATA.map((item, idx) => (
            <div key={item.award + item.year} className="award-card">
              <div className="award-year-badge">
                <Trophy size={16} />
                <span>{item.year}</span>
              </div>

              <h3 className="award-name">{item.award}</h3>
              <h4 className="award-org">{item.organization}</h4>
              <p className="award-category">{item.category}</p>

              <div className="fictional-award-tag">
                <ShieldCheck size={12} />
                <span>FICTIONAL HONOR</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
