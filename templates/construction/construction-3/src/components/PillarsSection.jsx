import React from 'react';

export default function PillarsSection() {
  const pillars = [
    {
      id: 1,
      title: 'BIM Modeling',
      desc: 'Accurate 3D modeling and visualization',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="3" y1="9" x2="21" y2="9"></line>
          <line x1="9" y1="21" x2="9" y2="9"></line>
        </svg>
      )
    },
    {
      id: 2,
      title: 'Project Planning',
      desc: 'Streamlined planning and scheduling',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
        </svg>
      )
    },
    {
      id: 3,
      title: 'Smart Construction',
      desc: 'Advanced technology for precision',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="12" cy="12" r="10"></circle>
          <polygon points="12 6 12 12 16 14"></polygon>
        </svg>
      )
    },
    {
      id: 4,
      title: 'Real-time Tracking',
      desc: 'Monitor progress and ensure transparency',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="12" cy="12" r="2"></circle>
          <path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"></path>
        </svg>
      )
    }
  ];

  return (
    <section className="futurix-pillars-bar" id="services">
      <div className="container">
        <div className="pillars-grid">
          {pillars.map(p => (
            <div className="pillar-item" key={p.id}>
              <div className="pillar-icon">{p.icon}</div>
              <div className="pillar-text">
                <h4>{p.title}</h4>
                <p>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
