import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { BookOpen, Sparkles, ArrowRight, ArrowUpRight, Check, Calendar, Download } from 'lucide-react';
import { mockApi } from '../../services/mockApi';
import { MagazineIssue, Article } from '../../types';
import { useAppContext } from '../../store/AppContext';
import { Newsletter } from '../../components/Newsletter/Newsletter';

export const MagazinePage: React.FC = () => {
  const { issueSlug } = useParams<{ issueSlug?: string }>();
  const [issues, setIssues] = useState<MagazineIssue[]>([]);
  const [activeIssue, setActiveIssue] = useState<MagazineIssue | null>(null);
  const [issueArticles, setIssueArticles] = useState<Article[]>([]);
  const [selectedYear, setSelectedYear] = useState<'ALL' | '2026' | '2025'>('ALL');
  const { setIsSubscribeModalOpen, showToast } = useAppContext();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    let isMounted = true;

    const loadMagazineData = async () => {
      const allIssues = await mockApi.getIssues();
      const allArticles = await mockApi.getArticles();

      if (isMounted) {
        setIssues(allIssues);
        const current = issueSlug
          ? allIssues.find((i) => i.slug === issueSlug) || allIssues[0]
          : allIssues.find((i) => i.isCurrent) || allIssues[0];

        setActiveIssue(current);
        // Find matching articles for this issue
        const matched = allArticles.filter((a) =>
          current.featuredStories.some((s) => s.slug === a.slug)
        );
        setIssueArticles(matched.length > 0 ? matched : allArticles.slice(0, 4));
      }
    };

    loadMagazineData();
    return () => {
      isMounted = false;
    };
  }, [issueSlug]);

  if (!activeIssue) return null;

  const filteredArchive = issues.filter((iss) => {
    if (selectedYear === 'ALL') return true;
    return iss.year.toString() === selectedYear;
  });

  return (
    <div className="min-h-screen pt-24 sm:pt-28 pb-20 select-none space-y-20">
      
      {/* Active Issue Flagship Presentation Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-12 rounded-3xl bg-[#141619] border border-white/15 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center shadow-2xl">
          
          {/* Issue Cover Showcase */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[320px] aspect-[1/1.4] rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20 transform hover:scale-102 transition-transform duration-500">
              <img
                src={activeIssue.coverImage}
                alt={activeIssue.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              
              {/* Cover Top Badges */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                <span className="font-display tracking-[0.25em] text-xs font-bold text-white uppercase drop-shadow">
                  TERRA
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-[#c98a3e] text-black text-[9px] font-mono font-bold uppercase">
                  {activeIssue.isCurrent ? 'CURRENT ISSUE' : 'ARCHIVE ISSUE'}
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4">
                <div className="font-mono text-[10px] text-[#e0a358] uppercase tracking-widest mb-1">
                  {activeIssue.month} {activeIssue.year} · ISSUE {activeIssue.issueNumber}
                </div>
                <div className="font-serif text-xl font-bold text-white leading-tight">
                  {activeIssue.title}
                </div>
              </div>
            </div>
          </div>

          {/* Issue Header & Description */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#c98a3e]/15 border border-[#c98a3e]/30 text-[#e0a358] text-[10px] font-mono tracking-widest uppercase">
              <BookOpen className="w-3.5 h-3.5" />
              <span>THE DIGITAL & PRINT EDITION</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-white leading-tight">
              {activeIssue.title}
            </h1>

            <p className="font-sans text-base sm:text-lg text-[#d1c7b7] leading-relaxed font-light">
              {activeIssue.subtitle}
            </p>

            {/* Letter from Editor Callout */}
            <div className="p-5 rounded-2xl bg-[#0c0d0e] border border-white/10 space-y-3">
              <div className="text-[10px] font-mono text-[#e0a358] uppercase tracking-widest font-bold">
                A LETTER FROM THE EDITOR
              </div>
              <p className="font-serif italic text-sm text-[#e5e2dc] leading-relaxed">
                "{activeIssue.editorNote}"
              </p>
              <div className="font-mono text-xs text-[#a8a49c] pt-1">
                — {activeIssue.editorName}, Editor in Chief
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => setIsSubscribeModalOpen(true)}
                className="px-6 py-3.5 rounded-full bg-[#c98a3e] hover:bg-[#e0a358] text-black font-bold text-xs font-mono tracking-widest uppercase transition-all shadow-xl shadow-[#c98a3e]/20"
              >
                SUBSCRIBE TO RECEIVE PRINT EDITION
              </button>

              <button
                onClick={() => showToast('Issue digital folio downloaded for offline reading.', 'success')}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-[#181a1e] hover:bg-[#22262c] text-white border border-white/15 text-xs font-mono tracking-wider transition-colors"
              >
                <Download className="w-4 h-4 text-[#e0a358]" />
                <span>OFFLINE FOLIO (PDF)</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stories in This Issue */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="border-b border-white/10 pb-4 flex items-center justify-between">
          <div>
            <span className="font-mono text-xs tracking-[0.25em] text-[#e0a358] uppercase block mb-1">
              TABLE OF CONTENTS
            </span>
            <h2 className="font-serif text-3xl font-bold text-white">
              Stories in {activeIssue.month} {activeIssue.year}
            </h2>
          </div>
          <span className="font-mono text-xs text-[#a8a49c]">
            {activeIssue.featuredStories.length} EXPEDITIONS
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeIssue.featuredStories.map((st, idx) => (
            <Link
              key={idx}
              to={`/story/${st.slug}`}
              className="p-6 rounded-2xl bg-[#141619] border border-white/10 hover:border-[#c98a3e]/50 transition-all flex flex-col justify-between space-y-4 group shadow-xl"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-[10px] font-mono">
                  <span className="text-[#e0a358] uppercase font-bold">{st.category}</span>
                  <span className="text-[#a8a49c]">PAGE 0{idx * 14 + 18}</span>
                </div>
                <h3 className="font-serif text-xl font-bold text-white group-hover:text-[#e0a358] transition-colors leading-snug">
                  {st.title}
                </h3>
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono text-[#d1c7b7]">
                <span>READ DISPATCH</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#e0a358] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Complete Issue Archive Browser */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
          <div>
            <span className="font-mono text-xs tracking-[0.25em] text-[#e0a358] uppercase block mb-1">
              HISTORICAL REPOSITORY
            </span>
            <h2 className="font-serif text-3xl font-bold text-white">
              TERRA Issue Archive (2025–2026)
            </h2>
          </div>

          {/* Year Filter Buttons */}
          <div className="flex items-center gap-2 p-1.5 rounded-full bg-[#141619] border border-white/10">
            {(['ALL', '2026', '2025'] as const).map((yr) => (
              <button
                key={yr}
                onClick={() => setSelectedYear(yr)}
                className={`px-4 py-1.5 rounded-full text-xs font-mono tracking-wider transition-all ${
                  selectedYear === yr
                    ? 'bg-[#c98a3e] text-black font-bold'
                    : 'text-[#a8a49c] hover:text-white'
                }`}
              >
                {yr}
              </button>
            ))}
          </div>
        </div>

        {/* Issue Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
          {filteredArchive.map((iss) => (
            <Link
              key={iss.id}
              to={`/magazine/${iss.slug}`}
              className={`group flex flex-col rounded-2xl overflow-hidden bg-[#141619] border transition-all p-3 space-y-3 ${
                iss.slug === activeIssue.slug
                  ? 'border-[#c98a3e] shadow-xl ring-2 ring-[#c98a3e]/20'
                  : 'border-white/10 hover:border-white/30'
              }`}
            >
              <div className="relative aspect-[1/1.4] rounded-xl overflow-hidden">
                <img
                  src={iss.coverImage}
                  alt={iss.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {iss.isCurrent && (
                  <span className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-[#c98a3e] text-black font-mono font-bold text-[8px]">
                    CURRENT
                  </span>
                )}
              </div>

              <div className="space-y-1 text-left">
                <div className="font-mono text-[9px] text-[#e0a358] uppercase">
                  {iss.month} {iss.year}
                </div>
                <h4 className="font-serif text-sm font-bold text-white group-hover:text-[#e0a358] transition-colors line-clamp-1">
                  {iss.title}
                </h4>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Newsletter />
      </section>
    </div>
  );
};
