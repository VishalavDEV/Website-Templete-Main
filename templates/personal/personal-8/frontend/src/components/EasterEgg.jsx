import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Sparkles, Trophy, Flame, X, Gamepad2 } from 'lucide-react';

export default function EasterEgg({ onClose }) {
  useEffect(() => {
    // Launch celebratory confetti burst
    const end = Date.now() + 2.5 * 1000;
    const colors = ['#2563EB', '#F97316', '#10B981', '#8B5CF6'];

    (function frame() {
      confetti({
        particleCount: 4,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors
      });
      confetti({
        particleCount: 4,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }());
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(15, 23, 42, 0.85)',
        backdropFilter: 'blur(10px)',
        zIndex: 99999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px'
      }}
      onClick={onClose}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: '520px',
          backgroundColor: '#0F172A',
          border: '2px solid #F97316',
          borderRadius: '20px',
          padding: '36px',
          textAlign: 'center',
          color: '#F8FAFC',
          boxShadow: '0 0 50px rgba(249, 115, 22, 0.5)',
          position: 'relative'
        }}
      >
        <button
          onClick={onClose}
          style={{ position: 'absolute', top: 16, right: 16, background: 'none', border: 'none', cursor: 'pointer', color: '#94A3B8' }}
        >
          <X size={24} />
        </button>

        <motion.div
          animate={{ rotate: [0, -10, 10, -10, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 1, repeat: Infinity, repeatDelay: 1 }}
          style={{ display: 'inline-block', marginBottom: '16px' }}
        >
          <Gamepad2 size={64} color="#F97316" />
        </motion.div>

        <h1 style={{ fontSize: '32px', fontWeight: 900, color: '#F97316', letterSpacing: '1px', marginBottom: '8px' }}>
          🎉 YOU FOUND THE SECRET!
        </h1>

        <p style={{ fontSize: '15px', color: '#2563EB', fontWeight: 700, marginBottom: '16px' }}>
          VISHAL OS HIDDEN EASTER EGG UNLOCKED!
        </p>

        <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.8)', padding: '16px', borderRadius: '12px', fontSize: '13px', color: '#94A3B8', lineHeight: '1.6', marginBottom: '24px' }}>
          "Great engineers don't just build functional systems — they embed curiosity, passion, and delight into every line of code."
        </div>

        <button className="accent-btn" onClick={onClose} style={{ padding: '12px 28px', fontSize: '14px' }}>
          <Sparkles size={18} /> Return to Desktop
        </button>
      </div>
    </motion.div>
  );
}
