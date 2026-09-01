import React from 'react';
import { tournamentData } from '../data/tournamentData';
import { MerchandiseCard } from '../components/MerchandiseCard';

export const MerchandisePage = () => {
  return (
    <div className="main-content">
      <section className="section-padding sports-bg-pattern">
        <div className="container">
          <div className="section-header">
            <h1 className="section-title">
              OFFICIAL <span>MERCHANDISE</span>
            </h1>
            <div className="section-subtitle">THUNDERCOURT CLASH PRO GEAR, BASKETBALLS & HOODIES</div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
            {tournamentData.merchandise.map((item) => (
              <MerchandiseCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
