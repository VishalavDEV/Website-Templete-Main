import React from 'react';
import { useEditorial } from '../services/editorialStore';
import { StoryStatus } from '../types';
import { FileEdit, CheckSquare, CheckCircle2, Calendar, Send, ArrowRight } from 'lucide-react';

export const EditorialPipeline: React.FC = () => {
  const { stories, pipelineFilter, setPipelineFilter, setActiveView } = useEditorial();

  const stages: { id: StoryStatus; label: string; icon: React.ElementType; color: string; badgeColor: string }[] = [
    { id: 'draft', label: 'DRAFT', icon: FileEdit, color: 'text-slate-600', badgeColor: 'bg-slate-100 text-slate-700' },
    { id: 'review', label: 'REVIEW', icon: CheckSquare, color: 'text-amber-600', badgeColor: 'bg-amber-100 text-amber-800' },
    { id: 'approved', label: 'APPROVED', icon: CheckCircle2, color: 'text-indigo-600', badgeColor: 'bg-indigo-100 text-indigo-800' },
    { id: 'scheduled', label: 'SCHEDULED', icon: Calendar, color: 'text-sky-600', badgeColor: 'bg-sky-100 text-sky-800' },
    { id: 'published', label: 'PUBLISHED', icon: Send, color: 'text-emerald-600', badgeColor: 'bg-emerald-100 text-emerald-800' }
  ];

  const totalStories = stories.length || 1;

  const handleStageClick = (stageId: StoryStatus) => {
    if (pipelineFilter === stageId) {
      setPipelineFilter(null);
    } else {
      setPipelineFilter(stageId);
      setActiveView('content_all');
    }
  };

  return (
    <div 
      id="editorial-pipeline-rail" 
      className="p-5 rounded-2xl bg-white/90 border border-slate-200/80 shadow-xs mb-6"
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 mb-4 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="font-editorial text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
              EDITORIAL PIPELINE
            </h2>
            <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
              Flow Rail
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-0.5">
            Click any stage to filter stories across the production pipeline.
          </p>
        </div>

        {pipelineFilter && (
          <button
            id="clear-pipeline-filter-btn"
            onClick={() => setPipelineFilter(null)}
            className="text-xs font-semibold text-sky-700 hover:text-sky-900 bg-sky-50 hover:bg-sky-100 px-2.5 py-1 rounded-lg transition-colors border border-sky-200 self-start sm:self-auto"
          >
            Filtered by: <span className="uppercase">{pipelineFilter}</span> (Clear)
          </button>
        )}
      </div>

      {/* Visual Editorial Rail Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
        {stages.map((stage) => {
          const Icon = stage.icon;
          const stageStories = stories.filter((s) => s.status === stage.id);
          const count = stageStories.length;
          const latestStory = stageStories[0];
          const percent = Math.round((count / totalStories) * 100);
          const isSelected = pipelineFilter === stage.id;

          return (
            <button
              key={stage.id}
              id={`pipeline-stage-${stage.id}`}
              onClick={() => handleStageClick(stage.id)}
              className={`p-3.5 rounded-xl border text-left transition-all flex flex-col justify-between group ${
                isSelected
                  ? 'bg-sky-50/90 border-sky-400 ring-2 ring-sky-200 shadow-sm'
                  : 'bg-slate-50/70 hover:bg-white hover:border-sky-300 hover:shadow-2xs border-slate-200/80'
              }`}
            >
              {/* Stage Top Bar */}
              <div>
                <div className="flex items-center justify-between gap-1 mb-2">
                  <div className="flex items-center gap-1.5">
                    <Icon className={`w-4 h-4 ${stage.color}`} />
                    <span className="text-xs font-bold tracking-wider uppercase text-slate-800">
                      {stage.label}
                    </span>
                  </div>
                  <span className={`text-[11px] font-bold font-data px-2 py-0.5 rounded-full ${stage.badgeColor}`}>
                    {count}
                  </span>
                </div>

                {/* Progress Mini Bar */}
                <div className="w-full bg-slate-200/70 h-1.5 rounded-full overflow-hidden mb-2.5">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${
                      stage.id === 'published'
                        ? 'bg-emerald-500'
                        : stage.id === 'scheduled'
                        ? 'bg-sky-500'
                        : stage.id === 'approved'
                        ? 'bg-indigo-500'
                        : stage.id === 'review'
                        ? 'bg-amber-500'
                        : 'bg-slate-400'
                    }`}
                    style={{ width: `${Math.max(percent, 8)}%` }}
                  ></div>
                </div>
              </div>

              {/* Latest Story Preview in this Stage */}
              <div className="pt-2 border-t border-slate-200/60 mt-1">
                <span className="text-[10px] text-slate-600 uppercase font-bold tracking-wider block mb-0.5">
                  Latest:
                </span>
                {latestStory ? (
                  <div className="text-xs font-medium text-slate-800 line-clamp-1 group-hover:text-sky-900">
                    {latestStory.title}
                  </div>
                ) : (
                  <div className="text-xs text-slate-600 italic">No pieces currently</div>
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
