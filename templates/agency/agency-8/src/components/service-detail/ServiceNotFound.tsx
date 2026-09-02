import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { MagneticButton } from '../MagneticButton';
import { CursorType } from '../../types';

interface ServiceNotFoundProps {
  onNavigate: (path: string) => void;
  setCursorType: (type: CursorType, text?: string) => void;
}

export const ServiceNotFound: React.FC<ServiceNotFoundProps> = ({
  onNavigate,
  setCursorType,
}) => {
  return (
    <section className="min-h-[85vh] flex items-center justify-center bg-[#080808] px-6 py-32 text-center">
      <div className="max-w-2xl mx-auto space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-4"
        >
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#0066FF] font-bold">
            404 // CAPABILITY NOT FOUND
          </span>
          <h1 className="font-display text-4xl sm:text-6xl font-black uppercase text-[#FAF9F6] tracking-tight">
            SPECIFICATION <br />
            <span className="font-editorial italic font-normal text-[#0066FF] lowercase">
              unavailable
            </span>
          </h1>
          <p className="font-sans text-base text-[#888888] max-w-md mx-auto">
            The requested capability archive could not be located. Explore our primary services catalog below.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="pt-4"
        >
          <MagneticButton
            onClick={() => onNavigate('/services')}
            onCursorEnter={() => setCursorType('button')}
            onCursorLeave={() => setCursorType('default')}
            className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 hover:bg-white/20 text-[#FAF9F6] font-bold text-xs uppercase tracking-widest transition-all rounded-full border border-white/15"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>ALL CAPABILITIES</span>
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
};
