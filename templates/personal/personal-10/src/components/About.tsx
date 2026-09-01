import React from 'react';
import { ArrowRight, User, Mail, MapPin, Clock, Code2, Sparkles, SlidersHorizontal, Users, PenTool } from 'lucide-react';
import { personalInfo, aboutHighlights } from '../data/portfolioData';

interface AboutProps {
  onOpenMoreAbout: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenMoreAbout }) => {
  const getHighlightIcon = (type: string) => {
    switch (type) {
      case 'code':
        return <Code2 className="w-5 h-5" />;
      case 'pen':
        return <PenTool className="w-5 h-5" />;
      case 'sliders':
        return <SlidersHorizontal className="w-5 h-5" />;
      case 'users':
        return <Users className="w-5 h-5" />;
      default:
        return <Sparkles className="w-5 h-5" />;
    }
  };

  const getCleanIconBg = (type: string) => {
    switch (type) {
      case 'code':
        return 'bg-blue-50 text-blue-600 dark:bg-blue-950/60 dark:text-blue-400';
      case 'pen':
        return 'bg-purple-50 text-purple-600 dark:bg-purple-950/60 dark:text-purple-400';
      case 'sliders':
        return 'bg-emerald-50 text-emerald-600 dark:bg-emerald-950/60 dark:text-emerald-400';
      case 'users':
        return 'bg-amber-50 text-amber-600 dark:bg-amber-950/60 dark:text-amber-400';
      default:
        return 'bg-blue-50 text-blue-600 dark:bg-blue-950/60 dark:text-blue-400';
    }
  };

  return (
    <section id="about-section" className="py-16 sm:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="mb-14 max-w-3xl">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-blue-600 dark:bg-blue-950/60 dark:text-blue-400 text-xs font-bold uppercase tracking-widest border border-blue-100 dark:border-blue-900/40 mb-4">
            About Me
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight leading-tight">
            {personalInfo.headline}
          </h2>
        </div>

        {/* 3-Column Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-stretch">
          
          {/* Column 1: Bio & Personal Details Card */}
          <div className="lg:col-span-4 bg-white dark:bg-gray-900 p-6 sm:p-8 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-3">Core Profile</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base leading-relaxed">
                {personalInfo.bioAbout}
              </p>

              {/* Info Badges List */}
              <div className="mt-8 space-y-4 pt-6 border-t border-gray-100 dark:border-gray-800">
                <div className="flex items-center gap-3.5">
                  <div className="w-9 h-9 rounded-2xl bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-300 flex items-center justify-center shrink-0 border border-gray-200/60 dark:border-gray-700">
                    <User className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-gray-400 font-medium block">Name:</span>
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">{personalInfo.name}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3.5">
                  <div className="w-9 h-9 rounded-2xl bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-300 flex items-center justify-center shrink-0 border border-gray-200/60 dark:border-gray-700">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-gray-400 font-medium block">Email:</span>
                    <a href={`mailto:${personalInfo.email}`} className="text-sm font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3.5">
                  <div className="w-9 h-9 rounded-2xl bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-300 flex items-center justify-center shrink-0 border border-gray-200/60 dark:border-gray-700">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-gray-400 font-medium block">Location:</span>
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">{personalInfo.location}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3.5">
                  <div className="w-9 h-9 rounded-2xl bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-300 flex items-center justify-center shrink-0 border border-gray-200/60 dark:border-gray-700">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-gray-400 font-medium block">Experience:</span>
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">{personalInfo.experienceYears}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* More About Me Button */}
            <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-800">
              <button
                onClick={onOpenMoreAbout}
                className="w-full inline-flex items-center justify-center gap-2 bg-black hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-100 text-white px-5 py-2.5 rounded-full font-medium text-sm transition-all shadow-xs active:scale-95 cursor-pointer"
              >
                <span>Read Detailed Bio</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Column 2: Center Portrait Card */}
          <div className="lg:col-span-4 bg-white dark:bg-gray-900 p-4 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm flex flex-col justify-between">
            <div className="relative w-full h-[360px] sm:h-full rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop"
                alt="Arjun Dev profile"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              
              {/* Minimal 2+ Years Tag */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md p-4 rounded-2xl border border-gray-200/80 dark:border-gray-800 shadow-sm flex items-center justify-between">
                <div>
                  <div className="text-2xl font-extrabold text-gray-900 dark:text-white leading-none">2+ Years</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">Professional Experience</div>
                </div>
                <div className="flex items-center text-xs font-bold text-blue-600 dark:text-blue-400 space-x-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  <span>Active</span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3: Feature Highlights Cards Grid */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            {aboutHighlights.map((item) => (
              <div
                key={item.id}
                className="bg-white dark:bg-gray-900 p-5 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-all flex items-start gap-4"
              >
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${getCleanIconBg(item.iconType)}`}>
                  {getHighlightIcon(item.iconType)}
                </div>
                <div>
                  <h3 className="text-base font-bold text-gray-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

