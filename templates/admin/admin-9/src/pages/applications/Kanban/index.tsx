/* src/pages/applications/Kanban/index.tsx */
import React, { useState, useMemo } from 'react';
import { Button } from '../../../components/ui/Button';
import { Badge } from '../../../components/ui/Badge';
import { Card } from '../../../components/ui/Card';
import { Modal } from '../../../components/ui/Modal';
import { useToast } from '../../../app/providers/ToastProvider';
import { 
  Plus, Search, Filter, RefreshCw, MoreHorizontal, Calendar, 
  MessageSquare, CheckSquare, Paperclip, Grid, List, AlertCircle 
} from 'lucide-react';

interface Subtask {
  id: string;
  title: string;
  completed: boolean;
}

interface Task {
  id: string;
  title: string;
  description: string;
  status: 'Backlog' | 'In Progress' | 'Review' | 'Done';
  priority: 'High' | 'Medium' | 'Low';
  category: string;
  assignee: string;
  dueDate: string; // YYYY-MM-DD
  commentsCount: number;
  attachmentsCount: number;
  subtasks: Subtask[];
}

export default function KanbanPage() {
  const { toast } = useToast();
  const [viewMode, setViewMode] = useState<'board' | 'list'>('board');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Last updated tracking
  const [lastUpdated, setLastUpdated] = useState('Updated just now');

  // Filter states
  const [filterPriority, setFilterPriority] = useState<string>('All');
  const [filterAssignee, setFilterAssignee] = useState<string>('All');
  const [filterCategory, setFilterCategory] = useState<string>('All');
  const [filterDueDate, setFilterDueDate] = useState<string>('All');
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);

  // Modal states for Create/Edit
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [activeTask, setActiveTask] = useState<Task | null>(null);

  // Form states for creating a task
  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [newPriority, setNewPriority] = useState<'High' | 'Medium' | 'Low'>('Medium');
  const [newAssignee, setNewAssignee] = useState('Alex Morgan');
  const [newDueDate, setNewDueDate] = useState('2026-08-28');
  const [newCategory, setNewCategory] = useState('Design');
  const [newStatus, setNewStatus] = useState<'Backlog' | 'In Progress' | 'Review' | 'Done'>('Backlog');

  // Tasks state
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 't1',
      title: 'Website Redesign',
      description: 'Update landing page layouts and secondary navigation links component styling.',
      status: 'In Progress',
      priority: 'High',
      category: 'Design',
      assignee: 'Alex Morgan',
      dueDate: '2026-08-28',
      commentsCount: 3,
      attachmentsCount: 1,
      subtasks: [
        { id: 's1', title: 'Layout Mockups', completed: true },
        { id: 's2', title: 'Font Sync', completed: true },
        { id: 's3', title: 'Navigation Component Code', completed: false },
        { id: 's4', title: 'Mobile View Testing', completed: false }
      ]
    },
    {
      id: 't2',
      title: 'Brand Guidelines',
      description: 'Draft the palette specs and geometric logos templates files.',
      status: 'Review',
      priority: 'Medium',
      category: 'Marketing',
      assignee: 'Sarah Connor',
      dueDate: '2026-08-25',
      commentsCount: 1,
      attachmentsCount: 2,
      subtasks: [
        { id: 's5', title: 'Color Palette Select', completed: true },
        { id: 's6', title: 'Asset Package ZIP Spool', completed: false }
      ]
    },
    {
      id: 't3',
      title: 'Mobile App Development',
      description: 'Configure clean initial template folder directory structure.',
      status: 'Backlog',
      priority: 'High',
      category: 'Development',
      assignee: 'Diana Prince',
      dueDate: '2026-09-10',
      commentsCount: 0,
      attachmentsCount: 0,
      subtasks: [
        { id: 's7', title: 'Boilerplate Sync', completed: false }
      ]
    },
    {
      id: 't4',
      title: 'Database Optimization',
      description: 'Analyze indices and execution plan of invoice tax queries.',
      status: 'Done',
      priority: 'High',
      category: 'Engineering',
      assignee: 'David Smith',
      dueDate: '2026-08-15',
      commentsCount: 4,
      attachmentsCount: 0,
      subtasks: [
        { id: 's8', title: 'Index Spooling', completed: true },
        { id: 's9', title: 'Execution Audit Logs', completed: true }
      ]
    },
    {
      id: 't5',
      title: 'Security Audit',
      description: 'Review credential keys rotations and SSL certificates renewal timelines.',
      status: 'Review',
      priority: 'High',
      category: 'Security',
      assignee: 'Diana Prince',
      dueDate: '2026-08-20',
      commentsCount: 2,
      attachmentsCount: 1,
      subtasks: []
    },
    {
      id: 't6',
      title: 'Login Flow Review',
      description: 'Audit OAuth redirect links validation configurations.',
      status: 'Backlog',
      priority: 'Low',
      category: 'UX/UI',
      assignee: 'Alex Morgan',
      dueDate: '2026-09-05',
      commentsCount: 0,
      attachmentsCount: 0,
      subtasks: []
    },
    {
      id: 't7',
      title: 'Marketing Campaign Plan',
      description: 'Align quarterly launch guidelines with sales regional leaders.',
      status: 'Done',
      priority: 'Medium',
      category: 'Marketing',
      assignee: 'Sarah Connor',
      dueDate: '2026-08-10',
      commentsCount: 5,
      attachmentsCount: 3,
      subtasks: [
        { id: 's10', title: 'Email Copy Draft', completed: true },
        { id: 's11', title: 'Schedules Spooling', completed: true }
      ]
    },
    {
      id: 't8',
      title: 'API Integration',
      description: 'Configure REST webhook triggers for billing notifications processing.',
      status: 'In Progress',
      priority: 'Medium',
      category: 'Development',
      assignee: 'David Smith',
      dueDate: '2026-08-30',
      commentsCount: 1,
      attachmentsCount: 0,
      subtasks: [
        { id: 's12', title: 'Webhook Routing', completed: true },
        { id: 's13', title: 'Error Dispatcher Sync', completed: false }
      ]
    }
  ]);

  const assignees = ['Alex Morgan', 'Sarah Connor', 'Diana Prince', 'David Smith'];
  const categoriesList = ['Design', 'Marketing', 'Development', 'Engineering', 'Security', 'UX/UI'];
  const columns: ('Backlog' | 'In Progress' | 'Review' | 'Done')[] = ['Backlog', 'In Progress', 'Review', 'Done'];

  // Current static today anchor date
  const todayAnchor = new Date('2026-08-21');

  // Trigger manual refresh simulation
  const handleRefresh = () => {
    setLastUpdated('Updated just now');
    toast.success('Workflow data refreshed.');
  };

  // Create Task Submission
  const handleCreateTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    const createdTask: Task = {
      id: 't_new_' + Date.now(),
      title: newTitle,
      description: newDescription,
      status: newStatus,
      priority: newPriority,
      category: newCategory,
      assignee: newAssignee,
      dueDate: newDueDate,
      commentsCount: 0,
      attachmentsCount: 0,
      subtasks: []
    };

    setTasks(prev => [...prev, createdTask]);
    setIsCreateOpen(false);

    // Clear form inputs
    setNewTitle('');
    setNewDescription('');
    setNewPriority('Medium');
    setNewAssignee('Alex Morgan');
    setNewDueDate('2026-08-28');
    setNewCategory('Design');
    setNewStatus('Backlog');

    toast.success('Task created successfully in Backlog.');
  };

  // Edit Task Save Changes
  const handleSaveChanges = (e: React.FormEvent) => {
    e.preventDefault();
    if (!activeTask || !activeTask.title.trim()) return;

    setTasks(prev => prev.map(t => t.id === activeTask.id ? activeTask : t));
    setIsEditOpen(false);
    toast.success(`Task "${activeTask.title}" updated.`);
  };

  // Drag & Drop HTML5 APIs
  const handleDragStart = (e: React.DragEvent, taskId: string) => {
    e.dataTransfer.setData('text/plain', taskId);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent, targetStatus: 'Backlog' | 'In Progress' | 'Review' | 'Done') => {
    e.preventDefault();
    const taskId = e.dataTransfer.getData('text/plain');
    if (!taskId) return;

    setTasks(prev => prev.map(t => {
      if (t.id === taskId) {
        if (t.status !== targetStatus) {
          toast.success(`Moved "${t.title}" to ${targetStatus}`);
          return { ...t, status: targetStatus };
        }
      }
      return t;
    }));
  };

  // Summary statistics calculations
  const totalTasks = tasks.length;
  const backlogCount = tasks.filter(t => t.status === 'Backlog').length;
  const inProgressCount = tasks.filter(t => t.status === 'In Progress').length;
  const reviewCount = tasks.filter(t => t.status === 'Review').length;
  const doneCount = tasks.filter(t => t.status === 'Done').length;
  
  const overallProgressPercentage = totalTasks > 0 ? Math.round((doneCount / totalTasks) * 100) : 0;

  // Filter & Search Evaluation
  const filteredTasks = useMemo(() => {
    return tasks.filter(task => {
      // 1. Search Query
      const q = searchQuery.toLowerCase().trim();
      if (q) {
        const matchesTitle = task.title.toLowerCase().includes(q);
        const matchesDesc = task.description.toLowerCase().includes(q);
        const matchesCat = task.category.toLowerCase().includes(q);
        const matchesAssignee = task.assignee.toLowerCase().includes(q);
        if (!matchesTitle && !matchesDesc && !matchesCat && !matchesAssignee) {
          return false;
        }
      }

      // 2. Filter Priority
      if (filterPriority !== 'All' && task.priority !== filterPriority) return false;

      // 3. Filter Assignee
      if (filterAssignee !== 'All' && task.assignee !== filterAssignee) return false;

      // 4. Filter Category
      if (filterCategory !== 'All' && task.category !== filterCategory) return false;

      // 5. Filter Due Date
      if (filterDueDate !== 'All') {
        const taskDate = new Date(task.dueDate + 'T00:00:00');
        const diffDays = Math.ceil((taskDate.getTime() - todayAnchor.getTime()) / (1000 * 60 * 60 * 24));
        
        if (filterDueDate === 'Today' && diffDays !== 0) return false;
        if (filterDueDate === 'This Week' && (diffDays < 0 || diffDays > 7)) return false;
        if (filterDueDate === 'Overdue') {
          if (diffDays >= 0 || task.status === 'Done') return false;
        }
        if (filterDueDate === 'Upcoming' && diffDays <= 0) return false;
      }

      return true;
    });
  }, [tasks, searchQuery, filterPriority, filterAssignee, filterCategory, filterDueDate]);

  // Card State Evaluating Helpers
  const getCardStateDetails = (task: Task) => {
    if (task.status === 'Done') {
      return { border: 'border-l-4 border-l-success', dateColor: 'text-success' };
    }

    const taskDate = new Date(task.dueDate + 'T00:00:00');
    const diffDays = Math.ceil((taskDate.getTime() - todayAnchor.getTime()) / (1000 * 60 * 60 * 24));

    if (diffDays < 0) {
      return { border: 'border-l-4 border-l-destructive', dateColor: 'text-destructive font-bold flex items-center gap-1' };
    }
    if (diffDays >= 0 && diffDays <= 2) {
      return { border: 'border-l-4 border-l-warning', dateColor: 'text-warning font-bold flex items-center gap-1' };
    }
    if (task.priority === 'High') {
      return { border: 'border-l-4 border-l-red-500', dateColor: 'text-muted-foreground' };
    }

    return { border: 'border-l border-border', dateColor: 'text-muted-foreground' };
  };

  return (
    <div className="space-y-6 select-none relative pb-12">
      {/* 1. Header Toolbar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-extrabold text-foreground tracking-tight">Workflow Board</h1>
          <div className="text-xs text-muted-foreground flex items-center gap-1.5 mt-0.5">
            <span>{totalTasks} tasks</span>
            <span className="h-1 w-1 bg-border rounded-full"></span>
            <span>{lastUpdated}</span>
            <button onClick={handleRefresh} className="p-0.5 rounded hover:bg-muted text-muted-foreground hover:text-foreground cursor-pointer transition-colors border-none bg-transparent">
              <RefreshCw className="h-3 w-3" />
            </button>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {/* Search bar */}
          <div className="relative">
            <Search className="absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
            <input 
              type="text" 
              placeholder="Search tasks..." 
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-48 text-xs h-8.5 pl-8 pr-3 border border-border bg-card rounded-lg focus:outline-none focus:border-primary text-foreground"
            />
          </div>

          {/* Filter Trigger Button */}
          <div className="relative">
            <Button 
              variant={showFilterDropdown ? 'primary' : 'outline'} 
              size="sm" 
              className="h-8.5 text-xs" 
              leftIcon={<Filter className="h-3.5 w-3.5" />}
              onClick={() => setShowFilterDropdown(!showFilterDropdown)}
            >
              Filters
            </Button>
            {showFilterDropdown && (
              <div className="absolute right-0 mt-2 w-56 bg-card border border-border rounded-xl shadow-lg z-40 p-3 space-y-3.5">
                <div>
                  <label className="text-[9px] font-bold text-muted-foreground uppercase tracking-wider block mb-1">Priority</label>
                  <select 
                    value={filterPriority} 
                    onChange={e => setFilterPriority(e.target.value)}
                    className="w-full text-xs h-8 border border-border bg-background px-2 rounded focus:outline-none"
                  >
                    <option value="All">All Priority</option>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                  </select>
                </div>
                <div>
                  <label className="text-[9px] font-bold text-muted-foreground uppercase tracking-wider block mb-1">Assignee</label>
                  <select 
                    value={filterAssignee} 
                    onChange={e => setFilterAssignee(e.target.value)}
                    className="w-full text-xs h-8 border border-border bg-background px-2 rounded focus:outline-none"
                  >
                    <option value="All">All Assignees</option>
                    {assignees.map(a => <option key={a} value={a}>{a}</option>)}
                  </select>
                </div>
                <div>
                  <label className="text-[9px] font-bold text-muted-foreground uppercase tracking-wider block mb-1">Category</label>
                  <select 
                    value={filterCategory} 
                    onChange={e => setFilterCategory(e.target.value)}
                    className="w-full text-xs h-8 border border-border bg-background px-2 rounded focus:outline-none"
                  >
                    <option value="All">All Categories</option>
                    {categoriesList.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
                <div>
                  <label className="text-[9px] font-bold text-muted-foreground uppercase tracking-wider block mb-1">Due Date</label>
                  <select 
                    value={filterDueDate} 
                    onChange={e => setFilterDueDate(e.target.value)}
                    className="w-full text-xs h-8 border border-border bg-background px-2 rounded focus:outline-none"
                  >
                    <option value="All">Any Time</option>
                    <option value="Today">Today</option>
                    <option value="This Week">This Week</option>
                    <option value="Overdue">Overdue</option>
                    <option value="Upcoming">Upcoming</option>
                  </select>
                </div>
                <div className="pt-2 border-t border-border/40 flex justify-end">
                  <Button 
                    variant="outline" 
                    className="h-7 text-[10px]"
                    onClick={() => {
                      setFilterPriority('All');
                      setFilterAssignee('All');
                      setFilterCategory('All');
                      setFilterDueDate('All');
                      setShowFilterDropdown(false);
                      toast.success('Filters cleared.');
                    }}
                  >
                    Reset
                  </Button>
                </div>
              </div>
            )}
          </div>

          {/* View switcher */}
          <div className="flex border border-border bg-card p-1 rounded-lg">
            <button 
              onClick={() => setViewMode('board')} 
              className={`p-1 rounded cursor-pointer border-none bg-transparent ${viewMode === 'board' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:bg-accent/40'}`}
            >
              <Grid className="h-4.5 w-4.5" />
            </button>
            <button 
              onClick={() => setViewMode('list')} 
              className={`p-1 rounded cursor-pointer border-none bg-transparent ${viewMode === 'list' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:bg-accent/40'}`}
            >
              <List className="h-4.5 w-4.5" />
            </button>
          </div>

          {/* Create trigger */}
          <Button 
            variant="primary" 
            size="sm" 
            className="h-8.5 text-xs" 
            leftIcon={<Plus className="h-4 w-4" />}
            onClick={() => setIsCreateOpen(true)}
          >
            New Task
          </Button>
        </div>
      </div>

      {/* 2. Automatic Summary Header */}
      <div className="grid gap-4 grid-cols-2 lg:grid-cols-5 bg-card border border-border p-4 rounded-xl shadow-sm">
        <div className="border-r border-border/40 pr-2">
          <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Total Tasks</p>
          <p className="text-xl font-black text-foreground mt-1">{totalTasks}</p>
        </div>
        <div className="border-r border-border/40 pr-2">
          <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-muted"></span> Backlog
          </p>
          <p className="text-xl font-black text-foreground mt-1">{backlogCount}</p>
        </div>
        <div className="border-r border-border/40 pr-2">
          <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-blue-500"></span> In Progress
          </p>
          <p className="text-xl font-black text-foreground mt-1">{inProgressCount}</p>
        </div>
        <div className="border-r border-border/40 pr-2">
          <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-amber-500"></span> Review
          </p>
          <p className="text-xl font-black text-foreground mt-1">{reviewCount}</p>
        </div>
        <div>
          <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-success"></span> Done
          </p>
          <p className="text-xl font-black text-foreground mt-1">{doneCount}</p>
        </div>
        <div className="col-span-2 lg:col-span-5 border-t border-border/40 pt-4 flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div className="flex-1">
            <div className="flex justify-between text-xs font-bold text-muted-foreground mb-1.5">
              <span>Overall Progress</span>
              <span>{overallProgressPercentage}%</span>
            </div>
            <div className="w-full bg-muted/30 h-2.5 rounded-full overflow-hidden border border-border/40">
              <div className="bg-success h-full rounded-full transition-all duration-300" style={{ width: `${overallProgressPercentage}%` }}></div>
            </div>
          </div>
          <p className="text-[11px] text-muted-foreground font-semibold shrink-0">
            {doneCount} of {totalTasks} tasks completed
          </p>
        </div>
      </div>

      {/* 3. Board or List View Renderer */}
      {viewMode === 'list' ? (
        <Card className="shadow-sm border border-border overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left text-xs">
              <thead>
                <tr className="border-b border-border bg-muted/10 font-extrabold text-muted-foreground uppercase text-[10px] tracking-wider">
                  <th className="p-4">Task Name</th>
                  <th className="p-4">Status</th>
                  <th className="p-4">Priority</th>
                  <th className="p-4">Assignee</th>
                  <th className="p-4">Category</th>
                  <th className="p-4">Due Date</th>
                  <th className="p-4 text-center">Subtasks</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {filteredTasks.map(task => {
                  const subDone = task.subtasks.filter(s => s.completed).length;
                  const subTotal = task.subtasks.length;
                  return (
                    <tr 
                      key={task.id} 
                      onClick={() => {
                        setActiveTask({ ...task });
                        setIsEditOpen(true);
                      }}
                      className="hover:bg-accent/25 transition-colors cursor-pointer"
                    >
                      <td className="p-4 font-bold text-foreground">
                        <div>
                          <p>{task.title}</p>
                          <p className="text-[10px] font-normal text-muted-foreground line-clamp-1 mt-0.5">{task.description}</p>
                        </div>
                      </td>
                      <td className="p-4">
                        <Badge variant={
                          task.status === 'Done' ? 'success' :
                          task.status === 'Review' ? 'warning' :
                          task.status === 'In Progress' ? 'info' : 'secondary'
                        }>
                          {task.status}
                        </Badge>
                      </td>
                      <td className="p-4 font-semibold">
                        <span className={`text-[10px] font-bold uppercase ${
                          task.priority === 'High' ? 'text-destructive' :
                          task.priority === 'Medium' ? 'text-warning-foreground' : 'text-muted-foreground'
                        }`}>{task.priority}</span>
                      </td>
                      <td className="p-4 text-muted-foreground font-semibold">{task.assignee}</td>
                      <td className="p-4">
                        <Badge variant="secondary" className="bg-muted text-muted-foreground font-semibold text-[10px]">
                          {task.category}
                        </Badge>
                      </td>
                      <td className="p-4 text-muted-foreground font-semibold">{task.dueDate}</td>
                      <td className="p-4 text-center text-muted-foreground font-bold">
                        {subTotal > 0 ? `${subDone}/${subTotal}` : '-'}
                      </td>
                    </tr>
                  );
                })}
                {filteredTasks.length === 0 && (
                  <tr>
                    <td colSpan={7} className="p-8 text-center text-muted-foreground">
                      No tasks matches current searches/filters parameters.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </Card>
      ) : (
        <div className="grid gap-6 md:grid-cols-4 items-start overflow-x-auto min-w-full pb-4">
          {columns.map(status => {
            const columnTasks = filteredTasks.filter(t => t.status === status);
            const indicatorColor = 
              status === 'Done' ? 'bg-success' :
              status === 'Review' ? 'bg-amber-500' :
              status === 'In Progress' ? 'bg-blue-500' : 'bg-muted';

            return (
              <div 
                key={status} 
                onDragOver={handleDragOver}
                onDrop={(e) => handleDrop(e, status)}
                className="bg-card border border-border/80 rounded-xl p-4 flex flex-col gap-4 shadow-sm min-h-[480px] w-full md:min-w-[240px]"
              >
                {/* Column Header */}
                <div className="flex items-center justify-between pb-2 border-b border-border/40">
                  <div className="flex items-center gap-2">
                    <span className={`h-2.5 w-2.5 rounded-full ${indicatorColor}`}></span>
                    <span className="text-xs font-extrabold text-foreground uppercase tracking-wide">{status}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Badge variant="secondary">{columnTasks.length}</Badge>
                    <button className="p-0.5 rounded hover:bg-muted text-muted-foreground cursor-pointer border-none bg-transparent">
                      <MoreHorizontal className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                {/* Column Tasks Container */}
                <div className="space-y-3 flex-1 flex flex-col">
                  {columnTasks.map(task => {
                    const subDone = task.subtasks.filter(s => s.completed).length;
                    const subTotal = task.subtasks.length;
                    const cardState = getCardStateDetails(task);

                    return (
                      <div 
                        key={task.id} 
                        draggable
                        onDragStart={(e) => handleDragStart(e, task.id)}
                        onClick={() => {
                          setActiveTask({ ...task });
                          setIsEditOpen(true);
                        }}
                        className={`bg-card p-3 rounded-lg hover:border-primary/45 cursor-grab active:cursor-grabbing hover:scale-[1.01] hover:shadow-md transition-all ${cardState.border}`}
                      >
                        <div className="flex justify-between items-start gap-1">
                          <p className="text-xs font-extrabold text-foreground leading-snug line-clamp-2">{task.title}</p>
                          <span className={`text-[8.5px] font-black uppercase shrink-0 px-1 rounded ${
                            task.priority === 'High' ? 'bg-destructive/10 text-destructive' :
                            task.priority === 'Medium' ? 'bg-warning/10 text-warning-foreground' : 'bg-muted text-muted-foreground'
                          }`}>
                            {task.priority}
                          </span>
                        </div>
                        <p className="text-[10px] text-muted-foreground mt-1 line-clamp-2 leading-relaxed">
                          {task.description}
                        </p>

                        <div className="flex flex-wrap gap-1 mt-3.5">
                          <Badge variant="secondary" className="bg-muted text-muted-foreground font-bold text-[9px] px-1.5 py-0.5">
                            {task.category}
                          </Badge>
                        </div>

                        {/* Card metadata row */}
                        <div className="flex items-center justify-between mt-4 pt-3.5 border-t border-border/40 text-[10px] text-muted-foreground">
                          <span className="font-semibold text-foreground flex items-center gap-1">
                            <span className="h-4 w-4 rounded-full bg-primary/10 text-primary text-[8px] font-black flex items-center justify-center">👤</span>
                            {task.assignee}
                          </span>
                          <span className={`flex items-center gap-1 font-semibold ${cardState.dateColor}`}>
                            <Calendar className="h-3 w-3 shrink-0" />
                            {task.status === 'Done' ? 'Completed' : task.dueDate.split('-').slice(1).join('/')}
                            {task.status !== 'Done' && new Date(task.dueDate + 'T00:00:00') < todayAnchor && (
                              <AlertCircle className="h-3 w-3 text-destructive shrink-0" />
                            )}
                          </span>
                        </div>

                        {/* Extra indicators comments/subtasks count */}
                        {(task.commentsCount > 0 || subTotal > 0 || task.attachmentsCount > 0) && (
                          <div className="flex gap-2.5 mt-2.5 pt-2 border-t border-border/20 text-[9px] text-muted-foreground font-semibold">
                            {task.commentsCount > 0 && (
                              <span className="flex items-center gap-1"><MessageSquare className="h-3 w-3" /> {task.commentsCount}</span>
                            )}
                            {subTotal > 0 && (
                              <span className="flex items-center gap-1"><CheckSquare className="h-3 w-3" /> {subDone}/{subTotal}</span>
                            )}
                            {task.attachmentsCount > 0 && (
                              <span className="flex items-center gap-1"><Paperclip className="h-3 w-3" /> {task.attachmentsCount}</span>
                            )}
                          </div>
                        )}
                      </div>
                    );
                  })}

                  {/* Empty Stage Indicator */}
                  {columnTasks.length === 0 && (
                    <div className="flex-1 border border-dashed border-border/80 rounded-lg flex flex-col items-center justify-center p-6 text-center bg-muted/5 min-h-[140px]">
                      <span className="text-[10px] font-bold text-muted-foreground uppercase">No tasks here</span>
                      <p className="text-[9px] text-muted-foreground/80 mt-1 max-w-[140px]">
                        Create a new task to populate stage.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* 4. Task Creation Modal Dialog */}
      <Modal isOpen={isCreateOpen} onClose={() => setIsCreateOpen(false)} title="Create New Task">
        <form onSubmit={handleCreateTask} className="space-y-4 pt-2">
          <div>
            <label className="text-[10px] font-bold text-muted-foreground uppercase block mb-1">Task Title</label>
            <input 
              type="text" 
              placeholder="e.g. Website Redesign" 
              value={newTitle}
              onChange={e => setNewTitle(e.target.value)}
              className="w-full text-xs h-9 border border-border bg-background px-3 rounded-lg text-foreground focus:outline-none"
              required 
            />
          </div>
          <div>
            <label className="text-[10px] font-bold text-muted-foreground uppercase block mb-1">Description</label>
            <textarea 
              placeholder="Provide event details..." 
              value={newDescription}
              onChange={e => setNewDescription(e.target.value)}
              className="w-full text-xs min-h-[70px] border border-border bg-background px-3 py-2 rounded-lg text-foreground focus:outline-none"
              required 
            />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="text-[10px] font-bold text-muted-foreground uppercase block mb-1">Priority</label>
              <select 
                value={newPriority} 
                onChange={e => setNewPriority(e.target.value as any)}
                className="w-full text-xs h-9 border border-border bg-background px-2 rounded-lg text-foreground focus:outline-none"
              >
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            </div>
            <div>
              <label className="text-[10px] font-bold text-muted-foreground uppercase block mb-1">Assignee</label>
              <select 
                value={newAssignee} 
                onChange={e => setNewAssignee(e.target.value)}
                className="w-full text-xs h-9 border border-border bg-background px-2 rounded-lg text-foreground focus:outline-none"
              >
                {assignees.map(a => <option key={a} value={a}>{a}</option>)}
              </select>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="text-[10px] font-bold text-muted-foreground uppercase block mb-1">Due Date</label>
              <input 
                type="date" 
                value={newDueDate} 
                onChange={e => setNewDueDate(e.target.value)}
                className="w-full text-xs h-9 border border-border bg-background px-3 rounded-lg text-foreground focus:outline-none" 
                required 
              />
            </div>
            <div>
              <label className="text-[10px] font-bold text-muted-foreground uppercase block mb-1">Category</label>
              <select 
                value={newCategory} 
                onChange={e => setNewCategory(e.target.value)}
                className="w-full text-xs h-9 border border-border bg-background px-2 rounded-lg text-foreground focus:outline-none"
              >
                {categoriesList.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
          </div>
          <div>
            <label className="text-[10px] font-bold text-muted-foreground uppercase block mb-1">Status</label>
            <select 
              value={newStatus} 
              onChange={e => setNewStatus(e.target.value as any)}
              className="w-full text-xs h-9 border border-border bg-background px-2 rounded-lg text-foreground focus:outline-none"
            >
              {columns.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
          <div className="flex gap-2 justify-end pt-3 border-t border-border/40">
            <Button variant="outline" size="sm" type="button" onClick={() => setIsCreateOpen(false)}>Cancel</Button>
            <Button variant="primary" size="sm" type="submit">Create Task</Button>
          </div>
        </form>
      </Modal>

      {/* 5. Task Detail / Edit Modal Dialog */}
      <Modal isOpen={isEditOpen} onClose={() => setIsEditOpen(false)} title="Task Details">
        {activeTask && (
          <form onSubmit={handleSaveChanges} className="space-y-4 pt-2">
            <div>
              <label className="text-[10px] font-bold text-muted-foreground uppercase block mb-1">Task Title</label>
              <input 
                type="text" 
                value={activeTask.title}
                onChange={e => setActiveTask({ ...activeTask, title: e.target.value })}
                className="w-full text-xs h-9 border border-border bg-background px-3 rounded-lg text-foreground focus:outline-none"
                required 
              />
            </div>
            <div>
              <label className="text-[10px] font-bold text-muted-foreground uppercase block mb-1">Description</label>
              <textarea 
                value={activeTask.description}
                onChange={e => setActiveTask({ ...activeTask, description: e.target.value })}
                className="w-full text-xs min-h-[70px] border border-border bg-background px-3 py-2 rounded-lg text-foreground focus:outline-none"
                required 
              />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="text-[10px] font-bold text-muted-foreground uppercase block mb-1">Status</label>
                <select 
                  value={activeTask.status} 
                  onChange={e => setActiveTask({ ...activeTask, status: e.target.value as any })}
                  className="w-full text-xs h-9 border border-border bg-background px-2 rounded-lg text-foreground focus:outline-none"
                >
                  {columns.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
              <div>
                <label className="text-[10px] font-bold text-muted-foreground uppercase block mb-1">Priority</label>
                <select 
                  value={activeTask.priority} 
                  onChange={e => setActiveTask({ ...activeTask, priority: e.target.value as any })}
                  className="w-full text-xs h-9 border border-border bg-background px-2 rounded-lg text-foreground focus:outline-none"
                >
                  <option value="High">High</option>
                  <option value="Medium">Medium</option>
                  <option value="Low">Low</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="text-[10px] font-bold text-muted-foreground uppercase block mb-1">Assignee</label>
                <select 
                  value={activeTask.assignee} 
                  onChange={e => setActiveTask({ ...activeTask, assignee: e.target.value })}
                  className="w-full text-xs h-9 border border-border bg-background px-2 rounded-lg text-foreground focus:outline-none"
                >
                  {assignees.map(a => <option key={a} value={a}>{a}</option>)}
                </select>
              </div>
              <div>
                <label className="text-[10px] font-bold text-muted-foreground uppercase block mb-1">Due Date</label>
                <input 
                  type="date" 
                  value={activeTask.dueDate} 
                  onChange={e => setActiveTask({ ...activeTask, dueDate: e.target.value })}
                  className="w-full text-xs h-9 border border-border bg-background px-3 rounded-lg text-foreground focus:outline-none" 
                  required 
                />
              </div>
            </div>
            <div>
              <label className="text-[10px] font-bold text-muted-foreground uppercase block mb-1">Category</label>
              <select 
                value={activeTask.category} 
                onChange={e => setActiveTask({ ...activeTask, category: e.target.value })}
                className="w-full text-xs h-9 border border-border bg-background px-2 rounded-lg text-foreground focus:outline-none"
              >
                {categoriesList.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>

            {/* Subtasks Progress tracking detail */}
            {activeTask.subtasks.length > 0 && (
              <div className="border-t border-border/40 pt-4">
                <label className="text-[10px] font-bold text-muted-foreground uppercase block mb-2">Subtasks</label>
                <div className="space-y-1.5 max-h-36 overflow-y-auto pr-1">
                  {activeTask.subtasks.map((sub, sIdx) => (
                    <label key={sub.id} className="flex items-center gap-2 text-xs cursor-pointer">
                      <input 
                        type="checkbox" 
                        checked={sub.completed}
                        onChange={(e) => {
                          const updatedSubs = activeTask.subtasks.map(s => s.id === sub.id ? { ...s, completed: e.target.checked } : s);
                          setActiveTask({ ...activeTask, subtasks: updatedSubs });
                        }}
                        className="rounded border-border text-primary focus:ring-primary h-3.5 w-3.5" 
                      />
                      <span className={sub.completed ? 'line-through text-muted-foreground' : 'text-foreground'}>{sub.title}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            <div className="flex gap-2 justify-end pt-3 border-t border-border/40">
              <Button variant="outline" size="sm" type="button" onClick={() => setIsEditOpen(false)}>Cancel</Button>
              <Button variant="primary" size="sm" type="submit">Save Changes</Button>
            </div>
          </form>
        )}
      </Modal>
    </div>
  );
}
