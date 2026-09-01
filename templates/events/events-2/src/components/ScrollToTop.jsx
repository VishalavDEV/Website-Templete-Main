import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      style={{
        position: 'fixed',
        bottom: '32px',
        right: '32px',
        width: '48px',
        height: '48px',
        borderRadius: '50%',
        background: 'linear-gradient(135deg, #7c3aed, #06b6d4)',
        border: 'none',
        color: '#ffffff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        boxShadow: '0 10px 25px rgba(124, 58, 237, 0.4)',
        zIndex: 900,
        transition: 'transform 0.3s ease, opacity 0.3s ease',
        animation: 'bounceIn 0.3s ease'
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-4px) scale(1.08)')}
      onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0) scale(1)')}
    >
      <ArrowUp size={22} />
    </button>
  );
};
