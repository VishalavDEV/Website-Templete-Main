import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Send, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  Sparkles 
} from 'lucide-react';
import confetti from 'canvas-confetti';

const INQUIRY_TYPES = [
  'Enterprise GPU Cluster',
  'Spatial 3D / NeRF API',
  'Autonomous Swarms',
  'Custom Model Compilation',
  'VC / Partnership',
];

export default function Contact({ onShowToast }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    inquiryType: INQUIRY_TYPES[0],
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      if (onShowToast) onShowToast('⚠️ Please fill in all required fields.');
      return;
    }

    setIsSubmitting(true);

    // Simulate instant smooth processing
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      confetti({
        particleCount: 85,
        spread: 75,
        origin: { y: 0.6 },
        colors: ['#00E5FF', '#8A2BE2', '#00FFA3']
      });

      if (onShowToast) {
        onShowToast(`🚀 Thank you, ${formData.name}! An engineer will connect within 15 mins.`);
      }
    }, 900);
  };

  return (
    <section id="contact" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="section-wrapper">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <div className="section-tag">
            <Sparkles size={14} />
            <span>DIRECT ARCHITECT ACCESS</span>
          </div>
          <h2 className="section-title">
            Connect with Our <br />
            <span className="text-gradient-cyan">Neural Infrastructure Engineers</span>
          </h2>
          <p className="section-description">
            Whether you need dedicated GPU allocations, custom spatial kernels, or high-throughput enterprise SLAs, we are ready to assist.
          </p>
        </motion.div>

        {/* Contact Split Grid */}
        <div
          className="contact-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
            gap: '38px',
            alignItems: 'stretch',
          }}
        >
          {/* Left Column: Direct Info & System Status */}
          <motion.div
            className="glass-panel-elevated"
            style={{
              padding: '38px',
              borderRadius: '26px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              border: '1px solid rgba(255, 255, 255, 0.08)',
            }}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <h3 style={{ fontSize: '1.45rem', color: '#FFFFFF', marginBottom: '16px' }}>
                Engineering Operations HQ
              </h3>
              <p style={{ fontSize: '0.94rem', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '34px' }}>
                Our solutions engineering team operates 24/7/365 across San Francisco, Tokyo, and Zurich with median response times under 12 minutes.
              </p>

              {/* Direct Info List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '14px',
                      background: 'rgba(0, 229, 255, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--neon-cyan)',
                      border: '1px solid rgba(0, 229, 255, 0.25)',
                    }}
                  >
                    <Mail size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.74rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>DIRECT INQUIRY</div>
                    <div style={{ fontSize: '0.96rem', fontWeight: 600, color: '#FFFFFF' }}>solutions@synapse-neural.io</div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '14px',
                      background: 'rgba(138, 43, 226, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#8A2BE2',
                      border: '1px solid rgba(138, 43, 226, 0.25)',
                    }}
                  >
                    <MapPin size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.74rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>GLOBAL CAMPUS</div>
                    <div style={{ fontSize: '0.96rem', fontWeight: 600, color: '#FFFFFF' }}>450 Mission Street, San Francisco, CA</div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '14px',
                      background: 'rgba(0, 255, 163, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--neon-emerald)',
                      border: '1px solid rgba(0, 255, 163, 0.25)',
                    }}
                  >
                    <Clock size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.74rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>MEDIAN RESPONSE</div>
                    <div style={{ fontSize: '0.96rem', fontWeight: 600, color: 'var(--neon-emerald)' }}>&lt; 12 Minutes (SLA Guaranteed)</div>
                  </div>
                </div>
              </div>
            </div>

            {/* System Status Interactive Card */}
            <div
              style={{
                marginTop: '34px',
                padding: '20px',
                borderRadius: '18px',
                background: 'rgba(0, 0, 0, 0.45)',
                border: '1px solid rgba(0, 229, 255, 0.22)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#00FFA3', boxShadow: '0 0 8px #00FFA3' }} />
                  <span style={{ fontSize: '0.82rem', fontFamily: 'var(--font-mono)', color: '#FFFFFF', fontWeight: 600 }}>ALL SYSTEMS OPERATIONAL</span>
                </div>
                <span style={{ fontSize: '0.76rem', color: 'var(--neon-cyan)', fontFamily: 'var(--font-mono)' }}>99.999%</span>
              </div>
              <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                250+ Edge clusters currently processing global inference traffic with zero anomalies.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Interactive Glass Contact Form */}
          <motion.div
            className="glass-panel-elevated"
            style={{
              padding: '38px',
              borderRadius: '26px',
              border: '1px solid rgba(0, 229, 255, 0.3)',
              boxShadow: '0 24px 60px rgba(0, 0, 0, 0.6), 0 0 35px rgba(0, 229, 255, 0.12)',
            }}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {!submitted ? (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
                {/* Inquiry Type Pills */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '10px' }}>
                    SELECT WORKLOAD TYPE
                  </label>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {INQUIRY_TYPES.map((type) => (
                      <button
                        type="button"
                        key={type}
                        onClick={() => setFormData({ ...formData, inquiryType: type })}
                        style={{
                          padding: '7px 15px',
                          borderRadius: '10px',
                          fontSize: '0.78rem',
                          fontFamily: 'var(--font-mono)',
                          background: formData.inquiryType === type ? 'rgba(0, 229, 255, 0.16)' : 'rgba(255, 255, 255, 0.03)',
                          border: formData.inquiryType === type ? '1px solid var(--neon-cyan)' : '1px solid rgba(255, 255, 255, 0.08)',
                          color: formData.inquiryType === type ? 'var(--neon-cyan)' : 'var(--text-secondary)',
                          cursor: 'pointer',
                          transition: 'all 0.2s ease',
                          fontWeight: 600,
                        }}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name & Email Row */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '6px' }}>
                      FULL NAME *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Alex Mercer"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '13px 16px',
                        borderRadius: '12px',
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid rgba(255, 255, 255, 0.12)',
                        color: '#FFFFFF',
                        fontSize: '0.92rem',
                        outline: 'none',
                      }}
                      onFocus={(e) => (e.target.style.borderColor = 'var(--neon-cyan)')}
                      onBlur={(e) => (e.target.style.borderColor = 'rgba(255, 255, 255, 0.12)')}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '6px' }}>
                      WORK EMAIL *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '13px 16px',
                        borderRadius: '12px',
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid rgba(255, 255, 255, 0.12)',
                        color: '#FFFFFF',
                        fontSize: '0.92rem',
                        outline: 'none',
                      }}
                      onFocus={(e) => (e.target.style.borderColor = 'var(--neon-cyan)')}
                      onBlur={(e) => (e.target.style.borderColor = 'rgba(255, 255, 255, 0.12)')}
                    />
                  </div>
                </div>

                {/* Company / Team */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '6px' }}>
                    COMPANY / TEAM NAME
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Apex Robotics Labs"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '13px 16px',
                      borderRadius: '12px',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      color: '#FFFFFF',
                      fontSize: '0.92rem',
                      outline: 'none',
                    }}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--neon-cyan)')}
                    onBlur={(e) => (e.target.style.borderColor = 'rgba(255, 255, 255, 0.12)')}
                  />
                </div>

                {/* Message */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '6px' }}>
                    PROJECT REQUIREMENTS / MESSAGE *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Describe your model specifications, target concurrency, or custom deployment requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '13px 16px',
                      borderRadius: '12px',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      color: '#FFFFFF',
                      fontSize: '0.92rem',
                      outline: 'none',
                      resize: 'vertical',
                    }}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--neon-cyan)')}
                    onBlur={(e) => (e.target.style.borderColor = 'rgba(255, 255, 255, 0.12)')}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary"
                  style={{ width: '100%', padding: '16px', fontSize: '1rem', marginTop: '6px', borderRadius: '14px' }}
                >
                  <Send size={18} />
                  <span>{isSubmitting ? 'Transmitting Request...' : 'Send Message to Engineering'}</span>
                </button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{
                  textAlign: 'center',
                  padding: '42px 20px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '18px',
                }}
              >
                <div
                  style={{
                    width: '68px',
                    height: '68px',
                    borderRadius: '50%',
                    background: 'rgba(0, 255, 163, 0.15)',
                    border: '1px solid var(--neon-emerald)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--neon-emerald)',
                    boxShadow: '0 0 28px rgba(0, 255, 163, 0.35)',
                  }}
                >
                  <CheckCircle2 size={34} />
                </div>

                <h3 style={{ fontSize: '1.55rem', color: '#FFFFFF' }}>Transmission Received!</h3>
                <p style={{ color: 'var(--text-secondary)', maxWidth: '420px', lineHeight: 1.65 }}>
                  Thank you, <strong style={{ color: '#FFFFFF' }}>{formData.name}</strong>. Your request for <span style={{ color: 'var(--neon-cyan)' }}>{formData.inquiryType}</span> has been dispatched to our principal solutions engineer.
                </p>

                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', company: '', inquiryType: INQUIRY_TYPES[0], message: '' });
                  }}
                  className="btn-secondary"
                  style={{ marginTop: '16px', padding: '12px 24px', fontSize: '0.9rem', borderRadius: '12px' }}
                >
                  Send Another Inquiry
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
