import React from 'react';

export default function Toast({ message, onClose }) {
  if (!message) return null;

  return (
    <div 
      className="arcstone-toast" 
      onClick={onClose}
      style={{
        position: 'fixed',
        bottom: '28px',
        right: '28px',
        background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
        border: '1px solid var(--color-sage)',
        color: '#f8fafc',
        padding: '16px 24px',
        borderRadius: '10px',
        boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
        zIndex: 9999,
        maxWidth: '420px',
        fontSize: '0.9rem',
        lineHeight: 1.5,
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        cursor: 'pointer',
        animation: 'slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
      }}
    >
      <span style={{ fontSize: '1.2rem' }}>✨</span>
      <span>{message}</span>
    </div>
  );
}
