import React from 'react';
import Modal from './Modal';
import { AlertTriangle } from 'lucide-react';

export default function ConfirmDialog({ isOpen, onClose, onConfirm, title, message, confirmText = "Delete", isDanger = true }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title={title} maxWidth="max-w-md">
      <div className="flex items-start gap-4">
        <div className={`p-3 rounded-xl shrink-0 ${isDanger ? 'bg-rose-100 dark:bg-rose-950/50 text-rose-600 dark:text-rose-400' : 'bg-amber-100 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400'}`}>
          <AlertTriangle className="w-6 h-6" />
        </div>
        <div className="space-y-2">
          <p className="text-sm text-slate-600 dark:text-slate-300">
            {message}
          </p>
        </div>
      </div>

      <div className="flex items-center justify-end gap-3 mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
        <button
          onClick={onClose}
          className="px-4 py-2 text-sm font-medium rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors"
        >
          Cancel
        </button>
        <button
          onClick={() => {
            onConfirm();
            onClose();
          }}
          className={`px-4 py-2 text-sm font-medium rounded-xl text-white shadow-md transition-all ${
            isDanger
              ? 'bg-rose-600 hover:bg-rose-700 shadow-rose-500/20'
              : 'bg-brand-600 hover:bg-brand-700 shadow-brand-500/20'
          }`}
        >
          {confirmText}
        </button>
      </div>
    </Modal>
  );
}
