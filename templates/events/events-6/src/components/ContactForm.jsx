import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import Modal from './Modal';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
    }
  };

  const handleClose = () => {
    setSubmitted(false);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <div style={{ background: 'var(--bg-card)', border: 'var(--border-gold)', borderRadius: 'var(--radius-lg)', padding: '40px', position: 'relative', zIndex: 10 }}>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-light)', marginBottom: '8px', fontWeight: 700 }}>
              YOUR NAME *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Rahul Sharma"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              style={{ width: '100%', padding: '14px 18px', background: '#0D0D0D', border: '1px solid #333', borderRadius: 'var(--radius-sm)', color: '#FFF' }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-light)', marginBottom: '8px', fontWeight: 700 }}>
              EMAIL ADDRESS *
            </label>
            <input
              type="email"
              required
              placeholder="rahul@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              style={{ width: '100%', padding: '14px 18px', background: '#0D0D0D', border: '1px solid #333', borderRadius: 'var(--radius-sm)', color: '#FFF' }}
            />
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-light)', marginBottom: '8px', fontWeight: 700 }}>
              PHONE NUMBER
            </label>
            <input
              type="tel"
              placeholder="+91 98765 43210"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              style={{ width: '100%', padding: '14px 18px', background: '#0D0D0D', border: '1px solid #333', borderRadius: 'var(--radius-sm)', color: '#FFF' }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-light)', marginBottom: '8px', fontWeight: 700 }}>
              SUBJECT
            </label>
            <input
              type="text"
              placeholder="Ticket Inquiry / Partnership / VIP"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              style={{ width: '100%', padding: '14px 18px', background: '#0D0D0D', border: '1px solid #333', borderRadius: 'var(--radius-sm)', color: '#FFF' }}
            />
          </div>
        </div>

        <div>
          <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-light)', marginBottom: '8px', fontWeight: 700 }}>
            MESSAGE *
          </label>
          <textarea
            required
            rows={5}
            placeholder="Type your message here..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            style={{ width: '100%', padding: '14px 18px', background: '#0D0D0D', border: '1px solid #333', borderRadius: 'var(--radius-sm)', color: '#FFF', resize: 'vertical' }}
          />
        </div>

        <button type="submit" className="btn-primary" style={{ marginTop: '10px' }}>
          <Send size={18} /> SEND MESSAGE
        </button>
      </form>

      {/* Success Modal */}
      {submitted && (
        <Modal onClose={handleClose}>
          <div className="modal-icon-success">
            <CheckCircle2 size={40} />
          </div>
          <h2 style={{ fontFamily: 'var(--font-display)', color: '#FFF', fontSize: '2rem', marginBottom: '12px' }}>
            MESSAGE SENT
          </h2>
          <p style={{ color: 'var(--text-light)', fontSize: '1.1rem', marginBottom: '24px' }}>
            Thanks for reaching out to Velora Live. Our event team will respond to your query shortly.
          </p>
          <button className="btn-primary" onClick={handleClose}>
            CLOSE
          </button>
        </Modal>
      )}
    </div>
  );
}
