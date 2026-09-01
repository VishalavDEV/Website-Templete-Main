import React, { useState } from 'react';
import { RESTAURANT_DATA } from '../data/restaurantData';

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { label: 'ALL', value: 'all' },
    { label: 'FOOD', value: 'food' },
    { label: 'SPACE', value: 'space' },
    { label: 'PEOPLE', value: 'people' },
    { label: 'SEA', value: 'sea' }
  ];

  return (
    <section className="gallery-section">
      <div className="gallery-header">
        <div>
          <span className="section-label"><span className="accent-line"></span>VISUAL ARCHIVE</span>
          <h2 className="editorial-heading-large" style={{ color: 'var(--color-soft-white)' }}>THE GALLERY</h2>
        </div>

        <div className="gallery-filters">
          {filters.map(filter => (
            <button
              key={filter.value}
              className={`filter-btn ${activeFilter === filter.value ? 'is-active' : ''}`}
              onClick={() => setActiveFilter(filter.value)}
              data-filter={filter.value}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      <div className="gallery-reel-container">
        <div className="gallery-reel-track">
          {RESTAURANT_DATA.galleryData.map(item => {
            const isVisible = activeFilter === 'all' || item.category === activeFilter;
            return (
              <div
                key={item.id}
                className={`gallery-item ${item.size} ${!isVisible ? 'is-hidden' : ''}`}
                style={{ opacity: isVisible ? 1 : 0 }}
                data-category={item.category}
                data-cursor="VIEW"
              >
                <img src={item.image} alt={item.title} />
                <div className="gallery-caption">{item.title}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
