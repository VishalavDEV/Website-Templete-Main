import React, { useState } from 'react';
import { PageId } from '../types';
import {
  GraduationCap,
  Twitter,
  Linkedin,
  Github,
  Youtube,
  ArrowUp,
  Mail,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';

interface EduFooterProps {
  onNavigate: (page: PageId) => void;
  onOpenAuth?: (mode: 'login' | 'register') => void;
}

export const EduFooter: React.FC<EduFooterProps> = ({ onNavigate, onOpenAuth }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white text-slate-600 pt-16 pb-12 border-t border-slate-200 relative overflow-hidden">
      {/* Background ambient subtle tint */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-200">
          {/* Brand Column (Col 1-4) */}
          <div className="lg:col-span-4 space-y-5 text-left">
            <button
              onClick={() => onNavigate('home')}
              className="flex items-center gap-3 text-left group cursor-pointer focus:outline-hidden"
            >
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-indigo-600 via-purple-600 to-cyan-500 p-[1.5px] shadow-md shadow-indigo-500/20">
                <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-indigo-600" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-extrabold tracking-tight text-slate-900 font-display flex items-center gap-1.5">
                  SKILLORA
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 inline-block" />
                </span>
                <span className="text-xs text-indigo-600 font-semibold">
                  Learn Today. Build Tomorrow.
                </span>
              </div>
            </button>

            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-sm">
              Skillora is a modern online education platform offering practical courses, university programs, industry mentorship, and verifiable career certifications.
            </p>

            {/* Newsletter Mini Form */}
            <div className="pt-2">
              <form onSubmit={handleSubscribe} className="flex items-center gap-2">
                <div className="relative flex-1">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-3 py-2 text-xs rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:border-indigo-500"
                  />
                </div>
                <button
                  type="submit"
                  className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold rounded-xl shadow-md shadow-indigo-600/20 transition-all cursor-pointer"
                >
                  Join
                </button>
              </form>
              {subscribed && (
                <p className="text-[11px] text-emerald-600 font-semibold flex items-center gap-1 mt-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Subscribed to weekly course drops!</span>
                </p>
              )}
            </div>
          </div>

          {/* Column 2: Platform Links */}
          <div className="lg:col-span-2 space-y-3.5 text-left">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900">
              Platform
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('courses')}
                  className="text-slate-600 hover:text-indigo-600 transition-colors cursor-pointer py-1 block text-left"
                >
                  All Courses
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('paths')}
                  className="text-slate-600 hover:text-indigo-600 transition-colors cursor-pointer py-1 block text-left"
                >
                  Career Programs
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('mentorship')}
                  className="text-slate-600 hover:text-indigo-600 transition-colors cursor-pointer py-1 block text-left"
                >
                  Faculty Mentors
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('create-plan')}
                  className="text-slate-600 hover:text-indigo-600 transition-colors cursor-pointer py-1 block text-left"
                >
                  Learning Plan Builder
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('track-progress')}
                  className="text-slate-600 hover:text-indigo-600 transition-colors cursor-pointer py-1 block text-left"
                >
                  Student Portal (Sign In)
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div className="lg:col-span-3 space-y-3.5 text-left">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900">
              Resources & Tools
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('resources')}
                  className="text-slate-600 hover:text-indigo-600 transition-colors cursor-pointer py-1 block text-left"
                >
                  Developer Cheat Sheets
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('resources')}
                  className="text-slate-600 hover:text-indigo-600 transition-colors cursor-pointer py-1 block text-left"
                >
                  Figma Starter Kits
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('resources')}
                  className="text-slate-600 hover:text-indigo-600 transition-colors cursor-pointer py-1 block text-left"
                >
                  Prompt Engineering Guides
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="text-slate-600 hover:text-indigo-600 transition-colors cursor-pointer py-1 block text-left"
                >
                  Verification Authority
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Company & Legal */}
          <div className="lg:col-span-3 space-y-3.5 text-left">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900">
              Company
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="text-slate-600 hover:text-indigo-600 transition-colors cursor-pointer py-1 block text-left"
                >
                  About Skillora
                </button>
              </li>
              <li>
                <a
                  href="/THIRD_PARTY_LICENSES.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 hover:text-indigo-600 transition-colors cursor-pointer py-1 block text-left"
                >
                  Third-Party Licenses
                </a>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="text-slate-600 hover:text-indigo-600 transition-colors cursor-pointer py-1 block text-left"
                >
                  Academic Integrity Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => (onOpenAuth ? onOpenAuth('register') : onNavigate('courses'))}
                  className="text-indigo-600 hover:text-indigo-700 font-bold transition-colors cursor-pointer py-1 block text-left flex items-center gap-1"
                >
                  <span>Student Scholarships</span>
                  <Sparkles className="w-3 h-3" />
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Socials, Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} SKILLORA Inc. All rights reserved. Learn Today. Build Tomorrow.</p>

          <div className="flex items-center gap-4">
            <a
              href="#twitter"
              aria-label="Twitter"
              className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-950 flex items-center justify-center transition-colors border border-slate-200"
            >
              <Twitter className="w-3.5 h-3.5" />
            </a>
            <a
              href="#github"
              aria-label="GitHub"
              className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-950 flex items-center justify-center transition-colors border border-slate-200"
            >
              <Github className="w-3.5 h-3.5" />
            </a>
            <a
              href="#linkedin"
              aria-label="LinkedIn"
              className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-950 flex items-center justify-center transition-colors border border-slate-200"
            >
              <Linkedin className="w-3.5 h-3.5" />
            </a>
            <a
              href="#youtube"
              aria-label="YouTube"
              className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-950 flex items-center justify-center transition-colors border border-slate-200"
            >
              <Youtube className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={scrollToTop}
              className="ml-2 flex items-center gap-1 text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 px-3 py-1.5 rounded-full border border-slate-200 transition-colors cursor-pointer"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
