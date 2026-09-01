import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart, Leaf, Sun } from 'lucide-react';

const pageVariants = {
  initial: { opacity: 0, y: 15 },
  animate: { opacity: 1, y: 0, transition: { duration: 1.0, ease: 'easeOut' } },
  exit: { opacity: 0 }
};

const WELLNESS_SECTIONS = [
  {
    id: 'spa',
    title: 'The Botanical Spa Caves',
    tag: 'THERMAL RITUALS',
    description: 'Carved directly into natural coastal basalt cliffs. Our steam chambers, mineral-rich hot springs, and cold plunge pools are illuminated solely by soft candles, encouraging deep restoration.',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
    icon: Leaf
  },
  {
    id: 'massage',
    title: 'Bespoke Massage Therapy',
    tag: 'BODY WORK',
    description: 'Combining ancient touch therapies with locally distilled redwood and lavender essential oils. Therapists customize every stroke to relieve muscle tension and restore energetic flow.',
    image: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=800&q=80',
    icon: Sparkles
  },
  {
    id: 'meditation',
    title: 'Forest Meditation & sound bath',
    tag: 'MINDFULNESS',
    description: 'Unwind under redwood canopies accompanied by organic soundscapes: crystal singing bowls, gongs, and forest birds. Reclaim cognitive clarity and mental silence.',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80',
    icon: Heart
  },
  {
    id: 'sauna',
    title: 'Wood-Fired Sauna Pavilion',
    tag: 'DETOXIFICATION',
    description: 'A traditional dry cedarwood sauna overlooking the ocean. High dry heat stimulates cardiovascular health, followed by a cold rainwater rinse on the private deck.',
    image: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=800&q=80',
    icon: Sun
  }
];

export default function Spa() {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      style={{ padding: '140px 40px 100px', maxWidth: '1200px', margin: '0 auto', boxSizing: 'border-box' }}
    >
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '80px' }}>
        <span style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '0.75rem',
          fontWeight: '700',
          letterSpacing: '3px',
          color: '#c5a880',
          textTransform: 'uppercase'
        }}>
          Rejuvenation & Thermal Springs
        </span>
        <h1 style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '3rem',
          fontWeight: '400',
          margin: '10px 0 20px 0',
          color: '#1e1e1e'
        }}>
          Spa & Wellness
        </h1>
        <p style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '0.95rem',
          color: '#777777',
          maxWidth: '600px',
          margin: '0 auto',
          lineHeight: '1.6',
          fontWeight: '300'
        }}>
          A temple of absolute restoration where thermal waters, native flora, and deep silent forest atmosphere heal body and mind.
        </p>
      </div>

      {/* Wellness sections layout list */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '80px' }}>
        {WELLNESS_SECTIONS.map((sec, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <div
              key={sec.id}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '50px',
                alignItems: 'center'
              }}
            >
              {/* Image */}
              <div style={{
                order: isEven ? 1 : 2,
                overflow: 'hidden',
                aspectRatio: '16/10',
                border: '1px solid rgba(197, 168, 128, 0.15)'
              }}>
                <img
                  src={sec.image}
                  alt={sec.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 1.2s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1.0)'}
                />
              </div>

              {/* Details */}
              <div style={{
                order: isEven ? 2 : 1,
                display: 'flex',
                flexDirection: 'column',
                gap: '15px'
              }}>
                <span style={{
                  fontSize: '0.72rem',
                  fontWeight: '700',
                  color: '#c5a880',
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}>
                  <sec.icon size={12} /> {sec.tag}
                </span>

                <h2 style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '2.2rem',
                  fontWeight: '400',
                  color: '#1e1e1e',
                  margin: 0
                }}>
                  {sec.title}
                </h2>

                <p style={{
                  fontSize: '0.92rem',
                  lineHeight: '1.75',
                  color: '#666666',
                  margin: 0
                }}>
                  {sec.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
