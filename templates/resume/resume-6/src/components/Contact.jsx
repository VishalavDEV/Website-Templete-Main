import React, { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation.js';
import './Contact.css';

const projectTypes = [
  'Brand Identity', 'Creative Direction', 'Digital Experience',
  'Editorial Design', 'Cultural Campaign', 'Other',
];

export default function Contact() {
  const { ref: headRef, isVisible: headVisible } = useScrollAnimation(0.1);
  const { ref: formRef, isVisible: formVisible } = useScrollAnimation(0.1);

  const [formData, setFormData] = useState({ name: '', email: '', projectType: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="em-contact section-padding">
      <div className="container">
        <div ref={headRef} className={`em-contact__header fade-up ${headVisible ? 'visible' : ''}`}>
          <span className="section-label">07 — Let's Create Something Meaningful</span>
          <div className="divider" style={{ marginTop: '1rem' }}></div>
        </div>
        <div className="em-contact__layout">
          <div className={`em-contact__left fade-up delay-100 ${headVisible ? 'visible' : ''}`}>
            <h2 className="em-contact__title">Have a vision<br />worth pursuing?</h2>
            <p className="body-lg em-contact__subtitle">
              Have an idea, a challenge, or an ambitious project?<br />Let's start a conversation.
            </p>
            <div className="em-contact__info">
              <div className="em-contact__info-item">
                <span className="section-label">Email</span>
                <a href="mailto:hello@elenamarlowe.example" className="em-contact__info-value link-underline">
                  hello@elenamarlowe.example
                </a>
              </div>
              <div className="divider"></div>
              <div className="em-contact__info-item">
                <span className="section-label">Location</span>
                <span className="em-contact__info-value">Amsterdam, Netherlands</span>
              </div>
              <div className="divider"></div>
              <div className="em-contact__info-item">
                <span className="section-label">Professional</span>
                <div className="em-contact__socials">
                  <a href="#" className="em-contact__social link-underline">LinkedIn</a>
                  <a href="#" className="em-contact__social link-underline">Behance</a>
                  <a href="mailto:hello@elenamarlowe.example" className="em-contact__social link-underline">Email</a>
                </div>
              </div>
            </div>
          </div>

          <div ref={formRef} className={`em-contact__form-wrap fade-up delay-200 ${formVisible ? 'visible' : ''}`}>
            {submitted ? (
              <div className="em-contact__success">
                <div className="em-contact__success-icon">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <circle cx="16" cy="16" r="15" stroke="var(--em-charcoal)" strokeWidth="1"/>
                    <path d="M10 16l4 4 8-8" stroke="var(--em-charcoal)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="em-contact__success-title">Message Received</h3>
                <p className="body-md">Thank you for reaching out. I'll be in touch within 2–3 business days.</p>
                <button
                  className="em-contact__success-reset"
                  onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', projectType: '', message: '' }); }}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form className="em-contact__form" onSubmit={handleSubmit} noValidate>
                <div className="em-contact__form-grid">
                  <div className="em-form-field">
                    <label htmlFor="em-contact-name" className="em-form-field__label section-label">Name</label>
                    <input id="em-contact-name" type="text" name="name" value={formData.name}
                      onChange={handleChange} placeholder="Your full name" className="em-form-field__input" required />
                  </div>
                  <div className="em-form-field">
                    <label htmlFor="em-contact-email" className="em-form-field__label section-label">Email</label>
                    <input id="em-contact-email" type="email" name="email" value={formData.email}
                      onChange={handleChange} placeholder="your@email.com" className="em-form-field__input" required />
                  </div>
                </div>
                <div className="em-form-field">
                  <label htmlFor="em-contact-project" className="em-form-field__label section-label">Project Type</label>
                  <select id="em-contact-project" name="projectType" value={formData.projectType}
                    onChange={handleChange} className="em-form-field__select">
                    <option value="">Select a project type...</option>
                    {projectTypes.map((type) => <option key={type} value={type}>{type}</option>)}
                  </select>
                </div>
                <div className="em-form-field">
                  <label htmlFor="em-contact-message" className="em-form-field__label section-label">Message</label>
                  <textarea id="em-contact-message" name="message" value={formData.message}
                    onChange={handleChange} placeholder="Tell me about your project, goals, and timeline..."
                    className="em-form-field__textarea" rows={5} required />
                </div>
                <button type="submit" className="btn-primary em-contact__submit">
                  Start a Conversation
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
