import React from 'react';
import { motion } from 'framer-motion';

export default function App() {
  const stats = [
    { value: "150+", label: "Shoots Completed" },
    { value: "8+", label: "Years Experience" },
    { value: "40+", label: "Global Clients" }
  ];

  return (
    <section id="about" style={{
      backgroundColor: '#faf9f6', // Light backdrop
      padding: '140px 40px',
      color: '#111827',
      fontFamily: "'Poppins', sans-serif"
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
        gap: '80px',
        alignItems: 'center'
      }}>
        {/* Left: Photographer Portrait */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: 'relative',
            borderRadius: '20px',
            overflow: 'hidden',
            aspectRatio: '3/4',
            background: '#f3f4f6',
            border: '1px solid rgba(0,0,0,0.03)'
          }}
        >
          <img 
            src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80" 
            alt="Lume Photographer Portrait" 
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
        </motion.div>

        {/* Right: Bio & Stats */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        >
          <span style={{
            color: '#ff7a52', // Coral accent
            fontSize: '0.75rem',
            fontWeight: '700',
            letterSpacing: '3px',
            textTransform: 'uppercase',
            display: 'block',
            marginBottom: '15px'
          }}>
            Available for assignments worldwide
          </span>
          <h2 style={{
            fontSize: 'calc(2rem + 0.8vw)',
            fontWeight: '800',
            lineHeight: '1.25',
            marginBottom: '24px',
            letterSpacing: '-1px',
            fontFamily: "'Playfair Display', serif"
          }}>
            Hello, I'm Lume. A fashion & lifestyle photographer based in New York.
          </h2>
          <p style={{
            fontSize: '0.98rem',
            lineHeight: '1.8',
            color: '#374151',
            marginBottom: '40px',
            fontWeight: '350'
          }}>
            My work explores the intersections of light, raw human emotion, and editorial composition. Rooted in cinematic storytelling, I help individuals, agencies, and international brands capture their vision with custom, bespoke visuals.
          </p>

          {/* Stats counters */}
          <div style={{
            display: 'flex',
            gap: '40px',
            borderTop: '1px solid rgba(0, 0, 0, 0.08)',
            paddingTop: '40px'
          }}>
            {stats.map((stat, idx) => (
              <div key={idx}>
                <span style={{
                  display: 'block',
                  fontSize: '2rem',
                  fontWeight: '800',
                  color: '#ff7a52', // Coral accent
                  fontFamily: "'Playfair Display', serif",
                  marginBottom: '6px'
                }}>
                  {stat.value}
                </span>
                <span style={{
                  fontSize: '0.72rem',
                  color: '#4b5563',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}>
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
