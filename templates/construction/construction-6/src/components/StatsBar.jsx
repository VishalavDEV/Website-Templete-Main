import React from 'react';

export default function StatsBar({ stats }) {
  const fallbackStats = [
    { id: '1', number: '20+', label: 'Years of Trust', iconType: 'globe' },
    { id: '2', number: '850+', label: 'Projects Completed', iconType: 'award' },
    { id: '3', number: '40+', label: 'Industry Awards', iconType: 'trophy' },
    { id: '4', number: '99%', label: 'Client Retention', iconType: 'target' }
  ];

  const displayStats = (stats && stats.length > 0) ? stats : fallbackStats;

  const renderIcon = (iconType) => {
    switch (iconType) {
      case 'award':
        return (
          <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <circle cx="12" cy="8" r="6"></circle>
            <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path>
          </svg>
        );
      case 'trophy':
        return (
          <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <circle cx="12" cy="8" r="5"></circle>
            <path d="M8.21 13.89 7 22l5-3 5 3-1.21-8.12"></path>
            <polygon points="12 6 13.2 8.5 16 8.9 14 10.8 14.5 13.5 12 12.2 9.5 13.5 10 10.8 8 8.9 10.8 8.5 12 6"></polygon>
          </svg>
        );
      case 'target':
        return (
          <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <circle cx="12" cy="12" r="10"></circle>
            <circle cx="12" cy="12" r="6"></circle>
            <circle cx="12" cy="12" r="2"></circle>
          </svg>
        );
      case 'globe':
      default:
        return (
          <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="2" y1="12" x2="22" y2="12"></line>
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
          </svg>
        );
    }
  };

  return (
    <section className="arcstone-stats-bar" id="stats">
      <div className="container">
        <div className="stats-grid">
          {displayStats.map((item) => (
            <div className="stat-item" key={item.id}>
              <div className="stat-icon">
                {renderIcon(item.iconType)}
              </div>
              <div className="stat-info">
                <h3 className="stat-number">{item.number}</h3>
                <span className="stat-label">{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
