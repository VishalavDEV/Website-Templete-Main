import React from 'react';
import { motion } from 'motion/react';
import { Monitor, Smartphone, Cpu, ShieldCheck, Zap } from 'lucide-react';
import { CaseStudy } from '../../data/caseStudyData';
import { CursorType } from '../../types';

interface ExperienceShowcaseProps {
  study: CaseStudy;
  setCursorType: (type: CursorType) => void;
}

export const ExperienceShowcase: React.FC<ExperienceShowcaseProps> = ({ study, setCursorType }) => {
  const exp = study.experience;

  return (
    <section className="py-24 sm:py-36 bg-[#060608] border-b border-[#ffffff10] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#ffffff10]">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: study.accent }} />
              <span className="font-mono text-xs uppercase tracking-[0.35em] text-[#888888]">
                DIGITAL PRODUCT ECOSYSTEM
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl font-black text-[#FAF9F6] tracking-tight uppercase">
              {exp.headline}
            </h2>
            <p className="font-mono text-xs text-[#888888] tracking-widest uppercase">
              {exp.subhead}
            </p>
          </div>

          <p className="text-base text-[#A1A1AA] max-w-md font-normal leading-relaxed">
            {exp.description}
          </p>
        </div>

        {/* Multi-Device Visual Composition */}
        <div className="relative pt-6">
          {/* Main Desktop Frame */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full aspect-[16/10] rounded-2xl sm:rounded-3xl overflow-hidden border border-white/15 bg-[#111115] shadow-2xl relative group"
          >
            {/* Window Chrome Header */}
            <div className="h-10 sm:h-12 bg-[#0B0D13] border-b border-white/10 px-4 sm:px-6 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#EF4444]/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#10B981]/60" />
              </div>
              <div className="px-4 py-1 rounded-md bg-white/[0.04] border border-white/10 text-[10px] sm:text-xs font-mono text-[#888888] flex items-center gap-2">
                <Monitor className="w-3 h-3 text-[#0066FF]" />
                <span>app.{study.slug}.systems // production</span>
              </div>
              <div className="text-[10px] font-mono text-[#888888] hidden sm:inline">120 FPS</div>
            </div>

            <img
              src={exp.desktopMockup}
              alt="Desktop Interface Preview"
              className="w-full h-full object-cover object-top group-hover:scale-[1.01] transition-transform duration-700"
            />
          </motion.div>

          {/* Floating Mobile Interface (Overlap Right on Desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 50, x: 20 }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:block absolute -bottom-12 -right-6 w-[280px] xl:w-[320px] aspect-[9/18] rounded-[2.5rem] p-3 bg-[#0B0D13] border border-white/20 shadow-2xl shadow-black/90 z-20"
          >
            <div className="w-full h-full rounded-[2rem] overflow-hidden relative border border-white/10 bg-black">
              {/* Dynamic Island Notch */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-4 rounded-full bg-black border border-white/20 z-10" />
              <img
                src={exp.mobileMockup}
                alt="Mobile Product Interface"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 text-[10px] font-mono text-white flex items-center justify-between">
                <span>MOBILE TOUCH</span>
                <span style={{ color: study.accent }}>TOUCH 120Hz</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12">
          {exp.features.map((feat, idx) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-[#ffffff0e] hover:border-white/20 transition-all space-y-4 group"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-widest px-2.5 py-1 rounded bg-white/[0.04] text-[#888888] border border-white/10 group-hover:border-white/20 transition-colors">
                  {feat.tag}
                </span>
                <span className="font-mono text-xs text-[#888888]">0{idx + 1}</span>
              </div>

              <h3 className="font-display text-xl font-bold text-[#FAF9F6] uppercase tracking-wide">
                {feat.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#888888] leading-relaxed">
                {feat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
