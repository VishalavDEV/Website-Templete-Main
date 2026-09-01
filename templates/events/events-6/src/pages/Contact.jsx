import React from 'react';
import ContactForm from '../components/ContactForm';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <div style={{ paddingTop: '120px', position: 'relative', zIndex: 10 }}>
      <section className="section-padding" style={{ textAlign: 'center', background: 'radial-gradient(circle at top, #1E1705 0%, #050505 80%)' }}>
        <div className="container">
          <span className="section-subtitle">GET IN TOUCH</span>
          <h1 className="section-title">CONTACT VELORA LIVE</h1>
          <p className="section-desc">Have questions about tickets, partnerships, or VIP passes? Reach out to our event team.</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: '50px' }}>
          {/* Contact Details Card */}
          <div className="story-card">
            <h3 style={{ fontSize: '1.8rem', color: 'var(--gold-bright)', marginBottom: '24px' }}>EVENT HEADQUARTERS</h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', color: 'var(--text-light)' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <MapPin style={{ color: 'var(--gold-primary)', flexShrink: 0 }} size={22} />
                <div>
                  <strong style={{ color: '#FFF', display: 'block' }}>VENUE ADDRESS</strong>
                  Aurora Sound Arena, ECR Road, Chennai, India
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <Mail style={{ color: 'var(--gold-primary)', flexShrink: 0 }} size={22} />
                <div>
                  <strong style={{ color: '#FFF', display: 'block' }}>EMAIL SUPPORT</strong>
                  <a href="mailto:hello@veloralive.com" style={{ color: 'var(--gold-bright)' }}>hello@veloralive.com</a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <Phone style={{ color: 'var(--gold-primary)', flexShrink: 0 }} size={22} />
                <div>
                  <strong style={{ color: '#FFF', display: 'block' }}>PHONE HELPLINE</strong>
                  +91 98765 43210 / +91 44 2800 9000
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <Clock style={{ color: 'var(--gold-primary)', flexShrink: 0 }} size={22} />
                <div>
                  <strong style={{ color: '#FFF', display: 'block' }}>SUPPORT HOURS</strong>
                  Monday – Saturday: 10:00 AM – 7:00 PM IST
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
