import React, { useState } from 'react';
import { Plus, MoreHorizontal, User, AlertCircle, ArrowRight, ArrowLeft, Trash2 } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const KanbanApp = () => {
  const { addToast } = useApp();

  const [activeColumnForNew, setActiveColumnForNew] = useState(null);
  const [newTitle, setNewTitle] = useState('');
  const [newTag, setNewTag] = useState('Frontend');
  const [newPriority, setNewPriority] = useState('High');

  const [columns, setColumns] = useState({
    todo: [
      { id: 1, title: 'Deploy v2.4 Hotfix to Prod', tag: 'DevOps', priority: 'Urgent', assignee: 'Alex Morgan' },
      { id: 2, title: 'Implement Dark Mode Accessibility ARIA', tag: 'Frontend', priority: 'High', assignee: 'Sarah Jenkins' }
    ],
    in_progress: [
      { id: 3, title: 'Design Spring Boot REST API Controllers', tag: 'Backend', priority: 'High', assignee: 'Marcus Chen' }
    ],
    review: [
      { id: 4, title: 'UX Audit for CRM Pipeline', tag: 'Design', priority: 'Medium', assignee: 'Elena Rostova' }
    ],
    done: [
      { id: 5, title: 'Setup MySQL Database Schema Seeding', tag: 'Database', priority: 'Completed', assignee: 'Marcus Chen' }
    ]
  });

  const columnHeaders = [
    { key: 'todo', title: 'To Do', color: 'var(--brand-warning)' },
    { key: 'in_progress', title: 'In Progress', color: 'var(--brand-primary)' },
    { key: 'review', title: 'Under Review', color: 'var(--brand-info)' },
    { key: 'done', title: 'Completed', color: 'var(--brand-success)' }
  ];

  const columnOrder = ['todo', 'in_progress', 'review', 'done'];

  const handleCreateTask = (e, colKey) => {
    e.preventDefault();
    if (!newTitle.trim()) return;
    const newTask = {
      id: Date.now(),
      title: newTitle,
      tag: newTag,
      priority: newPriority,
      assignee: 'Alex Morgan'
    };
    setColumns(prev => ({
      ...prev,
      [colKey]: [...prev[colKey], newTask]
    }));
    setNewTitle('');
    setActiveColumnForNew(null);
    addToast(`Added card "${newTask.title}" to ${colKey.replace('_', ' ').toUpperCase()}`, 'success');
  };

  const moveTask = (fromCol, toCol, cardId) => {
    const card = columns[fromCol].find(c => c.id === cardId);
    if (!card) return;
    setColumns(prev => ({
      ...prev,
      [fromCol]: prev[fromCol].filter(c => c.id !== cardId),
      [toCol]: [...prev[toCol], card]
    }));
    addToast(`Moved card to ${toCol.replace('_', ' ').toUpperCase()}`, 'info');
  };

  const deleteTask = (colKey, cardId) => {
    setColumns(prev => ({
      ...prev,
      [colKey]: prev[colKey].filter(c => c.id !== cardId)
    }));
    addToast('Deleted task card', 'warning');
  };

  return (
    <div className="app-page">
      <div className="page-header">
        <div className="page-header-title">
          <h1>Kanban Task Board</h1>
          <p>Organize workflow, move tasks across stages, and assign team members.</p>
        </div>
        <div className="page-header-actions">
          <button className="btn btn-primary btn-sm" onClick={() => setActiveColumnForNew('todo')}>
            <Plus size={16} /> Add Task Card
          </button>
        </div>
      </div>

      <div style={{ display: 'flex', gap: 20, overflowX: 'auto', paddingBottom: 16 }}>
        {columnHeaders.map((col, colIdx) => (
          <div key={col.key} className="glass-card" style={{ background: 'var(--bg-subtle)', padding: 16, minWidth: 280, flex: '1 0 280px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{ width: 10, height: 10, borderRadius: '50%', background: col.color }} />
                <h3 style={{ fontSize: 15, fontWeight: 700 }}>{col.title}</h3>
                <span className="badge badge-primary">{columns[col.key].length}</span>
              </div>
              <button className="btn-icon" onClick={() => setActiveColumnForNew(activeColumnForNew === col.key ? null : col.key)} title="Add card to column">
                <Plus size={16} />
              </button>
            </div>

            {/* Quick Card Form inside Column */}
            {activeColumnForNew === col.key && (
              <form onSubmit={e => handleCreateTask(e, col.key)} style={{ marginBottom: 16, background: 'var(--bg-surface)', padding: 12, borderRadius: 8, border: '1px solid var(--border-color)' }}>
                <input
                  type="text"
                  placeholder="Task title..."
                  value={newTitle}
                  onChange={e => setNewTitle(e.target.value)}
                  required
                  autoFocus
                  style={{ width: '100%', padding: '6px 10px', borderRadius: 6, border: '1px solid var(--border-color)', background: 'var(--bg-subtle)', color: 'var(--text-primary)', outline: 'none', fontSize: 13, marginBottom: 8 }}
                />
                <div style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
                  <select value={newTag} onChange={e => setNewTag(e.target.value)} style={{ flex: 1, padding: '4px 6px', borderRadius: 6, fontSize: 12, background: 'var(--bg-subtle)', color: 'var(--text-primary)' }}>
                    <option>Frontend</option>
                    <option>Backend</option>
                    <option>Design</option>
                    <option>DevOps</option>
                    <option>Database</option>
                  </select>
                  <select value={newPriority} onChange={e => setNewPriority(e.target.value)} style={{ flex: 1, padding: '4px 6px', borderRadius: 6, fontSize: 12, background: 'var(--bg-subtle)', color: 'var(--text-primary)' }}>
                    <option>Low</option>
                    <option>Medium</option>
                    <option>High</option>
                    <option>Urgent</option>
                  </select>
                </div>
                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 6 }}>
                  <button type="button" className="btn btn-secondary btn-sm" onClick={() => setActiveColumnForNew(null)}>Cancel</button>
                  <button type="submit" className="btn btn-primary btn-sm">Add Card</button>
                </div>
              </form>
            )}

            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {columns[col.key].map(card => (
                <div key={card.id} className="glass-card" style={{ padding: 14 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                    <span className="badge badge-info">{card.tag}</span>
                    <button className="btn-icon text-danger" onClick={() => deleteTask(col.key, card.id)} title="Delete Task"><Trash2 size={14} /></button>
                  </div>
                  <h4 style={{ fontSize: 14, fontWeight: 700, marginBottom: 8 }}>{card.title}</h4>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 12, color: 'var(--text-muted)', marginBottom: 8 }}>
                    <span>{card.assignee}</span>
                    <span className="badge badge-warning">{card.priority}</span>
                  </div>

                  {/* Stage Transition Control Buttons */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid var(--border-color-light)', paddingTop: 8 }}>
                    {colIdx > 0 ? (
                      <button className="btn-icon" onClick={() => moveTask(col.key, columnOrder[colIdx - 1], card.id)} title={`Move to ${columnHeaders[colIdx - 1].title}`}>
                        <ArrowLeft size={14} />
                      </button>
                    ) : <div />}
                    {colIdx < columnOrder.length - 1 ? (
                      <button className="btn-icon" onClick={() => moveTask(col.key, columnOrder[colIdx + 1], card.id)} title={`Move to ${columnHeaders[colIdx + 1].title}`}>
                        <ArrowRight size={14} />
                      </button>
                    ) : <div />}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


