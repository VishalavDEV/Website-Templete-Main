import React, { memo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Check, ArrowRight, Sparkles, Loader2 } from 'lucide-react';
import { TactileButton } from './TactileButton';

export const NewsletterBox: React.FC = memo(() => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setErrorMessage('');
    setStatus('loading');

    // Simulate snappy network call
    setTimeout(() => {
      setStatus('success');
    }, 600);
  };

  const handleReset = () => {
    setEmail('');
    setStatus('idle');
  };

  return (
    <div className="relative w-full max-w-xl p-8 sm:p-10 rounded-3xl glass-card-airy bg-white/95 border border-white/95 shadow-2xl overflow-hidden">
      {/* Top Ambient Glow Line */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-600 via-indigo-500 to-rose-400 opacity-90" />

      <div className="flex items-center gap-2 text-xs font-mono text-blue-600 font-bold uppercase tracking-widest mb-3">
        <Sparkles className="w-3.5 h-3.5 text-amber-400" />
        <span>Weekly Spatial Dispatch</span>
      </div>

      <h3 className="type-h3 font-display font-extrabold text-slate-900 tracking-tight mb-2">
        Join 142,000+ Design Innovators
      </h3>
      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-sans">
        Receive our Friday digest of deep architectural investigations, spatial typography specs, and invitations to private salon dialogues.
      </p>

      {/* State-Morphing Form Container */}
      <div className="relative min-h-[58px]">
        <AnimatePresence mode="wait">
          {status === 'success' ? (
            <motion.div
              key="success-state"
              initial={{ opacity: 0, y: 15, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -15, scale: 0.96 }}
              transition={{
                type: 'spring',
                stiffness: 260,
                damping: 22,
              }}
              className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200/80 flex items-center justify-between gap-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center shadow-xs flex-shrink-0">
                  <Check className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="font-display font-bold text-xs sm:text-sm text-emerald-950">
                    Welcome to the Collective!
                  </span>
                  <span className="text-[11px] font-mono text-emerald-700">
                    We just dispatched Issue 08 foreword to your inbox.
                  </span>
                </div>
              </div>

              <button
                onClick={handleReset}
                className="text-[11px] font-mono text-emerald-800 hover:text-emerald-950 font-semibold underline underline-offset-2 flex-shrink-0 cursor-pointer"
              >
                Reset
              </button>
            </motion.div>
          ) : (
            <motion.form
              key="input-state"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row items-center gap-3"
            >
              <div className="relative w-full">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@studio.design"
                  disabled={status === 'loading'}
                  className="w-full pl-11 pr-4 py-3.5 rounded-full bg-slate-100/90 border border-slate-200 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all text-xs font-medium text-slate-900 placeholder:text-slate-400 outline-none"
                />
              </div>

              <TactileButton
                type="submit"
                variant="primary"
                size="md"
                disabled={status === 'loading'}
                className="w-full sm:w-auto flex-shrink-0 !py-3.5 !px-6"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-white" />
                    <span>Confirming...</span>
                  </>
                ) : (
                  <>
                    <span>Subscribe</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </>
                )}
              </TactileButton>
            </motion.form>
          )}
        </AnimatePresence>
      </div>

      {errorMessage && (
        <span className="text-[11px] font-mono text-rose-500 mt-2 block">
          {errorMessage}
        </span>
      )}

      <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 mt-4 pt-3 border-t border-slate-100">
        <span>Strict zero-spam policy. Unsubscribe in 1 click.</span>
        <span>ISSN 2840-1928</span>
      </div>
    </div>
  );
});

NewsletterBox.displayName = 'NewsletterBox';
