import React, { useEffect, useRef, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const [followerText, setFollowerText] = useState('');
  const [isFollowerActive, setIsFollowerActive] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 992) {
      document.body.classList.remove('has-custom-cursor');
      return;
    }

    document.body.classList.add('has-custom-cursor');

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX: x, clientY: y } = e;
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${x}px, ${y}px)`;
      }
      if (followerRef.current) {
        followerRef.current.style.transform = `translate(${x}px, ${y}px)`;
      }
    };

    const attachHoverListeners = () => {
      const hoverables = document.querySelectorAll('.hover-cursor, a, button, select');
      hoverables.forEach((el) => {
        const handleMouseEnter = () => {
          setIsFollowerActive(true);
          const customText = el.getAttribute('data-cursor') || '';
          setFollowerText(customText);
        };
        const handleMouseLeave = () => {
          setIsFollowerActive(false);
          setFollowerText('');
        };
        el.addEventListener('mouseenter', handleMouseEnter);
        el.addEventListener('mouseleave', handleMouseLeave);
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    attachHoverListeners();

    const timer = setTimeout(attachHoverListeners, 500);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <div className="custom-cursor" id="customCursor" ref={cursorRef}></div>
      <div
        className={`custom-cursor-follower ${isFollowerActive ? 'active' : ''}`}
        id="customCursorFollower"
        ref={followerRef}
      >
        {followerText}
      </div>
    </>
  );
};

export default CustomCursor;
