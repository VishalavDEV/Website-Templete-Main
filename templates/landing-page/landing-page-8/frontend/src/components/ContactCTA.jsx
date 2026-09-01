import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

export default function ContactCTA() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email) {
      setFormSubmitted(true);
      setTimeout(() => {
        setFormSubmitted(false);
        setName('');
        setEmail('');
        setMessage('');
      }, 4000);
    }
  };

  return (
    <section 
      id="contact" 
      className="section-padding"
      style={{
        backgroundColor: 'var(--text-primary)', // Dramatic shift to black
        color: 'var(--bg-color)',
        position: 'relative',
        zIndex: 1,
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        textAlign: 'left'
      }}
    >
      {/* Decorative vector grid lines in CTA */}
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.03,
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)',
          backgroundSize: '100px 100px',
          pointerEvents: 'none'
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 1fr',
            gap: '6rem',
            alignItems: 'start'
          }}
          className="contact-grid"
        >
          {/* Text Info */}
          <div 
            className="reveal-on-scroll"
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '2.5rem'
            }}
          >
            <div>
              <span style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.2em', color: 'var(--accent-color)', textTransform: 'uppercase' }}>GET IN TOUCH</span>
              <h2 
                style={{ 
                  fontFamily: 'var(--font-headings)', 
                  fontSize: 'clamp(2.5rem, 5vw, 5rem)', 
                  fontWeight: 800, 
                  lineHeight: 1, 
                  marginTop: '1rem',
                  color: '#FFFFFF'
                }}
              >
                Have something worth making?
              </h2>
            </div>
            
            <p style={{ fontSize: '1.25rem', color: 'rgba(245, 243, 239, 0.7)', lineHeight: '1.5', maxWidth: '500px' }}>
              Let's turn it into something people can't ignore. Tell us about your goals, timeline, and vision.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.95rem', color: 'rgba(245, 243, 239, 0.9)' }}>
              <div>
                <span style={{ color: 'var(--accent-color)', fontWeight: 600 }}>Email us:</span> hello@vantastudio.com
              </div>
              <div>
                <span style={{ color: 'var(--accent-color)', fontWeight: 600 }}>Call us:</span> +49 (0) 30 440 289
              </div>
              <div>
                <span style={{ color: 'var(--accent-color)', fontWeight: 600 }}>Visit:</span> Berlin, Germany
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div 
            className="reveal-on-scroll"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              padding: '3rem',
              borderRadius: '4px',
              width: '100%'
            }}
          >
            {formSubmitted ? (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', minHeight: '300px', textAlign: 'center', gap: '1.5rem' }}>
                <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: 'var(--accent-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFF' }}>
                  <Check size={28} />
                </div>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-headings)', fontSize: '1.75rem', fontWeight: 800, color: '#FFF' }}>Message Sent</h3>
                  <p style={{ color: 'rgba(245,243,239,0.7)', fontSize: '0.95rem', marginTop: '0.5rem' }}>We'll get back to you within 24 business hours.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                
                {/* Name */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label htmlFor="form-name" style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(245,243,239,0.6)' }}>Your Name *</label>
                  <input 
                    type="text" 
                    id="form-name" 
                    required 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. John Doe"
                    style={{
                      background: 'none',
                      border: 'none',
                      borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
                      padding: '0.75rem 0',
                      color: '#FFFFFF',
                      fontSize: '1rem',
                      fontFamily: 'var(--font-body)',
                      outline: 'none',
                      transition: 'var(--transition-fast)'
                    }}
                    onFocus={(e) => e.target.style.borderBottomColor = 'var(--accent-color)'}
                    onBlur={(e) => e.target.style.borderBottomColor = 'rgba(255, 255, 255, 0.2)'}
                  />
                </div>

                {/* Email */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label htmlFor="form-email" style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(245,243,239,0.6)' }}>Email Address *</label>
                  <input 
                    type="email" 
                    id="form-email" 
                    required 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. john@company.com"
                    style={{
                      background: 'none',
                      border: 'none',
                      borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
                      padding: '0.75rem 0',
                      color: '#FFFFFF',
                      fontSize: '1rem',
                      fontFamily: 'var(--font-body)',
                      outline: 'none',
                      transition: 'var(--transition-fast)'
                    }}
                    onFocus={(e) => e.target.style.borderBottomColor = 'var(--accent-color)'}
                    onBlur={(e) => e.target.style.borderBottomColor = 'rgba(255, 255, 255, 0.2)'}
                  />
                </div>

                {/* Project Brief */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label htmlFor="form-brief" style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(245,243,239,0.6)' }}>Project Brief</label>
                  <textarea 
                    id="form-brief" 
                    rows="3"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us a little bit about what you want to build..."
                    style={{
                      background: 'none',
                      border: 'none',
                      borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
                      padding: '0.75rem 0',
                      color: '#FFFFFF',
                      fontSize: '1rem',
                      fontFamily: 'var(--font-body)',
                      outline: 'none',
                      resize: 'none',
                      transition: 'var(--transition-fast)'
                    }}
                    onFocus={(e) => e.target.style.borderBottomColor = 'var(--accent-color)'}
                    onBlur={(e) => e.target.style.borderBottomColor = 'rgba(255, 255, 255, 0.2)'}
                  />
                </div>

                <button 
                  type="submit" 
                  className="btn-primary" 
                  style={{
                    backgroundColor: 'var(--accent-color)',
                    borderColor: 'var(--accent-color)',
                    color: '#FFF',
                    justifyContent: 'center',
                    marginTop: '1rem'
                  }}
                >
                  <span>Start a conversation</span>
                  <ArrowRight size={16} />
                </button>

              </form>
            )}
          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 4rem !important;
          }
        }
      `}</style>
    </section>
  );
}
