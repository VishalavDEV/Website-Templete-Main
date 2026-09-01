import React from 'react';
import { AlertTriangle, Trash2 } from 'lucide-react';
import { Modal } from './Modal';

interface ConfirmationDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title?: string;
  message?: string;
  confirmText?: string;
  cancelText?: string;
  variant?: 'danger' | 'warning';
}

export const ConfirmationDialog: React.FC<ConfirmationDialogProps> = ({
  isOpen,
  onClose,
  onConfirm,
  title = 'Are you sure?',
  message = 'This action cannot be undone. Are you sure you want to proceed?',
  confirmText = 'Delete Item',
  cancelText = 'Cancel',
  variant = 'danger',
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={title}
      size="sm"
      footer={
        <>
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
          >
            {cancelText}
          </button>
          <button
            onClick={() => {
              onConfirm();
              onClose();
            }}
            className={`px-4 py-2 text-sm font-semibold text-white rounded-lg shadow-sm transition-colors flex items-center gap-2 ${
              variant === 'danger'
                ? 'bg-rose-600 hover:bg-rose-700 dark:bg-rose-600 dark:hover:bg-rose-500'
                : 'bg-amber-600 hover:bg-amber-700 dark:bg-amber-600 dark:hover:bg-amber-500'
            }`}
          >
            <Trash2 className="w-4 h-4" />
            {confirmText}
          </button>
        </>
      }
    >
      <div className="flex items-start gap-4">
        <div
          className={`p-3 rounded-xl shrink-0 ${
            variant === 'danger'
              ? 'bg-rose-100 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400'
              : 'bg-amber-100 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400'
          }`}
        >
          <AlertTriangle className="w-6 h-6" />
        </div>
        <div>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            {message}
          </p>
        </div>
      </div>
    </Modal>
  );
};
