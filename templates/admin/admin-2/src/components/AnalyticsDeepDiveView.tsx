import React, { useState } from 'react';
import { useEditorial } from '../services/editorialStore';
import { 
  BarChart3, TrendingUp, Users, Compass, Eye, 
  Download, ArrowUpRight, Award, Sparkles, PieChart 
} from 'lucide-react';

export const AnalyticsDeepDiveView: React.FC = () => {
  const { stories, setIsExportModalOpen } = useEditorial();
  const [timeRange, setTimeRange] = useState('30d');

  const categories = [
    { name: 'Cosmology', percent: 34, reads: '41.2k', growth: '+18%' },
    { name: 'Quantum Physics', percent: 26, reads: '31.5k', growth: '+12%' },
    { name: 'Neuroscience', percent: 18, reads: '21.8k', growth: '+24%' },
    { name: 'Earth & Climate', percent: 12, reads: '14.5k', growth: '+8%' },
    { name: 'History of Science', percent: 10, reads: '12.1k', growth: '+15%' }
  ];

  const searchQueries = [
    { query: 'Henrietta Leavitt standard candles', count: '1,420 searches', conversion: '94% read through' },
    { query: 'James Webb deep field spectrum', count: '1,180 searches', conversion: '89% read through' },
    { query: 'Microbiome gut-brain neurotransmitters', count: '940 searches', conversion: '86% read through' },
    { query: 'Newton alchemy Bodleian manuscript', count: '780 searches', conversion: '92% read through' },
    { query: 'Quantum entanglement delayed choice', count: '650 searches', conversion: '81% read through' }
  ];

  return (
    <div id="analytics-deep-dive-view" className="space-y-6">
      
      {/* Header */}
      <div className="p-6 rounded-2xl bg-white border border-sky-50 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-sky-50 text-sky-600 border border-sky-100">
              <BarChart3 className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-serif text-xl font-bold text-slate-900">
                Audience &amp; Readership Intelligence
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Engagement depth, subscriber loyalty, completion rate analytics, and citation discovery telemetry.
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            id="export-analytics-btn"
            onClick={() => setIsExportModalOpen(true)}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-sky-50 hover:bg-sky-100 text-sky-900 text-xs font-semibold border border-sky-100 transition-colors cursor-pointer"
          >
            <Download className="w-4 h-4 text-sky-600" />
            <span>Export Metrics CSV</span>
          </button>
        </div>
      </div>

      {/* Metric Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-5 rounded-2xl bg-white border border-sky-50 shadow-sm">
          <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
            <span>Total Monthly Reads</span>
            <span className="text-emerald-700 font-bold bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-100">+14.2%</span>
          </div>
          <div className="text-2xl font-serif font-bold text-slate-900">128,400</div>
          <div className="text-[11px] text-slate-400 mt-1">Avg 6.4 min per session</div>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-sky-50 shadow-sm">
          <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
            <span>Dispatch Open Rate</span>
            <span className="text-emerald-700 font-bold bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-100">+4.8%</span>
          </div>
          <div className="text-2xl font-serif font-bold text-slate-900">62.8%</div>
          <div className="text-[11px] text-slate-400 mt-1">48,200 active science patrons</div>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-sky-50 shadow-sm">
          <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
            <span>Completion Depth</span>
            <span className="text-sky-700 font-bold bg-sky-50 px-1.5 py-0.5 rounded border border-sky-100">82.4%</span>
          </div>
          <div className="text-2xl font-serif font-bold text-slate-900">82.4%</div>
          <div className="text-[11px] text-slate-400 mt-1">Industry avg is ~41%</div>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-sky-50 shadow-sm">
          <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
            <span>Archival Citation Clicks</span>
            <span className="text-emerald-700 font-bold bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-100">+28%</span>
          </div>
          <div className="text-2xl font-serif font-bold text-slate-900">14,920</div>
          <div className="text-[11px] text-slate-400 mt-1">Harvard, ESO &amp; CERN sources</div>
        </div>
      </div>

      {/* Category Readership & Search Trends */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Category breakdown */}
        <div className="p-6 rounded-2xl bg-white border border-sky-50 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100">
              <h3 className="font-serif text-base font-bold text-slate-900">
                Category Readership Share
              </h3>
              <span className="text-xs text-slate-400 font-mono">30-Day Window</span>
            </div>

            <div className="space-y-3.5">
              {categories.map((c) => (
                <div key={c.name}>
                  <div className="flex items-center justify-between text-xs font-semibold mb-1">
                    <span className="text-slate-800">{c.name}</span>
                    <span className="text-slate-500">{c.reads} ({c.percent}%)</span>
                  </div>
                  <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-sky-500 h-full rounded-full"
                      style={{ width: `${c.percent}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100 mt-4 text-xs text-slate-500">
            Cosmology and Quantum Physics drive 60% of reader subscriptions.
          </div>
        </div>

        {/* Top Research Queries */}
        <div className="p-6 rounded-2xl bg-white border border-sky-50 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100">
              <h3 className="font-serif text-base font-bold text-slate-900">
                Top Archive Discovery Queries
              </h3>
              <span className="text-xs text-slate-400 font-mono">Organic Ingress</span>
            </div>

            <div className="space-y-3">
              {searchQueries.map((q, i) => (
                <div key={i} className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between gap-3 text-xs">
                  <div className="min-w-0">
                    <div className="font-semibold text-slate-900 truncate">"{q.query}"</div>
                    <div className="text-[11px] text-slate-400">{q.count}</div>
                  </div>
                  <span className="text-[11px] font-bold text-sky-800 bg-sky-50 px-2 py-0.5 rounded border border-sky-100 shrink-0">
                    {q.conversion}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100 mt-4 text-xs text-slate-500">
            Readers discover longform pieces predominantly through primary manuscript citations.
          </div>
        </div>

      </div>

    </div>
  );
};
