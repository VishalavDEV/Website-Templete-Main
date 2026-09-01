import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Calendar, Zap } from 'lucide-react';
import { useModal } from '../context/ModalContext';

export default function FinalCTA() {
  const { openAuthModal, openDemoModal } = useModal();

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      
      {/* Intense Amber Core Radial Flare */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] md:w-[1100px] h-[550px] bg-gradient-to-tr from-amber-500/15 via-amber-600/10 to-orange-500/5 blur-[160px] pointer-events-none -z-10"></div>

      <div className="container mx-auto px-4">
        
        <div className="max-w-5xl mx-auto rounded-3xl p-10 md:p-20 bg-gradient-to-b from-[#14141a]/90 via-[#0a0a0d]/95 to-[#050505] border border-amber-500/30 shadow-2xl shadow-black/90 backdrop-blur-2xl text-center relative overflow-hidden">
          
          {/* Top subtle shine line */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-amber-400/80 to-transparent"></div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-amber-500 to-amber-300 flex items-center justify-center mx-auto mb-8 shadow-xl shadow-amber-500/30"
          >
            <Zap className="w-8 h-8 text-black fill-black" />
          </motion.div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-6 max-w-3xl mx-auto leading-[1.1]">
            Ready to Make{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-orange-400 drop-shadow-[0_0_30px_rgba(245,169,0,0.3)]">
              Work Flow?
            </span>
          </h2>

          <p className="text-base sm:text-xl text-zinc-300 max-w-2xl mx-auto leading-relaxed mb-10">
            Join thousands of modern teams turning complicated processes into simple, repeatable momentum.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => openAuthModal('growth')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-9 py-4 rounded-full font-bold text-base bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-black shadow-xl shadow-amber-500/30 hover:shadow-2xl hover:shadow-amber-500/50 hover:scale-105 transition-all duration-300 group cursor-pointer"
            >
              Start Free
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={openDemoModal}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-base bg-white/[0.05] hover:bg-white/[0.1] text-white border border-white/15 backdrop-blur-md hover:border-white/30 transition-all duration-200 cursor-pointer"
            >
              <Calendar size={18} className="text-amber-400" />
              Book a Demo
            </button>
          </div>

          <div className="mt-8 text-xs text-zinc-500 font-medium">
            14-day free trial • No credit card required • Instant setup
          </div>

        </div>

      </div>
    </section>
  );
}
