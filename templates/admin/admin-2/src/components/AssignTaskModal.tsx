import React, { useState, useEffect } from 'react';
import { useEditorial } from '../services/editorialStore';
import { X, UserCheck, Loader2 } from 'lucide-react';
import { motion } from 'motion/react';

export const AssignTaskModal: React.FC = () => {
  const { 
    isAssignTaskModalOpen, 
    setIsAssignTaskModalOpen, 
    taskToAssign, 
    setTaskToAssign, 
    assignAttentionItem,
    assignTaskToAuthor,
    authors,
    stories 
  } = useEditorial();

  const [selectedAuthorId, setSelectedAuthorId] = useState(authors[0]?.id || 'auth_1');
  const [taskTitle, setTaskTitle] = useState('');
  const [relatedStoryId, setRelatedStoryId] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (taskToAssign) {
      setTaskTitle(taskToAssign.title);
      setRelatedStoryId(taskToAssign.relatedStoryId || '');
    } else {
      setTaskTitle('Review manuscript and verify references');
      setRelatedStoryId(stories[0]?.id || '');
    }
  }, [taskToAssign, stories]);

  if (!isAssignTaskModalOpen) return null;

  const handleClose = () => {
    setIsAssignTaskModalOpen(false);
    setTaskToAssign(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!taskTitle.trim()) return;

    setIsSubmitting(true);
    try {
      const author = authors.find((a) => a.id === selectedAuthorId) || authors[0];
      if (taskToAssign) {
        await assignAttentionItem(taskToAssign.id, author.name);
      } else {
        await assignTaskToAuthor(author.id, taskTitle, relatedStoryId || undefined);
      }
      handleClose();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div 
      id="assign-task-modal-overlay"
      className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 overflow-y-auto"
      onClick={handleClose}
    >
      <motion.div
        id="assign-task-modal"
        initial={{ opacity: 0, scale: 0.96, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 16 }}
        transition={{ duration: 0.2 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white text-slate-900 w-full max-w-lg rounded-2xl shadow-2xl border border-sky-100 overflow-hidden flex flex-col"
      >
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50 shrink-0">
          <div className="flex items-center gap-2">
            <UserCheck className="w-5 h-5 text-sky-600" />
            <h2 className="font-serif text-lg font-bold text-slate-900">
              Assign Editorial Task
            </h2>
          </div>
          <button
            id="close-assign-task-btn"
            onClick={handleClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {/* Task Title */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Task Description *
            </label>
            <input
              id="assign-task-title-input"
              type="text"
              required
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              className="w-full px-3.5 py-2 text-xs sm:text-sm border border-slate-200 rounded-lg focus:ring-2 focus:ring-sky-400 focus:outline-none bg-slate-50 text-slate-900"
            />
          </div>

          {/* Assignee Selection */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Assign to Staff Member *
            </label>
            <div className="space-y-2">
              {authors.map((author) => (
                <label
                  key={author.id}
                  className={`flex items-center justify-between p-2.5 rounded-xl border cursor-pointer transition-all ${
                    selectedAuthorId === author.id
                      ? 'bg-sky-50 border-sky-300 ring-1 ring-sky-200 shadow-xs'
                      : 'bg-slate-50 hover:bg-white border-slate-200'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <input
                      type="radio"
                      name="assignee"
                      checked={selectedAuthorId === author.id}
                      onChange={() => setSelectedAuthorId(author.id)}
                      className="text-sky-600 focus:ring-sky-400 cursor-pointer"
                    />
                    <img
                      src={author.avatar}
                      alt={author.name}
                      className="w-7 h-7 rounded-full object-cover ring-1 ring-sky-200"
                    />
                    <div>
                      <div className="text-xs font-bold text-slate-900">{author.name}</div>
                      <div className="text-[10px] text-slate-500">{author.role}</div>
                    </div>
                  </div>

                  <span className="text-[10px] font-semibold text-slate-500">
                    {author.activeAssignments} active tasks
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Related Story (Optional) */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Associated Manuscript (Optional)
            </label>
            <select
              id="assign-task-story-select"
              value={relatedStoryId}
              onChange={(e) => setRelatedStoryId(e.target.value)}
              className="w-full px-3 py-2 text-xs border border-slate-200 rounded-lg focus:ring-2 focus:ring-sky-400 focus:outline-none bg-slate-50 text-slate-900 cursor-pointer"
            >
              <option value="">-- None / General Editorial --</option>
              {stories.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.title} ({s.category})
                </option>
              ))}
            </select>
          </div>

          {/* Footer */}
          <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
            <button
              id="cancel-assign-task-btn"
              type="button"
              onClick={handleClose}
              className="px-4 py-2 rounded-lg text-xs font-semibold text-slate-600 hover:bg-slate-200 transition-colors cursor-pointer"
            >
              Cancel
            </button>

            <button
              id="confirm-assign-task-btn"
              type="submit"
              disabled={isSubmitting}
              className="flex items-center gap-2 px-5 py-2 rounded-lg bg-sky-500 hover:bg-sky-600 active:bg-sky-700 text-white text-xs font-semibold shadow-sm disabled:opacity-50 transition-all cursor-pointer"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Assigning...</span>
                </>
              ) : (
                <>
                  <UserCheck className="w-4 h-4" />
                  <span>Dispatch Assignment</span>
                </>
              )}
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};
