import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, User } from 'lucide-react';

export const PlayerCard = ({ player }) => {
  return (
    <div className="player-card">
      <div className="player-photo-container">
        <img
          src={player.avatar}
          alt={player.name}
          className="player-photo"
          loading="lazy"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = '/images/jordan-sterling.svg';
          }}
        />
        <div className="player-number-badge">#{player.number}</div>
      </div>

      <div className="player-card-body">
        <div>
          <h3 className="player-name">{player.name}</h3>
          <div className="player-team-name">{player.position} | {player.team}</div>
        </div>

        <div className="player-stats-row" style={{ margin: '14px 0' }}>
          <div>
            <div className="player-stat-val">{player.pointsPerGame}</div>
            <div className="player-stat-key">PPG</div>
          </div>
          <div>
            <div className="player-stat-val">{player.assistsPerGame}</div>
            <div className="player-stat-key">APG</div>
          </div>
          <div>
            <div className="player-stat-val">{player.reboundsPerGame}</div>
            <div className="player-stat-key">RPG</div>
          </div>
        </div>

        <Link to={`/players/${player.id}`} className="btn-outline" style={{ width: '100%', fontSize: '0.9rem', padding: '8px 14px' }}>
          FULL PROFILE <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
};
