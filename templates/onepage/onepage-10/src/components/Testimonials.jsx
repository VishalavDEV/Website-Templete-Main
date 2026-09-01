import React, { useState, useEffect, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, ShieldCheck } from 'lucide-react';
import { testimonialsData } from '../data/content';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (!isHovered) {
      timeoutRef.current = setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
      }, 5500);
    }
    return () => clearTimeout(timeoutRef.current);
  }, [currentIndex, isHovered]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const current = testimonialsData[currentIndex];

  return (
    <section id="testimonials" className="section" style={{ background: 'transparent' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4.5rem' }}>
          <div className="section-tag">
            CLIENT TESTIMONIALS
          </div>
          <h2 className="section-title">
            Validated by <span className="text-gradient">Industry Leaders</span>
          </h2>
          <p className="section-subtitle">
            Read how AETHERIA has partnered with fast-scaling tech companies to transform their digital presence and drive measurable outcomes.
          </p>
        </div>

        {/* Carousel Container */}
        <div 
          style={{ maxWidth: '900px', margin: '0 auto', position: 'relative' }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          
          <div 
            className="glass-card"
            style={{
              padding: 'clamp(1.5rem, 4vw, 3.5rem) clamp(1.25rem, 3.5vw, 3rem)',
              background: '#ffffff',
              borderRadius: '24px',
              boxShadow: '0 20px 40px rgba(15, 23, 42, 0.06)',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Background Decorative Quote Icon */}
            <Quote 
              size={80} 
              color="rgba(0, 102, 255, 0.05)" 
              style={{ position: 'absolute', top: '1rem', right: '1.25rem', pointerEvents: 'none' }} 
            />

            <div style={{ position: 'relative', zIndex: 2 }}>
              
              {/* Top Row: Rating & Result Tag */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.85rem', marginBottom: '1.25rem' }}>
                <div style={{ display: 'flex', gap: '0.25rem' }}>
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} size={18} fill="#f59e0b" color="#f59e0b" />
                  ))}
                </div>

                {current.resultTag && (
                  <span style={{ fontSize: '0.785rem', fontWeight: 700, padding: '0.3rem 0.75rem', borderRadius: '12px', background: 'rgba(16, 185, 129, 0.12)', color: 'var(--accent-emerald)', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    <ShieldCheck size={14} /> {current.resultTag}
                  </span>
                )}
              </div>

              {/* Quote Text */}
              <blockquote 
                style={{
                  fontSize: 'clamp(1rem, 2.2vw, 1.35rem)',
                  fontWeight: 600,
                  color: 'var(--text-main)',
                  lineHeight: 1.6,
                  marginBottom: '2rem',
                  fontStyle: 'italic'
                }}
              >
                "{current.quote}"
              </blockquote>

              {/* Client Info Footer */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.25rem' }}>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  {/* AI Portrait Photo */}
                  <img 
                    src={current.image} 
                    alt={current.clientName} 
                    loading="lazy"
                    decoding="async"
                    style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '50%',
                      objectFit: 'cover',
                      border: '3px solid #ffffff',
                      boxShadow: '0 6px 18px rgba(0,102,255,0.2)',
                      flexShrink: 0
                    }}
                  />

                  <div>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-main)' }}>
                      {current.clientName}
                    </h4>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                      {current.clientTitle} — <strong style={{ color: 'var(--accent-blue)' }}>{current.company}</strong>
                    </p>
                  </div>
                </div>

                {/* Manual Navigation Controls */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <button
                    onClick={handlePrev}
                    aria-label="Previous Testimonial"
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '50%',
                      background: 'var(--bg-secondary)',
                      border: '1px solid var(--border-light)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--text-main)',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <ChevronLeft size={22} />
                  </button>

                  <button
                    onClick={handleNext}
                    aria-label="Next Testimonial"
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '50%',
                      background: 'var(--gradient-primary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#ffffff',
                      boxShadow: '0 4px 14px rgba(0,102,255,0.3)',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <ChevronRight size={22} />
                  </button>
                </div>

              </div>

            </div>
          </div>

          {/* Indicator Dots */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '2rem' }}>
            {testimonialsData.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                style={{
                  width: currentIndex === idx ? '28px' : '10px',
                  height: '10px',
                  borderRadius: '5px',
                  background: currentIndex === idx ? 'var(--accent-blue)' : 'rgba(203, 213, 225, 0.8)',
                  transition: 'all 0.3s ease'
                }}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
