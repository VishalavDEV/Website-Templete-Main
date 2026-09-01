import React, { useState } from 'react';

const LeaderboardTable = ({ limit }) => {
  const [activeCategory, setActiveCategory] = useState('ALL');

  const leaderboardData = [
    { rank: 1, name: 'Alex Mercer', category: 'POWER LIFT', score: 982, time: '02:31', status: 'VERIFIED' },
    { rank: 2, name: 'Jordan Vance', category: 'POWER LIFT', score: 941, time: '02:42', status: 'VERIFIED' },
    { rank: 3, name: 'Kai Thorne', category: 'POWER LIFT', score: 915, time: '02:48', status: 'VERIFIED' },
    { rank: 4, name: 'Elena Rostova', category: 'ENDURANCE RUSH', score: 890, time: '03:05', status: 'VERIFIED' },
    { rank: 5, name: 'Marcus Steel', category: 'BEAST CIRCUIT', score: 875, time: '03:12', status: 'VERIFIED' },
    { rank: 6, name: 'Sarah Lin', category: 'ATHLETE ASCENT', score: 860, time: '03:20', status: 'VERIFIED' },
    { rank: 7, name: 'David Miller', category: 'ROOKIE RISE', score: 840, time: '03:35', status: 'VERIFIED' },
    { rank: 8, name: 'Viktor Krum', category: 'BEAST CIRCUIT', score: 825, time: '03:41', status: 'VERIFIED' },
  ];

  const filtered = activeCategory === 'ALL'
    ? leaderboardData
    : leaderboardData.filter((item) => item.category === activeCategory);

  const displayed = limit ? filtered.slice(0, limit) : filtered;

  return (
    <div>
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.5rem', justifyContent: 'center' }}>
        {['ALL', 'POWER LIFT', 'ENDURANCE RUSH', 'BEAST CIRCUIT', 'ATHLETE ASCENT', 'ROOKIE RISE'].map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            style={{
              padding: '0.5rem 1rem',
              background: activeCategory === cat ? 'var(--color-yellow)' : 'var(--color-bg-card)',
              color: activeCategory === cat ? '#000' : '#FFF',
              border: '1px solid rgba(255,255,255,0.1)',
              fontFamily: 'Outfit, sans-serif',
              fontWeight: '800',
              fontSize: '0.8rem',
              cursor: 'pointer',
              textTransform: 'uppercase',
              clipPath: 'polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px)'
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="leaderboard-container">
        <table className="leaderboard-table">
          <thead>
            <tr>
              <th>RANK</th>
              <th>ATHLETE</th>
              <th>CATEGORY</th>
              <th>SCORE</th>
              <th>TIME</th>
              <th>STATUS</th>
            </tr>
          </thead>
          <tbody>
            {displayed.map((row) => (
              <tr key={row.rank} style={{ animation: 'animate-on-scroll 0.4s ease forwards' }}>
                <td>
                  <div className={`rank-pill ${row.rank === 1 ? 'rank-gold' : row.rank === 2 ? 'rank-silver' : row.rank === 3 ? 'rank-bronze' : ''}`}>
                    {row.rank}
                  </div>
                </td>
                <td style={{ fontWeight: '800', color: '#FFF' }}>{row.name}</td>
                <td>
                  <span style={{ color: 'var(--color-yellow)', fontFamily: 'Outfit, sans-serif', fontWeight: '700', fontSize: '0.85rem' }}>
                    {row.category}
                  </span>
                </td>
                <td style={{ fontWeight: '900', fontFamily: 'Montserrat, sans-serif', color: 'var(--color-purple)' }}>
                  {row.score} PTS
                </td>
                <td style={{ fontFamily: 'monospace', fontSize: '1rem' }}>{row.time}</td>
                <td>
                  <span style={{ background: 'rgba(0,255,100,0.15)', color: '#00FF66', padding: '0.2rem 0.6rem', borderRadius: '4px', fontSize: '0.75rem', fontWeight: '800' }}>
                    ✓ {row.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeaderboardTable;
