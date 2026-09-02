import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { MagneticButton } from '../MagneticButton';
import { CursorType } from '../../types';

interface ProjectCTAProps {
  onOpenProjectModal: () => void;
  setCursorType: (type: CursorType) => void;
}

export const ProjectCTA: React.FC<ProjectCTAProps> = ({ onOpenProjectModal, setCursorType }) => {
  return (
    <section className="py-28 sm:py-40 bg-[#080808] relative overflow-hidden text-center">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 relative z-10 space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-[#ffffff15]">
          <Sparkles className="w-3.5 h-3.5 text-[#0066FF]" />
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#888888]">
            COLLABORATION
          </span>
        </div>

        <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-black text-[#FAF9F6] tracking-tight uppercase leading-[0.95]">
          HAVE A PROJECT<br />IN MIND?
        </h2>

        <p className="text-base sm:text-xl text-[#888888] font-normal max-w-lg mx-auto">
          Let’s create something distinctive, functional and memorable together.
        </p>

        <div className="pt-4 flex justify-center">
          <MagneticButton
            id="case-study-start-project-btn"
            onClick={onOpenProjectModal}
            onCursorEnter={() => setCursorType('button')}
            onCursorLeave={() => setCursorType('default')}
            className="group px-10 sm:px-14 py-5 sm:py-6 rounded-full bg-[#0066FF] text-white font-display font-black text-sm sm:text-base uppercase tracking-widest flex items-center gap-3 hover:brightness-110 transition-all duration-300 shadow-2xl shadow-[#0066FF]/40 cursor-pointer"
          >
            <span>START A PROJECT</span>
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </MagneticButton>
        </div>
      </div>
    </section>
  );
};
