import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Valid email is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="text-center center-content">
          <span className="section-label reveal-on-scroll">PUBLISHER RELATIONS</span>
          <h2 className="section-heading reveal-on-scroll delay-1">
            Let's Connect
          </h2>
          <p className="section-desc reveal-on-scroll delay-2">
            Have questions for Lunara Press, press inquiries, or author event requests? Reach out to our team.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Column Publisher Info */}
          <div className="contact-info-card reveal-on-scroll">
            <h3 style={{ fontSize: '1.5rem', marginBottom: '8px' }}>Lunara Press Editorial</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem', marginBottom: '16px' }}>
              We welcome inquiries from booksellers, reviewers, press, and readers worldwide.
            </p>

            <div className="contact-info-item">
              <div className="contact-icon-box"><Mail size={20} /></div>
              <div>
                <div className="contact-info-title">Email</div>
                <div className="contact-info-text">contact@lunarapress.com</div>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-icon-box"><Phone size={20} /></div>
              <div>
                <div className="contact-info-title">Phone</div>
                <div className="contact-info-text">+1 (800) 586-2721</div>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-icon-box"><MapPin size={20} /></div>
              <div>
                <div className="contact-info-title">Address</div>
                <div className="contact-info-text">450 Literary Plaza, Suite 900, Melbourne & New York</div>
              </div>
            </div>
          </div>

          {/* Right Column Form */}
          <div className="contact-form-wrapper reveal-on-scroll delay-2">
            {submitted ? (
              <div className="contact-form" style={{ alignItems: 'center', textAlign: 'center', padding: '60px 40px' }}>
                <CheckCircle size={54} color="var(--accent)" />
                <h3 style={{ fontSize: '1.75rem', marginTop: '16px' }}>Message Received!</h3>
                <p style={{ color: 'var(--text-secondary)' }}>
                  Thank you for contacting Lunara Press. A representative will respond to your query within 24 business hours.
                </p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className="form-group">
                  <label className="form-label">Full Name *</label>
                  <input 
                    type="text" 
                    name="name" 
                    className="form-input" 
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Jane Doe"
                  />
                  {errors.name && <span style={{ color: '#FF6B6B', fontSize: '0.8125rem' }}>{errors.name}</span>}
                </div>

                <div className="form-group">
                  <label className="form-label">Email Address *</label>
                  <input 
                    type="email" 
                    name="email" 
                    className="form-input" 
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="jane@example.com"
                  />
                  {errors.email && <span style={{ color: '#FF6B6B', fontSize: '0.8125rem' }}>{errors.email}</span>}
                </div>

                <div className="form-group">
                  <label className="form-label">Subject</label>
                  <input 
                    type="text" 
                    name="subject" 
                    className="form-input" 
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Press Inquiry / Order Support"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Message *</label>
                  <textarea 
                    name="message" 
                    className="form-textarea" 
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                  />
                  {errors.message && <span style={{ color: '#FF6B6B', fontSize: '0.8125rem' }}>{errors.message}</span>}
                </div>

                <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '8px' }}>
                  Send Message <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
