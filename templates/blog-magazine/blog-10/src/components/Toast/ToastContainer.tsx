import React from 'react';
import { useAppContext } from '../../store/AppContext';
import { CheckCircle2, Info, AlertCircle } from 'lucide-react';

export const ToastContainer: React.FC = () => {
  const { toasts } = useAppContext();

  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2 pointer-events-none max-w-sm w-full">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="pointer-events-auto p-4 rounded-2xl bg-[#121214]/95 border border-zinc-800 text-white backdrop-blur-xl shadow-2xl flex items-center gap-3 animate-in slide-in-from-bottom-5 fade-in duration-300"
        >
          {toast.type === 'success' && <CheckCircle2 className="w-5 h-5 text-[#F27D26] shrink-0" />}
          {toast.type === 'warning' && <AlertCircle className="w-5 h-5 text-[#F27D26] shrink-0" />}
          {toast.type === 'info' && <Info className="w-5 h-5 text-[#F27D26] shrink-0" />}
          <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
            {toast.message}
          </span>
        </div>
      ))}
    </div>
  );
};
