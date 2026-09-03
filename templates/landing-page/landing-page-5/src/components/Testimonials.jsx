import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote, Sparkles } from 'lucide-react';
import { testimonials } from '../data/landingData';

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5500);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const item = testimonials[current];

  return (
    <section id="testimonials" className="section" style={{ position: 'relative' }}>
      {/* Ambient background rose glow */}
      <div className="ambient-glow ambient-rose" style={{ top: '20%', right: '15%', width: 500, height: 500 }} />

      <div className="container" style={{ maxWidth: 920, position: 'relative', zIndex: 1 }}>
        <div className="section-header">
          <div className="glass-pill">
            <Sparkles size={13} color="#c87873" />
            <span>Client Endorsements</span>
          </div>

          <h2 className="section-title">
            Loved By <span className="gradient-text-electric">Engineering Leaders</span>
          </h2>

          <p className="section-subtitle">
            Hear directly from founders and design principals who elevated their platform conversion with our atmospheric motion systems.
          </p>
        </div>

        {/* Testimonial Carousel Card */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="glass-panel"
          style={{
            padding: '3.5rem 3rem',
            borderRadius: '2.5rem',
            border: '1.5px solid rgba(255, 255, 255, 0.95)',
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.92) 0%, rgba(250, 244, 238, 0.85) 100%)',
            boxShadow: '0 30px 80px -15px rgba(200, 120, 115, 0.22), 0 0 40px rgba(252, 219, 216, 0.4)',
            minHeight: 340,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            position: 'relative',
          }}
        >
          <Quote
            size={56}
            color="rgba(200, 120, 115, 0.15)"
            style={{ position: 'absolute', top: 30, right: 35, pointerEvents: 'none' }}
          />

          <AnimatePresence mode="wait">
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
            >
              {/* Star Rating */}
              <div style={{ display: 'flex', gap: '4px', marginBottom: '1.5rem' }}>
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="#dfba89" color="#dfba89" />
                ))}
              </div>

              {/* Quote Text */}
              <p
                style={{
                  fontSize: 'clamp(1.15rem, 1.8vw, 1.45rem)',
                  color: '#1e1b18',
                  lineHeight: 1.65,
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 600,
                  marginBottom: '2.5rem',
                }}
              >
                "{item.quote}"
              </p>

              {/* Author Row */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                <img
                  src={item.avatar}
                  alt={item.name}
                  style={{
                    width: 54,
                    height: 54,
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: '2px solid #c87873',
                  }}
                />
                <div>
                  <h4 style={{ fontSize: '1.15rem', color: '#1e1b18', fontWeight: 700 }}>
                    {item.name}
                  </h4>
                  <p style={{ fontSize: '0.875rem', color: '#766e65' }}>
                    {item.role}, <span style={{ color: '#b35d58', fontWeight: 600 }}>{item.company}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls Bottom Bar */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: '3rem',
              paddingTop: '1.75rem',
              borderTop: '1px solid rgba(200, 120, 115, 0.15)',
            }}
          >
            {/* Dot Indicators */}
            <div style={{ display: 'flex', gap: '8px' }}>
              {testimonials.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  onClick={() => setCurrent(dotIdx)}
                  style={{
                    width: current === dotIdx ? 28 : 10,
                    height: 8,
                    borderRadius: 9999,
                    backgroundColor: current === dotIdx ? '#c87873' : 'rgba(200, 120, 115, 0.25)',
                    transition: 'all 0.3s ease',
                  }}
                  aria-label={`Go to slide ${dotIdx + 1}`}
                />
              ))}
            </div>

            {/* Prev / Next Buttons */}
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <button
                onClick={handlePrev}
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.85)',
                  border: '1px solid rgba(200, 120, 115, 0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#1e1b18',
                  transition: 'all 0.2s ease',
                  boxShadow: '0 4px 12px rgba(200, 120, 115, 0.1)',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(200, 120, 115, 0.15)')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.85)')}
                aria-label="Previous Testimonial"
              >
                <ChevronLeft size={20} />
              </button>

              <button
                onClick={handleNext}
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.85)',
                  border: '1px solid rgba(200, 120, 115, 0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#1e1b18',
                  transition: 'all 0.2s ease',
                  boxShadow: '0 4px 12px rgba(200, 120, 115, 0.1)',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(200, 120, 115, 0.15)')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.85)')}
                aria-label="Next Testimonial"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
