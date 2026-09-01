import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const MagneticButton = ({ children, className = '', style = {}, onClick, type = 'button' }) => {
  const buttonRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  // Set up motion values
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Configure smooth elastic springs
  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const buttonElement = buttonRef.current;
    if (!buttonElement) return;

    const { left, top, width, height } = buttonElement.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    // Shift offset calculations (reduced strength for subtle movement)
    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;

    x.set(distanceX * 0.35);
    y.set(distanceY * 0.35);
  };

  const handleMouseLeave = () => {
    setHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        display: 'inline-block',
        position: 'relative',
        ...style
      }}
    >
      <motion.button
        type={type}
        onClick={onClick}
        className={className}
        style={{
          transform: `translate3d(${springX}px, ${springY}px, 0)`,
          position: 'relative',
          zIndex: 1
        }}
        whileTap={{ scale: 0.97 }}
      >
        {children}
      </motion.button>
    </motion.div>
  );
};

export default MagneticButton;
