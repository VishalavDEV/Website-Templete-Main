import React from 'react';
import { VALUES_DATA } from '../data/portfolioData';
import { Shield, Eye, HeartHandshake } from 'lucide-react';

export default function Values() {
  const getIcon = (idx) => {
    switch (idx) {
      case 0: return <Shield size={24} />;
      case 1: return <Eye size={24} />;
      case 2: return <HeartHandshake size={24} />;
      default: return <Shield size={24} />;
    }
  };

  return (
    <section className="values-section">
      <div className="container text-center">
        <span className="chapter-badge">DOCUMENTARY ETHICS</span>
        <blockquote className="values-main-quote">
          "To photograph the wild is to remember that we are only visitors."
        </blockquote>

        <div className="values-grid">
          {VALUES_DATA.map((val, idx) => (
            <div key={val.title} className="value-card">
              <div className="value-icon-circle">
                {getIcon(idx)}
              </div>
              <h3 className="value-title">{val.title}</h3>
              <p className="value-tagline">"{val.tagline}"</p>
              <p className="value-description">{val.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
