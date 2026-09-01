import React, { useState } from 'react';

const PANELS = [
  {
    id: 1,
    tag: '01 / BRUNCH • 08:00 - 11:30',
    title: 'MORNING TABLE',
    desc: 'Sunlit garden breakfasts with freshly baked sourdough, artisanal preserves, and single-origin filter brews.',
    action: '→ EXPLORE BRUNCH',
    img: 'assets/images/hero.jpg',
    alt: 'Morning Table'
  },
  {
    id: 2,
    tag: '02 / DINNER • 19:00 - 23:00',
    title: 'GARDEN DINNER',
    desc: 'Candlelit multi-course tasting under open trees featuring seasonal embers and botanical pairings.',
    action: '→ EXPLORE DINNER',
    img: 'assets/images/night.jpg',
    alt: 'Garden Dinner'
  },
  {
    id: 3,
    tag: '03 / PRIVATE • BY RESERVATION',
    title: 'PRIVATE SUPPER',
    desc: 'An exclusive conservatory table for up to twelve guests with bespoke tasting menus curated by Chef Maya.',
    action: '→ RESERVE SUPPER',
    img: 'assets/images/cocktail.jpg',
    alt: 'Private Supper'
  }
];

export default function ExperienceSection() {
  const [activeId, setActiveId] = useState(1);

  return (
    <section id="experience" className="experience-section-panels">
      <div className="container">
        <div className="ingredients-header">
          <span className="house-meta-tag">HOSPITALITY</span>
          <h2 className="ingredients-title-main">THE THREE TABLES</h2>
        </div>
        <div className="exp-panels-container">
          {PANELS.map((panel) => (
            <div
              key={panel.id}
              className={`exp-panel-card ${activeId === panel.id ? 'active' : ''}`}
              data-cursor="EXPLORE"
              onMouseEnter={() => setActiveId(panel.id)}
            >
              <img src={panel.img} alt={panel.alt} className="exp-panel-bg-img" />
              <div className="exp-panel-overlay">
                <span className="house-meta-tag" style={{ color: 'var(--bg-cream)' }}>
                  {panel.tag}
                </span>
                <div>
                  <h3 className="exp-panel-title">{panel.title}</h3>
                  <div className="exp-panel-body">
                    <p style={{ color: 'rgba(244, 241, 232, 0.8)', fontSize: '1rem', margin: '1rem 0' }}>
                      {panel.desc}
                    </p>
                    <div style={{ fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase' }}>
                      {panel.action}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
