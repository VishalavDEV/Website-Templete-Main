import React from 'react';
import { FanZone } from '../components/FanZone';

export const FanZonePage = () => {
  return (
    <div className="main-content">
      <section className="section-padding sports-bg-pattern">
        <div className="container">
          <div className="section-header">
            <h1 className="section-title">
              FAN <span>ZONE</span>
            </h1>
            <div className="section-subtitle">LIVE VOTING POLLS, MATCH PREDICTIONS & FAN WALL</div>
          </div>

          <FanZone />
        </div>
      </section>
    </div>
  );
};
