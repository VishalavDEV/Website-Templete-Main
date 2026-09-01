import React from 'react';
import { motion } from 'framer-motion';

export default function App() {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
      caption: "VOGUE Editorial — Portrait of Clara",
      category: "Fashion / Color"
    },
    {
      src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80",
      caption: "Sartorial Elegance — Black & White Studio Session",
      category: "Editorial / Monochromatic"
    },
    {
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
      caption: "Summer Horizon — Lifestyle Shoot in Amalfi",
      category: "Lifestyle / Color"
    },
    {
      src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
      caption: "Neon Reverie — Sunset Couture Collection",
      category: "High Fashion / Color"
    },
    {
      src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=800&q=80",
      caption: "Quiet Gazes — Studio Portraiture",
      category: "Portrait / Monochromatic"
    },
    {
      src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
      caption: "Drape & Shadows — Fine Art Editorial",
      category: "Fine Art / Monochromatic"
    }
  ];

  return (
    <section id="work" style={{
      width: '100%',
      backgroundColor: '#0a0a0a',
      margin: 0,
      padding: 0
    }}>
      {/* Editorial Grid Grid Layout */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        width: '100%',
        margin: 0,
        padding: 0,
        gap: 0
      }}>
        {images.map((img, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: idx * 0.1, cubicBezier: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'relative',
              overflow: 'hidden',
              aspectRatio: '3/4',
              cursor: 'pointer'
            }}
          >
            {/* Hover Wrapper */}
            <div 
              style={{
                width: '100%',
                height: '100%',
                transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
              onMouseEnter={(e) => {
                const imgEl = e.currentTarget.querySelector('img');
                const overlayEl = e.currentTarget.querySelector('.hover-overlay');
                if (imgEl) imgEl.style.transform = 'scale(1.06)';
                if (overlayEl) overlayEl.style.opacity = '1';
              }}
              onMouseLeave={(e) => {
                const imgEl = e.currentTarget.querySelector('img');
                const overlayEl = e.currentTarget.querySelector('.hover-overlay');
                if (imgEl) imgEl.style.transform = 'scale(1)';
                if (overlayEl) overlayEl.style.opacity = '0';
              }}
            >
              {/* Image */}
              <img 
                src={img.src} 
                alt={img.caption} 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
              />

              {/* Hover Darken Overlay */}
              <div 
                className="hover-overlay"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(to top, rgba(10, 10, 10, 0.9) 0%, rgba(10, 10, 10, 0.2) 60%, rgba(10, 10, 10, 0) 100%)',
                  opacity: 0,
                  transition: 'opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: '30px',
                  boxSizing: 'border-box'
                }}
              >
                {/* Category label */}
                <span style={{
                  color: '#ff4a3b', // Accent Red
                  fontSize: '0.7rem',
                  fontWeight: '700',
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  fontFamily: "'Inter', sans-serif",
                  marginBottom: '6px'
                }}>
                  {img.category}
                </span>

                {/* Caption Title */}
                <h4 style={{
                  color: '#ffffff',
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '1.25rem',
                  margin: 0,
                  lineHeight: '1.4',
                  fontWeight: '500'
                }}>
                  {img.caption}
                </h4>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
