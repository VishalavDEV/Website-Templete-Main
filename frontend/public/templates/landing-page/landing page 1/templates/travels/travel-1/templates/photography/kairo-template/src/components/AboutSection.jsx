import React from 'react';
import { motion } from 'framer-motion';

export default function App() {
  return (
    <section id="about" style={{
      backgroundColor: '#121212', // Near black background
      padding: '120px 40px',
      color: '#ffffff',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      boxSizing: 'border-box',
      overflow: 'hidden'
    }}>
      <div style={{
        maxWidth: '1200px',
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '80px',
        alignItems: 'center'
      }}>
        {/* Left Column: Portrait photo */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.0, cubicBezier: [0.16, 1, 0.3, 1] }}
          style={{
            position: 'relative',
            width: '100%',
            aspectRatio: '4/5',
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
          }}
        >
          <img 
            src="https://images.unsplash.com/photo-1554080353-a576cf803bda?auto=format&fit=crop&w=800&q=80" 
            alt="Kairo" 
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
        </motion.div>

        {/* Right Column: Bio details */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.0, delay: 0.2, cubicBezier: [0.16, 1, 0.3, 1] }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}
        >
          {/* Label */}
          <span style={{
            color: '#ff4a3b', // Warm Red Accent
            fontSize: '0.75rem',
            fontWeight: '700',
            letterSpacing: '3px',
            textTransform: 'uppercase',
            fontFamily: "'Inter', sans-serif",
            display: 'block',
            marginBottom: '20px'
          }}>
            Available for assignments worldwide
          </span>

          {/* Heading */}
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'calc(2rem + 1vw)',
            fontWeight: '400',
            lineHeight: '1.25',
            margin: '0 0 28px 0',
            letterSpacing: '-0.5px'
          }}>
            Hello, I am Kairo.<br/>
            A Fashion & Lifestyle Photographer based in London, UK.
          </h2>

          {/* Bio text */}
          <p style={{
            fontSize: '0.95rem',
            lineHeight: '1.8',
            opacity: 0.7,
            fontFamily: "'Inter', sans-serif",
            margin: '0 0 24px 0',
            fontWeight: '300'
          }}>
            My work is defined by a deep appreciation for geometric compositions, high-contrast natural light, and the raw, quiet chemistry between subject and lens. By combining high-fashion editorial aesthetics with contemporary lifestyle storytelling, I aim to create cinematic captures that linger in the mind.
          </p>

          <p style={{
            fontSize: '0.95rem',
            lineHeight: '1.8',
            opacity: 0.7,
            fontFamily: "'Inter', sans-serif",
            margin: '0 0 40px 0',
            fontWeight: '300'
          }}>
            Over the past decade, I have collaborated with leading publications and boutique couture labels across Milan, Paris, New York, and Tokyo. When not on assignment, you can find me exploring street geometry or lecturing on visual narratives.
          </p>

          {/* Signature/CTA */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
            <a 
              href="#contact" 
              style={{
                background: '#ff4a3b',
                color: '#ffffff',
                textDecoration: 'none',
                padding: '16px 36px',
                borderRadius: '99px',
                fontSize: '0.85rem',
                fontWeight: '600',
                letterSpacing: '1px',
                textTransform: 'uppercase',
                boxShadow: '0 10px 20px rgba(255, 74, 59, 0.15)',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                display: 'inline-block',
                boxSizing: 'border-box'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 15px 25px rgba(255, 74, 59, 0.25)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 20px rgba(255, 74, 59, 0.15)';
              }}
            >
              Get in Touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
