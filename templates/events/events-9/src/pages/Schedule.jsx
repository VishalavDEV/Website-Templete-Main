import React from 'react';
import ScheduleTimeline from '../components/ScheduleTimeline';

export default function Schedule() {
  return (
    <div className="section-padding" style={{ paddingTop: '8rem' }}>
      <div className="container">
        <div className="text-center" style={{ marginBottom: '4rem' }}>
          <span className="section-label">ORDER OF EVENTS</span>
          <h1 className="serif-title">WEDDING SCHEDULE</h1>
          <p style={{ color: 'var(--muted)', fontSize: '1.1rem', maxWidth: '600px', margin: '0.8rem auto 0' }}>
            Filter by category to explore the complete day-to-night itinerary.
          </p>
        </div>

        <ScheduleTimeline />
      </div>
    </div>
  );
}
