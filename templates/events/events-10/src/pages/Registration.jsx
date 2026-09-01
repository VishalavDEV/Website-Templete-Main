import React from 'react';
import { RegistrationForm } from '../components/RegistrationForm';

export const Registration = () => {
  return (
    <div className="main-content">
      <section className="section-padding sports-bg-pattern">
        <div className="container">
          <div className="section-header">
            <h1 className="section-title">
              TOURNAMENT <span>REGISTRATION</span>
            </h1>
            <div className="section-subtitle">REGISTER YOUR SQUAD OR APPLY AS AN INDIVIDUAL ATHLETE</div>
          </div>

          <RegistrationForm />
        </div>
      </section>
    </div>
  );
};
