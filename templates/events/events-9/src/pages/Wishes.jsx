import React from 'react';
import WishCard from '../components/WishCard';

export default function Wishes() {
  return (
    <div className="section-padding" style={{ paddingTop: '8rem' }}>
      <div className="container">
        <div className="text-center" style={{ marginBottom: '4rem' }}>
          <span className="section-label">LOVE & BLESSINGS</span>
          <h1 className="serif-title">WEDDING WISHES</h1>
          <p style={{ color: 'var(--muted)', fontSize: '1.1rem', maxWidth: '650px', margin: '0.8rem auto 0' }}>
            Leave a note of love, wisdom, or laughter for Olivia & Alexander.
          </p>
        </div>

        <WishCard />
      </div>
    </div>
  );
}
