import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, Clock, FileText, Trash2, ArrowRight } from 'lucide-react';
import { ContactSubmissionRecord } from '../types';
import { mockApi } from '../services/mockApi';
import { audioService } from '../utils/audio';

interface SubmissionHistoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateToContact: () => void;
}

export function SubmissionHistoryModal({ isOpen, onClose, onNavigateToContact }: SubmissionHistoryModalProps) {
  const [history, setHistory] = useState<ContactSubmissionRecord[]>([]);

  useEffect(() => {
    if (isOpen) {
      setHistory(mockApi.getSubmissionHistory());
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleClearHistory = () => {
    try {
      localStorage.removeItem('horizon_inquiries_v1');
      setHistory([]);
      audioService.playClick();
    } catch (e) {
      console.error(e);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[105] flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
          onClick={onClose}
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="relative w-full max-w-xl bg-[#11131C] border border-white/10 rounded-2xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[85vh]"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/8 bg-[#151824]">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-violet-500/20 text-violet-400 flex items-center justify-center border border-violet-500/30">
                <FileText className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-white">Project Inquiries Record</h3>
                <p className="text-xs text-gray-400">Stored locally in your browser workspace</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6 overflow-y-auto space-y-4 flex-1">
            {history.length === 0 ? (
              <div className="py-12 text-center text-gray-400">
                <Clock className="w-10 h-10 mx-auto mb-3 opacity-30 text-violet-400" />
                <h4 className="text-sm font-medium text-gray-200">No project briefs submitted yet</h4>
                <p className="text-xs text-gray-500 max-w-xs mx-auto mt-1 mb-5">
                  When you submit a project brief through our 7-step wizard, your reference ID and submission details will appear here.
                </p>
                <button
                  onClick={() => {
                    onClose();
                    onNavigateToContact();
                  }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-xs font-semibold uppercase tracking-wider transition-all"
                >
                  <span>Start a Project Brief</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : (
              history.map((record) => (
                <div
                  key={record.id}
                  className="p-4 rounded-xl bg-[#161925] border border-white/8 hover:border-violet-500/30 transition-all space-y-3"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-bold text-violet-400">
                          {record.referenceId}
                        </span>
                        <span className="inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-950/80 text-emerald-400 border border-emerald-800/40">
                          <CheckCircle2 className="w-3 h-3" />
                          {record.status}
                        </span>
                      </div>
                      <h4 className="text-sm font-medium text-white mt-1">
                        {record.name} {record.company ? `(${record.company})` : ''}
                      </h4>
                      <p className="text-xs text-gray-400">{record.email}</p>
                    </div>
                    <span className="text-[11px] font-mono text-gray-500">
                      {new Date(record.submittedAt).toLocaleDateString()}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {record.services.map((srv, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/5 text-gray-300 border border-white/5"
                      >
                        {srv}
                      </span>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs font-mono bg-black/20 p-2.5 rounded-lg border border-white/5">
                    <div>
                      <span className="text-gray-500 block text-[10px] uppercase">Budget</span>
                      <span className="text-gray-200">{record.budget}</span>
                    </div>
                    <div>
                      <span className="text-gray-500 block text-[10px] uppercase">Timeline</span>
                      <span className="text-gray-200">{record.timeline}</span>
                    </div>
                  </div>

                  {record.details && (
                    <p className="text-xs text-gray-400 italic line-clamp-2 border-l-2 border-violet-500/40 pl-2">
                      "{record.details}"
                    </p>
                  )}
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          {history.length > 0 && (
            <div className="px-6 py-3 bg-[#151824] border-t border-white/8 flex items-center justify-between">
              <button
                onClick={handleClearHistory}
                className="inline-flex items-center gap-1.5 text-xs text-rose-400/80 hover:text-rose-300 font-mono transition-colors"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Clear Local History</span>
              </button>
              <button
                onClick={() => {
                  onClose();
                  onNavigateToContact();
                }}
                className="inline-flex items-center gap-1.5 text-xs text-violet-400 hover:text-violet-300 font-medium"
              >
                <span>New Project Brief</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
