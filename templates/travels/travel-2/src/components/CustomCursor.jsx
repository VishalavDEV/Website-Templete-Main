import React, { useEffect, useState, useRef } from 'react';
import { MapPin, Search, Plane, Compass } from 'lucide-react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(true);
  const [hoverState, setHoverState] = useState('default'); // 'default', 'link', 'pin', 'zoom', 'route', 'compass'
  const [reducedMotion, setReducedMotion] = useState(false);
  const trailRef = useRef([]);

  useEffect(() => {
    // Check reduced motion settings
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);
    const listener = (e) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', listener);

    return () => mediaQuery.removeEventListener('change', listener);
  }, []);

  useEffect(() => {
    if (reducedMotion) {
      document.body.classList.remove('custom-cursor-active');
      return;
    }

    document.body.classList.add('custom-cursor-active');

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setHidden(false);

      // Mouse trail effect
      if (trailRef.current.length < 8) {
        trailRef.current.push({ x: e.clientX, y: e.clientY, id: Math.random() });
      } else {
        trailRef.current.shift();
        trailRef.current.push({ x: e.clientX, y: e.clientY, id: Math.random() });
      }
    };

    const handleMouseLeave = () => setHidden(true);
    const handleMouseEnter = () => setHidden(false);

    // Event delegation for custom cursor states
    const handleMouseOver = (e) => {
      const target = e.target.closest('[data-cursor]');
      if (target) {
        const cursorType = target.getAttribute('data-cursor');
        setHoverState(cursorType);
      } else if (
        e.target.tagName === 'A' ||
        e.target.tagName === 'BUTTON' ||
        e.target.closest('button') ||
        e.target.closest('a') ||
        e.target.classList.contains('interactive')
      ) {
        setHoverState('link');
      } else {
        setHoverState('default');
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseover', handleMouseOver);
      document.body.classList.remove('custom-cursor-active');
    };
  }, [reducedMotion]);

  if (reducedMotion || hidden) return null;

  const renderCursorIcon = () => {
    switch (hoverState) {
      case 'pin':
        return <MapPin className="text-[#ff2a74] animate-bounce" size={24} />;
      case 'zoom':
        return <Search className="text-[#0066ff] animate-pulse" size={24} />;
      case 'route':
        return <Plane className="text-[#ff8da1] rotate-45 animate-pulse" size={24} />;
      case 'compass':
        return <Compass className="text-[#ff2a74] animate-spin" style={{ animationDuration: '6s' }} size={24} />;
      default:
        return null;
    }
  };

  return (
    <>
      {/* Outer ring */}
      <div
        className="fixed pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 rounded-full border transition-all duration-150 ease-out"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: hoverState === 'default' ? '30px' : hoverState === 'link' ? '50px' : '60px',
          height: hoverState === 'default' ? '30px' : hoverState === 'link' ? '50px' : '60px',
          borderColor: hoverState === 'pin' ? '#ff2a74' : hoverState === 'zoom' ? '#0066ff' : hoverState === 'route' ? '#ff8da1' : 'rgba(255, 42, 116, 0.4)',
          backgroundColor: hoverState === 'link' ? 'rgba(255, 42, 116, 0.08)' : 'transparent',
          boxShadow: hoverState !== 'default' ? '0 0 20px rgba(255, 42, 116, 0.2)' : 'none',
        }}
      >
        {hoverState === 'default' && (
          <div className="absolute top-1/2 left-1/2 w-1.5 h-1.5 bg-[#ff2a74] -translate-x-1/2 -translate-y-1/2 rounded-full" />
        )}
      </div>

      {/* Custom Icon Overlay */}
      {hoverState !== 'default' && hoverState !== 'link' && (
        <div
          className="fixed pointer-events-none z-[10000] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center bg-white/90 backdrop-blur-sm p-2 rounded-full border border-stone-100 shadow-lg"
          style={{
            left: `${position.x}px`,
            top: `${position.y}px`,
          }}
        >
          {renderCursorIcon()}
        </div>
      )}
    </>
  );
}
