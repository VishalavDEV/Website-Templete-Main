import React from 'react';
import { StandingsTable } from '../components/StandingsTable';

export const Standings = () => {
  return (
    <div className="main-content">
      <section className="section-padding sports-bg-pattern">
        <div className="container">
          <div className="section-header">
            <h1 className="section-title">
              TOURNAMENT <span>STANDINGS</span>
            </h1>
            <div className="section-subtitle">GROUP STAGE POINTS TABLE & FORM BADGES</div>
          </div>

          <StandingsTable />
        </div>
      </section>
    </div>
  );
};
