import React from 'react';
import { motion } from 'framer-motion';

export default function App() {
  const projects = [
    { url: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80", title: "Noir Silhouette", category: "Editorial Fashion" },
    { url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80", title: "Golden Hour Bloom", category: "Outdoor Portraiture" },
    { url: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80", title: "Velvet Crimson", category: "Vogue Cover" },
    { url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80", title: "Urban Concrete", category: "Street Culture" },
    { url: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80", title: "Prism Radiance", category: "Studio Lighting" },
    { url: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=800&q=80", title: "Windswept Ivory", category: "High Fashion" }
  ];

  return (
    <section id="portfolio" style={{
      backgroundColor: '#ffffff',
      padding: '140px 40px',
      color: '#111827',
      fontFamily: "'Poppins', sans-serif"
    }}>
      <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
        {/* Header Title */}
        <div style={{ marginBottom: '80px', textAlign: 'center' }}>
          <span style={{
            color: '#ff7a52', // Coral accent
            fontSize: '0.75rem',
            fontWeight: '700',
            letterSpacing: '3px',
            textTransform: 'uppercase',
            display: 'block',
            marginBottom: '10px'
          }}>
            Selected Work
          </span>
          <h2 style={{
            fontSize: 'calc(2rem + 1.2vw)',
            fontWeight: '800',
            letterSpacing: '-1.5px',
            margin: 0,
            fontFamily: "'Playfair Display', serif"
          }}>
            Recent Projects
          </h2>
        </div>

        {/* 3-Column Masonry/Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
          gap: '24px'
        }}>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              style={{
                position: 'relative',
                borderRadius: '16px',
                overflow: 'hidden',
                aspectRatio: '4/5',
                cursor: 'pointer',
                background: '#f3f4f6'
              }}
            >
              <motion.img
                src={project.url}
                alt={project.title}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
              {/* Fade Overlay on Hover */}
              <div 
                className="hover-overlay"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)',
                  opacity: 0,
                  transition: 'opacity 0.4s',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: '30px',
                  boxSizing: 'border-box'
                }}
              >
                <style>{`
                  div:hover > .hover-overlay {
                    opacity: 1 !important;
                  }
                `}</style>
                <span style={{
                  color: '#ff7a52', // Coral accent
                  fontSize: '0.72rem',
                  fontWeight: '700',
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  marginBottom: '8px'
                }}>
                  {project.category}
                </span>
                <h4 style={{
                  fontSize: '1.4rem',
                  fontWeight: '600',
                  margin: 0,
                  color: '#ffffff',
                  fontFamily: "'Playfair Display', serif"
                }}>
                  {project.title}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
