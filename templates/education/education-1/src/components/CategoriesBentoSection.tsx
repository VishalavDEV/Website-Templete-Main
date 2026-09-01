import React from 'react';
import { PageId } from '../types';
import { CATEGORIES_DATA } from '../data/edupathData';
import { SpotlightCard } from './reactbits/SpotlightCard';
import { GradientText } from './reactbits/GradientText';
import {
  Brain,
  Cpu,
  Database,
  Terminal,
  ShieldCheck,
  Code2,
  Cloud,
  Palette,
  Briefcase,
  Layers,
  ArrowRight,
} from 'lucide-react';

interface CategoriesBentoSectionProps {
  onNavigate: (page: PageId) => void;
}

export const CategoriesBentoSection: React.FC<CategoriesBentoSectionProps> = ({
  onNavigate,
}) => {
  const iconMap: Record<string, React.ReactNode> = {
    'cat-ai': <Brain className="w-6 h-6 text-indigo-600" />,
    'cat-ml': <Cpu className="w-6 h-6 text-purple-600" />,
    'cat-ds': <Database className="w-6 h-6 text-cyan-600" />,
    'cat-cs': <Terminal className="w-6 h-6 text-emerald-600" />,
    'cat-sec': <ShieldCheck className="w-6 h-6 text-rose-600" />,
    'cat-web': <Code2 className="w-6 h-6 text-blue-600" />,
    'cat-cloud': <Cloud className="w-6 h-6 text-sky-600" />,
    'cat-uiux': <Palette className="w-6 h-6 text-fuchsia-600" />,
    'cat-biz': <Briefcase className="w-6 h-6 text-amber-600" />,
    'cat-eng': <Layers className="w-6 h-6 text-teal-600" />,
  };

  return (
    <section className="py-16 sm:py-24 bg-white relative border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200/80 text-indigo-700 text-xs font-mono font-bold">
            <span>EXPLORE DISCIPLINES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 font-display tracking-tight">
            Comprehensive Learning{' '}
            <GradientText colors={['#4F46E5', '#7C3AED', '#2563EB', '#4F46E5']}>
              Categories
            </GradientText>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            From foundational computer science to bleeding-edge artificial intelligence,
            master the domains shaping global technology.
          </p>
        </div>

        {/* Bento / Chroma Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {CATEGORIES_DATA.map((cat) => (
            <SpotlightCard
              key={cat.id}
              onClick={() => onNavigate('courses')}
              spotlightColor="rgba(79, 70, 229, 0.08)"
              className="p-6 rounded-3xl bg-slate-50/60 border border-slate-200/80 hover:border-indigo-300 hover:bg-white transition-all cursor-pointer group flex flex-col justify-between shadow-xs hover:shadow-lg text-left"
            >
              <div className="space-y-3.5">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center group-hover:scale-110 group-hover:bg-indigo-50 group-hover:border-indigo-200 transition-all shadow-xs">
                    {iconMap[cat.id] || <Brain className="w-6 h-6 text-indigo-600" />}
                  </div>
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-white border border-slate-200 text-indigo-700">
                    {cat.tag}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 font-display group-hover:text-indigo-600 transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-indigo-600 font-mono font-semibold mt-0.5">
                    {cat.subtitle}
                  </p>
                </div>

                <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                  {cat.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 group-hover:text-indigo-600">
                <span className="font-mono text-[11px] font-semibold">{cat.coursesCount} Courses</span>
                <span className="flex items-center gap-1 font-bold">
                  Browse <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
};
