import React from 'react';
import '../styles/cards.css';
import { upcomingEvent } from '../data/events';

export const EventStats = () => {
  const stats = [
    { value: upcomingEvent.stats.attendees, label: 'Global Attendees' },
    { value: upcomingEvent.stats.speakers, label: 'Industry Speakers' },
    { value: upcomingEvent.stats.sessions, label: 'Keynote & Track Sessions' },
    { value: upcomingEvent.stats.countries, label: 'Participating Countries' }
  ];

  return (
    <section style={{ background: 'var(--bg-secondary)', borderY: '1px solid var(--border-light)', padding: '50px 0' }}>
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, idx) => (
            <div key={idx} className="glass-card stat-card">
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
