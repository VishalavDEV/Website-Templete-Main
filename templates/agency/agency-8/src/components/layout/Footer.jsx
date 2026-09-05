import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles, Send } from 'lucide-react';
import { useCursor } from '../../context/CursorContext';

export default function Footer() {
  const { setCursorState } = useCursor();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setEmail('');
    }, 3000);
  };

  const footerMarqueeText = "LET'S CREATE SOMETHING AMAZING — LET'S CREATE SOMETHING AMAZING — ";

  return (
    <footer className="relative bg-[#03050b] text-slate-300 pt-20 border-t border-white/10 overflow-hidden">
      {/* Infinite Footer Marquee Banner */}
      <div className="border-b border-white/5 py-3 sm:py-4 overflow-hidden select-none bg-white/[0.02]">
        <div className="animate-marquee flex whitespace-nowrap">
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={i} className="text-xl sm:text-2xl md:text-4xl font-syne font-black tracking-widest text-slate-700 uppercase mx-3 sm:mx-4">
              {footerMarqueeText}
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-12 mb-12 sm:mb-16">
          {/* Agency Brand Column */}
          <div className="lg:col-span-4 space-y-4 sm:space-y-6">
            <a href="#home" className="flex items-center gap-2 shrink-0">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-cyan-500 to-purple-600 p-[1.5px] shrink-0">
                <div className="w-full h-full bg-[#05070f] rounded-[10.5px] flex items-center justify-center">
                  <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
                </div>
              </div>
              <span className="text-lg sm:text-2xl font-extrabold font-syne tracking-tight text-white whitespace-nowrap">
                STUDIO COLLECTIVE<span className="text-cyan-400">.</span>
              </span>
            </a>

            <p className="text-xs sm:text-sm text-slate-400 font-light max-w-sm leading-relaxed">
              Designing tomorrow's digital experiences. We engineer high-end websites, motion design systems, and brand strategies for global leaders.
            </p>

            {/* Newsletter Input */}
            <div className="space-y-2 sm:space-y-3 pt-2">
              <span className="text-[10px] sm:text-xs font-mono uppercase text-slate-400 block">SUBSCRIBE TO INSIGHTS</span>
              <form onSubmit={handleSubscribe} className="relative flex items-center max-w-sm">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-2.5 sm:py-3 rounded-full bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 text-xs font-mono pr-12"
                />
                <button
                  type="submit"
                  onMouseEnter={() => setCursorState('button')}
                  onMouseLeave={() => setCursorState('default')}
                  className="absolute right-1 w-9 h-9 rounded-full bg-cyan-400 text-black flex items-center justify-center hover:scale-105 transition-transform"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
              {subscribed && (
                <span className="text-xs font-mono text-cyan-400 block animate-pulse">
                  Subscribed successfully!
                </span>
              )}
            </div>
          </div>

          {/* Navigation Links Columns */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {/* Company */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-4">COMPANY</h4>
              <ul className="space-y-3 text-sm">
                {['About Us', 'Selected Work', 'Our Process', 'Team Creators', 'Careers'].map((item) => (
                  <li key={item}>
                    <a href="#about" className="hover:text-cyan-400 transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-4">SERVICES</h4>
              <ul className="space-y-3 text-sm">
                {['Brand Strategy', 'UI/UX Design', 'Web Engineering', 'Motion Graphics', 'Mobile Apps'].map((item) => (
                  <li key={item}>
                    <a href="#services" className="hover:text-cyan-400 transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-4">RESOURCES</h4>
              <ul className="space-y-3 text-sm">
                {['Insights & Blog', 'Case Studies', 'Brand Kit', 'Privacy Policy', 'Terms of Use'].map((item) => (
                  <li key={item}>
                    <a href="#blog" className="hover:text-cyan-400 transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-4">SOCIAL</h4>
              <ul className="space-y-3 text-sm">
                {['Instagram', 'LinkedIn', 'Dribbble', 'Behance', 'Twitter'].map((item) => (
                  <li key={item}>
                    <a href="#" onClick={(e) => e.preventDefault()} className="flex items-center gap-1 hover:text-cyan-400 transition-colors group">
                      <span>{item}</span>
                      <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center text-xs font-mono text-slate-500 gap-4">
          <p>© 2026 STUDIO COLLECTIVE. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-slate-300">Privacy Policy</a>
            <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-slate-300">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
