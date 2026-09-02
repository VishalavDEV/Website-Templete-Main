import React, { useState } from 'react';
import { ArrowRight, Check, MapPin, Mail, Phone } from './Icons';
import { BRAND } from '../data/content';

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    topic: 'Strategy & Capital Allocation',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const topics = [
    'Strategy & Capital Allocation',
    'Enterprise Transformation',
    'Operations & Supply Chain',
    'Digital Architecture & AI',
    'M&A and Integration',
    'Media / Press Inquiries'
  ];

  return (
    <div style={{ padding: '80px 0' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem' }}>
        
        {/* Left Column: Details */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div>
            <p className="font-mono text-terracotta" style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.75rem' }}>
              Inquiries & Partnerships
            </p>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.5rem, 4.5vw, 4rem)', lineHeight: '1.05', color: 'var(--text-charcoal)' }}>
              Let’s start <br />
              <span className="italic font-serif">a conversation.</span>
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginTop: '1rem' }}>
              Whether you are preparing for structural market transition, assessing an M&A portfolio, or navigating complex industrial modernization, our senior partners are ready to engage.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-light)' }}>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <Mail className="text-terracotta" size={16} />
              <div style={{ fontSize: '0.85rem' }}>
                <p className="font-mono" style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Executive RFP Inquiries</p>
                <a href="mailto:inquiries@orion-strategy.com" style={{ fontWeight: 600 }}>inquiries@orion-strategy.com</a>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <Phone className="text-terracotta" size={16} />
              <div style={{ fontSize: '0.85rem' }}>
                <p className="font-mono" style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Global Switchboard</p>
                <p style={{ fontWeight: 600 }}>+41 44 214 8000 (Zurich HQ)</p>
                <p style={{ fontWeight: 600 }}>+1 212 555 0192 (New York)</p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <MapPin className="text-terracotta" size={16} />
              <div style={{ fontSize: '0.85rem' }}>
                <p className="font-mono" style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Primary Advisory Hubs</p>
                <p style={{ color: 'var(--text-secondary)' }}>Zurich · New York · London · Tokyo · Singapore</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Underline Form */}
        <div>
          {submitted ? (
            <div style={{ padding: '3rem', backgroundColor: 'var(--bg-cream-100)', border: '1px solid var(--border-light)', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '1.25rem', alignItems: 'center' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'var(--text-charcoal)', color: 'var(--bg-cream)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Check size={20} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem' }}>Inquiry Received.</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', maxWidth: '380px', lineHeight: '1.6' }}>
                Thank you for contacting ORION. An Engagement Partner aligned with your industry will review your brief and respond within 24 hours.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: '', email: '', company: '', topic: 'Strategy & Capital Allocation', message: '' });
                }}
                className="font-mono text-terracotta"
                style={{ fontSize: '0.75rem', textTransform: 'uppercase', textDecoration: 'underline', marginTop: '1rem' }}
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              
              {/* Topic Select Chips */}
              <div className="form-underline-group">
                <label className="form-underline-label">Select Practice Area / Topic</label>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.5rem' }}>
                  {topics.map((t) => (
                    <button
                      type="button"
                      key={t}
                      onClick={() => setFormData({ ...formData, topic: t })}
                      style={{
                        padding: '0.4rem 0.8rem',
                        fontSize: '0.75rem',
                        border: '1px solid',
                        borderColor: formData.topic === t ? 'var(--text-charcoal)' : 'var(--border-medium)',
                        backgroundColor: formData.topic === t ? 'var(--text-charcoal)' : 'transparent',
                        color: formData.topic === t ? 'var(--bg-cream)' : 'var(--text-secondary)',
                        fontWeight: formData.topic === t ? 600 : 400,
                        transition: 'all 0.2s ease'
                      }}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* Name */}
              <div className="form-underline-group">
                <label className="form-underline-label">Your Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Dr. Alexander Hamilton"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="form-underline-input"
                />
              </div>

              {/* Work Email */}
              <div className="form-underline-group">
                <label className="form-underline-label">Work Email *</label>
                <input
                  type="email"
                  required
                  placeholder="alexander@organization.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="form-underline-input"
                />
              </div>

              {/* Company */}
              <div className="form-underline-group">
                <label className="form-underline-label">Organization / Institution *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Global Infrastructure Holdings"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="form-underline-input"
                />
              </div>

              {/* Message */}
              <div className="form-underline-group">
                <label className="form-underline-label">What can we help with? (Context & Timeline) *</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Briefly describe your strategic objective, challenges, or scope of inquiry..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="form-underline-textarea"
                />
              </div>

              {/* Submit */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', paddingTop: '1rem' }}>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', maxWidth: '280px' }}>
                  All inquiries are protected by strict institutional confidentiality standards.
                </p>

                <button type="submit" disabled={loading} className="btn-editorial-primary">
                  <span>{loading ? 'Transmitting...' : 'Send inquiry'}</span>
                  <ArrowRight size={14} />
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
}
