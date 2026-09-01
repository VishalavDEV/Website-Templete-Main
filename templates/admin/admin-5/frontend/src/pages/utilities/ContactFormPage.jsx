import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const ContactFormPage = () => {
  const { addToast } = useApp();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addToast('Thank you! Your message has been sent to support.', 'success');
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="contact-page" style={{ maxWidth: 900, margin: '0 auto' }}>
      <div className="page-header" style={{ marginBottom: 24 }}>
        <h1 style={{ fontSize: 24, fontWeight: 800 }}>Contact Technical Support</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: 14 }}>Have a question or request custom enterprise deployment assistance?</p>
      </div>

      <div className="grid-12">
        <div className="col-5 glass-card" style={{ padding: 24, display: 'flex', flexDirection: 'column', gap: 20 }}>
          <h3 style={{ fontSize: 18, fontWeight: 800 }}>Get In Touch</h3>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <Mail color="var(--brand-primary)" size={20} />
            <div>
              <strong>Email Us</strong>
              <p style={{ fontSize: 13, color: 'var(--text-muted)' }}>support@tssmartadmin.io</p>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <Phone color="var(--brand-primary)" size={20} />
            <div>
              <strong>Call HQ</strong>
              <p style={{ fontSize: 13, color: 'var(--text-muted)' }}>+1 (800) 555-0199</p>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <MapPin color="var(--brand-primary)" size={20} />
            <div>
              <strong>HQ Address</strong>
              <p style={{ fontSize: 13, color: 'var(--text-muted)' }}>100 Technology Way, San Francisco, CA</p>
            </div>
          </div>
        </div>

        <div className="col-7 glass-card" style={{ padding: 24 }}>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Your Name</label>
              <input type="text" placeholder="John Doe" value={name} onChange={e => setName(e.target.value)} required />
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input type="email" placeholder="john@example.com" value={email} onChange={e => setEmail(e.target.value)} required />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea rows={4} placeholder="Describe your question..." value={message} onChange={e => setMessage(e.target.value)} required />
            </div>
            <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: 8 }}>
              <Send size={16} /> Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
