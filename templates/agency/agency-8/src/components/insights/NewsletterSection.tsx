import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Check, Sparkles } from 'lucide-react';
import { CursorType } from '../../types';

interface NewsletterSectionProps {
  setCursorType: (type: CursorType, text?: string) => void;
}

export const NewsletterSection: React.FC<NewsletterSectionProps> = ({
  setCursorType,
}) => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setError('PLEASE ENTER A VALID EMAIL ADDRESS');
      return;
    }

    setError('');
    setIsSubmitted(true);
  };

  return (
    <section className="py-24 sm:py-36 px-6 sm:px-8 lg:px-12 bg-[#080808] border-b border-[#ffffff10] relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[300px] bg-[#0066FF]/[0.03] rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Editorial Heading */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF]" />
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#888888]">
                04 / DISPATCHES
              </span>
            </div>

            <h2 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl text-[#FAF9F6] uppercase tracking-tight leading-[0.98]">
              A FEW GOOD<br />
              IDEAS,<br />
              OCCASIONALLY.
            </h2>

            <p className="font-body text-base sm:text-lg text-[#888888] font-light leading-relaxed max-w-lg">
              Get thoughtful perspectives on design, technology and digital culture. Curated quarterly, no marketing noise.
            </p>
          </div>

          {/* Right Interactive Form Area */}
          <div className="lg:col-span-6">
            <div className="bg-[#0e0e12] border border-white/10 p-8 sm:p-12 relative">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="newsletter-form"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div className="space-y-2">
                      <label
                        htmlFor="newsletter-email-input"
                        className="font-mono text-xs uppercase tracking-widest text-[#888888] block"
                      >
                        YOUR EMAIL
                      </label>
                      <div className="relative">
                        <input
                          id="newsletter-email-input"
                          type="email"
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                            if (error) setError('');
                          }}
                          placeholder="name@company.com"
                          className="w-full bg-[#080808] border border-white/15 px-5 py-4 text-sm text-[#FAF9F6] font-mono focus:border-[#0066FF] focus:outline-none transition-colors placeholder:text-white/20"
                        />
                      </div>
                      {error && (
                        <p className="font-mono text-[10px] text-red-400 tracking-wider pt-1">
                          {error}
                        </p>
                      )}
                    </div>

                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-2">
                      <button
                        type="submit"
                        onMouseEnter={() => setCursorType('button')}
                        onMouseLeave={() => setCursorType('default')}
                        className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#0066FF] hover:brightness-110 text-white font-mono text-xs uppercase tracking-widest font-bold border border-[#0066FF]/40 transition-all duration-300 cursor-pointer shadow-lg shadow-[#0066FF]/10"
                      >
                        <span>SUBSCRIBE</span>
                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </button>

                      <span className="font-mono text-[10px] text-[#666666] uppercase tracking-widest text-center sm:text-right">
                        DISPATCH DEMO / NO SPAM
                      </span>
                    </div>
                  </motion.form>
                ) : (
                  <motion.div
                    key="newsletter-success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="space-y-4 py-4 text-center sm:text-left"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#0066FF]/20 border border-[#0066FF] flex items-center justify-center text-[#0066FF] mb-4 mx-auto sm:mx-0">
                      <Check className="w-6 h-6" />
                    </div>

                    <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white uppercase tracking-tight">
                      YOU'RE IN.
                    </h3>

                    <p className="font-mono text-xs sm:text-sm text-[#0066FF] uppercase tracking-wider font-semibold">
                      THANK YOU FOR SUBSCRIBING.
                    </p>

                    <p className="font-body text-xs text-[#888888] font-light leading-relaxed">
                      You will receive our next quarterly editorial monograph directly to your inbox.
                    </p>

                    <button
                      type="button"
                      onClick={() => {
                        setIsSubmitted(false);
                        setEmail('');
                      }}
                      className="pt-3 font-mono text-[10px] text-[#666666] hover:text-white uppercase tracking-widest underline transition-colors cursor-pointer"
                    >
                      REGISTER ANOTHER ADDRESS
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
