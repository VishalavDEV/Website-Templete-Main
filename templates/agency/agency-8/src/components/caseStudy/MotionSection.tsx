import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Activity } from 'lucide-react';
import { CaseStudy } from '../../data/caseStudyData';
import { CursorType } from '../../types';

interface MotionSectionProps {
  study: CaseStudy;
  setCursorType: (type: CursorType) => void;
}

export const MotionSection: React.FC<MotionSectionProps> = ({ study, setCursorType }) => {
  const m = study.motion;

  return (
    <section className="py-24 sm:py-36 bg-[#080808] border-b border-[#ffffff10] relative overflow-hidden">
      {/* Background Radial Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[180px] pointer-events-none opacity-25"
        style={{ backgroundColor: study.accent }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 space-y-16">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-8 border-b border-[#ffffff10]">
          <div className="lg:col-span-8 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: study.accent }} />
              <span className="font-mono text-xs uppercase tracking-[0.35em] text-[#888888]">
                CHOREOGRAPHY & PHYSICS
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black text-[#FAF9F6] tracking-tight uppercase leading-[0.95]">
              {m.headline}
            </h2>
          </div>

          <div className="lg:col-span-4 space-y-2">
            <p className="font-display text-lg text-[#FAF9F6] uppercase font-bold">
              {m.statement}
            </p>
            <p className="text-xs sm:text-sm text-[#888888] leading-relaxed">
              {m.description}
            </p>
          </div>
        </div>

        {/* Abstract Kinetic Composition */}
        <div className="relative aspect-[16/9] sm:aspect-[21/9] rounded-2xl sm:rounded-3xl border border-white/15 bg-[#0A0C10] overflow-hidden flex items-center justify-center p-8 shadow-2xl">
          {/* Animated Kinetic Waves / Lattice */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
            {/* Concentric Animated Rings */}
            {[1, 2, 3, 4, 5].map((ring) => (
              <motion.div
                key={ring}
                animate={{
                  scale: [1, 1.08 + ring * 0.04, 1],
                  opacity: [0.2, 0.45, 0.2],
                  rotate: [0, ring % 2 === 0 ? 180 : -180, 360],
                }}
                transition={{
                  duration: 8 + ring * 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute rounded-full border border-dashed pointer-events-none"
                style={{
                  width: `${ring * 160}px`,
                  height: `${ring * 160}px`,
                  borderColor: ring === 2 || ring === 4 ? study.accent : 'rgba(255,255,255,0.08)',
                }}
              />
            ))}

            {/* Glowing Orbiting Particle Beacons */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
              className="absolute w-[400px] h-[400px] pointer-events-none"
            >
              <div
                className="w-4 h-4 rounded-full shadow-lg absolute top-0 left-1/2 -translate-x-1/2 blur-[1px]"
                style={{ backgroundColor: study.accent, boxShadow: `0 0 20px ${study.accent}` }}
              />
            </motion.div>

            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
              className="absolute w-[600px] h-[600px] pointer-events-none"
            >
              <div
                className="w-3 h-3 rounded-full bg-white shadow-lg absolute bottom-0 left-1/2 -translate-x-1/2 blur-[1px]"
                style={{ boxShadow: '0 0 15px rgba(255,255,255,0.8)' }}
              />
            </motion.div>
          </div>

          {/* Central Monogram / Frequency Badge */}
          <div className="relative z-10 text-center space-y-4 max-w-md backdrop-blur-md bg-black/40 p-8 rounded-2xl border border-white/10 shadow-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10">
              <Activity className="w-3.5 h-3.5 animate-pulse" style={{ color: study.accent }} />
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#888888]">
                SPRING CONSTANT k=280 // DAMPING=32
              </span>
            </div>

            <h3 className="font-display text-2xl sm:text-3xl font-black text-[#FAF9F6] uppercase tracking-wider">
              {study.title} MOTION KINETICS
            </h3>

            <p className="text-xs font-mono text-[#888888]">
              Continuous 60Hz physics interpolation responding directly to velocity vectors.
            </p>
          </div>

          {/* Corner Telemetry Tags */}
          <div className="absolute top-6 left-6 font-mono text-[10px] text-[#888888] tracking-widest uppercase">
            CHOREOGRAPHY // INTERACTION
          </div>
          <div className="absolute top-6 right-6 font-mono text-[10px] text-[#888888] tracking-widest uppercase">
            LATENCY &lt; 4MS
          </div>
          <div className="absolute bottom-6 left-6 font-mono text-[10px] text-[#888888] tracking-widest uppercase">
            HARMONIC CURVES: CUBIC-BEZIER [0.16, 1, 0.3, 1]
          </div>
          <div className="absolute bottom-6 right-6 font-mono text-[10px] tracking-widest uppercase" style={{ color: study.accent }}>
            RENDER MODE: ACCELERATED
          </div>
        </div>
      </div>
    </section>
  );
};
