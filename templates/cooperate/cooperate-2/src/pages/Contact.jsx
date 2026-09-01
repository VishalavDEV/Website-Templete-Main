import React, { useState } from 'react';
import { ArrowRight, Check } from '../components/Icons';
import { BRAND } from '../data/content';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    practice: 'Strategy & Capital Allocation',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      
      {/* ───────────────────────────────────────────────────────────── */}
      {/* COMPACT EDITORIAL PAGE HERO                                   */}
      {/* ───────────────────────────────────────────────────────────── */}
      <section className="page-hero-editorial">
        <div className="container">
          <div className="page-hero-header-grid">
            <div>
              <p className="font-mono text-terracotta" style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
                GLOBAL HEADQUARTERS & INQUIRIES
              </p>
              <h1 className="page-hero-title">
                Let's start <br />
                <span className="italic font-serif">a conversation.</span>
              </h1>
              <div className="page-hero-divider"></div>
              <p className="page-hero-desc">
                We partner with ambitious institutions across five global financial capitals. Reach out directly to initiate a confidential executive dialogue with practice leadership.
              </p>
            </div>

            <div>
              <div className="page-hero-visual-frame">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop"
                  alt="Zurich Global Headquarters"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────── */}
      {/* EDITORIAL CONTACT SPREAD (LEFT HUBS + RIGHT MINIMAL FORM)     */}
      {/* ───────────────────────────────────────────────────────────── */}
      <section className="container">
        <div className="contact-editorial-container">
          
          {/* Left Column: Direct Contact & Global Offices */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            <div>
              <span className="font-mono text-terracotta" style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', fontWeight: 700 }}>DIRECT ADVISORY ACCESS</span>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.25rem', marginTop: '0.5rem' }}>Zurich Global Headquarters</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '1.25rem', fontSize: '1rem', color: 'var(--text-secondary)' }}>
                <p style={{ color: 'var(--text-charcoal)', fontWeight: 500 }}>{BRAND.headquarters}</p>
                <p className="font-mono" style={{ color: 'var(--text-charcoal)', fontWeight: 700 }}>{BRAND.phone}</p>
                <a href={`mailto:${BRAND.email}`} className="link-editorial font-mono" style={{ color: 'var(--accent-terracotta)', fontWeight: 700 }}>
                  {BRAND.email}
                </a>
              </div>
            </div>

            {/* Other Global Hubs */}
            <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '2.5rem' }}>
              <p className="font-mono text-secondary" style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '1.5rem' }}>
                Global Hubs
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1.5rem' }}>
                {BRAND.offices.filter(o => o.city !== 'Zurich').map((office) => (
                  <div key={office.city} style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                    <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: 'var(--text-charcoal)' }}>{office.city}</p>
                    <p className="font-mono text-terracotta" style={{ fontSize: '0.7rem', textTransform: 'uppercase' }}>{office.country}</p>
                    <p className="font-mono" style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>{office.phone}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Media & Press */}
            <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '2rem' }}>
              <p className="font-mono text-secondary" style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
                Press & Keynote Inquiries
              </p>
              <a href="mailto:press@orion-strategy.com" className="font-mono text-terracotta" style={{ fontSize: '0.85rem', fontWeight: 700, marginTop: '0.5rem', display: 'inline-block' }}>
                press@orion-strategy.com
              </a>
            </div>
          </div>

          {/* Right Column: Minimal Underline Editorial Form */}
          <div style={{ borderLeft: '1px solid var(--border-light)', paddingLeft: '3.5rem' }}>
            <span className="font-mono text-terracotta" style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', fontWeight: 700 }}>EXECUTIVE INQUIRY</span>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.25rem', marginTop: '0.5rem', marginBottom: '2.5rem' }}>
              Request partner briefing
            </h2>

            {submitted ? (
              <div style={{ padding: '3rem 2rem', backgroundColor: 'var(--bg-cream-100)', border: '1px solid var(--border-light)', display: 'flex', flexDirection: 'column', gap: '1.25rem', alignItems: 'center', textAlign: 'center' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'var(--text-charcoal)', color: 'var(--bg-cream)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Check size={24} />
                </div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem' }}>Briefing Request Dispatched</h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', maxWidth: '420px', lineHeight: '1.6' }}>
                  A Senior Practice Partner will review your submission and initiate contact within one business day under strict NDA.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="font-mono text-terracotta"
                  style={{ fontSize: '0.75rem', textTransform: 'uppercase', textDecoration: 'underline', marginTop: '1rem' }}
                >
                  Submit another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                
                <div className="form-underline-group">
                  <label className="form-underline-label">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Thomas Keller"
                    className="form-underline-input"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="form-underline-group">
                  <label className="form-underline-label">Corporate Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. t.keller@enterprise.com"
                    className="form-underline-input"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className="form-underline-group">
                  <label className="form-underline-label">Institution / Organization *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Global Logistics AG"
                    className="form-underline-input"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  />
                </div>

                <div className="form-underline-group">
                  <label className="form-underline-label">Practice Area Vector</label>
                  <select
                    className="form-underline-input"
                    style={{ backgroundColor: 'transparent' }}
                    value={formData.practice}
                    onChange={(e) => setFormData({ ...formData, practice: e.target.value })}
                  >
                    <option value="Strategy & Capital Allocation">Strategy & Capital Allocation</option>
                    <option value="Operational Excellence & Supply">Operational Excellence & Supply</option>
                    <option value="Applied AI & Systems">Applied AI & Systems</option>
                    <option value="Enterprise Restructuring">Enterprise Restructuring</option>
                    <option value="M&A & Post-Merger Integration">M&A & Post-Merger Integration</option>
                  </select>
                </div>

                <div className="form-underline-group">
                  <label className="form-underline-label">Mandate Brief / Strategic Context *</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Outline your strategic objective, timeframe, and target outcomes..."
                    className="form-underline-textarea"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <div>
                  <button type="submit" className="btn-editorial-primary">
                    <span>Send inquiry</span>
                    <ArrowRight size={14} />
                  </button>
                </div>

              </form>
            )}
          </div>

        </div>
      </section>

    </div>
  );
}
