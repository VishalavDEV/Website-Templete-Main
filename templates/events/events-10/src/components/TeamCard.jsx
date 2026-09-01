import React from 'react';
import { Link } from 'react-router-dom';
import { Trophy, Shield, ArrowRight } from 'lucide-react';

export const TeamCard = ({ team }) => {
  return (
    <div className="team-card">
      <div className="team-card-banner" style={{ background: team.bgGradient || 'linear-gradient(135deg, #ff4d00, #111111)' }}>
        <div className="team-logo-circle">{team.logo}</div>
      </div>

      <div className="team-card-body">
        <h3 className="team-name">{team.name}</h3>
        <div className="team-city">{team.city} | {team.group}</div>

        <div className="team-stats-mini">
          <div className="team-stat-item">
            <span className="team-stat-val" style={{ color: '#00c853' }}>{team.wins}</span>
            <span className="team-stat-lbl">WINS</span>
          </div>
          <div className="team-stat-item">
            <span className="team-stat-val" style={{ color: '#ff1744' }}>{team.losses}</span>
            <span className="team-stat-lbl">LOSSES</span>
          </div>
          <div className="team-stat-item">
            <span className="team-stat-val" style={{ color: '#ff4d00' }}>{team.winPct}</span>
            <span className="team-stat-lbl">WIN %</span>
          </div>
        </div>

        <div style={{ fontSize: '0.85rem', color: 'var(--gray)', marginBottom: '16px', textAlign: 'left' }}>
          <div><strong>Coach:</strong> {team.coach}</div>
          <div><strong>Captain:</strong> {team.captain}</div>
        </div>

        <Link to={`/teams/${team.id}`} className="btn-secondary" style={{ width: '100%', marginTop: 'auto', fontSize: '0.95rem' }}>
          VIEW TEAM PROFILE <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
};
