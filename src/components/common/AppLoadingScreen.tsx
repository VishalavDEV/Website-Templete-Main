import React, { useEffect, useState } from 'react';
import { Heart, Plus, ShieldCheck, Activity, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface AppLoadingScreenProps {
  onComplete: () => void;
}

export const AppLoadingScreen: React.FC<AppLoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(12);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const steps = [
    'Initializing HealthPlus clinical core...',
    'Loading encrypted biometric telemetry...',
    'Syncing family profiles & specialist network...',
    'Welcome to HealthPlus. Systems ready.',
  ];

  useEffect(() => {
    // Step progression
    const timer1 = setTimeout(() => {
      setProgress(40);
      setCurrentStepIndex(1);
    }, 450);

    const timer2 = setTimeout(() => {
      setProgress(75);
      setCurrentStepIndex(2);
    }, 950);

    const timer3 = setTimeout(() => {
      setProgress(100);
      setCurrentStepIndex(3);
    }, 1450);

    const timerDone = setTimeout(() => {
      onComplete();
    }, 1900);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timerDone);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.98, transition: { duration: 0.4, ease: 'easeInOut' } }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#F8FAFC] text-[#0F172A] selection:bg-[#E6F7F3]"
      id="app-initial-loading-screen"
    >
      {/* Background Soft Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#00A884]/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-md px-6 flex flex-col items-center text-center">
        {/* Brand Logo with Pulsing Badge */}
        <div className="relative mb-6">
          <div className="absolute -inset-2 bg-gradient-to-r from-[#00A884]/30 to-[#009272]/20 rounded-3xl blur-md animate-pulse" />
          <div className="relative w-20 h-20 rounded-2xl bg-[#00A884] shadow-lg flex items-center justify-center text-white">
            <div className="relative flex items-center justify-center">
              <Heart className="w-10 h-10 fill-white/20 text-white animate-bounce" />
              <Plus className="w-6 h-6 text-white absolute font-extrabold stroke-[3.5]" />
            </div>
          </div>
        </div>

        {/* Brand Name & Tagline */}
        <h1 className="text-2xl sm:text-3xl font-extrabold font-['Outfit',sans-serif] tracking-tight text-[#0F172A]">
          HealthPlus
        </h1>
        <p className="text-xs sm:text-sm font-medium text-slate-500 mt-1 mb-8">
          Your Health. Our Priority. • Modern Medical Ecosystem
        </p>

        {/* Animated ECG Heartbeat Monitor Line */}
        <div className="w-full h-14 bg-white rounded-2xl border border-slate-200/80 shadow-xs px-4 py-2 flex items-center justify-center relative overflow-hidden mb-6">
          {/* Grid background */}
          <div 
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage: 'radial-gradient(#00A884 1px, transparent 1px)',
              backgroundSize: '12px 12px',
            }}
          />

          <svg className="w-full h-8 text-[#00A884] overflow-visible" viewBox="0 0 300 40" fill="none">
            <motion.path
              d="M 0 20 L 50 20 L 60 10 L 70 30 L 80 18 L 90 22 L 100 20 L 140 20 L 150 5 L 160 35 L 170 12 L 180 25 L 190 20 L 240 20 L 250 8 L 260 32 L 270 20 L 300 20"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0.2, pathOffset: 0 }}
              animate={{ pathLength: [0.2, 0.4, 0.2], pathOffset: [0, 1] }}
              transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
            />
          </svg>

          <div className="absolute right-3 top-2 flex items-center space-x-1">
            <span className="w-2 h-2 rounded-full bg-[#00A884] animate-ping" />
            <span className="text-[10px] font-bold text-[#00A884]">LIVE VITAL</span>
          </div>
        </div>

        {/* Progress Bar & Status */}
        <div className="w-full space-y-3">
          <div className="flex items-center justify-between text-xs font-semibold text-slate-600">
            <span className="flex items-center space-x-1.5">
              <Activity className="w-3.5 h-3.5 text-[#00A884] animate-spin" />
              <span>Loading Medical Gateway</span>
            </span>
            <span className="text-[#00A884] font-bold font-mono">{progress}%</span>
          </div>

          <div className="w-full h-2 bg-slate-200/80 rounded-full overflow-hidden p-0.5">
            <motion.div
              className="h-full bg-gradient-to-r from-[#00A884] to-[#00C49F] rounded-full"
              initial={{ width: '12%' }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: 'easeOut', duration: 0.4 }}
            />
          </div>

          {/* Current Step Description */}
          <div className="h-6 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.p
                key={currentStepIndex}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.2 }}
                className="text-xs text-slate-500 font-medium"
              >
                {steps[currentStepIndex]}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>

        {/* Security & HIPAA Badge Footer */}
        <div className="mt-8 flex items-center justify-between w-full pt-4 border-t border-slate-200/60 text-[11px] text-slate-400">
          <div className="flex items-center space-x-1.5 text-slate-500">
            <ShieldCheck className="w-3.5 h-3.5 text-[#00A884]" />
            <span>256-Bit Encrypted • HIPAA Compliant</span>
          </div>
          <button
            onClick={onComplete}
            id="skip-app-loading-btn"
            className="text-slate-400 hover:text-slate-700 hover:underline cursor-pointer transition-colors"
          >
            Skip intro
          </button>
        </div>
      </div>
    </motion.div>
  );
};
