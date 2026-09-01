import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Radio, ChevronRight, Activity } from 'lucide-react';
import { tournamentData } from '../data/tournamentData';

export const LiveMatch = () => {
  const [liveData, setLiveData] = useState(tournamentData.liveMatch);
  const [scorePop, setScorePop] = useState(false);

  // Simulate dynamic live score ticking every 8 seconds for real broadcast experience
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveData((prev) => {
        const isTeamA = Math.random() > 0.5;
        const addPoints = Math.random() > 0.4 ? 3 : 2;
        setScorePop(true);
        setTimeout(() => setScorePop(false), 500);

        return {
          ...prev,
          teamA: {
            ...prev.teamA,
            score: isTeamA ? prev.teamA.score + addPoints : prev.teamA.score,
          },
          teamB: {
            ...prev.teamB,
            score: !isTeamA ? prev.teamB.score + addPoints : prev.teamB.score,
          },
        };
      });
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="live-match-banner">
      <div className="live-banner-header">
        <div className="badge-live">
          <span className="badge-live-pulse" /> 🔴 LIVE NOW
        </div>
        <div className="live-clock-badge">
          {liveData.quarter} | {liveData.timeRemaining}
        </div>
        <Link to="/live-score" className="btn-outline" style={{ fontSize: '0.85rem', padding: '6px 14px' }}>
          VIEW BROADCAST DASHBOARD <ChevronRight size={14} />
        </Link>
      </div>

      <div className="scoreboard-grid">
        {/* Team A */}
        <div className="team-score-box left">
          <div>
            <div className="team-display-name">{liveData.teamA.name}</div>
            <div className="team-city-name">{liveData.teamA.city}</div>
          </div>
          <div className="team-logo-badge">{liveData.teamA.logo}</div>
          <div className={`score-digit ${scorePop ? 'animate-score-pop' : ''}`}>
            {liveData.teamA.score}
          </div>
        </div>

        {/* VS Divider */}
        <div className="vs-divider">VS</div>

        {/* Team B */}
        <div className="team-score-box right">
          <div className={`score-digit ${scorePop ? 'animate-score-pop' : ''}`}>
            {liveData.teamB.score}
          </div>
          <div className="team-logo-badge">{liveData.teamB.logo}</div>
          <div>
            <div className="team-display-name">{liveData.teamB.name}</div>
            <div className="team-city-name">{liveData.teamB.city}</div>
          </div>
        </div>
      </div>

      {/* Quarters Mini Table */}
      <table className="quarter-breakdown">
        <thead>
          <tr>
            <th>TEAM</th>
            <th>Q1</th>
            <th>Q2</th>
            <th>Q3</th>
            <th>Q4</th>
            <th>TOTAL</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ color: '#ff4d00', fontWeight: 800 }}>{liveData.teamA.name}</td>
            <td>{liveData.quarters.Q1.teamA}</td>
            <td>{liveData.quarters.Q2.teamA}</td>
            <td>{liveData.quarters.Q3.teamA}</td>
            <td>{liveData.quarters.Q4.teamA}</td>
            <td style={{ color: '#ff4d00' }}>{liveData.teamA.score}</td>
          </tr>
          <tr>
            <td style={{ color: '#00a2ff', fontWeight: 800 }}>{liveData.teamB.name}</td>
            <td>{liveData.quarters.Q1.teamB}</td>
            <td>{liveData.quarters.Q2.teamB}</td>
            <td>{liveData.quarters.Q3.teamB}</td>
            <td>{liveData.quarters.Q4.teamB}</td>
            <td style={{ color: '#00a2ff' }}>{liveData.teamB.score}</td>
          </tr>
        </tbody>
      </table>

      <div style={{ textAlign: 'center', marginTop: '15px' }}>
        <Link to="/live-score" className="btn-primary">
          <Activity size={18} /> OPEN LIVE STATS & PLAY-BY-PLAY COMMENTARY
        </Link>
      </div>
    </div>
  );
};
