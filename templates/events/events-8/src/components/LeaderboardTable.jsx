import React, { useState } from 'react';
import { Search, Trophy, Medal, Award, Flame, Filter, ChevronRight } from 'lucide-react';

const LeaderboardTable = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCollege, setFilterCollege] = useState('ALL');

  const leaderboardData = [
    { rank: 1, team: 'Code Titans', college: 'IIT Madras', project: 'NeuralMesh AI', challenges: 5, score: 9850, status: 'EVALUATED' },
    { rank: 2, team: 'Neural Ninjas', college: 'Anna University', project: 'CyberShield Zero', challenges: 5, score: 9210, status: 'EVALUATED' },
    { rank: 3, team: 'Runtime Rebels', college: 'SRM Institute', project: 'FinPulse Protocol', challenges: 4, score: 8890, status: 'EVALUATED' },
    { rank: 4, team: 'Pixel Pirates', college: 'SSN College of Eng.', project: 'VisionHealth AI', challenges: 4, score: 8420, status: 'LIVE DEMO' },
    { rank: 5, team: 'Binary Brawlers', college: 'VIT Chennai', project: 'EcoGrid Smart City', challenges: 4, score: 8150, status: 'LIVE DEMO' },
    { rank: 6, team: 'Quantum Hackers', college: 'PSG Tech', project: 'Decentralized Identity', challenges: 3, score: 7900, status: 'SUBMITTED' },
    { rank: 7, team: 'Algorithm Aces', college: 'IIT Madras', project: 'Autonomous Drone Swarm', challenges: 3, score: 7640, status: 'SUBMITTED' },
    { rank: 8, team: 'Byte Benders', college: 'Anna University', project: 'MedGuard EHR', challenges: 3, score: 7320, status: 'SUBMITTED' },
    { rank: 9, team: 'Stack Overflow', college: 'St. Joseph’s Eng.', project: 'AquaSense IoT', challenges: 3, score: 7100, status: 'SUBMITTED' },
    { rank: 10, team: 'Cyber Sentinels', college: 'SRM Institute', project: 'ZeroTrust Auth Gateway', challenges: 3, score: 6850, status: 'SUBMITTED' }
  ];

  const colleges = ['ALL', 'IIT Madras', 'Anna University', 'SRM Institute', 'SSN College of Eng.', 'VIT Chennai'];

  const filteredData = leaderboardData.filter((item) => {
    const matchesSearch =
      item.team.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.project.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.college.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCollege = filterCollege === 'ALL' || item.college === filterCollege;
    return matchesSearch && matchesCollege;
  });

  const maxScore = 10000;

  return (
    <div>
      {/* Top 3 Podium Design */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '1.5rem',
          marginBottom: '3.5rem',
          alignItems: 'flex-end'
        }}
      >
        {/* Rank 2 */}
        <div
          className="cyber-card"
          style={{
            textAlign: 'center',
            backgroundColor: 'rgba(0, 240, 255, 0.05)',
            border: '1px solid #00f0ff',
            padding: '2rem 1rem'
          }}
        >
          <div
            style={{
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              backgroundColor: 'rgba(0, 240, 255, 0.2)',
              border: '2px solid #00f0ff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#00f0ff',
              margin: '0 auto 0.75rem auto'
            }}
          >
            <Medal size={28} />
          </div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: '#00f0ff' }}>RANK 02</div>
          <h3 style={{ fontSize: '1.3rem', color: '#fff', margin: '0.25rem 0' }}>{leaderboardData[1].team}</h3>
          <div style={{ fontSize: '0.85rem', color: '#94a3b8' }}>{leaderboardData[1].college}</div>
          <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', color: '#00f0ff', marginTop: '0.75rem' }}>
            {leaderboardData[1].score} PTS
          </div>
        </div>

        {/* Rank 1 (Center Champion) */}
        <div
          className="cyber-card pulse-glow"
          style={{
            textAlign: 'center',
            backgroundColor: 'rgba(0, 255, 102, 0.1)',
            border: '2px solid #00ff66',
            padding: '2.5rem 1rem',
            transform: 'translateY(-15px)'
          }}
        >
          <div className="cyber-corner-tl" />
          <div className="cyber-corner-br" />
          <div
            style={{
              width: '65px',
              height: '65px',
              borderRadius: '50%',
              backgroundColor: 'rgba(0, 255, 102, 0.25)',
              border: '2px solid #00ff66',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#00ff66',
              margin: '0 auto 0.75rem auto',
              boxShadow: '0 0 25px rgba(0, 255, 102, 0.5)'
            }}
          >
            <Trophy size={36} />
          </div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: '#00ff66', letterSpacing: '2px' }}>
            GRAND CHAMPION
          </div>
          <h3 style={{ fontSize: '1.6rem', color: '#fff', margin: '0.25rem 0' }}>{leaderboardData[0].team}</h3>
          <div style={{ fontSize: '0.85rem', color: '#94a3b8' }}>{leaderboardData[0].college}</div>
          <div
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '2rem',
              fontWeight: '900',
              color: '#00ff66',
              marginTop: '0.75rem',
              textShadow: '0 0 15px #00ff66'
            }}
          >
            {leaderboardData[0].score} PTS
          </div>
        </div>

        {/* Rank 3 */}
        <div
          className="cyber-card"
          style={{
            textAlign: 'center',
            backgroundColor: 'rgba(255, 183, 0, 0.05)',
            border: '1px solid #ffb700',
            padding: '2rem 1rem'
          }}
        >
          <div
            style={{
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 183, 0, 0.2)',
              border: '2px solid #ffb700',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffb700',
              margin: '0 auto 0.75rem auto'
            }}
          >
            <Award size={28} />
          </div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: '#ffb700' }}>RANK 03</div>
          <h3 style={{ fontSize: '1.3rem', color: '#fff', margin: '0.25rem 0' }}>{leaderboardData[2].team}</h3>
          <div style={{ fontSize: '0.85rem', color: '#94a3b8' }}>{leaderboardData[2].college}</div>
          <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', color: '#ffb700', marginTop: '0.75rem' }}>
            {leaderboardData[2].score} PTS
          </div>
        </div>
      </div>

      {/* Controls: Search & College Filter */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '1rem',
          flexWrap: 'wrap',
          marginBottom: '2rem'
        }}
      >
        <div style={{ position: 'relative', flex: 1, minWidth: '240px' }}>
          <Search size={18} color="#00ff66" style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }} />
          <input
            type="text"
            placeholder="Search team or project..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="cyber-input"
            style={{ paddingLeft: '2.75rem' }}
          />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Filter size={16} color="#00ff66" />
          <select
            value={filterCollege}
            onChange={(e) => setFilterCollege(e.target.value)}
            className="cyber-input"
            style={{ minWidth: '180px', cursor: 'pointer' }}
          >
            {colleges.map((col, idx) => (
              <option key={idx} value={col} style={{ backgroundColor: '#050505', color: '#fff' }}>
                {col === 'ALL' ? 'All Colleges' : col}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Leaderboard Data Table */}
      <div style={{ overflowX: 'auto', borderRadius: '8px', border: '1px solid rgba(0, 255, 102, 0.2)' }}>
        <table
          style={{
            width: '100%',
            borderCollapse: 'collapse',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.88rem',
            textAlign: 'left',
            backgroundColor: 'rgba(5, 8, 6, 0.9)'
          }}
        >
          <thead>
            <tr
              style={{
                backgroundColor: 'rgba(0, 255, 102, 0.1)',
                borderBottom: '1px solid #00ff66',
                color: '#00ff66'
              }}
            >
              <th style={{ padding: '1rem' }}>RANK</th>
              <th style={{ padding: '1rem' }}>TEAM NAME</th>
              <th style={{ padding: '1rem' }}>COLLEGE</th>
              <th style={{ padding: '1rem' }}>PROJECT</th>
              <th style={{ padding: '1rem' }}>CHALLENGES</th>
              <th style={{ padding: '1rem' }}>SCORE BAR</th>
              <th style={{ padding: '1rem' }}>STATUS</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((row) => {
              const scorePercent = (row.score / maxScore) * 100;
              return (
                <tr
                  key={row.rank}
                  style={{
                    borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                    transition: 'background-color 0.2s'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(0, 255, 102, 0.05)')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                >
                  <td style={{ padding: '1rem', fontWeight: '700', color: row.rank <= 3 ? '#00ff66' : '#94a3b8' }}>
                    #{String(row.rank).padStart(2, '0')}
                  </td>
                  <td style={{ padding: '1rem', color: '#ffffff', fontWeight: '600' }}>{row.team}</td>
                  <td style={{ padding: '1rem', color: '#cbd5e1' }}>{row.college}</td>
                  <td style={{ padding: '1rem', color: '#00f0ff' }}>{row.project}</td>
                  <td style={{ padding: '1rem', color: '#cbd5e1' }}>{row.challenges} / 5</td>
                  <td style={{ padding: '1rem', minWidth: '180px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <div style={{ flex: 1, height: '8px', backgroundColor: 'rgba(255, 255, 255, 0.1)', borderRadius: '4px', overflow: 'hidden' }}>
                        <div
                          style={{
                            width: `${scorePercent}%`,
                            height: '100%',
                            backgroundColor: row.rank === 1 ? '#00ff66' : '#00f0ff',
                            boxShadow: '0 0 8px #00ff66'
                          }}
                        />
                      </div>
                      <span style={{ fontSize: '0.8rem', color: '#fff', fontWeight: '700' }}>{row.score}</span>
                    </div>
                  </td>
                  <td style={{ padding: '1rem' }}>
                    <span
                      style={{
                        padding: '0.25rem 0.6rem',
                        borderRadius: '4px',
                        fontSize: '0.75rem',
                        backgroundColor: row.status === 'EVALUATED' ? 'rgba(0, 255, 102, 0.15)' : 'rgba(255, 183, 0, 0.15)',
                        border: `1px solid ${row.status === 'EVALUATED' ? '#00ff66' : '#ffb700'}`,
                        color: row.status === 'EVALUATED' ? '#00ff66' : '#ffb700'
                      }}
                    >
                      {row.status}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeaderboardTable;
