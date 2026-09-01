import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, Loader2, Mail, MessageSquare, User, Tag } from 'lucide-react';
import { apiService } from '../services/api';

export default function MessengerApp() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [sendStage, setSendStage] = useState('IDLE'); // IDLE, PROCESSING, SENDING, DELIVERED, ERROR
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
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', height: '100%' }}>
      {/* Messenger Header */}
      <div style={{
        backgroundColor: 'var(--soft-gray)',
        borderRadius: '12px',
        padding: '14px 18px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <MessageSquare size={20} color="#F97316" />
          <h2 style={{ fontSize: '16px', fontWeight: 800, color: 'var(--text-main)' }}>
            NEW MESSAGE TRANSMISSION
          </h2>
        </div>
        <span style={{ fontSize: '11px', fontWeight: 700, color: '#10B981', backgroundColor: 'rgba(16, 185, 129, 0.12)', padding: '4px 10px', borderRadius: '99px' }}>
          SPRING BOOT REST API CONNECTED
        </span>
      </div>

      {/* Main Form or Delivered Banner */}
      {sendStage === 'DELIVERED' ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass-card"
          style={{
            padding: '36px',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '16px'
          }}
        >
          <div style={{
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            backgroundColor: 'rgba(16, 185, 129, 0.15)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#10B981'
          }}>
            <CheckCircle2 size={40} />
          </div>

          <h2 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--text-main)' }}>
            ✓ MESSAGE DELIVERED
          </h2>

          <p style={{ fontSize: '14px', color: 'var(--text-muted)', maxWdith: '480px', lineHeight: '1.6' }}>
            {responseMsg}
          </p>

          <button className="accent-btn" onClick={handleReset} style={{ marginTop: '12px' }}>
            Send Another Message
          </button>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px' }}>
            <div>
              <label style={{ fontSize: '12px', fontWeight: 800, textTransform: 'uppercase', color: 'var(--text-muted)', display: 'block', marginBottom: '6px' }}>
                YOUR NAME
              </label>
              <div style={{ position: 'relative' }}>
                <User size={16} color="#64748B" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
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
                    padding: '10px 12px 10px 36px',
                    borderRadius: '8px',
                    border: '1px solid var(--border-color)',
                    backgroundColor: 'var(--bg-surface)',
                    color: 'var(--text-main)',
                    fontSize: '13px',
                    outline: 'none'
                  }}
                />
              </div>
            </div>

            <div>
              <label style={{ fontSize: '12px', fontWeight: 800, textTransform: 'uppercase', color: 'var(--text-muted)', display: 'block', marginBottom: '6px' }}>
                EMAIL ADDRESS
              </label>
              <div style={{ position: 'relative' }}>
                <Mail size={16} color="#64748B" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
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
                    padding: '10px 12px 10px 36px',
                    borderRadius: '8px',
                    border: '1px solid var(--border-color)',
                    backgroundColor: 'var(--bg-surface)',
                    color: 'var(--text-main)',
                    fontSize: '13px',
                    outline: 'none'
                  }}
                />
              </div>
            </div>
          </div>

          <div>
            <label style={{ fontSize: '12px', fontWeight: 800, textTransform: 'uppercase', color: 'var(--text-muted)', display: 'block', marginBottom: '6px' }}>
              SUBJECT
            </label>
            <div style={{ position: 'relative' }}>
              <Tag size={16} color="#64748B" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
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
                  padding: '10px 12px 10px 36px',
                  borderRadius: '8px',
                  border: '1px solid var(--border-color)',
                  backgroundColor: 'var(--bg-surface)',
                  color: 'var(--text-main)',
                  fontSize: '13px',
                  outline: 'none'
                }}
              />
            </div>
          </div>

          <div>
            <label style={{ fontSize: '12px', fontWeight: 800, textTransform: 'uppercase', color: 'var(--text-muted)', display: 'block', marginBottom: '6px' }}>
              MESSAGE CONTENT
            </label>
            <textarea
              name="message"
              required
              rows={4}
              placeholder="Hi Vishal, I came across your Personal Operating System portfolio and would love to connect..."
              value={formData.message}
              onChange={handleChange}
              disabled={sendStage !== 'IDLE'}
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: '8px',
                border: '1px solid var(--border-color)',
                backgroundColor: 'var(--bg-surface)',
                color: 'var(--text-main)',
                fontSize: '13px',
                outline: 'none',
                resize: 'none',
                fontFamily: 'var(--font-sans)'
              }}
            />
          </div>

          {/* Animated Status Action Button */}
          <button
            type="submit"
            className="accent-btn"
            disabled={sendStage !== 'IDLE'}
            style={{
              width: '100%',
              justifyContent: 'center',
              padding: '14px',
              fontSize: '14px',
              cursor: sendStage !== 'IDLE' ? 'wait' : 'pointer'
            }}
          >
            {sendStage === 'IDLE' && (
              <>
                <Send size={18} /> SEND MESSAGE
              </>
            )}

            {sendStage === 'PROCESSING' && (
              <>
                <Loader2 size={18} className="spin" style={{ animation: 'spin 1s linear infinite' }} />
                <span>Message → Processing...</span>
              </>
            )}

            {sendStage === 'SENDING' && (
              <>
                <Loader2 size={18} style={{ animation: 'spin 1s linear infinite' }} />
                <span>Processing → Sending to Backend REST API...</span>
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
