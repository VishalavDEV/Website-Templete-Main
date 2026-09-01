import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-[#1E3A8A] to-[#2563EB] text-white overflow-hidden relative select-none">
      
      {/* Background Graphic soot */}
      <div className="absolute right-[-100px] top-[-50px] w-[350px] h-[350px] rounded-full bg-white/[0.05] blur-[80px] pointer-events-none" />
      <div className="absolute left-[-100px] bottom-[-50px] w-[350px] h-[350px] rounded-full bg-yellow-400/[0.08] blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 md:px-8 relative z-10 text-center space-y-8">
        
        <div className="space-y-4 max-w-xl mx-auto">
          <span className="font-sans font-black text-xs tracking-wider text-[#FACC15] uppercase bg-white/10 px-3.5 py-1.5 rounded-full border border-white/20">
            Ready to Travel?
          </span>
          <h2 className="font-sans font-black text-3xl md:text-5xl text-white tracking-tight uppercase leading-tight">
            Prepare Your Passport
          </h2>
          <p className="text-slate-100 text-sm md:text-base leading-relaxed max-w-md mx-auto font-medium">
            Contact our coordinates team to draft a custom route for your next family sightseeing vacation.
          </p>
        </div>

        <div className="pt-2">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => alert('Booking panel opened')}
            className="bg-[#FACC15] hover:bg-yellow-400 text-[#0F172A] text-xs font-black uppercase tracking-wider py-4.5 px-9 rounded-full shadow-lg flex items-center gap-2 cursor-pointer transition-colors mx-auto"
          >
            <span>Book Adventure Now</span>
            <ArrowRight className="w-4 h-4 text-[#0F172A]" />
          </motion.button>
        </div>

      </div>
    </section>
  );
}
