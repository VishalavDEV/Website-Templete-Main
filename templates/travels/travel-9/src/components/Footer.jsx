import React, { useState } from 'react';
import { Compass, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-[#0F172A] text-slate-400 text-sm font-sans pt-24 border-t border-slate-900 relative z-10">
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 pb-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
        
        {/* Col 1: Brand Info */}
        <div className="lg:col-span-4 space-y-6">
          <button onClick={handleScrollToTop} className="flex items-center gap-2 group text-left cursor-pointer">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#FACC15] group-hover:bg-[#2563EB] group-hover:text-white transition-colors duration-300">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <span className="font-sans font-black text-xl tracking-tight text-white">
                EXPLORIA<span className="text-[#FACC15]">.</span>
              </span>
              <span className="block text-[8px] font-bold text-slate-500 tracking-wider uppercase -mt-1.5">
                TRAVEL COMPANY
              </span>
            </div>
          </button>
          
          <p className="text-slate-400 text-xs md:text-sm font-medium leading-relaxed max-w-sm">
            We are a certified travel and excursion company. We design and coordinate custom landmark itineraries for individuals and groups.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
              <motion.a
                key={idx}
                whileHover={{ scale: 1.1, backgroundColor: '#2563EB', color: '#ffffff' }}
                whileTap={{ scale: 0.9 }}
                href="#"
                className="w-9 h-9 rounded-full bg-slate-800 text-slate-400 flex items-center justify-center transition-colors shadow-sm"
              >
                <Icon className="w-4 h-4" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Col 2: Directory columns */}
        <div className="lg:col-span-4 grid grid-cols-2 gap-8">
          
          <div className="space-y-4">
            <h4 className="font-sans font-black text-white text-xs uppercase tracking-widest">Company</h4>
            <div className="flex flex-col gap-2.5 text-xs font-bold uppercase tracking-wider text-slate-400">
              <a href="#home" className="hover:text-[#FACC15] transition-colors">Home</a>
              <a href="#about" className="hover:text-[#FACC15] transition-colors">About Us</a>
              <a href="#destinations" className="hover:text-[#FACC15] transition-colors">Destinations</a>
              <a href="#packages" className="hover:text-[#FACC15] transition-colors">Packages</a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-sans font-black text-white text-xs uppercase tracking-widest">Support</h4>
            <div className="flex flex-col gap-2.5 text-xs font-bold uppercase tracking-wider text-slate-400">
              <a href="#about" className="hover:text-[#FACC15] transition-colors">Contact</a>
              <a href="#faq" className="hover:text-[#FACC15] transition-colors">FAQ Advice</a>
              <a href="#" className="hover:text-[#FACC15] transition-colors">Terms of Use</a>
              <a href="#" className="hover:text-[#FACC15] transition-colors">Privacy Policy</a>
            </div>
          </div>

        </div>

        {/* Col 3: Newsletter Sign up */}
        <div className="lg:col-span-4 space-y-4">
          <h4 className="font-sans font-black text-white text-xs uppercase tracking-widest">Newsletter</h4>
          <p className="text-slate-400 text-xs font-medium leading-relaxed max-w-sm">
            Sign up for custom discount packages and landmark route notifications.
          </p>

          <AnimatePresence mode="wait">
            {!subscribed ? (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubscribe}
                className="flex bg-slate-800 p-1.5 rounded-xl border border-slate-700"
              >
                <input
                  type="email"
                  required
                  placeholder="Enter email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-grow bg-transparent text-white placeholder:text-slate-500 text-xs px-4 outline-none font-medium"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  aria-label="Subscribe"
                  className="w-10 h-10 rounded-lg bg-[#FACC15] text-[#0F172A] flex items-center justify-center cursor-pointer shadow-md"
                >
                  <Send className="w-4 h-4 fill-current" />
                </motion.button>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="p-3 bg-emerald-950/60 border border-emerald-900 rounded-xl text-emerald-400 text-xs font-bold tracking-wide"
              >
                Subscribed successfully! Thank you.
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>

      {/* Bottom Copyright bar */}
      <div className="bg-slate-950 py-6 px-4 md:px-8 border-t border-slate-900 text-center text-xs text-slate-500 font-bold uppercase tracking-wider">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <span>&copy; {new Date().getFullYear()} Exploria. All Rights Reserved.</span>
          <span>Designed by Google Deepmind Team.</span>
        </div>
      </div>

    </footer>
  );
}
