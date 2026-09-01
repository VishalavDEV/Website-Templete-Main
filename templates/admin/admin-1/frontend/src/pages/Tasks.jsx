import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import { CheckSquare, Clock, Plus, Check, Trash2, Search, X } from 'lucide-react';
import { MOCK_TASKS } from '../services/mockData';

export default function Tasks() {
  const [tasksList, setTasksList] = useState([
    { id: 1, title: 'Review Q4 financial report', status: 'Completed', completed: true, dueDate: 'Yesterday', priority: 'High' },
    { id: 2, title: 'Update team permissions', status: 'Completed', completed: true, dueDate: 'Yesterday', priority: 'Medium' },
    { id: 3, title: 'Deploy v2.4.0 to production', status: 'Pending', completed: false, dueDate: 'Today', priority: 'High' },
    { id: 4, title: 'Design new landing page', status: 'Pending', completed: false, dueDate: 'Tomorrow', priority: 'Medium' },
    { id: 5, title: 'Prepare client presentation', status: 'Pending', completed: false, dueDate: 'Upcoming', priority: 'Low' },
    { id: 6, title: 'Optimize database queries', status: 'Pending', completed: false, dueDate: 'Today', priority: 'High' },
  ]);

  const [search, setSearch] = useState('');
  const [priorityFilter, setPriorityFilter] = useState('All');
  const [showModal, setShowModal] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newPriority, setNewPriority] = useState('High');
  const [newDueDate, setNewDueDate] = useState('Today');

  const completedCount = tasksList.filter(t => t.completed).length;
  const pendingCount = tasksList.length - completedCount;

  const taskStatusData = [
    { name: 'Completed', value: completedCount, color: '#10b981' },
    { name: 'Pending', value: pendingCount, color: '#00f0ff' },
  ];

  const toggleTask = (id) => {
    setTasksList(tasksList.map(t => t.id === id ? { ...t, completed: !t.completed, status: t.completed ? 'Pending' : 'Completed' } : t));
  };

  const deleteTask = (e, id) => {
    e.stopPropagation();
    setTasksList(tasksList.filter(t => t.id !== id));
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    const titleToUse = newTitle.trim() || `Sprint Task #${tasksList.length + 1}`;

    const newTask = {
      id: Date.now(),
      title: titleToUse,
      status: 'Pending',
      completed: false,
      dueDate: newDueDate,
      priority: newPriority,
    };

    setTasksList([newTask, ...tasksList]);
    setNewTitle('');
    setShowModal(false);
  };

  const filteredTasks = tasksList.filter(t => {
    const matchesPriority = priorityFilter === 'All' || t.priority === priorityFilter;
    const matchesSearch = t.title.toLowerCase().includes(search.toLowerCase());
    return matchesPriority && matchesSearch;
  });

  return (
    <Layout title="Sprint Tasks & Todo Backlog" breadcrumb="Home / Tasks">
      <div className="space-y-6">
        {/* Header Actions */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-white tracking-tight flex items-center">
              <CheckSquare className="w-5 h-5 text-neura-cyan mr-2" />
              <span>Active Sprint Backlog</span>
            </h2>
            <p className="text-xs text-slate-400">Manage sprint tasks, track completion velocity, and assign priorities.</p>
          </div>

          <button
            onClick={() => setShowModal(true)}
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-neura-cyan to-blue-600 text-black font-bold text-xs shadow-glow-cyan flex items-center space-x-2 shrink-0 self-start sm:self-auto"
          >
            <Plus className="w-4 h-4" />
            <span>Add Sprint Task</span>
          </button>
        </div>

        {/* Task Status Donut Chart */}
        <div className="rounded-3xl glass-card p-4 sm:p-6 border border-white/10 space-y-4 min-w-0 overflow-hidden">
          <h3 className="text-base font-bold text-white">Task Completion Ratio ({completedCount}/{tasksList.length} Finished)</h3>
          <div className="h-44 w-full relative flex items-center justify-center min-w-0">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={taskStatusData}
                  cx="50%"
                  cy="50%"
                  innerRadius={45}
                  outerRadius={65}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {taskStatusData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} stroke="transparent" />
                  ))}
                </Pie>
                <Tooltip
                  cursor={{ fill: 'transparent' }}
                  contentStyle={{
                    backgroundColor: '#0B1020',
                    borderColor: 'rgba(255,255,255,0.15)',
                    borderRadius: '12px',
                    color: '#fff'
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Sprint Tasks Checklist Container */}
        <div className="rounded-3xl glass-card p-6 border border-white/10 space-y-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <h3 className="text-base font-bold text-white">Active Sprint Tasks</h3>

            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
              <div className="relative flex-1 sm:w-56">
                <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Filter tasks..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-8 pr-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-400 text-xs focus:outline-none focus:border-neura-cyan"
                />
              </div>

              <div className="flex items-center space-x-1 p-1 bg-white/5 border border-white/10 rounded-xl text-xs">
                {['All', 'High', 'Medium', 'Low'].map(p => (
                  <button
                    key={p}
                    onClick={() => setPriorityFilter(p)}
                    className={`px-2.5 py-0.5 rounded-lg transition-all text-[11px] font-semibold ${
                      priorityFilter === p ? 'bg-neura-cyan text-black font-bold' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-3">
            {filteredTasks.length === 0 ? (
              <div className="p-6 text-center text-slate-400 text-xs">No tasks match your search filter.</div>
            ) : (
              filteredTasks.map((t) => (
                <div
                  key={t.id}
                  onClick={() => toggleTask(t.id)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between text-xs group ${
                    t.completed ? 'bg-emerald-500/10 border-emerald-500/30 text-slate-400 line-through' : 'bg-white/[0.03] border-white/10 text-white hover:border-neura-cyan/40'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-5 h-5 rounded-lg border flex items-center justify-center transition-all ${
                      t.completed ? 'bg-emerald-500 border-emerald-500 text-black' : 'border-white/20 group-hover:border-neura-cyan'
                    }`}>
                      {t.completed && <Check className="w-3.5 h-3.5 font-bold" />}
                    </div>
                    <span className="font-medium text-slate-100">{t.title}</span>
                  </div>

                  <div className="flex items-center space-x-3">
                    <span className={`text-[10px] font-mono px-2.5 py-0.5 rounded-full border font-bold ${
                      t.priority === 'High' ? 'bg-rose-500/20 text-rose-300 border-rose-500/30' :
                      t.priority === 'Medium' ? 'bg-amber-500/20 text-amber-300 border-amber-500/30' : 'bg-slate-500/20 text-slate-300 border-slate-500/30'
                    }`}>
                      {t.priority}
                    </span>
                    <button
                      type="button"
                      onClick={(e) => deleteTask(e, t.id)}
                      className="p-1 rounded-lg text-slate-400 hover:text-rose-400 hover:bg-rose-500/10 transition-colors"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Add Task Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-4">
          <div className="w-full max-w-md bg-neura-panel border border-white/15 rounded-3xl p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <h3 className="text-base font-bold text-white flex items-center">
                <Plus className="w-4 h-4 text-neura-cyan mr-2" />
                <span>Create Sprint Task</span>
              </h3>
              <button onClick={() => setShowModal(false)} className="p-1 text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleAddTask} className="space-y-3">
              <div>
                <label className="block text-[11px] font-medium text-slate-400 mb-1">Task Title</label>
                <input
                  type="text"
                  required
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  placeholder="e.g. Implement OAuth2 refresh token"
                  className="w-full px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-neura-cyan"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-medium text-slate-400 mb-1">Priority</label>
                  <select
                    value={newPriority}
                    onChange={(e) => setNewPriority(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-neura-panel border border-white/10 text-white text-xs focus:outline-none focus:border-neura-cyan"
                  >
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-medium text-slate-400 mb-1">Due Date</label>
                  <select
                    value={newDueDate}
                    onChange={(e) => setNewDueDate(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-neura-panel border border-white/10 text-white text-xs focus:outline-none focus:border-neura-cyan"
                  >
                    <option value="Today">Today</option>
                    <option value="Tomorrow">Tomorrow</option>
                    <option value="Upcoming">Upcoming</option>
                  </select>
                </div>
              </div>

              <div className="flex justify-end space-x-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 text-xs font-semibold hover:bg-white/10"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-neura-cyan to-blue-600 text-black font-bold text-xs shadow-glow-cyan"
                >
                  Save Task
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </Layout>
  );
}
