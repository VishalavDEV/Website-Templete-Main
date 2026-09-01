import React from 'react';
import { useEditorial } from '../services/editorialStore';
import { Calendar, CheckSquare, Users, TrendingUp, Sparkles, Send } from 'lucide-react';

export const TodayHeroStrip: React.FC = () => {
  const { stories, attentionItems, authors, setActiveView } = useEditorial();

  const scheduledCount = stories.filter((s) => s.status === 'scheduled').length;
  const pendingReviewsCount = stories.filter((s) => s.status === 'review').length + attentionItems.filter((i) => !i.completed && i.type === 'story_approval').length;
  const activeTeamCount = authors.length;

  return (
    <section id="today-hero-section" className="mb-6">
      {/* Editorial Greeting Header matching Artistic Flair specification */}
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:space-x-3 gap-1 mb-2">
        <h1 className="text-3xl sm:text-4xl font-light italic font-serif text-slate-900 tracking-tight">
          Good morning, Alex.
        </h1>
        <p className="text-slate-500 font-medium text-sm sm:text-base">
          Here is what needs attention across Elemental today.
        </p>
      </div>

      {/* Interactive Today Metric Strip matching Artistic Flair */}
      <div 
        id="today-metric-strip" 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6"
      >
        {/* Strip Item 1: Publishing */}
        <div
          id="today-strip-publishing"
          onClick={() => setActiveView('editorial_calendar')}
          className="flex-1 bg-white p-4 rounded-xl border border-sky-50 shadow-sm flex items-center justify-between cursor-pointer hover:border-sky-200 transition-all group"
        >
          <div>
            <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">
              Publishing
            </div>
            <div className="text-xl font-bold text-slate-900">
              {scheduledCount} <span className="text-sm font-medium text-slate-400">scheduled</span>
            </div>
          </div>
          <div className="w-10 h-10 rounded-full bg-sky-50 flex items-center justify-center text-sky-500 group-hover:bg-sky-100 transition-colors">
            <Send className="w-4 h-4" />
          </div>
        </div>

        {/* Strip Item 2: Reviews */}
        <div
          id="today-strip-reviews"
          onClick={() => setActiveView('editorial_reviews')}
          className="flex-1 bg-white p-4 rounded-xl border border-sky-50 shadow-sm flex items-center justify-between cursor-pointer hover:border-sky-200 transition-all group"
        >
          <div>
            <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">
              Reviews
            </div>
            <div className="text-xl font-bold text-slate-900">
              {pendingReviewsCount} <span className="text-sm font-medium text-slate-400">waiting</span>
            </div>
          </div>
          <div className="w-10 h-10 rounded-full bg-sky-50 flex items-center justify-center text-sky-500 group-hover:bg-sky-100 transition-colors">
            <CheckSquare className="w-4 h-4" />
          </div>
        </div>

        {/* Strip Item 3: Team */}
        <div
          id="today-strip-team"
          onClick={() => setActiveView('team_workload')}
          className="flex-1 bg-white p-4 rounded-xl border border-sky-50 shadow-sm flex items-center justify-between cursor-pointer hover:border-sky-200 transition-all group"
        >
          <div>
            <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">
              Team
            </div>
            <div className="text-xl font-bold text-slate-900">
              {activeTeamCount} <span className="text-sm font-medium text-slate-400">active</span>
            </div>
          </div>
          <div className="w-10 h-10 rounded-full bg-sky-50 flex items-center justify-center text-sky-500 group-hover:bg-sky-100 transition-colors">
            <Users className="w-4 h-4" />
          </div>
        </div>

        {/* Strip Item 4: Readers */}
        <div
          id="today-strip-readers"
          onClick={() => setActiveView('audience_analytics')}
          className="flex-1 bg-white p-4 rounded-xl border border-sky-50 shadow-sm flex items-center justify-between cursor-pointer hover:border-sky-200 transition-all group"
        >
          <div>
            <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">
              Readers
            </div>
            <div className="text-xl font-bold text-slate-900">
              +9.4% <span className="text-sm font-medium text-emerald-500">rise</span>
            </div>
          </div>
          <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-500 group-hover:bg-emerald-100 transition-colors">
            <TrendingUp className="w-4 h-4" />
          </div>
        </div>
      </div>
    </section>
  );
};

