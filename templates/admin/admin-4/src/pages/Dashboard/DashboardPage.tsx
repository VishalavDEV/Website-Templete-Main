import React from 'react';
import { useApp } from '../../context/AppContext';
import { useNavigate } from 'react-router-dom';
import { Card } from '../../components/Common/Card';
import { Badge } from '../../components/Common/Badge';
import { Avatar } from '../../components/Common/Avatar';
import { Button } from '../../components/Common/Button';
import {
  FolderKanban,
  CheckSquare,
  Users,
  Building2,
  DollarSign,
  TrendingUp,
  Clock,
  ArrowUpRight,
  Plus,
  AlertCircle,
  Play,
  Calendar as CalendarIcon,
  ChevronRight
} from 'lucide-react';

import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend
} from 'recharts';

export const DashboardPage: React.FC = () => {
  const { projects, tasks, users, clients, expenses, activityLogs, activeTimer, startTimer, updateTaskStatus } = useApp();
  const navigate = useNavigate();

  // Metrics computation
  const totalProjects = projects.length;
  const activeProjects = projects.filter(p => p.status === 'In Progress').length;
  const completedProjects = projects.filter(p => p.status === 'Completed').length;
  const totalBudget = projects.reduce((acc, p) => acc + p.budget, 0);
  const totalExpenses = expenses.reduce((acc, e) => acc + e.amount, 0);

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(t => t.status === 'Completed').length;
  const overdueTasks = tasks.filter(t => t.status !== 'Completed' && new Date(t.dueDate) < new Date()).length;

  // Chart data
  const statusPieData = [
    { name: 'In Progress', value: projects.filter(p => p.status === 'In Progress').length, color: '#3b82f6' },
    { name: 'Completed', value: projects.filter(p => p.status === 'Completed').length, color: '#10b981' },
    { name: 'Review', value: projects.filter(p => p.status === 'Review').length, color: '#8b5cf6' },
    { name: 'Planning', value: projects.filter(p => p.status === 'Planning').length, color: '#f59e0b' }
  ];

  const taskVelocityData = [
    { month: 'Oct', created: 28, completed: 24 },
    { month: 'Nov', created: 35, completed: 30 },
    { month: 'Dec', created: 40, completed: 38 },
    { month: 'Jan', created: 48, completed: 42 },
    { month: 'Feb', created: 52, completed: 49 }
  ];

  const teamProductivityData = users.slice(0, 5).map(u => {
    const userTasks = tasks.filter(t => t.assigneeId === u.id);
    const done = userTasks.filter(t => t.status === 'Completed').length;
    return {
      name: u.name.split(' ')[0],
      assigned: userTasks.length,
      completed: done
    };
  });

  const budgetVsActualData = projects.slice(0, 5).map(p => ({
    name: p.name.length > 15 ? p.name.substring(0, 15) + '...' : p.name,
    budget: Math.round(p.budget / 1000),
    spent: Math.round(p.spent / 1000)
  }));

  const myPendingTasks = tasks.filter(t => t.status !== 'Completed').slice(0, 5);
  const upcomingDeadlines = tasks
    .filter(t => t.status !== 'Completed')
    .sort((a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime())
    .slice(0, 5);

  return (
    <div className="space-y-6">
      {/* Top Banner Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-app-surface border border-app p-6 rounded-2xl shadow-xs">
        <div>
          <h1 className="text-xl font-bold text-app-primary">Executive Dashboard</h1>
          <p className="text-xs text-app-secondary mt-1">
            Real-time project health, team productivity, and financial performance across all active workspaces.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" onClick={() => navigate('/reports')}>
            View Full Reports
          </Button>
          <Button variant="primary" size="sm" onClick={() => navigate('/projects')}>
            Manage Projects
          </Button>
        </div>
      </div>

      {/* KPI Summary Cards Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Total Projects */}
        <Card
          onClick={() => navigate('/projects')}
          className="hover:border-blue-500/40 cursor-pointer transition-all hover:scale-[1.01]"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-app-secondary">Total Projects</span>
            <div className="w-8 h-8 rounded-xl bg-blue-500/15 text-blue-400 flex items-center justify-center">
              <FolderKanban className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-3">
            <span className="text-2xl font-bold text-app-primary">{totalProjects}</span>
            <div className="flex items-center gap-1 text-[11px] text-emerald-400 mt-1">
              <TrendingUp className="w-3 h-3" />
              <span>{activeProjects} Active in progress</span>
            </div>
          </div>
        </Card>

        {/* Tasks Completion */}
        <Card
          onClick={() => navigate('/tasks')}
          className="hover:border-emerald-500/40 cursor-pointer transition-all hover:scale-[1.01]"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-app-secondary">Total Tasks</span>
            <div className="w-8 h-8 rounded-xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center">
              <CheckSquare className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-3">
            <span className="text-2xl font-bold text-app-primary">{completedTasks} / {totalTasks}</span>
            <div className="flex items-center gap-1 text-[11px] text-amber-400 mt-1">
              <AlertCircle className="w-3 h-3" />
              <span>{overdueTasks} overdue tasks</span>
            </div>
          </div>
        </Card>

        {/* Team Capacity */}
        <Card
          onClick={() => navigate('/team')}
          className="hover:border-purple-500/40 cursor-pointer transition-all hover:scale-[1.01]"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-app-secondary">Team Members</span>
            <div className="w-8 h-8 rounded-xl bg-purple-500/15 text-purple-400 flex items-center justify-center">
              <Users className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-3">
            <span className="text-2xl font-bold text-app-primary">{users.length}</span>
            <div className="text-[11px] text-app-secondary mt-1">Across 5 departments</div>
          </div>
        </Card>

        {/* Total Budget */}
        <Card
          onClick={() => navigate('/budgets')}
          className="hover:border-amber-500/40 cursor-pointer transition-all hover:scale-[1.01]"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-app-secondary">Total Budget</span>
            <div className="w-8 h-8 rounded-xl bg-amber-500/15 text-amber-400 flex items-center justify-center">
              <DollarSign className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-3">
            <span className="text-2xl font-bold text-app-primary">${(totalBudget / 1000).toFixed(0)}k</span>
            <div className="text-[11px] text-app-secondary mt-1">Spent: ${(totalExpenses / 1000).toFixed(0)}k</div>
          </div>
        </Card>
      </div>

      {/* Analytics Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Project Status Donut Chart */}
        <Card title="Project Distribution" action={<Button variant="ghost" size="sm" onClick={() => navigate('/projects')}>Details</Button>}>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={statusPieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={90}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {statusPieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-color)', borderRadius: '8px', color: 'var(--text-primary)' }}
                />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Task Velocity Area Chart */}
        <Card title="Task Velocity Trend" className="lg:col-span-2" action={<Button variant="ghost" size="sm" onClick={() => navigate('/tasks')}>All Tasks</Button>}>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={taskVelocityData}>
                <defs>
                  <linearGradient id="colorCreated" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorCompleted" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="month" stroke="var(--text-muted)" fontSize={12} />
                <YAxis stroke="var(--text-muted)" fontSize={12} />
                <Tooltip contentStyle={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-color)', color: 'var(--text-primary)' }} />
                <Legend />
                <Area type="monotone" dataKey="created" stroke="#3b82f6" fillOpacity={1} fill="url(#colorCreated)" name="Tasks Created" />
                <Area type="monotone" dataKey="completed" stroke="#10b981" fillOpacity={1} fill="url(#colorCompleted)" name="Tasks Completed" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>

      {/* Lower Multi-Section Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Active Projects Quick Table */}
        <Card title="Active Projects Portfolio" className="lg:col-span-2" noPadding>
          <div className="divide-y divide-app">
            {projects.slice(0, 4).map(p => (
              <div key={p.id} className="p-4 flex items-center justify-between hover:bg-app-hover transition-colors">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-semibold text-blue-400">{p.code}</span>
                    <span
                      onClick={() => navigate(`/projects/${p.id}`)}
                      className="text-sm font-semibold text-app-primary hover:text-blue-400 cursor-pointer"
                    >
                      {p.name}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-app-secondary">
                    <span>Client: {p.clientName}</span>
                    <span>•</span>
                    <span>PM: {p.projectManagerName}</span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  {/* Progress bar */}
                  <div className="w-28 hidden sm:block">
                    <div className="flex items-center justify-between text-[11px] font-medium mb-1">
                      <span className="text-app-secondary">Progress</span>
                      <span className="text-app-primary">{p.progress}%</span>
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-app-secondary overflow-hidden">
                      <div className="h-full bg-blue-500 rounded-full" style={{ width: `${p.progress}%` }} />
                    </div>
                  </div>

                  <Badge variant={p.status === 'In Progress' ? 'in_progress' : p.status === 'Completed' ? 'completed' : 'warning'}>
                    {p.status}
                  </Badge>

                  <Button variant="ghost" size="sm" onClick={() => navigate(`/projects/${p.id}`)}>
                    <ArrowUpRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* My Tasks Checklist */}
        <Card title="My Quick Task List" action={<Button variant="ghost" size="sm" onClick={() => navigate('/kanban')}>Kanban Board</Button>}>
          <div className="space-y-2.5">
            {myPendingTasks.map(t => (
              <div key={t.id} className="flex items-start justify-between p-3 rounded-xl bg-app-secondary/40 border border-app text-xs gap-3">
                <div className="flex items-start gap-2.5">
                  <input
                    type="checkbox"
                    checked={t.status === 'Completed'}
                    onChange={() => updateTaskStatus(t.id, t.status === 'Completed' ? 'To Do' : 'Completed')}
                    className="mt-0.5 rounded border-app cursor-pointer text-blue-600"
                  />
                  <div>
                    <p className="font-semibold text-app-primary line-clamp-1">{t.title}</p>
                    <p className="text-[11px] text-app-secondary mt-0.5">{t.projectName}</p>
                  </div>
                </div>
                <div className="flex flex-col items-end shrink-0 gap-1">
                  <Badge variant={t.priority === 'Urgent' ? 'urgent' : t.priority === 'High' ? 'danger' : 'neutral'} size="sm">
                    {t.priority}
                  </Badge>
                  <button
                    onClick={() => startTimer(t.projectId, t.id, t.title)}
                    className="text-[10px] text-blue-400 hover:underline flex items-center gap-0.5 cursor-pointer"
                  >
                    <Play className="w-3 h-3 fill-current" /> Start Timer
                  </button>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Activity & Upcoming Deadlines */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity Log */}
        <Card title="Recent Activity Feed" action={<Button variant="ghost" size="sm" onClick={() => navigate('/activity')}>All Activity</Button>}>
          <div className="space-y-3">
            {activityLogs.slice(0, 4).map(act => (
              <div key={act.id} className="flex items-start gap-3 text-xs">
                <Avatar src={act.userAvatar} name={act.userName} size="sm" />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-app-primary">{act.userName}</span>
                    <span className="text-[10px] text-app-muted">{act.timestamp}</span>
                  </div>
                  <p className="text-app-secondary mt-0.5">
                    <span className="font-medium text-blue-400">{act.action}</span> on{' '}
                    <span className="font-medium text-app-primary">{act.entityName}</span>
                  </p>
                  <p className="text-[11px] text-app-muted mt-0.5">{act.details}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Upcoming Deadlines */}
        <Card title="Upcoming Task Deadlines" action={<Button variant="ghost" size="sm" onClick={() => navigate('/calendar')}>Calendar View</Button>}>
          <div className="space-y-2.5">
            {upcomingDeadlines.map(t => (
              <div key={t.id} className="flex items-center justify-between p-3 rounded-xl bg-app-secondary/40 border border-app text-xs">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/15 text-amber-400 flex items-center justify-center shrink-0">
                    <CalendarIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-semibold text-app-primary">{t.title}</p>
                    <p className="text-[11px] text-app-secondary">{t.projectName} • Assigned to {t.assigneeName}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="font-mono text-amber-400 font-medium">{t.dueDate}</span>
                  <p className="text-[10px] text-app-muted">Due Date</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};
