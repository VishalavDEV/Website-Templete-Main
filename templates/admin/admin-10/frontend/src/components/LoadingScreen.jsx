import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen({ onFinished }) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState('Initializing admin services...');

  useEffect(() => {
    // Progress counter simulation
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        
        // Dynamic loading labels
        const next = prev + Math.floor(Math.random() * 15) + 5;
        const capped = Math.min(next, 100);
        
        if (capped > 80) {
          setPhase('Optimizing layout views...');
        } else if (capped > 50) {
          setPhase('Fetching secure cloud data...');
        } else if (capped > 25) {
          setPhase('Loading analytical modules...');
        }
        
        return capped;
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      const timer = setTimeout(() => {
        onFinished();
      }, 500); // Small pause for visual completion
      return () => clearTimeout(timer);
    }
  }, [progress, onFinished]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: '#FAF8F2', // --bg-primary
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
        overflow: 'hidden',
      }}
    >
      {/* Background Decorative Rings */}
      <motion.div
        animate={{ scale: [1, 1.05, 1], rotate: 360 }}
        transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
        style={{
          position: 'absolute',
          width: '450px',
          height: '450px',
          borderRadius: '50%',
          border: '1.5px dashed #EFEAD8',
          opacity: 0.8,
        }}
      />
      <motion.div
        animate={{ scale: [1, 0.95, 1], rotate: -360 }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        style={{
          position: 'absolute',
          width: '320px',
          height: '320px',
          borderRadius: '50%',
          border: '1.5px dashed #E7C246',
          opacity: 0.3,
        }}
      />

      {/* Pulsing Core Symbol */}
      <div style={{ position: 'relative', width: '120px', height: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {/* Outer Halo */}
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            position: 'absolute',
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            backgroundColor: '#F0D36B',
            filter: 'blur(10px)',
          }}
        />

        {/* Central Core */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
          style={{
            width: '70px',
            height: '70px',
            borderRadius: '20px',
            backgroundColor: '#FAF8F2',
            border: '4px solid #E5A93B',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 8px 24px rgba(229, 169, 59, 0.25)',
            zIndex: 10,
          }}
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#E5A93B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
            <circle cx="12" cy="12" r="4" />
          </svg>
        </motion.div>
      </div>

      {/* Typography & Brand name */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        style={{ marginTop: '40px', textAlign: 'center', zIndex: 10 }}
      >
        <h2 style={{ fontSize: '1.75rem', fontWeight: 700, letterSpacing: '1px', color: '#2D2A26', marginBottom: '8px' }}>
          AMELIA<span style={{ color: '#E5A93B' }}>.</span>PORTAL
        </h2>
        <p style={{ fontSize: '0.85rem', color: '#7C766C', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 600 }}>
          Admin Control Center
        </p>
      </motion.div>

      {/* Loader Bar & Progress Details */}
      <div style={{ width: '280px', marginTop: '35px', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {/* Loading track */}
        <div style={{ width: '100%', height: '5px', backgroundColor: '#F4EFE0', borderRadius: '10px', overflow: 'hidden', marginBottom: '15px' }}>
          <motion.div
            animate={{ width: `${progress}%` }}
            transition={{ ease: 'easeOut', duration: 0.1 }}
            style={{ height: '100%', backgroundColor: '#E5A93B', borderRadius: '10px' }}
          />
        </div>
        
        {/* Text descriptions */}
        <motion.p
          key={phase}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ fontSize: '0.9rem', color: '#7C766C', fontStyle: 'italic', height: '20px' }}
        >
          {phase}
        </motion.p>
        <span style={{ fontSize: '0.85rem', color: '#E5A93B', fontWeight: 700, marginTop: '5px' }}>
          {progress}%
        </span>
      </div>
    </motion.div>
  );
}
