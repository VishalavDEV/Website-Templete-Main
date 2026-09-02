import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, Sparkles, Send } from 'lucide-react';
import { CursorType, JobPosition } from '../../types';
import { ApplicationForm } from './ApplicationForm';

interface ApplicationModalProps {
  isOpen: boolean;
  job: JobPosition | null;
  onClose: () => void;
  setCursorType: (type: CursorType, text?: string) => void;
}

export const ApplicationModal: React.FC<ApplicationModalProps> = ({
  isOpen,
  job,
  onClose,
  setCursorType,
}) => {
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsSuccess(false);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const roleTitle = job ? job.title : 'General Studio Application';
  const roleDept = job ? `${job.department} // ${job.type}` : 'Multidisciplinary Inquiries';

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-3xl bg-[#0B0B0F] border border-white/15 text-[#FAF9F6] p-6 sm:p-10 z-10 my-8 shadow-2xl overflow-hidden"
        >
          {/* Top ambient glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-32 bg-[#0066FF]/10 rounded-full blur-3xl pointer-events-none" />

          {/* Modal Header */}
          <div className="flex items-start justify-between gap-6 pb-6 border-b border-white/10 relative z-10">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF]" />
                <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#0066FF] font-semibold">
                  {roleDept}
                </span>
              </div>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl uppercase tracking-tight text-[#FAF9F6]">
                {roleTitle}
              </h2>
            </div>

            <button
              type="button"
              onClick={onClose}
              onMouseEnter={() => setCursorType('button')}
              onMouseLeave={() => setCursorType('default')}
              aria-label="Close application dialog"
              className="p-2.5 rounded-full bg-white/[0.04] border border-white/15 hover:bg-white/10 hover:border-white/30 text-[#888888] hover:text-white transition-all cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Body */}
          <div className="pt-6 relative z-10">
            {!isSuccess ? (
              <ApplicationForm
                initialJobId={job ? job.id : 'general'}
                initialJobTitle={roleTitle}
                onSubmitSuccess={() => setIsSuccess(true)}
                setCursorType={setCursorType}
              />
            ) : (
              /* 9. APPLICATION SUCCESS STATE */
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="py-12 sm:py-16 text-center space-y-8 max-w-lg mx-auto"
              >
                <div className="w-16 h-16 rounded-full bg-[#0066FF]/10 border border-[#0066FF]/40 flex items-center justify-center mx-auto text-[#0066FF]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div className="space-y-4">
                  <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#0066FF] font-semibold block">
                    TRANSMISSION RECORDED
                  </span>
                  <h3 className="font-display font-extrabold text-4xl sm:text-5xl text-[#FAF9F6] uppercase tracking-tight leading-[0.95]">
                    THANK YOU. <br />
                    WE'LL TAKE A LOOK.
                  </h3>
                  <p className="font-body text-base text-[#A0A0A0] font-light leading-relaxed">
                    Your application has been received as a frontend demo. In an active production environment, our creative directors review submissions weekly.
                  </p>
                </div>

                <div className="pt-4">
                  <button
                    type="button"
                    onClick={onClose}
                    onMouseEnter={() => setCursorType('button')}
                    onMouseLeave={() => setCursorType('default')}
                    className="px-8 py-4 bg-white/[0.05] hover:bg-[#0066FF] border border-white/20 hover:border-[#0066FF] text-[#FAF9F6] hover:text-white font-mono text-xs uppercase tracking-widest font-bold transition-all cursor-pointer"
                  >
                    CLOSE
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
