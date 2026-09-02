import React from 'react';
import { motion } from 'framer-motion';

export default function App() {
  const services = [
    {
      num: "01",
      title: "Portrait Sessions",
      desc: "Tailored lifestyle, headshot, and fine-art studio portraits designed to capture raw, authentic character."
    },
    {
      num: "02",
      title: "Editorial & Fashion",
      desc: "High-contrast modeling portfolios, lookbooks, and high-fashion spreads tailored for magazines and designers."
    },
    {
      num: "03",
      title: "Event Coverage",
      desc: "Cinematic, candid documentation of private parties, exhibitions, launches, and high-end corporate events."
    },
    {
      num: "04",
      title: "Brand Campaigns",
      desc: "Commercial product and narrative photography built to establish a distinct, premium visual footprint."
    }
  ];

  return (
    <section id="services" style={{
      backgroundColor: '#ffffff',
      padding: '140px 40px',
      color: '#111827',
      fontFamily: "'Poppins', sans-serif"
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Title */}
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <span style={{
            color: '#ff7a52', // Coral accent
            fontSize: '0.75rem',
            fontWeight: '700',
            letterSpacing: '3px',
            textTransform: 'uppercase',
            display: 'block',
            marginBottom: '10px'
          }}>
            Our Expertise
          </span>
          <h2 style={{
            fontSize: 'calc(2rem + 1.2vw)',
            fontWeight: '800',
            letterSpacing: '-1.5px',
            margin: 0,
            fontFamily: "'Playfair Display', serif"
          }}>
            Creative Services
          </h2>
        </div>

        {/* 4-Column Card Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '30px'
        }}>
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              style={{
                background: '#f9f9fb',
                padding: '40px 30px',
                borderRadius: '16px',
                border: '1px solid rgba(0, 0, 0, 0.04)',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.borderColor = 'rgba(255, 122, 82, 0.4)'; // Coral hover border
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(255, 122, 82, 0.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.04)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <span style={{
                color: '#ff7a52', // Coral accent
                fontSize: '1.8rem',
                fontWeight: '800',
                display: 'block',
                marginBottom: '24px',
                fontFamily: "'Playfair Display', serif",
                opacity: 0.85
              }}>
                {service.num}
              </span>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: '600',
                marginBottom: '14px',
                fontFamily: "'Playfair Display', serif"
              }}>
                {service.title}
              </h3>
              <p style={{
                fontSize: '0.88rem',
                lineHeight: '1.65',
                color: '#374151',
                fontWeight: '350',
                margin: 0
              }}>
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
