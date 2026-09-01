import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Task } from '../../data/initialData';
import { StatusBadge, Modal, EmptyState } from '../ui/GlobalComponents';
import { 
  CheckSquare, Plus, Trash2, User, 
  Calendar, Clock, Grid, ListTodo 
} from 'lucide-react';

export const Tasks: React.FC = () => {
  const { 
    tasks, 
    projects, 
    users, 
    createTask, 
    updateTask, 
    deleteTask 
  } = useApp();

  const [viewMode, setViewMode] = useState<'kanban' | 'list'>('kanban');
  const [searchVal, setSearchVal] = useState('');
  const [projectFilter, setProjectFilter] = useState('all');

  // Create Task form
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newDesc, setNewDesc] = useState('');
  const [newProjId, setNewProjId] = useState('');
  const [newStatus, setNewStatus] = useState<'Backlog' | 'Todo' | 'In Progress' | 'Review' | 'Done'>('Todo');
  const [newPriority, setNewPriority] = useState<'Low' | 'Medium' | 'High' | 'Critical'>('Medium');
  const [newAssigneeId, setNewAssigneeId] = useState('');
  const [newDueDate, setNewDueDate] = useState('');

  const handleCreateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    createTask({
      title: newTitle,
      description: newDesc,
      projectId: newProjId || projects[0]?.id || 'proj-1',
      status: newStatus,
      priority: newPriority,
      assigneeId: newAssigneeId || users[0]?.id || 'usr-1',
      dueDate: newDueDate || new Date().toISOString().split('T')[0],
      estimatedHours: 8,
    });

    setNewTitle('');
    setNewDesc('');
    setIsCreateOpen(false);
  };

  const moveTaskStatus = (task: Task, direction: 'forward' | 'backward') => {
    const sequence: Task['status'][] = ['Backlog', 'Todo', 'In Progress', 'Review', 'Done'];
    const currentIdx = sequence.indexOf(task.status);
    let newIdx = currentIdx;

    if (direction === 'forward' && currentIdx < sequence.length - 1) {
      newIdx += 1;
    } else if (direction === 'backward' && currentIdx > 0) {
      newIdx -= 1;
    }

    if (newIdx !== currentIdx) {
      updateTask({
        ...task,
        status: sequence[newIdx],
      });
    }
  };

  // Filter tasks
  const filteredTasks = tasks.filter((t) => {
    const matchesSearch = t.title.toLowerCase().includes(searchVal.toLowerCase()) || 
                          t.description.toLowerCase().includes(searchVal.toLowerCase());
    const matchesProject = projectFilter === 'all' || t.projectId === projectFilter;
    return matchesSearch && matchesProject;
  });

  const columns: { id: Task['status']; label: string }[] = [
    { id: 'Backlog', label: 'Backlog Queue' },
    { id: 'Todo', label: 'Ready Queue' },
    { id: 'In Progress', label: 'In Progress' },
    { id: 'Review', label: 'Verification' },
    { id: 'Done', label: 'Completed' },
  ];

  return (
    <div className="space-y-6">
      {/* Header Segment */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-lg font-extrabold tracking-tight text-slate-900 uppercase font-mono">
            Backlog Registry & Sprint Schedulers
          </h2>
          <p className="text-xs text-slate-500 font-mono mt-0.5">Distribute tasks across operational personnel and review Kanban flows.</p>
        </div>
        <div className="flex gap-2 shrink-0">
          <div className="flex items-center bg-slate-100 p-1 rounded-lg border border-blue-100">
            <button
              onClick={() => setViewMode('kanban')}
              className={`p-1.5 rounded cursor-pointer transition ${
                viewMode === 'kanban' 
                  ? 'bg-white shadow-xs text-blue-600 font-bold' 
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              <Grid className="h-4 w-4" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-1.5 rounded cursor-pointer transition ${
                viewMode === 'list' 
                  ? 'bg-white shadow-xs text-blue-600 font-bold' 
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              <ListTodo className="h-4 w-4" />
            </button>
          </div>
          <button
            onClick={() => setIsCreateOpen(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs rounded-lg transition shadow-xs cursor-pointer font-mono"
          >
            <Plus className="h-4 w-4" />
            Create Task
          </button>
        </div>
      </div>

      {/* Filter matrix */}
      <div className="flex flex-wrap items-center justify-between gap-3 p-4 border border-blue-100 bg-white rounded-xl shadow-xs">
        <input
          type="text"
          value={searchVal}
          onChange={(e) => setSearchVal(e.target.value)}
          placeholder="Filter backlog tasks..."
          className="px-3 py-2 text-xs bg-slate-50 border border-blue-200 rounded-lg placeholder-slate-400 text-slate-800 focus:outline-none focus:border-blue-600 focus:bg-white font-mono max-w-sm w-full"
        />
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider font-mono">Project:</span>
          <select
            value={projectFilter}
            onChange={(e) => setProjectFilter(e.target.value)}
            className="pl-2.5 pr-7 py-1.5 text-xs bg-slate-50 border border-blue-200 rounded-lg text-slate-700 focus:outline-none focus:border-blue-600 cursor-pointer font-mono font-medium"
          >
            <option value="all">All Portfolios</option>
            {projects.map(p => (
              <option key={p.id} value={p.id}>{p.name}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Backlog Display */}
      {filteredTasks.length > 0 ? (
        viewMode === 'kanban' ? (
          // KANBAN VIEW
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {columns.map((col) => {
              const colTasks = filteredTasks.filter(t => t.status === col.id);
              return (
                <div 
                  key={col.id} 
                  className="flex flex-col gap-3 rounded-xl border border-blue-100 p-3.5 bg-slate-50/50 min-h-[350px]"
                >
                  <div className="flex items-center justify-between border-b border-blue-100 pb-2 mb-1">
                    <span className="text-xs font-mono font-bold uppercase text-slate-800 tracking-wider">
                      {col.label}
                    </span>
                    <span className="text-[10px] bg-blue-50 border border-blue-100 text-blue-700 font-bold px-1.5 py-0.5 rounded font-mono">
                      {colTasks.length}
                    </span>
                  </div>

                  <div className="flex flex-col gap-3 flex-1 overflow-y-auto max-h-[500px] scrollbar-none">
                    {colTasks.map((t) => {
                      const project = projects.find(p => p.id === t.projectId);
                      
                      return (
                        <div 
                          key={t.id}
                          className="p-3 bg-white border border-blue-100 hover:border-blue-300 rounded-xl shadow-xs transition"
                        >
                          <div className="flex justify-between items-start gap-1 mb-1.5">
                            <span className="text-[9px] font-mono font-semibold text-blue-700 bg-blue-50 border border-blue-100 px-1.5 py-0.5 rounded truncate">
                              {project?.name || 'SprintAdmin'}
                            </span>
                            <StatusBadge status={t.priority} />
                          </div>

                          <h4 className="text-xs font-bold text-slate-800 tracking-tight leading-snug">
                            {t.title}
                          </h4>
                          <p className="text-[11px] text-slate-500 mt-1 line-clamp-2">
                            {t.description}
                          </p>

                          <div className="flex justify-between items-center mt-3 pt-2.5 border-t border-slate-100">
                            <div className="flex items-center gap-1 text-[9px] text-slate-400 font-mono">
                              <Calendar className="h-3 w-3 shrink-0 text-slate-400" />
                              <span>{t.dueDate}</span>
                            </div>

                            <div className="flex items-center gap-1">
                              {/* Left & Right direction indicators */}
                              <div className="flex gap-0.5">
                                <button 
                                  onClick={() => moveTaskStatus(t, 'backward')}
                                  disabled={col.id === 'Backlog'}
                                  className="p-1 rounded text-slate-400 hover:text-blue-600 hover:bg-blue-50 disabled:opacity-30 cursor-pointer transition"
                                  title="Demote Stage"
                                >
                                  ←
                                </button>
                                <button 
                                  onClick={() => moveTaskStatus(t, 'forward')}
                                  disabled={col.id === 'Done'}
                                  className="p-1 rounded text-slate-400 hover:text-blue-600 hover:bg-blue-50 disabled:opacity-30 cursor-pointer transition"
                                  title="Promote Stage"
                                >
                                  →
                                </button>
                              </div>
                              <button
                                onClick={() => deleteTask(t.id)}
                                className="p-1 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded cursor-pointer transition"
                                title="Delete task"
                              >
                                <Trash2 className="h-3.5 w-3.5" />
                              </button>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          // LIST VIEW
          <div className="border border-blue-100 rounded-xl bg-white overflow-hidden shadow-xs">
            <div className="divide-y divide-blue-50">
              {filteredTasks.map((t) => {
                const assignee = users.find(u => u.id === t.assigneeId);
                const project = projects.find(p => p.id === t.projectId);
                return (
                  <div key={t.id} className="p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 hover:bg-blue-50/30 transition">
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-[10px] font-mono text-blue-700 font-bold uppercase bg-blue-50 border border-blue-100 px-1.5 py-0.2 rounded">
                          {project?.name || 'SprintAdmin'}
                        </span>
                        <StatusBadge status={t.status} />
                        <StatusBadge status={t.priority} />
                      </div>
                      <h4 className="text-xs font-bold text-slate-800 mt-1">{t.title}</h4>
                      <p className="text-[11px] text-slate-500 mt-0.5">{t.description}</p>
                    </div>

                    <div className="flex items-center gap-4 text-xs font-medium text-slate-500 font-mono">
                      <div className="flex items-center gap-1.5">
                        <User className="h-3.5 w-3.5 text-slate-400" />
                        <span>{assignee?.name || 'Operator'}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5 text-slate-400" />
                        <span>{t.estimatedHours}h est</span>
                      </div>
                      <button 
                        onClick={() => deleteTask(t.id)}
                        className="p-1.5 text-slate-400 hover:text-rose-600 rounded transition cursor-pointer"
                        title="Delete task"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )
      ) : (
        <EmptyState 
          title="Backlog Empty" 
          description="Congratulations, you have wiped clear all sprint queues!"
          actionLabel="Add Sprint Task"
          onAction={() => setIsCreateOpen(true)}
          icon={<CheckSquare className="h-10 w-10 text-blue-200" />}
        />
      )}

      {/* CREATE TASK MODAL */}
      <Modal isOpen={isCreateOpen} onClose={() => setIsCreateOpen(false)} title="Enqueue Backlog Task">
        <form onSubmit={handleCreateSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1 font-mono">Task Title</label>
            <input 
              type="text" 
              required
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              placeholder="e.g. Set up WebSocket heartbeats" 
              className="w-full text-xs p-2 bg-slate-50 border border-blue-200 rounded-lg placeholder-slate-400 text-slate-800 focus:outline-none focus:border-blue-600 focus:bg-white font-mono"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1 font-mono">Functional Description</label>
            <textarea 
              rows={3}
              value={newDesc}
              onChange={(e) => setNewDesc(e.target.value)}
              placeholder="Detailed parameters to assist coding engineers during task execution..." 
              className="w-full text-xs p-2 bg-slate-50 border border-blue-200 rounded-lg placeholder-slate-400 text-slate-800 focus:outline-none focus:border-blue-600 focus:bg-white font-mono"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1 font-mono">Assign Project</label>
              <select 
                value={newProjId}
                onChange={(e) => setNewProjId(e.target.value)}
                className="w-full text-xs p-2 bg-slate-50 border border-blue-200 rounded-lg text-slate-800 focus:outline-none focus:border-blue-600 focus:bg-white font-mono"
              >
                {projects.map(p => (
                  <option key={p.id} value={p.id}>{p.name}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1 font-mono">Backlog Stage</label>
              <select 
                value={newStatus}
                onChange={(e: any) => setNewStatus(e.target.value)}
                className="w-full text-xs p-2 bg-slate-50 border border-blue-200 rounded-lg text-slate-800 focus:outline-none focus:border-blue-600 focus:bg-white font-mono"
              >
                <option value="Backlog">Backlog Cache</option>
                <option value="Todo">Ready Queue</option>
                <option value="In Progress">In Progress</option>
                <option value="Review">Verification</option>
                <option value="Done">Completed</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1 font-mono">Assign Officer</label>
              <select 
                value={newAssigneeId}
                onChange={(e) => setNewAssigneeId(e.target.value)}
                className="w-full text-xs p-2 bg-slate-50 border border-blue-200 rounded-lg text-slate-800 focus:outline-none focus:border-blue-600 focus:bg-white font-mono"
              >
                {users.map(u => (
                  <option key={u.id} value={u.id}>{u.name}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1 font-mono">Priority Index</label>
              <select 
                value={newPriority}
                onChange={(e: any) => setNewPriority(e.target.value)}
                className="w-full text-xs p-2 bg-slate-50 border border-blue-200 rounded-lg text-slate-800 focus:outline-none focus:border-blue-600 focus:bg-white font-mono"
              >
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
                <option value="Critical">Critical</option>
              </select>
            </div>
          </div>

          <button 
            type="submit"
            className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-lg uppercase tracking-wider cursor-pointer font-mono shadow-xs transition"
          >
            Deploy Backlog Card
          </button>
        </form>
      </Modal>
    </div>
  );
};
