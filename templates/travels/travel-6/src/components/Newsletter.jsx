import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setIsSubmitted(true);
    setEmail('');
    setTimeout(() => {
      setIsSubmitted(false);
    }, 4000);
  };

  return (
    <section className="py-16 px-6 md:px-12 max-w-7xl mx-auto">
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-12 rounded-[40px] overflow-hidden shadow-2xl bg-gradient-to-r from-brand-coral to-brand-orange"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ type: 'spring', stiffness: 80, damping: 15 }}
      >
        {/* Left: Building / Architecture Photo (5 cols) */}
        <div className="lg:col-span-5 h-[300px] lg:h-auto relative overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1498307818166-5248f52068f7?auto=format&fit=crop&w=900&q=80"
            alt="Mediterranean travel architecture"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-brand-coral/30" />
        </div>

        {/* Right: Gradient Content Panel (7 cols) */}
        <div className="lg:col-span-7 p-8 sm:p-12 md:p-16 flex flex-col justify-center text-left text-white relative">
          <span className="text-xs uppercase font-extrabold tracking-widest text-white/70 mb-2 block">
            Newsletter Signup
          </span>
          <h3 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight leading-tight mb-4 max-w-lg">
            Get Our Monthly Newsletter
          </h3>
          <p className="text-white/80 font-light mb-8 max-w-md leading-relaxed text-sm sm:text-base">
            Subscribe to receive exclusive travel discounts, destination guides, and hidden itinerary tips delivered straight to your inbox.
          </p>

          {/* Form */}
          {!isSubmitted ? (
            <motion.form
              onSubmit={handleSubmit}
              className={`w-full max-w-md flex items-center gap-3 bg-white/10 backdrop-blur-md border rounded-full p-2.5 transition-all duration-300 ${
                isFocused ? 'bg-white/20 border-white ring-2 ring-white/30' : 'border-white/30'
              }`}
              animate={{ scale: isFocused ? 1.02 : 1 }}
            >
              <div className="flex items-center gap-2 flex-1 pl-4">
                <Mail className="w-5 h-5 text-white/75 shrink-0" />
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  className="bg-transparent border-none outline-none text-white placeholder-white/50 text-sm font-semibold w-full focus:ring-0 p-0"
                  required
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                className="w-12 h-12 rounded-full bg-white text-brand-coral flex items-center justify-center shadow-lg cursor-pointer"
                whileHover={{ 
                  scale: 1.1,
                  boxShadow: "0 0 15px rgba(255, 255, 255, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
                aria-label="Subscribe"
              >
                <ArrowRight className="w-5 h-5 shrink-0" />
              </motion.button>
            </motion.form>
          ) : (
            <motion.div
              className="bg-white/10 border border-white/20 backdrop-blur-md rounded-2xl p-6 text-center max-w-md"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
            >
              <h4 className="font-bold text-lg mb-1">🎉 You're Subscribed!</h4>
              <p className="text-white/80 text-sm">Thank you for joining. Check your inbox soon for your 10% discount code!</p>
            </motion.div>
          )}
        </div>
      </motion.div>
    </section>
  );
}
