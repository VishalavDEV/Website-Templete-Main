import React from 'react';
import { AboutEvent } from '../components/AboutEvent';
import { WhyAttend } from '../components/WhyAttend';
import { EventStats } from '../components/EventStats';

export const AboutPage = () => {
  return (
    <div style={{ paddingTop: '120px' }}>
      <section style={{ background: 'var(--bg-secondary)', padding: '60px 0', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="section-tag">WHO WE ARE</div>
          <h1 className="section-title">About EVENTORA Global</h1>
          <p className="section-subtitle">
            Founded with a commitment to high-impact technical discourse, hands-on learning, and sovereign innovation.
          </p>
        </div>
      </section>

      <AboutEvent />
      <EventStats />
      <WhyAttend />
    </div>
  );
};
