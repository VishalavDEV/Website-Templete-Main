import React from 'react';
import GlitchText from '../components/GlitchText';
import SponsorGrid from '../components/SponsorGrid';

const Sponsors = () => {
  return (
    <div style={{ paddingTop: 'var(--nav-height)' }}>
      <section className="section-padding cyber-grid-bg" style={{ textAlign: 'center', borderBottom: '1px solid rgba(0, 255, 102, 0.2)' }}>
        <div className="container">
          <div className="badge-tag">● EVENT PARTNERS</div>
          <GlitchText text="OUR SPONSORS" tag="h1" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '0.75rem' }} />
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '1.1rem', color: '#94a3b8', maxWidth: '650px', margin: '0 auto' }}>
            Supported by global AI enterprises, cloud infrastructure providers, open-source communities, and venture firms.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <SponsorGrid />
        </div>
      </section>
    </div>
  );
};

export default Sponsors;
