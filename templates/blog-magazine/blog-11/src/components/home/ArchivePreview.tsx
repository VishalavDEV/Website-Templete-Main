import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, ArrowRight } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { ImageWithFallback } from '../ui/ImageWithFallback';
import { MAGAZINE_ISSUES } from '../../data/issues';

export const ArchivePreview: React.FC = () => {
  return (
    <section className="py-20 bg-theme-primary border-t border-neutral-200/60 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          label="PRINT & DIGITAL EDITIONS"
          title="MAGAZINE ARCHIVE"
          subtitle="Explore back issues of AGROTECH AI featuring long-form agronomy essays and technological deep dives."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-12">
          {MAGAZINE_ISSUES.slice(0, 3).map(issue => (
            <Link
              key={issue.id}
              to="/archive"
              className="group perspective-1000 block"
            >
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-theme-surface border border-neutral-200 dark:border-neutral-800 shadow-md group-hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 flex flex-col justify-between h-full">
                {/* Issue Cover Visual - Full Covered Container */}
                <div className="relative aspect-[3/4] w-full overflow-hidden block">
                  <ImageWithFallback
                    src={issue.coverImage}
                    alt={issue.title}
                    hoverZoom
                    className="w-full h-full object-cover block"
                  />

                  {/* Editorial Magazine Cover Typography Overlays */}
                  <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/95 via-black/40 to-transparent p-5 sm:p-6 flex flex-col justify-between text-white">
                    <div className="flex justify-between items-start">
                      <span className="font-display-cinzel text-[10px] sm:text-xs font-bold tracking-widest bg-emerald-950/90 backdrop-blur-md px-2.5 py-1 rounded-full border border-emerald-500/50 text-emerald-300">
                        {issue.issueNumber}
                      </span>
                      <span className="font-mono-tech text-[10px] text-neutral-200 font-bold">
                        {issue.monthYear}
                      </span>
                    </div>

                    <div>
                      <span className="text-[9px] sm:text-[10px] font-mono-tech uppercase tracking-widest text-emerald-400 font-bold block mb-1">
                        THEME EDITION
                      </span>
                      <h3 className="text-lg sm:text-xl font-serif-editorial font-bold leading-tight text-white group-hover:text-emerald-300 transition-colors">
                        {issue.title}
                      </h3>
                      <p className="text-xs text-neutral-200 line-clamp-2 mt-1.5 font-sans">
                        {issue.description}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-3.5 sm:p-4 bg-theme-surface flex items-center justify-between text-[11px] sm:text-xs font-mono-tech border-t border-neutral-200/60 dark:border-neutral-800">
                  <span className="text-theme-muted font-medium">{issue.articleSlugs.length} FEATURED ESSAYS</span>
                  <span className="text-emerald-700 dark:text-emerald-400 font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    READ ISSUE <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/archive"
            className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-forest-900 dark:bg-emerald-600 text-white font-medium text-xs sm:text-sm hover:bg-forest-800 transition-all shadow-lg hover:shadow-xl font-bold w-full sm:w-auto"
          >
            <BookOpen className="w-4 h-4" /> View Complete Issue Archives &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
};
