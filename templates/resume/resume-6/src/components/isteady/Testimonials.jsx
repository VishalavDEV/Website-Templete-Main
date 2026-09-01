import React from 'react';
import { motion } from 'framer-motion';

export default function Testimonials() {
  const reviews = [
    {
      quote: "Lume's visual direction completely transformed our collection launch. The composition and play of light feel extremely premium.",
      client: "Sarah Jenkins",
      role: "Creative Director, Vélour Magazine"
    },
    {
      quote: "Absolute professionalism from pre-production to delivery. The portrait series captured precisely the raw elegance we aimed for.",
      client: "Marcus Aurelius",
      role: "Founder, Zenith Campaign"
    }
  ];

  return (
    <section style={{
      backgroundColor: '#faf9f6',
      padding: '120px 40px',
      color: '#111827',
      fontFamily: "'Poppins', sans-serif",
      borderTop: '1px solid rgba(0, 0, 0, 0.04)'
    }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <span style={{
            color: '#ff7a52',
            fontSize: '0.75rem',
            fontWeight: '700',
            letterSpacing: '3px',
            textTransform: 'uppercase',
            display: 'block',
            marginBottom: '10px'
          }}>
            Client Feedback
          </span>
          <h2 style={{
            fontSize: 'calc(1.8rem + 1vw)',
            fontWeight: '800',
            letterSpacing: '-1.5px',
            margin: 0,
            fontFamily: "'Playfair Display', serif"
          }}>
            Kind Words
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '40px'
        }}>
          {reviews.map((rev, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.2, ease: [0.16, 1, 0.3, 1] }}
              style={{
                background: '#f9f9fb',
                padding: '40px',
                borderRadius: '20px',
                border: '1px solid rgba(0, 0, 0, 0.04)',
                position: 'relative'
              }}
            >
              <span style={{
                position: 'absolute',
                top: '25px',
                left: '30px',
                fontSize: '5rem',
                fontFamily: "'Playfair Display', serif",
                color: 'rgba(255, 122, 82, 0.08)',
                lineHeight: 0.1,
                pointerEvents: 'none'
              }}>&ldquo;</span>
              <p style={{
                fontSize: '0.95rem',
                lineHeight: '1.75',
                color: '#374151',
                fontStyle: 'italic',
                fontWeight: '350',
                margin: '0 0 24px 0',
                position: 'relative',
                zIndex: 1
              }}>
                {rev.quote}
              </p>
              <div>
                <strong style={{ display: 'block', fontSize: '0.92rem', fontWeight: '600', color: '#111827' }}>{rev.client}</strong>
                <span style={{ fontSize: '0.72rem', color: '#ff7a52', fontWeight: '600' }}>{rev.role}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
