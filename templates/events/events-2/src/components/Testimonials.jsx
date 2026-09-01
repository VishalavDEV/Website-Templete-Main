import React, { useState, useEffect } from 'react';
import { testimonials } from '../data/testimonials';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import '../styles/cards.css';

export const Testimonials = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setActiveIdx((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % testimonials.length);
  };

  const item = testimonials[activeIdx];

  return (
    <section className="section-padding" style={{ background: 'var(--bg-primary)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <div className="section-tag">ATTENDEE REVIEWS</div>
          <h2 className="section-title">What Global Leaders Say</h2>
          <p className="section-subtitle">
            Unfiltered feedback from executives, keynote speakers, and engineering delegates who experienced EVENTORA.
          </p>
        </div>

        {/* Carousel Showcase */}
        <div style={{ maxWidth: '850px', margin: '0 auto', position: 'relative' }}>
          <div
            className="glass-card"
            style={{
              padding: '48px',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '20px',
              minHeight: '340px',
              justifyContent: 'center',
              position: 'relative'
            }}
          >
            <Quote size={48} color="rgba(124, 58, 237, 0.3)" style={{ position: 'absolute', top: '24px', left: '32px' }} />

            {/* Stars */}
            <div style={{ display: 'flex', gap: '4px' }}>
              {[...Array(item.rating)].map((_, i) => (
                <Star key={i} size={18} fill="#f59e0b" color="#f59e0b" />
              ))}
            </div>

            <p style={{ fontSize: '1.25rem', color: '#ffffff', fontStyle: 'italic', lineHeight: 1.6, maxWidth: '700px' }}>
              "{item.quote}"
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginTop: '10px' }}>
              <img
                src={item.image}
                alt={item.name}
                style={{ width: '54px', height: '54px', borderRadius: '50%', objectFit: 'cover', border: '2px solid var(--accent-cyan)' }}
              />
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#ffffff' }}>{item.name}</div>
                <div style={{ fontSize: '0.88rem', color: 'var(--accent-cyan)', fontWeight: 600 }}>{item.role}</div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>{item.company}</div>
              </div>
            </div>
          </div>

          {/* Carousel Arrows */}
          <button
            onClick={handlePrev}
            style={{
              position: 'absolute',
              left: '-24px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              background: 'rgba(22, 27, 43, 0.9)',
              border: '1px solid var(--border-light)',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 10px 25px rgba(0,0,0,0.5)',
              transition: 'var(--transition-fast)'
            }}
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={handleNext}
            style={{
              position: 'absolute',
              right: '-24px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              background: 'rgba(22, 27, 43, 0.9)',
              border: '1px solid var(--border-light)',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 10px 25px rgba(0,0,0,0.5)',
              transition: 'var(--transition-fast)'
            }}
          >
            <ChevronRight size={24} />
          </button>

          {/* Carousel Dots */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '24px' }}>
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIdx(idx)}
                style={{
                  width: activeIdx === idx ? '28px' : '10px',
                  height: '10px',
                  borderRadius: 'var(--radius-full)',
                  background: activeIdx === idx ? 'var(--gradient-accent)' : 'rgba(255, 255, 255, 0.2)',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
