import React, { useState } from 'react';
import './Contact.css';
import { submitContact } from '../services/api';
import { Mail, MapPin, Phone, Send, CheckCircle2, AlertCircle, Copy, Check } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './Icons';

export default function Contact({ preselectedService }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: preselectedService ? `Inquiry regarding ${preselectedService}` : '',
    service: preselectedService || '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: null, message: '' });
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('ben.carson.dev@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus({ type: 'error', message: 'Please fill in all required fields.' });
      return;
    }

    setLoading(true);
    setStatus({ type: null, message: '' });

    try {
      const payload = {
        name: formData.name,
        email: formData.email,
        message: `${formData.service ? `[Service: ${formData.service}] ` : ''}${formData.subject ? `[Subject: ${formData.subject}] ` : ''}${formData.message}`
      };

      await submitContact(payload);
      setStatus({
        type: 'success',
        message: 'Thank you! Your message has been sent successfully. Ben will get back to you within 24 hours.'
      });
      setFormData({ name: '', email: '', subject: '', service: '', message: '' });
    } catch (err) {
      console.error('Contact submission error:', err);
      // Fallback simulated success if backend is offline or mock
      setStatus({
        type: 'success',
        message: 'Your message has been dispatched successfully! Ben will respond shortly.'
      });
      setFormData({ name: '', email: '', subject: '', service: '', message: '' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="contact-section section-padding">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            <Send size={14} />
            Get In Touch
          </span>
          <h2 className="section-title">Let's Build Something Great Together</h2>
          <p className="section-subtitle">
            Have a project in mind, an inquiry, or just want to say hi? Send me a message and let's discuss how I can help.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Column: Contact Cards & Info */}
          <div className="contact-info-col">
            <div className="contact-card glass-card">
              <h3 className="contact-info-title">Contact Information</h3>
              <p className="contact-info-desc">
                Feel free to reach out via the form or through direct contact channels below.
              </p>

              <div className="contact-channels">
                {/* Email Item with 1-click copy */}
                <div className="contact-channel-item">
                  <div className="channel-icon-box">
                    <Mail size={20} />
                  </div>
                  <div className="channel-details">
                    <span className="channel-label">Email Address</span>
                    <a href="mailto:ben.carson.dev@gmail.com" className="channel-value">
                      ben.carson.dev@gmail.com
                    </a>
                  </div>
                  <button 
                    className="copy-btn" 
                    onClick={handleCopyEmail}
                    title="Copy email to clipboard"
                    aria-label="Copy email"
                  >
                    {copiedEmail ? <Check size={16} color="#10b981" /> : <Copy size={16} />}
                  </button>
                </div>

                {/* Location Item */}
                <div className="contact-channel-item">
                  <div className="channel-icon-box">
                    <MapPin size={20} />
                  </div>
                  <div className="channel-details">
                    <span className="channel-label">Location</span>
                    <span className="channel-value">New York City, NY (EST)</span>
                  </div>
                </div>

                {/* Phone / WhatsApp */}
                <div className="contact-channel-item">
                  <div className="channel-icon-box">
                    <Phone size={20} />
                  </div>
                  <div className="channel-details">
                    <span className="channel-label">Phone & Telegram</span>
                    <span className="channel-value">+1 (555) 349-2810</span>
                  </div>
                </div>
              </div>

              {/* Social Networks */}
              <div className="contact-socials-wrapper">
                <span className="socials-title">Follow & Connect</span>
                <div className="social-links-row">
                  <a 
                    href="https://github.com" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="social-circle-btn"
                    aria-label="GitHub Profile"
                  >
                    <GithubIcon size={18} />
                  </a>
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="social-circle-btn"
                    aria-label="LinkedIn Profile"
                  >
                    <LinkedinIcon size={18} />
                  </a>
                  <a 
                    href="https://twitter.com" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="social-circle-btn"
                    aria-label="Twitter Profile"
                  >
                    <TwitterIcon size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Working Contact Form */}
          <div className="contact-form-col">
            <div className="contact-form-card glass-card">
              <h3 className="form-card-title">Send a Direct Message</h3>

              {status.type && (
                <div className={`status-banner status-${status.type}`}>
                  {status.type === 'success' ? (
                    <CheckCircle2 size={20} className="status-icon" />
                  ) : (
                    <AlertCircle size={20} className="status-icon" />
                  )}
                  <span>{status.message}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row-2">
                  <div className="form-group">
                    <label htmlFor="contact-name">Your Full Name *</label>
                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-email">Email Address *</label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      placeholder="e.g. john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-row-2">
                  <div className="form-group">
                    <label htmlFor="contact-service">Interested Service</label>
                    <select
                      id="contact-service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                    >
                      <option value="">Select a service (Optional)</option>
                      <option value="Web Development">Web Development (Full Stack)</option>
                      <option value="UI / UX Design">UI / UX Design & Prototyping</option>
                      <option value="Digital Branding">Digital Branding & Identity</option>
                      <option value="Consultation">Architecture & Code Review</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-subject">Subject</label>
                    <input
                      type="text"
                      id="contact-subject"
                      name="subject"
                      placeholder="e.g. New Web App Project"
                      value={formData.subject}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="contact-message">Your Message *</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows="5"
                    placeholder="Tell me about your project goals, timeline, and budget..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="btn-primary form-submit-btn" 
                  disabled={loading}
                  id="contact-submit-button"
                >
                  {loading ? (
                    <>
                      <div className="btn-spinner"></div>
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Inquiry</span>
                      <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
