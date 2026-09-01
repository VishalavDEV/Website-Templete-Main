import React from 'react';
import { motion } from 'framer-motion';

export default function App() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.25
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.95,
        ease: [0.16, 1, 0.3, 1] // Premium cubic-bezier transition
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
      boxSizing: 'border-box'
    }}>
      {/* Import Bebas Neue Google Font dynamically */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
        
        .cinematic-headline {
          font-family: 'Bebas Neue', Impact, sans-serif;
          background: linear-gradient(135deg, #f4e3c1 0%, #d4af7a 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-shadow: 0 4px 24px rgba(0, 0, 0, 0.7);
          -webkit-text-stroke: 1px rgba(0, 0, 0, 0.5);
          letter-spacing: 4px;
          line-height: 0.95;
        }
      `}</style>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        {/* Coral Eyebrow Label */}
        <motion.span
          variants={itemVariants}
          style={{
            fontSize: 'calc(0.7rem + 0.15vw)',
            fontWeight: '800',
            letterSpacing: '8px',
            textTransform: 'uppercase',
            color: '#ff7a52', // Warm coral-orange accent
            display: 'block',
            marginBottom: '20px',
            fontFamily: "'Inter', sans-serif"
          }}
        >
          Fashion & Lifestyle Photography
        </motion.span>

        {/* Tall Condensed Cinematic Headline */}
        <motion.h1
          variants={itemVariants}
          className="cinematic-headline"
          style={{
            fontSize: 'clamp(3.2rem, 7.5vw, 7.8rem)',
            margin: '0 0 28px 0',
            fontWeight: '400',
            textTransform: 'uppercase'
          }}
        >
          DOCUMENTING<br/>ROMANTIC VISIONS
        </motion.h1>

        {/* Subhead Paragraph */}
        <motion.p
          variants={itemVariants}
          style={{
            fontSize: 'calc(0.9rem + 0.1vw)',
            color: '#c9c9c9', // Light gray
            opacity: 0.9,
            maxWidth: '560px',
            margin: '0 auto',
            lineHeight: '1.75',
            letterSpacing: '0.5px',
            fontFamily: "'Inter', sans-serif",
            fontWeight: '300'
          }}
        >
          An editorial narrative of quiet connections, geometric architectures, and boutique, raw portraiture.
        </motion.p>
      </motion.div>

      {/* Scroll indicator down */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
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
          fontSize: '0.62rem',
          fontWeight: '700',
          letterSpacing: '3px',
          textTransform: 'uppercase',
          color: '#ffffff',
          fontFamily: "'Inter', sans-serif"
        }}>
          Scroll
        </span>
        
        {/* Animated vertical sliding line */}
        <div style={{
          width: '1px',
          height: '42px',
          position: 'relative',
          overflow: 'hidden',
          backgroundColor: 'rgba(255, 255, 255, 0.15)'
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
              backgroundColor: '#ffffff'
            }}
          />
        </div>
      </motion.div>
    </div>
  );
}
