import React from 'react';
import { Link } from 'react-router-dom';
import { Rocket, Linkedin, Twitter, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-16 px-6 md:px-12 text-slate-500 font-mono text-xs">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
        {/* Branding */}
        <div className="md:col-span-2 space-y-4">
          <Link to="/" className="flex items-center space-x-2 font-bold text-white tracking-widest uppercase">
            <Rocket size={16} className="text-purple-500" />
            <span>LUMORA LABS</span>
          </Link>
          <p className="text-slate-400 leading-relaxed max-w-sm">
            We deploy elite engineering squads, seed capital, and product design systems to launch venture-backed companies in weeks, not years.
          </p>
        </div>

        {/* Sitemap */}
        <div>
          <h4 className="text-white font-extrabold mb-4 uppercase tracking-widest">Navigation</h4>
          <ul className="space-y-2.5">
            <li><Link to="/" className="hover:text-purple-400 transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-purple-400 transition-colors">About Studio</Link></li>
            <li><Link to="/services" className="hover:text-purple-400 transition-colors">Our Services</Link></li>
            <li><Link to="/portfolio" className="hover:text-purple-400 transition-colors">Showcase</Link></li>
            <li><Link to="/contact" className="hover:text-purple-400 transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Social / Contact Info */}
        <div className="space-y-4">
          <h4 className="text-white font-extrabold uppercase tracking-widest">Connect</h4>
          <div className="flex space-x-4">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-900 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-purple-400 transition-colors duration-200">
              <Linkedin size={16} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-900 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-purple-400 transition-colors duration-200">
              <Twitter size={16} />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-900 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-purple-400 transition-colors duration-200">
              <Github size={16} />
            </a>
          </div>
          <p className="text-slate-400">
            build@lumora.labs
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-600">
        <p>&copy; {new Date().getFullYear()} Lumora Labs. All rights reserved.</p>
        <p className="mt-2 sm:mt-0 font-bold uppercase tracking-wider text-purple-600/60">Built for Next-Gen Founders</p>
      </div>
    </footer>
  );
}
