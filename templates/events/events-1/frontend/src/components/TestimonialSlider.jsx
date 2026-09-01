import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { testimonialsData } from '../data/testimonials';

export default function TestimonialSlider() {
  const [currentIdx, setCurrentIdx] = useState(0);

  const prevSlide = () => {
    setCurrentIdx(currentIdx === 0 ? testimonialsData.length - 1 : currentIdx - 1);
  };

  const nextSlide = () => {
    setCurrentIdx(currentIdx === testimonialsData.length - 1 ? 0 : currentIdx + 1);
  };

  const active = testimonialsData[currentIdx];

  return (
    <section className="section" style={{ background: 'transparent' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">TESTIMONIALS</span>
          <h2 className="section-title">
            What Attendees <span className="gradient-text">Say About Us</span>
          </h2>
          <p className="section-subtitle">
            Feedback from software leaders, AI researchers, and startup founders who attended Eventora.
          </p>
        </div>

        <div style={{ position: 'relative', maxWidth: '850px', margin: '0 auto' }}>
          <div className="testimonial-card">
            <Quote size={40} style={{ color: 'var(--primary)', opacity: 0.3, margin: '0 auto 1rem auto' }} />

            <div style={{ display: 'flex', justifyContent: 'center', gap: '0.2rem', color: '#f59e0b', marginBottom: '1.25rem' }}>
              {[...Array(active.rating)].map((_, i) => (
                <Star key={i} size={18} fill="#f59e0b" />
              ))}
            </div>

            <p style={{ fontSize: '1.2rem', fontStyle: 'italic', lineHeight: 1.7, color: 'var(--text-main)', marginBottom: '2rem' }}>
              "{active.quote}"
            </p>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
              <img
                src={active.image}
                alt={active.name}
                style={{ width: '54px', height: '54px', borderRadius: '50%', objectFit: 'cover', border: '2px solid var(--primary)' }}
              />
              <div style={{ textAlign: 'left' }}>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-main)' }}>{active.name}</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{active.role} at <strong style={{ color: 'var(--primary)' }}>{active.company}</strong></p>
              </div>
            </div>
          </div>

          {/* Prev / Next Controls */}
          <div style={{ display: 'flex', justifyContent: 'space-between', position: 'absolute', top: '50%', left: '-1.5rem', right: '-1.5rem', transform: 'translateY(-50%)', pointerEvents: 'none' }}>
            <button
              onClick={prevSlide}
              className="theme-toggle-btn"
              style={{ pointerEvents: 'auto', boxShadow: 'var(--shadow-md)' }}
            >
              <ChevronLeft size={22} />
            </button>
            <button
              onClick={nextSlide}
              className="theme-toggle-btn"
              style={{ pointerEvents: 'auto', boxShadow: 'var(--shadow-md)' }}
            >
              <ChevronRight size={22} />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="testimonial-dots">
            {testimonialsData.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIdx(idx)}
                className={`dot-btn ${currentIdx === idx ? 'active' : ''}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
