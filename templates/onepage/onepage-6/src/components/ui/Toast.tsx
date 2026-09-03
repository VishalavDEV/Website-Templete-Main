import React from 'react';
import { useToast } from '../../context/ToastContext';
import { X, Radio } from 'lucide-react';

export const ToastContainer: React.FC = () => {
  const { toasts, removeToast } = useToast();

  if (toasts.length === 0) return null;

  return (
    <div style={{
      position: 'fixed',
      top: '90px',
      right: '24px',
      zIndex: 9999,
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      pointerEvents: 'none'
    }}>
      {toasts.map(toast => (
        <div
          key={toast.id}
          style={{
            pointerEvents: 'auto',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            padding: '12px 18px',
            background: 'var(--bg-dark)',
            color: 'var(--text-on-dark)',
            borderLeft: '4px solid var(--accent-warm)',
            borderRadius: '2px',
            boxShadow: '0 10px 25px rgba(0,0,0,0.3)',
            fontFamily: 'var(--font-grotesk)',
            fontSize: '0.85rem',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            animation: 'fadeIn 0.3s ease-out',
            minWidth: '260px'
          }}
        >
          <Radio size={16} style={{ color: 'var(--coral)', flexShrink: 0 }} />
          <span style={{ flexGrow: 1 }}>{toast.message}</span>
          <button
            onClick={() => removeToast(toast.id)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--text-muted-on-dark)',
              padding: '2px'
            }}
            aria-label="Dismiss toast"
          >
            <X size={14} />
          </button>
        </div>
      ))}
    </div>
  );
};
