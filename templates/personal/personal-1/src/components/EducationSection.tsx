import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Award, BookOpen, Calendar, MapPin } from 'lucide-react';
import { EDUCATION } from '../data/portfolioData';

export const EducationSection: React.FC = () => {
  return (
    <section className="relative py-28 bg-[#050505] text-[#E5E5E5] border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-[10px] uppercase font-bold tracking-[0.35em] text-[#D4AF37] mb-4 font-mono">
            <GraduationCap size={13} />
            <span>ACADEMIC FOUNDATIONS</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight text-white max-w-2xl leading-[1.05]">
            Computer Science & <span className="font-serif italic font-normal text-[#D4AF37]">HCI Honors</span>.
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 mt-3 max-w-xl font-light">
            Rigorous foundations in distributed spatial algorithms, graphics pipelines, and human-computer cognitive models.
          </p>
        </div>

        {/* 2 Education Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {EDUCATION.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-3xl bg-white/[0.03] border border-white/10 hover:border-[#D4AF37]/40 transition-all p-8 flex flex-col justify-between shadow-2xl backdrop-blur-xl relative overflow-hidden group"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center font-display font-black text-[#D4AF37] text-lg shadow-inner">
                      {edu.logo}
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-xl text-white group-hover:text-[#D4AF37] transition-colors tracking-tight">
                        {edu.degree}
                      </h3>
                      <div className="text-xs font-mono text-[#D4AF37] font-semibold mt-0.5">
                        {edu.field}
                      </div>
                    </div>
                  </div>

                  <span className="text-xs font-mono text-neutral-400 shrink-0">
                    {edu.period}
                  </span>
                </div>

                <div className="flex items-center gap-4 text-xs font-mono text-neutral-400 mb-4 flex-wrap">
                  <span>{edu.institution}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <MapPin size={12} className="text-neutral-500" />
                    {edu.location}
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-xs font-mono text-emerald-500 font-semibold mb-6">
                  {edu.gpaOrHonors}
                </div>

                <div className="mb-6">
                  <div className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider font-semibold mb-1.5">
                    Master's / Graduate Thesis:
                  </div>
                  <p className="text-xs text-neutral-300 font-serif italic bg-white/[0.03] p-3.5 rounded-xl border border-white/10">
                    "{edu.thesis}"
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider font-semibold">
                    Key Academic Highlights:
                  </div>
                  {edu.keyHighlights.map((kh, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-neutral-300">
                      <span className="text-[#D4AF37] font-bold">•</span>
                      <span>{kh}</span>
                    </div>
                  ))}
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
