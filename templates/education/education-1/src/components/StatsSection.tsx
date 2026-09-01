import React from 'react';
import { CountUp } from './reactbits/CountUp';
import { Users, BookOpen, Award, CheckCircle2 } from 'lucide-react';
import { SpotlightCard } from './reactbits/SpotlightCard';

export const StatsSection: React.FC = () => {
  const stats = [
    {
      icon: <Users className="w-6 h-6 text-indigo-600" />,
      value: 10000,
      suffix: '+',
      label: 'Students Enrolled',
      sublabel: 'Across 80+ countries',
      glow: 'rgba(79, 70, 229, 0.08)',
    },
    {
      icon: <BookOpen className="w-6 h-6 text-purple-600" />,
      value: 500,
      suffix: '+',
      label: 'Verified Courses',
      sublabel: 'Updated weekly',
      glow: 'rgba(147, 51, 234, 0.08)',
    },
    {
      icon: <Award className="w-6 h-6 text-cyan-600" />,
      value: 120,
      suffix: '+',
      label: 'Expert Instructors',
      sublabel: 'From top tech & universities',
      glow: 'rgba(2, 132, 199, 0.08)',
    },
    {
      icon: <CheckCircle2 className="w-6 h-6 text-emerald-600" />,
      value: 95,
      suffix: '%',
      label: 'Student Satisfaction',
      sublabel: 'Positive career outcomes',
      glow: 'rgba(16, 185, 129, 0.08)',
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-[#F8FAFC] relative border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, idx) => (
            <SpotlightCard
              key={idx}
              spotlightColor={stat.glow}
              className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/80 hover:border-slate-300 transition-all text-left shadow-xs hover:shadow-md"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center">
                  {stat.icon}
                </div>
                <span className="text-[10px] font-mono text-slate-400 font-bold uppercase tracking-widest">
                  METRIC 0{idx + 1}
                </span>
              </div>

              <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-mono mb-1">
                <CountUp end={stat.value} suffix={stat.suffix} duration={2200} />
              </div>

              <h4 className="text-sm font-bold text-slate-900 font-display">
                {stat.label}
              </h4>
              <p className="text-xs text-slate-500 mt-0.5">
                {stat.sublabel}
              </p>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
};
