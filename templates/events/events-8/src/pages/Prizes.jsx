import React from 'react';
import GlitchText from '../components/GlitchText';
import PrizeCard from '../components/PrizeCard';

const Prizes = () => {
  return (
    <div style={{ paddingTop: 'var(--nav-height)' }}>
      <section className="section-padding cyber-grid-bg" style={{ textAlign: 'center', borderBottom: '1px solid rgba(0, 255, 102, 0.2)' }}>
        <div className="container">
          <div className="badge-tag">● ₹5,00,000+ TOTAL REWARDS</div>
          <GlitchText text="PRIZES & BOUNTIES" tag="h1" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '0.75rem' }} />
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '1.1rem', color: '#94a3b8', maxWidth: '650px', margin: '0 auto' }}>
            Compete for main podium cash rewards, trophies, incubator grants, hardware credits, and special track bounties.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <PrizeCard />
        </div>
      </section>
    </div>
  );
};

export default Prizes;
