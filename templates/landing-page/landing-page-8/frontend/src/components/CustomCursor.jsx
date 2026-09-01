import React, { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  
  const [cursorType, setCursorType] = useState('default'); // 'default', 'project', 'explore', 'button', 'link'
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  // Position coordinates
  const mousePos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Check if device supports hover and viewport is desktop
    const checkDevice = () => {
      const isDesktop = window.matchMedia('(min-width: 1025px)').matches;
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      setIsMobile(!isDesktop || prefersReducedMotion);
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);

    if (isMobile) return;

    // Mouse events
    const onMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);

    // Global Hover Event Delegation
    const handleMouseOver = (e) => {
      // Find closest interactive element
      const target = e.target;
      if (!target) return;

      const projectEl = target.closest('[data-cursor="project"]');
      const exploreEl = target.closest('[data-cursor="explore"]');
      const buttonEl = target.closest('button, .btn-primary, .btn-secondary, [data-cursor="button"]');
      const linkEl = target.closest('a, [data-cursor="link"]');

      if (projectEl) {
        setCursorType('project');
      } else if (exploreEl) {
        setCursorType('explore');
      } else if (buttonEl) {
        setCursorType('button');
      } else if (linkEl) {
        setCursorType('link');
      } else {
        setCursorType('default');
      }
    };

    document.addEventListener('mouseover', handleMouseOver);

    // Easing Loop (requestAnimationFrame Lerp)
    let animationFrameId;
    
    const updateCursor = () => {
      // Linear interpolation (lerp) formula: Current = Current + (Target - Current) * Ease
      const ease = 0.15; // trailing speed
      
      // Update Dot
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mousePos.current.x}px, ${mousePos.current.y}px, 0) translate(-50%, -50%)`;
      }

      // Update Ring
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * ease;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * ease;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) translate(-50%, -50%)`;
      }

      animationFrameId = requestAnimationFrame(updateCursor);
    };

    updateCursor();

    return () => {
      window.removeEventListener('resize', checkDevice);
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isMobile, isVisible]);

  if (isMobile) return null;

  // Determine styles/labels based on hovered target
  const getRingDimensions = () => {
    switch (cursorType) {
      case 'project':
      case 'explore':
        return { width: '90px', height: '90px', backgroundColor: 'var(--accent-color)', borderColor: 'var(--accent-color)' };
      case 'button':
        return { width: '50px', height: '50px', backgroundColor: 'transparent', borderColor: 'var(--accent-color)', borderWidth: '2px' };
      case 'link':
        return { width: '35px', height: '35px', backgroundColor: 'rgba(255, 90, 31, 0.1)', borderColor: 'var(--accent-color)' };
      default:
        return { width: '22px', height: '22px', backgroundColor: 'transparent', borderColor: 'var(--text-primary)' };
    }
  };

  const ringStyles = getRingDimensions();

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 9999,
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.3s ease'
      }}
    >
      {/* 1. Center Core Dot */}
      <div 
        ref={dotRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '5px',
          height: '5px',
          backgroundColor: 'var(--accent-color)',
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
          transition: 'width 0.2s, height 0.2s',
          zIndex: 2,
          // Hide center dot when expanding into project text bubbles
          opacity: (cursorType === 'project' || cursorType === 'explore') ? 0 : 1
        }}
      />

      {/* 2. Trailing Ring/Text Bubble */}
      <div 
        ref={ringRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          borderRadius: '50%',
          border: '1px solid',
          borderColor: ringStyles.borderColor,
          backgroundColor: ringStyles.backgroundColor,
          borderWidth: ringStyles.borderWidth || '1px',
          width: ringStyles.width,
          height: ringStyles.height,
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
          transition: 'width 0.3s cubic-bezier(0.16, 1, 0.3, 1), height 0.3s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.3s ease, border-color 0.3s ease',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          zIndex: 1
        }}
      >
        {/* Floating Bubble Labels */}
        {cursorType === 'project' && (
          <span 
            style={{ 
              color: '#FFFFFF', 
              fontFamily: 'var(--font-body)', 
              fontSize: '0.65rem', 
              fontWeight: 800, 
              letterSpacing: '0.08em', 
              textAlign: 'center',
              textTransform: 'uppercase',
              animation: 'fadeIn 0.2s ease forwards'
            }}
          >
            View<br />Project
          </span>
        )}

        {cursorType === 'explore' && (
          <span 
            style={{ 
              color: '#FFFFFF', 
              fontFamily: 'var(--font-body)', 
              fontSize: '0.65rem', 
              fontWeight: 800, 
              letterSpacing: '0.08em', 
              textAlign: 'center',
              textTransform: 'uppercase',
              animation: 'fadeIn 0.2s ease forwards'
            }}
          >
            Explore
          </span>
        )}
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
}
