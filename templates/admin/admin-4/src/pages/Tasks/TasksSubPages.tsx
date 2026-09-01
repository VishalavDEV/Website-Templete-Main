import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Card } from '../../components/Common/Card';
import { Button } from '../../components/Common/Button';
import { useApp } from '../../context/AppContext';
import { TaskCreateModal } from './TaskCreateModal';
import { TaskDetailsModal } from './TaskDetailsModal';
import { Task } from '../../types';
import {
  CheckSquare,
  UserCheck,
  Kanban,
  Flag,
  TrendingUp,
  Search,
  Plus,
  ArrowRight,
  CheckCircle2,
  Clock,
  AlertCircle,
  BarChart2,
  Calendar,
  Layers,
  Sparkles,
  Eye
} from 'lucide-react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  Legend
} from 'recharts';

const SUB_TABS = [
  { name: 'Task Directory', path: '/tasks/directory', icon: CheckSquare },
  { name: 'My Assigned Tasks', path: '/tasks/assigned', icon: UserCheck },
  { name: 'Kanban Board', path: '/tasks/kanban', icon: Kanban },
  { name: 'Milestones & Roadmap', path: '/tasks/milestones', icon: Flag },
  { name: 'Velocity Trends', path: '/tasks/velocity', icon: TrendingUp }
];

export const TasksSubPages: React.FC<{ subPage: string }> = ({ subPage }) => {
  const { tasks, milestones, currentUser, addToast } = useApp();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [priorityFilter, setPriorityFilter] = useState('ALL');
  const [localTasks, setLocalTasks] = useState(tasks);

  // Modals state
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);

  const velocityData = [
    { sprint: 'Sprint 21', committed: 45, completed: 42, carryOver: 3 },
    { sprint: 'Sprint 22', committed: 50, completed: 48, carryOver: 2 },
    { sprint: 'Sprint 23', committed: 52, completed: 51, carryOver: 1 },
    { sprint: 'Sprint 24', committed: 60, completed: 56, carryOver: 4 },
    { sprint: 'Sprint 25', committed: 65, completed: 62, carryOver: 3 }
  ];

  const moveTaskStatus = (taskId: string, currentStatus: string) => {
    const statusMap: Record<string, string> = {
      'To Do': 'In Progress',
      'In Progress': 'In Review',
      'In Review': 'Completed',
      'Completed': 'To Do'
    };
    const nextStatus = statusMap[currentStatus] || 'In Progress';
    setLocalTasks(prev => prev.map(t => t.id === taskId ? { ...t, status: nextStatus as any } : t));
    addToast(`Task status updated to "${nextStatus}".`, 'success');
  };

  const toggleTaskCompletion = (taskId: string) => {
    setLocalTasks(prev => prev.map(t => {
      if (t.id === taskId) {
        const isComp = t.status === 'Completed';
        const next = isComp ? 'In Progress' : 'Completed';
        addToast(`Task marked as ${next}.`, isComp ? 'info' : 'success');
        return { ...t, status: next as any };
      }
      return t;
    }));
  };

  const filteredTasks = localTasks.filter(t => {
    const matchesSearch = (t.title || '').toLowerCase().includes(searchTerm.toLowerCase()) || (t.assigneeName || '').toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPriority = priorityFilter === 'ALL' || t.priority === priorityFilter;
    return matchesSearch && matchesPriority;
  });

  const userAssigned = localTasks.filter(t => 
    (t.assigneeName || '').toLowerCase().includes('alexandra') || 
    t.assigneeId === currentUser?.id || 
    t.assigneeName === currentUser?.name
  );
  const myAssignedTasks = userAssigned.length > 0 ? userAssigned : localTasks.slice(0, 5);

  return (
    <div className="space-y-6">
      {/* Header & Sub-Tabs Navigation */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-app pb-4">
        <div>
          <h1 className="text-2xl font-bold text-app-primary flex items-center gap-2">
            <CheckSquare className="w-6 h-6 text-blue-500" />
            Task Workflows & Sprint Management
          </h1>
          <p className="text-xs text-app-muted mt-1">
            Task backlogs, kanban tracking, agile sprint velocity, and milestone targets.
          </p>
        </div>
        <div className="flex items-center gap-2 bg-app-secondary/40 p-1 rounded-xl border border-app overflow-x-auto">
          {SUB_TABS.map(tab => {
            const Icon = tab.icon;
            const isActive = subPage === tab.path.split('/')[2];
            return (
              <NavLink
                key={tab.path}
                to={tab.path}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-app-secondary hover:text-app-primary hover:bg-app-hover'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.name}</span>
              </NavLink>
            );
          })}
        </div>
      </div>

      {/* SUB-PAGE 1: TASK DIRECTORY */}
      {(subPage === 'directory' || !subPage) && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card className="p-4 flex items-center justify-between">
              <div>
                <span className="text-xs text-app-muted">Total Directory Tasks</span>
                <p className="text-2xl font-bold text-app-primary">{localTasks.length}</p>
                <span className="text-[11px] text-blue-400 font-semibold mt-1 block">Active in current workspace</span>
              </div>
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center font-bold">
                <CheckSquare className="w-5 h-5" />
              </div>
            </Card>

            <Card className="p-4 flex items-center justify-between">
              <div>
                <span className="text-xs text-app-muted">Completed Tasks</span>
                <p className="text-2xl font-bold text-emerald-400">{localTasks.filter(t => t.status === 'Completed').length}</p>
                <span className="text-[11px] text-emerald-500 font-semibold mt-1 block">Successfully verified</span>
              </div>
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold">
                <CheckCircle2 className="w-5 h-5" />
              </div>
            </Card>

            <Card className="p-4 flex items-center justify-between">
              <div>
                <span className="text-xs text-app-muted">In Progress</span>
                <p className="text-2xl font-bold text-blue-400">{localTasks.filter(t => t.status === 'In Progress').length}</p>
                <span className="text-[11px] text-blue-400 font-semibold mt-1 block">Under active sprint</span>
              </div>
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center font-bold">
                <Clock className="w-5 h-5" />
              </div>
            </Card>

            <Card className="p-4 flex items-center justify-between">
              <div>
                <span className="text-xs text-app-muted">Urgent Priority</span>
                <p className="text-2xl font-bold text-rose-400">{localTasks.filter(t => t.priority === 'Urgent').length}</p>
                <span className="text-[11px] text-rose-400 font-semibold mt-1 block">Requires immediate focus</span>
              </div>
              <div className="w-10 h-10 rounded-xl bg-rose-500/10 text-rose-400 flex items-center justify-center font-bold">
                <AlertCircle className="w-5 h-5" />
              </div>
            </Card>
          </div>

          <Card title="Task Directory Grid & Filter Control">
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <div className="relative w-full sm:w-64">
                    <Search className="w-4 h-4 text-app-muted absolute left-3 top-2.5" />
                    <input
                      type="text"
                      placeholder="Search task title or assignee..."
                      value={searchTerm}
                      onChange={e => setSearchTerm(e.target.value)}
                      className="w-full bg-app-hover border border-app rounded-xl pl-9 pr-3 py-2 text-xs text-app-primary focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <select
                    value={priorityFilter}
                    onChange={e => setPriorityFilter(e.target.value)}
                    className="bg-app-hover border border-app rounded-xl px-3 py-2 text-xs text-app-primary focus:outline-none focus:border-blue-500"
                  >
                    <option value="ALL">All Priorities</option>
                    <option value="Urgent">Urgent</option>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                  </select>
                </div>
                <Button size="sm" variant="primary" icon={<Plus className="w-3.5 h-3.5" />} onClick={() => setIsCreateModalOpen(true)}>
                  Create Task
                </Button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-app-secondary/50 text-app-muted font-bold uppercase tracking-wider">
                    <tr>
                      <th className="p-3">Task ID</th>
                      <th className="p-3">Title</th>
                      <th className="p-3">Assignee</th>
                      <th className="p-3">Priority</th>
                      <th className="p-3">Estimated</th>
                      <th className="p-3">Status</th>
                      <th className="p-3 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-app">
                    {filteredTasks.map(task => (
                      <tr key={task.id} className="hover:bg-app-hover/50 cursor-pointer" onClick={() => setSelectedTask(task)}>
                        <td className="p-3 font-mono font-semibold text-blue-400">{task.taskCode || task.id}</td>
                        <td className="p-3 font-medium text-app-primary hover:text-blue-400">{task.title}</td>
                        <td className="p-3 text-app-secondary">{task.assigneeName}</td>
                        <td className="p-3">
                          <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                            task.priority === 'Urgent' || task.priority === 'High' ? 'bg-red-500/20 text-red-400' : 'bg-blue-500/20 text-blue-400'
                          }`}>
                            {task.priority}
                          </span>
                        </td>
                        <td className="p-3 text-app-secondary font-mono">{task.estimatedHours}h</td>
                        <td className="p-3">
                          <span className={`px-2 py-0.5 rounded-full font-bold text-[10px] ${
                            task.status === 'Completed' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-blue-500/20 text-blue-400'
                          }`}>
                            {task.status}
                          </span>
                        </td>
                        <td className="p-3 text-right flex items-center justify-end gap-2">
                          <Button size="sm" variant="ghost" icon={<Eye className="w-3.5 h-3.5" />} onClick={(e) => { e.stopPropagation(); setSelectedTask(task); }}>
                            Inspect
                          </Button>
                          <Button size="sm" variant="outline" onClick={(e) => { e.stopPropagation(); moveTaskStatus(task.id, task.status); }}>
                            Advance
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Card>
        </div>
      )}


      {/* SUB-PAGE 2: MY ASSIGNED TASKS */}
      {subPage === 'assigned' && (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-600/20 to-indigo-600/20 border border-blue-500/30 rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">Personal Workload Center</span>
              <h2 className="text-lg font-bold text-app-primary mt-0.5">My Assigned Objectives ({myAssignedTasks.length} Tasks)</h2>
              <p className="text-xs text-app-muted mt-1">
                Tasks explicitly assigned to your profile. Check off items as you complete deliverables.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-right font-mono">
                <span className="text-xs text-app-muted block">Completion Rate</span>
                <span className="text-lg font-extrabold text-emerald-400">
                  {myAssignedTasks.length > 0 
                    ? Math.round((myAssignedTasks.filter(t => t.status === 'Completed').length / myAssignedTasks.length) * 100)
                    : 100}%
                </span>
              </div>
            </div>
          </div>

          <Card title="My Personal Task Checklist">
            <div className="space-y-3">
              {myAssignedTasks.map(t => {
                const isCompleted = t.status === 'Completed';
                return (
                  <div key={t.id} className="p-3.5 rounded-xl bg-app-secondary/30 border border-app flex items-center justify-between hover:bg-app-hover/50 transition-colors">
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={isCompleted}
                        onChange={() => toggleTaskCompletion(t.id)}
                        className="w-4 h-4 rounded border-app text-blue-600 cursor-pointer"
                      />
                      <div>
                        <span className={`text-xs font-semibold block ${isCompleted ? 'line-through text-app-muted' : 'text-app-primary'}`}>
                          {t.title}
                        </span>
                        <div className="flex items-center gap-3 text-[11px] text-app-muted mt-0.5">
                          <span>Project: <strong className="text-app-secondary">{t.projectName || 'CoreVista App'}</strong></span>
                          <span>Due: <strong className="text-app-secondary">{t.dueDate || 'End of Sprint'}</strong></span>
                          <span className="font-mono text-emerald-400">{t.estimatedHours}h est.</span>
                        </div>
                      </div>
                    </div>
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                      t.priority === 'Urgent' ? 'bg-red-500/20 text-red-400' : 'bg-blue-500/20 text-blue-400'
                    }`}>
                      {t.priority}
                    </span>
                  </div>
                );
              })}
            </div>
          </Card>
        </div>
      )}

      {/* SUB-PAGE 3: KANBAN BOARD */}
      {subPage === 'kanban' && (
        <Card title="Interactive Sprint Kanban Board">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {['To Do', 'In Progress', 'In Review', 'Completed'].map(col => {
              const colTasks = localTasks.filter(t => t.status === (col as any) || (col === 'In Review' && t.status === 'Testing'));
              return (
                <div key={col} className="p-3 rounded-2xl bg-app-secondary/30 border border-app space-y-3">
                  <div className="flex items-center justify-between font-bold text-xs text-app-primary border-b border-app pb-2">
                    <div className="flex items-center gap-2">
                      <span className={`w-2 h-2 rounded-full ${
                        col === 'To Do' ? 'bg-amber-400' :
                        col === 'In Progress' ? 'bg-blue-400' :
                        col === 'In Review' ? 'bg-purple-400' : 'bg-emerald-400'
                      }`} />
                      <span>{col}</span>
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-400 text-[10px]">{colTasks.length}</span>
                  </div>
                  <div className="space-y-2 max-h-[500px] overflow-y-auto pr-1 scrollbar-thin">
                    {colTasks.map(t => (
                      <div key={t.id} className="p-3 rounded-xl bg-app-surface border border-app shadow-xs space-y-2 hover:border-blue-500/40 transition-all">
                        <span className="font-semibold text-xs text-app-primary block">{t.title}</span>
                        <div className="flex items-center justify-between text-[10px] text-app-muted">
                          <span>{t.assigneeName}</span>
                          <span className="font-mono text-emerald-400">{t.estimatedHours}h</span>
                        </div>
                        <Button size="sm" variant="outline" className="w-full text-[10px]" icon={<ArrowRight className="w-3 h-3" />} onClick={() => moveTaskStatus(t.id, t.status)}>
                          Advance Stage
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </Card>
      )}

      {/* SUB-PAGE 4: MILESTONES & ROADMAP */}
      {subPage === 'milestones' && (
        <div className="space-y-6">
          <Card title="Quarterly Milestone Targets & Release Roadmap">
            <div className="space-y-4">
              {milestones.map(m => (
                <div key={m.id} className="p-4 rounded-xl bg-app-secondary/30 border border-app space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <span className="font-bold text-sm text-app-primary flex items-center gap-2">
                        <Flag className="w-4 h-4 text-purple-400" />
                        {m.title}
                      </span>
                      <p className="text-xs text-app-muted mt-0.5">{m.description || 'Enterprise delivery release target'}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-app-muted font-mono">Target Date: <strong className="text-app-primary">{m.dueDate}</strong></span>
                      <Button size="sm" variant="primary" icon={<CheckCircle2 className="w-3.5 h-3.5" />} onClick={() => addToast(`Milestone "${m.title}" verified for release.`, 'success')}>
                        Verify Release
                      </Button>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between text-[11px] text-app-muted font-medium">
                      <span>Milestone Progress</span>
                      <span className="text-emerald-400 font-bold">{m.progress || 85}%</span>
                    </div>
                    <div className="w-full bg-app-hover rounded-full h-2 overflow-hidden">
                      <div className="bg-emerald-500 h-full rounded-full" style={{ width: `${m.progress || 85}%` }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      )}

      {/* SUB-PAGE 5: VELOCITY TRENDS */}
      {subPage === 'velocity' && (
        <div className="space-y-6">
          <Card title="Agile Sprint Velocity & Burn-Up ($ Story Points)">
            <div className="h-72 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={velocityData}>
                  <XAxis dataKey="sprint" stroke="var(--text-muted)" fontSize={12} />
                  <YAxis stroke="var(--text-muted)" fontSize={12} />
                  <Tooltip contentStyle={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-color)', color: 'var(--text-primary)' }} />
                  <Legend />
                  <Bar dataKey="committed" fill="#3b82f6" name="Committed Points" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="completed" fill="#10b981" name="Completed Points" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>

          <Card title="Sprint Efficiency & Carryover Breakdown">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-app-secondary/50 text-app-muted font-bold uppercase tracking-wider">
                  <tr>
                    <th className="p-3">Sprint Name</th>
                    <th className="p-3">Committed Points</th>
                    <th className="p-3">Completed Points</th>
                    <th className="p-3">Carryover Points</th>
                    <th className="p-3 text-right">Sprint Efficiency</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-app font-mono">
                  {velocityData.map(s => {
                    const eff = Math.round((s.completed / s.committed) * 100);
                    return (
                      <tr key={s.sprint} className="hover:bg-app-hover/50">
                        <td className="p-3 font-semibold text-app-primary">{s.sprint}</td>
                        <td className="p-3 text-blue-400">{s.committed} pts</td>
                        <td className="p-3 text-emerald-400">{s.completed} pts</td>
                        <td className="p-3 text-amber-400">{s.carryOver} pts</td>
                        <td className="p-3 text-right font-bold text-emerald-400">{eff}%</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      )}

      {/* Interactive Modals */}
      <TaskCreateModal isOpen={isCreateModalOpen} onClose={() => setIsCreateModalOpen(false)} />
      <TaskDetailsModal task={selectedTask} isOpen={!!selectedTask} onClose={() => setSelectedTask(null)} />
    </div>
  );
};


