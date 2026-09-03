import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Hero({ slides = [] }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const fallbackSlides = [
    {
      id: 1,
      title: 'HI-TECH DESIGN',
      subtitle: 'Lorem ipsum dolor amet consectetur adipiscing dolore magna aliqua enim minim estudiat veniam siad venumus dolore',
      bgImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1920&q=80',
      ctaText: 'EXPLORE',
      ctaLink: '#features'
    },
    {
      id: 2,
      title: 'CREATIVE SOLUTIONS',
      subtitle: 'Pioneering digital experiences engineered with structural elegance, computational speed, and architectural beauty.',
      bgImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80',
      ctaText: 'DISCOVER',
      ctaLink: '#products'
    },
    {
      id: 3,
      title: 'MODERN ARCHITECTURE',
      subtitle: 'Transforming conceptual designs into high-performance web systems with timeless minimal aesthetics.',
      bgImage: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1920&q=80',
      ctaText: 'GET STARTED',
      ctaLink: '#pricing'
    }
  ];

  const activeSlides = slides && slides.length > 0 ? slides : fallbackSlides;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % activeSlides.length);
    }, 6500);
    return () => clearInterval(timer);
  }, [activeSlides.length]);

  const slide = activeSlides[currentSlide] || activeSlides[0];

  return (
    <section id="home" style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      overflow: 'hidden',
      paddingTop: 'var(--header-height)'
    }}>
      {/* Background Image Carousel with Smooth Fade */}
      {activeSlides.map((s, idx) => (
        <div
          key={s.id || idx}
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url(${s.bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'grayscale(100%) brightness(0.48) contrast(1.15)',
            opacity: idx === currentSlide ? 1 : 0,
            transform: idx === currentSlide ? 'scale(1)' : 'scale(1.04)',
            transition: 'opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1), transform 6s ease-out',
            zIndex: 0
          }}
        />
      ))}

      {/* Modern Gradient Overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to right, rgba(12, 14, 18, 0.88) 0%, rgba(12, 14, 18, 0.4) 60%, rgba(12, 14, 18, 0.75) 100%), linear-gradient(to top, #0c0e12 0%, transparent 40%)',
        zIndex: 1
      }} />

      {/* Hero Content */}
      <div className="container" style={{
        position: 'relative',
        zIndex: 2,
        width: '100%',
        paddingTop: '60px',
        paddingBottom: '80px'
      }}>
        <div style={{ maxWidth: '780px' }}>
          <h1
            key={`title-${currentSlide}`}
            className="display-title fade-in"
            style={{
              fontSize: 'clamp(2.75rem, 6.5vw, 5.2rem)',
              color: '#ffffff',
              lineHeight: 1.05,
              fontWeight: 900,
              letterSpacing: '-0.02em',
              marginBottom: '24px',
              textShadow: '0 4px 24px rgba(0,0,0,0.5)'
            }}
          >
            {slide.title}
          </h1>

          <p
            key={`subtitle-${currentSlide}`}
            className="fade-in"
            style={{
              fontSize: 'clamp(1rem, 1.8vw, 1.15rem)',
              color: 'rgba(255, 255, 255, 0.82)',
              lineHeight: 1.7,
              maxWidth: '600px',
              marginBottom: '36px',
              animationDelay: '0.15s'
            }}
          >
            {slide.subtitle}
          </p>

          <div
            key={`cta-${currentSlide}`}
            className="fade-in"
            style={{ display: 'flex', alignItems: 'center', gap: '16px', animationDelay: '0.25s' }}
          >
            <a
              href={slide.ctaLink || '#features'}
              className="btn-outline"
              style={{ padding: '14px 40px', fontSize: '0.9rem', letterSpacing: '0.2em' }}
            >
              {slide.ctaText || 'EXPLORE'}
            </a>
          </div>
        </div>

        {/* Carousel Pagination Dots (Matching Screenshot) */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          marginTop: '64px'
        }}>
          {activeSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              style={{
                width: idx === currentSlide ? '28px' : '10px',
                height: '10px',
                borderRadius: '5px',
                backgroundColor: idx === currentSlide ? 'var(--accent)' : 'rgba(255, 255, 255, 0.35)',
                transition: 'var(--transition-smooth)',
                padding: 0
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
