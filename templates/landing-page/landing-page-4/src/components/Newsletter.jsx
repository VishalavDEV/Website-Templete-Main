import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight, CheckCircle2, AlertCircle, Sparkles, Send } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg('');

    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      setStatus('error');
      setErrorMsg('Please enter your work email address.');
      return;
    }

    if (!emailRegex.test(email.trim())) {
      setStatus('error');
      setErrorMsg('Please enter a valid email address (e.g. name@company.com).');
      return;
    }

    setStatus('loading');

    // Simulate API submission
    setTimeout(() => {
      setStatus('success');
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.7 },
          colors: ['#F5A900', '#FFC247', '#FFFFFF', '#FF8A00']
        });
      } catch (err) {
        // Safe fallback if confetti isn't supported
      }
    }, 900);
  };

  return (
    <section id="newsletter" className="py-20 md:py-28 relative">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-amber-500/5 blur-[160px] pointer-events-none"></div>

      <div className="container mx-auto px-4">
        
        <div className="max-w-4xl mx-auto rounded-3xl p-8 md:p-14 bg-gradient-to-b from-[#111116] to-[#0a0a0d] border border-white/10 shadow-2xl shadow-black/80 relative overflow-hidden text-center">
          
          {/* Subtle Ambient Top Border Glow */}
          <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-5">
            <Sparkles size={14} />
            Weekly Engineering Dispatch
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Your Next Great Workflow{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">
              Starts Here.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-zinc-300 max-w-xl mx-auto leading-relaxed mb-8">
            Get practical productivity ideas, architecture breakdown blueprints, and early feature access delivered straight to your inbox.
          </p>

          {status === 'success' ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 max-w-md mx-auto"
            >
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-3">
                <CheckCircle2 size={24} />
              </div>
              <h4 className="text-base font-bold text-white mb-1">You’re on the VIP list!</h4>
              <p className="text-xs text-zinc-300">
                We’ve sent a confirmation link to <span className="text-amber-400 font-mono">{email}</span>. Check your inbox to unlock starter templates.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
              <div className="flex flex-col sm:flex-row items-center gap-3 p-2 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-xl focus-within:border-amber-500/50 transition-all">
                <div className="flex items-center gap-2.5 px-3 w-full sm:w-auto flex-grow">
                  <Mail size={18} className="text-zinc-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your work email..."
                    className="w-full bg-transparent text-sm text-white placeholder-zinc-500 outline-none py-2"
                    aria-label="Email address"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-sm bg-gradient-to-r from-amber-500 to-amber-400 text-black hover:from-amber-400 hover:to-amber-300 shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  {status === 'loading' ? (
                    <span>Subscribing...</span>
                  ) : (
                    <>
                      <span>Get Updates</span>
                      <ArrowRight size={15} />
                    </>
                  )}
                </button>
              </div>

              {status === 'error' && (
                <div className="flex items-center justify-center gap-1.5 text-xs text-rose-400 mt-3">
                  <AlertCircle size={14} />
                  <span>{errorMsg}</span>
                </div>
              )}

              <p className="text-[11px] text-zinc-500 mt-4">
                No spam ever. Unsubscribe at any time with one click. Read our{' '}
                <a href="#" className="underline text-zinc-400 hover:text-white">Privacy Policy</a>.
              </p>
            </form>
          )}

        </div>

      </div>
    </section>
  );
}
