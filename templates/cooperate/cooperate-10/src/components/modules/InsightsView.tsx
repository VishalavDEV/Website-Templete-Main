import React, { useState } from 'react';
import {
  TrendingUp,
  TrendingDown,
  FileText,
  Search,
  Filter,
  Download,
  Calendar,
  User,
  Clock,
  ArrowRight,
  Sparkles,
  BarChart2,
  PieChart,
  Layers,
  ChevronRight,
  ExternalLink,
  BookOpen
} from 'lucide-react';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  BarChart,
  Bar
} from 'recharts';
import { ActiveTab, ResearchArticle, RiskLevel } from '../../types';
import { RESEARCH_ARTICLES, MARKET_INDICES } from '../../data/mockData';
import { triggerDownload } from '../../utils/formatters';

interface InsightsViewProps {
  setActiveTab: (tab: ActiveTab) => void;
  openBookingModal: () => void;
}

export const InsightsView: React.FC<InsightsViewProps> = ({ setActiveTab, openBookingModal }) => {
  const [selectedAssetClass, setSelectedAssetClass] = useState<string>('All');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeArticle, setActiveArticle] = useState<ResearchArticle | null>(null);

  // Sector trends data
  const sectorPerformance = [
    { sector: 'Semiconductors & AI', ytd: 34.2, momentum: 'Bullish' },
    { sector: 'Private Credit & Yield', ytd: 14.8, momentum: 'Stable' },
    { sector: 'Clean Transition & Energy', ytd: 18.5, momentum: 'Bullish' },
    { sector: 'Healthcare & Biotech', ytd: 9.4, momentum: 'Moderate' },
    { sector: 'Global Financials', ytd: 12.1, momentum: 'Stable' },
    { sector: 'Consumer Discretionary', ytd: 8.2, momentum: 'Neutral' },
  ];

  // 1-Year Index Comparative trend
  const indexTrends = [
    { month: 'Sep', sp500: 5200, nasdaq: 16800, nifty: 23100 },
    { month: 'Nov', sp500: 5420, nasdaq: 17200, nifty: 23600 },
    { month: 'Jan', sp500: 5580, nasdaq: 17600, nifty: 24100 },
    { month: 'Mar', sp500: 5690, nasdaq: 17950, nifty: 24400 },
    { month: 'May', sp500: 5780, nasdaq: 18200, nifty: 24650 },
    { month: 'Aug (Now)', sp500: 5864, nasdaq: 18450, nifty: 24820 },
  ];

  const filteredArticles = RESEARCH_ARTICLES.filter((art) => {
    const matchesSearch =
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.author.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesAsset = selectedAssetClass === 'All' || art.assetClass === selectedAssetClass;
    const matchesCategory = selectedCategory === 'All' || art.category === selectedCategory;
    return matchesSearch && matchesAsset && matchesCategory;
  });

  const downloadReportFile = (title: string) => {
    const mockContent = `APEX WEALTH MANAGEMENT RESEARCH DISCLOSURE\n=========================================\nTitle: ${title}\nDate: August 2026\nAnalyst: Apex Global Investment Committee\n\nExecutive Summary:\nOur macro outlook indicates structural resilience in multi-asset allocation strategies. Yield curves are steepening, providing strong capital appreciation in duration assets while semiconductor margins continue to expand.\n\nDisclaimer: Past performance does not guarantee future results.`;
    triggerDownload(`${title.replace(/[^a-zA-Z0-9]/g, '_')}.txt`, mockContent);
  };

  return (
    <div className="w-full py-10 space-y-12">
      {/* 1. Header & Live Index Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 border-b border-slate-200 pb-6">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-600">
                Institutional Intelligence Desk
              </span>
              <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold">
                Live Macro Feed
              </span>
            </div>
            <h1 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 mt-1">
              Global Market Insights &amp; Research
            </h1>
            <p className="text-xs text-slate-500 mt-1">
              Forensic economic analysis, sector rotation models, and weekly institutional commentary.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => downloadReportFile('Apex_Global_Market_Weekly_Report_Aug_2026')}
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 rounded-xl shadow-xs transition-colors"
            >
              <Download className="w-3.5 h-3.5 text-slate-600" />
              <span>Weekly PDF Report</span>
            </button>
            <button
              onClick={() => setActiveTab('reports')}
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-500 rounded-xl transition-colors"
            >
              <span>View All Filings</span>
            </button>
          </div>
        </div>

        {/* Live Index Tickers */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 mt-6">
          {MARKET_INDICES.map((idx) => {
            const isPos = idx.change >= 0;
            return (
              <div
                key={idx.symbol}
                className="p-3 bg-white rounded-xl border border-slate-200 shadow-xs space-y-1"
              >
                <span className="text-[10px] text-slate-400 font-bold uppercase">{idx.symbol}</span>
                <div className="font-mono text-xs font-bold text-slate-900">
                  {idx.value.toLocaleString(undefined, { maximumFractionDigits: 2 })}
                </div>
                <div
                  className={`text-[10px] font-bold flex items-center ${
                    isPos ? 'text-emerald-600' : 'text-rose-600'
                  }`}
                >
                  {isPos ? '+' : ''}
                  {idx.changePercent}%
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 2. Market Performance Charts & Sector Rotation Heatmap */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Comparative Line Chart */}
          <div className="lg:col-span-7 bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <h3 className="font-bold text-base text-slate-900">Global Equities Trend (1-Year)</h3>
                <p className="text-xs text-slate-500">S&amp;P 500 vs. Nasdaq vs. Nifty 50</p>
              </div>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700">
                +14.2% Composite
              </span>
            </div>

            <div className="h-60 my-2">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={indexTrends}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="month" tick={{ fontSize: 11, fill: '#64748b' }} />
                  <YAxis tick={{ fontSize: 11, fill: '#64748b' }} domain={['dataMin - 500', 'dataMax + 500']} />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#0f172a', borderRadius: '8px', color: '#fff', fontSize: '11px' }}
                  />
                  <Line type="monotone" dataKey="sp500" name="S&P 500" stroke="#0f172a" strokeWidth={2.5} dot={false} />
                  <Line type="monotone" dataKey="nasdaq" name="Nasdaq" stroke="#2563eb" strokeWidth={2} dot={false} />
                  <Line type="monotone" dataKey="nifty" name="Nifty 50" stroke="#d97706" strokeWidth={2} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="flex items-center justify-between text-[11px] pt-2 border-t border-slate-100 text-slate-500">
              <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-slate-900"></span> S&amp;P 500</span>
              <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-blue-600"></span> Nasdaq 100</span>
              <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-amber-600"></span> Nifty 50</span>
            </div>
          </div>

          {/* Sector Momentum Leaderboard */}
          <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <h3 className="font-bold text-base text-slate-900">Trending Sector Allocations</h3>
                <p className="text-xs text-slate-500">YTD relative strength &amp; capital inflows</p>
              </div>
              <span className="text-[10px] font-bold uppercase text-amber-700">Q3 2026</span>
            </div>

            <div className="space-y-3 my-3">
              {sectorPerformance.map((sec) => (
                <div key={sec.sector} className="space-y-1">
                  <div className="flex justify-between text-xs font-semibold">
                    <span className="text-slate-800">{sec.sector}</span>
                    <span className="font-mono text-emerald-600">+{sec.ytd}% YTD</span>
                  </div>
                  <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-slate-900 h-full rounded-full"
                      style={{ width: `${Math.min(100, sec.ytd * 2.5)}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="text-slate-500">Overweight: Technology &amp; Private Credit</span>
              <button
                onClick={() => setActiveTab('solutions')}
                className="text-amber-700 font-bold hover:text-amber-800"
              >
                Explore Thematic Baskets &rarr;
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Research Publications & Institutional Notes */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Filters Toolbar */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col lg:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 w-full lg:w-auto">
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
              <input
                type="text"
                placeholder="Search research reports, themes, authors..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500 bg-slate-50"
              />
            </div>

            <select
              value={selectedAssetClass}
              onChange={(e) => setSelectedAssetClass(e.target.value)}
              className="text-xs px-3 py-1.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-700 font-medium"
            >
              <option value="All">All Asset Classes</option>
              <option value="Equities">Equities</option>
              <option value="Fixed Income">Fixed Income</option>
              <option value="Alternatives">Alternatives</option>
              <option value="Multi-Asset">Multi-Asset</option>
            </select>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            {['All', 'Macro Outlook', 'Sector Deep Dive', 'Global Strategy', 'ESG'].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1 text-xs font-semibold rounded-lg transition-colors ${
                  selectedCategory === cat
                    ? 'bg-slate-900 text-amber-400 font-bold'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Research Articles Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((art) => (
            <div
              key={art.id}
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group cursor-pointer"
              onClick={() => setActiveArticle(art)}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-50 text-amber-800 border border-amber-200">
                    {art.category}
                  </span>
                  <span className="text-[10px] text-slate-400 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {art.readTime}
                  </span>
                </div>

                <h3 className="font-display text-lg font-bold text-slate-900 group-hover:text-amber-700 transition-colors leading-snug">
                  {art.title}
                </h3>

                <p className="text-xs text-slate-500 line-clamp-3 leading-relaxed">{art.summary}</p>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <span className="font-bold text-xs text-slate-900 block">{art.author}</span>
                  <span className="text-[10px] text-slate-400">{art.authorRole}</span>
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveArticle(art);
                  }}
                  className="p-2 rounded-xl bg-slate-100 group-hover:bg-amber-400 text-slate-700 group-hover:text-slate-950 transition-colors"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Article Detail Full Reading Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/75 backdrop-blur-xs p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative my-8 animate-in fade-in zoom-in-95">
            <button
              onClick={() => setActiveArticle(null)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 text-xl font-bold"
            >
              &times;
            </button>

            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-50 text-amber-800 border border-amber-200">
                  {activeArticle.category}
                </span>
                <span className="text-xs text-slate-400">&bull; {activeArticle.date}</span>
                <span className="text-xs text-slate-400">&bull; {activeArticle.readTime}</span>
              </div>

              <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">
                {activeArticle.title}
              </h2>

              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-slate-900 block">{activeArticle.author}</span>
                  <span className="text-[11px] text-slate-500">{activeArticle.authorRole}</span>
                </div>
                <span className="text-[11px] font-semibold text-slate-600 bg-white px-2.5 py-1 rounded-lg border border-slate-200">
                  Asset: {activeArticle.assetClass}
                </span>
              </div>

              <div className="prose text-xs text-slate-700 leading-relaxed space-y-3 pt-2">
                <p className="font-semibold text-slate-900 bg-amber-50/50 p-3 rounded-lg border-l-2 border-amber-500">
                  {activeArticle.summary}
                </p>
                <p>{activeArticle.content}</p>
                <p>
                  Our econometric framework anticipates continued rate divergence across major G7 economies, presenting active managers with pronounced cross-currency relative value opportunities. We recommend clients maintain an overweight allocation to sovereign duration while selectively deploying private credit yield tranches.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                <button
                  onClick={() => downloadReportFile(activeArticle.title)}
                  className="flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-amber-700"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Whitepaper PDF</span>
                </button>

                <button
                  onClick={() => {
                    setActiveArticle(null);
                    openBookingModal();
                  }}
                  className="px-4 py-2 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-500 rounded-xl"
                >
                  Discuss Thesis with Author &rarr;
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
