import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Loader2, Sparkles, X } from 'lucide-react';
import { submitContact } from '../services/api';

export default function Contact({ selectedPlan, onClearPlan }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [fieldErrors, setFieldErrors] = useState({});
  const [status, setStatus] = useState({ loading: false, success: null, message: '' });

  useEffect(() => {
    if (selectedPlan) {
      setFormData((prev) => ({
        ...prev,
        subject: `Inquiry for ${selectedPlan.name} Plan (${selectedPlan.price}/${selectedPlan.period || 'mo'})`
      }));
    }
  }, [selectedPlan]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error on edit
    if (fieldErrors[name]) {
      setFieldErrors((prev) => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFieldErrors({});
    setStatus({ loading: true, success: null, message: '' });

    try {
      const response = await submitContact(formData);
      setStatus({
        loading: false,
        success: true,
        message: response.message || 'Your inquiry was received successfully!'
      });
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      if (onClearPlan) onClearPlan();
    } catch (err) {
      setStatus({
        loading: false,
        success: false,
        message: err.message || 'Validation failed. Please review your entries.'
      });
      if (err.fieldErrors) {
        setFieldErrors(err.fieldErrors);
      }
    }
  };

  return (
    <section id="contact" style={{
      padding: '120px 0',
      backgroundColor: '#0c0e12',
      borderTop: '1px solid var(--border-dark)'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '64px',
          alignItems: 'flex-start'
        }}>
          {/* Contact Details */}
          <div>
            <span className="section-tag">Direct Communication</span>
            <h2 className="section-title">Initiate A Project Collaboration</h2>
            <p className="section-subtitle" style={{ marginBottom: '40px' }}>
              Whether you are looking to build a structural masterpiece or deploy a high-speed enterprise platform, our team is ready to consult.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '6px',
                  backgroundColor: 'rgba(23, 190, 210, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <MapPin size={22} color="var(--accent)" />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Headquarters</div>
                  <div style={{ fontSize: '1rem', color: '#ffffff', fontWeight: '500' }}>742 Evergreen Plaza, Zurich, Switzerland</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '6px',
                  backgroundColor: 'rgba(23, 190, 210, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Mail size={22} color="var(--accent)" />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Direct Email</div>
                  <div style={{ fontSize: '1rem', color: '#ffffff', fontWeight: '500' }}>connect@asentus-tech.com</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '6px',
                  backgroundColor: 'rgba(23, 190, 210, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Phone size={22} color="var(--accent)" />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Telephone</div>
                  <div style={{ fontSize: '1rem', color: '#ffffff', fontWeight: '500' }}>+41 (0) 44 288 90 00</div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Form */}
          <div style={{
            backgroundColor: 'var(--bg-card)',
            borderRadius: '8px',
            padding: '40px',
            border: '1px solid var(--border-dark)',
            boxShadow: '0 20px 40px rgba(0,0,0,0.5)'
          }}>
            <h3 style={{ fontSize: '1.4rem', fontWeight: '700', marginBottom: '24px', fontFamily: 'var(--font-display)' }}>
              Send Us A Dispatch
            </h3>

            {/* Selected plan badge */}
            {selectedPlan && (
              <div style={{
                backgroundColor: 'rgba(23, 190, 210, 0.12)',
                border: '1px solid var(--accent)',
                borderRadius: '6px',
                padding: '12px 16px',
                marginBottom: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                color: '#ffffff',
                fontSize: '0.85rem'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Sparkles size={16} color="var(--accent)" />
                  <span>Selected: <strong>{selectedPlan.name} Plan ({selectedPlan.price})</strong></span>
                </div>
                {onClearPlan && (
                  <button onClick={onClearPlan} style={{ color: 'var(--text-muted)', padding: '2px' }} aria-label="Clear selected plan">
                    <X size={16} />
                  </button>
                )}
              </div>
            )}

            {/* Status alert */}
            {status.success !== null && (
              <div style={{
                padding: '14px 16px',
                borderRadius: '6px',
                marginBottom: '24px',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '12px',
                backgroundColor: status.success ? 'rgba(34, 197, 94, 0.15)' : 'rgba(239, 68, 68, 0.15)',
                border: `1px solid ${status.success ? 'rgba(34, 197, 94, 0.4)' : 'rgba(239, 68, 68, 0.4)'}`,
                color: status.success ? '#4ade80' : '#f87171',
                fontSize: '0.9rem',
                lineHeight: 1.5
              }}>
                <div style={{ marginTop: '2px' }}>
                  {status.success ? <CheckCircle2 size={18} /> : <AlertCircle size={18} />}
                </div>
                <div>{status.message}</div>
              </div>
            )}

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Your Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    minLength={2}
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="E.g. Elena Rostova"
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      backgroundColor: 'rgba(0, 0, 0, 0.3)',
                      border: `1px solid ${fieldErrors.name ? '#ef4444' : 'var(--border-dark)'}`,
                      borderRadius: '4px',
                      color: '#ffffff',
                      outline: 'none',
                      fontFamily: 'inherit'
                    }}
                  />
                  {fieldErrors.name && (
                    <span style={{ fontSize: '0.78rem', color: '#f87171', marginTop: '4px', display: 'block' }}>
                      {fieldErrors.name}
                    </span>
                  )}
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="elena@studio.com"
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      backgroundColor: 'rgba(0, 0, 0, 0.3)',
                      border: `1px solid ${fieldErrors.email ? '#ef4444' : 'var(--border-dark)'}`,
                      borderRadius: '4px',
                      color: '#ffffff',
                      outline: 'none',
                      fontFamily: 'inherit'
                    }}
                  />
                  {fieldErrors.email && (
                    <span style={{ fontSize: '0.78rem', color: '#f87171', marginTop: '4px', display: 'block' }}>
                      {fieldErrors.email}
                    </span>
                  )}
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Architecture Consultation / Web Application"
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    backgroundColor: 'rgba(0, 0, 0, 0.3)',
                    border: '1px solid var(--border-dark)',
                    borderRadius: '4px',
                    color: '#ffffff',
                    outline: 'none',
                    fontFamily: 'inherit'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Message *</label>
                <textarea
                  name="message"
                  required
                  minLength={2}
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Detail the scope and objectives of your inquiry..."
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    backgroundColor: 'rgba(0, 0, 0, 0.3)',
                    border: `1px solid ${fieldErrors.message ? '#ef4444' : 'var(--border-dark)'}`,
                    borderRadius: '4px',
                    color: '#ffffff',
                    outline: 'none',
                    fontFamily: 'inherit',
                    resize: 'vertical'
                  }}
                />
                {fieldErrors.message && (
                  <span style={{ fontSize: '0.78rem', color: '#f87171', marginTop: '4px', display: 'block' }}>
                    {fieldErrors.message}
                  </span>
                )}
              </div>

              <button
                type="submit"
                disabled={status.loading}
                className="btn-accent"
                id="submit-contact-btn"
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  opacity: status.loading ? 0.7 : 1
                }}
              >
                {status.loading ? (
                  <>
                    <Loader2 size={18} className="animate-spin" /> Transmitting...
                  </>
                ) : (
                  <>
                    <Send size={18} /> Transmit Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}