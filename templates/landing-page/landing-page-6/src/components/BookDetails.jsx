import React from 'react';
import { bookDetailsData } from '../data/bookData';

export default function BookDetails() {
  return (
    <section id="specs" className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="text-center center-content">
          <span className="section-label reveal-on-scroll">SPECIFICATIONS</span>
          <h2 className="section-heading reveal-on-scroll delay-1">
            Book Details & Editions
          </h2>
          <p className="section-desc reveal-on-scroll delay-2">
            Complete publishing details and release information for collectors and readers.
          </p>
        </div>

        <div className="specs-grid reveal-on-scroll delay-3">
          {bookDetailsData.specs.map((item) => (
            <div key={item.label} className="spec-card">
              <div className="spec-label">{item.label}</div>
              <div className="spec-value">{item.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
