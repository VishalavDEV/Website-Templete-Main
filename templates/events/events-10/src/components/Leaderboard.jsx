import React, { useState } from 'react';
import { tournamentData } from '../data/tournamentData';
import { Trophy } from 'lucide-react';

export const Leaderboard = () => {
  const [activeCategory, setActiveCategory] = useState('topScorers');

  const categories = [
    { id: 'topScorers', label: 'TOP SCORERS' },
    { id: 'bestDefenders', label: 'BEST DEFENDERS' },
    { id: 'mostAssists', label: 'MOST ASSISTS' },
    { id: 'mostRebounds', label: 'MOST REBOUNDS' },
    { id: 'mvpRankings', label: 'MVP RANKINGS' },
  ];

  const currentList = tournamentData.leaderboards[activeCategory] || [];

  return (
    <div>
      <div className="tab-group-container" style={{ display: 'flex', gap: '10px', marginBottom: '25px', flexWrap: 'wrap', justifyContent: 'center' }}>
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`btn-secondary ${activeCategory === cat.id ? 'active' : ''}`}
            style={{
              borderColor: activeCategory === cat.id ? '#ff4d00' : 'var(--border)',
              color: activeCategory === cat.id ? '#ff7518' : 'var(--white)',
              padding: '10px 18px',
              fontSize: '0.9rem',
            }}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="leaderboard-list">
        {currentList.map((item) => (
          <div key={item.player} className="leaderboard-item">
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <span className={`rank-badge top-${parseInt(item.rank)}`}>{item.rank}</span>
              <img
                src={item.image}
                alt={item.player}
                style={{ width: '50px', height: '50px', borderRadius: '50%', objectFit: 'cover', border: '2px solid var(--border)' }}
              />
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', lineHeight: '1' }}>{item.player}</div>
                <div style={{ fontFamily: 'var(--font-sports)', fontSize: '0.9rem', color: 'var(--gray)' }}>{item.team}</div>
              </div>
            </div>

            <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', color: '#ff4d00' }}>
              {item.stat}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
