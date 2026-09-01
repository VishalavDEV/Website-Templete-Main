import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, ArrowRight, Sparkles } from 'lucide-react';
import { MAGAZINE_ISSUES } from '../data/issues';
import { ARTICLES } from '../data/articles';
import { ImageWithFallback } from '../components/ui/ImageWithFallback';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { MagazineIssue } from '../types';

export const ArchivePage: React.FC = () => {
  const [selectedIssue, setSelectedIssue] = useState<MagazineIssue>(MAGAZINE_ISSUES[0]);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Magazine Issue Archive — AGROTECH AI';
  }, []);

  const issueArticles = ARTICLES.filter(art => selectedIssue.articleSlugs.includes(art.slug));

  return (
    <main className="min-h-screen pt-28 pb-20 bg-theme-primary">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <ScrollReveal direction="down">
          <div className="mb-12 text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-700 font-mono-tech text-xs uppercase tracking-widest font-bold">
              <BookOpen className="w-3.5 h-3.5" />
              <span>PRINT &amp; DIGITAL EDITIONS</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-serif-editorial font-bold text-theme-primary tracking-tight">
              Magazine Issue Archive
            </h1>

            <p className="text-sm sm:text-base text-theme-secondary font-sans leading-relaxed">
              Browse through full issues of AGROTECH AI featuring comprehensive long-form agronomy essays, molecular bioinformatics research, and robotics field notes.
            </p>
          </div>
        </ScrollReveal>

        {/* Selected Issue Spotlight Banner */}
        <ScrollReveal delay={100}>
          <div className="mb-16 bg-forest-950 text-white rounded-3xl p-8 lg:p-12 shadow-2xl border border-emerald-700/50 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-2 border-emerald-500/40 relative group block">
              <ImageWithFallback src={selectedIssue.coverImage} alt={selectedIssue.title} className="w-full h-full object-cover block" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent p-6 flex flex-col justify-end text-white">
                <span className="font-display-cinzel font-bold text-sm text-emerald-400">{selectedIssue.issueNumber}</span>
                <span className="text-xs font-mono-tech text-neutral-200">{selectedIssue.monthYear}</span>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-6">
              <div className="flex items-center space-x-3 text-xs font-mono-tech text-emerald-400 font-bold">
                <Sparkles className="w-4 h-4" />
                <span>CURRENTLY SELECTED ISSUE: {selectedIssue.issueNumber}</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-serif-editorial font-bold leading-tight text-white">
                {selectedIssue.title}
              </h2>

              <div className="inline-block px-3 py-1 rounded-md bg-emerald-900/80 border border-emerald-600 text-xs font-mono-tech text-emerald-300 uppercase tracking-widest font-bold">
                THEME: {selectedIssue.theme}
              </div>

              <p className="text-sm text-neutral-200 font-sans leading-relaxed">
                {selectedIssue.description}
              </p>

              {/* Table of Contents */}
              <div className="pt-4 border-t border-emerald-900/80">
                <h4 className="text-xs font-mono-tech uppercase tracking-widest text-neutral-400 mb-4 font-bold">
                  TABLE OF CONTENTS &amp; FEATURED ESSAYS ({issueArticles.length})
                </h4>
                <div className="space-y-3">
                  {issueArticles.map(art => (
                    <Link
                      key={art.id}
                      to={`/article/${art.slug}`}
                      className="group flex items-center justify-between p-3.5 rounded-xl bg-neutral-900/90 border border-emerald-900/40 hover:border-emerald-500 transition-all text-xs font-sans"
                    >
                      <div className="flex items-center gap-3">
                        <span className="font-mono-tech text-emerald-400 font-bold">{art.category}</span>
                        <span className="text-white font-bold group-hover:text-emerald-300 transition-colors line-clamp-1">{art.title}</span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all shrink-0" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* All Issues Selector Grid */}
        <section className="space-y-6">
          <h3 className="text-xl font-serif-editorial font-bold text-theme-primary border-b border-neutral-800 pb-3">
            Select an Issue to Inspect
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {MAGAZINE_ISSUES.map((issue, idx) => {
              const isSelected = selectedIssue.id === issue.id;
              return (
                <ScrollReveal key={issue.id} delay={idx * 100}>
                  <div
                    onClick={() => setSelectedIssue(issue)}
                    className={`group cursor-pointer rounded-2xl overflow-hidden border transition-all duration-300 p-4 ${
                      isSelected
                        ? 'bg-forest-900 text-white border-emerald-500 shadow-xl scale-[1.02]'
                        : 'bg-theme-surface border-neutral-800 hover:border-emerald-600'
                    }`}
                  >
                    <div className="relative aspect-[3/4] rounded-xl overflow-hidden mb-3 block">
                      <ImageWithFallback src={issue.coverImage} alt={issue.title} className="w-full h-full object-cover block" />
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-[11px] font-mono-tech">
                        <span className={isSelected ? 'text-emerald-300 font-bold' : 'text-emerald-400 font-bold'}>
                          {issue.issueNumber}
                        </span>
                        <span className={isSelected ? 'text-neutral-300' : 'text-theme-muted'}>{issue.monthYear}</span>
                      </div>
                      <h4 className={`text-sm font-serif-editorial font-bold line-clamp-1 ${isSelected ? 'text-white' : 'text-theme-primary'}`}>
                        {issue.title}
                      </h4>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
};
