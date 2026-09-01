import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [privacyAgreed, setPrivacyAgreed] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() && privacyAgreed) {
      setIsSubmitted(true);
      setEmail('');
      setPrivacyAgreed(false);
      setTimeout(() => setIsSubmitted(false), 5500);
    }
  };

  return (
    <section id="newsletter" className="py-24 md:py-32 bg-slate-50 relative overflow-hidden">
      {/* Decorative gradient blur rings */}
      <div className="absolute right-[-100px] top-[10%] w-[300px] h-[300px] rounded-full bg-accent/5 blur-[100px] pointer-events-none" />
      <div className="absolute left-[-150px] bottom-[10%] w-[400px] h-[400px] rounded-full bg-[#FFB399]/10 blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 md:px-8 relative z-10 text-center space-y-10">
        
        {/* Header */}
        <div className="space-y-4 max-w-xl mx-auto">
          <span className="font-display font-extrabold text-[10px] tracking-widest text-slate-400 uppercase flex items-center justify-center gap-2">
            <span className="w-8 h-[2px] bg-slate-200" />
            Stay Connected
            <span className="w-8 h-[2px] bg-slate-200" />
          </span>
          <h2 className="font-display font-extrabold text-3xl md:text-5xl text-charcoal tracking-tight uppercase leading-tight font-display">
            Wander In Your Inbox
          </h2>
          <p className="font-sans text-slate-500 text-sm md:text-base leading-relaxed font-light">
            Subscribe to our weekly dispatch. We share hiking guides, gear packing advice, safety updates, and wilderness stories before publishing them on the blog.
          </p>
        </div>

        {/* Subscribe Form Container */}
        <div className="max-w-md mx-auto">
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form
                key="form"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                <div className="flex flex-col sm:flex-row gap-3 bg-white p-2 rounded-2xl border border-slate-100 shadow-sm">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-grow bg-transparent text-slate-700 placeholder:text-slate-400 text-sm font-medium px-4 py-3 outline-none"
                  />
                  <motion.button
                    whileHover={{ scale: 1.03, backgroundColor: '#E06F45' }}
                    whileTap={{ scale: 0.97 }}
                    type="submit"
                    disabled={!privacyAgreed}
                    className={`font-sans font-extrabold text-xs px-6 py-3.5 rounded-xl tracking-widest uppercase flex items-center justify-center gap-2 cursor-pointer shadow-md transition-all ${
                      privacyAgreed 
                        ? 'bg-accent text-white hover:bg-accent-hover' 
                        : 'bg-slate-200 text-slate-400 cursor-not-allowed shadow-none'
                    }`}
                  >
                    <span>Subscribe</span>
                    <Send className="w-3.5 h-3.5" />
                  </motion.button>
                </div>

                {/* Privacy agreement checkbox */}
                <div className="flex items-start justify-center gap-2.5 px-2">
                  <input
                    type="checkbox"
                    id="privacy-check"
                    checked={privacyAgreed}
                    onChange={(e) => setPrivacyAgreed(e.target.checked)}
                    className="mt-0.5 w-4.5 h-4.5 rounded border-slate-200 text-accent focus:ring-accent focus:ring-offset-2 cursor-pointer accent-[#FF7F50]"
                  />
                  <label 
                    htmlFor="privacy-check" 
                    className="text-left text-[11px] text-slate-400 font-medium leading-tight cursor-pointer select-none"
                  >
                    I agree to the privacy policy and consent to receive weekly travel newsletter emails from Wanderlust Tales.
                  </label>
                </div>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="flex items-center justify-center gap-3 bg-emerald-50 border border-emerald-100 rounded-2xl py-5 px-6"
              >
                <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0 animate-bounce" />
                <span className="text-sm font-bold text-emerald-800 tracking-wide text-left">
                  Thank you! You have successfully subscribed to our travel dispatch.
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
