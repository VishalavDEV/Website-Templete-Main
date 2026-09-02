import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Sparkles, HeartHandshake } from 'lucide-react';
import { MagneticButton } from '../MagneticButton';
import { CursorType } from '../../types';

interface JoinStudioProps {
  setCursorType: (type: CursorType, text?: string) => void;
  onNavigate?: (path: string) => void;
}

export const JoinStudio: React.FC<JoinStudioProps> = ({ setCursorType, onNavigate }) => {
  const openRoles = [
    { title: 'Senior Creative Developer', location: 'London / Remote', type: 'Full-Time' },
    { title: 'Motion Designer (WebGL / 3D)', location: 'New York', type: 'Full-Time' },
    { title: 'Principal Brand Strategist', location: 'London / Tokyo', type: 'Full-Time' },
  ];

  return (
    <section className="py-24 sm:py-36 bg-[#080808] border-t border-[#ffffff10] relative overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-[#0066FF]/[0.025] rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 space-y-16">
        {/* Section Tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-2"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF]" />
          <span className="font-mono text-xs uppercase tracking-[0.35em] text-[#888888]">
            JOIN THE STUDIO // CAREERS
          </span>
        </motion.div>

        {/* Content & Role List */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-6 space-y-6">
            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-[#FAF9F6] leading-[0.92]"
            >
              WANT TO MAKE <br />
              <span className="font-editorial italic font-normal text-[#0066FF] tracking-normal lowercase text-[1.05em]">
                something great?
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-base sm:text-lg text-[#A1A1AA] leading-relaxed font-normal"
            >
              We're always interested in curious people who care deeply about what they make. Even if you don't see an exact open role below, we want to hear from distinct voices.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="pt-4"
            >
              <button
                type="button"
                onClick={() => onNavigate && onNavigate('/careers')}
                onMouseEnter={() => setCursorType('pointer')}
                onMouseLeave={() => setCursorType('default')}
                className="group inline-flex items-center gap-3 px-7 py-4 bg-[#FAF9F6] hover:bg-[#0066FF] text-black hover:text-white text-xs font-mono uppercase tracking-widest font-bold rounded-full transition-all duration-300 shadow-lg cursor-pointer"
              >
                <span>SEE OPEN POSITIONS</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </motion.div>
          </div>

          {/* Open Roles Preview Cards */}
          <div className="lg:col-span-6 space-y-4">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#888888] block mb-2">
              Featured Opportunities &bull; Autumn 2026
            </span>

            {openRoles.map((role) => (
              <div
                key={role.title}
                onClick={() => onNavigate && onNavigate('/careers')}
                onMouseEnter={() => setCursorType('pointer', 'EXPLORE ↗')}
                onMouseLeave={() => setCursorType('default')}
                className="group p-6 rounded-2xl bg-white/[0.02] border border-[#ffffff15] hover:border-white/30 hover:bg-white/[0.04] transition-all duration-300 flex items-center justify-between cursor-pointer"
              >
                <div className="space-y-1">
                  <h3 className="font-display text-xl font-bold uppercase tracking-tight text-[#FAF9F6] group-hover:text-[#0066FF] transition-colors">
                    {role.title}
                  </h3>
                  <div className="flex items-center gap-3 text-xs font-mono text-[#888888]">
                    <span>{role.location}</span>
                    <span>&bull;</span>
                    <span>{role.type}</span>
                  </div>
                </div>

                <div
                  className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/70 group-hover:bg-[#0066FF] group-hover:border-[#0066FF] group-hover:text-white transition-all"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
