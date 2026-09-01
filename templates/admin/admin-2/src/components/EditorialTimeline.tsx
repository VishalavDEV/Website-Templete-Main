import React from 'react';
import { useEditorial } from '../services/editorialStore';
import { TimelineEvent } from '../types';
import { 
  Send, Sparkles, Image, CheckCircle, Star, UserCheck, 
  ArrowRight, Clock, ExternalLink 
} from 'lucide-react';

export const EditorialTimeline: React.FC = () => {
  const { timeline, stories, media, setPreviewStory, setEditingStory, setActiveView } = useEditorial();

  const handleTimelineClick = (event: TimelineEvent) => {
    if (event.targetType === 'story' && event.targetId) {
      const story = stories.find((s) => s.id === event.targetId);
      if (story) {
        setPreviewStory(story);
        return;
      }
    } else if (event.targetType === 'media') {
      setActiveView('archive_media');
      return;
    } else if (event.targetType === 'task') {
      setActiveView('editorial_reviews');
      return;
    }
  };

  const getEventIcon = (type: TimelineEvent['type']) => {
    switch (type) {
      case 'story_published':
        return <Send className="w-3.5 h-3.5 text-sky-600" />;
      case 'story_submitted':
        return <Sparkles className="w-3.5 h-3.5 text-amber-600" />;
      case 'media_added':
        return <Image className="w-3.5 h-3.5 text-emerald-600" />;
      case 'review_completed':
        return <CheckCircle className="w-3.5 h-3.5 text-indigo-600" />;
      case 'featured_updated':
        return <Star className="w-3.5 h-3.5 text-amber-500" />;
      case 'assignment_created':
        return <UserCheck className="w-3.5 h-3.5 text-cyan-600" />;
      default:
        return <Clock className="w-3.5 h-3.5 text-slate-500" />;
    }
  };

  return (
    <div 
      id="editorial-timeline-card" 
      className="p-5 rounded-2xl bg-white/90 border border-slate-200/80 shadow-xs flex flex-col h-full"
    >
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-sky-600" />
          <h3 className="font-editorial text-base font-bold text-slate-900">
            EDITORIAL TIMELINE
          </h3>
        </div>
        <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-slate-100 text-slate-600">
          Live Log
        </span>
      </div>

      {/* Timeline Stream */}
      <div className="flex-1 overflow-y-auto pr-1 space-y-4 relative before:absolute before:left-[17px] before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200/80">
        {timeline.map((item, idx) => (
          <div
            key={item.id}
            id={`timeline-event-${item.id}`}
            onClick={() => handleTimelineClick(item)}
            className="group flex items-start gap-3 relative cursor-pointer p-1.5 -m-1.5 rounded-xl hover:bg-sky-50/50 transition-colors"
          >
            {/* Timeline Node Icon */}
            <div className="w-8 h-8 rounded-full bg-white border border-slate-200 group-hover:border-sky-300 shadow-2xs flex items-center justify-center shrink-0 z-10 transition-colors">
              {getEventIcon(item.type)}
            </div>

            {/* Event Description */}
            <div className="flex-1 min-w-0">
              <div className="flex items-baseline justify-between gap-1">
                <span className="text-[11px] font-bold font-data text-slate-600 uppercase tracking-wider group-hover:text-sky-700">
                  {item.title}
                </span>
                <span className="text-[10px] font-mono text-slate-600 shrink-0">
                  {item.timeLabel}
                </span>
              </div>

              {item.subtitle && (
                <p className="text-xs font-semibold text-slate-800 line-clamp-1 group-hover:text-sky-900 transition-colors mt-0.5">
                  {item.subtitle}
                </p>
              )}

              <div className="flex items-center gap-1.5 mt-1 text-[11px] text-slate-600">
                <img
                  src={item.actor.avatar}
                  alt={item.actor.name}
                  className="w-3.5 h-3.5 rounded-full object-cover"
                />
                <span>{item.actor.name}</span>
                <span className="text-slate-300">•</span>
                <span className="text-[10px] text-slate-600">{item.actor.role}</span>
              </div>
            </div>

            {/* Hover arrow */}
            <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-sky-600 opacity-0 group-hover:opacity-100 transition-all shrink-0 self-center" />
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="pt-3 border-t border-slate-100 mt-2 text-center">
        <button
          id="view-full-activity-history-btn"
          onClick={() => setActiveView('content_all')}
          className="text-xs text-sky-700 hover:text-sky-900 font-medium hover:underline flex items-center justify-center gap-1 w-full transition-colors"
        >
          <span>View full story repository history</span>
          <ExternalLink className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
};
