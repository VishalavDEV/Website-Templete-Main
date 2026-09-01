import React, { useState } from 'react';
import { useEditorial } from '../services/editorialStore';
import { AttentionItem } from '../types';
import { 
  ShieldAlert, Check, Clock, ExternalLink, UserPlus, 
  Sparkles, CheckCircle2, AlertCircle, BookmarkCheck 
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const AttentionCenter: React.FC = () => {
  const { 
    attentionItems, 
    completeAttentionItem, 
    snoozeAttentionItem, 
    setTaskToAssign, 
    setIsAssignTaskModalOpen,
    stories,
    setPreviewStory,
    setEditingStory
  } = useEditorial();

  const [filterTab, setFilterTab] = useState<'pending' | 'snoozed' | 'completed'>('pending');

  const filteredItems = attentionItems.filter((item) => {
    if (filterTab === 'pending') return !item.completed && !item.snoozed;
    if (filterTab === 'snoozed') return !item.completed && item.snoozed;
    if (filterTab === 'completed') return item.completed;
    return true;
  });

  const pendingCount = attentionItems.filter((i) => !i.completed && !i.snoozed).length;
  const snoozedCount = attentionItems.filter((i) => !i.completed && i.snoozed).length;
  const completedCount = attentionItems.filter((i) => i.completed).length;

  const handleOpenItem = (item: AttentionItem) => {
    if (item.relatedStoryId) {
      const story = stories.find((s) => s.id === item.relatedStoryId);
      if (story) {
        setPreviewStory(story);
        return;
      }
    }
  };

  const handleAssignItem = (item: AttentionItem) => {
    setTaskToAssign(item);
    setIsAssignTaskModalOpen(true);
  };

  return (
    <div 
      id="attention-center-card" 
      className="bg-white rounded-2xl border border-sky-50 shadow-sm p-6 flex flex-col h-full"
    >
      {/* Header matching Artistic Flair theme */}
      <div className="text-sm font-bold tracking-tight mb-4 flex items-center justify-between">
        <span className="text-slate-900 uppercase">NEEDS ATTENTION</span>
        <span className="px-2 py-0.5 bg-rose-50 text-rose-500 rounded text-[10px] font-bold">
          {pendingCount} NEW
        </span>
      </div>

      {/* Attention Item List */}
      <div className="flex-1 overflow-y-auto space-y-3 pr-1">
        {filteredItems.length === 0 ? (
          <div className="py-8 text-center px-4 bg-slate-50 rounded-xl border border-dashed border-slate-200">
            <CheckCircle2 className="w-8 h-8 text-sky-500 mx-auto mb-2" />
            <p className="text-xs font-bold text-slate-800">
              All editorial items are clear!
            </p>
            <p className="text-[11px] text-slate-400 mt-0.5">
              The science editorial desk is running smoothly.
            </p>
          </div>
        ) : (
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => {
              return (
                <motion.div
                  key={item.id}
                  id={`attention-item-${item.id}`}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex flex-col"
                >
                  {/* Title & Priority */}
                  <div className="flex items-center justify-between gap-1 mb-1">
                    <div className="text-xs font-bold text-slate-800 line-clamp-1">
                      {item.title}
                    </div>
                    {item.priority === 'critical' && (
                      <span className="text-[9px] font-bold text-rose-600 uppercase bg-rose-100 px-1.5 py-0.2 rounded shrink-0">
                        Urgent
                      </span>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-[11px] text-slate-500 leading-tight mb-3">
                    {item.description}
                  </p>

                  {/* Artistic Flair Action Buttons */}
                  <div className="flex items-center justify-between gap-2 mt-auto">
                    <div className="flex space-x-2">
                      {!item.completed && (
                        <button
                          id={`attention-done-btn-${item.id}`}
                          onClick={() => completeAttentionItem(item.id)}
                          className="px-3 py-1 bg-white border border-slate-200 text-[10px] font-bold rounded-md hover:bg-slate-50 cursor-pointer transition-colors text-slate-700"
                        >
                          DONE
                        </button>
                      )}

                      {!item.completed && (
                        <button
                          id={`attention-snooze-btn-${item.id}`}
                          onClick={() => snoozeAttentionItem(item.id)}
                          className="px-3 py-1 bg-white border border-slate-200 text-[10px] font-bold rounded-md hover:bg-slate-50 cursor-pointer transition-colors text-slate-700"
                        >
                          {item.snoozed ? 'UNSNOOZE' : 'SNOOZE'}
                        </button>
                      )}
                    </div>

                    <div className="flex space-x-2">
                      {item.relatedStoryId && (
                        <button
                          id={`attention-open-btn-${item.id}`}
                          onClick={() => handleOpenItem(item)}
                          className="px-3 py-1 bg-sky-500 text-white text-[10px] font-bold rounded-md hover:bg-sky-600 cursor-pointer transition-colors shadow-2xs"
                        >
                          OPEN
                        </button>
                      )}

                      <button
                        id={`attention-assign-btn-${item.id}`}
                        onClick={() => handleAssignItem(item)}
                        className="px-3 py-1 bg-slate-200 text-slate-700 text-[10px] font-bold rounded-md hover:bg-slate-300 cursor-pointer transition-colors"
                      >
                        ASSIGN
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        )}
      </div>
    </div>
  );
};
