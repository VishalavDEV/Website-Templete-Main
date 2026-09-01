import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PlaygroundGallery({ items }) {
  const [activeItem, setActiveItem] = useState(null);

  if (!items || items.length === 0) return null;

  // Duplicate items array to make the infinite horizontal wrap smooth
  const doubleItems = [...items, ...items, ...items];

  return (
    <section
      id="playground"
      style={{
        minHeight: '100vh',
        width: '100%',
        padding: '6rem 0',
        backgroundColor: 'var(--color-bg-paper)',
        borderBottom: '1px solid var(--color-muted-beige)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        overflow: 'hidden',
      }}
    >
      {/* Title */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%', padding: '0 2rem' }}>
        <span style={{ fontSize: '12px', fontWeight: '600', letterSpacing: '0.3em', color: 'var(--color-coral)', marginBottom: '0.5rem', display: 'block' }}>
          CHAPTER 08
        </span>
        <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: '700', textTransform: 'uppercase' }}>
          THE PLAYGROUND
        </h2>
        <p style={{ fontSize: '13px', fontStyle: 'italic', opacity: 0.6, marginTop: '0.2rem' }}>
          EXPERIMENTAL CONCEPTS · DRAG AND CLICK TO ZOOM
        </p>
      </div>

      {/* Infinite Horizontal Marquee */}
      <div style={{ margin: '3rem 0', position: 'relative', width: '100%' }}>
        <div className="marquee-container" style={{ display: 'flex', width: '100%', overflow: 'hidden' }}>
          <div className="marquee-content" style={{ display: 'flex', gap: '2rem' }}>
            {doubleItems.map((item, idx) => (
              <div
                key={`${item.id}-${idx}`}
                onClick={() => setActiveItem(item)}
                data-cursor="view"
                style={{
                  width: '280px',
                  height: '350px',
                  border: '1px solid var(--color-muted-beige)',
                  backgroundColor: 'var(--color-bg-ivory)',
                  flexShrink: 0,
                  cursor: 'pointer',
                  padding: '1rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 5px 15px rgba(0,0,0,0.02)',
                  transition: 'transform 0.4s ease, border-color 0.4s ease',
                }}
                className="playground-card"
              >
                <div style={{ overflow: 'hidden', height: '220px', width: '100%', backgroundColor: 'var(--color-forest)' }}>
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      filter: 'grayscale(50%) contrast(105%)',
                      transition: 'transform 0.4s ease, filter 0.4s ease',
                    }}
                    className="playground-img"
                  />
                </div>
                <div style={{ marginTop: '1rem' }}>
                  <span style={{ fontSize: '9px', fontWeight: '700', color: 'var(--color-coral)', letterSpacing: '0.1em', display: 'block', marginBottom: '0.2rem' }}>
                    {item.type.toUpperCase()}
                  </span>
                  <h4 style={{ fontSize: '18px', fontWeight: '700', color: 'var(--color-forest)', textTransform: 'uppercase' }}>
                    {item.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Full-Screen Visual Modal */}
      <AnimatePresence>
        {activeItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveItem(null)}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(13, 44, 30, 0.95)',
              zIndex: 1000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '2rem',
              cursor: 'zoom-out',
            }}
          >
            {/* Grain filter for overlay */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                opacity: 0.04,
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
                pointerEvents: 'none',
              }}
            />

            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                backgroundColor: 'var(--color-bg-paper)',
                padding: '2rem',
                border: '1px solid var(--color-coral)',
                maxWidth: '650px',
                width: '100%',
                boxShadow: '0 25px 60px rgba(0,0,0,0.3)',
                cursor: 'default',
              }}
            >
              <div style={{ overflow: 'hidden', maxHeight: '400px', width: '100%', backgroundColor: 'var(--color-forest)', marginBottom: '1.5rem' }}>
                <img
                  src={activeItem.imageUrl}
                  alt={activeItem.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <span style={{ fontSize: '10px', fontWeight: '700', color: 'var(--color-coral)', letterSpacing: '0.15em', display: 'block', marginBottom: '0.5rem' }}>
                {activeItem.type.toUpperCase()}
              </span>
              <h3 style={{ fontSize: '28px', fontWeight: '700', textTransform: 'uppercase', color: 'var(--color-forest)', marginBottom: '1rem' }}>
                {activeItem.title}
              </h3>
              <p style={{ fontSize: '13px', lineHeight: 1.6, color: 'var(--color-charcoal)', opacity: 0.85, marginBottom: '1.5rem' }}>
                This is an experimental UI interaction, animation prototype, or motion layout created during Siddharth's sandbox sessions.
              </p>
              
              <div style={{ display: 'flex', gap: '1rem' }}>
                <a href={activeItem.link} target="_blank" rel="noreferrer" className="btn-editorial" style={{ fontSize: '11px', padding: '0.6rem 1.2rem' }}>
                  LAUNCH EXPERIMENT
                </a>
                <button onClick={() => setActiveItem(null)} className="btn-editorial-coral" style={{ fontSize: '11px', padding: '0.6rem 1.2rem' }}>
                  CLOSE
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer line */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%', padding: '0 2rem', display: 'flex', justifyContent: 'space-between', fontSize: '10px', opacity: 0.5, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
        <span>LAB EXPERIMENTS · INDEX VOL 4</span>
        <span>DRAG TO PAN LAB</span>
      </div>

      <style>{`
        .playground-card:hover {
          transform: translateY(-8px) rotate(-1deg);
          border-color: var(--color-coral);
        }
        .playground-card:hover .playground-img {
          transform: scale(1.05);
          filter: grayscale(0%) contrast(100%);
        }
      `}</style>
    </section>
  );
}
