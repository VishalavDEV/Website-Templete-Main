import React from 'react';
import { useApp } from '../../context/AppContext';
import { 
  MetricCard, ProgressBar, StatusBadge, 
  Avatar, AvatarGroup 
} from '../ui/GlobalComponents';
import { 
  LayoutDashboard, Terminal, CheckSquare, Briefcase, Users, 
  DollarSign, Activity, AlertCircle, TrendingUp, ShieldCheck,
  ChevronRight, ArrowUpRight, ArrowDownRight, Clock
} from 'lucide-react';

export const Dashboard: React.FC = () => {
  const {
    users,
    projects,
    tasks,
    transactions,
    systemHealth,
    setRoute,
    showToast
  } = useApp();

  // Calculate Metrics
  const activeProjectsCount = projects.filter(p => p.status === 'Active').length;
  const pendingTasksCount = tasks.filter(t => t.status !== 'Done').length;
  
  // Budget calculations
  const totalBudget = projects.reduce((acc, p) => acc + p.budget, 0);
  const totalSpent = projects.reduce((acc, p) => acc + p.spent, 0);
  const remainingBudget = totalBudget - totalSpent;
  const budgetProgress = totalBudget > 0 ? (totalSpent / totalBudget) * 100 : 0;

  // Revenue vs Expense from transactions
  const incomeTotal = transactions
    .filter(t => t.type === 'Income' && t.status === 'Completed')
    .reduce((acc, t) => acc + t.amount, 0);
  const expenseTotal = transactions
    .filter(t => t.type === 'Expense' && t.status === 'Completed')
    .reduce((acc, t) => acc + t.amount, 0);
  const netProfit = incomeTotal - expenseTotal;

  // Activities feed
  const recentActivities = [
    { id: 1, user: 'Elena Rostova', action: 'initialized Aegis Security Audit', time: '5m ago' },
    { id: 2, user: 'Marcus Chen', action: 'committed Netty deadlock fixes to main', time: '12m ago' },
    { id: 3, user: 'Core Monitoring Service', action: 'logged latency peak of 184ms', time: '1h ago' },
    { id: 4, user: 'Sarah Jenkins', action: 'published Hydra edge specifications', time: '2h ago' },
  ];

  return (
    <div className="space-y-6">
      {/* Dashboard Welcome Header */}
      <div className="stagger-entry stagger-1 flex flex-col md:flex-row md:items-center justify-between gap-4 border border-blue-100 bg-white p-6 rounded-xl shadow-xs">
        <div>
          <div className="flex items-center gap-2">
            <LayoutDashboard className="h-5 w-5 text-blue-600" />
            <h1 className="text-xl font-extrabold tracking-tight text-slate-900 uppercase font-sans">
              Operational Dashboard
            </h1>
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-live-pulse" />
          </div>
          <p className="text-xs text-slate-500 mt-1 max-w-xl">
            Console node is online and operational. Aggregate metrics show a nominal load with healthy transaction volumes.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <button 
            onClick={() => {
              setRoute('system-test');
              showToast('info', 'Executing Diagnostics', 'System tests initiated from Dashboard link.');
            }}
            className="flex items-center gap-1.5 px-3.5 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs rounded-lg transition-all duration-200 hover:translate-y-[-1px] shadow-xs shadow-blue-500/20 cursor-pointer whitespace-nowrap"
          >
            <ShieldCheck className="h-3.5 w-3.5" />
            Run Diagnostics
          </button>
          <button 
            onClick={() => setRoute('command-center')}
            className="flex items-center gap-1.5 px-3.5 py-2 bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 font-semibold text-xs rounded-lg transition-all duration-200 hover:translate-y-[-1px] cursor-pointer whitespace-nowrap"
          >
            <Terminal className="h-3.5 w-3.5" />
            Command Center
          </button>
        </div>
      </div>

      {/* Primary KPI Indicators */}
      <div className="stagger-entry stagger-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div 
          onClick={() => setRoute('projects')}
          className="cursor-pointer group"
        >
          <MetricCard 
            title="Projects State" 
            value={projects.length} 
            icon={<Briefcase className="h-4 w-4 group-hover:scale-110 transition-transform text-blue-600" />}
            subtext={`${activeProjectsCount} currently running nodes`}
            trend={{ value: 'Active', type: 'up' }}
          />
        </div>
        <div 
          onClick={() => setRoute('tasks')}
          className="cursor-pointer group"
        >
          <MetricCard 
            title="Backlog Deficit" 
            value={pendingTasksCount} 
            icon={<CheckSquare className="h-4 w-4 group-hover:scale-110 transition-transform text-blue-600" />}
            subtext="Assigned sprint items pending"
            trend={{ value: 'Review needed', type: 'warning' }}
          />
        </div>
        <div 
          onClick={() => setRoute('finance')}
          className="cursor-pointer group"
        >
          <MetricCard 
            title="Net Operations" 
            value={`$${netProfit.toLocaleString()}`} 
            icon={<DollarSign className="h-4 w-4 group-hover:scale-110 transition-transform text-blue-600" />}
            subtext={`Income of $${incomeTotal.toLocaleString()}`}
            trend={{ value: 'Healthy margin', type: 'up' }}
          />
        </div>
        <div 
          onClick={() => setRoute('settings')}
          className="cursor-pointer group"
        >
          <MetricCard 
            title="Telemetric Health" 
            value={`${systemHealth.cpu}% CPU`} 
            icon={<Activity className="h-4 w-4 group-hover:scale-110 transition-transform text-blue-600" />}
            subtext={`RTT Average: ${systemHealth.latency}ms`}
            trend={{ value: 'Optimal', type: 'neutral' }}
          />
        </div>
      </div>

      {/* Main Content Split Panels */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Double-width Section */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Active Projects Core Registry */}
          <div className="stagger-entry stagger-3 border border-blue-100 bg-white rounded-xl p-5 shadow-xs">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h3 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider font-mono">
                  Primary Node Registry
                </h3>
                <p className="text-[10px] text-slate-500 mt-0.5">
                  Overview of current system-critical deployment sequences
                </p>
              </div>
              <button 
                onClick={() => setRoute('projects')}
                className="text-xs text-blue-700 hover:underline flex items-center gap-0.5 cursor-pointer font-semibold"
              >
                Full Registry <ChevronRight className="h-3 w-3" />
              </button>
            </div>

            <div className="space-y-4">
              {projects.slice(0, 3).map((project) => {
                // Team details lookup
                const manager = users.find(u => u.id === project.managerId);
                const teamMembers = users.filter(u => project.teamIds.includes(u.id));

                return (
                  <div 
                    key={project.id} 
                    onClick={() => setRoute('projects')}
                    className="group border border-blue-100 bg-blue-50/20 hover:border-blue-300 p-4 rounded-xl cursor-pointer transition-all hover:shadow-sm hover:translate-x-0.5 duration-200"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                            {project.name}
                          </span>
                          <StatusBadge status={project.status} />
                          <span className={`text-[9px] font-mono font-bold px-1.5 py-0.5 rounded ${
                            project.priority === 'Critical' || project.priority === 'High'
                              ? 'bg-rose-50 text-rose-600 border border-rose-200'
                              : 'bg-slate-100 text-slate-600'
                          }`}>
                            {project.priority}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-500 line-clamp-1">
                          {project.description}
                        </p>
                      </div>

                      <div className="flex items-center gap-3 self-start sm:self-center">
                        <div className="text-right text-[11px] font-mono hidden sm:block">
                          <span className="text-slate-400 block">Spent / Budget</span>
                          <span className="font-bold text-slate-800">
                            ${project.spent.toLocaleString()} / ${project.budget.toLocaleString()}
                          </span>
                        </div>
                        <AvatarGroup members={teamMembers} max={3} size="xs" />
                      </div>
                    </div>

                    <div className="mt-3 flex items-center gap-3">
                      <div className="flex-1">
                        <ProgressBar value={project.progress} color={project.progress > 80 ? 'bg-emerald-500' : 'bg-blue-600'} height="xs" />
                      </div>
                      <span className="text-[10px] font-mono font-bold text-slate-600">
                        {project.progress}%
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Quick Active Task Backlog */}
          <div className="stagger-entry stagger-4 border border-blue-100 bg-white rounded-xl p-5 shadow-xs">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h3 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider font-mono">
                  Sprinted Task Backlog
                </h3>
                <p className="text-[10px] text-slate-500 mt-0.5">
                  Highest priority backlogs enqueued across nodes
                </p>
              </div>
              <button 
                onClick={() => setRoute('tasks')}
                className="text-xs text-blue-700 hover:underline flex items-center gap-0.5 cursor-pointer font-semibold"
              >
                View Kanban <ChevronRight className="h-3 w-3" />
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="border-b border-blue-100 text-[10px] uppercase font-mono text-slate-500 bg-blue-50/30">
                    <th className="py-2 px-3 font-medium">Task / Priority</th>
                    <th className="py-2 px-3 font-medium">Project</th>
                    <th className="py-2 px-3 font-medium">Assignee</th>
                    <th className="py-2 px-3 font-medium">Status</th>
                    <th className="py-2 px-3 font-medium text-right">Due Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-blue-50">
                  {tasks.slice(0, 4).map((task) => {
                    const assignee = users.find(u => u.id === task.assigneeId);
                    const associatedProj = projects.find(p => p.id === task.projectId);
                    return (
                      <tr 
                        key={task.id}
                        onClick={() => setRoute('tasks')}
                        className="hover:bg-blue-50/40 cursor-pointer transition-colors group"
                      >
                        <td className="py-2.5 px-3">
                          <div className="font-semibold text-slate-900 group-hover:text-blue-700 transition-colors">
                            {task.title}
                          </div>
                          <div className="text-[10px] text-slate-500 mt-0.5 flex items-center gap-1">
                            <span className={`h-1.5 w-1.5 rounded-full ${
                              task.priority === 'Critical' || task.priority === 'High' ? 'bg-rose-500' : 'bg-slate-400'
                            }`} />
                            Priority: {task.priority}
                          </div>
                        </td>
                        <td className="py-2.5 px-3 text-slate-600">
                          {associatedProj ? associatedProj.name : 'Unknown'}
                        </td>
                        <td className="py-2.5 px-3">
                          <div className="flex items-center gap-1.5">
                            <Avatar name={assignee?.name || 'Unassigned'} src={assignee?.avatar} size="xs" />
                            <span className="text-slate-700 font-medium">{assignee?.name}</span>
                          </div>
                        </td>
                        <td className="py-2.5 px-3">
                          <StatusBadge status={task.status} />
                        </td>
                        <td className="py-2.5 px-3 text-right font-mono text-[10px] text-slate-500">
                          {task.dueDate}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Right Section Column */}
        <div className="space-y-6">
          
          {/* Node Health Diagnostics */}
          <div className="stagger-entry stagger-3 border border-blue-100 bg-white rounded-xl p-5 shadow-xs">
            <h3 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider font-mono mb-3">
              Node Core Status
            </h3>
            
            <div className="space-y-4 font-mono text-xs">
              <div className="border border-blue-100 bg-blue-50/30 rounded-xl p-3">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-slate-500">Node Status:</span>
                  <span className="font-extrabold text-emerald-600 flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-live-pulse" />
                    ONLINE
                  </span>
                </div>
                <div className="flex justify-between items-center text-[10px]">
                  <span className="text-slate-500">Uptime:</span>
                  <span className="font-semibold text-slate-700">04:22:15</span>
                </div>
              </div>

              <div className="space-y-2">
                <div>
                  <div className="flex justify-between text-[11px] mb-1">
                    <span className="text-slate-500">CPU LOAD</span>
                    <span className="font-bold text-slate-800">{systemHealth.cpu}%</span>
                  </div>
                  <ProgressBar value={systemHealth.cpu} color={systemHealth.cpu > 75 ? 'bg-amber-500' : 'bg-blue-600'} height="xs" />
                </div>

                <div>
                  <div className="flex justify-between text-[11px] mb-1">
                    <span className="text-slate-500">PERSISTENT MEMORY</span>
                    <span className="font-bold text-slate-800">{systemHealth.disk}%</span>
                  </div>
                  <ProgressBar value={systemHealth.disk} color="bg-blue-600" height="xs" />
                </div>

                <div>
                  <div className="flex justify-between text-[11px] mb-1">
                    <span className="text-slate-500">NET ROUTER RTT</span>
                    <span className="font-bold text-slate-800">{systemHealth.latency}ms</span>
                  </div>
                  <ProgressBar value={Math.min(100, (systemHealth.latency / 150) * 100)} color="bg-emerald-500" height="xs" />
                </div>
              </div>

              <div className="border-t border-blue-100 pt-3 flex justify-between items-center text-[10px] text-slate-500">
                <span>Cluster: core-alpha-us-east</span>
                <span className="text-blue-600 font-semibold">v1.8.4-secure</span>
              </div>
            </div>
          </div>

          {/* Quick Ledger Balance Feed */}
          <div className="stagger-entry stagger-4 border border-blue-100 bg-white rounded-xl p-5 shadow-xs">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider font-mono">
                Recent Ledger Feed
              </h3>
              <button 
                onClick={() => setRoute('finance')}
                className="text-xs text-blue-700 hover:underline cursor-pointer font-semibold"
              >
                Ledger
              </button>
            </div>

            <div className="space-y-2.5">
              {transactions.slice(0, 4).map((tx) => {
                const isIncome = tx.type === 'Income';
                return (
                  <div 
                    key={tx.id} 
                    className="flex justify-between items-center p-2.5 rounded-lg border border-blue-100 bg-blue-50/20 text-xs"
                  >
                    <div className="space-y-0.5">
                      <span className="font-semibold text-slate-900 block truncate max-w-[130px]">
                        {tx.description}
                      </span>
                      <span className="text-[9px] text-slate-500 block font-mono">
                        {tx.date} • {tx.category}
                      </span>
                    </div>

                    <div className="text-right">
                      <span className={`font-mono font-bold flex items-center justify-end ${
                        isIncome ? 'text-emerald-600' : 'text-rose-600'
                      }`}>
                        {isIncome ? <ArrowUpRight className="h-3.5 w-3.5 inline" /> : <ArrowDownRight className="h-3.5 w-3.5 inline" />}
                        ${tx.amount.toLocaleString()}
                      </span>
                      <span className="text-[9px] text-slate-500 block">
                        {tx.status}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Live System Activities Logs */}
          <div className="stagger-entry stagger-5 border border-blue-100 bg-white rounded-xl p-5 shadow-xs">
            <h3 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider font-mono mb-3 flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-blue-600" />
              Event Telemetry Log
            </h3>
            
            <div className="space-y-3 font-mono text-[10px]">
              {recentActivities.map((log) => (
                <div key={log.id} className="border-l-2 border-blue-600 pl-2.5 py-0.5 space-y-0.5">
                  <div className="text-slate-600">
                    <span className="text-blue-700 font-bold">{log.user}</span> {log.action}
                  </div>
                  <span className="text-[9px] text-slate-400 block">{log.time}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
