import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FileText,
  Download,
  Calendar,
  BarChart3,
  TrendingUp,
  Clock,
  Sparkles,
  CheckCircle2
} from 'lucide-react';

import Breadcrumb from '../components/common/Breadcrumb';
import { initialReports, downloadMockCSV } from '../mockData/reports';
import { useApp } from '../context/AppContext';

export default function ReportsPage() {
  const { addToast } = useApp();
  const [reports, setReports] = useState(initialReports);
  const [dateRange, setDateRange] = useState('Aug 2026');
  const [generating, setGenerating] = useState(false);

  const handleGenerateReport = (reportTitle) => {
    setGenerating(true);
    addToast(`Compiling telemetry data for "${reportTitle}"...`, 'info');
    setTimeout(() => {
      setGenerating(false);
      addToast(`"${reportTitle}" compiled and ready for export!`, 'success');
    }, 1200);
  };

  const handleDownloadCSV = (rep) => {
    const csvRows = [
      ["Report Title", "Category", "Period", "Metric Name", "Metric Value"],
      [rep.title, rep.category, rep.period, "Primary Metric", JSON.stringify(rep.metrics)]
    ];
    downloadMockCSV(`${rep.id.toLowerCase()}-${rep.category.toLowerCase().replace(' ', '-')}.csv`, csvRows);
    addToast(`Downloaded ${rep.title} CSV file!`, 'success');
  };

  return (
    <div className="space-y-8">
      <Breadcrumb />

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Audit & Compliance Reports
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Generate executive summaries, revenue exports, and user growth telemetry datasets
          </p>
        </div>

        {/* Date Selector */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-3.5 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-300">
            <Calendar className="w-4 h-4 text-brand-500" />
            <select
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
              className="bg-transparent border-none focus:outline-none cursor-pointer"
            >
              <option value="Aug 2026">August 2026</option>
              <option value="Q2 2026">Q2 2026</option>
              <option value="YTD 2026">Year to Date 2026</option>
            </select>
          </div>
        </div>
      </div>

      {/* REPORT CARDS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reports.map((rep) => (
          <motion.div
            key={rep.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-2xl p-6 shadow-sm hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider bg-brand-50 text-brand-600 dark:bg-brand-950/50 dark:text-brand-400 border border-brand-200 dark:border-brand-900/50">
                  {rep.category}
                </span>
                <span className="text-xs text-slate-400 font-semibold">{rep.size}</span>
              </div>

              <h3 className="font-extrabold text-lg text-slate-900 dark:text-white">
                {rep.title}
              </h3>
              <p className="text-xs text-slate-400 mt-1">Period: {rep.period}</p>

              {/* Key Metrics Preview */}
              <div className="mt-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 space-y-2">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Key Insights</p>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {Object.entries(rep.metrics).map(([key, val]) => (
                    <div key={key}>
                      <span className="text-slate-400 capitalize">{key}: </span>
                      <span className="font-extrabold text-slate-800 dark:text-slate-200">{val}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-3">
              <button
                onClick={() => handleGenerateReport(rep.title)}
                disabled={generating}
                className="flex-1 py-2.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5 text-brand-500" />
                <span>Generate</span>
              </button>

              <button
                onClick={() => handleDownloadCSV(rep)}
                className="py-2.5 px-4 bg-brand-600 hover:bg-brand-700 text-white text-xs font-bold rounded-xl shadow-md shadow-brand-500/20 transition-all flex items-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Export CSV</span>
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
