import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
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
    <section id="blog" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-accent to-[#D05C12] rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden shadow-xl"
        >
          {/* Decorative shapes */}
          <div className="absolute top-[-50px] left-[-50px] w-[200px] h-[200px] rounded-full bg-white/5 blur-xl pointer-events-none" />
          <div className="absolute bottom-[-80px] right-[-80px] w-[250px] h-[250px] rounded-full bg-white/5 blur-xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <span className="font-display font-bold text-xs tracking-widest text-white uppercase bg-white/10 px-3 py-1 rounded-full border border-white/20">
              Subscribe Now
            </span>
            <h2 className="font-display font-extrabold text-3xl md:text-5xl text-white tracking-tight leading-tight uppercase">
              Get Special Offers & <br />
              Travel Updates
            </h2>
            <p className="font-sans text-slate-100/90 text-sm md:text-base leading-relaxed max-w-lg mx-auto">
              Join our newsletter community and receive 10% off your first tour package booking, plus travel tips.
            </p>

            {/* Form */}
            <div className="pt-4 max-w-md mx-auto">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="flex flex-col sm:flex-row gap-3 bg-white/10 p-2 rounded-2xl border border-white/20 backdrop-blur-md"
                  >
                    <input
                      type="email"
                      required
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-grow bg-transparent text-white placeholder:text-white/60 text-sm font-medium px-4 py-3 border-none outline-none"
                    />
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      type="submit"
                      className="bg-white text-accent hover:bg-slate-50 font-sans font-extrabold text-xs px-6 py-3.5 rounded-xl tracking-widest uppercase flex items-center justify-center gap-2 cursor-pointer shadow-md"
                    >
                      <span>Subscribe</span>
                      <Send className="w-3.5 h-3.5" />
                    </motion.button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="flex items-center justify-center gap-3 bg-white/20 border border-white/30 rounded-2xl py-4 px-6 backdrop-blur-md"
                  >
                    <CheckCircle2 className="w-6 h-6 text-white shrink-0" />
                    <span className="text-sm font-bold text-white tracking-wide">
                      Thank you! You have successfully subscribed.
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
