import React from 'react';
import { NavLink } from 'react-router-dom';
import { GraduationCap, ArrowUpRight } from 'lucide-react';

export default function Footer({ onOpenAdmissions }) {
  return (
    <footer className="bg-slate-950 border-t border-white/10 pt-20 pb-12 text-slate-400 text-xs">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Brand & Mission Column */}
          <div className="md:col-span-5 space-y-6">
            <NavLink to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-electric-600 to-violetAccent-500 p-0.5 shadow-lg shadow-electric-500/30">
                <div className="w-full h-full bg-slate-950 rounded-full flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-electric-400" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-extrabold text-lg tracking-widest text-white">
                  AETHERIA
                </span>
                <span className="text-[9px] uppercase tracking-widest text-slate-400 -mt-1 font-mono">
                  INSTITUTE OF ADVANCED STUDIES
                </span>
              </div>
            </NavLink>

            <p className="text-slate-400 text-xs font-light leading-relaxed max-w-md">
              Aetheria is an international institution pioneering next-generation university education, digital learning magazine synthesis, quantum research, and technology venture creation.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <button
                onClick={onOpenAdmissions}
                className="px-4 py-2 rounded-full bg-electric-600 hover:bg-electric-500 text-white font-bold text-xs tracking-wider"
              >
                APPLY FOR 2026
              </button>
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="md:col-span-7 grid grid-cols-3 gap-8">
            
            {/* Column 1: LEARN */}
            <div className="space-y-4">
              <div className="font-mono font-bold uppercase tracking-widest text-white text-xs">
                LEARN
              </div>
              <ul className="space-y-2.5">
                <li><NavLink to="/programs" className="hover:text-white transition-colors">Programs</NavLink></li>
                <li><NavLink to="/programs" className="hover:text-white transition-colors">Curriculum</NavLink></li>
                <li><NavLink to="/journal" className="hover:text-white transition-colors">Knowledge Base</NavLink></li>
                <li><NavLink to="/journal" className="hover:text-white transition-colors">Research Papers</NavLink></li>
              </ul>
            </div>

            {/* Column 2: DISCOVER */}
            <div className="space-y-4">
              <div className="font-mono font-bold uppercase tracking-widest text-white text-xs">
                DISCOVER
              </div>
              <ul className="space-y-2.5">
                <li><NavLink to="/research" className="hover:text-white transition-colors">Research Hub</NavLink></li>
                <li><NavLink to="/campus" className="hover:text-white transition-colors">Virtual Campus</NavLink></li>
                <li><NavLink to="/faculty" className="hover:text-white transition-colors">Expert Faculty</NavLink></li>
                <li><NavLink to="/about" className="hover:text-white transition-colors">About Institute</NavLink></li>
              </ul>
            </div>

            {/* Column 3: CONNECT */}
            <div className="space-y-4">
              <div className="font-mono font-bold uppercase tracking-widest text-white text-xs">
                CONNECT
              </div>
              <ul className="space-y-2.5">
                <li><NavLink to="/contact" className="hover:text-white transition-colors">Contact Hub</NavLink></li>
                <li><a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-1">Instagram <ArrowUpRight className="w-3 h-3" /></a></li>
                <li><a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-1">LinkedIn <ArrowUpRight className="w-3 h-3" /></a></li>
                <li><a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-1">YouTube <ArrowUpRight className="w-3 h-3" /></a></li>
              </ul>
            </div>

          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-slate-500">
          <div>
            © 2026 Aetheria Education Platform. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <NavLink to="/about" className="hover:text-slate-300">Privacy Policy</NavLink>
            <NavLink to="/about" className="hover:text-slate-300">Terms of Academic Fellowship</NavLink>
            <NavLink to="/about" className="hover:text-slate-300">Accessibility</NavLink>
          </div>
        </div>

      </div>
    </footer>
  );
}
