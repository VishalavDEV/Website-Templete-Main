import React, { useState } from 'react';
import { Mail, MapPin, Globe, Send, CheckCircle2 } from 'lucide-react';
import { CHEF_PROFILE } from '../data/culinaryData';

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    projectType: 'Concept Development',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="contact-section">
      {/* Subtle Rising Warmth Animated SVG Steam Line Effect */}
      <div className="warmth-steam-wrapper">
        <svg viewBox="0 0 1000 120" preserveAspectRatio="none" style={{ width: '100%', height: '100%' }}>
          <path 
            className="steam-path" 
            d="M 50 120 C 150 70, 250 110, 350 50 C 450 0, 550 80, 650 30 C 750 -10, 850 70, 950 20" 
          />
          <path 
            className="steam-path" 
            style={{ animationDelay: '-4s', opacity: 0.2 }}
            d="M 20 120 C 120 80, 220 100, 320 40 C 420 10, 520 90, 620 20 C 720 0, 820 60, 920 10" 
          />
        </svg>
      </div>

      <div className="container">
        <span className="section-label">INQUIRIES & COLLABORATIONS</span>

        <div className="contact-grid">
          <div className="contact-left">
            <h2 className="contact-heading">
              LET'S CREATE<br />
              SOMETHING<br />
              MEMORABLE.
            </h2>

            <p className="contact-intro">
              Open to culinary collaborations, concept development, creative projects, pop-up residencies, and hospitality conversations worldwide.
            </p>

            <div className="contact-details-list">
              <div className="contact-detail-item">
                <div className="contact-detail-icon"><Mail size={18} /></div>
                <div>
                  <span className="contact-detail-label">EMAIL INQUIRIES</span>
                  <div className="contact-detail-value">{CHEF_PROFILE.email}</div>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="contact-detail-icon"><MapPin size={18} /></div>
                <div>
                  <span className="contact-detail-label">PRIMARY LOCATION</span>
                  <div className="contact-detail-value">{CHEF_PROFILE.location}</div>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="contact-detail-icon"><Globe size={18} /></div>
                <div>
                  <span className="contact-detail-label">PROFESSIONAL NETWORK</span>
                  <div className="contact-detail-value">linkedin.com/in/lucien-moreau-fictional</div>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-right">
            {formSubmitted ? (
              <div className="contact-form" style={{ textAlign: 'center', padding: '4rem 2rem' }}>
                <CheckCircle2 size={48} style={{ color: 'var(--color-wine)', marginBottom: '1.25rem' }} />
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', marginBottom: '0.75rem', color: 'var(--color-charcoal)' }}>
                  Message Received
                </h3>
                <p style={{ color: 'var(--color-charcoal-light)', lineHeight: '1.6' }}>
                  Thank you for reaching out. Inquiries submitted to Chef Lucien Moreau are reviewed within 24 business hours.
                </p>
                <button 
                  className="btn-secondary" 
                  onClick={() => setFormSubmitted(false)}
                  style={{ marginTop: '2rem' }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label">FULL NAME *</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="e.g. Eleanor Vance" 
                    className="form-input" 
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">EMAIL ADDRESS *</label>
                  <input 
                    type="email" 
                    required 
                    placeholder="eleanor@example.com" 
                    className="form-input" 
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">ORGANIZATION / VENUE</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Atelier Dining Group" 
                    className="form-input" 
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">PROJECT TYPE</label>
                  <select 
                    className="form-select"
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  >
                    <option value="Concept Development">Concept Development</option>
                    <option value="Executive Chef Consultation">Executive Chef Consultation</option>
                    <option value="Pop-Up Culinary Residency">Pop-Up Culinary Residency</option>
                    <option value="Speaking & Masterclass">Speaking & Masterclass</option>
                    <option value="Other Inquiries">Other Inquiries</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">MESSAGE DETAILS *</label>
                  <textarea 
                    required 
                    placeholder="Share your culinary concept vision, dates, or collaboration goals..." 
                    className="form-textarea"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  <Send size={16} /> Start a Conversation
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
