import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight, Sparkles, Play } from 'lucide-react';
import MagneticButton from '../ui/MagneticButton';
import { useCursor } from '../../context/CursorContext';

export default function Hero() {
  const { setCursorState } = useCursor();
  const canvasRef = useRef(null);

  // Dynamic keyword cycler
  const keywords = ['DESIGN', 'DEVELOP', 'CREATE', 'GROW', 'INNOVATE'];
  const [currentKeywordIndex, setCurrentKeywordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentKeywordIndex((prev) => (prev + 1) % keywords.length);
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  // Ambient interactive 3D particle canvas effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Particle nodes
    const particleCount = Math.min(Math.floor(width / 18), 75);
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6,
      size: Math.random() * 2.5 + 1,
      color: ['#3b82f6', '#06b6d4', '#8b5cf6', '#60a5fa'][Math.floor(Math.random() * 4)],
    }));

    let mouse = { x: width / 2, y: height / 2 };
    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Render connected lines & particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowBlur = 10;
        ctx.shadowColor = p.color;
        ctx.fill();

        // Connect to mouse
        const dxMouse = mouse.x - p.x;
        const dyMouse = mouse.y - p.y;
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
        if (distMouse < 180) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(6, 182, 212, ${1 - distMouse / 180})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }

        // Connect to nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(59, 130, 246, ${0.25 * (1 - dist / 130)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const lineVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: i * 0.2, ease: [0.215, 0.61, 0.355, 1] },
    }),
  };

  return (
    <section id="home" className="relative min-h-[100svh] flex flex-col justify-center items-center pt-24 pb-20 sm:pt-28 sm:pb-24 px-4 sm:px-6 md:px-12 overflow-hidden bg-[#05070f]">
      {/* Background Interactive Particle Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none opacity-60" />

      {/* Floating 3D Glowing Mesh Orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-blue-600/15 rounded-full blur-[100px] sm:blur-[120px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-purple-600/15 rounded-full blur-[100px] sm:blur-[120px] pointer-events-none animate-pulse-slow" style={{ animationDelay: '3s' }} />

      <div className="relative z-10 max-w-6xl mx-auto text-center flex flex-col items-center w-full">
        {/* Top Tagline Pill */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full glass-panel border border-cyan-500/30 text-[10px] sm:text-xs font-mono tracking-widest text-cyan-300 mb-6 sm:mb-8 uppercase max-w-full"
        >
          <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-400 animate-spin shrink-0" style={{ animationDuration: '8s' }} />
          <span className="truncate">AWARD WINNING DIGITAL AGENCY</span>
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
        </motion.div>

        {/* Main Heading with Staggered Lines */}
        <div className="font-syne font-extrabold text-[clamp(1.7rem,6.8vw,2.75rem)] sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[1.12] sm:leading-[1.05] text-slate-100 mb-6 sm:mb-8 break-words w-full max-w-full">
          <motion.div custom={0} initial="hidden" animate="visible" variants={lineVariants}>
            WE CREATE
          </motion.div>

          <motion.div custom={1} initial="hidden" animate="visible" variants={lineVariants} className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 md:gap-5 my-1 sm:my-2">
            <span className="text-gradient-electric break-words max-w-full">DIGITAL EXPERIENCES</span>
          </motion.div>

          <motion.div custom={2} initial="hidden" animate="visible" variants={lineVariants} className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 md:gap-4">
            <span>THAT GET</span>
            
            {/* Animated Rotating Keyword Pill */}
            <span className="inline-block relative overflow-hidden bg-white/5 border border-cyan-500/30 px-3 sm:px-4 md:px-7 py-0.5 sm:py-1 rounded-xl sm:rounded-2xl align-middle text-cyan-300 min-w-[125px] sm:min-w-[190px] md:min-w-[300px] max-w-full text-center shadow-[0_0_30px_rgba(6,182,212,0.2)]">
              <motion.span
                key={keywords[currentKeywordIndex]}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -30, opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="block text-gradient-cyan text-sm sm:text-base md:text-inherit font-bold"
              >
                {keywords[currentKeywordIndex]}
              </motion.span>
            </span>
          </motion.div>
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-sm sm:text-base md:text-xl text-slate-400 font-light max-w-2xl leading-relaxed mb-8 sm:mb-10 px-2"
        >
          We engineer next-generation web apps, interactive branding, and high-impact digital experiences for visionary brands worldwide.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center gap-3.5 sm:gap-5 w-full sm:w-auto max-w-xs sm:max-w-none"
        >
          <MagneticButton>
            <a
              href="#contact"
              onMouseEnter={() => setCursorState('button')}
              onMouseLeave={() => setCursorState('default')}
              className="w-full sm:w-auto px-7 sm:px-8 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 text-white font-bold text-xs sm:text-sm uppercase tracking-wider sm:tracking-widest flex items-center justify-center gap-2.5 sm:gap-3 shadow-[0_0_30px_rgba(59,130,246,0.6)] hover:shadow-[0_0_50px_rgba(6,182,212,0.8)] transition-all duration-300 hover:scale-105"
            >
              <span>Start Your Project</span>
              <ArrowDownRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
          </MagneticButton>

          <MagneticButton>
            <a
              href="#work"
              onMouseEnter={() => setCursorState('button')}
              onMouseLeave={() => setCursorState('default')}
              className="w-full sm:w-auto px-7 sm:px-8 py-3.5 sm:py-4 rounded-full glass-panel border border-white/15 text-slate-200 font-bold text-xs sm:text-sm uppercase tracking-wider sm:tracking-widest flex items-center justify-center gap-2.5 sm:gap-3 hover:bg-white/10 transition-all duration-300"
            >
              <Play className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-400 fill-cyan-400" />
              <span>Explore Our Work</span>
            </a>
          </MagneticButton>
        </motion.div>
      </div>

      {/* Animated Scroll Indicator (hidden on small mobile screens to prevent overlap) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-2 cursor-pointer z-10"
        onClick={() => {
          document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <span className="text-[10px] font-mono tracking-widest text-slate-500 uppercase">SCROLL TO DISCOVER</span>
        <div className="w-5 h-9 rounded-full border-2 border-slate-600/50 p-1 flex justify-center items-start">
          <motion.div
            animate={{ y: [0, 14, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]"
          />
        </div>
      </motion.div>
    </section>
  );
}
