import React, { useState } from 'react';
import { testimonials } from '../data/testimonialsData';
import { Star, ChevronLeft, ChevronRight, Quote, MapPin } from 'lucide-react';

export const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  };

  const next = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
  };

  const t = testimonials[currentIndex];

  return (
    <section style={{ padding: '90px 0', background: '#0a0d10', position: 'relative' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-label">CLIENT TESTIMONIALS</span>
          <h2 className="section-title">THE PROOF IS IN THE GLOSS.</h2>
          <p className="section-subtitle">
            Read what luxury car owners say about our precision detailing and paint studio craft.
          </p>
        </div>

        {/* Active Testimonial Card */}
        <div style={{
          maxWidth: '850px',
          margin: '0 auto',
          position: 'relative'
        }}>
          <div className="glass-card" style={{
            padding: '48px 40px',
            background: 'linear-gradient(145deg, #111417 0%, #1b2024 100%)',
            border: '1px solid rgba(124, 255, 79, 0.3)',
            borderRadius: '24px',
            position: 'relative'
          }}>
            <Quote size={56} style={{ position: 'absolute', top: '24px', right: '32px', color: 'rgba(124,255,79,0.1)' }} />

            {/* Stars */}
            <div style={{ display: 'flex', gap: '6px', marginBottom: '20px' }}>
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} size={18} fill="#7cff4f" color="#7cff4f" />
              ))}
            </div>

            {/* Quote Text */}
            <p style={{
              fontSize: '1.25rem',
              color: '#f5f7f8',
              lineHeight: '1.6',
              fontStyle: 'italic',
              marginBottom: '32px',
              fontWeight: '500'
            }}>
              "{t.text}"
            </p>

            {/* Author Meta */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '16px',
              paddingTop: '20px',
              borderTop: '1px solid rgba(255, 255, 255, 0.08)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <img
                  src={t.avatar}
                  alt={t.name}
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: '2px solid #7cff4f',
                    boxShadow: '0 0 15px rgba(124, 255, 79, 0.3)'
                  }}
                />
                <div>
                  <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.2rem', fontWeight: '800', color: '#f5f7f8' }}>
                    {t.name}
                  </div>
                  <div style={{ fontSize: '0.85rem', color: '#7cff4f', fontWeight: '700' }}>
                    {t.role}
                  </div>
                  <div style={{ fontSize: '0.78rem', color: '#64748b', display: 'flex', alignItems: 'center', gap: '4px', marginTop: '2px' }}>
                    <MapPin size={12} /> {t.location}
                  </div>
                </div>
              </div>

              <div style={{
                background: 'rgba(37, 191, 255, 0.1)',
                border: '1px solid #25bfff',
                color: '#25bfff',
                padding: '6px 14px',
                borderRadius: '99px',
                fontSize: '0.78rem',
                fontWeight: '800'
              }}>
                {t.service}
              </div>
            </div>
          </div>

          {/* Carousel Prev / Next Controls */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
            marginTop: '28px'
          }}>
            <button
              onClick={prev}
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                background: '#111417',
                border: '1px solid rgba(255,255,255,0.1)',
                color: '#f5f7f8',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.2s ease'
              }}
            >
              <ChevronLeft size={22} />
            </button>

            <div style={{ display: 'flex', gap: '8px' }}>
              {testimonials.map((_, idx) => (
                <div
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  style={{
                    width: currentIndex === idx ? '28px' : '10px',
                    height: '10px',
                    borderRadius: '99px',
                    background: currentIndex === idx ? '#7cff4f' : 'rgba(255,255,255,0.2)',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                />
              ))}
            </div>

            <button
              onClick={next}
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                background: '#111417',
                border: '1px solid rgba(255,255,255,0.1)',
                color: '#f5f7f8',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.2s ease'
              }}
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
