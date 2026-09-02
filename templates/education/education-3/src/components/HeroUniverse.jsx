import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Sparkles, ArrowRight, Compass, Atom, Cpu, Binary, Globe, Palette, BrainCircuit, ShieldAlert } from 'lucide-react';

const FLOATING_SUBJECTS = [
  { id: 'ai', name: 'AI & Neural Nets', icon: BrainCircuit, color: 'from-blue-500 to-indigo-600', angle: 0, radius: 170 },
  { id: 'math', name: 'Mathematics', icon: Binary, color: 'from-purple-500 to-pink-600', angle: 52, radius: 210 },
  { id: 'science', name: 'Quantum Science', icon: Atom, color: 'from-cyan-400 to-blue-600', angle: 104, radius: 180 },
  { id: 'prog', name: 'Programming', icon: Cpu, color: 'from-emerald-400 to-teal-600', angle: 156, radius: 220 },
  { id: 'biz', name: 'Venture Business', icon: Globe, color: 'from-amber-400 to-orange-600', angle: 208, radius: 175 },
  { id: 'design', name: 'Spatial Design', icon: Palette, color: 'from-fuchsia-500 to-rose-600', angle: 260, radius: 200 },
  { id: 'research', name: 'Deep Research', icon: Compass, color: 'from-violet-500 to-purple-600', angle: 312, radius: 190 },
];

export default function HeroUniverse({ onOpenAdmissions }) {
  const navigate = useNavigate();
  const [activeSubject, setActiveSubject] = useState(FLOATING_SUBJECTS[0]);

  // Mouse parallax motion values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), springConfig);
  const moveX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-20, 20]), springConfig);
  const moveY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-20, 20]), springConfig);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const x = (e.clientX - rect.left) / width - 0.5;
    const y = (e.clientY - rect.top) / height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section 
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen w-full pt-28 pb-16 lg:py-0 flex items-center justify-center overflow-hidden bg-grid-pattern"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-electric-500/10 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-violetAccent-500/10 rounded-full filter blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-6 items-center min-h-[calc(100vh-8rem)]">

          {/* LEFT SIDE EDITORIAL EXPERIENCE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col justify-center z-10 space-y-8"
          >
            {/* Institution Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-electric-500/30 text-electric-400 text-xs font-mono tracking-widest uppercase w-fit">
              <span className="w-2 h-2 rounded-full bg-electric-400 animate-ping" />
              Academic Universe & Research Lab 2026
            </div>

            {/* Oversized Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.08] font-display">
                Education for the <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-400 via-violetAccent-400 to-cyan-300">
                  Next Generation.
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-300 font-light leading-relaxed max-w-xl">
                Explore knowledge, build skills, and prepare for the future. A unified platform combining university rigor, digital learning, and cutting-edge research.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => navigate('/programs')}
                data-cursor="EXPLORE"
                className="group px-7 py-4 rounded-full bg-gradient-to-r from-electric-600 via-electric-500 to-violetAccent-600 text-white font-bold text-sm tracking-wider shadow-lg shadow-electric-500/25 hover:shadow-electric-500/40 hover:scale-[1.02] active:scale-95 transition-all duration-300 flex items-center gap-3"
              >
                <span>EXPLORE LEARNING</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenAdmissions}
                data-cursor="APPLY"
                className="px-7 py-4 rounded-full glass-panel border border-white/15 text-slate-200 hover:text-white hover:border-electric-400/50 font-semibold text-sm tracking-wider hover:bg-white/5 active:scale-95 transition-all duration-300 flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-violetAccent-400" />
                <span>DISCOVER PROGRAMS</span>
              </button>
            </div>

            {/* Micro Stats Row */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-3 gap-6 max-w-md">
              <div>
                <div className="text-2xl font-extrabold text-white font-display">50K+</div>
                <div className="text-[11px] font-mono text-slate-400 tracking-wider">GLOBAL SCHOLARS</div>
              </div>
              <div>
                <div className="text-2xl font-extrabold text-white font-display">500+</div>
                <div className="text-[11px] font-mono text-slate-400 tracking-wider">FUTURE COURSES</div>
              </div>
              <div>
                <div className="text-2xl font-extrabold text-white font-display">95%</div>
                <div className="text-[11px] font-mono text-slate-400 tracking-wider">SUCCESS RATE</div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE INTERACTIVE 3D LEARNING UNIVERSE */}
          <div className="lg:col-span-6 relative flex items-center justify-center h-[520px] sm:h-[600px] w-full">
            <motion.div
              style={{ rotateX, rotateY, x: moveX, y: moveY }}
              className="relative w-full h-full flex items-center justify-center perspective-1000"
            >
              {/* Concentric Orbit Rings */}
              <div className="absolute w-[340px] h-[340px] sm:w-[440px] sm:h-[440px] rounded-full border border-electric-500/20 animate-spin-slow pointer-events-none" />
              <div className="absolute w-[240px] h-[240px] sm:w-[300px] sm:h-[300px] rounded-full border border-dashed border-violetAccent-500/20 animate-spin pointer-events-none style-reverse" />

              {/* Central Glowing Academic Symbol */}
              <motion.div
                animate={{ scale: [1, 1.05, 1], rotate: [0, 5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-20 w-28 h-28 sm:w-36 sm:h-36 rounded-3xl bg-gradient-to-tr from-slate-950 via-slate-900 to-slate-950 border border-electric-400/40 shadow-[0_0_50px_rgba(59,130,246,0.3)] flex flex-col items-center justify-center p-4 cursor-pointer group"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-electric-500 to-violetAccent-600 flex items-center justify-center shadow-lg shadow-electric-500/40 group-hover:scale-110 transition-transform">
                  <Atom className="w-8 h-8 text-white animate-pulse" />
                </div>
                <span className="text-[10px] font-mono tracking-widest text-electric-300 font-bold mt-2 uppercase">
                  AETHERIA CORE
                </span>
              </motion.div>

              {/* Floating Subject Cards Orbiting Around Core */}
              {FLOATING_SUBJECTS.map((subj, index) => {
                const Icon = subj.icon;
                // Calculate position around orbital path
                const angleRad = (subj.angle * Math.PI) / 180;
                const xPos = Math.cos(angleRad) * (window.innerWidth < 640 ? 140 : subj.radius);
                const yPos = Math.sin(angleRad) * (window.innerWidth < 640 ? 140 : subj.radius);

                const isSelected = activeSubject.id === subj.id;

                return (
                  <motion.div
                    key={subj.id}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{
                      opacity: 1,
                      scale: isSelected ? 1.15 : 1,
                      x: xPos,
                      y: yPos,
                    }}
                    transition={{
                      duration: 0.8,
                      delay: index * 0.1,
                      type: 'spring',
                      stiffness: 100
                    }}
                    onClick={() => setActiveSubject(subj)}
                    data-cursor="VIEW"
                    className={`absolute z-30 cursor-pointer p-3 sm:p-3.5 rounded-2xl glass-panel border transition-all duration-300 flex items-center gap-2.5 shadow-xl ${
                      isSelected
                        ? 'border-electric-400 bg-slate-900/90 shadow-electric-500/30 scale-110'
                        : 'border-white/10 hover:border-electric-400/50 bg-slate-950/70 hover:bg-slate-900/80'
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-xl bg-gradient-to-br ${subj.color} flex items-center justify-center text-white shadow-md`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-semibold tracking-wider text-slate-200 whitespace-nowrap pr-1">
                      {subj.name}
                    </span>
                  </motion.div>
                );
              })}

              {/* Active Subject Detail Tooltip Floating Card */}
              <motion.div
                key={activeSubject.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute bottom-2 inset-x-4 sm:inset-x-auto sm:bottom-4 z-40 p-4 rounded-2xl glass-panel border border-electric-500/30 bg-slate-950/90 max-w-sm mx-auto shadow-2xl flex items-center justify-between gap-4"
              >
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-electric-400">
                    Selected Discipline
                  </span>
                  <h4 className="text-sm font-bold text-white font-display">
                    {activeSubject.name} Research Track
                  </h4>
                  <p className="text-[11px] text-slate-400">
                    Interactive lab access & expert mentorship available.
                  </p>
                </div>
                <button
                  onClick={() => navigate('/programs')}
                  className="px-3 py-1.5 text-xs font-bold rounded-xl bg-electric-600 hover:bg-electric-500 text-white whitespace-nowrap"
                >
                  Explore →
                </button>
              </motion.div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
