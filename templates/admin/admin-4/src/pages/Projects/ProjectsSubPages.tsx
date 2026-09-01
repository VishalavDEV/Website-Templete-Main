import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Card } from '../../components/Common/Card';
import { Button } from '../../components/Common/Button';
import { useApp } from '../../context/AppContext';
import { Project } from '../../types';
import { ProjectCreateModal } from './ProjectCreateModal';
import {
  FolderKanban,
  CheckCircle2,
  AlertTriangle,
  Archive,
  Layers,
  Search,
  Filter,
  Plus,
  RefreshCw,
  ArrowRight,
  RotateCcw,
  Eye
} from 'lucide-react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  ComposedChart,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  XAxis,
  YAxis,
  Tooltip,
  Legend
} from 'recharts';

const SUB_TABS = [
  { name: 'Active Projects', path: '/projects/active', icon: FolderKanban },
  { name: 'Backlog & Pipeline', path: '/projects/backlog', icon: Layers },
  { name: 'Completed Portfolio', path: '/projects/completed', icon: CheckCircle2 },
  { name: 'Risk & Overdue', path: '/projects/overdue', icon: AlertTriangle },
  { name: 'Archived Repositories', path: '/projects/archived', icon: Archive }
];

export const ProjectsSubPages: React.FC<{ subPage: string }> = ({ subPage }) => {
  const { projects, restoreProject, updateProject, addToast } = useApp();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('ALL');
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const progressData = [
    { name: 'Nebula Cloud', progress: 85, budgetSpent: 72000, targetBudget: 90000 },
    { name: 'FinTech Vault', progress: 60, budgetSpent: 45000, targetBudget: 80000 },
    { name: 'HealthSync Portal', progress: 95, budgetSpent: 110000, targetBudget: 115000 },
    { name: 'OmniAI Engine', progress: 40, budgetSpent: 30000, targetBudget: 75000 },
    { name: 'CyberShield Sec', progress: 20, budgetSpent: 15000, targetBudget: 60000 }
  ];

  const riskRadarData = [
    { metric: 'Schedule Delay', score: 85 },
    { metric: 'Scope Creep', score: 65 },
    { metric: 'Resource Deficit', score: 40 },
    { metric: 'Budget Variance', score: 75 },
    { metric: 'Tech Debt', score: 90 }
  ];

  const filteredProjects = projects.filter(p => {
    const matchesSearch = (p.name || '').toLowerCase().includes(searchTerm.toLowerCase()) || (p.clientName || '').toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCat = categoryFilter === 'ALL' || p.category === categoryFilter;

    if (subPage === 'active' || !subPage) return matchesSearch && matchesCat && (p.status === 'In Progress' || p.status === 'Planning');
    if (subPage === 'completed') return matchesSearch && matchesCat && p.status === 'Completed';
    if (subPage === 'overdue') return matchesSearch && matchesCat && (p.status === 'On Hold' || p.priority === 'Urgent');
    if (subPage === 'backlog') return matchesSearch && matchesCat && p.status === 'Planning';
    if (subPage === 'archived') return matchesSearch && matchesCat && (p.status === 'Completed' || p.status === 'On Hold' || p.isArchived);
    return matchesSearch && matchesCat;
  });

  const handleAction = (actionName: string, proj: Project) => {
    if (actionName === 'Restore') {
      restoreProject(proj.id);
      addToast(`Restored project "${proj.name}".`, 'success');
    } else if (actionName === 'Move to Active') {
      updateProject({ ...proj, status: 'In Progress' });
      addToast(`Project "${proj.name}" moved to active sprint.`, 'success');
    } else if (actionName === 'Resolve Risk') {
      updateProject({ ...proj, priority: 'Medium' });
      addToast(`Risk resolved for "${proj.name}".`, 'success');
    } else if (actionName === 'Inspect Details') {
      navigate(`/projects/${proj.id}`);
    } else {
      addToast(`${actionName} action performed on "${proj.name}".`, 'info');
    }
  };

  return (
    <div className="space-y-6">
      {/* Header & Sub-Tabs Navigation */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-app pb-4">
        <div>
          <h1 className="text-2xl font-bold text-app-primary flex items-center gap-2">
            <FolderKanban className="w-6 h-6 text-blue-500" />
            Project Portfolio Management
          </h1>
          <p className="text-xs text-app-muted mt-1">
            Track active initiatives, backlog pipelines, risk compliance, and delivered milestones.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="primary" size="sm" icon={<Plus className="w-4 h-4" />} onClick={() => setIsCreateModalOpen(true)}>
            Create Project
          </Button>
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
      </div>

      {/* VISUALIZATION SECTION FOR EACH SUBPAGE */}
      {(subPage === 'active' || !subPage) && (
        <Card title="Active Projects Delivery vs Budget ($ USD)">
          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={progressData}>
                <XAxis dataKey="name" stroke="var(--text-muted)" fontSize={12} />
                <YAxis stroke="var(--text-muted)" fontSize={12} />
                <Tooltip contentStyle={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-color)', color: 'var(--text-primary)' }} />
                <Legend />
                <Bar dataKey="budgetSpent" fill="#3b82f6" name="Spent ($)" radius={[4, 4, 0, 0]} />
                <Bar dataKey="targetBudget" fill="#10b981" name="Target Budget ($)" radius={[4, 4, 0, 0]} />
                <Line type="monotone" dataKey="progress" stroke="#f59e0b" strokeWidth={3} name="Completion %" />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </Card>
      )}

      {subPage === 'backlog' && (
        <Card title="Sprint Backlog Story Point Estimation Matrix">
          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={progressData}>
                <XAxis dataKey="name" stroke="var(--text-muted)" fontSize={12} />
                <YAxis stroke="var(--text-muted)" fontSize={12} />
                <Tooltip contentStyle={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-color)', color: 'var(--text-primary)' }} />
                <Bar dataKey="progress" fill="#8b5cf6" name="Backlog Complexity Points" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
      )}

      {subPage === 'completed' && (
        <Card title="Quarterly Delivery Milestones Completed">
          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={progressData}>
                <XAxis dataKey="name" stroke="var(--text-muted)" fontSize={12} />
                <YAxis stroke="var(--text-muted)" fontSize={12} />
                <Tooltip contentStyle={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-color)', color: 'var(--text-primary)' }} />
                <Line type="monotone" dataKey="progress" stroke="#10b981" strokeWidth={3} name="Final Delivery Score" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>
      )}

      {subPage === 'overdue' && (
        <Card title="Portfolio Risk & Delay Breakdown Radar">
          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={riskRadarData}>
                <PolarGrid stroke="var(--border-color)" />
                <PolarAngleAxis dataKey="metric" stroke="var(--text-primary)" fontSize={12} />
                <PolarRadiusAxis stroke="var(--text-muted)" />
                <Radar name="Risk Index" dataKey="score" stroke="#ef4444" fill="#ef4444" fillOpacity={0.4} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </Card>
      )}

      {subPage === 'archived' && (
        <Card title="Historical Repositories Archive Storage">
          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={[
                  { name: 'FinTech Applications', value: 45 },
                  { name: 'Healthcare Portals', value: 30 },
                  { name: 'SaaS Dashboards', value: 25 }
                ]} cx="50%" cy="50%" outerRadius={90} dataKey="value" label>
                  <Cell fill="#3b82f6" />
                  <Cell fill="#10b981" />
                  <Cell fill="#8b5cf6" />
                </Pie>
                <Tooltip contentStyle={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-color)', color: 'var(--text-primary)' }} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </Card>
      )}

      {/* FILTER CONTROLS & DATA TABLE */}
      <Card title={`Project Data Grid - Category: ${subPage ? subPage.toUpperCase() : 'ACTIVE'}`}>
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <div className="relative w-full sm:w-64">
                <Search className="w-4 h-4 text-app-muted absolute left-3 top-2.5" />
                <input
                  type="text"
                  placeholder="Search project title or client..."
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                  className="w-full bg-app-hover border border-app rounded-xl pl-9 pr-3 py-2 text-xs text-app-primary focus:outline-none focus:border-blue-500"
                />
              </div>
              <select
                value={categoryFilter}
                onChange={e => setCategoryFilter(e.target.value)}
                className="bg-app-hover border border-app rounded-xl px-3 py-2 text-xs text-app-primary focus:outline-none focus:border-blue-500"
              >
                <option value="ALL">All Categories</option>
                <option value="Cloud Architecture">Cloud Architecture</option>
                <option value="FinTech Software">FinTech Software</option>
                <option value="Healthcare Tech">Healthcare Tech</option>
                <option value="Artificial Intelligence">Artificial Intelligence</option>
                <option value="Cybersecurity">Cybersecurity</option>
              </select>
            </div>
            <div className="text-xs text-app-muted font-mono">
              Showing {filteredProjects.length} projects
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-app-secondary/50 text-app-muted font-bold uppercase tracking-wider">
                <tr>
                  <th className="p-3">Project Title</th>
                  <th className="p-3">Category</th>
                  <th className="p-3">Client</th>
                  <th className="p-3">Budget</th>
                  <th className="p-3">Progress</th>
                  <th className="p-3">Status</th>
                  <th className="p-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-app">
                {filteredProjects.map(proj => (
                  <tr key={proj.id} className="hover:bg-app-hover/50">
                    <td
                      className="p-3 font-semibold text-app-primary hover:text-blue-400 cursor-pointer"
                      onClick={() => navigate(`/projects/${proj.id}`)}
                    >
                      {proj.name}
                    </td>
                    <td className="p-3 text-app-secondary">{proj.category}</td>
                    <td className="p-3 text-app-secondary">{proj.clientName}</td>
                    <td className="p-3 font-mono font-semibold text-emerald-400">${proj.budget.toLocaleString()}</td>
                    <td className="p-3">
                      <div className="w-24 bg-app-hover rounded-full h-2 overflow-hidden">
                        <div className="bg-blue-500 h-full rounded-full" style={{ width: `${proj.progress}%` }} />
                      </div>
                    </td>
                    <td className="p-3">
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                        proj.status === 'In Progress' ? 'bg-blue-500/20 text-blue-400' :
                        proj.status === 'Completed' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-amber-500/20 text-amber-400'
                      }`}>
                        {proj.status}
                      </span>
                    </td>
                    <td className="p-3 text-right">
                      <div className="flex items-center justify-end gap-1.5">
                        {subPage === 'archived' ? (
                          <Button size="sm" variant="outline" icon={<RotateCcw className="w-3 h-3" />} onClick={() => handleAction('Restore', proj)}>
                            Restore
                          </Button>
                        ) : subPage === 'backlog' ? (
                          <Button size="sm" variant="primary" icon={<ArrowRight className="w-3 h-3" />} onClick={() => handleAction('Move to Active', proj)}>
                            Start Sprint
                          </Button>
                        ) : subPage === 'overdue' ? (
                          <Button size="sm" variant="outline" icon={<AlertTriangle className="w-3 h-3" />} onClick={() => handleAction('Resolve Risk', proj)}>
                            Resolve Risk
                          </Button>
                        ) : (
                          <Button size="sm" variant="outline" icon={<Eye className="w-3 h-3" />} onClick={() => handleAction('Inspect Details', proj)}>
                            Inspect
                          </Button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Card>

      <ProjectCreateModal isOpen={isCreateModalOpen} onClose={() => setIsCreateModalOpen(false)} />
    </div>
  );
};

