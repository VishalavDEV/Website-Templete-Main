import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Article, CursorType } from '../../types';

interface ArticleNavigationFooterProps {
  previous: Article;
  next: Article;
  setCursorType: (type: CursorType, text?: string) => void;
  onNavigate: (path: string) => void;
}

export const ArticleNavigationFooter: React.FC<ArticleNavigationFooterProps> = ({
  previous,
  next,
  setCursorType,
  onNavigate,
}) => {
  return (
    <section className="border-t border-white/10 bg-[#080808]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/10">
        {/* Previous Article */}
        <div
          onClick={() => onNavigate(`/insights/${previous.slug}`)}
          onMouseEnter={() => setCursorType('pointer')}
          onMouseLeave={() => setCursorType('default')}
          className="p-8 sm:p-14 group cursor-pointer hover:bg-white/[0.015] transition-colors flex flex-col justify-between space-y-6"
        >
          <div className="flex items-center gap-2 text-[#888888] font-mono text-xs uppercase tracking-widest group-hover:text-[#0066FF] transition-colors">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>PREVIOUS ESSAY</span>
          </div>

          <div className="space-y-2">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#666666]">
              {previous.category} // {previous.readTime}
            </span>
            <h3 className="font-display font-extrabold text-xl sm:text-2xl lg:text-3xl text-[#FAF9F6] uppercase tracking-tight group-hover:text-[#0066FF] transition-colors leading-tight">
              {previous.title}
            </h3>
          </div>
        </div>

        {/* Next Article */}
        <div
          onClick={() => onNavigate(`/insights/${next.slug}`)}
          onMouseEnter={() => setCursorType('pointer')}
          onMouseLeave={() => setCursorType('default')}
          className="p-8 sm:p-14 group cursor-pointer hover:bg-white/[0.015] transition-colors flex flex-col justify-between space-y-6 text-left md:text-right"
        >
          <div className="flex items-center md:justify-end gap-2 text-[#888888] font-mono text-xs uppercase tracking-widest group-hover:text-[#0066FF] transition-colors">
            <span>NEXT ESSAY</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>

          <div className="space-y-2">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#666666]">
              {next.category} // {next.readTime}
            </span>
            <h3 className="font-display font-extrabold text-xl sm:text-2xl lg:text-3xl text-[#FAF9F6] uppercase tracking-tight group-hover:text-[#0066FF] transition-colors leading-tight">
              {next.title}
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};
