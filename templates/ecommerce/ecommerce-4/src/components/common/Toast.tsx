import React from 'react';
import { useShop } from '../../context/ShopContext';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const ToastContainer: React.FC = () => {
  const { toasts, removeToast } = useShop();

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 600,
        display: 'flex',
        flexDirection: 'column',
        gap: '0.75rem',
        maxWidth: '360px',
        width: '100%'
      }}
    >
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 50, scale: 0.9 }}
            transition={{ duration: 0.25 }}
            style={{
              backgroundColor: '#FFFFFF',
              color: 'var(--text-primary)',
              borderRadius: 'var(--radius-md)',
              border: '1.5px solid var(--accent-blue)',
              boxShadow: 'var(--shadow-float)',
              padding: '0.85rem 1.1rem',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '0.75rem'
            }}
          >
            {toast.type === 'success' && <CheckCircle2 size={18} color="#15803D" style={{ marginTop: '2px' }} />}
            {toast.type === 'warning' && <AlertCircle size={18} color="var(--accent-amber)" style={{ marginTop: '2px' }} />}
            {toast.type === 'info' && <Info size={18} color="var(--accent-blue)" style={{ marginTop: '2px' }} />}

            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '0.82rem', fontWeight: 800 }}>{toast.title}</div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', marginTop: '2px' }}>{toast.message}</div>
            </div>

            <button onClick={() => removeToast(toast.id)} style={{ color: 'var(--text-muted)' }}>
              <X size={14} />
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};
