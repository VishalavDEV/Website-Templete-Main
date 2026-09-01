import React from 'react';
import { ArrowRight, Code2, Palette, GraduationCap, FolderKanban, Layers, Award, ShieldCheck, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface AboutSectionProps {
  darkMode: boolean;
  onOpenAboutModal: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ darkMode, onOpenAboutModal }) => {
  const pillars = [
    {
      title: 'AI Enthusiast',
      description: 'Exploring AI, ML and Generative AI to build intelligent systems.',
      icon: Sparkles,
      iconBg: 'bg-purple-100 text-purple-600 dark:bg-purple-950/80 dark:text-purple-400',
    },
    {
      title: 'Problem Solver',
      description: 'I break down complex problems and build practical solutions.',
      icon: Code2,
      iconBg: 'bg-blue-100 text-blue-600 dark:bg-blue-950/80 dark:text-blue-400',
    },
    {
      title: 'Product Builder',
      description: 'I love creating clean, scalable and delightful digital experiences.',
      icon: Palette,
      iconBg: 'bg-pink-100 text-pink-600 dark:bg-pink-950/80 dark:text-pink-400',
    },
    {
      title: 'Lifelong Learner',
      description: 'Always learning, always building, always improving.',
      icon: GraduationCap,
      iconBg: 'bg-emerald-100 text-emerald-600 dark:bg-emerald-950/80 dark:text-emerald-400',
    },
  ];

  const stats = [
    {
      label: 'Projects',
      value: '18+',
      icon: FolderKanban,
      iconBg: 'bg-purple-100 text-purple-600 dark:bg-purple-950/80 dark:text-purple-400',
    },
    {
      label: 'Technologies',
      value: '12+',
      icon: Layers,
      iconBg: 'bg-blue-100 text-blue-600 dark:bg-blue-950/80 dark:text-blue-400',
    },
    {
      label: 'Hackathons',
      value: '6',
      icon: Award,
      iconBg: 'bg-amber-100 text-amber-600 dark:bg-amber-950/80 dark:text-amber-400',
    },
    {
      label: 'Certifications',
      value: '8+',
      icon: ShieldCheck,
      iconBg: 'bg-emerald-100 text-emerald-600 dark:bg-emerald-950/80 dark:text-emerald-400',
    },
  ];

  return (
    <section
      id="about"
      className={`py-16 scroll-mt-24 transition-colors ${
        darkMode ? 'bg-[#0B0F17] text-white' : 'bg-[#FAFCFF] text-gray-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column (4 cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between text-left">
            <div>
              <span
                id="about-eyebrow-tag"
                className="inline-block px-3.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider mb-4 bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 border border-purple-100 dark:border-purple-900/50"
              >
                ABOUT ME
              </span>

              <h2
                id="about-main-heading"
                className="text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold tracking-tight leading-[1.15] mb-4 text-gray-900 dark:text-white"
              >
                More Than <br />
                <span className="text-indigo-600 dark:text-indigo-400">a Developer</span>
              </h2>

              <p
                className={`text-sm sm:text-base leading-relaxed mb-6 font-normal ${
                  darkMode ? 'text-gray-400' : 'text-gray-500'
                }`}
              >
                {PERSONAL_INFO.aboutMeLong}
              </p>
            </div>

            <div>
              <button
                id="about-know-more-btn"
                onClick={onOpenAboutModal}
                className={`inline-flex items-center gap-2 px-5 py-3 rounded-xl border text-xs font-bold tracking-wide transition-all duration-200 cursor-pointer active:scale-95 shadow-xs ${
                  darkMode
                    ? 'bg-[#111827] border-gray-800 text-gray-200 hover:bg-gray-800'
                    : 'bg-white border-gray-200 text-gray-800 hover:bg-gray-50'
                }`}
              >
                <span>Know More About Me</span>
                <ArrowRight className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              </button>
            </div>
          </div>

          {/* Right Column (8 cols): 2 Rows of 4 Cards */}
          <div className="lg:col-span-8 flex flex-col gap-4">
            
            {/* Top Row: 4 Pillar Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={idx}
                    id={`about-pillar-${idx}`}
                    className={`p-5 rounded-2xl border flex flex-col text-left transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md ${
                      darkMode
                        ? 'bg-[#111827] border-gray-800/80 hover:border-gray-700'
                        : 'bg-white border-gray-100 shadow-xs hover:border-gray-200'
                    }`}
                  >
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${pillar.iconBg}`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    <h3 className="font-bold text-sm tracking-tight mb-2 text-gray-900 dark:text-white">
                      {pillar.title}
                    </h3>

                    <p
                      className={`text-xs leading-relaxed ${
                        darkMode ? 'text-gray-400' : 'text-gray-500'
                      }`}
                    >
                      {pillar.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Bottom Row: 4 Stat Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
              {stats.map((stat, idx) => {
                const StatIcon = stat.icon;
                return (
                  <div
                    key={idx}
                    id={`about-stat-card-${idx}`}
                    className={`p-4 sm:p-5 rounded-2xl border flex items-center gap-3 text-left transition-all duration-200 hover:shadow-xs ${
                      darkMode
                        ? 'bg-[#111827] border-gray-800/80'
                        : 'bg-white border-gray-100 shadow-xs'
                    }`}
                  >
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${stat.iconBg}`}
                    >
                      <StatIcon className="w-5 h-5" />
                    </div>

                    <div className="flex flex-col">
                      <div className="text-xl sm:text-2xl font-extrabold tracking-tight text-indigo-600 dark:text-indigo-400">
                        {stat.value}
                      </div>
                      <div className="text-[11px] font-medium text-gray-500 dark:text-gray-400">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
