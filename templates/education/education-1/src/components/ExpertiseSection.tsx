import React from 'react';
import { PageId } from '../types';
import { User, GraduationCap, TrendingUp } from 'lucide-react';

interface ExpertiseSectionProps {
  onNavigate: (page: PageId) => void;
  onOpenAuth?: (mode: 'login' | 'register') => void;
}

export const ExpertiseSection: React.FC<ExpertiseSectionProps> = ({
  onNavigate,
  onOpenAuth,
}) => {
  const steps = [
    {
      id: 'step-1',
      icon: User,
      iconColor: 'text-[#0F8A5F]',
      iconBg: 'bg-[#E8F8F2]',
      title: 'Sign up and get started',
      description: 'Create your account and start learning instantly',
      action: () => onOpenAuth ? onOpenAuth('register') : onNavigate('courses'),
    },
    {
      id: 'step-2',
      icon: GraduationCap,
      iconColor: 'text-[#E85D75]',
      iconBg: 'bg-[#FDE8EF]',
      title: 'Explore courses tailored to you',
      description: 'Browse a range of courses',
      action: () => onNavigate('courses'),
    },
    {
      id: 'step-3',
      icon: TrendingUp,
      iconColor: 'text-[#8B5CF6]',
      iconBg: 'bg-[#F3E8FD]',
      title: 'Keep learning and growing',
      description: 'Continue exploring and advance your skill',
      action: () => onNavigate('paths'),
    },
  ];

  return (
    <section className="py-12 sm:py-20 md:py-24 bg-[#FAF7F2] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left Column: Photo of student with laptop sitting cross-legged */}
          <div className="lg:col-span-6 relative flex justify-center items-center">
            {/* Subtle soft peach decorative circle behind matching image */}
            <div className="absolute w-60 h-60 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full bg-[#FCECD8]/60 -top-4 sm:-top-6 -left-4 sm:-left-6 z-0 pointer-events-none" />
            <div className="absolute w-32 h-32 sm:w-40 sm:h-40 rounded-full border border-slate-300/60 top-6 sm:top-8 left-2 sm:left-4 z-0 pointer-events-none" />

            <div className="relative z-10 max-w-[320px] sm:max-w-md w-full">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80"
                alt="Student learning on laptop sitting comfortably"
                className="w-full h-auto object-cover rounded-2xl sm:rounded-3xl shadow-lg"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Column: Title + Arrow + 3 Step Cards */}
          <div className="lg:col-span-6 space-y-5 sm:space-y-6">
            <div className="relative">
              <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#24285D] tracking-tight leading-[1.2]">
                Take your expertise <br />
                to the next level
              </h2>

              {/* Hand-drawn decorative squiggly arrow pointing down */}
              <div className="absolute -top-2 right-2 sm:right-12 w-10 sm:w-12 h-14 sm:h-16 text-slate-800 hidden sm:block pointer-events-none">
                <svg viewBox="0 0 50 70" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <path
                    d="M35 5C45 15 48 30 35 40C20 50 15 35 25 45C30 50 35 58 35 65"
                    stroke="#1E293B"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M26 58L35 66L42 56"
                    stroke="#1E293B"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            {/* 3 Interactive Step Cards matching Screenshot */}
            <div className="space-y-3 sm:space-y-4 pt-1 sm:pt-2">
              {steps.map((step) => {
                const IconComponent = step.icon;
                return (
                  <div
                    key={step.id}
                    onClick={step.action}
                    className="bg-white rounded-2xl p-4 sm:p-5 md:p-6 shadow-xs hover:shadow-md border border-slate-100 transition-all duration-200 flex items-center gap-4 sm:gap-5 cursor-pointer group active:scale-[0.99]"
                  >
                    {/* Icon in soft pastel rounded container */}
                    <div className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl ${step.iconBg} ${step.iconColor} flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform`}>
                      <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>

                    {/* Content */}
                    <div className="space-y-0.5 sm:space-y-1">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900 group-hover:text-[#0F8A5F] transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed">
                        {step.description}
                      </p>
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
