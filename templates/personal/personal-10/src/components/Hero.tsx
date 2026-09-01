import React from 'react';
import { ArrowRight, Download, Github, Linkedin, Twitter, Instagram, Code2, Sparkles, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { ReactIcon, JsIcon } from './TechIcons';

interface HeroProps {
  onOpenResume: () => void;
  onViewWork: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onViewWork }) => {
  return (
    <section className="relative overflow-hidden pt-12 pb-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Minimalist Status Badge */}
            <div className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-blue-50 text-blue-600 dark:bg-blue-950/60 dark:text-blue-400 text-xs font-bold mb-5 uppercase tracking-widest border border-blue-100 dark:border-blue-900/40 w-fit">
              <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400 animate-pulse"></span>
              <span>Available for New Projects</span>
            </div>

            {/* Main Title */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-gray-900 dark:text-white tracking-tight leading-[1.08]">
              Arjun Dev<span className="text-blue-600 dark:text-blue-400">.</span>
            </h1>

            {/* Role / Subtitle */}
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-200 mt-3 tracking-tight">
              Full Stack <span className="text-gray-900 dark:text-white">Developer</span> & <span className="text-gray-900 dark:text-white">UI/UX</span> Enthusiast
            </h2>

            {/* Bio */}
            <p className="text-gray-500 dark:text-gray-400 mt-4 text-base sm:text-lg leading-relaxed max-w-lg">
              {personalInfo.bioHero}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mt-8">
              <button
                onClick={onViewWork}
                className="inline-flex items-center gap-2.5 bg-black hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-100 text-white font-medium text-sm sm:text-base px-7 py-3 rounded-full shadow-xs active:scale-95 transition-all cursor-pointer"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2.5 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200 font-medium text-sm sm:text-base px-6 py-3 rounded-full shadow-xs active:scale-95 transition-all cursor-pointer"
              >
                <span>Download Resume</span>
                <Download className="w-4 h-4 text-gray-400" />
              </button>
            </div>

            {/* Social Links */}
            <div className="mt-10 pt-6 border-t border-gray-200/80 dark:border-gray-800">
              <span className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                Connect with me
              </span>
              <div className="flex items-center space-x-3">
                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub Profile"
                  className="w-9 h-9 rounded-full bg-white dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white flex items-center justify-center transition-all border border-gray-200 dark:border-gray-800 shadow-xs"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn Profile"
                  className="w-9 h-9 rounded-full bg-white dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white flex items-center justify-center transition-all border border-gray-200 dark:border-gray-800 shadow-xs"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.socials.twitter}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Twitter Profile"
                  className="w-9 h-9 rounded-full bg-white dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white flex items-center justify-center transition-all border border-gray-200 dark:border-gray-800 shadow-xs"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.socials.instagram}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram Profile"
                  className="w-9 h-9 rounded-full bg-white dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white flex items-center justify-center transition-all border border-gray-200 dark:border-gray-800 shadow-xs"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Minimalist Frame Composition */}
          <div className="lg:col-span-6 flex items-center justify-center relative">
            <div className="relative w-full max-w-[440px] aspect-[4/4.6] flex items-center justify-center">
              
              {/* Minimal Clean Card Shell */}
              <div className="w-full h-full rounded-3xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm p-3.5 relative overflow-hidden flex flex-col justify-between">
                
                {/* Photo Container */}
                <div className="w-full h-full rounded-2xl overflow-hidden relative bg-gray-100 dark:bg-gray-800">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop"
                    alt="Arjun Dev"
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/40 via-transparent to-transparent"></div>
                </div>

                {/* Floating Top Badge */}
                <div className="absolute top-6 left-6 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-sm border border-gray-200/80 dark:border-gray-700 flex items-center gap-2">
                  <div className="w-7 h-7 rounded-xl bg-blue-50 dark:bg-blue-950/80 text-blue-600 dark:text-blue-400 flex items-center justify-center font-mono">
                    <Code2 className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-gray-800 dark:text-gray-200">Full Stack</span>
                </div>

                {/* Floating Bottom Status Pill */}
                <div className="absolute bottom-6 right-6 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-sm border border-gray-200/80 dark:border-gray-700 flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-xl bg-emerald-50 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <div className="text-[11px] font-bold text-gray-900 dark:text-white leading-tight">Fast Turnaround</div>
                    <div className="text-[10px] text-gray-400">99.9% Clean Code</div>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

