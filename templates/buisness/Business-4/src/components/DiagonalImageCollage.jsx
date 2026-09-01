import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'framer-motion';

export default function DiagonalImageCollage({ images }) {
  const prefersReducedMotion = useReducedMotion();
  const [isDesktop, setIsDesktop] = useState(false);

  // Mouse coordinates relative to container center
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for parallax lag effect
  const springConfig = { damping: 30, stiffness: 200, mass: 0.5 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Parallax transform calculations for each image layer (different multipliers for depth)
  // Image 1 (top-left) shifts slightly left and up
  const x1 = useTransform(springX, [-200, 200], isDesktop && !prefersReducedMotion ? [-10, 10] : [0, 0]);
  const y1 = useTransform(springY, [-200, 200], isDesktop && !prefersReducedMotion ? [-10, 10] : [0, 0]);

  // Image 2 (bottom-left) shifts in opposite direction
  const x2 = useTransform(springX, [-200, 200], isDesktop && !prefersReducedMotion ? [10, -10] : [0, 0]);
  const y2 = useTransform(springY, [-200, 200], isDesktop && !prefersReducedMotion ? [10, -10] : [0, 0]);

  // Image 3 (diagonal inset - right) shifts more strongly
  const x3 = useTransform(springX, [-200, 200], isDesktop && !prefersReducedMotion ? [-18, 18] : [0, 0]);
  const y3 = useTransform(springY, [-200, 200], isDesktop && !prefersReducedMotion ? [18, -18] : [0, 0]);

  const handleMouseMove = (e) => {
    if (!isDesktop || prefersReducedMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    // Normalize coordinates around center: -width/2 to width/2
    const x = e.clientX - rect.left - width / 2;
    const y = e.clientY - rect.top - height / 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    // Reset to center smoothly
    mouseX.set(0);
    mouseY.set(0);
  };

  // Clip path templates
  const clip1 = 'polygon(0 0, 100% 0, 80% 100%, 0 100%)';
  const clip2 = 'polygon(0 0, 82% 0, 100% 100%, 0 100%)';
  const clip3 = 'polygon(18% 0, 100% 0, 100% 100%, 0 100%)';

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full aspect-[5/4] md:aspect-square lg:aspect-[1.1] overflow-hidden bg-brand-light/30 rounded-sm p-2 cursor-crosshair select-none"
    >
      {/* Outer Border Box */}
      <div className="absolute inset-0 border border-brand-border/40 pointer-events-none z-0" />

      {/* Image 1: Top-Left Workspace */}
      <motion.div
        initial={prefersReducedMotion ? { opacity: 0 } : { x: -80, y: -80, opacity: 0 }}
        animate={{ x: 0, y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        style={{ x: x1, y: y1, clipPath: clip1 }}
        className="absolute top-2 left-2 w-[57%] h-[55%] bg-white p-[3px] shadow-sm z-10 overflow-hidden"
      >
        <div style={{ clipPath: clip1 }} className="w-full h-full overflow-hidden bg-brand-light">
          <motion.img
            src={images.image1}
            alt="Corporate Environment"
            className="w-full h-full object-cover scale-[1.15]"
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.6 }}
          />
        </div>
      </motion.div>

      {/* Image 2: Bottom-Left Team Collaboration */}
      <motion.div
        initial={prefersReducedMotion ? { opacity: 0 } : { x: -80, y: 80, opacity: 0 }}
        animate={{ x: 0, y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
        style={{ x: x2, y: y2, clipPath: clip2 }}
        className="absolute bottom-2 left-2 w-[59%] h-[39%] bg-white p-[3px] shadow-sm z-20 overflow-hidden"
      >
        <div style={{ clipPath: clip2 }} className="w-full h-full overflow-hidden bg-brand-light">
          <motion.img
            src={images.image2}
            alt="Team Collaboration"
            className="w-full h-full object-cover scale-[1.15]"
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.6 }}
          />
        </div>
      </motion.div>

      {/* Image 3: Right Inset Skyline / Abstract */}
      <motion.div
        initial={prefersReducedMotion ? { opacity: 0 } : { x: 80, y: 20, opacity: 0 }}
        animate={{ x: 0, y: 0, opacity: 1 }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.45 }}
        style={{ x: x3, y: y3, clipPath: clip3 }}
        className="absolute top-2 right-2 w-[45%] h-[96%] bg-white p-[3px] shadow-md z-30 overflow-hidden"
      >
        <div style={{ clipPath: clip3 }} className="w-full h-full overflow-hidden bg-brand-light">
          <motion.img
            src={images.image3}
            alt="Corporate Architecture"
            className="w-full h-full object-cover scale-[1.15]"
            whileHover={{ scale: 1.25 }}
            transition={{ duration: 0.6 }}
          />
        </div>
      </motion.div>
    </div>
  );
}
