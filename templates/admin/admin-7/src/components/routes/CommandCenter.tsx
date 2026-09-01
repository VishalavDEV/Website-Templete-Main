import React from 'react';
import { useApp } from '../../context/AppContext';
import { 
  MetricCard, ProgressBar, StatusBadge 
} from '../ui/GlobalComponents';
import { ChartCard } from '../ui/ChartCard';
import { 
  Cpu, Network, HardDrive, 
  Plus, Send, ArrowUpRight, Zap 
} from 'lucide-react';

export const CommandCenter: React.FC = () => {
  const {
    users,
    projects,
    tasks,
    systemHealth,
    setRoute,
    createTask,
    sendMessage,
    showToast
  } = useApp();

  // Simulated metrics and telemetry charts
  const revSeries = [
    { label: 'Q1 25', value: 120000, value2: 95000 },
    { label: 'Q2 25', value: 185000, value2: 120000 },
    { label: 'Q3 25', value: 240000, value2: 180000 },
    { label: 'Q4 25', value: 310000, value2: 240000 },
    { label: 'Q1 26', value: 420000, value2: 320000 },
    { label: 'Q2 26', value: 540000, value2: 450000 },
  ];

  const latencySeries = [
    { label: '02:00', value: 12 },
    { label: '04:00', value: 18 },
    { label: '06:00', value: 15 },
    { label: '08:00', value: 24 },
    { label: '10:00', value: systemHealth.latency },
  ];

  const handleQuickTask = () => {
    const title = prompt("Enter task title:");
    if (!title) return;
    createTask({
      title,
      description: 'Quickly enqueued from CommandCenter action desk.',
      projectId: projects[0]?.id || 'proj-1',
      status: 'Todo',
      priority: 'Medium',
      assigneeId: users[0]?.id || 'usr-1',
      dueDate: new Date(Date.now() + 86400000 * 3).toISOString().split('T')[0],
      estimatedHours: 8
    });
  };

  const handleQuickSystemBroadcast = () => {
    const msg = prompt("Enter system-wide broadcast message:");
    if (!msg) return;
    sendMessage(msg, 'global');
    showToast('success', 'Alert Transmitted', 'Broadcasted message across all active channels.');
  };

  const recentProjects = [...projects].reverse().slice(0, 3);
  const recentActivities = [
    { id: 1, user: 'Elena Rostova', action: 'initiated Security Audit checkpoint', time: '5m ago' },
    { id: 2, user: 'Marcus Chen', action: 'committed gateway fixes to main branch', time: '12m ago' },
    { id: 3, user: 'Monitoring Service', action: 'logged network peak latency of 184ms', time: '1h ago' },
    { id: 4, user: 'Sarah Jenkins', action: 'published edge cluster specifications', time: '2h ago' },
  ];

  return (
    <div className="space-y-6">
      {/* Greeting Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border border-blue-100 bg-white p-5 rounded-xl shadow-xs">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-sm font-bold font-mono tracking-wider text-slate-900 uppercase">
              SPRINTADMIN COMMAND CENTER
            </h1>
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          </div>
          <p className="text-xs text-slate-500 mt-1 max-w-xl font-mono leading-relaxed">
            Welcome back, Operator Elena. All sub-channels are active. Core infrastructure and databases are operational.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <button 
            onClick={handleQuickTask}
            className="flex items-center gap-1.5 px-3.5 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold font-mono text-xs tracking-wider rounded-lg uppercase transition cursor-pointer shadow-xs"
          >
            <Plus className="h-3.5 w-3.5" />
            Enqueue Task
          </button>
          <button 
            onClick={handleQuickSystemBroadcast}
            className="flex items-center gap-1.5 px-3.5 py-2 bg-slate-50 hover:bg-slate-100 text-slate-700 border border-blue-200 font-bold font-mono text-xs tracking-wider rounded-lg uppercase transition cursor-pointer"
          >
            <Send className="h-3.5 w-3.5 text-blue-600" />
            Broadcast Alert
          </button>
        </div>
      </div>

      {/* System Health Section */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <Cpu className="h-4 w-4 text-blue-600" />
          <h3 className="text-xs font-bold tracking-widest text-slate-500 uppercase font-mono">
            Telemetry & Node Health
          </h3>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <MetricCard 
            title="CPU Load" 
            value={`${systemHealth.cpu}%`} 
            icon={<Cpu className="h-4 w-4" />}
            subtext="Consolidated edge units"
          />
          <MetricCard 
            title="Ingress RTT" 
            value={`${systemHealth.latency}ms`} 
            icon={<Network className="h-4 w-4" />}
            subtext="Average roundtrip latency"
          />
          <MetricCard 
            title="Cluster Disk" 
            value={`${systemHealth.disk}%`} 
            icon={<HardDrive className="h-4 w-4" />}
            subtext="Persistent storage nodes"
          />
          <MetricCard 
            title="Active State" 
            value={systemHealth.status} 
            icon={<Zap className="h-4 w-4" />}
            subtext="Node cluster status"
            trend={{ value: '100% UP', type: 'up' }}
          />
        </div>
      </div>

      {/* KPI Stats Deck */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ChartCard 
          title="Revenue Growth & Margin" 
          subtitle="Direct sales contrasted with cloud compute budget forecasts."
          type="area" 
          data={revSeries} 
          labels={['Licensing Revenue', 'Compute Spent']}
          height={180}
        />
        <ChartCard 
          title="Ingress Traffic Latency" 
          subtitle="Real-time ping intervals monitored at 5-minute ticks."
          type="line" 
          data={latencySeries} 
          color="#2563EB"
          height={180}
          unit="ms"
        />
        
        {/* Quick action controls and system settings status */}
        <div className="border border-blue-100 bg-white p-4 rounded-xl flex flex-col justify-between shadow-xs">
          <div>
            <h4 className="text-xs font-mono font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
              <span className="w-1.5 h-3 bg-blue-600 rounded-2xs inline-block" />
              Action Desk Control
            </h4>
            <p className="text-[11px] text-slate-500 mt-1 font-mono">
              Trigger instant simulated system routines.
            </p>
          </div>

          <div className="space-y-2 my-4">
            <button 
              onClick={() => setRoute('system-test')}
              className="w-full flex items-center justify-between px-3 py-2 rounded-lg bg-slate-50 border border-blue-100 hover:border-blue-300 hover:bg-blue-50/50 text-xs font-mono uppercase tracking-wider text-slate-700 font-bold transition text-left cursor-pointer"
            >
              <span>Launch Diagnostics suite</span>
              <ArrowUpRight className="h-3.5 w-3.5 text-blue-600" />
            </button>
            <button 
              onClick={() => setRoute('finance')}
              className="w-full flex items-center justify-between px-3 py-2 rounded-lg bg-slate-50 border border-blue-100 hover:border-blue-300 hover:bg-blue-50/50 text-xs font-mono uppercase tracking-wider text-slate-700 font-bold transition text-left cursor-pointer"
            >
              <span>Review financial books & invoices</span>
              <ArrowUpRight className="h-3.5 w-3.5 text-blue-600" />
            </button>
            <button 
              onClick={() => setRoute('settings')}
              className="w-full flex items-center justify-between px-3 py-2 rounded-lg bg-slate-50 border border-blue-100 hover:border-blue-300 hover:bg-blue-50/50 text-xs font-mono uppercase tracking-wider text-slate-700 font-bold transition text-left cursor-pointer"
            >
              <span>Configure theme & sound settings</span>
              <ArrowUpRight className="h-3.5 w-3.5 text-blue-600" />
            </button>
          </div>

          <div className="border-t border-blue-50 pt-3">
            <div className="flex justify-between items-center text-[10px] text-slate-500 font-mono tracking-wider">
              <span>BACKEND ENGINE:</span>
              <span className="font-bold text-emerald-600">CONNECTED // NOMINAL</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main split deck */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent projects */}
        <div className="lg:col-span-2 border border-blue-100 bg-white p-4 rounded-xl space-y-4 shadow-xs">
          <div className="flex justify-between items-center">
            <h4 className="text-xs font-mono font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
              <span className="w-1.5 h-3 bg-blue-600 rounded-2xs inline-block" />
              Active Project Portfolios
            </h4>
            <button 
              onClick={() => setRoute('projects')}
              className="text-[10px] font-mono uppercase tracking-wider font-bold text-blue-600 hover:text-blue-800 cursor-pointer transition"
            >
              View Portfolios
            </button>
          </div>
          <div className="space-y-3">
            {recentProjects.map((p) => (
              <div key={p.id} className="p-3 bg-slate-50 border border-blue-100 hover:border-blue-300 rounded-xl transition-all">
                <div className="flex justify-between items-start mb-1.5">
                  <div>
                    <span className="text-xs font-bold text-slate-900">{p.name}</span>
                    <p className="text-[11px] text-slate-500 mt-0.5 max-w-md truncate font-mono">{p.description}</p>
                  </div>
                  <StatusBadge status={p.status} />
                </div>
                <div className="flex items-center gap-4 mt-3">
                  <div className="flex-1 font-mono text-[9px] uppercase tracking-wider">
                    <div className="flex justify-between items-center text-slate-500 font-bold mb-1">
                      <span>PROGRESS: {p.progress}%</span>
                    </div>
                    <ProgressBar value={p.progress} color={p.progress === 100 ? 'bg-emerald-600' : 'bg-blue-600'} />
                  </div>
                  <div className="flex flex-col text-[10px] font-mono text-slate-500 text-right uppercase tracking-wider">
                    <span>SPENT / BUDGET</span>
                    <span className="font-bold text-slate-800 tabular-nums">${p.spent.toLocaleString()} / ${p.budget.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Live Logs / Events panel */}
        <div className="border border-blue-100 bg-white p-4 rounded-xl flex flex-col justify-between space-y-4 shadow-xs">
          <div>
            <h4 className="text-xs font-mono font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
              <span className="w-1.5 h-3 bg-blue-600 rounded-2xs inline-block" />
              Live Activities
            </h4>
            <p className="text-[11px] text-slate-500 mt-1 font-mono">Real-time audit log stream.</p>
          </div>
          
          <div className="space-y-3 flex-1 overflow-y-auto max-h-64 pr-1">
            {recentActivities.map((act) => (
              <div key={act.id} className="flex gap-2.5 text-xs">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                <div className="flex-1 text-[11px] leading-relaxed font-mono">
                  <span className="font-bold text-slate-800">{act.user}</span>
                  <span className="text-slate-600"> {act.action}</span>
                  <span className="block text-[10px] text-slate-400 font-mono mt-0.5 uppercase">{act.time}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-blue-50 pt-3">
            <button 
              onClick={() => setRoute('reports')}
              className="w-full text-center py-2 bg-slate-50 hover:bg-blue-50 rounded-lg text-xs font-mono font-bold uppercase tracking-wider text-blue-700 border border-blue-200 cursor-pointer transition"
            >
              Export Audit Trail Logs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
