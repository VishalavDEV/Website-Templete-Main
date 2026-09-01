import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useMagazine } from '../../context/MagazineContext';
import DopamineBadge from '../common/DopamineBadge';
import { Sparkles, Check, Send, Flame, Mail, Heart, Zap } from 'lucide-react';
import clsx from 'clsx';

export function DopamineNewsletter() {
  const { triggerDopamineConfetti } = useMagazine();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success'

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;

    setStatus('loading');

    setTimeout(() => {
      setStatus('success');
      triggerDopamineConfetti(0.5, 0.5);
    }, 600);
  };

  const resetForm = () => {
    setStatus('idle');
    setEmail('');
  };

  return (
    <section className="my-10 sm:my-14 relative overflow-hidden bg-[#FFFDF8] border-4 border-[#0A0A0E] shadow-[8px_8px_0px_#0A0A0E] p-5 sm:p-10 lg:p-12 pattern-grid-light select-none w-full">
      {/* Decorative Pinned Stickers */}
      <div className="absolute top-4 right-4 hidden sm:block rotate-6">
        <DopamineBadge variant="yellow" size="lg" icon={Flame}>
          JOIN 42,000+ CURATORS
        </DopamineBadge>
      </div>

      <div className="max-w-3xl mx-auto text-center space-y-6 relative z-10">
        
        {/* Header & Badges */}
        <div className="space-y-2.5">
          <div className="flex items-center justify-center gap-2">
            <span className="w-3 h-3 bg-[#FF007A] inline-block border border-[#0A0A0E]"></span>
            <span className="font-mono text-xs font-black uppercase text-[#FF007A] tracking-wider">
              WEEKLY CITATION DISPATCH
            </span>
          </div>

          <h2 className="text-fluid-h1 font-display-serif font-black text-[#0A0A0E] tracking-tight uppercase leading-[0.98]">
            GET THE NEXT <br className="hidden sm:inline" />
            <span className="font-display-y2k text-[#0047FF] text-dopamine-gradient">
              DOPAMINE DROP
            </span>{' '}
            FIRST
          </h2>

          <p className="font-brutal-body text-xs sm:text-sm text-[#2C2D35] max-w-xl mx-auto font-medium leading-relaxed">
            Direct access to unreleased Paris avant-garde breakthroughs, 3D bio-material patents, and underground streetwear archives every Friday morning.
          </p>
        </div>

        {/* INTERACTIVE SUBSCRIPTION FORM WITH BUTTON MORPH */}
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-3.5">
          <AnimatePresence mode="wait">
            {status !== 'success' ? (
              <motion.div
                key="form-input"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="flex flex-col sm:flex-row gap-3 items-stretch"
              >
                <div className="relative flex-1">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#626470]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="ENTER YOUR CURATOR EMAIL..."
                    disabled={status === 'loading'}
                    className="w-full pl-10 pr-4 py-3 font-mono text-xs font-bold uppercase bg-white text-[#0A0A0E] placeholder:text-[#626470]/50 border-3 border-[#0A0A0E] shadow-[3px_3px_0px_#0A0A0E] focus:bg-[#FFEBF3] focus:shadow-[5px_5px_0px_#FF007A] focus:outline-none transition-all"
                  />
                </div>

                {/* Tactile Morphing Submit Button */}
                <motion.button
                  layout
                  whileHover={{ scale: 1.03, x: -2, y: -2 }}
                  whileTap={{ scale: 0.94 }}
                  type="submit"
                  disabled={status === 'loading'}
                  className="px-7 py-3 bg-[#FF007A] hover:bg-[#FF1A88] text-white font-heading font-black text-xs sm:text-sm uppercase tracking-wider border-3 border-[#0A0A0E] shadow-[3px_3px_0px_#0A0A0E] hover:shadow-[5px_5px_0px_#0047FF] transition-colors flex items-center justify-center gap-2 cursor-pointer shrink-0 select-none"
                >
                  {status === 'loading' ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                    >
                      <Sparkles className="w-4 h-4 text-white" />
                    </motion.div>
                  ) : (
                    <>
                      <span>SUBSCRIBE</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </motion.button>
              </motion.div>
            ) : (
              /* MORPHED PILL CONFIRMATION STATE */
              <motion.div
                key="success-pill"
                initial={{ opacity: 0, scale: 0.85, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.85 }}
                transition={{
                  type: 'spring',
                  stiffness: 500,
                  damping: 22
                }}
                className="p-5 sm:p-6 bg-[#10FF70] border-3.5 border-[#0A0A0E] shadow-[6px_6px_0px_#0A0A0E] rounded-2xl sm:rounded-full flex flex-col sm:flex-row items-center justify-between gap-4"
              >
                <div className="flex items-center gap-3">
                  <motion.div
                    animate={{ scale: [1, 1.25, 1], rotate: [0, 15, -15, 0] }}
                    transition={{ duration: 0.5 }}
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#0A0A0E] text-[#10FF70] flex items-center justify-center shrink-0"
                  >
                    <Check className="w-5 h-5 stroke-[3]" />
                  </motion.div>
                  <div className="text-left">
                    <div className="font-y2k font-black text-xs sm:text-base text-[#0A0A0E]">
                      YOU'RE ON THE VIP GRAIL LIST ✦
                    </div>
                    <div className="font-mono text-[11px] sm:text-xs text-[#0A0A0E] font-bold">
                      Confirmation dispatch sent to {email}
                    </div>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.94 }}
                  onClick={resetForm}
                  className="px-3.5 py-1.5 bg-[#0A0A0E] text-white font-mono text-xs font-black rounded-full border border-white hover:bg-[#FF007A] transition-colors cursor-pointer shrink-0"
                >
                  ADD ANOTHER
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-[11px] sm:text-xs font-mono text-[#626470]">
            <span className="flex items-center gap-1">
              <Check className="w-3.5 h-3.5 text-[#10FF70] stroke-[3]" /> NO SPAM GUARANTEE
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Zap className="w-3.5 h-3.5 text-[#FFE600]" /> 1-CLICK INSTANT UNSUBSCRIBE
            </span>
          </div>
        </form>

        {/* Bottom Social Proof Avatars */}
        <div className="pt-2 flex items-center justify-center gap-2.5 sm:gap-3">
          <div className="flex -space-x-2">
            {[
              "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop"
            ].map((avatar, idx) => (
              <img
                key={idx}
                src={avatar}
                alt="Curator avatar"
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-[#0A0A0E] object-cover"
                loading="lazy"
                decoding="async"
              />
            ))}
          </div>
          <span className="font-mono text-[11px] sm:text-xs font-black text-[#0A0A0E]">
            Joined by 42,800+ curators globally
          </span>
        </div>
      </div>
    </section>
  );
}

export default DopamineNewsletter;
