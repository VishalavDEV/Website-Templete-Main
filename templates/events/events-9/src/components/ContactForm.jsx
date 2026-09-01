import React, { useState } from 'react';
import { Phone, Mail, MessageSquare, CheckCircle2 } from 'lucide-react';
import { weddingData } from '../data/weddingData';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '3rem' }}>
        {/* COORDINATOR & DIRECT CONTACT DETAILS */}
        <div>
          <span className="section-label">ASSISTANCE & DIRECT CONTACT</span>
          <h2 className="serif-title" style={{ marginBottom: '1.5rem' }}>
            WE ARE HERE TO HELP
          </h2>

          <div className="dresscode-card" style={{ marginBottom: '1.5rem' }}>
            <span className="section-label">WEDDING CONCIERGE</span>
            <h3 className="serif-title" style={{ fontSize: '1.4rem', marginBottom: '0.4rem' }}>
              {weddingData.contact.coordinator}
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginTop: '1rem', color: 'var(--muted)', fontSize: '0.92rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Phone size={16} color="var(--accent)" />
                <a href={`tel:${weddingData.contact.phone}`} style={{ color: 'inherit', textDecoration: 'none' }}>{weddingData.contact.phone}</a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Mail size={16} color="var(--accent)" />
                <a href={weddingData.contact.social.email} style={{ color: 'inherit', textDecoration: 'none' }}>{weddingData.contact.email}</a>
              </div>
            </div>
          </div>

          <div className="dresscode-card">
            <span className="section-label">FAMILY CONTACTS</span>
            <div style={{ marginTop: '0.8rem', display: 'flex', flexDirection: 'column', gap: '0.8rem', fontSize: '0.9rem', color: 'var(--muted)' }}>
              <div><strong>Bride's Family Helpline:</strong> {weddingData.contact.brideFamilyContact}</div>
              <div><strong>Groom's Family Helpline:</strong> {weddingData.contact.groomFamilyContact}</div>
            </div>
          </div>
        </div>

        {/* CONTACT FORM */}
        <div className="form-container">
          {submitted ? (
            <div className="text-center" style={{ padding: '2rem 0' }}>
              <CheckCircle2 size={48} color="var(--accent)" style={{ margin: '0 auto 1rem' }} />
              <h3 className="serif-title" style={{ marginBottom: '0.5rem' }}>MESSAGE SENT SUCCESSFULLY!</h3>
              <p style={{ color: 'var(--muted)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
                Our wedding coordinator will get back to you shortly.
              </p>
              <button onClick={() => setSubmitted(false)} className="btn-secondary">
                SEND ANOTHER MESSAGE
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label" htmlFor="contact-name">YOUR NAME *</label>
                <input
                  id="contact-name"
                  type="text"
                  className="form-input"
                  placeholder="e.g. Sophia Vance"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="form-group">
                  <label className="form-label" htmlFor="contact-email">EMAIL *</label>
                  <input
                    id="contact-email"
                    type="email"
                    className="form-input"
                    placeholder="sophia@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="contact-phone">PHONE</label>
                  <input
                    id="contact-phone"
                    type="tel"
                    className="form-input"
                    placeholder="+91..."
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="contact-sub">SUBJECT</label>
                <input
                  id="contact-sub"
                  type="text"
                  className="form-input"
                  placeholder="e.g. Travel arrangement inquiry"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="contact-msg">MESSAGE *</label>
                <textarea
                  id="contact-msg"
                  rows={4}
                  className="form-textarea"
                  placeholder="How can we assist you with your trip to Chennai?"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
              </div>

              <button type="submit" className="btn-primary" style={{ width: '100%' }}>
                SEND MESSAGE
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
