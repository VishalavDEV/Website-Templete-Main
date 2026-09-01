import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send, CheckCircle2, MessageSquare } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Runner Support',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ background: 'var(--bg-midnight)', minHeight: '100vh', paddingTop: '40px', paddingBottom: '90px' }}>
      <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto', padding: '0 24px' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div className="section-tag" style={{ justifyContent: 'center' }}>GET IN TOUCH</div>
          <h1 className="font-display text-gradient" style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)' }}>
            CONTACT VAYORA RUNFEST
          </h1>
          <p style={{ color: 'var(--soft-grey)', maxWidth: '640px', margin: '16px auto 0 auto', fontSize: '1.05rem' }}>
            Our race administration and runner support teams are here to assist with all inquiries.
          </p>
        </div>

        {/* Contact Info Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
          marginBottom: '60px'
        }}>
          {[
            { title: "Event Office", desc: "Vayora Runfest Secretariat, Mount Road, Anna Salai, Chennai, Tamil Nadu", icon: MapPin },
            { title: "Runner Support Hotline", desc: "+91 90000 78901 (Mon-Sat, 9 AM - 6 PM IST)", icon: Phone },
            { title: "General Email", desc: "hello@vayorarunfest.example", icon: Mail },
            { title: "Sponsorship & Media", desc: "sponsors@vayorarunfest.example", icon: MessageSquare }
          ].map((card, idx) => (
            <div key={idx} className="glass-panel" style={{ padding: '28px', borderLeft: '4px solid var(--marathon-red)' }}>
              <card.icon size={26} color="var(--bright-orange)" style={{ marginBottom: '12px' }} />
              <h3 style={{ color: '#FFFFFF', fontSize: '1.15rem', fontWeight: 800, marginBottom: '6px' }}>
                {card.title}
              </h3>
              <p style={{ color: 'var(--soft-grey)', fontSize: '0.88rem', lineHeight: 1.5 }}>
                {card.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="glass-panel" style={{ maxWidth: '720px', margin: '0 auto', padding: '40px 32px' }}>
          <h2 className="font-display" style={{ fontSize: '2.4rem', color: '#FFFFFF', textAlign: 'center', marginBottom: '24px' }}>
            SEND US A MESSAGE
          </h2>

          {!submitted ? (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
                <div>
                  <label style={{ display: 'block', color: 'var(--warm-white)', fontSize: '0.85rem', fontWeight: 600, marginBottom: '8px' }}>
                    Full Name *
                  </label>
                  <input 
                    type="text" 
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your Name"
                    style={{ width: '100%', padding: '12px 16px', background: 'rgba(9,10,13,0.8)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '6px', color: '#FFF', outline: 'none' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', color: 'var(--warm-white)', fontSize: '0.85rem', fontWeight: 600, marginBottom: '8px' }}>
                    Email Address *
                  </label>
                  <input 
                    type="email" 
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="name@example.com"
                    style={{ width: '100%', padding: '12px 16px', background: 'rgba(9,10,13,0.8)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '6px', color: '#FFF', outline: 'none' }}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
                <div>
                  <label style={{ display: 'block', color: 'var(--warm-white)', fontSize: '0.85rem', fontWeight: 600, marginBottom: '8px' }}>
                    Phone Number
                  </label>
                  <input 
                    type="tel" 
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    style={{ width: '100%', padding: '12px 16px', background: 'rgba(9,10,13,0.8)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '6px', color: '#FFF', outline: 'none' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', color: 'var(--warm-white)', fontSize: '0.85rem', fontWeight: 600, marginBottom: '8px' }}>
                    Inquiry Department
                  </label>
                  <select
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    style={{ width: '100%', padding: '12px 16px', background: 'rgba(9,10,13,0.8)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '6px', color: '#FFF', outline: 'none' }}
                  >
                    <option value="Runner Support">Runner Support</option>
                    <option value="Bib Expo Inquiry">Bib Expo Inquiry</option>
                    <option value="Sponsorship">Sponsorship Partnership</option>
                    <option value="Media Enquiries">Media & Press</option>
                  </select>
                </div>
              </div>

              <div>
                <label style={{ display: 'block', color: 'var(--warm-white)', fontSize: '0.85rem', fontWeight: 600, marginBottom: '8px' }}>
                  Message *
                </label>
                <textarea 
                  rows={5}
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="How can we assist you?"
                  style={{ width: '100%', padding: '12px 16px', background: 'rgba(9,10,13,0.8)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '6px', color: '#FFF', outline: 'none', resize: 'vertical' }}
                />
              </div>

              <button type="submit" className="btn-primary" style={{ padding: '16px', fontSize: '1rem' }}>
                <Send size={18} /> SEND MESSAGE
              </button>
            </form>
          ) : (
            <div style={{ textAlign: 'center', padding: '30px 0' }}>
              <CheckCircle2 size={48} color="var(--bright-orange)" style={{ margin: '0 auto 16px auto' }} />
              <h3 style={{ color: '#FFF', fontSize: '1.6rem', fontWeight: 800 }}>MESSAGE SENT SUCCESSFULLY!</h3>
              <p style={{ color: 'var(--soft-grey)', marginTop: '8px' }}>
                Thank you <strong>{form.name}</strong>. Our runner support team will respond to {form.email} within 24 hours.
              </p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
