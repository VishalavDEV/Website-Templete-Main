import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { siteConfig } from '../data/content';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'web-engineering',
    message: ''
  });

  const [touched, setTouched] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validateField = (field, value) => {
    let error = '';
    if (field === 'name') {
      if (!value.trim()) error = 'Full name is required.';
      else if (value.trim().length < 2) error = 'Name must be at least 2 characters.';
    }

    if (field === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!value.trim()) error = 'Business email is required.';
      else if (!emailRegex.test(value.trim())) error = 'Please enter a valid email address.';
    }

    if (field === 'message') {
      if (!value.trim()) error = 'Project message is required.';
      else if (value.trim().length < 10) error = 'Please describe your project in at least 10 characters.';
    }

    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (touched[name]) {
      const err = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: err }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const err = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: err }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate all fields
    const nameErr = validateField('name', formData.name);
    const emailErr = validateField('email', formData.email);
    const msgErr = validateField('message', formData.message);

    const newErrors = { name: nameErr, email: emailErr, message: msgErr };
    setErrors(newErrors);
    setTouched({ name: true, email: true, phone: true, service: true, message: true });

    if (nameErr || emailErr || msgErr) {
      return;
    }

    setIsSubmitting(true);

    // Simulate server response
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: 'web-engineering',
        message: ''
      });
      setTouched({});
      setErrors({});
    }, 1200);
  };

  return (
    <section id="contact" className="section" style={{ background: 'transparent' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4.5rem' }}>
          <div className="section-tag">
            INITIATE DIALOGUE
          </div>
          <h2 className="section-title">
            Let's Build Something <span className="text-gradient">Extraordinary</span>
          </h2>
          <p className="section-subtitle">
            Have an upcoming enterprise web project, spatial product idea, or AI vision? Reach out directly to our engineering team.
          </p>
        </div>

        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '2rem',
            alignItems: 'start'
          }}
        >
          
          {/* Left Column: Direct Contact Info Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            
            <div className="glass-card" style={{ padding: 'clamp(1.25rem, 3vw, 1.75rem)', background: '#ffffff', display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
              <div className="glass-icon-badge" style={{ width: '48px', height: '48px' }}>
                <span style={{ position: 'relative', zIndex: 2, color: 'var(--accent-blue)', display: 'flex' }}>
                  <Mail size={22} strokeWidth={2.2} />
                </span>
              </div>
              <div>
                <span style={{ fontSize: '0.785rem', fontWeight: 700, color: 'var(--text-subtle)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  DIRECT EMAIL INQUIRIES
                </span>
                <a href={`mailto:${siteConfig.contactEmail}`} style={{ display: 'block', fontSize: '1.05rem', fontWeight: 700, color: 'var(--accent-blue)', marginTop: '0.15rem', wordBreak: 'break-all' }}>
                  {siteConfig.contactEmail}
                </a>
              </div>
            </div>

            <div className="glass-card" style={{ padding: 'clamp(1.25rem, 3vw, 1.75rem)', background: '#ffffff', display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
              <div className="glass-icon-badge cyan" style={{ width: '48px', height: '48px' }}>
                <span style={{ position: 'relative', zIndex: 2, color: 'var(--accent-cyan)', display: 'flex' }}>
                  <Phone size={22} strokeWidth={2.2} />
                </span>
              </div>
              <div>
                <span style={{ fontSize: '0.785rem', fontWeight: 700, color: 'var(--text-subtle)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  DIRECT ADVISORY PHONE
                </span>
                <a href={`tel:${siteConfig.contactPhone}`} style={{ display: 'block', fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-main)', marginTop: '0.15rem' }}>
                  {siteConfig.contactPhone}
                </a>
              </div>
            </div>

            <div className="glass-card" style={{ padding: 'clamp(1.25rem, 3vw, 1.75rem)', background: '#ffffff', display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
              <div className="glass-icon-badge violet" style={{ width: '48px', height: '48px' }}>
                <span style={{ position: 'relative', zIndex: 2, color: 'var(--accent-violet)', display: 'flex' }}>
                  <MapPin size={22} strokeWidth={2.2} />
                </span>
              </div>
              <div>
                <span style={{ fontSize: '0.785rem', fontWeight: 700, color: 'var(--text-subtle)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  HEADQUARTERS LOCATION
                </span>
                <div style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-main)', marginTop: '0.15rem' }}>
                  {siteConfig.address}
                </div>
              </div>
            </div>

            {/* Interactive Map Visualizer Wireframe */}
            <div className="glass-card" style={{ padding: '1.25rem', background: '#0f172a', color: '#fff', borderRadius: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.85rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#38bdf8' }}>
                  GLOBAL STUDIO NETWORK
                </span>
                <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>SF • LONDON • TOKYO</span>
              </div>
              <div style={{ height: '90px', borderRadius: '12px', background: 'radial-gradient(circle, rgba(0,102,255,0.2), transparent 70%), #1e293b', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #334155' }}>
                <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#94a3b8' }}>
                  🌐 Interactive Studio Location Canvas
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Real-Time Validating Contact Form */}
          <div 
            className="glass-card"
            style={{
              padding: 'clamp(1.5rem, 4vw, 2.75rem) clamp(1.25rem, 3.5vw, 2.25rem)',
              background: '#ffffff',
              borderRadius: '24px'
            }}
          >
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.15)', color: 'var(--accent-emerald)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                  <CheckCircle2 size={36} />
                </div>

                <h3 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '0.5rem' }}>
                  Consultation Request Received!
                </h3>

                <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', lineHeight: 1.6 }}>
                  Thank you for reaching out. A senior technical partner from AETHERIA will review your project brief and respond within 4 business hours.
                </p>

                <button 
                  onClick={() => setSubmitted(false)}
                  className="btn btn-primary"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1.75rem' }}>
                  Project Brief Submission
                </h3>

                {/* Name */}
                <div className="form-group">
                  <label className="form-label" htmlFor="name">
                    Full Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="e.g. Alexandra Vance"
                    className={`form-input ${touched.name && errors.name ? 'error' : touched.name && !errors.name ? 'valid' : ''}`}
                  />
                  {touched.name && errors.name && (
                    <div className="error-message">
                      <AlertCircle size={14} /> {errors.name}
                    </div>
                  )}
                </div>

                {/* Email */}
                <div className="form-group">
                  <label className="form-label" htmlFor="email">
                    Business Email *
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="e.g. alexandra@company.com"
                    className={`form-input ${touched.email && errors.email ? 'error' : touched.email && !errors.email ? 'valid' : ''}`}
                  />
                  {touched.email && errors.email && (
                    <div className="error-message">
                      <AlertCircle size={14} /> {errors.email}
                    </div>
                  )}
                </div>

                {/* Phone */}
                <div className="form-group">
                  <label className="form-label" htmlFor="phone">
                    Direct Phone (Optional)
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 000-0000"
                    className="form-input"
                  />
                </div>

                {/* Service Selector */}
                <div className="form-group">
                  <label className="form-label" htmlFor="service">
                    Primary Service Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="form-select"
                  >
                    <option value="brand">Intelligent Brand Architecture</option>
                    <option value="web-engineering">Next-Gen Web & Mobile Engineering</option>
                    <option value="spatial-3d">Immersive Spatial & 3D Interfaces</option>
                    <option value="ai-strategy">AI-Powered Product Strategy</option>
                    <option value="growth-engine">High-Performance Growth Engine</option>
                    <option value="cloud-security">Enterprise Cloud & Security</option>
                  </select>
                </div>

                {/* Message */}
                <div className="form-group">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <label className="form-label" htmlFor="message">
                      Project Vision & Timeline *
                    </label>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-subtle)' }}>
                      {formData.message.length}/500
                    </span>
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    maxLength={500}
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Briefly describe your business goals, target deliverables, or expected launch timeline..."
                    className={`form-textarea ${touched.message && errors.message ? 'error' : touched.message && !errors.message ? 'valid' : ''}`}
                  />
                  {touched.message && errors.message && (
                    <div className="error-message">
                      <AlertCircle size={14} /> {errors.message}
                    </div>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary"
                  style={{ width: '100%', padding: '1rem', fontSize: '1rem' }}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={18} className="animate-spin" /> Processing Brief...
                    </>
                  ) : (
                    <>
                      Submit Project Brief <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
