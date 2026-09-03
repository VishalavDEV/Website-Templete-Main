import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { DASHBOARD_TIME_SERIES, DASHBOARD_SUMMARIES, REGIONAL_METRICS } from '../data/dashboardData';
import { DashboardDateRange } from '../types';
import { reportService } from '../services/reportService';
import { AiInsightModal } from '../components/AiInsightModal';
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts';
import {
  Activity,
  TrendingUp,
  Download,
  Sparkles,
  Calendar,
  Layers,
  Cpu,
  ShieldCheck,
  Globe,
  Terminal,
  ArrowUpRight
} from 'lucide-react';

export const DashboardSection: React.FC = () => {
  const { isAiInsightModalOpen, setIsAiInsightModalOpen, setIsOperationsConsoleOpen, addToast } = useApp();

  const [dateRange, setDateRange] = useState<DashboardDateRange>('30d');
  const [activeTab, setActiveTab] = useState<'financial' | 'agents' | 'risk' | 'regional'>('financial');

  const chartData = DASHBOARD_TIME_SERIES[dateRange];
  const summary = DASHBOARD_SUMMARIES[dateRange];

  const handleExportCSV = () => {
    reportService.exportDashboardCSV(dateRange);
    addToast({
      type: 'success',
      title: 'Report Downloaded',
      message: `Generated and downloaded telemetry report for ${dateRange.toUpperCase()}.`
    });
  };

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-[#0A0A0E] border border-white/10 p-3.5 rounded-xl shadow-2xl backdrop-blur-md text-xs space-y-1">
          <p className="font-semibold text-slate-200 mb-1">{label}</p>
          {payload.map((entry: any, index: number) => (
            <div key={`item-${index}`} className="flex items-center justify-between gap-4 font-mono">
              <span style={{ color: entry.color }}>{entry.name}:</span>
              <span className="font-bold text-white">
                {entry.name.includes('Revenue') || entry.name.includes('Cost')
                  ? `$${entry.value.toLocaleString()}`
                  : entry.value.toLocaleString()}
              </span>
            </div>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <section id="dashboard" className="py-24 bg-[#08080A] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-semibold">
              <Activity className="w-3.5 h-3.5" />
              <span>Real-Time Business Intelligence Engine</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
              Sovereign Enterprise Telemetry
            </h2>
            <p className="text-sm sm:text-base text-slate-400 max-w-xl">
              Deterministic operational metrics streamed live from interconnected multi-cloud nodes.
            </p>
          </div>

          {/* Action Tools & Date Filter */}
          <div className="flex flex-wrap items-center gap-2.5">
            {/* Date Range Selector */}
            <div className="flex items-center bg-[#0A0A0E] p-1 rounded-xl border border-white/5">
              {(['7d', '30d', '90d', '1y'] as DashboardDateRange[]).map(range => (
                <button
                  key={range}
                  onClick={() => setDateRange(range)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                    dateRange === range
                      ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {range.toUpperCase()}
                </button>
              ))}
            </div>

            {/* AI Insights Modal Button */}
            <button
              onClick={() => setIsAiInsightModalOpen(true)}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-500 rounded-full shadow-lg shadow-indigo-600/20 active:scale-95 transition-all"
            >
              <Sparkles className="w-3.5 h-3.5 text-white" />
              <span>AI Insights</span>
            </button>

            {/* Export CSV Button */}
            <button
              onClick={handleExportCSV}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-slate-300 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-full transition-all"
              title="Download raw dataset in CSV format"
            >
              <Download className="w-3.5 h-3.5 text-slate-400" />
              <span className="hidden sm:inline">Export CSV</span>
            </button>
          </div>
        </div>

        {/* Dynamic Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {/* Metric 1 */}
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-3">
            <div className="flex items-center justify-between text-xs">
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Gross Revenue Volume</span>
              <span className="text-emerald-400 text-[10px] font-bold bg-emerald-400/10 px-2 py-0.5 rounded">
                +{summary.revenueGrowth}%
              </span>
            </div>
            <p className="text-3xl font-bold font-display text-white">
              ${(Number(summary.totalRevenue) / 1000000).toFixed(2)}M
            </p>
            <p className="text-xs text-slate-400">Tracked across 8 tier-1 corporate divisions</p>
          </div>

          {/* Metric 2 */}
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-3">
            <div className="flex items-center justify-between text-xs">
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Agent Inferences</span>
              <span className="text-cyan-400 text-[10px] font-bold bg-cyan-400/10 px-2 py-0.5 rounded">99.98% OK</span>
            </div>
            <p className="text-3xl font-bold font-display text-cyan-400">
              {summary.agentOperations ? (summary.agentOperations / 1000000).toFixed(1) : '0.4'}M Ops
            </p>
            <p className="text-xs text-slate-400">Avg decision latency &lt; 9.4 milliseconds</p>
          </div>

          {/* Metric 3 */}
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-3">
            <div className="flex items-center justify-between text-xs">
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Cost Optimization Yield</span>
              <span className="text-indigo-400 text-[10px] font-bold bg-indigo-400/10 px-2 py-0.5 rounded">+{summary.costSavingsRate}%</span>
            </div>
            <p className="text-3xl font-bold font-display text-indigo-400">
              ${summary.costSavings ? (summary.costSavings / 1000000).toFixed(2) : '1.42'}M Saved
            </p>
            <p className="text-xs text-slate-400">Automated waste arbitration and cloud trimming</p>
          </div>

          {/* Metric 4 */}
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-3">
            <div className="flex items-center justify-between text-xs">
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Threat & Anomaly Intercept</span>
              <span className="text-slate-400 text-[10px] font-bold bg-white/5 px-2 py-0.5 rounded">0 Breaches</span>
            </div>
            <p className="text-3xl font-bold font-display text-purple-400">
              {summary.threatsIntercepted} Blocked
            </p>
            <p className="text-xs text-slate-400">Autonomous causal risk isolation active</p>
          </div>
        </div>

        {/* Dashboard Main Grid - 2/3 Main View & 1/3 AI Insight Stream */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* Main Chart Card (Col-Span-2) */}
          <div className="lg:col-span-2 bg-[#0C0C12] border border-white/5 rounded-2xl flex flex-col relative overflow-hidden">
            {/* Header / Tab Navigation */}
            <div className="p-6 border-b border-white/5 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2 overflow-x-auto">
                <button
                  onClick={() => setActiveTab('financial')}
                  className={`flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap ${
                    activeTab === 'financial'
                      ? 'bg-indigo-500/15 text-indigo-400 border border-indigo-500/30'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <TrendingUp className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Market Intelligence</span>
                </button>

                <button
                  onClick={() => setActiveTab('agents')}
                  className={`flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap ${
                    activeTab === 'agents'
                      ? 'bg-indigo-500/15 text-indigo-400 border border-indigo-500/30'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Agent Swarm</span>
                </button>

                <button
                  onClick={() => setActiveTab('risk')}
                  className={`flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap ${
                    activeTab === 'risk'
                      ? 'bg-indigo-500/15 text-indigo-400 border border-indigo-500/30'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-purple-400" />
                  <span>Risk Index</span>
                </button>

                <button
                  onClick={() => setActiveTab('regional')}
                  className={`flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap ${
                    activeTab === 'regional'
                      ? 'bg-indigo-500/15 text-indigo-400 border border-indigo-500/30'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Globe className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Regional Fabric</span>
                </button>
              </div>

              <div className="flex gap-2">
                <span className="text-[10px] text-slate-500 font-mono py-1">100ms Telemetry Stream</span>
              </div>
            </div>

            {/* Chart Display Area */}
            <div className="p-6 flex-1 min-h-[300px]">
              {/* TAB 1: FINANCIAL REVENUE VS COST */}
              {activeTab === 'financial' && (
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-xs text-slate-400">
                    <span>Gross Operating Yield vs Infrastructure Overhead</span>
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1 text-indigo-400">
                        <span className="w-2.5 h-2.5 bg-indigo-500 rounded-full" /> Revenue ($)
                      </span>
                      <span className="flex items-center gap-1 text-purple-400">
                        <span className="w-2.5 h-2.5 bg-purple-500 rounded-full" /> Cost ($)
                      </span>
                    </div>
                  </div>

                  <div className="h-64 sm:h-72 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={chartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                        <defs>
                          <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#6366f1" stopOpacity={0.4} />
                            <stop offset="95%" stopColor="#6366f1" stopOpacity={0.0} />
                          </linearGradient>
                          <linearGradient id="colorCost" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#a855f7" stopOpacity={0.3} />
                            <stop offset="95%" stopColor="#a855f7" stopOpacity={0.0} />
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#262626" opacity={0.4} />
                        <XAxis dataKey="date" stroke="#64748b" tick={{ fontSize: 11 }} />
                        <YAxis
                          stroke="#64748b"
                          tick={{ fontSize: 11 }}
                          tickFormatter={val => `$${(val / 1000).toFixed(0)}k`}
                        />
                        <Tooltip content={<CustomTooltip />} />
                        <Area
                          type="monotone"
                          dataKey="revenue"
                          name="Gross Revenue"
                          stroke="#6366f1"
                          strokeWidth={2.5}
                          fillOpacity={1}
                          fill="url(#colorRevenue)"
                        />
                        <Area
                          type="monotone"
                          dataKey="costs"
                          name="Infrastructure Cost"
                          stroke="#a855f7"
                          strokeWidth={2}
                          fillOpacity={1}
                          fill="url(#colorCost)"
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              )}

              {/* TAB 2: AGENT THROUGHPUT */}
              {activeTab === 'agents' && (
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-xs text-slate-400">
                    <span>Agent Inferences & Decision Velocity</span>
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1 text-cyan-400">
                        <span className="w-2.5 h-2.5 bg-cyan-400 rounded-full" /> Agent Inferences
                      </span>
                      <span className="flex items-center gap-1 text-pink-400">
                        <span className="w-2.5 h-2.5 bg-pink-400 rounded-full" /> Latency (ms)
                      </span>
                    </div>
                  </div>

                  <div className="h-64 sm:h-72 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={chartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#262626" opacity={0.4} />
                        <XAxis dataKey="date" stroke="#64748b" tick={{ fontSize: 11 }} />
                        <YAxis stroke="#64748b" tick={{ fontSize: 11 }} />
                        <Tooltip content={<CustomTooltip />} />
                        <Line
                          type="monotone"
                          dataKey="agentOperations"
                          name="Inference Volume"
                          stroke="#06b6d4"
                          strokeWidth={2.5}
                          dot={{ r: 3, fill: '#06b6d4' }}
                          activeDot={{ r: 5 }}
                        />
                        <Line
                          type="monotone"
                          dataKey="latency"
                          name="Latency (ms)"
                          stroke="#ec4899"
                          strokeWidth={2}
                          dot={false}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              )}

              {/* TAB 3: RISK & ANOMALIES */}
              {activeTab === 'risk' && (
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-xs text-slate-400">
                    <span>Threat Vectors Intercepted vs Active Compute Nodes</span>
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1 text-amber-400">
                        <span className="w-2.5 h-2.5 bg-amber-400 rounded-full" /> Threat Events
                      </span>
                      <span className="flex items-center gap-1 text-emerald-400">
                        <span className="w-2.5 h-2.5 bg-emerald-400 rounded-full" /> Compute Nodes
                      </span>
                    </div>
                  </div>

                  <div className="h-64 sm:h-72 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={chartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#262626" opacity={0.4} />
                        <XAxis dataKey="date" stroke="#64748b" tick={{ fontSize: 11 }} />
                        <YAxis stroke="#64748b" tick={{ fontSize: 11 }} />
                        <Tooltip content={<CustomTooltip />} />
                        <Bar dataKey="threats" name="Threat Events" fill="#f59e0b" radius={[4, 4, 0, 0]} />
                        <Bar dataKey="activeNodes" name="Mesh Nodes" fill="#10b981" radius={[4, 4, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              )}

              {/* TAB 4: REGIONAL DISTRIBUTION */}
              {activeTab === 'regional' && (
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-xs text-slate-400">
                    <span>Autonomous Mesh Distribution by Sovereign Region</span>
                    <span className="text-emerald-400 font-mono">100% SLA COMPLIANCE</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                    {REGIONAL_METRICS.map(reg => (
                      <div key={reg.region} className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2.5">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-white">{reg.region}</span>
                          <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                            {reg.uptime} Uptime
                          </span>
                        </div>

                        <div className="space-y-1 text-xs text-slate-400">
                          <div className="flex justify-between">
                            <span>Revenue Share:</span>
                            <span className="font-semibold text-slate-200">{reg.revenueShare}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Active Nodes:</span>
                            <span className="font-mono text-cyan-400">{reg.nodes} clusters</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Avg Latency:</span>
                            <span className="font-mono text-slate-300">{reg.latency}</span>
                          </div>
                        </div>

                        <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-indigo-500 to-cyan-400"
                            style={{ width: reg.revenueShare }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: AI Insight Stream (Professional Polish Sidebar Card) */}
          <div className="bg-gradient-to-b from-[#11111A] to-[#08080A] border border-white/10 rounded-2xl p-6 flex flex-col justify-between gap-4">
            <div className="space-y-4">
              <h3 className="text-xs font-bold text-slate-400 flex items-center gap-2 tracking-widest uppercase">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span>AI Insight Stream</span>
              </h3>

              <div className="space-y-3">
                <div className="p-3.5 bg-white/5 rounded-xl border-l-2 border-indigo-500">
                  <div className="text-[10px] text-indigo-400 font-bold mb-1">Market Opportunity</div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Revenue increased primarily due to stronger enterprise conversions. Priority: Expand retail and sovereign segments.
                  </p>
                </div>

                <div className="p-3.5 bg-white/5 rounded-xl border-l-2 border-cyan-500">
                  <div className="text-[10px] text-cyan-400 font-bold mb-1">Workflow Alert</div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Detected potential delay in logistics pipeline. Recommending auto-reroute via regional sovereign hubs.
                  </p>
                </div>

                <div className="p-3.5 bg-white/5 rounded-xl border-l-2 border-purple-500">
                  <div className="text-[10px] text-purple-400 font-bold mb-1">Anomaly Notification</div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Cloud utilization reached 92%. Suggesting dynamic scaling of node cluster Frankfurt-02.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/5">
              <button
                onClick={() => setIsAiInsightModalOpen(true)}
                className="w-full py-2.5 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-2"
              >
                <span>Ask NEXORA AI anything...</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-indigo-400" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Operational Console Quick Launch */}
        <div className="p-4 bg-[#0A0A0E] border border-white/5 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-slate-400">
            <Terminal className="w-4 h-4 text-indigo-400" />
            <span>Deterministic operational intelligence streamed across 480 sovereign compute nodes.</span>
          </div>
          <button
            onClick={() => setIsOperationsConsoleOpen(true)}
            className="inline-flex items-center gap-1.5 text-indigo-400 hover:text-indigo-300 font-semibold"
          >
            <span>Launch Operations Console</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* AI Insight Modal Subcomponent */}
      <AiInsightModal currentRange={dateRange} />
    </section>
  );
};
