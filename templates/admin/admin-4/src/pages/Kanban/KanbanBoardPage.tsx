import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { DragDropContext, Droppable, Draggable, DropResult } from '@hello-pangea/dnd';
import { Card } from '../../components/Common/Card';
import { Badge } from '../../components/Common/Badge';
import { Avatar } from '../../components/Common/Avatar';
import { Button } from '../../components/Common/Button';
import { TaskCreateModal } from '../Tasks/TaskCreateModal';
import { TaskDetailsModal } from '../Tasks/TaskDetailsModal';
import { Task, TaskStatus } from '../../types';
import { Plus, Search, Filter, Play, CheckSquare, Clock } from 'lucide-react';

const COLUMNS: { id: TaskStatus; title: string; color: string }[] = [
  { id: 'Backlog', title: 'Backlog', color: 'border-t-gray-500' },
  { id: 'To Do', title: 'To Do', color: 'border-t-blue-500' },
  { id: 'In Progress', title: 'In Progress', color: 'border-t-amber-500' },
  { id: 'Review', title: 'Review', color: 'border-t-purple-500' },
  { id: 'Testing', title: 'Testing', color: 'border-t-sky-500' },
  { id: 'Completed', title: 'Completed', color: 'border-t-emerald-500' }
];

export const KanbanBoardPage: React.FC = () => {
  const { tasks, updateTaskStatus, projects, startTimer } = useApp();

  const [selectedProjectId, setSelectedProjectId] = useState<string>('All');
  const [priorityFilter, setPriorityFilter] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Modals state
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [createDefaultStatus, setCreateDefaultStatus] = useState<TaskStatus>('To Do');
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);

  const filteredTasks = tasks.filter(t => {
    const matchesProject = selectedProjectId === 'All' ? true : t.projectId === selectedProjectId;
    const matchesPriority = priorityFilter === 'All' ? true : t.priority === priorityFilter;
    const matchesSearch =
      t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.taskCode.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesProject && matchesPriority && matchesSearch;
  });

  const onDragEnd = (result: DropResult) => {
    const { destination, source, draggableId } = result;
    if (!destination) return;
    if (destination.droppableId === source.droppableId && destination.index === source.index) return;

    const newStatus = destination.droppableId as TaskStatus;
    updateTaskStatus(draggableId, newStatus);
  };

  const openCreateForColumn = (status: TaskStatus) => {
    setCreateDefaultStatus(status);
    setIsCreateOpen(true);
  };

  return (
    <div className="space-y-6 flex flex-col h-[calc(100vh-8rem)]">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 shrink-0">
        <div>
          <h1 className="text-xl font-bold text-app-primary">Interactive Kanban Workflow</h1>
          <p className="text-xs text-app-secondary mt-0.5">
            Drag and drop tasks between workflow stages to update team velocity in real time.
          </p>
        </div>
        <Button
          variant="primary"
          size="sm"
          icon={<Plus className="w-4 h-4" />}
          onClick={() => openCreateForColumn('To Do')}
        >
          Add New Task
        </Button>
      </div>

      {/* Filter Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-app-surface p-4 border border-app rounded-2xl shrink-0">
        <div className="flex flex-wrap items-center gap-3 flex-1">
          {/* Search */}
          <div className="relative w-64">
            <Search className="w-4 h-4 text-app-muted absolute left-3 top-2.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search cards..."
              className="w-full pl-9 pr-3 py-1.5 rounded-xl bg-app-secondary border border-app text-xs text-app-primary placeholder-app-muted focus:outline-none"
            />
          </div>

          {/* Project Filter */}
          <select
            value={selectedProjectId}
            onChange={e => setSelectedProjectId(e.target.value)}
            className="px-3 py-1.5 rounded-xl bg-app-secondary border border-app text-xs text-app-primary focus:outline-none"
          >
            <option value="All">All Projects</option>
            {projects.map(p => (
              <option key={p.id} value={p.id}>
                {p.name}
              </option>
            ))}
          </select>

          {/* Priority Filter */}
          <select
            value={priorityFilter}
            onChange={e => setPriorityFilter(e.target.value)}
            className="px-3 py-1.5 rounded-xl bg-app-secondary border border-app text-xs text-app-primary focus:outline-none"
          >
            <option value="All">All Priorities</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
            <option value="Urgent">Urgent</option>
          </select>
        </div>
      </div>

      {/* Kanban Drag and Drop Columns */}
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="flex-1 overflow-x-auto overflow-y-hidden pb-4">
          <div className="flex gap-4 h-full min-w-max">
            {COLUMNS.map(col => {
              const colTasks = filteredTasks.filter(t => t.status === col.id);
              return (
                <div
                  key={col.id}
                  className={`w-72 bg-app-surface/90 border border-app rounded-2xl flex flex-col h-full overflow-hidden shadow-xs border-t-4 ${col.color}`}
                >
                  {/* Column Header */}
                  <div className="p-3.5 border-b border-app flex items-center justify-between bg-app-secondary/30">
                    <div className="flex items-center gap-2">
                      <h3 className="text-xs font-bold text-app-primary uppercase tracking-wider">{col.title}</h3>
                      <span className="px-2 py-0.5 rounded-full bg-app border border-app text-[10px] font-bold text-app-secondary">
                        {colTasks.length}
                      </span>
                    </div>
                    <button
                      onClick={() => openCreateForColumn(col.id)}
                      className="p-1 rounded-lg text-app-muted hover:text-app-primary hover:bg-app-hover cursor-pointer"
                      title={`Add task to ${col.title}`}
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Droppable Card Area */}
                  <Droppable droppableId={col.id}>
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        className={`flex-1 overflow-y-auto p-3 space-y-3 transition-colors ${
                          snapshot.isDraggingOver ? 'bg-blue-500/5' : ''
                        }`}
                      >
                        {colTasks.map((task, index) => (
                          <Draggable key={task.id} draggableId={task.id} index={index}>
                            {(draggableProvided, draggableSnapshot) => (
                              <div
                                ref={draggableProvided.innerRef}
                                {...draggableProvided.draggableProps}
                                {...draggableProvided.dragHandleProps}
                                onClick={() => setSelectedTask(task)}
                                className={`p-3.5 rounded-xl bg-app-secondary/60 border border-app shadow-xs hover:border-blue-500/50 cursor-pointer space-y-2.5 transition-all ${
                                  draggableSnapshot.isDragging ? 'shadow-2xl ring-2 ring-blue-500 rotate-1' : ''
                                }`}
                              >
                                {/* Code & Priority */}
                                <div className="flex items-center justify-between">
                                  <span className="font-mono text-[10px] font-bold text-blue-400">{task.taskCode}</span>
                                  <Badge
                                    variant={task.priority === 'Urgent' ? 'urgent' : task.priority === 'High' ? 'danger' : 'neutral'}
                                    size="sm"
                                  >
                                    {task.priority}
                                  </Badge>
                                </div>

                                {/* Title */}
                                <h4 className="text-xs font-bold text-app-primary leading-snug line-clamp-2">
                                  {task.title}
                                </h4>

                                {/* Project name */}
                                <p className="text-[10px] text-app-muted line-clamp-1">{task.projectName}</p>

                                {/* Progress subtasks */}
                                {task.subtasks.length > 0 && (
                                  <div className="flex items-center gap-1.5 text-[10px] text-app-secondary">
                                    <CheckSquare className="w-3 h-3 text-emerald-400" />
                                    <span>
                                      {task.subtasks.filter(s => s.completed).length}/{task.subtasks.length} subtasks
                                    </span>
                                  </div>
                                )}

                                {/* Footer Assignee & Due Date */}
                                <div className="pt-2 border-t border-app flex items-center justify-between">
                                  <div className="flex items-center gap-1.5">
                                    <Avatar src={task.assigneeAvatar} name={task.assigneeName} size="xs" />
                                    <span className="text-[11px] font-medium text-app-secondary truncate max-w-[90px]">
                                      {task.assigneeName}
                                    </span>
                                  </div>
                                  <div className="flex items-center gap-1 text-[10px] text-app-muted">
                                    <Clock className="w-3 h-3 text-amber-400" />
                                    <span>{task.dueDate.substring(5)}</span>
                                  </div>
                                </div>
                              </div>
                            )}
                          </Draggable>
                        ))}
                        {provided.placeholder}
                      </div>
                    )}
                  </Droppable>
                </div>
              );
            })}
          </div>
        </div>
      </DragDropContext>

      {/* Modals */}
      <TaskCreateModal
        isOpen={isCreateOpen}
        onClose={() => setIsCreateOpen(false)}
        defaultStatus={createDefaultStatus}
      />
      <TaskDetailsModal task={selectedTask} isOpen={!!selectedTask} onClose={() => setSelectedTask(null)} />
    </div>
  );
};
