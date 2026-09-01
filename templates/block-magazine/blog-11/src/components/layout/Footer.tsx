import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-paper-surface dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-800 pt-16 pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-neutral-200 dark:border-neutral-800">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-forest-900 dark:bg-emerald-600 flex items-center justify-center text-white font-display-cinzel font-bold text-xl shadow-md">
                A
              </div>
              <span className="font-display-cinzel text-2xl font-bold tracking-tight text-paper-dark dark:text-paper-light">
                AGROTECH <span className="text-emerald-700 dark:text-emerald-400">AI</span>
              </span>
            </Link>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 font-sans leading-relaxed max-w-md">
              Where Agriculture Meets Technology & Artificial Intelligence. The premier digital editorial platform exploring smart farming, satellite imagery, agricultural robotics, and precision agronomy.
            </p>
            <p className="text-xs font-mono-tech uppercase tracking-widest text-emerald-800 dark:text-emerald-400 font-semibold pt-2">
              BUILT FOR THE FUTURE OF INTELLIGENT AGRICULTURE.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-mono-tech uppercase tracking-widest text-neutral-400 font-semibold mb-4">
              MAGAZINE
            </h4>
            <ul className="space-y-2.5 text-sm font-medium">
              <li><Link to="/agriculture" className="hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors">Agriculture</Link></li>
              <li><Link to="/technology" className="hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors">Technology</Link></li>
              <li><Link to="/ai" className="hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors">Artificial Intelligence</Link></li>
              <li><Link to="/innovation" className="hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors">Innovation</Link></li>
              <li><Link to="/stories" className="hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors">Stories</Link></li>
            </ul>
          </div>

          {/* Archive & About */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-mono-tech uppercase tracking-widest text-neutral-400 font-semibold mb-4">
              COMPANY
            </h4>
            <ul className="space-y-2.5 text-sm font-medium">
              <li><Link to="/archive" className="hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors">Issue Archives</Link></li>
              <li><Link to="/about" className="hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors">Contact Press</Link></li>
              <li><Link to="/search" className="hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors">Search Library</Link></li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-mono-tech uppercase tracking-widest text-neutral-400 font-semibold mb-4">
              CONNECT
            </h4>
            <div className="flex items-center space-x-3">
              {[
                { icon: Twitter, name: 'X / Twitter' },
                { icon: Linkedin, name: 'LinkedIn' },
                { icon: Instagram, name: 'Instagram' },
                { icon: Youtube, name: 'YouTube' }
              ].map((social, i) => (
                <a
                  key={i}
                  href="#"
                  onClick={e => e.preventDefault()}
                  className="w-10 h-10 rounded-full border border-neutral-200 dark:border-neutral-800 flex items-center justify-center text-neutral-600 dark:text-neutral-400 hover:bg-forest-900 hover:text-white dark:hover:bg-emerald-600 transition-all"
                  aria-label={social.name}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
            <div className="pt-2">
              <span className="text-xs font-mono-tech text-neutral-500 block">ISSUE 08 — AUGUST 2026</span>
            </div>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-neutral-500 font-mono-tech gap-4">
          <div>
            &copy; {new Date().getFullYear()} AGROTECH AI DIGITAL MAGAZINE. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center space-x-6">
            <span className="hover:text-neutral-700 cursor-pointer">PRIVACY POLICY</span>
            <span className="hover:text-neutral-700 cursor-pointer">EDITORIAL ETHICS</span>
            <span className="hover:text-neutral-700 cursor-pointer">TERMS OF SERVICE</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
