import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles,
  ArrowRight,
  Send,
  CheckCircle2,
  Lock,
  Cpu,
  ShieldCheck,
  Zap
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { useToast } from './Toast';

export default function CTA({ onOpenContact }) {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { addToast } = useToast();

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      addToast('Please enter a valid email address', 'error');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubscribed(true);

      // Trigger Confetti effect
      try {
        confetti({
          particleCount: 120,
          spread: 70,
          origin: { y: 0.7 },
          colors: ['#8b5cf6', '#06b6d4', '#ec4899', '#10b981']
        });
      } catch (err) {
        // fallback
      }

      addToast('VIP Access Granted! Check your inbox for your cryptographic invite token.', 'success');
    }, 1000);
  };

  return (
    <section className="relative py-28 bg-[#07090e] overflow-hidden">
      {/* Radiant Aurora Flare */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.25)_0%,rgba(6,182,212,0.15)_40%,transparent_70%)] pointer-events-none" />

      {/* Cyber Grid */}
      <div className="absolute inset-0 bg-cyber-grid opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl glass-panel bg-gradient-to-b from-[#0d121f]/95 to-[#090d16]/95 border border-purple-500/30 p-8 sm:p-14 lg:p-16 text-center shadow-[0_0_80px_rgba(139,92,246,0.25)] overflow-hidden"
        >
          {/* Floating Decorative Rings */}
          <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full border border-purple-500/20 pointer-events-none animate-spin-slow" />
          <div className="absolute -bottom-24 -right-24 w-64 h-64 rounded-full border border-cyan-500/20 pointer-events-none animate-spin-reverse" />

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel-subtle text-xs font-mono font-semibold text-cyan-300 border border-cyan-500/30 mb-6">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>INSTANT ENCLAVE DEPLOYMENT</span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6">
            Architect the Future of <br className="hidden sm:inline" />
            <span className="gradient-text-accent">Spatial Autonomy Today</span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            Join forward-thinking enterprise engineering teams deploying high-concurrency cognitive swarms and WebXR spatial interfaces with sub-10ms latency.
          </p>

          {/* Interactive Form or Success Box */}
          {isSubscribed ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 max-w-md mx-auto flex items-center justify-center gap-3 text-emerald-300 font-mono text-xs sm:text-sm"
            >
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
              <span>Priority Invitation Token Activated: #{Math.random().toString(36).substring(2, 8).toUpperCase()}</span>
            </motion.div>
          ) : (
            <form onSubmit={handleSubscribe} className="max-w-md mx-auto mb-8">
              <div className="flex flex-col sm:flex-row items-stretch gap-3">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter corporate email for VIP token..."
                  className="flex-1 px-4 py-3.5 rounded-xl bg-white/5 border border-white/15 text-white text-xs sm:text-sm font-mono focus:outline-none focus:border-cyan-400 placeholder:text-slate-500 transition-colors"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-3.5 rounded-xl btn-primary flex items-center justify-center gap-2 text-xs font-semibold whitespace-nowrap cursor-pointer shadow-lg hover:shadow-cyan-500/25 transition-all"
                >
                  {isSubmitting ? (
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Get VIP Access</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}

          {/* Security & Feature Badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-[11px] font-mono text-slate-400 pt-4 border-t border-white/10">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
              <span>SOC2 Type II Certified</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5 text-purple-400" />
              <span>Post-Quantum Kyber-1024</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-emerald-400" />
              <span>14-Day Free Sovereign Pilot</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
