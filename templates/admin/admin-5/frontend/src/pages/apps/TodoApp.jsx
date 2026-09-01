import React, { useState } from 'react';
import { Plus, CheckSquare, Square, Trash2, Calendar, Flag, Filter } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const TodoApp = () => {
  const { addToast } = useApp();

  const [todos, setTodos] = useState([
    { id: 1, text: 'Deploy v2.4 hotfix to production cluster', completed: false, priority: 'Urgent', dueDate: 'Today' },
    { id: 2, text: 'Review Spring Boot JPA MySQL schema migrations', completed: true, priority: 'High', dueDate: 'Yesterday' },
    { id: 3, text: 'Update UI documentation for light/dark theme switcher', completed: false, priority: 'Medium', dueDate: '22 Aug' },
    { id: 4, text: 'Schedule Q3 executive review meeting with team', completed: false, priority: 'Low', dueDate: '25 Aug' }
  ]);

  const [newText, setNewText] = useState('');
  const [newPriority, setNewPriority] = useState('High');
  const [filter, setFilter] = useState('all');

  const toggleComplete = (id) => {
    setTodos(prev => prev.map(t => {
      if (t.id === id) {
        const updated = !t.completed;
        addToast(updated ? 'Task marked complete' : 'Task reopened', 'info');
        return { ...t, completed: updated };
      }
      return t;
    }));
  };

  const deleteTodo = (id) => {
    setTodos(prev => prev.filter(t => t.id !== id));
    addToast('Task deleted', 'warning');
  };

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (!newText.trim()) return;
    setTodos(prev => [...prev, { id: Date.now(), text: newText, completed: false, priority: newPriority, dueDate: 'Today' }]);
    setNewText('');
    addToast('New task added to checklist', 'success');
  };

  const filteredTodos = todos.filter(t => {
    if (filter === 'active') return !t.completed;
    if (filter === 'completed') return t.completed;
    return true;
  });

  return (
    <div className="app-page" style={{ maxWidth: 840, margin: '0 auto' }}>
      <div className="page-header" style={{ marginBottom: 24 }}>
        <h1 style={{ fontSize: 24, fontWeight: 800 }}>To-Do Task Checklist</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: 14 }}>Track action items, mark items complete, and filter by priority.</p>
      </div>

      <div className="glass-card" style={{ padding: 20, marginBottom: 24 }}>
        <form onSubmit={handleAddTodo} style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <input
            type="text"
            placeholder="Add a new task..."
            value={newText}
            onChange={e => setNewText(e.target.value)}
            style={{ flex: 1, minWidth: 240, padding: '10px 14px', borderRadius: 8, border: '1px solid var(--border-color)', background: 'var(--bg-subtle)', color: 'var(--text-primary)', outline: 'none' }}
          />
          <select
            value={newPriority}
            onChange={e => setNewPriority(e.target.value)}
            style={{ padding: '10px 14px', borderRadius: 8, border: '1px solid var(--border-color)', background: 'var(--bg-subtle)', color: 'var(--text-primary)', outline: 'none' }}
          >
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
            <option>Urgent</option>
          </select>
          <button type="submit" className="btn btn-primary"><Plus size={16} /> Add Task</button>
        </form>
      </div>

      {/* Filter Tabs */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
        <div style={{ display: 'flex', gap: 8, background: 'var(--bg-subtle)', padding: 4, borderRadius: 8 }}>
          {['all', 'active', 'completed'].map(f => (
            <button
              key={f}
              className={`btn btn-sm ${filter === f ? 'btn-primary' : ''}`}
              onClick={() => setFilter(f)}
              style={{ textTransform: 'capitalize' }}
            >
              {f} ({f === 'all' ? todos.length : f === 'active' ? todos.filter(t => !t.completed).length : todos.filter(t => t.completed).length})
            </button>
          ))}
        </div>
      </div>

      <div className="glass-card" style={{ padding: 0, overflow: 'hidden' }}>
        {filteredTodos.length === 0 ? (
          <div style={{ padding: 32, textAlign: 'center', color: 'var(--text-muted)' }}>No tasks found in this view</div>
        ) : (
          filteredTodos.map(t => (
            <div
              key={t.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '16px 20px',
                borderBottom: '1px solid var(--border-color-light)',
                textDecoration: t.completed ? 'line-through' : 'none',
                opacity: t.completed ? 0.6 : 1,
                transition: 'all 0.2s ease'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <button onClick={() => toggleComplete(t.id)} style={{ color: t.completed ? 'var(--brand-success)' : 'var(--text-muted)' }}>
                  {t.completed ? <CheckSquare size={20} /> : <Square size={20} />}
                </button>
                <span style={{ fontSize: 14, fontWeight: 600 }}>{t.text}</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <span className={`badge ${t.priority === 'Urgent' ? 'badge-danger' : t.priority === 'High' ? 'badge-warning' : 'badge-primary'}`}>
                  {t.priority}
                </span>
                <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>{t.dueDate}</span>
                <button className="btn-icon text-danger" onClick={() => deleteTodo(t.id)} title="Delete Task">
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
