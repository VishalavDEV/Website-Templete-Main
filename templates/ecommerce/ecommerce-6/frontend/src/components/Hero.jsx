import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = ({ onExploreClick }) => {
  // Title reveal variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '100px 5% 50px 5%',
        position: 'relative',
        overflow: 'hidden',
        background: 'radial-gradient(circle at 80% 20%, rgba(212, 175, 55, 0.08) 0%, transparent 50%)'
      }}
    >
      <div className="ambient-glow" style={{ top: '-10%', left: '-10%', opacity: 0.15 }} />

      {/* Main Grid Layout */}
      <div
        style={{
          width: '100%',
          display: 'grid',
          gridTemplateColumns: '1.2fr 1fr',
          gap: '4rem',
          alignItems: 'center',
          zIndex: 2
        }}
        className="hero-grid-responsive"
      >
        {/* Left Side: Typography & CTA */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
        >
          <motion.div variants={itemVariants}>
            <span
              style={{
                color: 'var(--accent-gold)',
                fontSize: '0.85rem',
                fontWeight: '700',
                letterSpacing: '0.25em',
                textTransform: 'uppercase'
              }}
            >
              Aura Lifestyle / Brand New Release
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              lineHeight: 1.1,
              fontFamily: 'var(--font-heading)',
              fontWeight: 800
            }}
          >
            SHAPING THE <br />
            <span className="gold-text-gradient">FUTURE OF DESIGN</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            style={{
              fontSize: '1.1rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.6,
              maxWidth: '540px'
            }}
          >
            A curated showcase of high-fidelity acoustics, luxury architectural timepieces, and structural garments. Engineered for sensory and aesthetic indulgence.
          </motion.p>

          <motion.div variants={itemVariants} style={{ display: 'flex', gap: '1.5rem', marginTop: '1rem' }}>
            <button onClick={onExploreClick} className="btn-primary">
              EXPLORE COLLECTION <ArrowRight size={16} />
            </button>
            <a href="#about" className="btn-secondary" style={{ display: 'inline-flex', alignItems: 'center' }}>
              OUR STORY
            </a>
          </motion.div>
        </motion.div>

        {/* Right Side: Image Showcase with Hover Tilt */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          style={{
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100%'
          }}
        >
          {/* Subtle Decorative Golden Border Frame behind Image */}
          <div
            style={{
              position: 'absolute',
              top: '20px',
              left: '20px',
              width: '100%',
              height: '100%',
              border: '1px solid var(--accent-gold)',
              opacity: 0.2,
              borderRadius: '8px',
              zIndex: 0
            }}
          />

          {/* Floating Image Container */}
          <motion.div
            whileHover={{ y: -10, rotate: 1 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="glass-panel"
            style={{
              width: '100%',
              height: '450px',
              borderRadius: '8px',
              overflow: 'hidden',
              padding: '12px',
              boxShadow: 'var(--shadow-premium)',
              zIndex: 1
            }}
          >
            <div
              style={{
                width: '100%',
                height: '100%',
                borderRadius: '6px',
                overflow: 'hidden',
                position: 'relative'
              }}
            >
              <motion.img
                src="./images/hero.webp"
                alt="Aura Luxury Products"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}

                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.8 }}
              />
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(to top, rgba(10, 10, 12, 0.4) 0%, transparent 100%)',
                  pointerEvents: 'none'
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .hero-grid-responsive {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
            text-align: center;
          }
          .hero-grid-responsive div {
            align-items: center !important;
            margin: 0 auto;
          }
          .hero-grid-responsive p {
            margin: 0 auto;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
