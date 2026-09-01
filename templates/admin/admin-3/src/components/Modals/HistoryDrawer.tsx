import React from 'react';
import { HistoryItem } from '../../types';
import { X, History, Trash2 } from 'lucide-react';

interface HistoryDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  history: HistoryItem[];
  onClearHistory: () => void;
}

export const HistoryDrawer: React.FC<HistoryDrawerProps> = ({
  isOpen,
  onClose,
  history,
  onClearHistory
}) => {
  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-[#203040]/30 backdrop-blur-xs z-50" onClick={onClose} />
      
      <div className="fixed inset-y-0 right-0 z-50 w-full max-w-md bg-white border-l border-[#DCE7EC] shadow-xl flex flex-col">
        
        <div className="p-5 border-b border-[#DCE7EC] flex items-center justify-between bg-[#F5F9FB]">
          <div className="flex items-center gap-2">
            <History size={18} className="text-[#183B56]" />
            <h3 className="font-serif font-bold text-[#183B56] text-lg">Command History</h3>
          </div>
          <button onClick={onClose} className="p-2 text-[#718096] hover:bg-white rounded-xl border border-[#DCE7EC]">
            <X size={18} />
          </button>
        </div>

        <div className="p-4 border-b border-[#DCE7EC] bg-white flex items-center justify-between">
          <span className="text-xs font-mono text-[#718096]">Recent administrative actions</span>
          {history.length > 0 && (
            <button
              onClick={onClearHistory}
              className="flex items-center gap-1 text-xs font-semibold text-[#D97878] hover:underline"
            >
              <Trash2 size={13} /> Clear history
            </button>
          )}
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {history.length === 0 ? (
            <div className="text-center py-12 text-[#718096] text-xs">No recent command history.</div>
          ) : (
            history.map(item => (
              <div key={item.id} className="p-3.5 bg-[#F5F9FB] border border-[#DCE7EC] rounded-xl space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono bg-white px-2 py-0.5 rounded text-[#183B56] border border-[#DCE7EC]">
                    {item.category}
                  </span>
                  <span className="text-[10px] font-mono text-[#718096]">{item.timestamp}</span>
                </div>
                <p className="text-xs text-[#203040] font-medium">{item.action}</p>
              </div>
            ))
          )}
        </div>

      </div>
    </>
  );
};
