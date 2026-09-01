import React from 'react';
import SectionTitle from '../components/SectionTitle';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <div className="section-padding" style={{ paddingTop: '8rem' }}>
      <div className="container">
        <SectionTitle subheading="GET IN TOUCH" title="CONTACT VORTEX FORGE" />
        <div className="grid-2">
          <div>
            <h3 style={{ fontSize: '1.8rem', color: 'var(--color-yellow)', marginBottom: '1.5rem' }}>
              ARENA HEADQUARTERS
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', fontSize: '1.05rem', color: 'var(--color-text-muted)' }}>
              <div className="diagonal-card" style={{ padding: '1.5rem' }}>
                <strong style={{ color: '#FFF' }}>📍 ADDRESS:</strong><br />Vortex Forge Arena, Sector 18, Sports City Complex
              </div>
              <div className="diagonal-card" style={{ padding: '1.5rem' }}>
                <strong style={{ color: '#FFF' }}>📞 PHONE NUMBERS:</strong><br />+91 98765 43210 / +91 98765 43211
              </div>
              <div className="diagonal-card" style={{ padding: '1.5rem' }}>
                <strong style={{ color: '#FFF' }}>✉ EMAIL:</strong><br />hello@vortexforgefitness.com
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
