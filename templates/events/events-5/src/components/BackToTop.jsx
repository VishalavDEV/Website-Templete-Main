import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      if (window.scrollY > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisible);
    return () => window.removeEventListener('scroll', toggleVisible);
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
      aria-label="Back to top"
      style={{
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        zIndex: 999,
        width: '46px',
        height: '46px',
        borderRadius: '12px',
        background: 'rgba(17, 20, 23, 0.9)',
        border: '1px solid #7cff4f',
        color: '#7cff4f',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 0 20px rgba(124, 255, 79, 0.4)',
        cursor: 'pointer',
        backdropFilter: 'blur(8px)',
        transition: 'all 0.25s ease'
      }}
    >
      <ArrowUp size={22} />
    </button>
  );
};

export default BackToTop;
