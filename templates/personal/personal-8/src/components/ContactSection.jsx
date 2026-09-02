import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, Loader2, Mail, MessageSquare, User, Tag, MapPin } from 'lucide-react';
import { apiService } from '../services/api';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [sendStage, setSendStage] = useState('IDLE');
  const [responseMsg, setResponseMsg] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setSendStage('PROCESSING');

    setTimeout(async () => {
      setSendStage('SENDING');
      
      const res = await apiService.submitContact(formData);

      setTimeout(() => {
        if (res && res.success) {
          setSendStage('DELIVERED');
          setResponseMsg(res.message);
        } else {
          setSendStage('ERROR');
        }
      }, 900);
    }, 700);
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', subject: '', message: '' });
    setSendStage('IDLE');
    setResponseMsg('');
  };

  return (
    <section id="contact" style={{ backgroundColor: 'var(--soft-gray)', borderTop: '1px solid var(--border-color)' }}>
      <div className="section-container">
        
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span className="section-tag">
            <Mail size={14} /> GET IN TOUCH
          </span>
          <h2 className="section-title">Let's Connect & Build</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Have a project in mind or interested in hiring? Transmit a direct message to my Java Spring Boot backend service.
          </p>
        </div>

        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          {sendStage === 'DELIVERED' ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="website-card"
              style={{
                padding: '48px',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '20px'
              }}
            >
              <div style={{
                width: '72px',
                height: '72px',
                borderRadius: '50%',
                backgroundColor: 'rgba(16, 185, 129, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#10B981'
              }}>
                <CheckCircle2 size={48} />
              </div>

              <h2 style={{ fontSize: '26px', fontWeight: 900, color: 'var(--text-main)' }}>
                ✓ MESSAGE DELIVERED
              </h2>

              <p style={{ fontSize: '15px', color: 'var(--text-muted)', lineHeight: '1.7', maxWidth: '500px' }}>
                {responseMsg}
              </p>

              <button className="btn-primary" onClick={handleReset} style={{ marginTop: '12px' }}>
                Send Another Message
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="website-card" style={{ padding: '36px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '18px' }}>
                <div>
                  <label style={{ fontSize: '12px', fontWeight: 800, textTransform: 'uppercase', color: 'var(--text-muted)', display: 'block', marginBottom: '8px' }}>
                    YOUR NAME
                  </label>
                  <div style={{ position: 'relative' }}>
                    <User size={18} color="#64748B" style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }} />
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.name}
                      onChange={handleChange}
                      disabled={sendStage !== 'IDLE'}
                      style={{
                        width: '100%',
                        padding: '12px 14px 12px 42px',
                        borderRadius: '10px',
                        border: '1px solid var(--border-color)',
                        backgroundColor: 'var(--bg-surface)',
                        color: 'var(--text-main)',
                        fontSize: '14px',
                        outline: 'none'
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ fontSize: '12px', fontWeight: 800, textTransform: 'uppercase', color: 'var(--text-muted)', display: 'block', marginBottom: '8px' }}>
                    EMAIL ADDRESS
                  </label>
                  <div style={{ position: 'relative' }}>
                    <Mail size={18} color="#64748B" style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }} />
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      disabled={sendStage !== 'IDLE'}
                      style={{
                        width: '100%',
                        padding: '12px 14px 12px 42px',
                        borderRadius: '10px',
                        border: '1px solid var(--border-color)',
                        backgroundColor: 'var(--bg-surface)',
                        color: 'var(--text-main)',
                        fontSize: '14px',
                        outline: 'none'
                      }}
                    />
                  </div>
                </div>
              </div>

              <div>
                <label style={{ fontSize: '12px', fontWeight: 800, textTransform: 'uppercase', color: 'var(--text-muted)', display: 'block', marginBottom: '8px' }}>
                  SUBJECT
                </label>
                <div style={{ position: 'relative' }}>
                  <Tag size={18} color="#64748B" style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }} />
                  <input
                    type="text"
                    name="subject"
                    required
                    placeholder="Project Inquiry / Job Opportunity"
                    value={formData.subject}
                    onChange={handleChange}
                    disabled={sendStage !== 'IDLE'}
                    style={{
                      width: '100%',
                      padding: '12px 14px 12px 42px',
                      borderRadius: '10px',
                      border: '1px solid var(--border-color)',
                      backgroundColor: 'var(--bg-surface)',
                      color: 'var(--text-main)',
                      fontSize: '14px',
                      outline: 'none'
                    }}
                  />
                </div>
              </div>

              <div>
                <label style={{ fontSize: '12px', fontWeight: 800, textTransform: 'uppercase', color: 'var(--text-muted)', display: 'block', marginBottom: '8px' }}>
                  MESSAGE CONTENT
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Hi Vishal, I'd love to connect regarding..."
                  value={formData.message}
                  onChange={handleChange}
                  disabled={sendStage !== 'IDLE'}
                  style={{
                    width: '100%',
                    padding: '14px',
                    borderRadius: '10px',
                    border: '1px solid var(--border-color)',
                    backgroundColor: 'var(--bg-surface)',
                    color: 'var(--text-main)',
                    fontSize: '14px',
                    outline: 'none',
                    resize: 'none',
                    fontFamily: 'var(--font-sans)'
                  }}
                />
              </div>

              <button
                type="submit"
                className="btn-primary"
                disabled={sendStage !== 'IDLE'}
                style={{
                  width: '100%',
                  justifyContent: 'center',
                  padding: '14px',
                  fontSize: '15px'
                }}
              >
                {sendStage === 'IDLE' && (
                  <>
                    <Send size={18} /> SEND MESSAGE TO SPRING BOOT BACKEND
                  </>
                )}

                {sendStage === 'PROCESSING' && (
                  <>
                    <Loader2 size={18} style={{ animation: 'spin 1s linear infinite' }} />
                    <span>Processing Message Payload...</span>
                  </>
                )}

                {sendStage === 'SENDING' && (
                  <>
                    <Loader2 size={18} style={{ animation: 'spin 1s linear infinite' }} />
                    <span>Transmitting to Spring Boot REST Service...</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}
