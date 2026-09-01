import React from 'react';
import { STATS } from '../data/content';

export default function StatsStrip({ stats = STATS }) {
  return (
    <div className="stats-strip">
      <div className="container" style={{ paddingLeft: 0, paddingRight: 0 }}>
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <div className="stat-number-wrap">
                <span className="stat-number">{stat.value}</span>
                {stat.suffix && <span className="stat-suffix">{stat.suffix}</span>}
              </div>
              <div className="stat-meta">
                <p className="stat-label">{stat.label}</p>
                <p className="stat-sublabel">{stat.sublabel}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
