import React from 'react';
import { motion } from 'framer-motion';

export default function ContactSection() {
  return (
    <section id="contact" style={{
      backgroundColor: '#ffffff',
      padding: '140px 40px',
      color: '#111827',
      fontFamily: "'Poppins', sans-serif"
    }}>
      <div style={{
        maxWidth: '1000px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
        gap: '80px',
        alignItems: 'center'
      }}>
        {/* Left Column info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span style={{
            color: '#ff7a52',
            fontSize: '0.75rem',
            fontWeight: '700',
            letterSpacing: '3px',
            textTransform: 'uppercase',
            display: 'block',
            marginBottom: '15px'
          }}>
            Pre-Booking
          </span>
          <h2 style={{
            fontSize: 'calc(2rem + 1vw)',
            fontWeight: '800',
            lineHeight: '1.2',
            marginBottom: '30px',
            letterSpacing: '-1.5px',
            fontFamily: "'Playfair Display', serif"
          }}>
            Let's create something beautiful together.
          </h2>
          <p style={{
            fontSize: '0.95rem',
            lineHeight: '1.8',
            color: '#374151',
            marginBottom: '40px',
            fontWeight: '350'
          }}>
            Looking to book an editorial campaign, private headshots, or a creative brand partnership? Leave a brief message and we'll reply with a custom proposal and availability rates.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
              <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: 'rgba(0,0,0,0.5)', letterSpacing: '1px' }}>Studio Email</span>
              <p style={{ marginTop: '4px', fontSize: '1.1rem', fontWeight: '500' }}>hello@lume-studio.com</p>
            </div>
            {/* Social Icons */}
            <div style={{ display: 'flex', gap: '20px', marginTop: '10px' }}>
              <a href="#" style={{ color: '#111827', fontSize: '1.2rem', textDecoration: 'none', transition: 'color 0.2s' }}
                 onMouseEnter={(e) => e.currentTarget.style.color = '#ff7a52'}
                 onMouseLeave={(e) => e.currentTarget.style.color = '#111827'}>
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#" style={{ color: '#111827', fontSize: '1.2rem', textDecoration: 'none', transition: 'color 0.2s' }}
                 onMouseEnter={(e) => e.currentTarget.style.color = '#ff7a52'}
                 onMouseLeave={(e) => e.currentTarget.style.color = '#111827'}>
                <i className="fa-brands fa-x-twitter"></i>
              </a>
              <a href="#" style={{ color: '#111827', fontSize: '1.2rem', textDecoration: 'none', transition: 'color 0.2s' }}
                 onMouseEnter={(e) => e.currentTarget.style.color = '#ff7a52'}
                 onMouseLeave={(e) => e.currentTarget.style.color = '#111827'}>
                <i className="fa-brands fa-pinterest"></i>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Column Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <form 
            onSubmit={(e) => { e.preventDefault(); alert('Message sent successfully! We will contact you soon.'); }}
            style={{
              background: '#f9f9fb',
              padding: '40px',
              borderRadius: '20px',
              border: '1px solid rgba(0,0,0,0.04)'
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '20px' }}>
              <label style={{ fontSize: '0.75rem', fontWeight: '600', letterSpacing: '1px', textTransform: 'uppercase', color: '#ff7a52' }}>Full Name</label>
              <input type="text" required placeholder="Enter name" style={{
                background: '#ffffff',
                border: '1px solid rgba(0,0,0,0.08)',
                padding: '14px',
                borderRadius: '8px',
                color: '#111827',
                fontSize: '0.9rem',
                outline: 'none',
                transition: 'border-color 0.2s'
              }} 
              onFocus={(e) => e.currentTarget.style.borderColor = '#ff7a52'}
              onBlur={(e) => e.currentTarget.style.borderColor = 'rgba(0,0,0,0.08)'}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '20px' }}>
              <label style={{ fontSize: '0.75rem', fontWeight: '600', letterSpacing: '1px', textTransform: 'uppercase', color: '#ff7a52' }}>Email Address</label>
              <input type="email" required placeholder="Enter email address" style={{
                background: '#ffffff',
                border: '1px solid rgba(0,0,0,0.08)',
                padding: '14px',
                borderRadius: '8px',
                color: '#111827',
                fontSize: '0.9rem',
                outline: 'none',
                transition: 'border-color 0.2s'
              }} 
              onFocus={(e) => e.currentTarget.style.borderColor = '#ff7a52'}
              onBlur={(e) => e.currentTarget.style.borderColor = 'rgba(0,0,0,0.08)'}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '24px' }}>
              <label style={{ fontSize: '0.75rem', fontWeight: '600', letterSpacing: '1px', textTransform: 'uppercase', color: '#ff7a52' }}>Project Details</label>
              <textarea required rows="3" placeholder="Tell us about the dates, style, and scope of work..." style={{
                background: '#ffffff',
                border: '1px solid rgba(0,0,0,0.08)',
                padding: '14px',
                borderRadius: '8px',
                color: '#111827',
                fontSize: '0.9rem',
                outline: 'none',
                resize: 'none',
                transition: 'border-color 0.2s'
              }}
              onFocus={(e) => e.currentTarget.style.borderColor = '#ff7a52'}
              onBlur={(e) => e.currentTarget.style.borderColor = 'rgba(0,0,0,0.08)'}
              ></textarea>
            </div>

            <button type="submit" style={{
              width: '100%',
              background: 'linear-gradient(135deg, #ff7a52 0%, #ff5e3a 100%)',
              color: '#ffffff',
              border: 'none',
              padding: '15px',
              borderRadius: '99px',
              fontSize: '0.85rem',
              fontWeight: '700',
              letterSpacing: '1px',
              textTransform: 'uppercase',
              cursor: 'pointer',
              boxShadow: '0 4px 15px rgba(255, 122, 82, 0.2)',
              transition: 'all 0.3s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-1px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
