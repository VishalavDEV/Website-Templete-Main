import React, { useEffect, useRef, useState } from 'react';

/**
 * 31 — Custom Architectural Cursor
 * Desktop: Small circle
 * Hovering project -> "VIEW"
 * Hovering button -> "OPEN"
 * Hovering image -> "EXPLORE"
 * Strictly pointer-events: none, disabled on touch devices.
 */
export const CustomCursor = () => {
  const followerRef = useRef(null);
  const dotRef = useRef(null);
  const [cursorText, setCursorText] = useState('');
  const [cursorMode, setCursorMode] = useState(''); // 'view' | 'open' | 'explore' | 'active'

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let followerX = mouseX;
    let followerY = mouseY;
    let animId;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.left = `${mouseX}px`;
        dotRef.current.style.top = `${mouseY}px`;
      }
    };

    const animate = () => {
      // Precise intentional lerp damping
      followerX += (mouseX - followerX) * 0.16;
      followerY += (mouseY - followerY) * 0.16;

      if (followerRef.current) {
        followerRef.current.style.left = `${followerX}px`;
        followerRef.current.style.top = `${followerY}px`;
      }
      animId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    animId = requestAnimationFrame(animate);

    // Event delegation for contextual cursor hover labels
    const handleMouseOver = (e) => {
      const target = e.target;

      // Project row hover -> VIEW
      const projectRow = target.closest('.project-row, .timeline-stage-card');
      if (projectRow) {
        setCursorText('VIEW');
        setCursorMode('view');
        return;
      }

      // Button / CTA hover -> OPEN
      const buttonEl = target.closest('button, .btn-cta-nav, .btn-cta-large, .btn-explore-project, .scroll-link');
      if (buttonEl) {
        setCursorText('OPEN');
        setCursorMode('open');
        return;
      }

      // Image or visual plate hover -> EXPLORE
      const imageEl = target.closest('.hero-visual-frame, .featured-canvas-wrapper, .overlay-image-gallery, .studio-layered-visual, .material-hero-surface');
      if (imageEl) {
        setCursorText('EXPLORE');
        setCursorMode('explore');
        return;
      }

      // General interactive links
      const linkEl = target.closest('a');
      if (linkEl) {
        setCursorText('');
        setCursorMode('active');
        return;
      }

      // Reset
      setCursorText('');
      setCursorMode('');
    };

    const handleMouseOut = (e) => {
      if (!e.relatedTarget) {
        setCursorText('');
        setCursorMode('');
      }
    };

    document.addEventListener('mouseover', handleMouseOver, { passive: true });
    document.addEventListener('mouseout', handleMouseOut, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <>
      <div 
        ref={followerRef} 
        className={`arch-cursor-follower ${cursorMode ? `mode-${cursorMode}` : ''}`} 
        aria-hidden="true"
      >
        {cursorText && <span className="cursor-label-text">{cursorText}</span>}
      </div>
      <div ref={dotRef} className="arch-cursor-dot" aria-hidden="true" />
    </>
  );
};
