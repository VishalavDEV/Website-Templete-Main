import React, { useState, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export default function TiltCard({ children, className }) {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const shouldReduceMotion = useReducedMotion();

  const handleMouseMove = (e) => {
    if (shouldReduceMotion || !cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;

    // Scale rotations to maximum 8 degrees
    const rX = -(mouseY / (height / 2)) * 8;
    const rY = (mouseX / (width / 2)) * 8;
    setTilt({ x: rX, y: rY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ 
        rotateX: shouldReduceMotion ? 0 : tilt.x, 
        rotateY: shouldReduceMotion ? 0 : tilt.y, 
        scale: !shouldReduceMotion && tilt.x !== 0 ? 1.02 : 1 
      }}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
      className={className}
    >
      <div style={{ transform: shouldReduceMotion ? 'none' : 'translateZ(20px)' }} className="h-full w-full">
        {children}
      </div>
    </motion.div>
  );
}
