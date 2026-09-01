import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'framer-motion';

export function EditorialTiltCard({
  children,
  className = '',
  tiltStrength = 10, // Restrained for tasteful editorial feel
  onClick,
  ...props
}) {
  const cardRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 24, stiffness: 260, mass: 0.12 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [tiltStrength, -tiltStrength]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-tiltStrength, tiltStrength]), springConfig);

  // Counter-directional parallax for inner image layer
  const innerParallaxX = useSpring(useTransform(mouseX, [-0.5, 0.5], [12, -12]), springConfig);
  const innerParallaxY = useSpring(useTransform(mouseY, [-0.5, 0.5], [12, -12]), springConfig);

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (shouldReduceMotion || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={`perspective-[1000px] select-none ${className}`}
      {...props}
    >
      <motion.div
        style={{
          rotateX: shouldReduceMotion ? 0 : rotateX,
          rotateY: shouldReduceMotion ? 0 : rotateY,
          transformStyle: 'preserve-3d',
        }}
        whileHover={{ scale: 1.012 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="w-full h-full relative"
      >
        {typeof children === 'function'
          ? children({ innerParallaxX, innerParallaxY, isHovered })
          : children}
      </motion.div>
    </div>
  );
}
