import React, { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export const PageTransition: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const [transitioning, setTransitioning] = useState(false);
  const isFirstRender = useRef(true);

  useEffect(() => {
    // Skip transition on initial mount
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    // Trigger smooth curtain animation ONLY on route change
    setTransitioning(true);
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
      setTransitioning(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen">
      {/* Wipe Curtain */}
      <div
        className={`fixed inset-0 z-[9900] bg-[#090909] pointer-events-none transition-transform duration-300 ease-in-out ${
          transitioning ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'
        } origin-top`}
      />
      <div className={`transition-opacity duration-200 ${transitioning ? 'opacity-0' : 'opacity-100'}`}>
        {children}
      </div>
    </div>
  );
};
