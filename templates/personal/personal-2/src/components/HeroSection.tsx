import { PROFILE_DATA } from '../data/portfolioData';
import { ArrowRight, Download, Github, Linkedin, Mail, MapPin, Sparkles, Sprout } from 'lucide-react';

interface HeroSectionProps {
  onOpenResume: () => void;
  onOpenAskAi: () => void;
  accentTheme: 'cyan' | 'violet' | 'emerald';
}

export default function HeroSection({ onOpenResume }: HeroSectionProps) {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-[#f8fafc] dark:bg-[#0b0f19] transition-colors duration-300"
    >
      {/* Background Soft Glows */}
      <div className="absolute top-20 right-10 w-[500px] h-[500px] bg-blue-400/10 dark:bg-blue-500/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-40 left-10 w-[450px] h-[450px] bg-indigo-400/10 dark:bg-indigo-500/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 text-left">
            
            {/* Status & Availability Chip */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100/80 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 w-fit text-slate-700 dark:text-slate-200 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-semibold text-slate-700 dark:text-slate-200 tracking-tight font-sans">
                Open to Projects, Internships & Collaborations
              </span>
            </div>

            {/* Engineer Identity & Role */}
            <div className="space-y-1">
              <h1 className="font-heading font-extrabold text-5xl sm:text-6xl text-slate-900 dark:text-white tracking-tight">
                {PROFILE_DATA.name}
              </h1>

              <div className="text-xl sm:text-2xl font-bold text-slate-700 dark:text-slate-300 tracking-tight pt-1 font-sans">
                {PROFILE_DATA.role}
              </div>
            </div>

            {/* Headline with dynamic colored words */}
            <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.15] font-sans">
              Building <span className="text-blue-600 dark:text-blue-400">Intelligence.</span><br />
              Designing <span className="text-indigo-600 dark:text-indigo-400">Possibilities.</span>
            </div>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed font-sans">
              {PROFILE_DATA.heroSupportingText}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                id="hero-explore-projects-btn"
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl font-semibold text-sm shadow-md shadow-indigo-500/20 transition-all duration-200 hover:scale-[1.02] flex items-center gap-2"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                id="hero-view-resume-btn"
                className="px-6 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 rounded-xl font-semibold text-sm shadow-2xs transition-all duration-200 flex items-center gap-2 cursor-pointer"
              >
                <span>View Resume</span>
                <Download className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              </button>
            </div>

            {/* Social Links Row */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={PROFILE_DATA.github}
                target="_blank"
                rel="noreferrer"
                id="hero-social-github"
                aria-label="GitHub Profile"
                className="p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-300 shadow-2xs transition-all"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={PROFILE_DATA.linkedin}
                target="_blank"
                rel="noreferrer"
                id="hero-social-linkedin"
                aria-label="LinkedIn Profile"
                className="p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-300 shadow-2xs transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${PROFILE_DATA.email}`}
                id="hero-social-email"
                aria-label="Email Arjun Mehta"
                className="p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-300 shadow-2xs transition-all"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Right Column: Organic Curved Portrait with Doodle & Floating Badges */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Hand-Drawn Doodle "Build Learn Grow" */}
            <div className="absolute -top-6 -right-2 sm:right-6 z-20 flex flex-col items-center select-none pointer-events-none">
              <div className="text-slate-700 dark:text-slate-300 text-sm sm:text-base font-bold tracking-tight font-sans text-center leading-tight">
                Build<br />
                Learn<br />
                Grow
              </div>
              {/* Curved Arrow SVG */}
              <svg
                className="w-10 h-10 text-indigo-500 dark:text-indigo-400 -rotate-12 mt-1"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 10 C 25 15, 35 30, 20 42"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeDasharray="1 1"
                />
                <path
                  d="M15 36 L 20 43 L 27 38"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Organic Fluid Blob Portrait Frame */}
            <div className="relative w-full max-w-[420px] aspect-[4/5] sm:aspect-[1/1.15] flex items-center justify-center">
              
              {/* Soft Ambient Radial Halo behind blob */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-300/30 via-indigo-300/30 to-purple-300/20 dark:from-blue-500/20 dark:via-indigo-500/20 dark:to-purple-500/15 rounded-[45%_55%_65%_35%/50%_45%_55%_50%] blur-xl transform scale-105" />

              {/* Masked Organic Image Container */}
              <div className="relative w-full h-full overflow-hidden shadow-2xl rounded-[42%_58%_65%_35%_/_45%_40%_60%_55%] border-4 border-white dark:border-slate-800 bg-gradient-to-b from-blue-100 to-indigo-100 dark:from-slate-800 dark:to-slate-900">
                <img
                  src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=1000&q=80"
                  alt="Arjun Mehta - AI Engineer"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                />
                {/* Subtle soft gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating Location & Profession Badge on Bottom Right */}
              <div className="absolute -bottom-4 right-2 sm:right-4 z-20 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200/90 dark:border-slate-800 rounded-2xl p-3 px-4 shadow-xl shadow-slate-900/10 flex flex-col gap-1.5 min-w-[210px] animate-in fade-in zoom-in duration-500">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-800 dark:text-slate-200">
                    <MapPin className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                    <span>Bengaluru, India</span>
                  </div>
                  <Sprout className="w-4 h-4 text-emerald-500 shrink-0" />
                </div>
                
                <div className="flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-400 font-medium">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                  <span>AI Engineer & Developer</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

