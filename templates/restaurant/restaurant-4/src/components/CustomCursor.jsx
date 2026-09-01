import React, { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const cursorTextRef = useRef(null);
  const [cursorClasses, setCursorClasses] = useState('custom-cursor');
  const [cursorText, setCursorText] = useState('');
  const [isCoarse, setIsCoarse] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsCoarse(true);
      return;
    }

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let cursorX = mouseX;
    let cursorY = mouseY;
    let animId;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      cursorX += (mouseX - cursorX) * 0.2;
      cursorY += (mouseY - cursorY) * 0.2;
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0) translate(-50%, -50%)`;
      }
      animId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animId = requestAnimationFrame(animate);

    // Dynamic mouseover / mouseout delegation for [data-cursor] elements
    const handleMouseOver = (e) => {
      const target = e.target.closest('[data-cursor]');
      if (target) {
        const cursorVal = target.getAttribute('data-cursor') || '';
        const explicitText = target.getAttribute('data-cursor-text');

        let classes = 'custom-cursor active';
        if (cursorVal === 'blue' || cursorVal === 'sage') {
          classes += ` ${cursorVal}`;
        }
        setCursorClasses(classes);

        if (explicitText) {
          setCursorText(explicitText);
        } else if (cursorVal && cursorVal !== 'blue' && cursorVal !== 'sage') {
          setCursorText(cursorVal);
        } else {
          setCursorText('OPEN');
        }
      }
    };

    const handleMouseOut = (e) => {
      const target = e.target.closest('[data-cursor]');
      if (target) {
        // Check if moving to an element outside the target
        const related = e.relatedTarget ? e.relatedTarget.closest('[data-cursor]') : null;
        if (!related || related !== target) {
          setCursorClasses('custom-cursor');
          setCursorText('');
        }
      }
    };

    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animId);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  if (isCoarse) return null;

  return (
    <div className={cursorClasses} id="custom-cursor" ref={cursorRef}>
      <span className="custom-cursor-text" id="custom-cursor-text" ref={cursorTextRef}>
        {cursorText}
      </span>
    </div>
  );
}
