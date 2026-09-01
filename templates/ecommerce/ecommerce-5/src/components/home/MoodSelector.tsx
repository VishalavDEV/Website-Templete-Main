import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface MoodOption {
  key: string;
  label: string;
  subtitle: string;
  image: string;
  filterSlug: string;
}

const MOODS: MoodOption[] = [
  {
    key: 'MINIMAL',
    label: 'MINIMAL',
    subtitle: 'Stripped back forms. Clean geometry.',
    image: 'https://images.unsplash.com/photo-1598554747436-c9293d6a588f?q=80&w=1400&auto=format&fit=crop',
    filterSlug: 'MINIMAL',
  },
  {
    key: 'EFFORTLESS',
    label: 'EFFORTLESS',
    subtitle: 'Fluid movement. Unstructured ease.',
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1400&auto=format&fit=crop',
    filterSlug: 'EFFORTLESS',
  },
  {
    key: 'EVENING',
    label: 'EVENING',
    subtitle: 'Twilight satins and deep bronze tones.',
    image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=1400&auto=format&fit=crop',
    filterSlug: 'EVENING',
  },
  {
    key: 'EVERYDAY',
    label: 'EVERYDAY',
    subtitle: 'Tactile cottons and fine gauge cashmere.',
    image: 'https://images.unsplash.com/photo-1516826957135-700dedea698c?q=80&w=1400&auto=format&fit=crop',
    filterSlug: 'EVERYDAY',
  },
  {
    key: 'STATEMENT',
    label: 'STATEMENT',
    subtitle: 'Sculpted shoulders and bold coats.',
    image: 'https://images.unsplash.com/photo-1548624149-f1af3462b86a?q=80&w=1400&auto=format&fit=crop',
    filterSlug: 'STATEMENT',
  },
];

export const MoodSelector: React.FC = () => {
  const [activeMood, setActiveMood] = useState<MoodOption>(MOODS[0]);

  return (
    <section
      style={{
        position: 'relative',
        padding: '120px 0',
        backgroundColor: '#171614',
        color: '#F3F0EA',
        overflow: 'hidden',
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {/* Dynamic Background Image Layers with AnimatePresence */}
      {MOODS.map((mood) => (
        <motion.div
          key={mood.key}
          initial={false}
          animate={{
            opacity: activeMood.key === mood.key ? 0.38 : 0,
            scale: activeMood.key === mood.key ? 1.025 : 1,
          }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url(${mood.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            pointerEvents: 'none',
          }}
        />
      ))}

      {/* Dark Vignette Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle, rgba(23,22,20,0.3) 0%, rgba(23,22,20,0.92) 100%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container-custom" style={{ position: 'relative', zIndex: 10, width: '100%' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span
            style={{
              fontSize: '11px',
              letterSpacing: '0.22em',
              fontWeight: '600',
              color: 'var(--accent-bronze)',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '12px',
            }}
          >
            INTERACTIVE CURATION
          </span>

          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(32px, 5vw, 56px)',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              color: '#F3F0EA',
            }}
          >
            DRESS YOUR MOOD
          </h2>
        </div>

        {/* Mood Selector List */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '18px',
          }}
        >
          {MOODS.map((mood) => {
            const isActive = activeMood.key === mood.key;
            return (
              <motion.div
                key={mood.key}
                onMouseEnter={() => setActiveMood(mood)}
                onClick={() => setActiveMood(mood)}
                data-cursor="SELECT"
                style={{
                  cursor: 'pointer',
                  textAlign: 'center',
                  padding: '4px 16px',
                  position: 'relative',
                  display: 'inline-flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  {isActive && (
                    <motion.div initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }}>
                      <ChevronRight size={24} color="var(--accent-bronze)" />
                    </motion.div>
                  )}

                  <h3
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: isActive ? 'clamp(36px, 6vw, 76px)' : 'clamp(28px, 4vw, 52px)',
                      fontWeight: isActive ? '400' : '300',
                      color: isActive ? '#FFFFFF' : 'rgba(243, 240, 234, 0.45)',
                      letterSpacing: '0.06em',
                      transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                      textTransform: 'uppercase',
                      lineHeight: '1.1',
                    }}
                  >
                    {mood.label}
                  </h3>
                </div>

                <AnimatePresence>
                  {isActive && (
                    <motion.p
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      transition={{ duration: 0.3 }}
                      style={{
                        fontSize: '13px',
                        letterSpacing: '0.1em',
                        color: 'var(--accent-bronze)',
                        marginTop: '8px',
                        textTransform: 'uppercase',
                      }}
                    >
                      {mood.subtitle}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Dynamic CTA */}
        <div style={{ textAlign: 'center', marginTop: '60px' }}>
          <Link
            to={`/shop?mood=${activeMood.filterSlug}`}
            className="btn-aurel-outline"
            data-cursor="→"
            style={{
              borderColor: 'rgba(243, 240, 234, 0.4)',
              color: '#F3F0EA',
            }}
          >
            SHOP {activeMood.label} PIECES <ArrowRight size={15} className="btn-arrow" />
          </Link>
        </div>
      </div>
    </section>
  );
};
