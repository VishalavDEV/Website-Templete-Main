import React from 'react';
import { motion } from 'framer-motion';

export default function App() {
  const services = [
    {
      number: "01",
      title: "Fashion & Editorial",
      desc: "Editorial lookbooks, high-fashion magazine features, and campaign design with a cinematic approach."
    },
    {
      number: "02",
      title: "Commercial Lifestyle",
      desc: "Brand storytelling, contemporary lifestyle portfolios, and outdoor product placement sessions."
    },
    {
      number: "03",
      title: "Boutique Portraiture",
      desc: "Fine art studio portraiture, black and white artistic silhouettes, and modeling portfolio sessions."
    }
  ];

  return (
    <section id="services" style={{
      backgroundColor: '#0a0a0a',
      padding: '120px 40px',
      color: '#ffffff',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      boxSizing: 'border-box'
    }}>
      <div style={{
        maxWidth: '1200px',
        width: '100%'
      }}>
        {/* Section Header Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: '80px'
        }}>
          <span style={{
            color: '#ff4a3b',
            fontSize: '0.75rem',
            fontWeight: '700',
            letterSpacing: '3px',
            textTransform: 'uppercase',
            fontFamily: "'Inter', sans-serif"
          }}>
            Services
          </span>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'calc(2rem + 1vw)',
            fontWeight: '400',
            margin: '12px 0 0 0'
          }}>
            Creative Assignment Domains
          </h2>
        </div>

        {/* Services Grid Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '40px'
        }}>
          {services.map((srv, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.15, cubicBezier: [0.16, 1, 0.3, 1] }}
              style={{
                background: '#121212',
                padding: '40px',
                borderRadius: '16px',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                display: 'flex',
                flexDirection: 'column',
                boxSizing: 'border-box'
              }}
            >
              {/* Number */}
              <span style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '2rem',
                color: '#ff4a3b',
                fontWeight: '600',
                marginBottom: '20px',
                opacity: 0.8
              }}>
                {srv.number}
              </span>

              {/* Title */}
              <h3 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '1.4rem',
                fontWeight: '500',
                margin: '0 0 16px 0'
              }}>
                {srv.title}
              </h3>

              {/* Description */}
              <p style={{
                fontSize: '0.9rem',
                lineHeight: '1.6',
                opacity: 0.6,
                fontFamily: "'Inter', sans-serif",
                margin: 0,
                fontWeight: '300'
              }}>
                {srv.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
