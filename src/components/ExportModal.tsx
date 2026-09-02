import React, { useState } from 'react';
import { X, Download, FileText, Table, Check, Sparkles } from 'lucide-react';

interface ExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  timeframe: string;
}

export function ExportModal({ isOpen, onClose, timeframe }: ExportModalProps) {
  const [format, setFormat] = useState<'pdf' | 'csv' | 'xlsx'>('pdf');
  const [isExporting, setIsExporting] = useState(false);
  const [exported, setExported] = useState(false);

  if (!isOpen) return null;

  const handleExport = () => {
    setIsExporting(true);
    setTimeout(() => {
      setIsExporting(false);
      setExported(true);
      setTimeout(() => {
        setExported(false);
        onClose();
      }, 1500);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-in fade-in">
      <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-gray-100 relative animate-in zoom-in-95">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
            <Download className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-bold text-gray-900">Export Reports</h3>
            <p className="text-xs text-gray-400">Download training and telemetry metrics</p>
          </div>
        </div>

        {/* Selected Scope */}
        <div className="bg-gray-50 rounded-2xl p-3.5 mb-5 text-xs text-gray-600 flex items-center justify-between border border-gray-100">
          <span className="font-medium text-gray-500">Current Scope:</span>
          <span className="font-bold text-gray-900 bg-white px-2.5 py-1 rounded-lg border border-gray-200 shadow-2xs">
            {timeframe}
          </span>
        </div>

        {/* Format Selection */}
        <div className="space-y-2 mb-6">
          <label className="text-xs font-bold text-gray-700 block mb-1">
            Choose Export Format
          </label>
          <div className="grid grid-cols-3 gap-2.5">
            <button
              type="button"
              onClick={() => setFormat('pdf')}
              className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                format === 'pdf'
                  ? 'border-blue-600 bg-blue-50/50 text-blue-700 font-bold shadow-2xs'
                  : 'border-gray-200 hover:border-gray-300 text-gray-700'
              }`}
            >
              <FileText className="w-4 h-4 mx-auto mb-1.5 text-red-500" />
              <span className="text-xs block">PDF Report</span>
            </button>

            <button
              type="button"
              onClick={() => setFormat('csv')}
              className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                format === 'csv'
                  ? 'border-blue-600 bg-blue-50/50 text-blue-700 font-bold shadow-2xs'
                  : 'border-gray-200 hover:border-gray-300 text-gray-700'
              }`}
            >
              <Table className="w-4 h-4 mx-auto mb-1.5 text-emerald-600" />
              <span className="text-xs block">CSV Data</span>
            </button>

            <button
              type="button"
              onClick={() => setFormat('xlsx')}
              className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                format === 'xlsx'
                  ? 'border-blue-600 bg-blue-50/50 text-blue-700 font-bold shadow-2xs'
                  : 'border-gray-200 hover:border-gray-300 text-gray-700'
              }`}
            >
              <Sparkles className="w-4 h-4 mx-auto mb-1.5 text-indigo-500" />
              <span className="text-xs block">Excel Sheet</span>
            </button>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 py-2.5 px-4 rounded-xl text-xs font-semibold text-gray-600 hover:bg-gray-100 transition-colors"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleExport}
            disabled={isExporting || exported}
            className="flex-1 py-2.5 px-4 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 active:scale-98 transition-all flex items-center justify-center gap-2 shadow-sm disabled:opacity-75 cursor-pointer"
          >
            {isExporting ? (
              <span className="inline-block animate-spin">⏳</span>
            ) : exported ? (
              <>
                <Check className="w-4 h-4" />
                <span>Downloaded!</span>
              </>
            ) : (
              <>
                <Download className="w-4 h-4" />
                <span>Generate Export</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
