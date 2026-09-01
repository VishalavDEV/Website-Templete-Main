import React, { useState } from 'react';
import { CheckSquare, Plus, Trash2, CheckCircle } from 'lucide-react';
import { MOCK_TASKS } from '../../services/mockData';

export default function TaskManagement() {
  const [taskList, setTaskList] = useState(MOCK_TASKS);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [filter, setFilter] = useState('All');

  const handleAddTask = (e) => {
    e.preventDefault();
    const titleToUse = newTaskTitle.trim() || `New System Task #${taskList.length + 1}`;
    const newTask = {
      id: Date.now(),
      title: titleToUse,
      status: 'Pending',
      dueDate: 'Today',
      priority: 'Medium',
    };
    setTaskList([newTask, ...taskList]);
    setNewTaskTitle('');
  };

  const toggleTaskStatus = (id) => {
    setTaskList(prev =>
      prev.map(task =>
        task.id === id
          ? { ...task, status: task.status === 'Completed' ? 'Pending' : 'Completed' }
          : task
      )
    );
  };

  const deleteTask = (id) => {
    setTaskList(prev => prev.filter(t => t.id !== id));
  };

  const filteredTasks = taskList.filter(t => {
    if (filter === 'Completed') return t.status === 'Completed';
    if (filter === 'Pending') return t.status === 'Pending';
    return true;
  });

  return (
    <div className="rounded-3xl glass-card p-6 border border-white/10 space-y-4">
      {/* Header & Filter */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <h3 className="text-lg font-bold text-white tracking-tight flex items-center">
          <CheckSquare className="w-4 h-4 mr-2 text-neura-cyan" />
          <span>Task Management</span>
        </h3>

        <div className="flex items-center space-x-1 p-1 bg-white/5 border border-white/10 rounded-xl text-xs font-medium">
          {['All', 'Pending', 'Completed'].map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-2.5 py-1 rounded-lg transition-all ${
                filter === f ? 'bg-neura-cyan text-black font-bold' : 'text-slate-400 hover:text-white'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Add Task Input Form */}
      <form onSubmit={handleAddTask} className="flex items-center space-x-2">
        <input
          type="text"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
          placeholder="Add a new engineering task..."
          className="flex-1 px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-400 text-xs focus:outline-none focus:border-neura-cyan/50"
        />
        <button
          type="submit"
          className="p-2 rounded-xl bg-neura-cyan text-black font-bold hover:opacity-90 transition-all text-xs flex items-center space-x-1 shrink-0"
        >
          <Plus className="w-4 h-4" />
          <span className="hidden sm:inline">Add</span>
        </button>
      </form>

      {/* Task List */}
      <div className="space-y-2 max-h-72 overflow-y-auto pr-1">
        {filteredTasks.length === 0 ? (
          <div className="p-4 text-center text-slate-400 text-xs">No tasks match filter.</div>
        ) : (
          filteredTasks.map(task => (
            <div
              key={task.id}
              className={`flex items-center justify-between p-3 rounded-2xl border transition-all ${
                task.status === 'Completed'
                  ? 'bg-white/[0.01] border-white/5 text-slate-400 line-through'
                  : 'bg-white/[0.04] border-white/10 text-slate-100 hover:border-white/20'
              }`}
            >
              <div className="flex items-center space-x-3 flex-1 min-w-0 pr-2">
                <button
                  type="button"
                  onClick={() => toggleTaskStatus(task.id)}
                  className={`w-5 h-5 rounded-lg border flex items-center justify-center transition-colors shrink-0 ${
                    task.status === 'Completed'
                      ? 'bg-emerald-500 border-emerald-500 text-black'
                      : 'border-white/20 hover:border-neura-cyan'
                  }`}
                >
                  {task.status === 'Completed' && <CheckCircle className="w-3.5 h-3.5" />}
                </button>
                <span className="text-xs font-medium truncate">{task.title}</span>
              </div>

              <div className="flex items-center space-x-3 shrink-0">
                <span className={`text-[10px] px-2 py-0.5 rounded-full border ${
                  task.dueDate === 'Today' ? 'bg-rose-500/20 text-rose-300 border-rose-500/30' : 'bg-slate-500/20 text-slate-300 border-slate-500/30'
                }`}>
                  {task.dueDate}
                </span>
                <button
                  type="button"
                  onClick={() => deleteTask(task.id)}
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
  );
}
