import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Check } from 'lucide-react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSent(true);
  };

  return (
    <div style={{ padding: '120px 40px 80px 40px', maxWidth: '1000px', margin: '0 auto', minHeight: '80vh' }}>
      
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h2 style={{ fontFamily: 'Outfit', fontSize: '2.5rem', color: '#1e133e', fontWeight: 800 }}>Contact Us</h2>
        <p style={{ color: '#5c4e8c', fontSize: '1rem', marginTop: '6px' }}>
          Get in touch with the Lavender support team.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1.2fr 1.5fr))', gap: '50px', alignItems: 'start' }} className="contact-grid">
        
        {/* Info panel */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
          <h3 style={{ fontFamily: 'Outfit', fontSize: '1.5rem', color: '#1e133e' }}>Connect With Us</h3>
          
          <div style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: '#f1edff', color: '#7c5cff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Mail size={20} />
            </div>
            <div>
              <span style={{ fontSize: '0.8rem', color: '#8a7db3', display: 'block' }}>Email Support</span>
              <strong style={{ color: '#1e133e' }}>support@lavender.com</strong>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: '#f1edff', color: '#7c5cff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Phone size={20} />
            </div>
            <div>
              <span style={{ fontSize: '0.8rem', color: '#8a7db3', display: 'block' }}>Phone Helpline</span>
              <strong style={{ color: '#1e133e' }}>+1 (800) 123-LAVENDER</strong>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: '#f1edff', color: '#7c5cff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <MapPin size={20} />
            </div>
            <div>
              <span style={{ fontSize: '0.8rem', color: '#8a7db3', display: 'block' }}>HQ Location</span>
              <strong style={{ color: '#1e133e' }}>Lavender Tower, New York City</strong>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div style={{ backgroundColor: '#fff', border: '1px solid rgba(124,92,255,0.12)', borderRadius: '24px', padding: '36px', boxShadow: '0 8px 30px rgba(124,92,255,0.03)' }}>
          {sent ? (
            <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} style={{ textAlign: 'center', padding: '40px 0' }}>
              <div style={{ width: '56px', height: '56px', borderRadius: '50%', backgroundColor: '#f1edff', color: '#7c5cff', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px auto' }}>
                <Check size={26} />
              </div>
              <h4 style={{ fontFamily: 'Outfit', fontSize: '1.25rem', color: '#1e133e', fontWeight: 600 }}>Message Sent!</h4>
              <p style={{ color: '#8a7db3', fontSize: '0.9rem', marginTop: '6px' }}>Our support team will get back to you within 24 hours.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <h3 style={{ fontFamily: 'Outfit', fontSize: '1.25rem', color: '#1e133e', marginBottom: '10px' }}>Drop a Message</h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <label style={{ fontSize: '0.85rem', color: '#5c4e8c', fontWeight: 500 }}>Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="John Doe"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  style={{ padding: '12px 16px', borderRadius: '12px', border: '1.5px solid rgba(124,92,255,0.15)', outline: 'none', fontSize: '0.9rem' }}
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <label style={{ fontSize: '0.85rem', color: '#5c4e8c', fontWeight: 500 }}>Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="john@example.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  style={{ padding: '12px 16px', borderRadius: '12px', border: '1.5px solid rgba(124,92,255,0.15)', outline: 'none', fontSize: '0.9rem' }}
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <label style={{ fontSize: '0.85rem', color: '#5c4e8c', fontWeight: 500 }}>Message</label>
                <textarea
                  required
                  rows={4}
                  placeholder="How can we help you style your world?"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  style={{ padding: '12px 16px', borderRadius: '12px', border: '1.5px solid rgba(124,92,255,0.15)', outline: 'none', fontSize: '0.9rem', resize: 'none', fontFamily: 'Inter' }}
                />
              </div>

              <button type="submit" className="premium-btn" style={{ justifyContent: 'center', padding: '14px' }}>
                Send Message <Send size={14} />
              </button>
            </form>
          )}
        </div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Contact;
