import React from 'react';
import { motion } from 'framer-motion';

export default function ChartCard({ title, subtitle, children, action }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      style={{
        backgroundColor: 'var(--bg-card)',
        border: '1.5px solid var(--border-color)',
        borderRadius: 'var(--border-radius-md)',
        padding: '24px',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: 'var(--shadow-sm)',
        position: 'relative',
        width: '100%',
        height: '100%',
      }}
    >
      {/* Chart Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-main)' }}>
            {title}
          </h4>
          {subtitle && (
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 500 }}>
              {subtitle}
            </span>
          )}
        </div>
        {action && (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {action}
          </div>
        )}
      </div>

      {/* Chart Canvas Area */}
      <div style={{ flexGrow: 1, minHeight: '260px', position: 'relative', width: '100%' }}>
        {children}
      </div>
    </motion.div>
  );
}
