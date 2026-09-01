import React from 'react';
import { PERSONAL_INFO } from '../data/resumeData';
import { Compass, Terminal, ShieldCheck } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-800 font-mono-tech text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main Footer Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* LEFT: Branding */}
          <div className="md:col-span-4 flex items-center space-x-4">
            <div className="w-10 h-10 bg-sky-600 text-slate-950 font-bold rounded flex items-center justify-center text-sm tracking-wider">
              AS
            </div>
            <div>
              <span className="font-heading font-bold text-white uppercase text-base block">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-[11px] text-sky-400 uppercase tracking-widest block">
                {PERSONAL_INFO.title}
              </span>
            </div>
          </div>

          {/* CENTER: Quick Nav Links */}
          <nav className="md:col-span-5 flex flex-wrap justify-start md:justify-center gap-6 text-xs uppercase tracking-wider">
            <a href="#profile" className="hover:text-white transition-colors">Profile</a>
            <a href="#missions" className="hover:text-white transition-colors">Missions</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#systems" className="hover:text-white transition-colors">Systems</a>
            <a href="#research" className="hover:text-white transition-colors">Research</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </nav>

          {/* RIGHT: Copyright */}
          <div className="md:col-span-3 text-left md:text-right text-slate-500 text-xs">
            <span>© 2026 {PERSONAL_INFO.name}</span>
            <span className="block text-[10px] text-slate-600 mt-0.5">OSLO, NORWAY</span>
          </div>

        </div>

        {/* Bottom Disclaimer Notice */}
        <div className="pt-8 border-t border-slate-900 text-center text-[10px] text-slate-500 leading-relaxed max-w-4xl mx-auto">
          "This is a fictional Resume/CV template demonstration. All names, organizations, missions, spacecraft, research projects, institutions, awards, and visuals are fictional or AI-generated."
        </div>

      </div>
    </footer>
  );
}
