import React from 'react';
import SectionTitle from '../components/SectionTitle';
import RegistrationForm from '../components/RegistrationForm';

const Registration = () => {
  return (
    <div className="section-padding" style={{ paddingTop: '8rem' }}>
      <div className="container">
        <SectionTitle subheading="STEP INTO THE ARENA" title="OFFICIAL REGISTRATION" />
        <div className="diagonal-card" style={{ padding: '3rem', maxWidth: '1000px', margin: '0 auto', borderTop: '4px solid var(--color-yellow)' }}>
          <RegistrationForm />
        </div>
      </div>
    </div>
  );
};

export default Registration;
