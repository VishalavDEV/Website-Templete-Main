import React from 'react';
import { AlertTriangle } from 'lucide-react';
import Modal from './Modal';

interface ConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
  confirmLabel?: string;
  cancelLabel?: string;
  isDanger?: boolean;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
  confirmLabel = 'Confirm',
  cancelLabel = 'Cancel',
  isDanger = true,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title={title}>
      <div className="flex items-start gap-4">
        <div
          className={`flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-xl ${
            isDanger ? 'bg-red-50 text-red-500' : 'bg-amber-50 text-amber-500'
          }`}
        >
          <AlertTriangle className="h-5 w-5" />
        </div>
        <div className="flex-1">
          <p className="text-sm text-slate-500 leading-relaxed">{message}</p>
        </div>
      </div>
      <div className="mt-6 flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
        <button
          onClick={onClose}
          className="px-4 py-2 text-sm font-medium text-slate-600 bg-slate-50 hover:bg-slate-100 rounded-xl transition-all active:scale-95"
        >
          {cancelLabel}
        </button>
        <button
          onClick={() => {
            onConfirm();
            onClose();
          }}
          className={`px-4 py-2 text-sm font-medium text-white rounded-xl transition-all shadow-sm active:scale-95 ${
            isDanger
              ? 'bg-red-600 hover:bg-red-700 shadow-red-100 hover:shadow-red-200'
              : 'bg-indigo-600 hover:bg-indigo-700 shadow-indigo-100 hover:shadow-indigo-200'
          }`}
        >
          {confirmLabel}
        </button>
      </div>
    </Modal>
  );
};

export default ConfirmationModal;
