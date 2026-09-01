import React from 'react';
import ScheduleTabs from '../components/ScheduleTabs';

export default function Schedule({ savedSessionIds, onToggleBookmark }) {
  return (
    <div>
      <div className="page-header">
        <div className="container">
          <span className="section-tag">SEPTEMBER 20–22, 2026</span>
          <h1 className="page-title">
            Conference <span className="gradient-text">Schedule</span>
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', maxWidth: '700px', margin: '0 auto' }}>
            Plan your 3-day itinerary across keynotes, hands-on masterclasses, and networking sessions.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <ScheduleTabs
            savedSessionIds={savedSessionIds}
            onToggleBookmark={onToggleBookmark}
          />
        </div>
      </section>
    </div>
  );
}
