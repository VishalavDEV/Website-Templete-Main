import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTop = () => {
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
      aria-label="Scroll to top"
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        width: '45px',
        height: '45px',
        backgroundColor: '#0a0e0a',
        color: '#00ff66',
        border: '1px solid #00ff66',
        borderRadius: '8px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        boxShadow: '0 0 15px rgba(0, 255, 102, 0.3)',
        zIndex: 999,
        transition: 'all 0.3s ease'
      }}
      className="interactive"
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = '#00ff66';
        e.currentTarget.style.color = '#000';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = '#0a0e0a';
        e.currentTarget.style.color = '#00ff66';
      }}
    >
      <ArrowUp size={20} />
    </button>
  );
};

export default ScrollToTop;
