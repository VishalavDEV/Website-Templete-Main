import React from 'react';
import { weddingData } from '../data/weddingData';

export default function WeddingInfo() {
  return (
    <section id="welcome-section" className="welcome-section">
      <span className="section-label">WELCOME TO OUR CELEBRATION</span>
      <h2 className="welcome-title">{weddingData.welcomeMessage.heading}</h2>
      <p className="welcome-text">{weddingData.welcomeMessage.body}</p>

      <div className="welcome-details-grid">
        <div className="welcome-detail-item">
          <span className="detail-label">DATE</span>
          <span className="detail-value">{weddingData.details.date}</span>
        </div>

        <div className="welcome-detail-item">
          <span className="detail-label">VENUE</span>
          <span className="detail-value">{weddingData.details.locationFull}</span>
        </div>

        <div className="welcome-detail-item">
          <span className="detail-label">TIME</span>
          <span className="detail-value">{weddingData.details.time}</span>
        </div>
      </div>
    </section>
  );
}
