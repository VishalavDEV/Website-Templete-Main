import React, { useState } from 'react';
import { MapPin, Phone, Mail, Compass, Shield, Clock } from 'lucide-react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent successfully. Our guest desk will reply within 24 hours.');
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  };

  return (
    <section id="contact" style={{ padding: '8rem 0', backgroundColor: 'var(--color-ivory)', position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="subtitle">Registry Desk</span>
          <h2>Contact & Registry</h2>
        </div>

        {/* Contact Split */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '5rem' }} className="contact-split">
          
          {/* Column 1: Info and Registry Specifications */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            <div>
              <span style={{ fontFamily: 'var(--font-serif-sc)', color: 'var(--color-brass)', fontSize: '0.8rem', letterSpacing: '0.15em', display: 'block', marginBottom: '0.6rem' }}>
                THE PROPERTY
              </span>
              <h3 style={{ fontSize: '1.8rem', color: 'var(--color-teak-dark)', marginBottom: '1.2rem' }}>
                Ananthara Heritage
              </h3>
              
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.2rem', fontSize: '0.95rem', fontWeight: 300 }}>
                <li style={{ display: 'flex', gap: '0.8rem', alignItems: 'start' }}>
                  <MapPin size={18} style={{ color: 'var(--color-brass)', flexShrink: 0, marginTop: '3px' }} />
                  <span style={{ color: 'var(--color-teak-light)' }}>Haridas Ji Ki Magri, Udaipur 313001, Rajasthan, India</span>
                </li>
                <li style={{ display: 'flex', gap: '0.8rem', alignItems: 'center' }}>
                  <Phone size={18} style={{ color: 'var(--color-brass)' }} />
                  <span style={{ color: 'var(--color-teak-light)' }}>+91 294 241000</span>
                </li>
                <li style={{ display: 'flex', gap: '0.8rem', alignItems: 'center' }}>
                  <Mail size={18} style={{ color: 'var(--color-brass)' }} />
                  <span style={{ color: 'var(--color-teak-light)' }}>concierge@anantharaheritage.com</span>
                </li>
              </ul>
            </div>

            {/* Check-In/Out */}
            <div 
              className="glass-card"
              style={{
                padding: '1.5rem',
                backgroundColor: 'var(--color-sandstone-light)',
                borderLeft: '4px solid var(--color-brass)',
                boxShadow: 'none'
              }}
            >
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'start' }}>
                <Clock size={20} style={{ color: 'var(--color-brass)', flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <h4 style={{ fontFamily: 'var(--font-serif-sc)', fontSize: '0.85rem', color: 'var(--color-teak-dark)', letterSpacing: '0.05em', marginBottom: '0.4rem' }}>
                    REGISTRY SCHEDULE
                  </h4>
                  <p style={{ fontSize: '0.88rem', color: 'var(--color-teak-light)', lineHeight: 1.5, fontWeight: 300 }}>
                    Check-In: 2:00 PM | Check-Out: 12:00 PM <br />
                    Early arrival and late registry departures are subject to suite availability.
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media Link Icons */}
            <div>
              <span style={{ fontFamily: 'var(--font-serif-sc)', color: 'var(--color-brass)', fontSize: '0.8rem', letterSpacing: '0.15em', display: 'block', marginBottom: '1rem' }}>
                CONNECT WITH US
              </span>
              <div style={{ display: 'flex', gap: '1.2rem', fontFamily: 'var(--font-serif-sc)', fontSize: '0.85rem' }}>
                <a href="#" style={{ color: 'var(--color-teak-dark)' }} onMouseEnter={(e) => e.target.style.color = 'var(--color-brass)'} onMouseLeave={(e) => e.target.style.color = 'var(--color-teak-dark)'}>Facebook</a>
                <a href="#" style={{ color: 'var(--color-teak-dark)' }} onMouseEnter={(e) => e.target.style.color = 'var(--color-brass)'} onMouseLeave={(e) => e.target.style.color = 'var(--color-teak-dark)'}>Instagram</a>
                <a href="#" style={{ color: 'var(--color-teak-dark)' }} onMouseEnter={(e) => e.target.style.color = 'var(--color-brass)'} onMouseLeave={(e) => e.target.style.color = 'var(--color-teak-dark)'}>YouTube</a>
              </div>
            </div>
          </div>

          {/* Column 2: Elegant Form */}
          <div 
            className="glass-card"
            style={{
              padding: '2.5rem',
              backgroundColor: 'var(--color-ivory)',
              borderRadius: '4px',
              boxShadow: 'var(--shadow-premium)'
            }}
          >
            <h3 style={{ fontSize: '1.5rem', color: 'var(--color-teak-dark)', marginBottom: '1.5rem', fontFamily: 'var(--font-serif-header)' }}>
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <label style={{ fontFamily: 'var(--font-serif-sc)', fontSize: '0.75rem', letterSpacing: '0.05em', color: 'var(--color-brass)' }}>
                  Your Name
                </label>
                <input 
                  type="text" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Princess Aditi"
                  required
                  style={{
                    backgroundColor: 'rgba(15, 9, 6, 0.02)',
                    border: '1px solid rgba(194, 155, 79, 0.3)',
                    padding: '0.7rem 1rem',
                    color: 'var(--color-teak-dark)',
                    outline: 'none',
                    borderRadius: '2px',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.9rem'
                  }}
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <label style={{ fontFamily: 'var(--font-serif-sc)', fontSize: '0.75rem', letterSpacing: '0.05em', color: 'var(--color-brass)' }}>
                  Email Address
                </label>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@email.com"
                  required
                  style={{
                    backgroundColor: 'rgba(15, 9, 6, 0.02)',
                    border: '1px solid rgba(194, 155, 79, 0.3)',
                    padding: '0.7rem 1rem',
                    color: 'var(--color-teak-dark)',
                    outline: 'none',
                    borderRadius: '2px',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.9rem'
                  }}
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <label style={{ fontFamily: 'var(--font-serif-sc)', fontSize: '0.75rem', letterSpacing: '0.05em', color: 'var(--color-brass)' }}>
                  Subject
                </label>
                <input 
                  type="text" 
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="How can we assist you?"
                  required
                  style={{
                    backgroundColor: 'rgba(15, 9, 6, 0.02)',
                    border: '1px solid rgba(194, 155, 79, 0.3)',
                    padding: '0.7rem 1rem',
                    color: 'var(--color-teak-dark)',
                    outline: 'none',
                    borderRadius: '2px',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.9rem'
                  }}
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <label style={{ fontFamily: 'var(--font-serif-sc)', fontSize: '0.75rem', letterSpacing: '0.05em', color: 'var(--color-brass)' }}>
                  Message Description
                </label>
                <textarea 
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Write your details here..."
                  rows={4}
                  required
                  style={{
                    backgroundColor: 'rgba(15, 9, 6, 0.02)',
                    border: '1px solid rgba(194, 155, 79, 0.3)',
                    padding: '0.7rem 1rem',
                    color: 'var(--color-teak-dark)',
                    outline: 'none',
                    borderRadius: '2px',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.9rem',
                    resize: 'vertical'
                  }}
                />
              </div>

              <button type="submit" className="btn-gold" style={{ padding: '0.9rem 0', width: '100%', textAlign: 'center' }}>
                SUBMIT ENQUIRY
              </button>
            </form>
          </div>

        </div>

      </div>

      <style>{`
        @media (min-width: 992px) {
          .contact-split {
            grid-template-columns: 1fr 1.2fr !important;
            gap: 5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
