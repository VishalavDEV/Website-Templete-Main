import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { MetricCard, DateRangePicker } from '../ui/GlobalComponents';
import { ChartCard } from '../ui/ChartCard';
import { BarChart3, TrendingUp, CheckSquare } from 'lucide-react';

export const Analytics: React.FC = () => {
  const { tasks, projects } = useApp();

  // Date filters
  const [startDate, setStartDate] = useState('2026-08-01');
  const [endDate, setEndDate] = useState('2026-08-24');
  const [compareMode, setCompareMode] = useState(false);
  const [trafficCategory, setTrafficCategory] = useState('all');

  // Interactive mock charts data based on filters
  const revenueSeries = trafficCategory === 'all' 
    ? [
        { label: 'Jan', value: 45000, value2: 38000 },
        { label: 'Feb', value: 52000, value2: 40000 },
        { label: 'Mar', value: 68000, value2: 45000 },
        { label: 'Apr', value: 85000, value2: 50000 },
        { label: 'May', value: 120000, value2: 75000 },
        { label: 'Jun', value: 145000, value2: 90000 },
      ]
    : [
        { label: 'Jan', value: 15000, value2: 10000 },
        { label: 'Feb', value: 18000, value2: 12000 },
        { label: 'Mar', value: 25000, value2: 15000 },
        { label: 'Apr', value: 31000, value2: 19000 },
        { label: 'May', value: 45000, value2: 24000 },
        { label: 'Jun', value: 55000, value2: 32000 },
      ];

  const edgeRequestSeries = [
    { label: 'Node-01', value: 480 },
    { label: 'Node-02', value: 320 },
    { label: 'Node-03', value: 640 },
    { label: 'Node-04', value: 150 },
    { label: 'Node-05', value: 210 },
  ];

  const pipelineDonut = [
    { label: 'Active', value: projects.filter(p => p.status === 'Active').length },
    { label: 'Completed', value: projects.filter(p => p.status === 'Completed').length },
    { label: 'Planning', value: projects.filter(p => p.status === 'Planning').length },
    { label: 'On Hold', value: projects.filter(p => p.status === 'On Hold').length },
  ];

  const handleDateChange = (start: string, end: string) => {
    setStartDate(start);
    setEndDate(end);
  };

  const completedTasks = tasks.filter(t => t.status === 'Done').length;
  const totalTasks = tasks.length;
  const taskCompletionRate = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

  return (
    <div className="space-y-6">
      {/* Top action header with Date picker & comparative togglers */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border border-blue-100 bg-white p-4 rounded-xl shadow-xs relative overflow-hidden">
        <div>
          <h2 className="text-xs font-bold font-mono tracking-wider text-slate-900 uppercase">
            ANALYTICS & COMPUTATIONAL TELEMETRY
          </h2>
          <p className="text-[11px] font-mono text-slate-500 mt-0.5">Historical performance timelines and telemetry aggregates.</p>
        </div>
        <div className="flex flex-wrap items-center gap-2.5">
          <DateRangePicker startDate={startDate} endDate={endDate} onChange={handleDateChange} />
          <button
            onClick={() => setCompareMode(!compareMode)}
            className={`px-3 py-1.5 text-[10px] font-mono uppercase tracking-widest font-bold rounded-lg border cursor-pointer transition shadow-2xs ${
              compareMode 
                ? 'bg-blue-600 border-blue-600 text-white' 
                : 'bg-slate-50 border-blue-200 text-slate-600 hover:border-blue-400'
            }`}
          >
            Comparative: {compareMode ? 'ON' : 'OFF'}
          </button>
        </div>
      </div>

      {/* Filter Segment tabs */}
      <div className="flex items-center gap-1.5 border-b border-blue-100 pb-0.5">
        <button
          onClick={() => setTrafficCategory('all')}
          className={`px-3 py-1.5 text-[10px] font-mono font-bold uppercase tracking-wider rounded-t transition cursor-pointer ${
            trafficCategory === 'all' 
              ? 'bg-blue-50 text-blue-700 border-b-2 border-blue-600' 
              : 'text-slate-500 hover:text-slate-700 hover:bg-blue-50/40'
          }`}
        >
          All Networks
        </button>
        <button
          onClick={() => setTrafficCategory('subnets')}
          className={`px-3 py-1.5 text-[10px] font-mono font-bold uppercase tracking-wider rounded-t transition cursor-pointer ${
            trafficCategory === 'subnets' 
              ? 'bg-blue-50 text-blue-700 border-b-2 border-blue-600' 
              : 'text-slate-500 hover:text-slate-700 hover:bg-blue-50/40'
          }`}
        >
          Core API Nodes Only
        </button>
      </div>

      {/* Analytical KPI Metrics cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <MetricCard 
          title="Consolidated Net Income" 
          value="$125,480.00" 
          trend={{ value: '+14.2% MoM', type: 'up' }}
          icon={<TrendingUp className="h-4 w-4 text-blue-600" />}
          subtext="Net licensings after compute offset"
        />
        <MetricCard 
          title="Compute Ingress Bandwidth" 
          value="424.8 GBps" 
          trend={{ value: 'Within bounds', type: 'neutral' }}
          icon={<BarChart3 className="h-4 w-4 text-blue-600" />}
          subtext="Accumulated ingress streams"
        />
        <MetricCard 
          title="Sprints Completion Index" 
          value={`${taskCompletionRate}%`} 
          trend={{ value: `${completedTasks}/${totalTasks} Tasks`, type: 'up' }}
          icon={<CheckSquare className="h-4 w-4 text-blue-600" />}
          subtext="Sprint velocity metrics index"
        />
      </div>

      {/* Grid of highly polished animated SVG charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartCard 
          title="Aggregate Revenue vs Costs Runrate" 
          subtitle="Revenue lines tracked with dynamic computing expenditures."
          type="area" 
          data={revenueSeries} 
          labels={['Income Stream', 'Compute Outlay']}
          height={200}
        />
        <ChartCard 
          title="Edge Node Distribution Payload" 
          subtitle="Total load distributions across system nodes."
          type="bar" 
          data={edgeRequestSeries} 
          color="#2563EB"
          height={200}
        />
        <ChartCard 
          title="Task Portfolio Categorization" 
          subtitle="Relative distribution percentage of project statuses."
          type="donut" 
          data={pipelineDonut} 
          color="#2563EB"
          height={220}
        />

        {/* Activity Timeline list */}
        <div className="border border-blue-100 bg-white p-5 rounded-xl flex flex-col justify-between shadow-xs">
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-tight mb-4 font-mono">
              Diagnostic Log Milestones
            </h4>
            <div className="space-y-4 max-h-[160px] overflow-y-auto pr-1">
              <div className="flex gap-3 text-xs">
                <span className="w-16 shrink-0 text-slate-400 font-mono text-[10px]">Aug 24</span>
                <div className="flex-1">
                  <span className="font-bold text-slate-800">Sprint Platform Compiled</span>
                  <p className="text-[11px] text-slate-500 mt-0.5">Spatial node indices synchronized.</p>
                </div>
              </div>
              <div className="flex gap-3 text-xs">
                <span className="w-16 shrink-0 text-slate-400 font-mono text-[10px]">Aug 18</span>
                <div className="flex-1">
                  <span className="font-bold text-slate-800">Security Audit Finished</span>
                  <p className="text-[11px] text-slate-500 mt-0.5">Certificates and tokens rotated successfully.</p>
                </div>
              </div>
              <div className="flex gap-3 text-xs">
                <span className="w-16 shrink-0 text-slate-400 font-mono text-[10px]">Aug 10</span>
                <div className="flex-1">
                  <span className="font-bold text-slate-800">Clusters Expanded</span>
                  <p className="text-[11px] text-slate-500 mt-0.5">Integrated 12 edge sub-gateways.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-blue-50 pt-3 flex justify-between items-center text-[10px] text-slate-400 font-mono">
            <span>LAST EXPORT:</span>
            <span>Aug 24, 05:12 AM</span>
          </div>
        </div>
      </div>
    </div>
  );
};
