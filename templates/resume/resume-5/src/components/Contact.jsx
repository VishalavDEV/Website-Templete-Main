import React, { useState } from 'react';
import { profileData } from '../data/portfolioData';
import { Mail, MapPin, Send, CheckCircle2, Globe, Compass, ArrowUpRight } from 'lucide-react';

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Architectural Design',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setFormSubmitted(true);
    }
  };

  return (
    <section id="contact" className="arch-section contact-section">
      {/* ANIMATED ARCHITECTURAL GRID BACKGROUND */}
      <div className="contact-grid-anim"></div>

      <div className="container relative-z">
        <div className="contact-top-banner">
          <span className="section-label">GET IN TOUCH</span>
          <h2 className="contact-heading display-title">
            Let's Shape <br />
            What Comes Next.
          </h2>
          <p className="contact-subhead">
            "Open to architectural collaborations, design conversations, and future-focused projects."
          </p>
        </div>

        {/* GRID-BASED CONTACT AREA & FORM */}
        <div className="contact-main-grid">
          {/* LEFT COLUMN: DIRECT CONTACT DETAILS */}
          <div className="contact-info-panel arch-card">
            <div className="arch-corner-tick tick-tl"></div>
            <div className="arch-corner-tick tick-tr"></div>
            <div className="arch-corner-tick tick-bl"></div>
            <div className="arch-corner-tick tick-br"></div>

            <h3 className="info-panel-title">STUDIO DIRECTORY</h3>

            <div className="info-blocks-list">
              <div className="info-block-item">
                <span className="mono-text block-label">EMAIL INQUIRIES</span>
                <a href={`mailto:${profileData.email}`} className="info-value-link">
                  <Mail size={16} />
                  <span>{profileData.email}</span>
                </a>
              </div>

              <div className="info-block-item">
                <span className="mono-text block-label">STUDIO LOCATION</span>
                <div className="info-value-text">
                  <MapPin size={16} />
                  <span>{profileData.studioAddress}</span>
                </div>
              </div>

              <div className="info-block-item">
                <span className="mono-text block-label">NETWORK & ARCHIVE</span>
                <div className="info-value-text">
                  <Globe size={16} />
                  <span>Copenhagen Architectural Registry / AV-2026</span>
                </div>
              </div>
            </div>

            <div className="studio-availability-box">
              <div className="pulse-dot"></div>
              <span className="mono-text">ACCEPTING SELECT COMMISSIONS FOR 2026/2027</span>
            </div>
          </div>

          {/* RIGHT COLUMN: INTERACTIVE FORM WITH THIN UNDERLINE INPUTS */}
          <div className="contact-form-panel arch-card">
            <div className="arch-corner-tick tick-tl"></div>
            <div className="arch-corner-tick tick-tr"></div>
            <div className="arch-corner-tick tick-bl"></div>
            <div className="arch-corner-tick tick-br"></div>

            {formSubmitted ? (
              <div className="form-success-state">
                <CheckCircle2 size={48} className="success-icon" />
                <h3 className="success-title">Message Transmitted</h3>
                <p className="success-text">
                  Thank you, {formData.name}. Your architectural inquiry regarding "{formData.projectType}" has been received. Adrian will respond within 48 business hours.
                </p>
                <button 
                  className="btn-outline"
                  onClick={() => { setFormSubmitted(false); setFormData({ name: '', email: '', projectType: 'Architectural Design', message: '' }); }}
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="underline-form">
                <div className="form-group">
                  <label className="mono-text input-label">01 // YOUR NAME</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="e.g. Elena Rostova"
                    value={formData.name}
                    onChange={handleChange}
                    className="underline-input"
                  />
                </div>

                <div className="form-group">
                  <label className="mono-text input-label">02 // EMAIL ADDRESS</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="e.g. elena@studio.example"
                    value={formData.email}
                    onChange={handleChange}
                    className="underline-input"
                  />
                </div>

                <div className="form-group">
                  <label className="mono-text input-label">03 // PROJECT TYPOLOGY</label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="underline-select"
                  >
                    <option value="Architectural Design">Architectural Design & Planning</option>
                    <option value="Urban Regeneration">Urban Regeneration / Masterplan</option>
                    <option value="Sustainability Advisory">Sustainability & Material Research</option>
                    <option value="Public Keynote / Jury">Public Keynote / Guest Lecture</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="mono-text input-label">04 // PROJECT DETAILS & SCOPE</label>
                  <textarea
                    name="message"
                    required
                    rows="4"
                    placeholder="Describe site context, timeline, or collaboration parameters..."
                    value={formData.message}
                    onChange={handleChange}
                    className="underline-textarea"
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary full-width submit-btn">
                  <span>Begin a Conversation</span>
                  <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .contact-section {
          background-color: var(--bg-warm);
          padding-top: 120px;
          padding-bottom: 140px;
        }

        .contact-grid-anim {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background-image: 
            linear-gradient(to right, rgba(27, 54, 41, 0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(27, 54, 41, 0.04) 1px, transparent 1px);
          background-size: 50px 50px;
          animation: gridPan 60s linear infinite;
        }

        @keyframes gridPan {
          from { background-position: 0 0; }
          to { background-position: 500px 500px; }
        }

        .relative-z {
          position: relative;
          z-index: 2;
        }

        .contact-top-banner {
          margin-bottom: 60px;
        }

        .contact-heading {
          font-size: clamp(3rem, 6vw, 5rem);
          line-height: 0.95;
          margin-top: 16px;
          margin-bottom: 24px;
          color: var(--accent-charcoal);
        }

        .contact-subhead {
          font-size: 1.2rem;
          color: var(--text-muted);
          max-width: 620px;
          line-height: 1.6;
        }

        .contact-main-grid {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 40px;
        }

        /* INFO PANEL */
        .contact-info-panel {
          background-color: var(--bg-pure);
          display: flex;
          flex-direction: column;
          padding: 40px;
        }

        .info-panel-title {
          font-family: var(--font-mono);
          font-size: 0.85rem;
          letter-spacing: 0.1em;
          color: var(--accent-green);
          margin-bottom: 32px;
          padding-bottom: 12px;
          border-bottom: 1px solid var(--border-light);
        }

        .info-blocks-list {
          display: flex;
          flex-direction: column;
          gap: 32px;
          margin-bottom: 40px;
        }

        .info-block-item {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .block-label {
          font-size: 0.7rem;
          color: var(--text-light);
        }

        .info-value-link {
          font-family: var(--font-heading);
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--accent-charcoal);
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 10px;
          transition: color 0.2s ease;
        }

        .info-value-link:hover {
          color: var(--accent-green);
        }

        .info-value-text {
          font-size: 1rem;
          color: var(--text-main);
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .studio-availability-box {
          margin-top: auto;
          padding: 16px 20px;
          background-color: var(--bg-warm);
          border: 1px solid var(--border-light);
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .pulse-dot {
          width: 10px;
          height: 10px;
          background-color: var(--accent-green);
          border-radius: 50%;
          box-shadow: 0 0 0 0 rgba(27, 54, 41, 0.4);
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(27, 54, 41, 0.4); }
          70% { box-shadow: 0 0 0 8px rgba(27, 54, 41, 0); }
          100% { box-shadow: 0 0 0 0 rgba(27, 54, 41, 0); }
        }

        /* FORM PANEL */
        .contact-form-panel {
          background-color: var(--bg-pure);
          padding: 40px;
        }

        .underline-form {
          display: flex;
          flex-direction: column;
          gap: 28px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .input-label {
          font-size: 0.72rem;
          color: var(--accent-green);
        }

        .underline-input, .underline-select, .underline-textarea {
          width: 100%;
          border: none;
          border-bottom: 2px solid var(--border-medium);
          padding: 12px 0;
          font-family: var(--font-body);
          font-size: 1.05rem;
          color: var(--text-main);
          background: transparent;
          outline: none;
          transition: border-color 0.3s ease;
        }

        .underline-input:focus, .underline-select:focus, .underline-textarea:focus {
          border-color: var(--accent-green);
        }

        .underline-select {
          cursor: pointer;
        }

        .submit-btn {
          margin-top: 16px;
        }

        .form-success-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 40px 20px;
        }

        .success-icon {
          color: var(--accent-green);
          margin-bottom: 20px;
        }

        .success-title {
          font-size: 1.8rem;
          color: var(--accent-charcoal);
          margin-bottom: 14px;
        }

        .success-text {
          font-size: 1rem;
          color: var(--text-muted);
          line-height: 1.6;
          margin-bottom: 30px;
        }

        @media (max-width: 900px) {
          .contact-main-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
