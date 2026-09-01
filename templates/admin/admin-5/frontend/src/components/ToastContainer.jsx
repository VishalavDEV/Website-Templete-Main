import React from 'react';
import { CheckCircle, AlertCircle, Info, XCircle } from 'lucide-react';
import { useApp } from '../context/AppContext';
import './Modals.css';

export const ToastContainer = () => {
  const { toasts } = useApp();

  if (toasts.length === 0) return null;

  return (
    <div className="toast-container">
      {toasts.map(toast => (
        <div key={toast.id} className={`toast-item ${toast.type}`}>
          {toast.type === 'success' && <CheckCircle size={18} className="text-success" />}
          {toast.type === 'warning' && <AlertCircle size={18} className="text-warning" />}
          {toast.type === 'danger' && <XCircle size={18} className="text-danger" />}
          {toast.type === 'info' && <Info size={18} className="text-info" />}
          <span>{toast.message}</span>
        </div>
      ))}
    </div>
  );
};
