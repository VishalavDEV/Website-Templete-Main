import React from 'react';
import { Schedule } from '../components/Schedule';

export const SchedulePage = () => {
  return (
    <div style={{ paddingTop: '120px' }}>
      <section style={{ background: 'var(--bg-secondary)', padding: '60px 0', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="section-tag">SUMMIT PROGRAM</div>
          <h1 className="section-title">Official 3-Day Agenda</h1>
          <p className="section-subtitle">
            Plan your conference days, select tracks, and expand sessions for speaker bios and workshop room maps.
          </p>
        </div>
      </section>

      <Schedule />
    </div>
  );
};
