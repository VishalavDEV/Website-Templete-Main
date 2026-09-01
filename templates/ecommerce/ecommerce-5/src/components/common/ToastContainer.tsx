import React from 'react';
import { CheckCircle } from 'lucide-react';
import { useShop } from '../../context/ShopContext';

export const ToastContainer: React.FC = () => {
  const { toasts } = useShop();

  if (toasts.length === 0) return null;

  return (
    <div className="toast-container">
      {toasts.map((toast) => (
        <div key={toast.id} className="toast-item">
          <CheckCircle size={16} style={{ color: 'var(--accent-bronze)' }} />
          <span>{toast.message}</span>
        </div>
      ))}
    </div>
  );
};
