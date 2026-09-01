import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Globe } from 'lucide-react';
import { tournamentData } from '../data/tournamentData';

export const Contact = () => {
  const [sent, setSent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="main-content">
      <section className="section-padding sports-bg-pattern">
        <div className="container">
          <div className="section-header">
            <h1 className="section-title">
              CONTACT <span>US</span>
            </h1>
            <div className="section-subtitle">TOURNAMENT ORGANIZERS & HELP DESK DIRECTORY</div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', maxWidth: '1100px', margin: '0 auto' }}>
            {/* Contact Info Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div className="sports-card" style={{ padding: '28px' }}>
                <h3 className="font-display" style={{ fontSize: '1.8rem', color: '#ff4d00', marginBottom: '16px' }}>
                  HEADQUARTERS & VENUE
                </h3>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '14px', fontSize: '0.95rem', color: 'var(--white)' }}>
                  <MapPin size={20} color="#ff4d00" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>Vortex Arena, ECR Sports Hub, Chennai, Tamil Nadu 600119, India</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px', fontSize: '0.95rem', color: 'var(--white)' }}>
                  <Mail size={20} color="#ff4d00" />
                  <span>support@thundercourtclash.com</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.95rem', color: 'var(--white)' }}>
                  <Phone size={20} color="#ff4d00" />
                  <span>+91 (044) 4900 8800 / +91 98765 43210</span>
                </div>
              </div>

              <div className="sports-card" style={{ padding: '28px' }}>
                <h3 className="font-display" style={{ fontSize: '1.8rem', color: '#ff7518', marginBottom: '14px' }}>
                  HELP DESK HOURS
                </h3>
                <p style={{ color: 'var(--gray)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                  Monday — Sunday: 08:00 AM — 10:00 PM IST<br />
                  24/7 Matchday Support during tournament dates (15-22 August 2026).
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="sports-card" style={{ padding: '36px' }}>
              {!sent ? (
                <form onSubmit={handleSubmit}>
                  <h3 className="font-display" style={{ fontSize: '2.2rem', color: '#ff4d00', marginBottom: '20px' }}>
                    SEND US A MESSAGE
                  </h3>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '20px' }}>
                    <div>
                      <label className="font-sports" style={{ display: 'block', marginBottom: '4px', fontSize: '0.85rem', color: 'var(--gray)' }}>FULL NAME *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your Name"
                        style={{ width: '100%', padding: '12px', background: '#050505', border: '1px solid var(--border)', color: '#fff', borderRadius: '4px' }}
                      />
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                      <div>
                        <label className="font-sports" style={{ display: 'block', marginBottom: '4px', fontSize: '0.85rem', color: 'var(--gray)' }}>EMAIL *</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="email@domain.com"
                          style={{ width: '100%', padding: '12px', background: '#050505', border: '1px solid var(--border)', color: '#fff', borderRadius: '4px' }}
                        />
                      </div>
                      <div>
                        <label className="font-sports" style={{ display: 'block', marginBottom: '4px', fontSize: '0.85rem', color: 'var(--gray)' }}>PHONE</label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 98765 43210"
                          style={{ width: '100%', padding: '12px', background: '#050505', border: '1px solid var(--border)', color: '#fff', borderRadius: '4px' }}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="font-sports" style={{ display: 'block', marginBottom: '4px', fontSize: '0.85rem', color: 'var(--gray)' }}>SUBJECT</label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        style={{ width: '100%', padding: '12px', background: '#050505', border: '1px solid var(--border)', color: '#fff', borderRadius: '4px' }}
                      >
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Ticketing Issue">Ticketing Issue</option>
                        <option value="Team Registration">Team Registration</option>
                        <option value="Media & Press Pass">Media & Press Pass</option>
                      </select>
                    </div>

                    <div>
                      <label className="font-sports" style={{ display: 'block', marginBottom: '4px', fontSize: '0.85rem', color: 'var(--gray)' }}>MESSAGE *</label>
                      <textarea
                        rows={4}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Write your inquiry details here..."
                        style={{ width: '100%', padding: '12px', background: '#050505', border: '1px solid var(--border)', color: '#fff', borderRadius: '4px' }}
                      />
                    </div>
                  </div>

                  <button type="submit" className="btn-primary" style={{ width: '100%', fontSize: '1.1rem', padding: '14px' }}>
                    <Send size={18} /> SEND MESSAGE NOW
                  </button>
                </form>
              ) : (
                <div style={{ textAlign: 'center', padding: '30px 10px' }}>
                  <CheckCircle2 size={60} color="#00c853" style={{ marginBottom: '16px' }} />
                  <h3 className="font-display" style={{ fontSize: '2.5rem', color: '#ff4d00', marginBottom: '10px' }}>
                    MESSAGE SENT!
                  </h3>
                  <p style={{ color: 'var(--white)', marginBottom: '20px' }}>
                    Thank you for reaching out. Our team will get back to <strong>{formData.email}</strong> shortly.
                  </p>
                  <button onClick={() => setSent(false)} className="btn-primary">
                    SEND ANOTHER MESSAGE
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
