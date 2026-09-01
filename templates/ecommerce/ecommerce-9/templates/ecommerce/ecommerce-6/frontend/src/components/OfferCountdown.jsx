import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Clock } from 'lucide-react';

const OfferCountdown = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const midnight = new Date();
      midnight.setHours(24, 0, 0, 0); // End of today

      const difference = midnight - now;

      if (difference > 0) {
        setTimeLeft({
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num) => String(num).padStart(2, '0');

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-panel"
      style={{
        margin: '0 5% 2rem 5%',
        padding: '1rem 2rem',
        borderRadius: '8px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '1rem',
        border: '1px solid rgba(197, 168, 128, 0.25)',
        boxShadow: 'var(--shadow-glow)'
      }}
    >
      {/* Promotion Text */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <Sparkles size={16} color="var(--accent-gold)" />
        <span style={{ fontSize: '0.85rem', fontWeight: '700', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
          ARCHIVE DROP: <span style={{ color: 'var(--accent-gold)' }}>50% OFF</span> ALL ACOUSTICS CODE:{' '}
          <span style={{ borderBottom: '1px dashed var(--text-primary)', fontWeight: '800' }}>FLASH50</span>
        </span>
      </div>

      {/* Countdown Timer digits */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', fontWeight: '600' }}>
        <Clock size={14} style={{ color: 'var(--text-muted)' }} />
        <span style={{ color: 'var(--text-secondary)', marginRight: '0.25rem' }}>OFFER EXPIRES IN:</span>
        <div style={{ display: 'flex', gap: '0.2rem', fontFamily: 'monospace', fontSize: '0.95rem' }}>
          <motion.div
            key={timeLeft.hours}
            initial={{ y: -5, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            style={{ padding: '2px 6px', background: 'var(--bg-tertiary)', borderRadius: '3px' }}
          >
            {formatNumber(timeLeft.hours)}
          </motion.div>
          <span>:</span>
          <motion.div
            key={timeLeft.minutes}
            initial={{ y: -5, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            style={{ padding: '2px 6px', background: 'var(--bg-tertiary)', borderRadius: '3px' }}
          >
            {formatNumber(timeLeft.minutes)}
          </motion.div>
          <span>:</span>
          <motion.div
            key={timeLeft.seconds}
            initial={{ y: -5, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            style={{ padding: '2px 6px', background: 'var(--bg-tertiary)', borderRadius: '3px', color: 'var(--accent-gold)' }}
          >
            {formatNumber(timeLeft.seconds)}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default OfferCountdown;
