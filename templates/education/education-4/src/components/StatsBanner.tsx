import React from 'react';
import { 
  GraduationCap, 
  Briefcase, 
  Users, 
  FlaskConical, 
  Globe, 
  Award,
  BookOpen
} from 'lucide-react';
import { UniversityStat } from '../types';

interface StatsBannerProps {
  stats: UniversityStat[];
}

export const StatsBanner: React.FC<StatsBannerProps> = ({ stats }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'GraduationCap':
        return <GraduationCap className="w-6 h-6 text-[#ffb606]" />;
      case 'Users':
        return <Users className="w-6 h-6 text-[#ffb606]" />;
      case 'Award':
        return <Award className="w-6 h-6 text-[#ffb606]" />;
      case 'Globe':
        return <Globe className="w-6 h-6 text-[#ffb606]" />;
      case 'BookOpen':
        return <BookOpen className="w-6 h-6 text-[#ffb606]" />;
      default:
        return <GraduationCap className="w-6 h-6 text-[#ffb606]" />;
    }
  };

  return (
    <section id="stats" className="py-16 bg-[#132238] text-white border-y border-[#1c304d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, idx) => (
            <div 
              key={idx} 
              className="flex flex-col items-center text-center p-4 group"
            >
              <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mb-3 group-hover:scale-110 group-hover:bg-[#ffb606]/20 transition-all">
                {getIcon(stat.iconName)}
              </div>
              <span className="text-3xl sm:text-4xl font-black text-white leading-none mb-1.5 font-sans group-hover:text-[#ffb606] transition-colors">
                {stat.value}
              </span>
              <span className="text-xs sm:text-sm font-bold text-slate-200 uppercase tracking-wider mb-1">
                {stat.label}
              </span>
              <span className="text-xs text-slate-400 leading-relaxed max-w-[200px]">
                {stat.sublabel}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
