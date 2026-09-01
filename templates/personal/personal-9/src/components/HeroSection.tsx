import React from 'react';
import { ArrowRight, Download, MapPin, Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroSectionProps {
  darkMode: boolean;
  onOpenResume: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ darkMode, onOpenResume }) => {
  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const projectsEl = document.getElementById('projects');
    if (projectsEl) {
      projectsEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className={`relative pt-24 sm:pt-28 pb-16 transition-colors overflow-hidden ${
        darkMode ? 'bg-[#0B0F17] text-white' : 'bg-[#FAFCFF] text-gray-900'
      }`}
    >
      {/* Background Radial Glow */}
      <div className="absolute top-1/4 right-1/4 w-[480px] h-[480px] bg-indigo-500/10 dark:bg-indigo-500/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/3 w-[360px] h-[360px] bg-purple-500/8 dark:bg-purple-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">
          
          {/* Left Hero Content (6 cols) */}
          <div className="lg:col-span-6 flex flex-col items-start text-left z-10">
            
            <span className="text-indigo-600 dark:text-indigo-400 font-semibold text-lg sm:text-xl tracking-tight mb-1">
              Hi, I'm
            </span>

            <h1
              id="hero-developer-name"
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-[1.08] mb-3"
            >
              Arjun Mehta
            </h1>

            <h2 className="text-xl sm:text-2xl lg:text-[1.7rem] font-bold text-indigo-600 dark:text-indigo-400 tracking-tight mb-4">
              AI Engineer & Full-Stack Developer
            </h2>

            <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base leading-relaxed max-w-lg mb-6">
              I build AI-powered products, intelligent interfaces and scalable digital experiences.
            </p>

            {/* Availability Pill */}
            <div className="relative inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-gray-900 border border-gray-200/90 dark:border-gray-800 text-xs font-medium text-gray-700 dark:text-gray-300 shadow-xs mb-8">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for Collaborations & Opportunities</span>

              {/* Hand-drawn curved arrow pointing to image */}
              <div className="hidden sm:block absolute -right-32 -bottom-8 pointer-events-none text-indigo-500 dark:text-indigo-400">
                <svg width="110" height="70" viewBox="0 0 120 80" fill="none">
                  <path
                    d="M10 60 C 40 75, 75 65, 85 25 C 88 15, 95 10, 105 15"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M95 10 L 108 15 L 102 26"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            {/* Dual CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 mb-10 w-full sm:w-auto">
              <a
                href="#projects"
                onClick={scrollToProjects}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-md shadow-indigo-600/25 active:scale-95 cursor-pointer"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white dark:bg-gray-800/90 hover:bg-gray-50 dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-100 font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-xs active:scale-95 cursor-pointer"
              >
                <span>View Resume</span>
                <Download className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>

            {/* Social Links Bar */}
            <div className="flex items-center gap-3 pt-2">
              <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 mr-1">
                Find me on
              </span>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-9 h-9 rounded-xl flex items-center justify-center bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-200 transition-all shadow-xs"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-xl flex items-center justify-center bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-200 transition-all shadow-xs"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="w-9 h-9 rounded-xl flex items-center justify-center bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-200 transition-all shadow-xs"
              >
                <Twitter className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                aria-label="Email"
                className="w-9 h-9 rounded-xl flex items-center justify-center bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-200 transition-all shadow-xs"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Right Hero Visual & Portrait with Overlaid Stats (6 cols) */}
          <div className="lg:col-span-6 relative flex justify-center items-center mt-6 lg:mt-0">
            
            {/* Top Floating Location Pill */}
            <div className="absolute top-4 left-6 sm:left-12 z-20 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border border-gray-200/80 dark:border-gray-800 text-xs font-semibold text-gray-800 dark:text-gray-200 shadow-md">
              <MapPin className="w-3.5 h-3.5 text-indigo-600 fill-indigo-600/20" />
              <span>Bengaluru, India</span>
            </div>

            {/* Developer Portrait Container */}
            <div className="relative w-[300px] sm:w-[380px] lg:w-[420px] aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-gradient-to-b from-indigo-50/50 via-purple-50/30 to-transparent dark:from-indigo-950/30 dark:via-purple-950/20 dark:to-transparent flex items-end justify-center">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop"
                alt="Arjun Mehta"
                className="w-full h-full object-cover object-top scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Floating Right Stats Card Overlay */}
            <div className="absolute -right-2 sm:right-2 lg:-right-4 top-1/2 -translate-y-1/2 z-20 bg-white/95 dark:bg-[#111827]/95 backdrop-blur-md border border-gray-200/90 dark:border-gray-800 rounded-2xl p-4 sm:p-5 shadow-xl flex flex-col gap-4 text-left min-w-[150px] sm:min-w-[170px]">
              <div>
                <div className="text-xl sm:text-2xl font-black tracking-tight text-indigo-600 dark:text-indigo-400">
                  18+
                </div>
                <div className="text-[11px] font-medium text-gray-500 dark:text-gray-400">
                  Projects Completed
                </div>
              </div>

              <div className="w-full h-px bg-gray-100 dark:bg-gray-800" />

              <div>
                <div className="text-xl sm:text-2xl font-black tracking-tight text-indigo-600 dark:text-indigo-400">
                  6
                </div>
                <div className="text-[11px] font-medium text-gray-500 dark:text-gray-400">
                  Hackathons
                </div>
              </div>

              <div className="w-full h-px bg-gray-100 dark:bg-gray-800" />

              <div>
                <div className="text-xl sm:text-2xl font-black tracking-tight text-indigo-600 dark:text-indigo-400">
                  8+
                </div>
                <div className="text-[11px] font-medium text-gray-500 dark:text-gray-400">
                  Certifications
                </div>
              </div>

              <div className="w-full h-px bg-gray-100 dark:bg-gray-800" />

              <div>
                <div className="text-xl sm:text-2xl font-black tracking-tight text-indigo-600 dark:text-indigo-400">
                  2+
                </div>
                <div className="text-[11px] font-medium text-gray-500 dark:text-gray-400">
                  Years of Learning
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
