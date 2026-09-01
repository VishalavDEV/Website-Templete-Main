import React from 'react';
import GlitchText from '../components/GlitchText';
import FAQAccordion from '../components/FAQAccordion';

const FAQPage = () => {
  return (
    <div style={{ paddingTop: 'var(--nav-height)' }}>
      <section className="section-padding cyber-grid-bg" style={{ textAlign: 'center', borderBottom: '1px solid rgba(0, 255, 102, 0.2)' }}>
        <div className="container">
          <div className="badge-tag">● HACKER KNOWLEDGE BASE</div>
          <GlitchText text="FREQUENTLY ASKED QUESTIONS" tag="h1" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '0.75rem' }} />
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '1.1rem', color: '#94a3b8', maxWidth: '650px', margin: '0 auto' }}>
            Find answers regarding participation, team formation, Wi-Fi, food, AI tools, judging, and prizes.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <FAQAccordion />
        </div>
      </section>
    </div>
  );
};

export default FAQPage;
