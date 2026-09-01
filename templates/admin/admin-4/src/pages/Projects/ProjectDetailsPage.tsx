import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useApp } from '../../context/AppContext';
import { Card } from '../../components/Common/Card';
import { Badge } from '../../components/Common/Badge';
import { Avatar } from '../../components/Common/Avatar';
import { Button } from '../../components/Common/Button';
import { Tabs, TabItem } from '../../components/Common/Tabs';
import {
  FolderKanban,
  CheckSquare,
  Kanban,
  Calendar as CalendarIcon,
  Flag,
  Users,
  FileText,
  MessageSquare,
  Clock,
  CircleDollarSign,
  History,
  ArrowLeft,
  Plus,
  Play,
  Share2,
  Edit,
  Trash2,
  DollarSign
} from 'lucide-react';

export const ProjectDetailsPage: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();
  const {
    projects,
    tasks,
    milestones,
    users,
    files,
    timeEntries,
    expenses,
    activityLogs,
    updateTaskStatus,
    startTimer,
    sendChatMessage,
    chatMessages
  } = useApp();

  const project = projects.find(p => p.id === projectId) || projects[0];
  const [activeTab, setActiveTab] = useState('overview');
  const [discussionInput, setDiscussionInput] = useState('');

  if (!project) {
    return <div className="p-8 text-center text-app-muted">Project not found.</div>;
  }

  const projectTasks = tasks.filter(t => t.projectId === project.id);
  const projectMilestones = milestones.filter(m => m.projectId === project.id);
  const projectFiles = files.filter(f => f.projectId === project.id);
  const projectTimeEntries = timeEntries.filter(te => te.projectId === project.id);
  const projectExpenses = expenses.filter(e => e.projectId === project.id);
  const projectActivity = activityLogs.filter(a => a.entityId === project.id || a.details.includes(project.name));

  const totalSpent = projectExpenses.reduce((acc, e) => acc + e.amount, 0);

  const tabs: TabItem[] = [
    { id: 'overview', label: 'Overview', icon: <FolderKanban /> },
    { id: 'tasks', label: 'Tasks', icon: <CheckSquare />, badge: projectTasks.length },
    { id: 'kanban', label: 'Kanban Board', icon: <Kanban /> },
    { id: 'timeline', label: 'Timeline', icon: <CalendarIcon /> },
    { id: 'milestones', label: 'Milestones', icon: <Flag />, badge: projectMilestones.length },
    { id: 'team', label: 'Team', icon: <Users /> },
    { id: 'files', label: 'Files', icon: <FileText />, badge: projectFiles.length },
    { id: 'discussions', label: 'Discussions', icon: <MessageSquare /> },
    { id: 'time', label: 'Time Tracking', icon: <Clock /> },
    { id: 'financials', label: 'Financials', icon: <CircleDollarSign /> },
    { id: 'activity', label: 'Activity', icon: <History /> }
  ];

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!discussionInput.trim()) return;
    sendChatMessage('ch-2', discussionInput);
    setDiscussionInput('');
  };

  return (
    <div className="space-y-6">
      {/* Top Banner Header */}
      <div className="bg-app-surface border border-app rounded-2xl p-6 space-y-4 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm" icon={<ArrowLeft className="w-4 h-4" />} onClick={() => navigate('/projects')}>
              Back
            </Button>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-semibold text-blue-400">{project.code}</span>
                <Badge variant={project.status === 'In Progress' ? 'in_progress' : project.status === 'Completed' ? 'completed' : 'warning'}>
                  {project.status}
                </Badge>
                <Badge variant={project.priority === 'Urgent' ? 'urgent' : 'danger'}>
                  {project.priority}
                </Badge>
              </div>
              <h1 className="text-xl font-bold text-app-primary mt-1">{project.name}</h1>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" icon={<Share2 className="w-4 h-4" />}>
              Share
            </Button>
            <Button variant="primary" size="sm" icon={<Plus className="w-4 h-4" />} onClick={() => navigate('/tasks')}>
              Add Task
            </Button>
          </div>
        </div>

        {/* Info Grid Pills */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-3 border-t border-app text-xs">
          <div>
            <span className="text-app-muted block">Client</span>
            <span className="font-semibold text-app-primary">{project.clientName}</span>
          </div>
          <div>
            <span className="text-app-muted block">Project Lead</span>
            <div className="flex items-center gap-1.5 mt-0.5">
              <Avatar src={project.projectManagerAvatar} name={project.projectManagerName} size="xs" />
              <span className="font-semibold text-app-primary">{project.projectManagerName}</span>
            </div>
          </div>
          <div>
            <span className="text-app-muted block">Duration</span>
            <span className="font-semibold text-app-primary">{project.startDate} to {project.endDate}</span>
          </div>
          <div>
            <span className="text-app-muted block">Budget Utilization</span>
            <span className="font-semibold text-app-primary">${totalSpent.toLocaleString()} / ${project.budget.toLocaleString()}</span>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <Tabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />

      {/* Tab 1: Overview */}
      {activeTab === 'overview' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card title="Project Summary & Deliverables" className="lg:col-span-2 space-y-4">
            <p className="text-sm text-app-primary leading-relaxed">{project.description}</p>
            <div className="space-y-2 pt-3 border-t border-app">
              <h4 className="text-xs font-bold text-app-primary uppercase tracking-wider">Target Category</h4>
              <Badge variant="purple">{project.category}</Badge>
            </div>
            <div className="space-y-2 pt-3 border-t border-app">
              <h4 className="text-xs font-bold text-app-primary uppercase tracking-wider">Tags & Stack</h4>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map(t => (
                  <span key={t} className="px-2.5 py-1 rounded-md bg-app-secondary border border-app text-xs font-mono text-app-secondary">
                    #{t}
                  </span>
                ))}
              </div>
            </div>
          </Card>

          {/* Health Metrics */}
          <div className="space-y-6">
            <Card title="Project Progress Health">
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between text-xs font-semibold mb-1">
                    <span className="text-app-secondary">Completion Rate</span>
                    <span className="text-app-primary">{project.progress}%</span>
                  </div>
                  <div className="w-full h-3 rounded-full bg-app-secondary overflow-hidden">
                    <div className="h-full bg-blue-500 rounded-full" style={{ width: `${project.progress}%` }} />
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 text-xs text-blue-300 space-y-1">
                  <div className="font-semibold">Milestone Status</div>
                  <p>{projectMilestones.filter(m => m.status === 'Completed').length} of {projectMilestones.length} milestones reached.</p>
                </div>
              </div>
            </Card>

            <Card title="Key Personnel">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Avatar src={project.projectManagerAvatar} name={project.projectManagerName} size="md" />
                  <div>
                    <p className="text-xs font-bold text-app-primary">{project.projectManagerName}</p>
                    <p className="text-[11px] text-app-secondary">Lead Project Manager</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      )}

      {/* Tab 2: Tasks */}
      {activeTab === 'tasks' && (
        <Card title={`Project Tasks (${projectTasks.length})`} action={<Button size="sm" icon={<Plus className="w-4 h-4" />} onClick={() => navigate('/tasks')}>Add Task</Button>} noPadding>
          <div className="divide-y divide-app">
            {projectTasks.map(t => (
              <div key={t.id} className="p-4 flex items-center justify-between hover:bg-app-hover transition-colors">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={t.status === 'Completed'}
                    onChange={() => updateTaskStatus(t.id, t.status === 'Completed' ? 'To Do' : 'Completed')}
                    className="rounded border-app text-blue-600 cursor-pointer"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-semibold text-emerald-400">{t.taskCode}</span>
                      <span className="text-sm font-semibold text-app-primary">{t.title}</span>
                    </div>
                    <p className="text-xs text-app-secondary mt-0.5">Assigned to: {t.assigneeName} • Due: {t.dueDate}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant={t.priority === 'Urgent' ? 'urgent' : t.priority === 'High' ? 'danger' : 'neutral'}>
                    {t.priority}
                  </Badge>
                  <button
                    onClick={() => startTimer(project.id, t.id, t.title)}
                    className="p-1.5 rounded-lg text-blue-400 hover:bg-blue-500/10 cursor-pointer"
                    title="Start Live Timer"
                  >
                    <Play className="w-4 h-4 fill-current" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </Card>
      )}

      {/* Tab 3: Kanban */}
      {activeTab === 'kanban' && (
        <div className="p-4 bg-app-surface border border-app rounded-2xl">
          <Button onClick={() => navigate('/kanban')}>Open Full Drag and Drop Board</Button>
        </div>
      )}

      {/* Tab 4: Timeline / Gantt */}
      {activeTab === 'timeline' && (
        <Card title="Gantt Timeline Schedule">
          <div className="space-y-4 text-xs">
            {projectTasks.map(t => (
              <div key={t.id} className="space-y-1">
                <div className="flex justify-between font-semibold">
                  <span>{t.title}</span>
                  <span className="text-app-muted">{t.startDate} - {t.dueDate}</span>
                </div>
                <div className="w-full h-3 rounded-full bg-app-secondary overflow-hidden">
                  <div
                    className={`h-full rounded-full ${t.status === 'Completed' ? 'bg-emerald-500' : 'bg-blue-500'}`}
                    style={{ width: t.status === 'Completed' ? '100%' : '60%' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>
      )}

      {/* Tab 5: Milestones */}
      {activeTab === 'milestones' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projectMilestones.map(m => (
            <Card key={m.id} title={m.title}>
              <p className="text-xs text-app-secondary">{m.description}</p>
              <div className="mt-3 pt-3 border-t border-app flex items-center justify-between text-xs">
                <span>Due: <strong className="text-app-primary">{m.dueDate}</strong></span>
                <Badge variant={m.status === 'Completed' ? 'completed' : 'in_progress'}>{m.status}</Badge>
              </div>
            </Card>
          ))}
        </div>
      )}

      {/* Tab 6: Team */}
      {activeTab === 'team' && (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {users.slice(0, 4).map(u => (
            <Card key={u.id}>
              <div className="flex items-center gap-3">
                <Avatar src={u.avatar} name={u.name} size="lg" />
                <div>
                  <p className="text-sm font-bold text-app-primary">{u.name}</p>
                  <p className="text-xs text-app-secondary">{u.role}</p>
                  <Badge variant="info" size="sm" className="mt-1">{u.availabilityHoursPerWeek}h/wk</Badge>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}

      {/* Tab 7: Files */}
      {activeTab === 'files' && (
        <Card title="Project Attachments & Documents">
          <div className="space-y-2">
            {projectFiles.map(f => (
              <div key={f.id} className="flex items-center justify-between p-3 rounded-xl bg-app-secondary/40 border border-app text-xs">
                <span className="font-semibold text-app-primary">{f.name}</span>
                <span className="text-app-muted">{f.size}</span>
              </div>
            ))}
          </div>
        </Card>
      )}

      {/* Tab 8: Discussions */}
      {activeTab === 'discussions' && (
        <Card title="Project Discussion Room">
          <div className="space-y-4">
            <div className="max-h-60 overflow-y-auto space-y-3 p-3 bg-app-secondary/30 rounded-xl border border-app">
              {chatMessages.map(msg => (
                <div key={msg.id} className="flex items-start gap-2.5 text-xs">
                  <Avatar src={msg.senderAvatar} name={msg.senderName} size="xs" />
                  <div>
                    <span className="font-semibold text-app-primary mr-2">{msg.senderName}</span>
                    <span className="text-[10px] text-app-muted">{msg.timestamp}</span>
                    <p className="text-app-secondary mt-0.5">{msg.content}</p>
                  </div>
                </div>
              ))}
            </div>

            <form onSubmit={handleSendMessage} className="flex gap-2">
              <input
                type="text"
                value={discussionInput}
                onChange={e => setDiscussionInput(e.target.value)}
                placeholder="Post a message to project team..."
                className="flex-1 px-4 py-2 rounded-xl bg-app-secondary border border-app text-xs text-app-primary focus:outline-none"
              />
              <Button type="submit" variant="primary" size="sm">Post</Button>
            </form>
          </div>
        </Card>
      )}

      {/* Tab 9: Time Tracking */}
      {activeTab === 'time' && (
        <Card title="Recorded Hours Ledger">
          <div className="space-y-2 text-xs">
            {projectTimeEntries.map(te => (
              <div key={te.id} className="flex items-center justify-between p-3 rounded-xl bg-app-secondary/40 border border-app">
                <div>
                  <p className="font-semibold text-app-primary">{te.taskTitle}</p>
                  <p className="text-[11px] text-app-secondary">{te.userName} • {te.date}</p>
                </div>
                <span className="font-bold text-blue-400">{te.hours} hrs</span>
              </div>
            ))}
          </div>
        </Card>
      )}

      {/* Tab 10: Financials */}
      {activeTab === 'financials' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card title="Budget Overview">
            <div className="space-y-2 text-sm">
              <div className="flex justify-between"><span>Allocated Budget:</span> <strong className="text-app-primary">${project.budget.toLocaleString()}</strong></div>
              <div className="flex justify-between"><span>Total Expenses:</span> <strong className="text-amber-400">${totalSpent.toLocaleString()}</strong></div>
              <div className="flex justify-between pt-2 border-t border-app"><span>Remaining:</span> <strong className="text-emerald-400">${(project.budget - totalSpent).toLocaleString()}</strong></div>
            </div>
          </Card>
        </div>
      )}

      {/* Tab 11: Activity */}
      {activeTab === 'activity' && (
        <Card title="Project Activity Log">
          <div className="space-y-3 text-xs">
            {activityLogs.map(a => (
              <div key={a.id} className="flex items-start gap-2.5">
                <Avatar src={a.userAvatar} name={a.userName} size="xs" />
                <div>
                  <span className="font-semibold text-app-primary">{a.userName}</span>
                  <span className="text-[10px] text-app-muted ml-2">{a.timestamp}</span>
                  <p className="text-app-secondary">{a.action}: {a.details}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      )}
    </div>
  );
};
