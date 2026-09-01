import React, { useState } from 'react';
import { Tickets } from '../components/Tickets';
import { RegistrationForm } from '../components/RegistrationForm';

export const RegistrationPage = ({ selectedTicket, onSelectTicket }) => {
  return (
    <div style={{ paddingTop: '120px' }}>
      <section style={{ background: 'var(--bg-secondary)', padding: '60px 0', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="section-tag">SUMMIT REGISTRATION</div>
          <h1 className="section-title">Official Registration Portal</h1>
          <p className="section-subtitle">
            Select your preferred delegate pass tier and complete your summit registration.
          </p>
        </div>
      </section>

      <Tickets onSelectTicket={onSelectTicket} />

      <section className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <RegistrationForm selectedTicket={selectedTicket} />
        </div>
      </section>
    </div>
  );
};
