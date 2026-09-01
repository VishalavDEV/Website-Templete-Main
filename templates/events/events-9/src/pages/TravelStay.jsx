import React from 'react';
import TravelCard from '../components/TravelCard';

export default function TravelStay() {
  return (
    <div className="section-padding" style={{ paddingTop: '8rem' }}>
      <div className="container">
        <div className="text-center" style={{ marginBottom: '4rem' }}>
          <span className="section-label">YOUR TRIP TO CHENNAI</span>
          <h1 className="serif-title">TRAVEL & ACCOMMODATION</h1>
          <p style={{ color: 'var(--muted)', fontSize: '1.1rem', maxWidth: '650px', margin: '0.8rem auto 0' }}>
            We have partnered with top luxury hotels in Chennai to ensure your stay is seamless and luxurious.
          </p>
        </div>

        <TravelCard />
      </div>
    </div>
  );
}
