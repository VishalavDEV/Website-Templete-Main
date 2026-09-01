import React, { useState } from 'react';
import { weddingData } from '../data/weddingData';

export default function ScheduleTimeline({ limit }) {
  const [activeCategory, setActiveCategory] = useState('ALL');

  const categories = ['ALL', 'CEREMONY', 'FOOD', 'MUSIC', 'PHOTOGRAPHY', 'FAMILY'];

  const filteredSchedule = weddingData.schedule.filter(item => {
    if (activeCategory === 'ALL') return true;
    return item.category === activeCategory;
  });

  const displayList = limit ? filteredSchedule.slice(0, limit) : filteredSchedule;

  return (
    <div className="schedule-container">
      {/* FILTER TABS */}
      {!limit && (
        <div className="schedule-filter-tabs">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              className={`tab-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      {/* SCHEDULE LIST */}
      <div className="schedule-list">
        {displayList.map((item, idx) => (
          <div key={idx} className="schedule-row">
            <div className="schedule-time">{item.time}</div>
            <div>
              <h4 className="schedule-info-title">
                {item.title}
                <span className="schedule-badge">{item.category}</span>
              </h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--muted)' }}>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
