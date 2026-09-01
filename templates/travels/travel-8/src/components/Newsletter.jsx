import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubmitted(true);
      setEmail('');
      setTimeout(() => setIsSubmitted(false), 5000);
    }
  };

  return (
    <section className="py-32 bg-[#0A0E14] text-white relative overflow-hidden border-t border-white/5">
      <div className="absolute right-[-120px] top-[10%] w-[350px] h-[350px] rounded-full bg-white/[0.02] blur-[120px] pointer-events-none" />
      
      <div className="max-w-3xl mx-auto px-6 md:px-12 text-center space-y-10 relative z-10">
        
        {/* Header */}
        <div className="space-y-4 max-w-xl mx-auto">
          <span className="block font-sans text-[10px] uppercase tracking-[0.35em] text-slate-400">
            - Stay Tuned -
          </span>
          <h2 className="font-serif font-light text-3xl md:text-5xl text-white uppercase tracking-wider">
            Ocean Dispatches
          </h2>
          <p className="font-sans text-[11px] font-light tracking-[0.1em] text-slate-400 leading-relaxed uppercase max-w-md mx-auto pt-2">
            Receive exclusive yacht itineraries, seasonal charter availability, and remote private island features directly in your inbox.
          </p>
        </div>

        {/* Subscribe form */}
        <div className="max-w-md mx-auto">
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form
                key="form"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-3 bg-[#0d141c]/50 p-2 rounded-full border border-white/10"
              >
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-grow bg-transparent text-white placeholder:text-slate-500 text-xs px-5 py-3 outline-none uppercase font-sans tracking-widest font-medium"
                />
                <motion.button
                  whileHover={{ scale: 1.03, backgroundColor: '#ffffff', color: '#000000' }}
                  whileTap={{ scale: 0.97 }}
                  type="submit"
                  className="font-sans font-semibold text-[10px] bg-white/10 hover:bg-white text-white hover:text-[#0A0E14] px-6 py-3 rounded-full tracking-widest uppercase transition-all shadow-sm cursor-pointer"
                >
                  Subscribe
                </motion.button>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                className="py-4 px-6 bg-white/5 border border-white/10 rounded-full"
              >
                <span className="text-[10px] font-sans font-medium uppercase tracking-[0.2em] text-slate-300">
                  Your request has been successfully registered. Thank you.
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
