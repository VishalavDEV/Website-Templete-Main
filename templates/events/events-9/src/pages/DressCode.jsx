import React from 'react';
import DressCodeComponent from '../components/DressCode';

export default function DressCode() {
  return (
    <div className="section-padding" style={{ paddingTop: '8rem' }}>
      <div className="container">
        <div className="text-center" style={{ marginBottom: '4rem' }}>
          <span className="section-label">ELEGANCE & HARMONY</span>
          <h1 className="serif-title">DRESS CODE GUIDE</h1>
          <p style={{ color: 'var(--muted)', fontSize: '1.1rem', maxWidth: '650px', margin: '0.8rem auto 0' }}>
            To complement the visual aesthetics of each event, here are our suggested style guidelines and color swatches.
          </p>
        </div>

        <DressCodeComponent />
      </div>
    </div>
  );
}
