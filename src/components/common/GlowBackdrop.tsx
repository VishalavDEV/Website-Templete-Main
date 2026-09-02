import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export const GlowBackdrop: React.FC = () => {
  const mouseX = useMotionValue(-500);
  const mouseY = useMotionValue(-500);

  const springConfig = { damping: 25, stiffness: 120, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Background Dot Pattern */}
      <div className="absolute inset-0 bg-dot-pattern opacity-60" />

      {/* Floating Ambient Glow 1 (Royal Blue / Sky) */}
      <div className="absolute -top-[12%] -left-[8%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-br from-blue-400/12 via-indigo-400/8 to-transparent blur-[110px]" />

      {/* Floating Ambient Glow 2 (Violet / Indigo) */}
      <div className="absolute top-[35%] -right-[12%] w-[45vw] h-[45vw] rounded-full bg-gradient-to-tl from-violet-400/10 via-purple-400/6 to-transparent blur-[130px]" />

      {/* Floating Ambient Glow 3 (Cyan / Sky) */}
      <div className="absolute -bottom-[15%] left-[25%] w-[55vw] h-[55vw] rounded-full bg-gradient-to-tr from-sky-400/10 via-blue-400/5 to-transparent blur-[120px]" />

      {/* Cursor Glow Follower */}
      {mounted && (
        <motion.div
          style={{
            x: smoothX,
            y: smoothY,
            translateX: '-50%',
            translateY: '-50%',
          }}
          className="fixed w-[320px] h-[320px] rounded-full bg-radial-gradient from-blue-500/8 via-indigo-500/4 to-transparent blur-[80px]"
        />
      )}
    </div>
  );
};
