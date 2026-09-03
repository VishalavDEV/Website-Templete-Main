import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

export default function ContactForm({ showToast }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.subject.trim()) errs.subject = 'Subject is required';
    if (!formData.message.trim()) errs.message = 'Message is required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      if (showToast) {
        showToast('Thank you! Your message has been sent successfully.');
      }
    }
  };

  return (
    <div className="contact-form-card">
      {submitted ? (
        <div style={{ textAlign: 'center', padding: '2.5rem 1rem' }}>
          <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'rgba(0, 184, 148, 0.15)', color: 'var(--secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem auto' }}>
            <CheckCircle2 size={32} />
          </div>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.5rem', color: 'var(--text-main)' }}>Message Sent!</h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '2rem' }}>
            ✓ Thank you! Your message has been submitted successfully. Our team will respond within 24 hours.
          </p>
          <button
            onClick={() => {
              setSubmitted(false);
              setFormData({ name: '', email: '', subject: '', message: '' });
            }}
            className="btn btn-outline btn-sm"
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '1.5rem', color: 'var(--text-main)' }}>
            Send Us a <span className="gradient-text">Message</span>
          </h3>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div className="form-group">
              <label className="form-label">Your Name *</label>
              <input
                type="text"
                className="form-input"
                placeholder="John Doe"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
              {errors.name && <span className="form-error">{errors.name}</span>}
            </div>

            <div className="form-group">
              <label className="form-label">Email Address *</label>
              <input
                type="email"
                className="form-input"
                placeholder="john@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
              {errors.email && <span className="form-error">{errors.email}</span>}
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Subject *</label>
            <input
              type="text"
              className="form-input"
              placeholder="e.g. Sponsorship Inquiry / Ticket Registration"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            />
            {errors.subject && <span className="form-error">{errors.subject}</span>}
          </div>

          <div className="form-group">
            <label className="form-label">Message *</label>
            <textarea
              className="form-textarea"
              rows={5}
              placeholder="Write your message or inquiry..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
            {errors.message && <span className="form-error">{errors.message}</span>}
          </div>

          <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
            <Send size={16} /> SEND MESSAGE
          </button>
        </form>
      )}
    </div>
  );
}
