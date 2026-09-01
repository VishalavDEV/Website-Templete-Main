import React from 'react';
import { Venue } from '../components/Venue';

export const VenuePage = () => {
  return (
    <div style={{ paddingTop: '120px' }}>
      <section style={{ background: 'var(--bg-secondary)', padding: '60px 0', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="section-tag">LOCATION & TRAVEL</div>
          <h1 className="section-title">Venue & Hotel Guide</h1>
          <p className="section-subtitle">
            Everything you need for seamless travel, hotel booking recommendations, and navigating Chennai Convention Centre.
          </p>
        </div>
      </section>

      <Venue />
    </div>
  );
};
