import React from 'react';

export default function Toast({ toasts }) {
  if (!toasts || toasts.length === 0) return null;

  return (
    <div className="toast-container" id="toastContainer" style={{ zIndex: 999999 }}>
      {toasts.map((toast) => (
        <div 
          key={toast.id} 
          className="toast"
          style={{
            borderColor: toast.type === 'error' ? '#ef4444' : 'var(--gold-primary)',
            boxShadow: '0 10px 30px rgba(0,0,0,0.7)',
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}
        >
          <div 
            className="toast-icon"
            style={{ 
              color: toast.type === 'error' ? '#ef4444' : 'var(--gold-primary)',
              fontWeight: 'bold',
              fontSize: '1.2rem'
            }}
          >
            {toast.type === 'error' ? '✕' : '★'}
          </div>
          <div style={{ color: 'var(--text-light)', fontSize: '0.9rem', lineHeight: 1.4 }}>
            {toast.message}
          </div>
        </div>
      ))}
    </div>
  );
}
