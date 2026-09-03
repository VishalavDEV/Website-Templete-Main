import React from 'react';

export interface ToastProps {
  message: string;
  visible: boolean;
}

export const Toast: React.FC<ToastProps> = ({ message, visible }) => {
  if (!visible) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        backgroundColor: 'var(--color-deep-brown)',
        color: 'var(--color-ivory)',
        border: '1px solid var(--color-border)',
        padding: '12px 24px',
        fontFamily: 'var(--font-mono)',
        fontSize: '0.78rem',
        letterSpacing: '0.12em',
        zIndex: 3000,
        boxShadow: '0 12px 30px rgba(48, 40, 37, 0.25)',
      }}
    >
      {message}
    </div>
  );
};
