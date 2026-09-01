import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, Check, Send, ShieldCheck, Mail } from 'lucide-react';
import { useZMag } from '../../context/ZMagContext';

export function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success'
  const [particles, setParticles] = useState([]);
  const { showToast } = useZMag();

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      showToast('Please enter a valid email address');
      return;
    }

    setStatus('loading');

    setTimeout(() => {
      setStatus('success');
      showToast('Welcome to the Z MAG Weekly Monograph Dispatch');

      // Generate playful confetti explosion particles
      const newParticles = Array.from({ length: 24 }).map((_, i) => ({
        id: i,
        x: (Math.random() - 0.5) * 260,
        y: (Math.random() - 0.5) * 180 - 40,
        scale: Math.random() * 0.8 + 0.4,
        color: ['#0055FF', '#FF5E3A', '#10B981', '#7000FF', '#C28B38'][Math.floor(Math.random() * 5)],
        rotate: Math.random() * 360,
      }));
      setParticles(newParticles);
    }, 600);
  };

  return (
    <section className="relative my-24 overflow-hidden rounded-3xl glass-card bg-gradient-to-br from-white via-[#F8F9FA] to-[#EBF4FF]/60 border border-white p-8 sm:p-12 md:p-16 shadow-[0_20px_50px_-10px_rgba(0,85,255,0.08)]">
      {/* Background Decorative Blur Spheres */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#0055FF]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#FF5E3A]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
        {/* Header Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#BFDBFE] text-[#0055FF] text-xs font-mono font-bold uppercase tracking-wider shadow-xs">
          <Sparkles className="w-3.5 h-3.5" />
          <span>The Weekly Monograph Dispatch</span>
        </div>

        {/* Massive Headline */}
        <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#111827] tracking-tight uppercase leading-[1.05]">
          Curated Intellectual Rigor Delivered Every Sunday.
        </h2>

        <p className="text-base sm:text-lg text-[#4B5563] max-w-2xl mx-auto leading-relaxed">
          Join 42,000+ architects, computational theorists, and cultural commentators. Exhaustive essays, zero algorithmic filler.
        </p>

        {/* Subscribe Form with State Morphing Button & Confetti */}
        <div className="pt-4 relative max-w-xl mx-auto">
          {status === 'success' ? (
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="p-6 rounded-2xl bg-white border border-[#BFDBFE] shadow-lg flex flex-col items-center justify-center space-y-2 relative"
            >
              {/* Confetti Explosion Particles */}
              {particles.map((p) => (
                <motion.div
                  key={p.id}
                  initial={{ x: 0, y: 0, opacity: 1, scale: 0 }}
                  animate={{
                    x: p.x,
                    y: p.y,
                    opacity: 0,
                    scale: p.scale,
                    rotate: p.rotate,
                  }}
                  transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                  style={{ backgroundColor: p.color }}
                  className="absolute w-2.5 h-2.5 rounded-full pointer-events-none z-20"
                />
              ))}

              <div className="w-12 h-12 rounded-full bg-[#10B981] text-white flex items-center justify-center shadow-md">
                <Check className="w-6 h-6 stroke-[3]" />
              </div>
              <h4 className="font-heading font-bold text-lg text-[#111827]">
                You're On The Dispatch Wire
              </h4>
              <p className="text-xs font-mono text-[#6B7280]">
                Confirmation dispatched to {email}. Check your inbox for Vol. 2026 Index.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#9CA3AF]" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your academic / personal email..."
                  required
                  className="w-full pl-12 pr-4 py-4 rounded-full bg-white border border-[#E5E7EB] text-sm text-[#111827] focus:outline-none focus:border-[#0055FF] focus:ring-4 focus:ring-[#0055FF]/10 transition-all shadow-xs placeholder:text-[#9CA3AF]"
                />
              </div>

              <motion.button
                type="submit"
                disabled={status === 'loading'}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-4 rounded-full bg-[#0055FF] hover:bg-[#0040C7] text-white font-heading font-extrabold text-xs uppercase tracking-wider transition-all shadow-[0_10px_25px_-5px_rgba(0,85,255,0.4)] flex items-center justify-center gap-2 cursor-pointer shrink-0 disabled:opacity-50"
              >
                {status === 'loading' ? (
                  <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <span>Subscribe</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </motion.button>
            </form>
          )}

          <div className="flex items-center justify-center gap-2 mt-4 text-[0.6875rem] font-mono text-[#6B7280]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#10B981]" />
            <span>Strict privacy. No sponsored advertising. One-click unsubscribe.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
