import React, { useState } from 'react';
import { useEditorial } from '../services/editorialStore';
import { X, Download, FileSpreadsheet, FileCode, FileText, Loader2, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export const ExportReportModal: React.FC = () => {
  const { isExportModalOpen, setIsExportModalOpen, exportReport } = useEditorial();

  const [format, setFormat] = useState<'csv' | 'json' | 'summary'>('csv');
  const [dateScope, setDateScope] = useState('30d');
  const [isExporting, setIsExporting] = useState(false);
  const [isDone, setIsDone] = useState(false);

  if (!isExportModalOpen) return null;

  const handleClose = () => {
    setIsExportModalOpen(false);
    setIsDone(false);
  };

  const handleRunExport = async () => {
    setIsExporting(true);
    try {
      await exportReport(format, dateScope);
      setIsDone(true);
      setTimeout(() => {
        handleClose();
      }, 1200);
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div 
      id="export-report-modal-overlay"
      className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 overflow-y-auto"
      onClick={handleClose}
    >
      <motion.div
        id="export-report-modal"
        initial={{ opacity: 0, scale: 0.96, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 16 }}
        transition={{ duration: 0.2 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white text-slate-900 w-full max-w-lg rounded-2xl shadow-2xl border border-sky-100 overflow-hidden flex flex-col"
      >
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50 shrink-0">
          <div className="flex items-center gap-2">
            <Download className="w-5 h-5 text-sky-600" />
            <h2 className="font-serif text-lg font-bold text-slate-900">
              Export Editorial Report
            </h2>
          </div>
          <button
            id="close-export-modal-btn"
            onClick={handleClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-4">
          
          {/* Format Options */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              Export File Format *
            </label>
            <div className="grid grid-cols-3 gap-2.5">
              
              <button
                type="button"
                id="export-format-csv-btn"
                onClick={() => setFormat('csv')}
                className={`p-3 rounded-xl border text-center transition-all flex flex-col items-center justify-center gap-1.5 cursor-pointer ${
                  format === 'csv'
                    ? 'bg-sky-50 border-sky-300 text-sky-950 ring-1 ring-sky-200 font-bold shadow-xs'
                    : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-white'
                }`}
              >
                <FileSpreadsheet className={`w-5 h-5 ${format === 'csv' ? 'text-sky-600' : 'text-slate-400'}`} />
                <span className="text-xs">CSV Data</span>
                <span className="text-[10px] text-slate-500 font-normal">Spreadsheet rows</span>
              </button>

              <button
                type="button"
                id="export-format-json-btn"
                onClick={() => setFormat('json')}
                className={`p-3 rounded-xl border text-center transition-all flex flex-col items-center justify-center gap-1.5 cursor-pointer ${
                  format === 'json'
                    ? 'bg-sky-50 border-sky-300 text-sky-950 ring-1 ring-sky-200 font-bold shadow-xs'
                    : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-white'
                }`}
              >
                <FileCode className={`w-5 h-5 ${format === 'json' ? 'text-sky-600' : 'text-slate-400'}`} />
                <span className="text-xs">JSON Schema</span>
                <span className="text-[10px] text-slate-500 font-normal">Full repository dump</span>
              </button>

              <button
                type="button"
                id="export-format-summary-btn"
                onClick={() => setFormat('summary')}
                className={`p-3 rounded-xl border text-center transition-all flex flex-col items-center justify-center gap-1.5 cursor-pointer ${
                  format === 'summary'
                    ? 'bg-sky-50 border-sky-300 text-sky-950 ring-1 ring-sky-200 font-bold shadow-xs'
                    : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-white'
                }`}
              >
                <FileText className={`w-5 h-5 ${format === 'summary' ? 'text-sky-600' : 'text-slate-400'}`} />
                <span className="text-xs">Editorial Summary</span>
                <span className="text-[10px] text-slate-500 font-normal">Executive brief</span>
              </button>

            </div>
          </div>

          {/* Date Scope */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Data Horizon Scope
            </label>
            <select
              id="export-date-scope-select"
              value={dateScope}
              onChange={(e) => setDateScope(e.target.value)}
              className="w-full px-3 py-2 text-xs border border-slate-200 rounded-lg focus:ring-2 focus:ring-sky-400 focus:outline-none bg-slate-50 text-slate-900 cursor-pointer"
            >
              <option value="7d">Past 7 Days (Current Cycle)</option>
              <option value="30d">Past 30 Days (Monthly Volume)</option>
              <option value="90d">Past Quarter (90 Days)</option>
              <option value="all">Full Archival History</option>
            </select>
          </div>

          {/* Progress Box during export */}
          {isExporting && (
            <div className="p-4 rounded-xl bg-sky-50 border border-sky-200 flex items-center gap-3 text-xs text-sky-950">
              <Loader2 className="w-5 h-5 animate-spin text-sky-600 shrink-0" />
              <div>
                <div className="font-bold">Compiling Science Analytics...</div>
                <div className="text-[11px] text-sky-800">Calculating reading metrics, author outputs, and attention logs.</div>
              </div>
            </div>
          )}

          {isDone && (
            <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center gap-3 text-xs text-emerald-950">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              <div>
                <div className="font-bold uppercase tracking-wider">Report Ready</div>
                <div className="text-[11px] text-emerald-800">Your browser download has started automatically.</div>
              </div>
            </div>
          )}

          {/* Footer */}
          <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
            <button
              id="cancel-export-btn"
              type="button"
              onClick={handleClose}
              className="px-4 py-2 rounded-lg text-xs font-semibold text-slate-600 hover:bg-slate-200 transition-colors cursor-pointer"
            >
              Cancel
            </button>

            <button
              id="confirm-run-export-btn"
              onClick={handleRunExport}
              disabled={isExporting}
              className="flex items-center gap-2 px-5 py-2 rounded-lg bg-sky-500 hover:bg-sky-600 active:bg-sky-700 text-white text-xs font-semibold shadow-sm disabled:opacity-50 transition-all cursor-pointer"
            >
              {isExporting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Preparing Report...</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4" />
                  <span>Export Report Now</span>
                </>
              )}
            </button>
          </div>

        </div>
      </motion.div>
    </div>
  );
};
