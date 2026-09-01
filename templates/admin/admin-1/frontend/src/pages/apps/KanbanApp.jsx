import React, { useState } from 'react';
import Layout from '../../components/layout/Layout';
import { Kanban, Plus, CheckCircle2, Clock, AlertTriangle, ArrowLeft, ArrowRight, Trash2, X } from 'lucide-react';

export default function KanbanApp() {
  const [showModal, setShowModal] = useState(false);
  const [taskTitle, setTaskTitle] = useState('');
  const [taskPriority, setTaskPriority] = useState('High');
  const [taskTag, setTaskTag] = useState('Backend');
  const [taskColumn, setTaskColumn] = useState('To Do');

  const [columns, setColumns] = useState([
    {
      title: 'To Do',
      color: 'border-slate-500/40 text-slate-300',
      tasks: [
        { id: 1, title: 'Implement WebSocket Real-Time Telemetry Stream', priority: 'High', tag: 'Backend' },
        { id: 2, title: 'Refactor MySQL Connection Pool Configuration', priority: 'Medium', tag: 'Database' },
      ],
    },
    {
      title: 'In Progress',
      color: 'border-neura-cyan/40 text-neura-cyan',
      tasks: [
        { id: 3, title: 'Deploy Neura-LLM v4.2 to GPU Cluster Node', priority: 'High', tag: 'AI Engine' },
        { id: 4, title: 'Build Executive PDF Report Exporter', priority: 'Medium', tag: 'Frontend' },
      ],
    },
    {
      title: 'Completed',
      color: 'border-emerald-500/40 text-emerald-400',
      tasks: [
        { id: 5, title: 'Configure JWT Stateless Authentication Filter', priority: 'High', tag: 'Security' },
        { id: 6, title: 'Design Glassmorphism Dashboard Dark Theme', priority: 'Medium', tag: 'UI/UX' },
      ],
    },
  ]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (!taskTitle.trim()) return;

    const newTask = {
      id: Date.now(),
      title: taskTitle.trim(),
      priority: taskPriority,
      tag: taskTag
    };

    setColumns(columns.map(col =>
      col.title === taskColumn
        ? { ...col, tasks: [newTask, ...col.tasks] }
        : col
    ));

    setTaskTitle('');
    setShowModal(false);
  };

  const moveTask = (task, currentColTitle, direction) => {
    const colOrder = ['To Do', 'In Progress', 'Completed'];
    const currIdx = colOrder.indexOf(currentColTitle);
    const targetIdx = direction === 'next' ? currIdx + 1 : currIdx - 1;
    if (targetIdx < 0 || targetIdx >= colOrder.length) return;

    const targetColTitle = colOrder[targetIdx];

    setColumns(columns.map(col => {
      if (col.title === currentColTitle) {
        return { ...col, tasks: col.tasks.filter(t => t.id !== task.id) };
      }
      if (col.title === targetColTitle) {
        return { ...col, tasks: [task, ...col.tasks] };
      }
      return col;
    }));
  };

  const deleteTask = (colTitle, taskId) => {
    setColumns(columns.map(col =>
      col.title === colTitle
        ? { ...col, tasks: col.tasks.filter(t => t.id !== taskId) }
        : col
    ));
  };

  return (
    <Layout title="Engineering Kanban Board" breadcrumb="Home / Applications / Kanban">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-white tracking-tight flex items-center">
              <Kanban className="w-5 h-5 text-neura-cyan mr-2" />
              <span>Sprint Kanban Pipeline</span>
            </h2>
            <p className="text-xs text-slate-400">Drag and transition work packages across development stages.</p>
          </div>

          <button
            onClick={() => setShowModal(true)}
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-neura-cyan to-blue-600 text-black font-bold text-xs shadow-glow-cyan flex items-center space-x-2"
          >
            <Plus className="w-4 h-4" />
            <span>Add Kanban Task</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {columns.map(col => (
            <div key={col.title} className="p-5 rounded-3xl glass-panel border border-white/10 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className={`text-sm font-bold uppercase tracking-wider flex items-center ${col.color}`}>
                  <Kanban className="w-4 h-4 mr-2" />
                  <span>{col.title} ({col.tasks.length})</span>
                </h3>
              </div>

              <div className="space-y-3">
                {col.tasks.length === 0 ? (
                  <div className="p-4 text-center text-slate-500 text-xs">No tasks in this column.</div>
                ) : (
                  col.tasks.map(t => (
                    <div key={t.id} className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2 hover:border-neura-cyan/40 transition-all group">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/5 text-slate-300 font-bold">
                          {t.tag}
                        </span>
                        <div className="flex items-center space-x-1">
                          {col.title !== 'To Do' && (
                            <button onClick={() => moveTask(t, col.title, 'prev')} className="p-1 text-slate-400 hover:text-neura-cyan" title="Move Left">
                              <ArrowLeft className="w-3.5 h-3.5" />
                            </button>
                          )}
                          {col.title !== 'Completed' && (
                            <button onClick={() => moveTask(t, col.title, 'next')} className="p-1 text-slate-400 hover:text-neura-cyan" title="Move Right">
                              <ArrowRight className="w-3.5 h-3.5" />
                            </button>
                          )}
                          <button onClick={() => deleteTask(col.title, t.id)} className="p-1 text-slate-400 hover:text-rose-400" title="Delete Task">
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                      <h4 className="text-xs font-semibold text-white leading-snug">{t.title}</h4>
                    </div>
                  ))
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add Task Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-4">
          <div className="w-full max-w-md bg-neura-panel border border-white/15 rounded-3xl p-6 shadow-2xl space-y-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <h3 className="text-base font-bold text-white flex items-center">
                <Plus className="w-4 h-4 text-neura-cyan mr-2" />
                <span>Create Kanban Card</span>
              </h3>
              <button onClick={() => setShowModal(false)} className="p-1 text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleAddTask} className="space-y-3">
              <div>
                <label className="block text-[11px] font-medium text-slate-400 mb-1">Card Title</label>
                <input
                  type="text"
                  required
                  value={taskTitle}
                  onChange={(e) => setTaskTitle(e.target.value)}
                  placeholder="e.g. Optimize Redis Caching Layer"
                  className="w-full px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-neura-cyan"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-medium text-slate-400 mb-1">Column</label>
                  <select
                    value={taskColumn}
                    onChange={(e) => setTaskColumn(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-neura-panel border border-white/10 text-white text-xs focus:outline-none focus:border-neura-cyan"
                  >
                    <option value="To Do">To Do</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-medium text-slate-400 mb-1">Tag / Category</label>
                  <select
                    value={taskTag}
                    onChange={(e) => setTaskTag(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-neura-panel border border-white/10 text-white text-xs focus:outline-none focus:border-neura-cyan"
                  >
                    <option value="Backend">Backend</option>
                    <option value="Frontend">Frontend</option>
                    <option value="AI Engine">AI Engine</option>
                    <option value="Security">Security</option>
                    <option value="Database">Database</option>
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
                  Save Card
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </Layout>
  );
}
