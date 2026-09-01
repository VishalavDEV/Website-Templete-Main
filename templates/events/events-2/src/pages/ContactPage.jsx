import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import '../styles/forms.css';

export const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: 'General Inquiry', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: '', email: '', subject: 'General Inquiry', message: '' });
    }, 4000);
  };

  return (
    <div style={{ paddingTop: '120px' }}>
      <section style={{ background: 'var(--bg-secondary)', padding: '60px 0', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="section-tag">GET IN TOUCH</div>
          <h1 className="section-title">Contact Summit Organizers</h1>
          <p className="section-subtitle">
            Have questions about group tickets, sponsorship options, press accreditation, or speaker submissions?
          </p>
        </div>
      </section>

      <section className="section-padding" style={{ background: 'var(--bg-primary)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '48px', alignItems: 'start' }}>
            {/* Contact Information */}
            <div>
              <h2 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '16px' }}>Direct Support Desks</h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '32px' }}>
                Our summit team operates across global time zones to assist delegates and partners.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div className="glass-card" style={{ padding: '24px', display: 'flex', gap: '16px', alignItems: 'center' }}>
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '12px',
                      background: 'rgba(124,58,237,0.2)',
                      color: 'var(--accent-purple)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <Mail size={22} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1rem', fontWeight: 700 }}>General & Delegate Support</h4>
                    <div style={{ color: 'var(--accent-cyan)', fontSize: '0.92rem', fontWeight: 600 }}>support@eventora.io</div>
                  </div>
                </div>

                <div className="glass-card" style={{ padding: '24px', display: 'flex', gap: '16px', alignItems: 'center' }}>
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '12px',
                      background: 'rgba(6,182,212,0.2)',
                      color: 'var(--accent-cyan)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <Phone size={22} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1rem', fontWeight: 700 }}>Partnership & Press Hotline</h4>
                    <div style={{ color: 'var(--accent-cyan)', fontSize: '0.92rem', fontWeight: 600 }}>+91 (044) 4890 2026</div>
                  </div>
                </div>

                <div className="glass-card" style={{ padding: '24px', display: 'flex', gap: '16px', alignItems: 'center' }}>
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '12px',
                      background: 'rgba(245,158,11,0.2)',
                      color: 'var(--accent-amber)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <MapPin size={22} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1rem', fontWeight: 700 }}>Summit Headquarters</h4>
                    <div style={{ color: 'var(--text-secondary)', fontSize: '0.88rem' }}>
                      EVENTORA Tech Plaza, Guindy Industrial Estate, Chennai 600032.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form Card */}
            <div className="glass-card" style={{ padding: '36px' }}>
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '40px 0' }}>
                  <CheckCircle2 size={48} color="var(--accent-emerald)" style={{ margin: '0 auto 16px auto' }} />
                  <h3 style={{ fontSize: '1.6rem', fontWeight: 800 }}>Message Sent!</h3>
                  <p style={{ color: 'var(--text-secondary)', marginTop: '8px', fontSize: '0.95rem' }}>
                    Thank you for reaching out. A representative will respond to your query within 6 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h3 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: '20px' }}>Send Us a Message</h3>

                  <div className="form-group" style={{ marginBottom: '16px' }}>
                    <label className="form-label">Your Name *</label>
                    <input
                      type="text"
                      required
                      className="form-input"
                      placeholder="e.g. Priya Sharma"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                  </div>

                  <div className="form-group" style={{ marginBottom: '16px' }}>
                    <label className="form-label">Email Address *</label>
                    <input
                      type="email"
                      required
                      className="form-input"
                      placeholder="priya@company.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                  </div>

                  <div className="form-group" style={{ marginBottom: '16px' }}>
                    <label className="form-label">Inquiry Subject</label>
                    <select
                      className="form-select"
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    >
                      <option value="General Inquiry">General Summit Inquiry</option>
                      <option value="Group Passes">Group Ticket Discounts</option>
                      <option value="Sponsorship">Sponsorship & Booth Booking</option>
                      <option value="Press">Press & Media Accreditation</option>
                    </select>
                  </div>

                  <div className="form-group" style={{ marginBottom: '24px' }}>
                    <label className="form-label">Message *</label>
                    <textarea
                      required
                      rows={5}
                      className="form-textarea"
                      placeholder="Describe your request or inquiry..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                    />
                  </div>

                  <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                    Send Message <Send size={16} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
