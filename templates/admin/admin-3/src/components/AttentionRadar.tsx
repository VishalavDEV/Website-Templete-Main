import React from 'react';
import { TaskItem } from '../types';
import { Check, Clock, ExternalLink, UserPlus, AlertCircle } from 'lucide-react';

interface AttentionRadarProps {
  tasks: TaskItem[];
  onUpdateTaskStatus: (taskId: string, status: 'pending' | 'snoozed' | 'completed') => void;
  onOpenStory?: (storyId?: string) => void;
  onAssignTask?: (taskId: string) => void;
}

export const AttentionRadar: React.FC<AttentionRadarProps> = ({
  tasks,
  onUpdateTaskStatus,
  onOpenStory,
  onAssignTask
}) => {
  const activeTasks = tasks.filter(t => t.status !== 'completed');

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case 'CRITICAL':
        return <span className="text-[10px] font-mono bg-[#D97878]/10 text-[#D97878] border border-[#D97878]/30 px-2 py-0.5 rounded font-bold">CRITICAL</span>;
      case 'HIGH':
        return <span className="text-[10px] font-mono bg-[#D6A85D]/10 text-[#D6A85D] border border-[#D6A85D]/30 px-2 py-0.5 rounded font-bold">HIGH</span>;
      default:
        return <span className="text-[10px] font-mono bg-[#6FAFD4]/10 text-[#183B56] border border-[#6FAFD4]/30 px-2 py-0.5 rounded font-bold">NORMAL</span>;
    }
  };

  return (
    <div className="bg-white border border-[#DCE7EC] rounded-2xl p-5 shadow-2xs space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <span className="text-[10px] font-mono font-bold text-[#718096] uppercase tracking-wider">Priority Queue</span>
          <h3 className="font-serif font-bold text-[#183B56] text-base">Attention Radar</h3>
        </div>
        <span className="text-xs font-mono bg-[#F5F9FB] px-2.5 py-1 rounded-lg border border-[#DCE7EC] text-[#183B56]">
          {activeTasks.length} Pending Tasks
        </span>
      </div>

      {activeTasks.length === 0 ? (
        <div className="text-center py-8 text-[#718096] text-xs">
          All editorial attention tasks completed successfully.
        </div>
      ) : (
        <div className="space-y-3">
          {activeTasks.map(task => (
            <div
              key={task.id}
              className="p-4 bg-[#F5F9FB] border border-[#DCE7EC] rounded-xl space-y-3 hover:border-[#6FAFD4] transition-all"
            >
              <div className="flex items-start justify-between gap-2">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    {getPriorityBadge(task.priority)}
                    <span className="text-[10px] font-mono text-[#718096]">{task.category}</span>
                  </div>
                  <p className="text-xs font-semibold text-[#203040]">{task.title}</p>
                </div>
                <span className="text-[10px] font-mono text-[#718096] whitespace-nowrap">{task.createdAt}</span>
              </div>

              {/* Actions: DONE, SNOOZE, OPEN, ASSIGN */}
              <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-[#DCE7EC]/60">
                <button
                  onClick={() => onUpdateTaskStatus(task.id, 'completed')}
                  className="flex items-center gap-1 px-2.5 py-1 bg-[#5FAF8A]/10 hover:bg-[#5FAF8A] text-[#5FAF8A] hover:text-white rounded-lg text-[11px] font-semibold transition-colors"
                >
                  <Check size={13} /> DONE
                </button>

                <button
                  onClick={() => onUpdateTaskStatus(task.id, 'snoozed')}
                  className="flex items-center gap-1 px-2.5 py-1 bg-white hover:bg-[#DCE7EC]/50 text-[#718096] hover:text-[#203040] border border-[#DCE7EC] rounded-lg text-[11px] font-semibold transition-colors"
                >
                  <Clock size={13} /> SNOOZE
                </button>

                {task.relatedStoryId && (
                  <button
                    onClick={() => onOpenStory && onOpenStory(task.relatedStoryId)}
                    className="flex items-center gap-1 px-2.5 py-1 bg-white hover:bg-[#DCE7EC]/50 text-[#183B56] border border-[#DCE7EC] rounded-lg text-[11px] font-semibold transition-colors"
                  >
                    <ExternalLink size={13} /> OPEN
                  </button>
                )}

                <button
                  onClick={() => onAssignTask && onAssignTask(task.id)}
                  className="flex items-center gap-1 px-2.5 py-1 bg-white hover:bg-[#DCE7EC]/50 text-[#183B56] border border-[#DCE7EC] rounded-lg text-[11px] font-semibold transition-colors ml-auto"
                >
                  <UserPlus size={13} /> {task.assignee || 'ASSIGN'}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
