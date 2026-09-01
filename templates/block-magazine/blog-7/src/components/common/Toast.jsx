import React from 'react';
import { useMagazine } from '../../context/MagazineContext';
import { CheckCircle2, Bookmark, Info } from 'lucide-react';

export function Toast() {
  const { toastMessage } = useMagazine();

  if (!toastMessage) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounce-in">
      <div className="flex items-center gap-3 bg-[#141413] text-[#FAF9F5] px-4 py-3 shadow-2xl border-l-4 border-[#D43825]">
        <CheckCircle2 className="w-4 h-4 text-[#D43825] shrink-0" />
        <span className="text-xs font-medium tracking-wide">{toastMessage}</span>
      </div>
    </div>
  );
}
