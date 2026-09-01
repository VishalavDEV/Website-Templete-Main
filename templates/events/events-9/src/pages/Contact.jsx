import React from 'react';
import ContactForm from '../components/ContactForm';

export default function Contact() {
  return (
    <div className="section-padding" style={{ paddingTop: '8rem' }}>
      <div className="container">
        <div className="text-center" style={{ marginBottom: '4rem' }}>
          <span className="section-label">GET IN TOUCH</span>
          <h1 className="serif-title">CONTACT & CONCIERGE</h1>
          <p style={{ color: 'var(--muted)', fontSize: '1.1rem', maxWidth: '650px', margin: '0.8rem auto 0' }}>
            Have questions or need special assistance during your stay? Reach out to our team.
          </p>
        </div>

        <ContactForm />
      </div>
    </div>
  );
}
