import React, { useState } from 'react';
import { tournamentData } from '../data/tournamentData';
import { NewsCard } from '../components/NewsCard';

export const News = () => {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const categories = ['ALL', 'ANNOUNCEMENT', 'MATCH PREVIEW', 'PLAYER NEWS', 'TEAM NEWS'];

  const filteredNews = activeCategory === 'ALL' ? tournamentData.news : tournamentData.news.filter(n => n.category === activeCategory);

  return (
    <div className="main-content">
      <section className="section-padding sports-bg-pattern">
        <div className="container">
          <div className="section-header">
            <h1 className="section-title">
              NEWS & <span>UPDATES</span>
            </h1>
            <div className="section-subtitle">OFFICIAL COURTSIDE HEADLINES & PRESS RELEASES</div>
          </div>

          <div className="tab-group-container" style={{ display: 'flex', gap: '10px', marginBottom: '35px', flexWrap: 'wrap', justifyContent: 'center' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`btn-secondary ${activeCategory === cat ? 'active' : ''}`}
                style={{
                  borderColor: activeCategory === cat ? '#ff4d00' : 'var(--border)',
                  color: activeCategory === cat ? '#ff7518' : 'var(--white)',
                  padding: '8px 16px',
                  fontSize: '0.85rem',
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
            {filteredNews.map((item) => (
              <NewsCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
