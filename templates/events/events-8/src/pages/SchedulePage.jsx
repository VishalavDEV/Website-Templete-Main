import React from 'react';
import GlitchText from '../components/GlitchText';
import ScheduleTimeline from '../components/ScheduleTimeline';

const SchedulePage = () => {
  return (
    <div style={{ paddingTop: 'var(--nav-height)' }}>
      <section className="section-padding cyber-grid-bg" style={{ textAlign: 'center', borderBottom: '1px solid rgba(0, 255, 102, 0.2)' }}>
        <div className="container">
          <div className="badge-tag">● 24-HOUR AGENDA</div>
          <GlitchText text="EVENT SCHEDULE" tag="h1" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '0.75rem' }} />
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '1.1rem', color: '#94a3b8', maxWidth: '650px', margin: '0 auto' }}>
            Follow the 24-hour timeline from check-in to midnight pizza, mentoring rounds, and final prize announcements.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <ScheduleTimeline />
        </div>
      </section>
    </div>
  );
};

export default SchedulePage;
