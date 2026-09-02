import React from 'react';
import { motion } from 'motion/react';
import { Quote } from 'lucide-react';
import { CaseStudy } from '../../data/caseStudyData';
import { CursorType } from '../../types';

interface ProjectTestimonialProps {
  study: CaseStudy;
  setCursorType: (type: CursorType) => void;
}

export const ProjectTestimonial: React.FC<ProjectTestimonialProps> = ({ study, setCursorType }) => {
  const t = study.testimonial;

  return (
    <section className="py-28 sm:py-40 bg-[#080808] border-b border-[#ffffff10] relative overflow-hidden">
      {/* Background Accent Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[200px] pointer-events-none opacity-15"
        style={{ backgroundColor: study.accent }}
      />

      <div className="max-w-5xl mx-auto px-6 sm:px-8 relative z-10 space-y-12 text-center">
        {/* Quote Icon */}
        <div className="flex justify-center">
          <div
            className="w-14 h-14 rounded-full border border-white/15 bg-white/[0.03] flex items-center justify-center"
          >
            <Quote className="w-6 h-6" style={{ color: study.accent }} />
          </div>
        </div>

        {/* Oversized Quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#FAF9F6] tracking-tight uppercase leading-[1.1]"
        >
          "{t.quote}"
        </motion.blockquote>

        {/* Client Author Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-1 pt-4"
        >
          <span className="font-display text-base sm:text-lg font-bold text-white uppercase tracking-widest block">
            {t.author}
          </span>
          <span className="font-mono text-xs text-[#888888] uppercase tracking-widest block">
            {t.role}, {t.company}
          </span>
        </motion.div>

        {/* Project Metadata Tags Strip */}
        <div className="pt-16 border-t border-[#ffffff10] flex flex-wrap items-center justify-center gap-3">
          {study.tags.map((tag) => (
            <span
              key={tag}
              className="px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] font-mono text-[11px] uppercase tracking-widest text-[#888888] hover:text-white hover:border-white/20 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
