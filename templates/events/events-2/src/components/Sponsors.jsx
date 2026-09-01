import React, { useState } from 'react';
import { sponsorTiers } from '../data/sponsors';
import { ShieldCheck, ArrowRight, X, Send } from 'lucide-react';
import '../styles/cards.css';

export const Sponsors = () => {
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [inquirySubmitted, setInquirySubmitted] = useState(false);
  const [formData, setFormData] = useState({ company: '', email: '', tier: 'Platinum' });

  const handleSubmitInquiry = (e) => {
    e.preventDefault();
    setInquirySubmitted(true);
    setTimeout(() => {
      setInquirySubmitted(false);
      setInquiryModalOpen(false);
    }, 2500);
  };

  return (
    <section className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <div className="section-tag">OUR PARTNERS & SPONSORS</div>
          <h2 className="section-title">Backed by Industry Giants</h2>
          <p className="section-subtitle">
            Leading international technology organizations supporting open engineering research and global innovation.
          </p>
        </div>

        {/* Sponsor Tier Stack */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
          {sponsorTiers.map((tierObj, idx) => (
            <div key={idx}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                <span className="badge badge-purple">{tierObj.badge}</span>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#ffffff' }}>{tierObj.tier}</h3>
              </div>

              {/* Grid of partner cards */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: `repeat(${tierObj.sponsors.length > 3 ? 4 : tierObj.sponsors.length}, 1fr)`,
                  gap: '20px'
                }}
              >
                {tierObj.sponsors.map((partner, pIdx) => (
                  <div
                    key={pIdx}
                    className="glass-card"
                    style={{
                      padding: '24px 20px',
                      textAlign: 'center',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      transition: 'transform 0.3s ease, border-color 0.3s ease, background 0.3s ease'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--accent-cyan)')}
                    onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--border-light)')}
                  >
                    <div
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '1.25rem',
                        fontWeight: 800,
                        letterSpacing: '0.08em',
                        color: '#ffffff',
                        background: 'linear-gradient(135deg, #ffffff 0%, #cbd5e1 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                      }}
                    >
                      {partner.logoText}
                    </div>
                    {partner.category && (
                      <div style={{ fontSize: '0.78rem', color: 'var(--accent-cyan)', fontWeight: 600 }}>
                        {partner.category}
                      </div>
                    )}
                    {partner.tagline && (
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                        {partner.tagline}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Become a Sponsor CTA Box */}
        <div
          className="glass-card"
          style={{
            marginTop: '60px',
            padding: '40px',
            background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.15) 0%, rgba(6, 182, 212, 0.15) 100%)',
            border: '1px solid rgba(124, 58, 237, 0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '24px'
          }}
        >
          <div>
            <h3 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: '6px' }}>
              Interested in Partnering with CYBERNEXUS 2026?
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
              Showcase your enterprise platform to 5,000+ senior decision makers, engineers, and tech founders.
            </p>
          </div>
          <button className="btn btn-primary" onClick={() => setInquiryModalOpen(true)}>
            Become a Sponsor <ArrowRight size={16} className="btn-arrow" />
          </button>
        </div>
      </div>

      {/* Sponsor Inquiry Modal */}
      {inquiryModalOpen && (
        <div className="modal-backdrop" onClick={() => setInquiryModalOpen(false)}>
          <div className="glass-card modal-content-card" style={{ maxWidth: '500px' }} onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setInquiryModalOpen(false)}>
              <X size={20} />
            </button>

            {inquirySubmitted ? (
              <div style={{ textAlign: 'center', padding: '20px 0' }}>
                <ShieldCheck size={48} color="var(--accent-emerald)" style={{ margin: '0 auto 16px auto' }} />
                <h3 style={{ fontSize: '1.4rem', fontWeight: 700 }}>Inquiry Received!</h3>
                <p style={{ color: 'var(--text-secondary)', marginTop: '8px', fontSize: '0.92rem' }}>
                  Thank you for your interest. Our partnership team will send the CYBERNEXUS 2026 Sponsorship Prospectus within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmitInquiry}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '8px' }}>Sponsorship Inquiry</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', marginBottom: '20px' }}>
                  Request our official partnership kit and exhibition booth options.
                </p>

                <div className="form-group" style={{ marginBottom: '16px' }}>
                  <label className="form-label">Company Name *</label>
                  <input
                    type="text"
                    required
                    className="form-input"
                    placeholder="e.g. Apex Cloud Labs"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  />
                </div>

                <div className="form-group" style={{ marginBottom: '16px' }}>
                  <label className="form-label">Corporate Email *</label>
                  <input
                    type="email"
                    required
                    className="form-input"
                    placeholder="partnerships@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className="form-group" style={{ marginBottom: '24px' }}>
                  <label className="form-label">Preferred Sponsorship Tier</label>
                  <select
                    className="form-select"
                    value={formData.tier}
                    onChange={(e) => setFormData({ ...formData, tier: e.target.value })}
                  >
                    <option value="Platinum">Platinum Partner ($25,000)</option>
                    <option value="Gold">Gold Sponsor ($15,000)</option>
                    <option value="Silver">Silver Sponsor ($8,000)</option>
                    <option value="Community">Community Partner</option>
                  </select>
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                  Submit Inquiry <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
