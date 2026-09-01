import React from 'react';
import { motion } from 'motion/react';
import {
  Trophy,
  Award,
  Sparkles,
  ExternalLink,
  BookOpen,
  Mic,
  Star,
  ArrowUpRight,
} from 'lucide-react';
import { ACHIEVEMENTS } from '../data/portfolioData';

export const AchievementsSection: React.FC = () => {
  return (
    <section
      id="achievements"
      className="relative py-28 bg-[#050505] text-[#E5E5E5] border-t border-white/5 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-[10px] uppercase font-bold tracking-[0.35em] text-[#D4AF37] mb-4 font-mono">
            <Trophy size={13} />
            <span>07 / HONORS & RECOGNITION</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight text-white max-w-3xl leading-[1.05]">
            Distinctions & <span className="font-serif italic font-normal text-[#D4AF37]">Industry Accolades</span>.
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 mt-3 max-w-xl font-light">
            Recognized across global design juries, peer-reviewed engineering publications, and international hackathons.
          </p>
        </div>

        {/* 4-Card Heroic Achievement Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ACHIEVEMENTS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group rounded-3xl bg-white/[0.03] border border-white/10 hover:border-[#D4AF37]/40 p-8 flex flex-col justify-between shadow-2xl backdrop-blur-xl relative overflow-hidden transition-all"
            >
              {/* Gold Ambient Flare */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none group-hover:bg-[#D4AF37]/20 transition-all" />

              <div>
                {/* Badge & Year */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono font-bold px-3.5 py-1 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/30 flex items-center gap-1.5 shadow-sm">
                    <Star size={12} className="fill-[#D4AF37]" />
                    {item.badge}
                  </span>
                  <span className="text-xs font-mono text-neutral-400">{item.year}</span>
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-2xl text-white group-hover:text-[#D4AF37] transition-colors mb-2 tracking-tight">
                  {item.title}
                </h3>
                <div className="text-xs font-mono text-neutral-400 mb-4">
                  {item.organization}
                </div>

                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mb-6 font-sans font-light">
                  {item.description}
                </p>
              </div>

              {/* Impact Metric Highlight */}
              <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider">
                    Documented Impact
                  </div>
                  <div className="font-display font-extrabold text-base sm:text-lg text-[#D4AF37] mt-0.5">
                    {item.impactMetric}
                  </div>
                </div>

                {item.linkUrl && (
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-300 group-hover:text-[#D4AF37] transition-colors">
                    <span>{item.linkText || 'Verify Link'}</span>
                    <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                )}
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
