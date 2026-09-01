import React, { useEffect, useState } from 'react';

export const ScrollProgress = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const currentScroll = window.scrollY;
      if (documentHeight > 0) {
        setScrollPercentage((currentScroll / documentHeight) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: `${scrollPercentage}%`,
        height: '3px',
        background: 'linear-gradient(90deg, #00ff66, #00f0ff)',
        boxShadow: '0 0 10px #00ff66',
        zIndex: 10000,
        transition: 'width 0.1s ease-out'
      }}
    />
  );
};

export default ScrollProgress;
