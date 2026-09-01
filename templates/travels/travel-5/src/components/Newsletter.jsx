import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, CheckCircle2, ArrowRight } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubscribed(true);
      setEmail('');
    }, 1200);
  };

  return (
    <section className="relative py-20 px-6 md:px-12 bg-secondary text-white overflow-hidden">
      
      {/* Wave or topology subtle lines decor */}
      <div className="absolute right-[-100px] bottom-[-100px] w-[350px] h-[350px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute left-[-50px] top-[-50px] w-[250px] h-[250px] bg-accent-yellow/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
        
        {/* Text Area */}
        <div className="max-w-xl text-center lg:text-left space-y-3">
          <span className="text-accent-yellow font-extrabold text-xs uppercase tracking-widest block">
            Adventure updates
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold uppercase leading-tight">
            Join the Wilderness Club
          </h2>
          <p className="text-white/80 font-light text-sm md:text-base max-w-md leading-relaxed">
            Subscribe to receive coordinates of untouched beaches, hidden peak reviews, and private discount vouchers. No spam, ever.
          </p>
        </div>

        {/* Action Form */}
        <div className="w-full max-w-md">
          {!subscribed ? (
            <form onSubmit={handleSubscribe} className="bg-white/10 backdrop-blur-md p-2.5 rounded-full border border-white/15 flex items-center shadow-xl">
              <div className="pl-4 text-white/50 flex-shrink-0">
                <Mail className="w-5 h-5 text-accent-yellow" />
              </div>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="bg-transparent border-0 outline-none text-white text-sm placeholder-white/40 px-3 py-2 flex-grow focus:ring-0"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                disabled={loading}
                className="bg-primary hover:bg-primary-dark text-white font-bold text-xs uppercase tracking-widest py-3 px-6 rounded-full shadow-lg shadow-primary/25 transition-colors flex-shrink-0"
              >
                {loading ? 'Adding...' : 'Subscribe'}
              </motion.button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white/15 backdrop-blur-md border border-white/10 p-5 rounded-3xl flex items-center gap-4 text-left shadow-2xl"
            >
              <div className="w-10 h-10 bg-accent-yellow text-charcoal rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-extrabold text-white text-sm uppercase">You are on the list!</h4>
                <p className="text-white/70 text-xs font-light mt-0.5">
                  Check your inbox soon for your initial coordinates check. Welcome!
                </p>
              </div>
            </motion.div>
          )}
        </div>

      </div>
    </section>
  );
}
