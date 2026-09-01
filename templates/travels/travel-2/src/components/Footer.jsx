import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Compass, Mail, Send, Phone, MapPin, Plane, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim() && email.includes('@')) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 3000);
    }
  };

  return (
    <footer className="relative bg-white border-t border-stone-200 pt-16 pb-8 overflow-hidden">
      {/* Plane Flyby Animation */}
      <motion.div
        className="absolute top-10 left-0 pointer-events-none z-10"
        initial={{ x: '-10%', y: 20, rotate: 15, opacity: 0 }}
        animate={{
          x: ['-10%', '110%'],
          y: [20, -10, 40],
          opacity: [0, 1, 1, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 15,
          ease: 'easeInOut',
          repeatDelay: 5,
        }}
      >
        <div className="flex items-center gap-1.5 text-[#ff2a74]/30">
          <Plane size={24} className="rotate-45" />
          <div className="w-12 h-px border-t border-dashed border-[#ff2a74]/30" />
        </div>
      </motion.div>

      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />

      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-20">
        
        {/* Brand & Newsletter */}
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-2">
            <Compass className="text-[#ff2a74]" size={28} />
            <span className="font-heading font-extrabold text-xl tracking-tight bg-gradient-to-r from-[#ff2a74] to-[#0066ff] bg-clip-text text-transparent">
              Wanderly
            </span>
          </div>
          <p className="text-xs text-stone-500 leading-relaxed font-medium">
            Find your next story. We help you experience the world, plotting unforgettable pathways and memories that last a lifetime.
          </p>
          <div className="flex flex-col gap-2.5 mt-1">
            <h4 className="text-[10px] font-bold tracking-wider uppercase text-[#ff2a74]">Get travel inspiration</h4>
            
            <form onSubmit={handleSubscribe} className="flex gap-2 relative">
              <input
                type="email"
                required
                placeholder={subscribed ? "Subscribed! ✨" : "Enter email..."}
                disabled={subscribed}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full glass-input text-xs py-2 px-3 rounded-lg border-stone-250 ${
                  subscribed ? 'bg-emerald-50 border-emerald-200 text-emerald-700' : ''
                }`}
              />
              <button
                type="submit"
                disabled={subscribed}
                className="bg-gradient-to-r from-[#ff2a74] to-[#0066ff] hover:opacity-90 disabled:opacity-50 text-white p-2.5 rounded-lg flex items-center justify-center cursor-pointer shadow-sm"
              >
                {subscribed ? <CheckCircle size={14} className="text-white" /> : <Send size={14} />}
              </button>
            </form>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-3.5">
          <h3 className="font-heading font-bold text-stone-800 text-xs tracking-wider uppercase border-b border-stone-100 pb-2">
            Discover
          </h3>
          <div className="grid grid-cols-2 gap-2 text-xs font-semibold text-stone-500">
            <Link to="/" className="hover:text-[#ff2a74] transition-colors py-0.5">Discover</Link>
            <Link to="/destinations" className="hover:text-[#ff2a74] transition-colors py-0.5">Destinations</Link>
            <Link to="/experiences" className="hover:text-[#ff2a74] transition-colors py-0.5">Experiences</Link>
            <Link to="/planner" className="hover:text-[#ff2a74] transition-colors py-0.5">Trips</Link>
            <Link to="/stories" className="hover:text-[#ff2a74] transition-colors py-0.5">Stories</Link>
            <Link to="/about" className="hover:text-[#ff2a74] transition-colors py-0.5">About Us</Link>
          </div>
        </div>

        {/* Popular Sights */}
        <div className="flex flex-col gap-3.5">
          <h3 className="font-heading font-bold text-stone-800 text-xs tracking-wider uppercase border-b border-stone-100 pb-2">
            Top Spots
          </h3>
          <div className="grid grid-cols-2 gap-2 text-xs font-semibold text-stone-500">
            <Link to="/destinations" className="hover:text-[#ff2a74] transition-colors py-0.5">Kerala</Link>
            <Link to="/destinations" className="hover:text-[#ff2a74] transition-colors py-0.5">Rajasthan</Link>
            <Link to="/destinations" className="hover:text-[#ff2a74] transition-colors py-0.5">Bali</Link>
            <Link to="/destinations" className="hover:text-[#ff2a74] transition-colors py-0.5">Switzerland</Link>
            <Link to="/destinations" className="hover:text-[#ff2a74] transition-colors py-0.5">Tokyo</Link>
            <Link to="/destinations" className="hover:text-[#ff2a74] transition-colors py-0.5">Iceland</Link>
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-3.5">
          <h3 className="font-heading font-bold text-stone-800 text-xs tracking-wider uppercase border-b border-stone-100 pb-2">
            Get In Touch
          </h3>
          <div className="flex flex-col gap-3 text-xs font-medium text-stone-500">
            <div className="flex items-center gap-2">
              <MapPin size={14} className="text-[#ff2a74]" />
              <span>100 Voyager Plaza, Chennai, India</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={14} className="text-[#ff2a74]" />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={14} className="text-[#0066ff]" />
              <span>explore@wanderly.com</span>
            </div>
            <div className="flex items-center gap-3 mt-2">
              <a href="#" className="p-2 bg-stone-100 hover:bg-[#ff2a74]/15 hover:text-[#ff2a74] rounded-lg transition-colors text-stone-600">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M9 8H7v3h2v9h3v-9h3l.5-3H12V6.5c0-.8.7-1.5 1.5-1.5h1.5V2h-3c-2.8 0-5 2.2-5 5V8z"/></svg>
              </a>
              <a href="#" className="p-2 bg-stone-100 hover:bg-[#ff2a74]/15 hover:text-[#ff2a74] rounded-lg transition-colors text-stone-600">
                <svg className="w-3.5 h-3.5 fill-none stroke-current stroke-2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zM17.5 6.5h.01"/></svg>
              </a>
              <a href="#" className="p-2 bg-stone-100 hover:bg-[#ff2a74]/15 hover:text-[#ff2a74] rounded-lg transition-colors text-stone-600">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>
              </a>
            </div>
          </div>
        </div>

      </div>

      <div className="h-px bg-stone-200 max-w-7xl mx-auto my-6 px-6" />

      {/* Copyright */}
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-400 font-semibold gap-4">
        <span>© {currentYear} Wanderly. All rights reserved. Crafted for portfolios.</span>
        <div className="flex gap-4">
          <a href="#" className="hover:text-[#ff2a74] transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-[#ff2a74] transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
