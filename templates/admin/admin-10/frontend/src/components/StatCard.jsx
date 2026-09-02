import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

export default function StatCard({ title, value, growth, growthTime = "from last month", icon: Icon, sparklineData = [], color = "primary" }) {
  const isPositive = growth >= 0;
  
  // Format numbers to localized strings (e.g. 24580 -> 24,580)
  const formattedValue = typeof value === 'number' 
    ? value.toLocaleString(undefined, { maximumFractionDigits: 2 }) 
    : value;

  // Generate SVG path for sparkline
  const getSparklinePath = (data) => {
    if (!data || data.length < 2) return '';
    const width = 100;
    const height = 30;
    const min = Math.min(...data);
    const max = Math.max(...data);
    const range = max - min || 1;
    
    return data.map((val, index) => {
      const x = (index / (data.length - 1)) * width;
      const y = height - ((val - min) / range) * height + 2; // Offset slightly so path doesn't clip
      return `${index === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${y.toFixed(1)}`;
    }).join(' ');
  };

  const sparklinePath = getSparklinePath(sparklineData);

  // Accent and growth colors mapping
  const growthColor = isPositive ? 'var(--success)' : 'var(--danger)';
  const growthBg = isPositive ? 'var(--success-bg)' : 'var(--danger-bg)';
  const GrowthIcon = isPositive ? ArrowUpRight : ArrowDownRight;

  return (
    <motion.div
      whileHover={{ y: -6, boxShadow: 'var(--shadow-md)' }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      style={{
        backgroundColor: 'var(--bg-card)',
        border: '1.5px solid var(--border-color)',
        borderRadius: 'var(--border-radius-md)',
        padding: '24px',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: 'var(--shadow-sm)',
        cursor: 'pointer',
      }}
    >
      {/* Top row: Icon and sparkline */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
        <div style={{
          backgroundColor: 'var(--accent-light)',
          border: '1px solid var(--border-color)',
          borderRadius: '12px',
          padding: '10px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          {Icon && <Icon size={22} style={{ color: 'var(--accent)' }} />}
        </div>

        {/* Inline animated SVG sparkline */}
        {sparklineData.length > 0 && (
          <div style={{ width: '80px', height: '30px' }}>
            <svg width="80" height="30" viewBox="0 0 100 35" fill="none">
              <motion.path
                d={sparklinePath}
                stroke={isPositive ? 'var(--success)' : 'var(--danger)'}
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.2, ease: 'easeInOut' }}
              />
            </svg>
          </div>
        )}
      </div>

      {/* Middle row: Title & Count */}
      <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '6px' }}>
        {title}
      </span>
      <h3 style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--text-main)', letterSpacing: '-0.5px', marginBottom: '12px' }}>
        {formattedValue}
      </h3>

      {/* Bottom row: Growth rate details */}
      <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '8px', marginTop: 'auto' }}>
        <span style={{
          backgroundColor: growthBg,
          color: growthColor,
          fontSize: '0.78rem',
          fontWeight: 700,
          padding: '2px 8px',
          borderRadius: '12px',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '2px'
        }}>
          <GrowthIcon size={12} strokeWidth={3} />
          {Math.abs(growth)}%
        </span>
        <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 500 }}>
          {growthTime}
        </span>
      </div>

      {/* Corner design glow decor */}
      <div style={{
        position: 'absolute',
        top: '-20px',
        right: '-20px',
        width: '80px',
        height: '80px',
        borderRadius: '50%',
        backgroundColor: 'var(--primary)',
        opacity: 0.05,
        filter: 'blur(10px)',
        pointerEvents: 'none'
      }} />
    </motion.div>
  );
}
