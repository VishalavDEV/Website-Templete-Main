import React from 'react';
import ContactForm from '../components/ContactForm';

export default function Contact({ showToast }) {
  return (
    <div>
      <div className="page-header">
        <div className="container">
          <span className="section-tag">GET IN TOUCH</span>
          <h1 className="page-title">
            Contact <span className="gradient-text">Eventora Team</span>
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', maxWidth: '700px', margin: '0 auto' }}>
            Have questions about registration, sponsorships, press accreditation, or speaker proposals? Drop us a line.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="contact-layout">
            <div className="contact-info-card">
              <span className="section-tag" style={{ marginBottom: '1rem' }}>SUPPORT DESK</span>
              <h2 className="section-title" style={{ textAlign: 'left' }}>Direct Contacts</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '2rem' }}>
                Our support desk operates Monday to Friday, 09:00 AM – 06:00 PM IST.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div>
                  <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--text-dim)', fontWeight: 700 }}>LOCATION</div>
                  <div style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-main)' }}>Chennai Convention Centre, Tamil Nadu, India</div>
                </div>

                <div>
                  <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--text-dim)', fontWeight: 700 }}>HELPLINE</div>
                  <div style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-main)' }}>+91 98765 43210 / +91 44 2256 9000</div>
                </div>

                <div>
                  <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--text-dim)', fontWeight: 700 }}>EMAIL SUPPORT</div>
                  <div style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--primary)' }}>hello@eventora.com</div>
                </div>
              </div>
            </div>

            <ContactForm showToast={showToast} />
          </div>
        </div>
      </section>
    </div>
  );
}
