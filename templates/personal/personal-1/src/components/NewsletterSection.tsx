import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, ArrowRight, CheckCircle2, Sparkles, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';

export const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubscribed(true);
    confetti({
      particleCount: 60,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#D4AF37', '#ffffff', '#10b981'],
    });
  };

  return (
    <section className="relative py-20 bg-[#050505] text-[#E5E5E5] border-t border-white/5 overflow-hidden">
      {/* Background Graphic Flare */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(212,175,55,0.15),rgba(255,255,255,0))]" />

      <div className="max-w-4xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="rounded-3xl bg-white/[0.03] border border-white/10 p-8 sm:p-12 shadow-2xl backdrop-blur-xl text-center relative overflow-hidden">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-[10px] uppercase font-bold tracking-[0.35em] text-[#D4AF37] mb-4 font-mono">
            <Sparkles size={13} />
            <span>DISPATCHES FROM THE VANGUARD</span>
          </div>

          <h2 className="font-display font-black text-2xl sm:text-4xl text-white tracking-tight mb-3">
            The Creative Systems <span className="font-serif italic font-normal text-[#D4AF37]">Quarterly</span>.
          </h2>

          <p className="text-xs sm:text-sm text-neutral-400 max-w-xl mx-auto mb-8 font-sans font-light">
            Join 14,000+ senior engineers, staff designers, and founders receiving high-resolution dissections of WebGPU shaders, zero-slop UI craft, and multimodal AI architectures.
          </p>

          {isSubscribed ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 text-sm font-mono flex items-center justify-center gap-2 max-w-md mx-auto"
            >
              <CheckCircle2 size={16} />
              <span>Subscription Confirmed. Welcome to the Vanguard!</span>
            </motion.div>
          ) : (
            <form onSubmit={handleSubscribe} className="max-w-md mx-auto flex flex-col sm:flex-row gap-2.5">
              <input
                type="email"
                required
                placeholder="Enter your work email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id="newsletter-email-input"
                className="flex-1 px-4 py-3.5 rounded-xl bg-white/[0.04] border border-white/10 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#D4AF37] transition-colors"
              />
              <button
                type="submit"
                id="newsletter-subscribe-btn"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#D4AF37] via-amber-500 to-amber-600 text-black font-extrabold text-xs tracking-wide hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#D4AF37]/20"
              >
                <span>Join Vanguard</span>
                <ArrowRight size={14} />
              </button>
            </form>
          )}

          <div className="flex items-center justify-center gap-2 text-[11px] font-mono text-neutral-400 mt-4">
            <ShieldCheck size={12} className="text-neutral-500" />
            <span>Strict zero-spam policy. Unsubscribe in one click anytime.</span>
          </div>

        </div>
      </div>
    </section>
  );
};
