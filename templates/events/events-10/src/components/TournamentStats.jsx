import React from 'react';
import { tournamentData } from '../data/tournamentData';

export const TournamentStats = () => {
  return (
    <div className="container">
      <div className="stats-banner-grid">
        <div className="stat-card">
          <div className="stat-number">{tournamentData.info.teamsCount}</div>
          <div className="stat-label">TEAMS</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">{tournamentData.info.playersCount}</div>
          <div className="stat-label">PLAYERS</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">{tournamentData.info.matchesCount}</div>
          <div className="stat-label">MATCHES</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">{tournamentData.info.prizePool}</div>
          <div className="stat-label">PRIZE POOL</div>
        </div>
      </div>
    </div>
  );
};
