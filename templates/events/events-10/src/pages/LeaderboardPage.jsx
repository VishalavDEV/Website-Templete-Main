import React from 'react';
import { Leaderboard } from '../components/Leaderboard';

export const LeaderboardPage = () => {
  return (
    <div className="main-content">
      <section className="section-padding sports-bg-pattern">
        <div className="container">
          <div className="section-header">
            <h1 className="section-title">
              TOURNAMENT <span>LEADERBOARD</span>
            </h1>
            <div className="section-subtitle">TOP SCORERS, DEFENDERS & MVP RANKINGS</div>
          </div>

          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <Leaderboard />
          </div>
        </div>
      </section>
    </div>
  );
};
