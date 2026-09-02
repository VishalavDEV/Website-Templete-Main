import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, CheckCircle2 } from 'lucide-react';
import { CaseStudy } from '../../data/caseStudyData';
import { CursorType } from '../../types';

interface ProjectChallengeProps {
  study: CaseStudy;
  setCursorType: (type: CursorType) => void;
}

export const ProjectChallenge: React.FC<ProjectChallengeProps> = ({ study, setCursorType }) => {
  return (
    <section className="py-24 sm:py-36 bg-[#080808] border-b border-[#ffffff10] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section 1: The Challenge Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start pb-20 sm:pb-28 border-b border-[#ffffff10]">
          {/* Left Column: Eyebrow + Big Statement */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: study.accent }} />
              <span className="font-mono text-xs uppercase tracking-[0.35em] text-[#888888]">
                {study.challenge.label}
              </span>
            </div>

            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-3xl sm:text-5xl lg:text-6xl font-black text-[#FAF9F6] tracking-tight uppercase leading-[0.95]"
            >
              {study.challenge.statement}
            </motion.h2>
          </div>

          {/* Right Column: Context Paragraph */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-6"
          >
            <p className="text-base sm:text-xl text-[#A1A1AA] leading-relaxed font-normal">
              {study.challenge.description}
            </p>
          </motion.div>
        </div>

        {/* Section 2: Refined Editorial Project Information */}
        <div className="pt-16 sm:pt-20">
          <div className="flex items-center gap-2 mb-10">
            <span className="w-1.5 h-1.5 rounded-full bg-[#888888]" />
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#888888]">
              PROJECT SPECIFICATIONS
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
            {/* Core Info Specs (6 Cols) */}
            <div className="md:col-span-6 space-y-8">
              <div className="grid grid-cols-2 gap-6 pb-6 border-b border-[#ffffff0e]">
                <div>
                  <span className="block font-mono text-[10px] sm:text-xs text-[#888888] uppercase tracking-widest mb-1.5">
                    CLIENT
                  </span>
                  <span className="font-display text-base sm:text-lg text-[#FAF9F6] font-bold uppercase tracking-wider">
                    {study.client}
                  </span>
                </div>
                <div>
                  <span className="block font-mono text-[10px] sm:text-xs text-[#888888] uppercase tracking-widest mb-1.5">
                    INDUSTRY
                  </span>
                  <span className="font-display text-base sm:text-lg text-[#FAF9F6] font-bold uppercase tracking-wider">
                    {study.industry}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6 pb-6 border-b border-[#ffffff0e]">
                <div>
                  <span className="block font-mono text-[10px] sm:text-xs text-[#888888] uppercase tracking-widest mb-1.5">
                    RELEASE YEAR
                  </span>
                  <span className="font-display text-base sm:text-lg text-[#FAF9F6] font-bold uppercase tracking-wider">
                    {study.year}
                  </span>
                </div>
                <div>
                  <span className="block font-mono text-[10px] sm:text-xs text-[#888888] uppercase tracking-widest mb-1.5">
                    TIMELINE
                  </span>
                  <span className="font-display text-base sm:text-lg text-[#FAF9F6] font-bold uppercase tracking-wider">
                    {study.challenge.timeline}
                  </span>
                </div>
              </div>

              {study.challenge.liveUrl && (
                <div className="pt-2">
                  <a
                    href={`https://${study.challenge.liveUrl}`}
                    target="_blank"
                    rel="noreferrer noopener"
                    onMouseEnter={() => setCursorType('pointer')}
                    onMouseLeave={() => setCursorType('default')}
                    className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest transition-colors duration-300 group cursor-pointer"
                    style={{ color: study.accent }}
                  >
                    <span>VISIT LIVE PLATFORM // {study.challenge.liveUrl}</span>
                    <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              )}
            </div>

            {/* Disciplines & Team Breakdown (6 Cols) */}
            <div className="md:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-8 pl-0 md:pl-8 md:border-l border-[#ffffff0e]">
              <div>
                <span className="block font-mono text-[10px] sm:text-xs text-[#888888] uppercase tracking-widest mb-4">
                  DISCIPLINES
                </span>
                <ul className="space-y-3">
                  {study.challenge.disciplines.map((discipline) => (
                    <li key={discipline} className="flex items-center gap-3 text-sm text-[#FAF9F6] font-mono">
                      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: study.accent }} />
                      <span>{discipline}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <span className="block font-mono text-[10px] sm:text-xs text-[#888888] uppercase tracking-widest mb-4">
                  CORE TEAM
                </span>
                <ul className="space-y-3">
                  {study.challenge.team.map((member) => (
                    <li key={member} className="flex items-center gap-3 text-sm text-[#FAF9F6] font-mono">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#475569]" />
                      <span>{member}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
