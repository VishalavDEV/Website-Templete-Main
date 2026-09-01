import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Sparkles, CheckCircle2, Info, AlertCircle } from 'lucide-react';

export default function ToastNotification() {
  const { toast } = useContext(ShopContext);

  if (!toast) return null;

  const getIcon = () => {
    switch (toast.type) {
      case 'error':
        return <AlertCircle size={18} className="text-red-400" />;
      case 'info':
        return <Info size={18} className="text-amber-300" />;
      default:
        return <Sparkles size={18} style={{ color: 'var(--gold-primary)' }} />;
    }
  };

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        gap: '0.8rem',
        padding: '1rem 1.6rem',
        background: '#1A1817',
        color: '#FAF7F2',
        border: '1px solid var(--gold-primary)',
        boxShadow: 'var(--shadow-gold)',
        fontSize: '0.85rem',
        letterSpacing: '0.04em',
        animation: 'slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards'
      }}
    >
      {getIcon()}
      <span>{toast.message}</span>
    </div>
  );
}
