import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Card } from '../../components/Common/Card';
import { Button } from '../../components/Common/Button';
import { Badge } from '../../components/Common/Badge';
import { Avatar } from '../../components/Common/Avatar';
import { Pagination } from '../../components/Common/Pagination';
import { TaskCreateModal } from './TaskCreateModal';
import { TaskDetailsModal } from './TaskDetailsModal';
import { Task, TaskStatus, TaskPriority } from '../../types';
import {
  CheckSquare,
  Search,
  Filter,
  Plus,
  Play,
  Calendar,
  Clock,
  User,
  AlertCircle,
  Trash2,
  CheckCircle2
} from 'lucide-react';

export const TasksPage: React.FC = () => {
  const { tasks, currentUser, updateTaskStatus, deleteTask, startTimer } = useApp();

  const [activeTabFilter, setActiveTabFilter] = useState<'All' | 'My Tasks' | 'Pending' | 'Completed' | 'Overdue'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [priorityFilter, setPriorityFilter] = useState<string>('All');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Modals state
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);

  const filteredTasks = tasks.filter(t => {
    const matchesSearch =
      t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.taskCode.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.projectName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.assigneeName.toLowerCase().includes(searchQuery.toLowerCase());

    const isMyTask = t.assigneeId === currentUser.id;
    const isOverdue = t.status !== 'Completed' && new Date(t.dueDate) < new Date();

    let matchesTab = true;
    if (activeTabFilter === 'My Tasks') matchesTab = isMyTask;
    if (activeTabFilter === 'Pending') matchesTab = t.status !== 'Completed';
    if (activeTabFilter === 'Completed') matchesTab = t.status === 'Completed';
    if (activeTabFilter === 'Overdue') matchesTab = isOverdue;

    const matchesPriority = priorityFilter === 'All' ? true : t.priority === priorityFilter;

    return matchesSearch && matchesTab && matchesPriority;
  });

  const totalPages = Math.ceil(filteredTasks.length / itemsPerPage);
  const paginatedTasks = filteredTasks.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="space-y-6">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-bold text-app-primary">Tasks Master Ledger</h1>
          <p className="text-xs text-app-secondary mt-0.5">
            Central repository for all project tasks, deliverables, priorities, and assignments.
          </p>
        </div>
        <Button
          variant="primary"
          size="sm"
          icon={<Plus className="w-4 h-4" />}
          onClick={() => setIsCreateOpen(true)}
        >
          Create Task
        </Button>
      </div>

      {/* Control Bar */}
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
            placeholder="Search by title, code, project, or assignee..."
            className="w-full pl-9 pr-4 py-2 rounded-xl bg-app-secondary border border-app text-xs text-app-primary placeholder-app-muted focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Tab Filters */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
          {(['All', 'My Tasks', 'Pending', 'Completed', 'Overdue'] as const).map(tab => (
            <button
              key={tab}
              onClick={() => {
                setActiveTabFilter(tab);
                setCurrentPage(1);
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-colors cursor-pointer whitespace-nowrap ${
                activeTabFilter === tab
                  ? 'bg-blue-600 text-white font-semibold shadow-xs'
                  : 'bg-app-secondary text-app-secondary hover:text-app-primary hover:bg-app-hover border border-app'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Tasks Table */}
      <div className="bg-app-surface border border-app rounded-2xl overflow-hidden shadow-xs">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-app-primary">
            <thead className="bg-app-secondary/60 border-b border-app text-app-muted uppercase tracking-wider font-semibold">
              <tr>
                <th className="p-3.5 pl-5 w-10">
                  <input type="checkbox" className="rounded border-app" />
                </th>
                <th className="p-3.5">Code & Title</th>
                <th className="p-3.5">Project</th>
                <th className="p-3.5">Assignee</th>
                <th className="p-3.5">Status</th>
                <th className="p-3.5">Priority</th>
                <th className="p-3.5">Due Date</th>
                <th className="p-3.5 text-right pr-5">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-app">
              {paginatedTasks.length === 0 ? (
                <tr>
                  <td colSpan={8} className="p-8 text-center text-app-muted">
                    No tasks match the active filters.
                  </td>
                </tr>
              ) : (
                paginatedTasks.map(t => {
                  const isOverdue = t.status !== 'Completed' && new Date(t.dueDate) < new Date();
                  return (
                    <tr key={t.id} className="hover:bg-app-hover transition-colors group">
                      <td className="p-3.5 pl-5">
                        <input
                          type="checkbox"
                          checked={t.status === 'Completed'}
                          onChange={() => updateTaskStatus(t.id, t.status === 'Completed' ? 'To Do' : 'Completed')}
                          className="rounded border-app text-blue-600 cursor-pointer"
                        />
                      </td>
                      <td
                        onClick={() => setSelectedTask(t)}
                        className="p-3.5 cursor-pointer font-medium"
                      >
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs font-semibold text-emerald-400">{t.taskCode}</span>
                          <span className="font-bold text-app-primary group-hover:text-blue-400">{t.title}</span>
                        </div>
                      </td>
                      <td className="p-3.5 text-app-secondary">{t.projectName}</td>
                      <td className="p-3.5">
                        <div className="flex items-center gap-2">
                          <Avatar src={t.assigneeAvatar} name={t.assigneeName} size="xs" />
                          <span>{t.assigneeName}</span>
                        </div>
                      </td>
                      <td className="p-3.5">
                        <Badge variant={t.status === 'Completed' ? 'completed' : t.status === 'In Progress' ? 'in_progress' : 'neutral'}>
                          {t.status}
                        </Badge>
                      </td>
                      <td className="p-3.5">
                        <Badge variant={t.priority === 'Urgent' ? 'urgent' : t.priority === 'High' ? 'danger' : 'neutral'}>
                          {t.priority}
                        </Badge>
                      </td>
                      <td className="p-3.5 font-mono">
                        <span className={isOverdue ? 'text-rose-400 font-bold' : 'text-app-secondary'}>
                          {t.dueDate}
                        </span>
                      </td>
                      <td className="p-3.5 text-right pr-5">
                        <div className="flex items-center justify-end gap-1">
                          <button
                            onClick={() => startTimer(t.projectId, t.id, t.title)}
                            className="p-1.5 rounded-lg text-emerald-400 hover:bg-emerald-500/10 cursor-pointer"
                            title="Start Timer"
                          >
                            <Play className="w-3.5 h-3.5 fill-current" />
                          </button>
                          <Button variant="ghost" size="sm" onClick={() => setSelectedTask(t)}>
                            Details
                          </Button>
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
        totalItems={filteredTasks.length}
        itemsPerPage={itemsPerPage}
      />

      {/* Modals */}
      <TaskCreateModal isOpen={isCreateOpen} onClose={() => setIsCreateOpen(false)} />
      <TaskDetailsModal task={selectedTask} isOpen={!!selectedTask} onClose={() => setSelectedTask(null)} />
    </div>
  );
};
