import React, { useEffect, useState } from 'react';
import { ShieldCheck, Lock, CheckCircle2, Activity, User, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface LoginLoadingScreenProps {
  user: {
    name: string;
    avatar?: string;
    email?: string;
    relation?: string;
  };
  onComplete: () => void;
}

export const LoginLoadingScreen: React.FC<LoginLoadingScreenProps> = ({ user, onComplete }) => {
  const [progress, setProgress] = useState(15);
  const [activeStep, setActiveStep] = useState(0);

  const verificationSteps = [
    { label: 'Verifying credentials & cryptographic token', done: activeStep > 0 },
    { label: 'Decrypting personal health record & biometric data', done: activeStep > 1 },
    { label: 'Synchronizing appointments, medications & lab reports', done: activeStep > 2 },
    { label: 'Authorization confirmed. Accessing medical portal...', done: activeStep >= 3 },
  ];

  useEffect(() => {
    const t1 = setTimeout(() => {
      setProgress(42);
      setActiveStep(1);
    }, 450);

    const t2 = setTimeout(() => {
      setProgress(78);
      setActiveStep(2);
    }, 950);

    const t3 = setTimeout(() => {
      setProgress(100);
      setActiveStep(3);
    }, 1450);

    const tComplete = setTimeout(() => {
      onComplete();
    }, 1900);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(tComplete);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-slate-900/80 backdrop-blur-md text-white p-4"
      id="login-loading-screen-overlay"
    >
      <motion.div 
        initial={{ scale: 0.9, y: 15 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        className="w-full max-w-md bg-white text-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-100 relative overflow-hidden"
      >
        {/* Top Decorative Emerald Header Bar */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#00A884] via-[#00C49F] to-[#009272]" />

        {/* User Identity Box */}
        <div className="flex flex-col items-center text-center mt-2 mb-6">
          <div className="relative mb-3">
            {/* Spinning decorative ring */}
            <div className="absolute -inset-2.5 rounded-full border-2 border-dashed border-[#00A884] animate-spin" style={{ animationDuration: '6s' }} />
            
            <img
              src={user.avatar || 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=160&q=80'}
              alt={user.name}
              className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-md relative z-10"
            />
            
            <div className="absolute -bottom-1 -right-1 z-20 bg-[#00A884] text-white p-1 rounded-full shadow-sm">
              {activeStep >= 3 ? (
                <CheckCircle2 className="w-4 h-4 text-white" />
              ) : (
                <Lock className="w-4 h-4 text-white animate-pulse" />
              )}
            </div>
          </div>

          <h2 className="text-xl font-bold font-['Outfit',sans-serif] text-slate-900">
            Logging in as {user.name}
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            {user.email || 'Encrypted Health ID • Primary Member'}
          </p>
        </div>

        {/* Live Progress Bar */}
        <div className="space-y-2 mb-6">
          <div className="flex items-center justify-between text-xs font-semibold text-slate-700">
            <span className="flex items-center space-x-1.5 text-[#00A884]">
              <Activity className="w-3.5 h-3.5 animate-spin" />
              <span>Authenticating Session</span>
            </span>
            <span className="font-mono text-slate-800 font-bold">{progress}%</span>
          </div>

          <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden p-0.5 border border-slate-200/60">
            <motion.div
              className="h-full bg-gradient-to-r from-[#00A884] to-[#00C49F] rounded-full shadow-xs"
              initial={{ width: '15%' }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: 'easeOut', duration: 0.35 }}
            />
          </div>
        </div>

        {/* Verification Checkpoints */}
        <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 space-y-2.5 mb-6 text-left">
          {verificationSteps.map((step, idx) => (
            <div key={idx} className="flex items-center space-x-3 text-xs">
              {step.done ? (
                <div className="w-5 h-5 rounded-full bg-[#E6F7F3] text-[#00A884] flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
              ) : activeStep === idx ? (
                <div className="w-5 h-5 rounded-full bg-blue-50 text-[#00A884] flex items-center justify-center flex-shrink-0 animate-pulse">
                  <div className="w-2 h-2 rounded-full bg-[#00A884]" />
                </div>
              ) : (
                <div className="w-5 h-5 rounded-full bg-slate-200 text-slate-400 flex items-center justify-center flex-shrink-0">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                </div>
              )}

              <span className={`transition-colors ${
                step.done 
                  ? 'text-slate-800 font-semibold' 
                  : activeStep === idx 
                  ? 'text-[#00A884] font-semibold' 
                  : 'text-slate-400'
              }`}>
                {step.label}
              </span>
            </div>
          ))}
        </div>

        {/* Footer Security reassurance */}
        <div className="flex items-center justify-between text-[11px] text-slate-400 pt-2 border-t border-slate-100">
          <div className="flex items-center space-x-1.5 text-slate-500">
            <ShieldCheck className="w-3.5 h-3.5 text-[#00A884]" />
            <span>End-to-end encrypted session</span>
          </div>
          <span className="text-[10px] font-mono text-slate-400">TLS 1.3</span>
        </div>
      </motion.div>
    </motion.div>
  );
};
