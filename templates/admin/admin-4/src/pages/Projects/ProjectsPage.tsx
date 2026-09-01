import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { useNavigate } from 'react-router-dom';
import { Card } from '../../components/Common/Card';
import { Button } from '../../components/Common/Button';
import { Badge } from '../../components/Common/Badge';
import { Avatar } from '../../components/Common/Avatar';
import { Pagination } from '../../components/Common/Pagination';
import { ConfirmDialog } from '../../components/Common/ConfirmDialog';
import { ProjectCreateModal } from './ProjectCreateModal';
import {
  FolderKanban,
  Search,
  Filter,
  Plus,
  LayoutGrid,
  List,
  Download,
  Copy,
  Archive,
  RotateCcw,
  Trash2,
  MoreVertical,
  ArrowUpRight,
  DollarSign,
  Calendar,
  CheckCircle2
} from 'lucide-react';
import { Project, ProjectStatus } from '../../types';

export const ProjectsPage: React.FC = () => {
  const { projects, deleteProject, archiveProject, restoreProject, duplicateProject, addToast } = useApp();
  const navigate = useNavigate();

  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('All');
  const [priorityFilter, setPriorityFilter] = useState<string>('All');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  // Modals state
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [confirmTarget, setConfirmTarget] = useState<{ id: string; action: 'delete' | 'archive' | 'restore'; name: string } | null>(null);

  // Selected for bulk actions
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  // Filtering
  const filteredProjects = projects.filter(p => {
    const matchesSearch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.clientName.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus =
      statusFilter === 'All'
        ? !p.isArchived
        : statusFilter === 'Archived'
        ? p.isArchived
        : p.status === statusFilter && !p.isArchived;

    const matchesPriority = priorityFilter === 'All' ? true : p.priority === priorityFilter;

    return matchesSearch && matchesStatus && matchesPriority;
  });

  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const paginatedProjects = filteredProjects.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const toggleSelectAll = () => {
    if (selectedIds.length === paginatedProjects.length) {
      setSelectedIds([]);
    } else {
      setSelectedIds(paginatedProjects.map(p => p.id));
    }
  };

  const toggleSelectOne = (id: string) => {
    setSelectedIds(prev => (prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]));
  };

  const handleExportCSV = () => {
    const headers = ['Project Code', 'Name', 'Client', 'Manager', 'Status', 'Priority', 'Budget ($)', 'Spent ($)', 'Progress (%)', 'Start Date', 'End Date'];
    const rows = filteredProjects.map(p => [
      p.code,
      `"${p.name.replace(/"/g, '""')}"`,
      `"${p.clientName}"`,
      `"${p.projectManagerName}"`,
      p.status,
      p.priority,
      p.budget,
      p.spent,
      p.progress,
      p.startDate,
      p.endDate
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `CoreVista_Projects_Report_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    addToast('Exported project report to CSV successfully.', 'success');
  };

  const handleConfirmAction = () => {
    if (!confirmTarget) return;
    if (confirmTarget.action === 'delete') {
      deleteProject(confirmTarget.id);
    } else if (confirmTarget.action === 'archive') {
      archiveProject(confirmTarget.id);
    } else if (confirmTarget.action === 'restore') {
      restoreProject(confirmTarget.id);
    }
    setConfirmTarget(null);
  };

  return (
    <div className="space-y-6">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-bold text-app-primary">Projects Portfolio</h1>
          <p className="text-xs text-app-secondary mt-0.5">
            Manage enterprise client engagements, milestone timelines, budgets, and team allocations.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" icon={<Download className="w-4 h-4" />} onClick={handleExportCSV}>
            Export CSV
          </Button>
          <Button
            variant="primary"
            size="sm"
            icon={<Plus className="w-4 h-4" />}
            onClick={() => setIsCreateModalOpen(true)}
          >
            Create Project
          </Button>
        </div>
      </div>

      {/* Filter and Control Bar */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 bg-app-surface p-4 border border-app rounded-2xl">
        {/* Search */}
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-app-muted absolute left-3 top-3" />
          <input
            type="text"
            value={searchQuery}
            onChange={e => {
              setSearchQuery(e.target.value);
              setCurrentPage(1);
            }}
            placeholder="Search by project name, code, or client..."
            className="w-full pl-9 pr-4 py-2 rounded-xl bg-app-secondary border border-app text-xs text-app-primary placeholder-app-muted focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Status Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
          {['All', 'In Progress', 'Review', 'Completed', 'Archived'].map(st => (
            <button
              key={st}
              onClick={() => {
                setStatusFilter(st);
                setCurrentPage(1);
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-colors cursor-pointer whitespace-nowrap ${
                statusFilter === st
                  ? 'bg-blue-600 text-white font-semibold shadow-xs'
                  : 'bg-app-secondary text-app-secondary hover:text-app-primary hover:bg-app-hover border border-app'
              }`}
            >
              {st}
            </button>
          ))}
        </div>

        {/* View Toggle */}
        <div className="flex items-center gap-1 bg-app-secondary p-1 rounded-xl border border-app self-end md:self-auto">
          <button
            onClick={() => setViewMode('grid')}
            className={`p-1.5 rounded-lg transition-colors ${viewMode === 'grid' ? 'bg-app-surface text-app-primary shadow-xs' : 'text-app-muted hover:text-app-primary'}`}
            title="Grid View"
          >
            <LayoutGrid className="w-4 h-4" />
          </button>
          <button
            onClick={() => setViewMode('table')}
            className={`p-1.5 rounded-lg transition-colors ${viewMode === 'table' ? 'bg-app-surface text-app-primary shadow-xs' : 'text-app-muted hover:text-app-primary'}`}
            title="Table View"
          >
            <List className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Grid View */}
      {viewMode === 'grid' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {paginatedProjects.map(p => (
            <Card
              key={p.id}
              className="flex flex-col justify-between hover:border-blue-500/50 transition-all group"
            >
              <div className="space-y-3">
                {/* Top badges */}
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-semibold text-blue-400">{p.code}</span>
                  <Badge variant={p.status === 'In Progress' ? 'in_progress' : p.status === 'Completed' ? 'completed' : p.status === 'Archived' ? 'neutral' : 'warning'}>
                    {p.status}
                  </Badge>
                </div>

                {/* Title & Description */}
                <div>
                  <h3
                    onClick={() => navigate(`/projects/${p.id}`)}
                    className="text-base font-bold text-app-primary hover:text-blue-400 cursor-pointer line-clamp-1"
                  >
                    {p.name}
                  </h3>
                  <p className="text-xs text-app-secondary mt-1 line-clamp-2 leading-relaxed">
                    {p.description}
                  </p>
                </div>

                {/* Client & PM */}
                <div className="pt-2 border-t border-app space-y-1.5 text-xs text-app-secondary">
                  <div className="flex items-center justify-between">
                    <span>Client:</span>
                    <span className="font-semibold text-app-primary">{p.clientName}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Manager:</span>
                    <div className="flex items-center gap-1.5">
                      <Avatar src={p.projectManagerAvatar} name={p.projectManagerName} size="xs" />
                      <span className="font-medium text-app-primary">{p.projectManagerName}</span>
                    </div>
                  </div>
                </div>

                {/* Progress bar */}
                <div>
                  <div className="flex items-center justify-between text-xs font-medium mb-1">
                    <span className="text-app-secondary">Completion</span>
                    <span className="text-app-primary">{p.progress}%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-app-secondary overflow-hidden">
                    <div className="h-full bg-blue-500 rounded-full" style={{ width: `${p.progress}%` }} />
                  </div>
                </div>

                {/* Budget & Tasks */}
                <div className="flex items-center justify-between text-xs text-app-muted pt-2 border-t border-app">
                  <span>Budget: <strong className="text-app-primary">${(p.budget / 1000).toFixed(0)}k</strong></span>
                  <span>Tasks: <strong className="text-app-primary">{p.completedTasksCount}/{p.tasksCount}</strong></span>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="mt-4 pt-3 border-t border-app flex items-center justify-between">
                <Button variant="ghost" size="sm" onClick={() => navigate(`/projects/${p.id}`)}>
                  View Details
                </Button>
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => duplicateProject(p.id)}
                    className="p-1.5 rounded-lg text-app-muted hover:text-app-primary hover:bg-app-hover"
                    title="Duplicate Project"
                  >
                    <Copy className="w-3.5 h-3.5" />
                  </button>
                  {p.isArchived ? (
                    <button
                      onClick={() => setConfirmTarget({ id: p.id, action: 'restore', name: p.name })}
                      className="p-1.5 rounded-lg text-emerald-400 hover:bg-emerald-500/10"
                      title="Restore Project"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                    </button>
                  ) : (
                    <button
                      onClick={() => setConfirmTarget({ id: p.id, action: 'archive', name: p.name })}
                      className="p-1.5 rounded-lg text-app-muted hover:text-amber-400 hover:bg-amber-500/10"
                      title="Archive Project"
                    >
                      <Archive className="w-3.5 h-3.5" />
                    </button>
                  )}
                  <button
                    onClick={() => setConfirmTarget({ id: p.id, action: 'delete', name: p.name })}
                    className="p-1.5 rounded-lg text-app-muted hover:text-rose-400 hover:bg-rose-500/10"
                    title="Delete Project"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}

      {/* Table View */}
      {viewMode === 'table' && (
        <div className="bg-app-surface border border-app rounded-2xl overflow-hidden shadow-xs">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-app-primary">
              <thead className="bg-app-secondary/60 border-b border-app text-app-muted uppercase tracking-wider font-semibold">
                <tr>
                  <th className="p-3.5 pl-5">Code</th>
                  <th className="p-3.5">Project Name</th>
                  <th className="p-3.5">Client</th>
                  <th className="p-3.5">Manager</th>
                  <th className="p-3.5">Status</th>
                  <th className="p-3.5">Priority</th>
                  <th className="p-3.5">Progress</th>
                  <th className="p-3.5">Budget</th>
                  <th className="p-3.5 text-right pr-5">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-app">
                {paginatedProjects.map(p => (
                  <tr key={p.id} className="hover:bg-app-hover transition-colors">
                    <td className="p-3.5 pl-5 font-mono text-blue-400 font-semibold">{p.code}</td>
                    <td
                      onClick={() => navigate(`/projects/${p.id}`)}
                      className="p-3.5 font-bold hover:text-blue-400 cursor-pointer"
                    >
                      {p.name}
                    </td>
                    <td className="p-3.5 text-app-secondary">{p.clientName}</td>
                    <td className="p-3.5">
                      <div className="flex items-center gap-2">
                        <Avatar src={p.projectManagerAvatar} name={p.projectManagerName} size="xs" />
                        <span>{p.projectManagerName}</span>
                      </div>
                    </td>
                    <td className="p-3.5">
                      <Badge variant={p.status === 'In Progress' ? 'in_progress' : p.status === 'Completed' ? 'completed' : 'warning'}>
                        {p.status}
                      </Badge>
                    </td>
                    <td className="p-3.5">
                      <Badge variant={p.priority === 'Urgent' ? 'urgent' : p.priority === 'High' ? 'danger' : 'neutral'}>
                        {p.priority}
                      </Badge>
                    </td>
                    <td className="p-3.5 w-32">
                      <div className="flex items-center gap-2">
                        <div className="w-full h-1.5 rounded-full bg-app-secondary overflow-hidden">
                          <div className="h-full bg-blue-500 rounded-full" style={{ width: `${p.progress}%` }} />
                        </div>
                        <span className="font-semibold">{p.progress}%</span>
                      </div>
                    </td>
                    <td className="p-3.5 font-semibold">${p.budget.toLocaleString()}</td>
                    <td className="p-3.5 text-right pr-5">
                      <div className="flex items-center justify-end gap-1">
                        <Button variant="ghost" size="sm" onClick={() => navigate(`/projects/${p.id}`)}>
                          View
                        </Button>
                        <button
                          onClick={() => duplicateProject(p.id)}
                          className="p-1.5 rounded-lg text-app-muted hover:text-app-primary"
                        >
                          <Copy className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => setConfirmTarget({ id: p.id, action: 'delete', name: p.name })}
                          className="p-1.5 rounded-lg text-app-muted hover:text-rose-400"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
        totalItems={filteredProjects.length}
        itemsPerPage={itemsPerPage}
      />

      {/* Modals & Dialogs */}
      <ProjectCreateModal isOpen={isCreateModalOpen} onClose={() => setIsCreateModalOpen(false)} />

      <ConfirmDialog
        isOpen={!!confirmTarget}
        onClose={() => setConfirmTarget(null)}
        onConfirm={handleConfirmAction}
        title={`${confirmTarget?.action.toUpperCase()} Project`}
        message={`Are you sure you want to ${confirmTarget?.action} "${confirmTarget?.name}"? This action can be undone from settings/archives.`}
      />
    </div>
  );
};
