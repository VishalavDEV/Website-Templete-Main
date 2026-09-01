import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bell, CheckCircle, Info, X } from 'lucide-react';

export default function Notification({ notifications, onClose }) {
  return (
    <div style={{
      position: 'fixed',
      bottom: '64px',
      right: '16px',
      zIndex: 99999,
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      pointerEvents: 'none'
    }}>
      <AnimatePresence>
        {notifications.map(n => (
          <motion.div
            key={n.id}
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 50, scale: 0.9 }}
            style={{
              pointerEvents: 'auto',
              width: '320px',
              backgroundColor: 'var(--bg-glass)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              border: '1px solid var(--border-color)',
              borderLeft: '4px solid var(--royal-blue)',
              borderRadius: '12px',
              padding: '12px 16px',
              boxShadow: 'var(--shadow-window)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '12px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                backgroundColor: 'rgba(37, 99, 235, 0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#2563EB',
                flexShrink: 0
              }}>
                <Bell size={16} />
              </div>

              <div>
                <h5 style={{ fontSize: '13px', fontWeight: 800, color: 'var(--text-main)' }}>{n.title}</h5>
                <p style={{ fontSize: '11px', color: 'var(--text-muted)' }}>{n.message}</p>
              </div>
            </div>

            <button
              onClick={() => onClose(n.id)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)' }}
            >
              <X size={16} />
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
