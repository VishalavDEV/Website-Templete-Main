import React from 'react';
import { Mentor, PageId } from '../types';
import { SpotlightCard } from './reactbits/SpotlightCard';
import { GradientText } from './reactbits/GradientText';
import { Star, Sparkles, Calendar, ArrowRight } from 'lucide-react';

interface ExpertInstructorsSectionProps {
  mentors: Mentor[];
  onSelectMentor: (mentor: Mentor) => void;
  onNavigate: (page: PageId) => void;
}

export const ExpertInstructorsSection: React.FC<ExpertInstructorsSectionProps> = ({
  mentors,
  onSelectMentor,
  onNavigate,
}) => {
  const topMentors = mentors.slice(0, 4);

  return (
    <section className="py-16 sm:py-24 bg-[#F8FAFC] relative border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200/80 text-indigo-700 text-xs font-mono font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>WORLD-CLASS EDUCATORS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 font-display tracking-tight">
              Our Expert{' '}
              <GradientText colors={['#4F46E5', '#7C3AED', '#2563EB', '#4F46E5']}>
                Instructors
              </GradientText>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Connect 1:1 with industry leaders, distinguished researchers, and principal technologists.
            </p>
          </div>

          <button
            onClick={() => onNavigate('mentorship')}
            className="self-start md:self-auto px-6 py-3 rounded-full bg-white hover:bg-slate-50 text-indigo-600 hover:text-indigo-700 font-bold text-xs border border-slate-200 shadow-xs transition-all flex items-center gap-2 cursor-pointer shrink-0"
          >
            <span>View All Mentors</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 4 Instructor Spotlight Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {topMentors.map((instructor) => (
            <SpotlightCard
              key={instructor.id}
              spotlightColor="rgba(79, 70, 229, 0.08)"
              className="p-6 rounded-3xl bg-white border border-slate-200 hover:border-indigo-300 transition-all flex flex-col justify-between group shadow-xs hover:shadow-xl"
            >
              <div className="space-y-4 text-center">
                {/* Photo with ring */}
                <div className="relative mx-auto w-24 h-24 sm:w-28 sm:h-28">
                  <div className="w-full h-full rounded-2xl overflow-hidden border-2 border-indigo-100 p-0.5 shadow-md group-hover:scale-105 transition-transform">
                    <img
                      src={instructor.avatar}
                      alt={instructor.name}
                      className="w-full h-full object-cover rounded-[14px]"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-white border border-slate-200 px-2 py-0.5 rounded-full flex items-center gap-1 shadow-md">
                    <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                    <span className="text-[10px] font-bold text-slate-800">
                      {instructor.rating.toFixed(1)}
                    </span>
                  </div>
                </div>

                {/* Name & Title */}
                <div>
                  <h3 className="text-lg font-bold text-slate-900 font-display group-hover:text-indigo-600 transition-colors">
                    {instructor.name}
                  </h3>
                  <p className="text-xs font-mono font-bold text-indigo-600 mt-0.5">
                    {instructor.role}
                  </p>
                  <p className="text-[11px] text-slate-500 truncate mt-0.5">
                    {instructor.company}
                  </p>
                </div>

                {/* Bio snippet */}
                <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                  {instructor.bio}
                </p>

                {/* Specialties tags */}
                <div className="flex flex-wrap items-center justify-center gap-1.5 pt-1">
                  {instructor.specialties.slice(0, 2).map((spec, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-[10px] px-2 py-0.5 rounded-md bg-slate-100 border border-slate-200/80 text-slate-600 font-mono"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>

              {/* Book 1:1 CTA Button */}
              <div className="pt-6 mt-6 border-t border-slate-100">
                <button
                  onClick={() => onSelectMentor(instructor)}
                  className="w-full py-2.5 px-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold text-xs rounded-xl shadow-md shadow-indigo-600/20 transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book 1:1 Session</span>
                </button>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
};
