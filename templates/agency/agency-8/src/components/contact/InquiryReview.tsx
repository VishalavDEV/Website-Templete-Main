import React from 'react';
import { InquiryData, CursorType } from '../../types';
import { ArrowUpRight, Edit3, CheckCircle2, User, Sparkles } from 'lucide-react';
import { MagneticButton } from '../MagneticButton';

interface InquiryReviewProps {
  formData: InquiryData;
  onEdit: (stepIndex: number) => void;
  onSubmit: () => void;
  isSubmitting: boolean;
  setCursorType: (type: CursorType, text?: string) => void;
}

export const InquiryReview: React.FC<InquiryReviewProps> = ({
  formData,
  onEdit,
  onSubmit,
  isSubmitting,
  setCursorType,
}) => {
  return (
    <div className="space-y-10 pt-2">
      {/* Review Card */}
      <div className="p-6 sm:p-10 rounded-2xl sm:rounded-3xl bg-white/[0.02] border border-[#ffffff15] space-y-8">
        {/* Top Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-6">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#0066FF]" />
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#888888]">
              INQUIRY SPECIFICATION
            </span>
          </div>

          <button
            type="button"
            onClick={() => onEdit(1)}
            onMouseEnter={() => setCursorType('pointer')}
            onMouseLeave={() => setCursorType('default')}
            className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-[#0066FF] hover:text-white transition-colors cursor-pointer"
          >
            <Edit3 className="w-3.5 h-3.5" />
            <span>EDIT ALL</span>
          </button>
        </div>

        {/* Selected Parameters Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Services */}
          <div className="space-y-2 p-4 rounded-xl bg-white/[0.02] border border-white/5">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#888888]">
                01 // SERVICES
              </span>
              <button
                type="button"
                onClick={() => onEdit(1)}
                className="text-[10px] font-mono text-[#0066FF] hover:underline cursor-pointer"
              >
                EDIT
              </button>
            </div>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {formData.services.length > 0 ? (
                formData.services.map((s) => (
                  <span
                    key={s}
                    className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-[#0066FF]/15 text-[#0066FF] border border-[#0066FF]/30"
                  >
                    {s}
                  </span>
                ))
              ) : (
                <span className="text-xs text-[#888888] italic">Not specified</span>
              )}
            </div>
          </div>

          {/* Building */}
          <div className="space-y-2 p-4 rounded-xl bg-white/[0.02] border border-white/5">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#888888]">
                02 // BUILDING
              </span>
              <button
                type="button"
                onClick={() => onEdit(2)}
                className="text-[10px] font-mono text-[#0066FF] hover:underline cursor-pointer"
              >
                EDIT
              </button>
            </div>
            <p className="text-sm font-display font-bold uppercase text-[#FAF9F6] pt-1">
              {formData.projectType || 'Not specified'}
            </p>
          </div>

          {/* Scale */}
          <div className="space-y-2 p-4 rounded-xl bg-white/[0.02] border border-white/5">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#888888]">
                03 // SCALE
              </span>
              <button
                type="button"
                onClick={() => onEdit(3)}
                className="text-[10px] font-mono text-[#0066FF] hover:underline cursor-pointer"
              >
                EDIT
              </button>
            </div>
            <p className="text-sm font-display font-bold uppercase text-[#FAF9F6] pt-1">
              {formData.scale || 'Not specified'}
            </p>
          </div>

          {/* Timeline */}
          <div className="space-y-2 p-4 rounded-xl bg-white/[0.02] border border-white/5">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#888888]">
                04 // TIMELINE
              </span>
              <button
                type="button"
                onClick={() => onEdit(4)}
                className="text-[10px] font-mono text-[#0066FF] hover:underline cursor-pointer"
              >
                EDIT
              </button>
            </div>
            <p className="text-sm font-display font-bold uppercase text-[#FAF9F6] pt-1">
              {formData.timeline || 'Not specified'}
            </p>
          </div>
        </div>

        {/* Contact info breakdown */}
        <div className="pt-6 border-t border-white/10 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#888888]">
              05 // CLIENT & PROJECT BRIEF
            </span>
            <button
              type="button"
              onClick={() => onEdit(5)}
              className="text-[10px] font-mono text-[#0066FF] hover:underline cursor-pointer"
            >
              EDIT
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-xs">
            <div>
              <span className="text-[#888888] block uppercase text-[10px]">Name</span>
              <span className="text-[#FAF9F6] font-medium text-sm">{formData.name}</span>
            </div>
            <div>
              <span className="text-[#888888] block uppercase text-[10px]">Email</span>
              <span className="text-[#FAF9F6] font-medium text-sm">{formData.email}</span>
            </div>
            <div>
              <span className="text-[#888888] block uppercase text-[10px]">Company / Web</span>
              <span className="text-[#FAF9F6] font-medium text-sm">
                {formData.company || 'Personal'} {formData.website ? `(${formData.website})` : ''}
              </span>
            </div>
          </div>

          <div className="pt-2">
            <span className="text-[#888888] block uppercase text-[10px] font-mono mb-1">
              Message / Objectives
            </span>
            <p className="text-sm text-[#A1A1AA] bg-white/[0.015] p-4 rounded-xl border border-white/5 leading-relaxed">
              {formData.message}
            </p>
          </div>
        </div>
      </div>

      {/* Submission CTA */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4">
        <button
          type="button"
          onClick={() => onEdit(5)}
          onMouseEnter={() => setCursorType('pointer')}
          onMouseLeave={() => setCursorType('default')}
          className="px-6 py-4 rounded-full border border-white/15 text-[#888888] hover:text-white hover:border-white/30 text-xs font-mono uppercase tracking-widest transition-colors cursor-pointer"
        >
          &larr; Back to Details
        </button>

        <MagneticButton
          id="send-inquiry-btn"
          onClick={onSubmit}
          onCursorEnter={() => setCursorType('button')}
          onCursorLeave={() => setCursorType('default')}
          className="group inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#0066FF] hover:bg-white text-white hover:text-black font-mono text-xs sm:text-sm uppercase tracking-widest font-bold rounded-full transition-all duration-300 shadow-2xl shadow-[#0066FF]/30 cursor-pointer"
        >
          <span>{isSubmitting ? 'PROCESSING INQUIRY...' : 'SEND INQUIRY'}</span>
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </MagneticButton>
      </div>
    </div>
  );
};
