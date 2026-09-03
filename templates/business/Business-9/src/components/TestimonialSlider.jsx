import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Star, Quote } from 'lucide-react';

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 100 : -100,
    opacity: 0
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] }
  },
  exit: (direction) => ({
    x: direction < 0 ? 100 : -100,
    opacity: 0,
    transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1.0] }
  })
};

export default function TestimonialSlider({ testimonials }) {
  const [[page, direction], setPage] = useState([0, 0]);
  const [isHovered, setIsHovered] = useState(false);

  const activeIndex = Math.abs(page % testimonials.length);

  const paginate = useCallback((newDirection) => {
    setPage([page + newDirection, newDirection]);
  }, [page]);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      paginate(1);
    }, 5000); // 5s auto-play
    return () => clearInterval(interval);
  }, [paginate, isHovered]);

  if (!testimonials || testimonials.length === 0) return null;

  const currentTestimonial = testimonials[activeIndex];

  return (
    <div 
      style={{
        position: 'relative',
        maxWidth: '750px',
        margin: '0 auto',
        padding: '2rem 1rem'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Huge quote backdrop icon */}
      <div style={{
        position: 'absolute',
        top: '-10px',
        left: '20px',
        opacity: 0.05,
        color: 'var(--primary)',
        pointerEvents: 'none'
      }}>
        <Quote size={120} fill="var(--primary)" />
      </div>

      {/* Slider viewport */}
      <div style={{
        position: 'relative',
        minHeight: '320px',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={page}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="glass-card"
            style={{
              width: '100%',
              padding: '3rem 2.5rem',
              borderRadius: 'var(--border-radius-lg)',
              background: 'rgba(255, 255, 255, 0.55)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center'
            }}
          >
            {/* Stars */}
            <div style={{ display: 'flex', gap: '0.2rem', marginBottom: '1.25rem' }}>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  fill={i < currentTestimonial.rating ? "var(--primary)" : "transparent"}
                  color={i < currentTestimonial.rating ? "var(--primary)" : "var(--text-muted)"}
                />
              ))}
            </div>

            {/* Comment */}
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1.1rem',
              fontStyle: 'italic',
              lineHeight: 1.6,
              color: 'var(--text-secondary)',
              marginBottom: '2rem',
              maxWidth: '600px'
            }}>
              "{currentTestimonial.comment}"
            </p>

            {/* Client Bio */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: 'auto' }}>
              <img
                src={currentTestimonial.imageUrl}
                alt={currentTestimonial.clientName}
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  border: '2px solid var(--primary)'
                }}
              />
              <div style={{ textAlign: 'left' }}>
                <h4 style={{ fontSize: '1rem', fontWeight: 700 }}>{currentTestimonial.clientName}</h4>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{currentTestimonial.company}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '1.5rem',
        marginTop: '2rem'
      }}>
        <motion.button
          onClick={() => paginate(-1)}
          style={{
            width: '44px',
            height: '44px',
            borderRadius: '50%',
            background: 'var(--glass-bg)',
            border: '1px solid var(--glass-border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: 'var(--glass-shadow)'
          }}
          whileHover={{ scale: 1.1, backgroundColor: 'var(--secondary)' }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowLeft size={18} color="var(--primary)" />
        </motion.button>

        {/* Indicators */}
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                const diff = i - activeIndex;
                if (diff !== 0) {
                  setPage([page + diff, diff > 0 ? 1 : -1]);
                }
              }}
              style={{
                width: i === activeIndex ? '20px' : '8px',
                height: '8px',
                borderRadius: '9999px',
                background: i === activeIndex ? 'var(--primary)' : 'var(--secondary-dark)',
                border: 'none',
                cursor: 'pointer',
                transition: 'width 0.3s ease, background-color 0.3s ease'
              }}
            />
          ))}
        </div>

        <motion.button
          onClick={() => paginate(1)}
          style={{
            width: '44px',
            height: '44px',
            borderRadius: '50%',
            background: 'var(--glass-bg)',
            border: '1px solid var(--glass-border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: 'var(--glass-shadow)'
          }}
          whileHover={{ scale: 1.1, backgroundColor: 'var(--secondary)' }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowRight size={18} color="var(--primary)" />
        </motion.button>
      </div>
    </div>
  );
}
