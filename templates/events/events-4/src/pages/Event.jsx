import React from 'react';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import Countdown from '../components/Countdown';

const Event = () => {
  return (
    <div className="section-padding" style={{ paddingTop: '8rem' }}>
      <div className="container">
        <SectionTitle subheading="THE MAIN SPECTACLE" title="IRON ASCENT 2026 CHAMPIONSHIP" />
        <Countdown targetDate="2026-10-18T09:00:00" />
        <div style={{ margin: '4rem 0', display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '3rem', alignItems: 'center' }}>
          <div>
            <h3 style={{ fontSize: '2rem', color: 'var(--color-yellow)', marginBottom: '1rem' }}>
              PUSH BEYOND PHYSICAL LIMITS
            </h3>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.8', fontSize: '1.05rem', marginBottom: '1.5rem' }}>
              IRON ASCENT 2026 is the premier annual strength & functional fitness championship hosted by Vortex Forge Fitness Arena. Compete across 5 category divisions for cash prizes and the championship title.
            </p>
            <Button to="/registration" variant="primary">REGISTER NOW FOR IRON ASCENT</Button>
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80" alt="Iron Ascent" style={{ width: '100%', borderRadius: '6px', border: '2px solid var(--color-yellow)' }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
