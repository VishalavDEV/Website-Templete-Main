import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import MagneticButton from '../ui/MagneticButton';
import { useCursor } from '../../context/CursorContext';

export default function CTA() {
  const { setCursorState } = useCursor();

  return (
    <section className="relative py-20 sm:py-32 px-4 sm:px-6 md:px-12 bg-gradient-to-b from-[#05070f] via-[#090e24] to-[#05070f] overflow-hidden text-center">
      {/* Background Animated Gradient Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[700px] h-[400px] sm:h-[700px] bg-gradient-to-tr from-blue-600/20 via-cyan-500/20 to-purple-600/20 rounded-full blur-[120px] sm:blur-[160px] pointer-events-none animate-pulse-slow" />

      <div className="max-w-6xl mx-auto relative z-10 flex flex-col items-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[10px] sm:text-xs font-mono tracking-widest text-cyan-400 uppercase bg-cyan-500/10 border border-cyan-500/20 px-3.5 sm:px-4 py-1.5 rounded-full mb-4 sm:mb-6"
        >
          START YOUR TRANSFORMATION
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-[clamp(1.85rem,7.5vw,5.5rem)] font-syne font-black tracking-tight text-white leading-tight mb-8 sm:mb-12 break-words"
        >
          HAVE AN IDEA?<br />
          <span className="text-gradient-electric">LET'S MAKE IT REAL.</span>
        </motion.h2>

        {/* Rotating Circular Magnet Trigger */}
        <MagneticButton>
          <a
            href="#contact"
            onMouseEnter={() => setCursorState('button')}
            onMouseLeave={() => setCursorState('default')}
            className="group relative w-36 h-36 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full bg-gradient-to-tr from-blue-600 via-cyan-500 to-purple-600 p-[2px] shadow-[0_0_40px_rgba(6,182,212,0.4)] hover:shadow-[0_0_70px_rgba(59,130,246,0.8)] transition-all duration-500 flex items-center justify-center cursor-pointer hover:scale-105 sm:hover:scale-110"
          >
            {/* Inner Dark Circle */}
            <div className="w-full h-full bg-[#05070f] rounded-full flex flex-col items-center justify-center p-3 sm:p-4 text-center transition-colors group-hover:bg-transparent">
              {/* Rotating Circular Text Ring */}
              <div className="absolute inset-1.5 sm:inset-2 animate-spin" style={{ animationDuration: '15s' }}>
                <svg viewBox="0 0 100 100" width="100%" height="100%">
                  <path
                    id="circlePath"
                    d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                    fill="none"
                  />
                  <text className="text-[9px] sm:text-[9.5px] font-syne font-bold uppercase tracking-widest fill-cyan-300">
                    <textPath href="#circlePath">
                      START A PROJECT • START A PROJECT •
                    </textPath>
                  </text>
                </svg>
              </div>

              <ArrowUpRight className="w-7 h-7 sm:w-10 sm:h-10 text-white group-hover:rotate-45 group-hover:scale-110 sm:group-hover:scale-125 transition-transform duration-500" />
            </div>
          </a>
        </MagneticButton>
      </div>
    </section>
  );
}
