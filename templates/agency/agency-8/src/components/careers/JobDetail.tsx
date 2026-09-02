import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, CheckCircle2, Sparkles, MapPin, Briefcase, Layers } from 'lucide-react';
import { JobPosition, CursorType } from '../../types';
import { MagneticButton } from '../MagneticButton';

interface JobDetailProps {
  job: JobPosition;
  onApply: (job: JobPosition) => void;
  setCursorType: (type: CursorType, text?: string) => void;
}

export const JobDetail: React.FC<JobDetailProps> = ({
  job,
  onApply,
  setCursorType,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="overflow-hidden bg-[#0A0A0E] border-t border-white/10"
    >
      <div className="p-6 sm:p-10 lg:p-14 space-y-12 max-w-5xl">
        {/* Metadata Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 p-6 bg-white/[0.02] border border-white/10 font-mono text-xs">
          <div>
            <span className="text-[#666666] uppercase tracking-widest block mb-1">
              DEPARTMENT
            </span>
            <span className="text-[#FAF9F6] font-bold uppercase">{job.department}</span>
          </div>

          <div>
            <span className="text-[#666666] uppercase tracking-widest block mb-1">
              LOCATION
            </span>
            <span className="text-[#FAF9F6] font-bold uppercase">{job.location}</span>
          </div>

          <div>
            <span className="text-[#666666] uppercase tracking-widest block mb-1">
              TYPE
            </span>
            <span className="text-[#FAF9F6] font-bold uppercase">{job.type}</span>
          </div>

          <div>
            <span className="text-[#666666] uppercase tracking-widest block mb-1">
              EXPERIENCE
            </span>
            <span className="text-[#0066FF] font-bold uppercase">{job.experience}</span>
          </div>
        </div>

        {/* About the role */}
        <div className="space-y-4">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#0066FF] font-semibold block">
            ABOUT THE ROLE
          </span>
          <p className="font-body text-base sm:text-lg text-[#FAF9F6] font-light leading-relaxed">
            {job.description}
          </p>
        </div>

        {/* What You'll Do */}
        <div className="space-y-4">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#888888] font-semibold block">
            WHAT YOU'LL DO
          </span>
          <ul className="space-y-3">
            {job.responsibilities.map((resp, i) => (
              <li
                key={i}
                className="flex items-start gap-3 font-body text-sm sm:text-base text-[#A0A0A0] font-light leading-relaxed"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF] mt-2 shrink-0" />
                <span>{resp}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* What We're Looking For */}
        <div className="space-y-4">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#888888] font-semibold block">
            WHAT WE'RE LOOKING FOR
          </span>
          <ul className="space-y-3">
            {job.requirements.map((req, i) => (
              <li
                key={i}
                className="flex items-start gap-3 font-body text-sm sm:text-base text-[#A0A0A0] font-light leading-relaxed"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-white/40 mt-2 shrink-0" />
                <span>{req}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Nice to Have */}
        {job.niceToHave && job.niceToHave.length > 0 && (
          <div className="space-y-4">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#888888] font-semibold block">
              NICE TO HAVE
            </span>
            <ul className="space-y-3">
              {job.niceToHave.map((nth, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 font-body text-sm sm:text-base text-[#888888] font-light leading-relaxed"
                >
                  <span className="w-1 h-1 rounded-full bg-white/20 mt-2.5 shrink-0" />
                  <span>{nth}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Action Button: APPLY FOR THIS ROLE */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-1">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#888888]">
              APPLICATION PROCESS
            </span>
            <p className="text-xs text-[#888888]">
              Interactive review &bull; Quick response within 48 studio hours
            </p>
          </div>

          <MagneticButton
            id={`apply-role-btn-${job.id}`}
            onClick={(e) => {
              e.stopPropagation();
              onApply(job);
            }}
            onCursorEnter={() => setCursorType('button', 'APPLY ↗')}
            onCursorLeave={() => setCursorType('default')}
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#0066FF] hover:brightness-110 text-white font-mono text-xs uppercase tracking-widest font-bold border border-[#0066FF]/50 transition-all duration-300 cursor-pointer shadow-lg shadow-[#0066FF]/20"
          >
            <span>APPLY FOR THIS ROLE</span>
            <ArrowUpRight className="w-4 h-4" />
          </MagneticButton>
        </div>
      </div>
    </motion.div>
  );
};
