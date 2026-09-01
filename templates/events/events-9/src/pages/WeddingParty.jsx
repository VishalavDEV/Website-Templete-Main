import React from 'react';
import WeddingPartyComponent from '../components/WeddingParty';

export default function WeddingParty() {
  return (
    <div className="section-padding" style={{ paddingTop: '8rem' }}>
      <div className="container">
        <div className="text-center" style={{ marginBottom: '4rem' }}>
          <span className="section-label">STANDING BY OUR SIDE</span>
          <h1 className="serif-title">THE WEDDING PARTY</h1>
          <p style={{ color: 'var(--muted)', fontSize: '1.1rem', maxWidth: '650px', margin: '0.8rem auto 0' }}>
            Meet the cherished friends and family standing with Olivia & Alexander on their sacred day.
          </p>
        </div>

        <WeddingPartyComponent />
      </div>
    </div>
  );
}
