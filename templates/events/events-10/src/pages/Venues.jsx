import React from 'react';
import { tournamentData } from '../data/tournamentData';
import { VenueCard } from '../components/VenueCard';

export const Venues = () => {
  return (
    <div className="main-content">
      <section className="section-padding sports-bg-pattern">
        <div className="container">
          <div className="section-header">
            <h1 className="section-title">
              TOURNAMENT <span>VENUES</span>
            </h1>
            <div className="section-subtitle">STATE-OF-THE-ART BASKETBALL STADIUMS & PRACTICE COURTS</div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px' }}>
            {tournamentData.venues.map((v) => (
              <VenueCard key={v.id} venue={v} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
