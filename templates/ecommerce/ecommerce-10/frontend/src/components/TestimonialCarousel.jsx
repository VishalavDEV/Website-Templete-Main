import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const TestimonialCarousel = () => {
  const [index, setIndex] = useState(0);

  const testimonials = [
    {
      name: 'Sophia Carter',
      rating: 5,
      product: 'Lavender Dream Maxi Dress',
      text: 'Absolutely stunning! The silk quality is top-tier and the color is a dream. The packaging and custom animations on the website made the shopping experience feel so premium. Highly recommended!',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
    },
    {
      name: 'Liam Sterling',
      rating: 5,
      product: 'Urban Techwear Jacket',
      text: 'Perfect fit and excellent waterproofing. The futuristic purple strap details look great. The interactive timeline tracking of my package was extremely satisfying and accurate.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    },
    {
      name: 'Isabella Grace',
      rating: 5,
      product: 'Glassmorphic Handbag',
      text: 'I was wowed by the glassmorphic detail. The leather is soft, and it matches my lavender shoes perfectly. I love the smooth cursor hover and interactive details of this shop.',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    },
  ];

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div style={{ position: 'relative', maxWidth: '700px', margin: '0 auto', padding: '0 40px' }}>
      <div style={{ position: 'absolute', top: '10px', left: '10px', color: 'rgba(124, 92, 255, 0.08)', zIndex: 1 }}>
        <Quote size={80} style={{ transform: 'rotate(180deg)' }} />
      </div>

      <div style={{ position: 'relative', zIndex: 2, minHeight: '260px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 30, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -30, scale: 0.95 }}
            transition={{ duration: 0.4 }}
            style={{
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '16px',
            }}
          >
            {/* Avatar */}
            <img
              src={testimonials[index].image}
              alt={testimonials[index].name}
              style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                objectFit: 'cover',
                border: '3px solid #7c5cff',
                boxShadow: '0 8px 20px rgba(124,92,255,0.2)',
              }}
            />

            {/* Stars */}
            <div style={{ display: 'flex', color: '#ffd700', gap: '2px' }}>
              {[...Array(testimonials[index].rating)].map((_, i) => (
                <Star key={i} size={16} fill="#ffd700" strokeWidth={1} />
              ))}
            </div>

            {/* Review text */}
            <p
              style={{
                fontFamily: 'Inter',
                fontSize: '1.05rem',
                lineHeight: '1.6',
                color: '#5c4e8c',
                fontStyle: 'italic',
              }}
            >
              "{testimonials[index].text}"
            </p>

            {/* User Meta */}
            <div>
              <h4 style={{ fontFamily: 'Outfit', fontSize: '1.15rem', color: '#1e133e', fontWeight: 600 }}>
                {testimonials[index].name}
              </h4>
              <span style={{ fontSize: '0.8rem', color: '#8a7db3', marginTop: '2px', display: 'block' }}>
                Purchased: <strong style={{ color: '#7c5cff' }}>{testimonials[index].product}</strong>
              </span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Buttons */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '24px' }}>
        <button
          onClick={handlePrev}
          style={{
            background: 'none',
            border: '1.5px solid rgba(124, 92, 255, 0.25)',
            color: '#7c5cff',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.2s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#7c5cff';
            e.currentTarget.style.color = '#fff';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.color = '#7c5cff';
          }}
        >
          <ChevronLeft size={20} />
        </button>

        <button
          onClick={handleNext}
          style={{
            background: 'none',
            border: '1.5px solid rgba(124, 92, 255, 0.25)',
            color: '#7c5cff',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.2s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#7c5cff';
            e.currentTarget.style.color = '#fff';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.color = '#7c5cff';
          }}
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
