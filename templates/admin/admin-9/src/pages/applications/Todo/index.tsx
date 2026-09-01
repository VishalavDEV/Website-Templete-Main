/* src/pages/applications/Todo/index.tsx */
import React, { useState } from 'react';
import { Card } from '../../../components/ui/Card';
import { Checkbox } from '../../../components/ui/Checkbox';
import { Button } from '../../../components/ui/Button';
import { Badge } from '../../../components/ui/Badge';
import { PageHeader } from '../../../components/common';
import { useToast } from '../../../app/providers/ToastProvider';
import { Plus, List, Grid, Calendar, Trash2, Eye } from 'lucide-react';
import { useGlobalModal } from '../../../app/providers/ModalProvider';

interface TodoItem {
  id: number;
  text: string;
  desc: string;
  category: 'Staging' | 'Security' | 'Billing';
  date: string;
  done: boolean;
}

export default function TodoPage() {
  const { toast } = useToast();
  const { openModal, closeModal } = useGlobalModal();

  const [layoutMode, setLayoutMode] = useState<'list' | 'grid'>('list');
  const [activeCategory, setActiveCategory] = useState<'All' | 'Staging' | 'Security' | 'Billing'>('All');
  const [activeFilter, setActiveFilter] = useState<'all' | 'active' | 'completed'>('all');
  const [selectedTask, setSelectedTask] = useState<TodoItem | null>(null);

  const [todos, setTodos] = useState<TodoItem[]>([
    { id: 1, text: 'Audit SSL credentials', desc: 'Sync Wayne industries SSL nodes before staging build.', category: 'Security', date: '2026-08-20', done: true },
    { id: 2, text: 'VAT invoice tax calculation check', desc: 'Verify Vance Refrigeration billing totals are adjusted.', category: 'Billing', date: '2026-08-22', done: false },
    { id: 3, text: 'Develop chart primitive components', desc: 'Add Line and Area chart elements to design system.', category: 'Staging', date: '2026-08-25', done: false },
    { id: 4, text: 'Two-factor auth mock layout', desc: 'Build visual placeholder for secure login staging.', category: 'Security', date: '2026-08-28', done: false }
  ]);

  const handleToggle = (id: number) => {
    setTodos(todos.map(t => t.id === id ? { ...t, done: !t.done } : t));
    const task = todos.find(t => t.id === id);
    if (task) {
      toast.success(!task.done ? 'Task marked complete!' : 'Task marked active.');
      if (selectedTask?.id === id) {
        setSelectedTask(prev => prev ? { ...prev, done: !prev.done } : null);
      }
    }
  };

  const handleAddTask = (text: string, category: 'Staging' | 'Security' | 'Billing') => {
    if (!text.trim()) return;
    const newTask: TodoItem = {
      id: Date.now(),
      text,
      desc: 'Mock added task description details.',
      category,
      date: '2026-08-30',
      done: false
    };
    setTodos([...todos, newTask]);
    toast.success('Added new task to checklist!');
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter(t => t.id !== id));
    toast.error('Task deleted.');
    if (selectedTask?.id === id) setSelectedTask(null);
  };

  // Filter logic
  const filteredTodos = todos.filter((todo) => {
    const matchesCat = activeCategory === 'All' || todo.category === activeCategory;
    const matchesFilter = 
      activeFilter === 'all' || 
      (activeFilter === 'active' && !todo.done) || 
      (activeFilter === 'completed' && todo.done);
    return matchesCat && matchesFilter;
  });

  return (
    <div className="space-y-4 select-none">
      <PageHeader 
        title="Checklist Workstation" 
        subtitle="Manage and stage workforce tasks, filter categories, and check completed cards."
        actions={
          <div className="flex gap-1 border border-border bg-card p-1 rounded-lg">
            <button 
              onClick={() => setLayoutMode('list')} 
              className={`p-1.5 rounded cursor-pointer border-none bg-transparent ${layoutMode === 'list' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:bg-accent/40'}`}
            >
              <List className="h-4 w-4" />
            </button>
            <button 
              onClick={() => setLayoutMode('grid')} 
              className={`p-1.5 rounded cursor-pointer border-none bg-transparent ${layoutMode === 'grid' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:bg-accent/40'}`}
            >
              <Grid className="h-4 w-4" />
            </button>
          </div>
        }
      />

      {/* Tabs / Filters bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 bg-card p-3 border border-border rounded-xl">
        <div className="flex flex-wrap gap-1.5">
          {(['All', 'Staging', 'Security', 'Billing'] as const).map((cat) => (
            <Button 
              key={cat} 
              size="sm" 
              className="h-8 text-xs"
              variant={activeCategory === cat ? 'primary' : 'outline'}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </Button>
          ))}
        </div>
        <div className="flex gap-1.5">
          {(['all', 'active', 'completed'] as const).map((fil) => (
            <button 
              key={fil}
              onClick={() => setActiveFilter(fil)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg capitalize border-none bg-transparent cursor-pointer ${
                activeFilter === fil ? 'text-primary bg-primary/5 font-bold' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {fil}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-4 items-start">
        {/* Main tasks container (Left Column) */}
        <div className="flex-1 space-y-4 w-full">
          {filteredTodos.length === 0 ? (
            <Card className="text-center py-12 text-muted-foreground">
              No tasks found in selected filters.
            </Card>
          ) : layoutMode === 'list' ? (
            // Todo List View
            <Card>
              <div className="divide-y divide-border/60">
                {filteredTodos.map((todo) => (
                  <div key={todo.id} className="flex items-center justify-between p-3.5 hover:bg-accent/20 transition-colors">
                    <div className="flex items-center gap-3">
                      <Checkbox checked={todo.done} onChange={() => handleToggle(todo.id)} />
                      <span className={`text-xs font-semibold text-foreground ${todo.done ? 'line-through opacity-50' : ''}`}>
                        {todo.text}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Badge variant={todo.category === 'Security' ? 'destructive' : todo.category === 'Billing' ? 'warning' : 'success'}>
                        {todo.category}
                      </Badge>
                      <button 
                        onClick={() => setSelectedTask(todo)}
                        className="p-1 rounded hover:bg-accent text-muted-foreground hover:text-foreground cursor-pointer border-none bg-transparent"
                        title="View Details"
                      >
                        <Eye className="h-4 w-4" />
                      </button>
                      <button 
                        onClick={() => handleDelete(todo.id)}
                        className="p-1 rounded hover:bg-destructive/10 text-destructive cursor-pointer border-none bg-transparent"
                        title="Delete"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ) : (
            // Todo Grid View
            <div className="grid gap-4 sm:grid-cols-2">
              {filteredTodos.map((todo) => (
                <div key={todo.id} className="bg-card border border-border p-4 rounded-xl shadow-sm flex flex-col justify-between h-36 hover:border-primary/40 transition-colors">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Badge variant={todo.category === 'Security' ? 'destructive' : todo.category === 'Billing' ? 'warning' : 'success'}>
                        {todo.category}
                      </Badge>
                      <Checkbox checked={todo.done} onChange={() => handleToggle(todo.id)} />
                    </div>
                    <p className={`text-xs font-bold text-foreground truncate ${todo.done ? 'line-through opacity-50' : ''}`}>
                      {todo.text}
                    </p>
                    <p className="text-[10px] text-muted-foreground line-clamp-2">{todo.desc}</p>
                  </div>
                  <div className="flex justify-between items-center pt-2 border-t border-border/50 text-[10px] text-muted-foreground font-semibold">
                    <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {todo.date}</span>
                    <button 
                      onClick={() => setSelectedTask(todo)}
                      className="text-primary hover:underline flex items-center gap-0.5 cursor-pointer border-none bg-transparent"
                    >
                      Details →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Action Widgets Panel (Right Column) */}
        <div className="w-full lg:w-80 shrink-0 space-y-4">
          {/* Quick Task entry Form Card */}
          <Card title="Quick Task entry" subtitle="Staging helper.">
            <form 
              className="flex flex-col gap-3 pt-1" 
              onSubmit={(e) => {
                e.preventDefault();
                const input = (e.target as any).elements.taskText;
                const cat = (e.target as any).elements.taskCat.value;
                handleAddTask(input.value, cat);
                input.value = '';
              }}
            >
              <input 
                name="taskText" 
                placeholder="Add new task description..." 
                className="w-full h-9 border border-border bg-background px-3 rounded-lg text-xs text-foreground focus:outline-none" 
                required 
              />
              <div className="flex gap-2">
                <select name="taskCat" className="flex-1 h-9 border border-border bg-card px-2.5 rounded-lg text-xs text-foreground font-semibold focus:outline-none">
                  <option value="Staging">Staging</option>
                  <option value="Security">Security</option>
                  <option value="Billing">Billing</option>
                </select>
                <Button variant="primary" size="sm" type="submit">Add Task</Button>
              </div>
            </form>
          </Card>

          {/* Task Details side card */}
          {selectedTask && (
            <div className="animate-in slide-in-from-right duration-250">
              <Card 
                title="Task Details" 
                subtitle={`ID: TASK-${selectedTask.id}`}
              >
                <div className="space-y-4 pt-1">
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-[9px] font-bold text-muted-foreground uppercase block mb-0.5">Status</span>
                      <Badge variant={selectedTask.done ? 'success' : 'warning'}>
                        {selectedTask.done ? 'Completed' : 'Active'}
                      </Badge>
                    </div>
                    <button 
                      onClick={() => setSelectedTask(null)}
                      className="text-xs text-muted-foreground hover:text-foreground cursor-pointer border-none bg-transparent"
                    >
                      Clear Selection
                    </button>
                  </div>
                  <div>
                    <span className="text-[9px] font-bold text-muted-foreground uppercase block mb-0.5">Title</span>
                    <p className="text-xs font-bold text-foreground">{selectedTask.text}</p>
                  </div>
                  <div>
                    <span className="text-[9px] font-bold text-muted-foreground uppercase block mb-0.5">Description</span>
                    <p className="text-xs text-muted-foreground leading-relaxed">{selectedTask.desc}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs pt-2 border-t border-border/50">
                    <div>
                      <span className="text-[9px] font-bold text-muted-foreground uppercase block">Category</span>
                      <span className="font-semibold text-foreground">{selectedTask.category}</span>
                    </div>
                    <div>
                      <span className="text-[9px] font-bold text-muted-foreground uppercase block">Deadline</span>
                      <span className="font-semibold text-foreground">{selectedTask.date}</span>
                    </div>
                  </div>
                  <div className="pt-2 flex gap-1.5">
                    <Button 
                      variant="outline" 
                      className="w-full text-xs h-8.5" 
                      onClick={() => handleToggle(selectedTask.id)}
                    >
                      {selectedTask.done ? 'Reopen Task' : 'Complete Task'}
                    </Button>
                    <Button 
                      variant="destructive" 
                      size="icon" 
                      className="h-8.5 w-8.5 shrink-0"
                      onClick={() => handleDelete(selectedTask.id)}
                    >
                      <Trash2 className="h-4.5 w-4.5" />
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
