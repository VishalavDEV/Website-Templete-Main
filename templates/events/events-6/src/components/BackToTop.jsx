import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      style={{
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        width: '48px',
        height: '48px',
        borderRadius: '50%',
        backgroundColor: '#101010',
        border: '1px solid var(--gold-bright)',
        color: 'var(--gold-bright)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 999,
        cursor: 'pointer',
        boxShadow: '0 0 20px rgba(245, 185, 0, 0.3)',
        transition: 'all 0.3s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = 'var(--gold-bright)';
        e.currentTarget.style.color = '#000';
        e.currentTarget.style.transform = 'translateY(-4px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = '#101010';
        e.currentTarget.style.color = 'var(--gold-bright)';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      <ArrowUp size={20} />
    </button>
  );
}
