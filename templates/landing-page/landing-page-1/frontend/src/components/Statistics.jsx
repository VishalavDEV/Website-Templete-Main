import React from 'react';
import './Statistics.css';

export default function Statistics() {
  const stats = [
    {
      num: '10x',
      label: 'Faster planning',
      desc: 'AI schedules boards and assigns backlog tickets in seconds.',
    },
    {
      num: '42%',
      label: 'Fewer missed deadlines',
      desc: 'Automatic critical path tracking triggers early warning syncs.',
    },
    {
      num: '3.5h',
      label: 'Saved per week',
      desc: 'No more updates check-ins or manual status spreadsheets.',
    },
    {
      num: '50K+',
      label: 'Productive teams',
      desc: 'From growing startups to enterprise teams worldwide.',
    },
  ];

  return (
    <section className="section-padding stats-section">
      <div className="grid-bg"></div>
      <div className="container stats-grid">
        {stats.map((stat, idx) => (
          <div key={idx} className="stats-card reveal">
            <div className="stats-number">{stat.num}</div>
            <div className="stats-label">{stat.label}</div>
            <p className="stats-desc">{stat.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
