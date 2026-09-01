import React from 'react';
import { Quote, Star, Sparkles } from 'lucide-react';
import { TESTIMONIALS } from '../data/universityData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-white border-t border-slate-200 font-['Plus_Jakarta_Sans',sans-serif]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#ec1c4e] mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>STUDENT PERSPECTIVES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            What Our Students Say About Us
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Discover how StudyPress courses, research mentors, and global academic opportunities transformed their careers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((test) => (
            <div
              key={test.id}
              className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between hover:-translate-y-1 transition-all duration-300 group"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-amber-500 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed italic mb-6">
                  "{test.quote}"
                </p>
              </div>

              <div className="flex items-center gap-3.5 pt-4 border-t border-slate-200">
                <img
                  src={test.avatar}
                  alt={test.name}
                  referrerPolicy="no-referrer"
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#ec1c4e]"
                />
                <div>
                  <h4 className="text-sm font-bold text-slate-900 group-hover:text-[#ec1c4e] transition-colors">
                    {test.name}
                  </h4>
                  <p className="text-xs font-semibold text-[#ec1c4e]">
                    {test.major} • {test.classYear}
                  </p>
                  <p className="text-[11px] text-slate-500">
                    {test.roleOrCompany}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
