import React from 'react';
import RSVPForm from '../components/RSVPForm';
import { weddingData } from '../data/weddingData';

export default function RSVP() {
  return (
    <div className="section-padding" style={{ paddingTop: '8rem' }}>
      <div className="container">
        <div className="text-center" style={{ marginBottom: '4rem' }}>
          <span className="section-label">PLEASE RESPOND BY 1ST NOVEMBER 2026</span>
          <h1 className="serif-title">RSVP FOR OUR WEDDING</h1>
          <p style={{ color: 'var(--muted)', fontSize: '1.1rem', maxWidth: '650px', margin: '0.8rem auto 0' }}>
            We look forward to celebrating our special day with you in {weddingData.details.locationFull}.
          </p>
        </div>

        <RSVPForm />
      </div>
    </div>
  );
}
