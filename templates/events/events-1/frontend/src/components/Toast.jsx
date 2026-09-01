import React, { useEffect } from 'react';
import { CheckCircle2, AlertCircle } from 'lucide-react';

export default function Toast({ message, type = 'success', onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 4000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div style={{ position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 3000, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '1rem 1.5rem', borderRadius: 'var(--radius-md)', background: 'var(--bg-surface)', border: '1px solid var(--border-glow)', color: 'var(--text-main)', boxShadow: 'var(--shadow-lg)' }}>
        {type === 'success' ? (
          <CheckCircle2 size={20} style={{ color: 'var(--secondary)' }} />
        ) : (
          <AlertCircle size={20} style={{ color: '#ef4444' }} />
        )}
        <span style={{ fontSize: '0.95rem', fontWeight: 600 }}>{message}</span>
      </div>
    </div>
  );
}
