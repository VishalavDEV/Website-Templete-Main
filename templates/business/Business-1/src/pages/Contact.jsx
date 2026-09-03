import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, AlertTriangle } from 'lucide-react';
import { apiService } from '../utils/api';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' }); // success | error | ''
  const [errors, setErrors] = useState({}); // Field validation errors from Spring Boot

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear field-specific error when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });
    setErrors({});

    try {
      const res = await apiService.submitContact(formData);
      setStatus({ type: 'success', message: res.message });
      setFormData({ name: '', email: '', phone: '', company: '', subject: '', message: '' });
    } catch (err) {
      console.error("Submission failed:", err);
      // Check if it is a field validation error payload (usually comes from global exception handler)
      if (err.response && err.response.status === 400) {
        const validationErrors = await err.response.json();
        setErrors(validationErrors);
        setStatus({ type: 'error', message: 'Input validation failed. Please check form fields.' });
      } else {
        // Fallback or generic errors (the apiService fallback will mock success, so this is for genuine network errors)
        setStatus({ type: 'error', message: 'Could not connect to the API server. Falling back to mock data.' });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-page">
      {/* Background orbs */}
      <div className="glow-bg">
        <div className="glow-orb orb-1"></div>
        <div className="glow-orb orb-2"></div>
      </div>

      {/* Header */}
      <section className="contact-header section-padding">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-subtitle">CONNECT WITH US</span>
            <h1 className="large-headline">Let's Build the <span className="text-gradient">Next Stage Together</span></h1>
            <p className="lead-paragraph">
              Contact our engineering and B2B strategy advisors to draft deployment workflows.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Grid: Form & Info */}
      <section className="contact-grid-section section-padding">
        <div className="container contact-grid">
          
          {/* Contact Details */}
          <div className="contact-info-panel">
            <h2>Contact Information</h2>
            <p>Have questions about plans, capabilities, or custom scripts? Reach out directly.</p>

            <div className="contact-info-cards">
              <div className="info-item-card glass-card">
                <Mail className="info-icon" size={20} />
                <div>
                  <h4>Email Us</h4>
                  <p>advisory@abcbusiness.io</p>
                  <p>support@abcbusiness.io</p>
                </div>
              </div>

              <div className="info-item-card glass-card">
                <Phone className="info-icon" size={20} />
                <div>
                  <h4>Call Us</h4>
                  <p>+1 (555) 019-2834</p>
                  <p>Mon - Fri, 9am - 6pm EST</p>
                </div>
              </div>

              <div className="info-item-card glass-card">
                <MapPin className="info-icon" size={20} />
                <div>
                  <h4>Global Headquarters</h4>
                  <p>100 Pine Street, Floor 24</p>
                  <p>San Francisco, CA 94111</p>
                </div>
              </div>
            </div>

            {/* Animated Vector Map Visual */}
            <div className="map-visual-card glass-card">
              <div className="map-grid-dots"></div>
              <svg className="map-vector" viewBox="0 0 400 200">
                {/* Simplified continent outlines using circles/curves */}
                <path
                  d="M30 40 Q50 20 80 30 T120 40 T150 70 T130 110 T80 120 Z"
                  className="map-path"
                />
                <path
                  d="M200 50 Q240 20 280 30 T320 60 T350 110 T300 130 Z"
                  className="map-path"
                />
                {/* Pulsing HQ Pin */}
                <g className="map-pin-group">
                  <circle cx="100" cy="60" r="15" className="map-pulse-circle" />
                  <circle cx="100" cy="60" r="6" className="map-core-circle" />
                </g>
                <text x="120" y="65" className="map-pin-label">SF HQ</text>
              </svg>
            </div>
          </div>

          {/* Contact Form Panel */}
          <div className="contact-form-panel glass-card">
            <h2>Draft Solutions Request</h2>
            
            <AnimatePresence mode="wait">
              {status.message && (
                <motion.div
                  className={`status-message-alert ${status.type}`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  {status.type === 'success' ? <CheckCircle2 size={18} /> : <AlertTriangle size={18} />}
                  <span>{status.message}</span>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-double-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={loading}
                    placeholder="Jane Doe"
                    className={errors.name ? 'error' : ''}
                  />
                  {errors.name && <span className="field-error">{errors.name}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="email">Work Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={loading}
                    placeholder="jane@company.com"
                    className={errors.email ? 'error' : ''}
                  />
                  {errors.email && <span className="field-error">{errors.email}</span>}
                </div>
              </div>

              <div className="form-double-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    disabled={loading}
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="company">Company Name</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    disabled={loading}
                    placeholder="Acme Corp"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  disabled={loading}
                  placeholder="Need custom CRM middleware setup"
                  className={errors.subject ? 'error' : ''}
                />
                {errors.subject && <span className="field-error">{errors.subject}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={loading}
                  placeholder="Tell us about your system architecture bottlenecks..."
                  className={errors.message ? 'error' : ''}
                ></textarea>
                {errors.message && <span className="field-error">{errors.message}</span>}
              </div>

              <button type="submit" className="btn btn-primary submit-form-btn" disabled={loading}>
                {loading ? 'Submitting Proposal...' : 'Submit Request'} <Send size={16} />
              </button>
            </form>
          </div>

        </div>
      </section>
    </div>
  );
}
