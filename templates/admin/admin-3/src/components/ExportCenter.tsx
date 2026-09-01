import React, { useState } from 'react';
import { Story, HistoryItem } from '../types';
import { Download, FileSpreadsheet, FileCode, Check } from 'lucide-react';

interface ExportCenterProps {
  stories: Story[];
  history: HistoryItem[];
}

export const ExportCenter: React.FC<ExportCenterProps> = ({ stories, history }) => {
  const [downloading, setDownloading] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  const handleExport = (type: string, format: 'csv' | 'json') => {
    setDownloading(type);
    setTimeout(() => {
      let dataStr = '';
      let filename = `arctic-frost-${type}-${Date.now()}.${format}`;

      if (type === 'stories') {
        if (format === 'json') {
          dataStr = JSON.stringify(stories, null, 2);
        } else {
          const headers = 'ID,Title,Author,Category,Status,Reads,CompletionRate,PublishedDate\n';
          const rows = stories.map(s => `"${s.id}","${s.title.replace(/"/g, '""')}","${s.author}","${s.category}","${s.status}",${s.reads},${s.completionRate},"${s.publishedDate || ''}"`).join('\n');
          dataStr = headers + rows;
        }
      } else {
        if (format === 'json') {
          dataStr = JSON.stringify(history, null, 2);
        } else {
          const headers = 'ID,Action,Category,Timestamp\n';
          const rows = history.map(h => `"${h.id}","${h.action.replace(/"/g, '""')}","${h.category}","${h.timestamp}"`).join('\n');
          dataStr = headers + rows;
        }
      }

      const blob = new Blob([dataStr], { type: format === 'json' ? 'application/json' : 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.setAttribute('href', url);
      link.setAttribute('download', filename);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setDownloading(null);
      setSuccessMsg(`Successfully downloaded ${filename}`);
      setTimeout(() => setSuccessMsg(null), 3000);
    }, 600);
  };

  return (
    <div className="bg-white border border-[#DCE7EC] rounded-2xl p-6 shadow-2xs space-y-6 max-w-3xl mx-auto">
      <div className="flex items-center justify-between border-b border-[#DCE7EC] pb-4">
        <div className="flex items-center gap-2">
          <Download size={20} className="text-[#183B56]" />
          <div>
            <span className="text-[10px] font-mono font-bold text-[#718096] uppercase tracking-wider">Data Extraction</span>
            <h3 className="font-serif font-bold text-[#183B56] text-xl">Export Center</h3>
          </div>
        </div>
        {successMsg && (
          <span className="flex items-center gap-1 text-xs font-mono font-semibold text-[#5FAF8A] bg-[#5FAF8A]/10 px-3 py-1 rounded-xl border border-[#5FAF8A]/30">
            <Check size={14} /> {successMsg}
          </span>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        
        <div className="p-5 bg-[#F5F9FB] border border-[#DCE7EC] rounded-2xl space-y-3">
          <div className="flex items-center gap-2 text-[#183B56]">
            <FileSpreadsheet size={20} />
            <h4 className="font-serif font-bold text-sm">Stories Dataset (CSV)</h4>
          </div>
          <p className="text-xs text-[#718096]">Complete archive records including reads, completion rates, authors, and statuses.</p>
          <button
            onClick={() => handleExport('stories', 'csv')}
            disabled={downloading === 'stories'}
            className="w-full py-2 bg-[#183B56] hover:bg-[#203040] text-white rounded-xl text-xs font-semibold transition-all shadow-sm"
          >
            {downloading === 'stories' ? 'Preparing Report...' : 'Download Stories CSV'}
          </button>
        </div>

        <div className="p-5 bg-[#F5F9FB] border border-[#DCE7EC] rounded-2xl space-y-3">
          <div className="flex items-center gap-2 text-[#183B56]">
            <FileCode size={20} />
            <h4 className="font-serif font-bold text-sm">Stories JSON Export</h4>
          </div>
          <p className="text-xs text-[#718096]">Structured JSON payload for downstream newsroom syndication and backups.</p>
          <button
            onClick={() => handleExport('stories', 'json')}
            disabled={downloading === 'stories-json'}
            className="w-full py-2 bg-[#183B56] hover:bg-[#203040] text-white rounded-xl text-xs font-semibold transition-all shadow-sm"
          >
            {downloading === 'stories-json' ? 'Preparing Report...' : 'Download Stories JSON'}
          </button>
        </div>

        <div className="p-5 bg-[#F5F9FB] border border-[#DCE7EC] rounded-2xl space-y-3">
          <div className="flex items-center gap-2 text-[#183B56]">
            <FileSpreadsheet size={20} />
            <h4 className="font-serif font-bold text-sm">Editorial Activity (CSV)</h4>
          </div>
          <p className="text-xs text-[#718096]">Audit log of administrative actions, reviews, publications, and assignments.</p>
          <button
            onClick={() => handleExport('activity', 'csv')}
            disabled={downloading === 'activity'}
            className="w-full py-2 bg-[#183B56] hover:bg-[#203040] text-white rounded-xl text-xs font-semibold transition-all shadow-sm"
          >
            {downloading === 'activity' ? 'Preparing Report...' : 'Download Activity CSV'}
          </button>
        </div>

        <div className="p-5 bg-[#F5F9FB] border border-[#DCE7EC] rounded-2xl space-y-3">
          <div className="flex items-center gap-2 text-[#183B56]">
            <FileCode size={20} />
            <h4 className="font-serif font-bold text-sm">Reader Summary (JSON)</h4>
          </div>
          <p className="text-xs text-[#718096]">Aggregated subscriber engagement and momentum analytics.</p>
          <button
            onClick={() => handleExport('readers', 'json')}
            disabled={downloading === 'readers'}
            className="w-full py-2 bg-[#183B56] hover:bg-[#203040] text-white rounded-xl text-xs font-semibold transition-all shadow-sm"
          >
            {downloading === 'readers' ? 'Preparing Report...' : 'Download Reader JSON'}
          </button>
        </div>

      </div>
    </div>
  );
};
