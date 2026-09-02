import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Zap, ShieldCheck } from 'lucide-react';

export default function CTABanner() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() && email.includes('@')) {
      setSubmitted(true);
    }
  };

  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Radiant Banner Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden p-8 sm:p-14 lg:p-16 border shadow-2xl glass-panel"
          style={{ borderColor: 'var(--border-color)' }}
        >
          {/* Internal Radiant Glow Orbs */}
          <div
            className="absolute top-0 right-0 w-[450px] h-[450px] rounded-full blur-3xl pointer-events-none opacity-50"
            style={{ background: 'radial-gradient(circle, var(--orb-1) 0%, transparent 70%)' }}
          />
          <div
            className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-3xl pointer-events-none opacity-50"
            style={{ background: 'radial-gradient(circle, var(--orb-2) 0%, transparent 70%)' }}
          />

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <div
              className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-pill border text-xs font-semibold uppercase tracking-wider mb-6"
              style={{ borderColor: 'var(--border-hover)', color: 'var(--accent-mid)' }}
            >
              <Zap className="w-3.5 h-3.5 fill-current" />
              Instant Velocity
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15]" style={{ color: 'var(--text-main)' }}>
              Ready to Accelerate Your Stack to{' '}
              <span className="text-gradient-purple-cyan">Zero-G?</span>
            </h2>

            <p className="mt-6 text-base sm:text-xl max-w-2xl mx-auto leading-relaxed" style={{ color: 'var(--text-sub)' }}>
              Join thousands of developers shipping instant edge microservices with automated multi-cloud canary deployments.
            </p>

            {/* Interactive Email / CTA Form */}
            <div className="mt-8 max-w-md mx-auto">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                  <div className="relative flex-1">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your work email..."
                      className="w-full px-4 py-3.5 rounded-xl border text-sm focus:outline-none transition-all shadow-inner"
                      style={{
                        backgroundColor: 'var(--bg-card)',
                        borderColor: 'var(--border-color)',
                        color: 'var(--text-main)'
                      }}
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-6 py-3.5 rounded-xl text-white font-semibold text-sm shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 shrink-0"
                    style={{ background: 'linear-gradient(90deg, var(--accent-start), var(--accent-mid))' }}
                  >
                    <span>Claim Free Access</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-4 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-sm font-medium flex items-center justify-center gap-2"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>You're on the priority access list! Check your inbox shortly.</span>
                </motion.div>
              )}
            </div>

            {/* Trust Badges */}
            <div className="mt-8 pt-6 border-t flex flex-wrap items-center justify-center gap-6 text-xs font-medium" style={{ borderColor: 'var(--border-color)', color: 'var(--text-muted)' }}>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                14-day free Pro trial
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4" style={{ color: 'var(--accent-mid)' }} />
                SOC2 Type II Certified
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                No credit card required
              </span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
