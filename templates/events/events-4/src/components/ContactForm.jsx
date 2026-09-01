import React, { useState } from 'react';
import Button from './Button';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 4000);
  };

  const inputStyle = {
    width: '100%',
    padding: '0.85rem 1rem',
    background: 'var(--color-bg-black)',
    border: '1px solid rgba(255, 255, 255, 0.12)',
    borderRadius: '4px',
    color: '#FFF',
    fontSize: '0.95rem',
    outline: 'none'
  };

  return (
    <div style={{ background: 'var(--color-bg-card)', padding: '2.5rem', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '6px' }}>
      <h3 style={{ fontSize: '1.6rem', color: '#FFF', marginBottom: '1.5rem' }}>
        SEND US A MESSAGE
      </h3>

      {submitted ? (
        <div style={{ background: 'rgba(255, 230, 0, 0.15)', border: '1px solid var(--color-yellow)', color: 'var(--color-yellow)', padding: '1.5rem', textAlign: 'center', borderRadius: '4px' }}>
          <h4 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>MESSAGE SENT!</h4>
          <p style={{ color: '#FFF', fontSize: '0.95rem' }}>Thank you for reaching out to Vortex Forge Fitness. Our team will contact you within 24 hours.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <div>
            <label style={{ display: 'block', color: 'var(--color-yellow)', fontSize: '0.8rem', fontFamily: 'Outfit, sans-serif', fontWeight: '700', marginBottom: '0.3rem' }}>YOUR NAME *</label>
            <input
              type="text"
              required
              placeholder="e.g. Arin Vale"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              style={inputStyle}
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
            <div>
              <label style={{ display: 'block', color: 'var(--color-yellow)', fontSize: '0.8rem', fontFamily: 'Outfit, sans-serif', fontWeight: '700', marginBottom: '0.3rem' }}>EMAIL ADDRESS *</label>
              <input
                type="email"
                required
                placeholder="name@domain.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                style={inputStyle}
              />
            </div>
            <div>
              <label style={{ display: 'block', color: 'var(--color-yellow)', fontSize: '0.8rem', fontFamily: 'Outfit, sans-serif', fontWeight: '700', marginBottom: '0.3rem' }}>PHONE NUMBER</label>
              <input
                type="tel"
                placeholder="+91 XXXXX XXXXX"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                style={inputStyle}
              />
            </div>
          </div>

          <div>
            <label style={{ display: 'block', color: 'var(--color-yellow)', fontSize: '0.8rem', fontFamily: 'Outfit, sans-serif', fontWeight: '700', marginBottom: '0.3rem' }}>SUBJECT *</label>
            <input
              type="text"
              required
              placeholder="Event Query / Gym Membership"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              style={inputStyle}
            />
          </div>

          <div>
            <label style={{ display: 'block', color: 'var(--color-yellow)', fontSize: '0.8rem', fontFamily: 'Outfit, sans-serif', fontWeight: '700', marginBottom: '0.3rem' }}>MESSAGE *</label>
            <textarea
              rows={5}
              required
              placeholder="Write your message here..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              style={{ ...inputStyle, resize: 'vertical' }}
            />
          </div>

          <Button type="submit" variant="primary" style={{ padding: '0.9rem' }}>
            SEND MESSAGE
          </Button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
