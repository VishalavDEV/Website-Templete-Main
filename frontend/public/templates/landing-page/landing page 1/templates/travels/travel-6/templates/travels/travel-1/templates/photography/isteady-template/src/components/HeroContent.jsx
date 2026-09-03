import React from 'react';
import { motion } from 'framer-motion';

export default function App() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <div style={{
      position: 'relative',
      zIndex: 2,
      color: '#ffffff',
      textAlign: 'center',
      padding: '0 24px',
      pointerEvents: 'none',
      width: '100%',
      maxWidth: '900px',
      boxSizing: 'border-box',
      marginTop: '40px'
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;800&family=Playfair+Display:ital,wght@0,600;0,800;1,400&display=swap');
        
        .lume-hero-container {
          font-family: 'Poppins', -apple-system, sans-serif;
        }
        
        .eyebrow-label {
          font-weight: 700;
          font-size: 0.8rem;
          color: #ff7a52; /* Coral accent */
          letter-spacing: 4px;
          text-transform: uppercase;
          margin-bottom: 24px;
          display: block;
        }

        .gradient-headline {
          font-family: 'Playfair Display', serif;
          font-weight: 800;
          font-size: clamp(2.2rem, 5.2vw, 4.8rem);
          line-height: 1.15;
          letter-spacing: -0.5px;
          margin: 0 0 24px 0;
          background: linear-gradient(180deg, #111827 30%, #4b5563 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="lume-hero-container"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        {/* Eyebrow Label */}
        <motion.span variants={itemVariants} className="eyebrow-label">
          FASHION & EDITORIAL PHOTOGRAPHY
        </motion.span>

        {/* Headline */}
        <motion.h1
          variants={itemVariants}
          className="gradient-headline"
        >
          CAPTURING LIGHT.<br/>TELLING STORIES.
        </motion.h1>

        {/* Subhead Paragraph */}
        <motion.p
          variants={itemVariants}
          style={{
            fontSize: 'calc(0.9rem + 0.15vw)',
            color: '#374151',
            maxWidth: '560px',
            margin: '0 auto',
            lineHeight: '1.75',
            letterSpacing: '0.4px',
            fontWeight: '400'
          }}
        >
          Editorial and lifestyle photography rooted in natural light and honest emotion. Available for custom assignments worldwide.
        </motion.p>
      </motion.div>

      {/* Scroll indicator down */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ delay: 1.6, duration: 1.0 }}
        style={{
          position: 'absolute',
          bottom: '-120px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '12px'
        }}
      >
        <span style={{
          fontSize: '0.65rem',
          fontWeight: '700',
          letterSpacing: '3px',
          textTransform: 'uppercase',
          color: '#111827',
          fontFamily: "'Poppins', sans-serif"
        }}>
          Scroll
        </span>
        
        {/* Sliding vertical line */}
        <div style={{
          width: '1px',
          height: '42px',
          position: 'relative',
          overflow: 'hidden',
          backgroundColor: 'rgba(0, 0, 0, 0.15)'
        }}>
          <motion.div 
            animate={{
              y: ['-100%', '100%'],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '50%',
              backgroundColor: '#ff7a52' // Coral accent color
            }}
          />
        </div>
      </motion.div>
    </div>
  );
}
