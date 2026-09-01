import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      return;
    }
    setStatus('success');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" style={{
      backgroundColor: '#121212',
      padding: '120px 40px',
      color: '#ffffff',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      boxSizing: 'border-box'
    }}>
      <div style={{
        maxWidth: '1000px',
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '60px'
      }}>
        {/* Left Side Details Details */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, cubicBezier: [0.16, 1, 0.3, 1] }}
        >
          <span style={{
            color: '#ff4a3b',
            fontSize: '0.75rem',
            fontWeight: '700',
            letterSpacing: '3px',
            textTransform: 'uppercase',
            fontFamily: "'Inter', sans-serif"
          }}>
            Contact
          </span>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'calc(2rem + 1vw)',
            fontWeight: '400',
            margin: '12px 0 24px 0',
            letterSpacing: '-0.5px'
          }}>
            Initiate a Creative Project
          </h2>
          <p style={{
            fontSize: '0.95rem',
            lineHeight: '1.8',
            opacity: 0.6,
            fontFamily: "'Inter', sans-serif",
            margin: '0 0 40px 0',
            fontWeight: '300'
          }}>
            For assignments, representation, image licensing, or general inquiries, please fill out the form or reach out directly via email.
          </p>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            fontFamily: "'Inter', sans-serif"
          }}>
            <div>
              <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', opacity: 0.4, letterSpacing: '1px' }}>Studio Email</span>
              <p style={{ margin: '4px 0 0 0', fontSize: '1.05rem', fontWeight: '500' }}>inquiries@tomkeene.com</p>
            </div>
            <div>
              <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', opacity: 0.4, letterSpacing: '1px' }}>Representation</span>
              <p style={{ margin: '4px 0 0 0', fontSize: '1.05rem', fontWeight: '500' }}>represent@keene-agency.com</p>
            </div>
          </div>
        </motion.div>

        {/* Right Side Form Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, cubicBezier: [0.16, 1, 0.3, 1] }}
        >
          <form onSubmit={handleSubmit} style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '24px'
          }}>
            {/* Input Name */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontSize: '0.75rem', fontWeight: '600', letterSpacing: '1px', textTransform: 'uppercase', opacity: 0.8 }}>Name</label>
              <input 
                type="text" 
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Enter your name"
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  padding: '16px',
                  borderRadius: '8px',
                  color: '#ffffff',
                  fontSize: '0.9rem',
                  outline: 'none',
                  transition: 'border-color 0.2s'
                }}
                onFocus={(e) => e.target.style.borderColor = '#ff4a3b'}
                onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.08)'}
              />
            </div>

            {/* Input Email */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontSize: '0.75rem', fontWeight: '600', letterSpacing: '1px', textTransform: 'uppercase', opacity: 0.8 }}>Email Address</label>
              <input 
                type="email" 
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="Enter your email address"
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  padding: '16px',
                  borderRadius: '8px',
                  color: '#ffffff',
                  fontSize: '0.9rem',
                  outline: 'none',
                  transition: 'border-color 0.2s'
                }}
                onFocus={(e) => e.target.style.borderColor = '#ff4a3b'}
                onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.08)'}
              />
            </div>

            {/* Input Message */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontSize: '0.75rem', fontWeight: '600', letterSpacing: '1px', textTransform: 'uppercase', opacity: 0.8 }}>Project Details</label>
              <textarea 
                rows="5"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Describe your project, dates, and concepts..."
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  padding: '16px',
                  borderRadius: '8px',
                  color: '#ffffff',
                  fontSize: '0.9rem',
                  outline: 'none',
                  transition: 'border-color 0.2s',
                  resize: 'vertical'
                }}
                onFocus={(e) => e.target.style.borderColor = '#ff4a3b'}
                onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.08)'}
              />
            </div>

            {/* Submit Button */}
            <button 
              type="submit"
              style={{
                background: '#ffffff',
                color: '#0a0a0a',
                border: 'none',
                padding: '16px',
                borderRadius: '99px',
                fontSize: '0.85rem',
                fontWeight: '700',
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = '#ff4a3b';
                e.target.style.color = '#ffffff';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = '#ffffff';
                e.target.style.color = '#0a0a0a';
              }}
            >
              Submit Inquiry
            </button>

            {/* Status alerts */}
            {status === 'success' && (
              <p style={{ color: '#4ade80', fontSize: '0.85rem', margin: 0, textAlign: 'center' }}>
                Thank you! Your inquiry was sent successfully.
              </p>
            )}
            {status === 'error' && (
              <p style={{ color: '#f87171', fontSize: '0.85rem', margin: 0, textAlign: 'center' }}>
                Please fill out all fields.
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
