import React, { useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, AlertCircle, Info } from 'lucide-react';
import { EcomContext } from '../context/EcomContext';

const ToastNotification = () => {
  const { toasts } = useContext(EcomContext);

  const getIcon = (type) => {
    switch (type) {
      case 'success':
        return <CheckCircle size={18} style={{ color: '#00cc66' }} />;
      case 'error':
        return <AlertCircle size={18} style={{ color: '#ff4d4d' }} />;
      default:
        return <Info size={18} style={{ color: '#7c5cff' }} />;
    }
  };

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 100000,
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        pointerEvents: 'none',
      }}
    >
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, y: 30, scale: 0.9, filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, scale: 0.85, filter: 'blur(4px)', transition: { duration: 0.25 } }}
            style={{
              pointerEvents: 'auto',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '16px 24px',
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              border: '1px solid rgba(124, 92, 255, 0.15)',
              borderRadius: '16px',
              boxShadow: '0 10px 30px rgba(124, 92, 255, 0.12)',
            }}
          >
            {getIcon(toast.type)}
            <span style={{ fontSize: '0.9rem', color: '#1e133e', fontWeight: 500, fontFamily: 'Inter' }}>
              {toast.message}
            </span>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default ToastNotification;
