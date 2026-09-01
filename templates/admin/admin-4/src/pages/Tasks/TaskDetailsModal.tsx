import React, { useState } from 'react';
import { Modal } from '../../components/Common/Modal';
import { Button } from '../../components/Common/Button';
import { Badge } from '../../components/Common/Badge';
import { Avatar } from '../../components/Common/Avatar';
import { useApp } from '../../context/AppContext';
import { Task, TaskStatus, TaskPriority } from '../../types';
import { Play, Plus, CheckSquare, MessageSquare, Paperclip, Calendar, Clock, User, Trash2 } from 'lucide-react';

export interface TaskDetailsModalProps {
  task: Task | null;
  isOpen: boolean;
  onClose: () => void;
}

export const TaskDetailsModal: React.FC<TaskDetailsModalProps> = ({ task, isOpen, onClose }) => {
  const { updateTask, deleteTask, startTimer, currentUser, addToast } = useApp();

  const [newSubtaskTitle, setNewSubtaskTitle] = useState('');
  const [newCommentText, setNewCommentText] = useState('');

  if (!task || !isOpen) return null;

  const handleStatusChange = (status: TaskStatus) => {
    updateTask({ ...task, status });
  };

  const handlePriorityChange = (priority: TaskPriority) => {
    updateTask({ ...task, priority });
  };

  const handleToggleSubtask = (subId: string) => {
    const updatedSubtasks = task.subtasks.map(st =>
      st.id === subId ? { ...st, completed: !st.completed } : st
    );
    updateTask({ ...task, subtasks: updatedSubtasks });
  };

  const handleAddSubtask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newSubtaskTitle.trim()) return;
    const newSt = { id: `st-${Date.now()}`, title: newSubtaskTitle.trim(), completed: false };
    updateTask({ ...task, subtasks: [...task.subtasks, newSt] });
    setNewSubtaskTitle('');
  };

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCommentText.trim()) return;
    const newCmt = {
      id: `tc-${Date.now()}`,
      userId: currentUser.id,
      userName: currentUser.name,
      userAvatar: currentUser.avatar,
      content: newCommentText.trim(),
      createdAt: new Date().toISOString().replace('T', ' ').substring(0, 16)
    };
    updateTask({ ...task, comments: [...task.comments, newCmt] });
    setNewCommentText('');
  };

  const handleDelete = () => {
    deleteTask(task.id);
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs text-blue-400 font-semibold">{task.taskCode}</span>
          <span className="truncate max-w-md">{task.title}</span>
        </div>
      }
      size="xl"
      footer={
        <div className="flex items-center justify-between w-full">
          <Button variant="danger" size="sm" icon={<Trash2 className="w-4 h-4" />} onClick={handleDelete}>
            Delete Task
          </Button>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              icon={<Play className="w-4 h-4 text-emerald-400 fill-current" />}
              onClick={() => {
                startTimer(task.projectId, task.id, task.title);
                onClose();
              }}
            >
              Start Live Timer
            </Button>
            <Button variant="secondary" size="sm" onClick={onClose}>
              Close
            </Button>
          </div>
        </div>
      }
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 text-xs">
        {/* Left Column: Description, Subtasks, Comments */}
        <div className="lg:col-span-2 space-y-6">
          {/* Description */}
          <div>
            <h4 className="font-bold text-app-primary uppercase tracking-wider mb-1.5">Description</h4>
            <p className="text-app-secondary leading-relaxed bg-app-secondary/40 p-3.5 rounded-xl border border-app">
              {task.description || 'No detailed description provided.'}
            </p>
          </div>

          {/* Subtasks checklist */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-bold text-app-primary uppercase tracking-wider">Subtasks Checklist</h4>
              <span className="text-app-muted">
                {task.subtasks.filter(s => s.completed).length} / {task.subtasks.length} Completed
              </span>
            </div>

            <div className="space-y-1.5 mb-3">
              {task.subtasks.map(st => (
                <div
                  key={st.id}
                  onClick={() => handleToggleSubtask(st.id)}
                  className="flex items-center gap-2.5 p-2.5 rounded-xl bg-app-secondary/30 border border-app hover:bg-app-hover cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={st.completed}
                    onChange={() => {}}
                    className="rounded border-app text-blue-600 cursor-pointer"
                  />
                  <span className={st.completed ? 'line-through text-app-muted' : 'text-app-primary font-medium'}>
                    {st.title}
                  </span>
                </div>
              ))}
            </div>

            <form onSubmit={handleAddSubtask} className="flex gap-2">
              <input
                type="text"
                value={newSubtaskTitle}
                onChange={e => setNewSubtaskTitle(e.target.value)}
                placeholder="Add subtask..."
                className="flex-1 px-3 py-1.5 rounded-xl bg-app-secondary border border-app text-app-primary focus:outline-none"
              />
              <Button type="submit" variant="secondary" size="sm">
                Add
              </Button>
            </form>
          </div>

          {/* Comments Thread */}
          <div>
            <h4 className="font-bold text-app-primary uppercase tracking-wider mb-2">Discussion & Comments</h4>
            <div className="space-y-3 mb-3 max-h-48 overflow-y-auto">
              {task.comments.length === 0 ? (
                <p className="text-app-muted">No comments yet.</p>
              ) : (
                task.comments.map(c => (
                  <div key={c.id} className="flex items-start gap-2.5 p-3 rounded-xl bg-app-secondary/30 border border-app">
                    <Avatar src={c.userAvatar} name={c.userName} size="xs" />
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-app-primary">{c.userName}</span>
                        <span className="text-[10px] text-app-muted">{c.createdAt}</span>
                      </div>
                      <p className="text-app-secondary mt-1">{c.content}</p>
                    </div>
                  </div>
                ))
              )}
            </div>

            <form onSubmit={handleAddComment} className="flex gap-2">
              <input
                type="text"
                value={newCommentText}
                onChange={e => setNewCommentText(e.target.value)}
                placeholder="Write a comment..."
                className="flex-1 px-3 py-1.5 rounded-xl bg-app-secondary border border-app text-app-primary focus:outline-none"
              />
              <Button type="submit" variant="primary" size="sm">
                Post
              </Button>
            </form>
          </div>
        </div>

        {/* Right Column: Meta Attributes */}
        <div className="space-y-4 bg-app-secondary/40 p-4 rounded-xl border border-app">
          <div>
            <label className="block text-app-muted font-semibold mb-1">Status</label>
            <select
              value={task.status}
              onChange={e => handleStatusChange(e.target.value as TaskStatus)}
              className="w-full px-3 py-2 rounded-xl bg-app-surface border border-app font-semibold text-app-primary focus:outline-none"
            >
              <option value="Backlog">Backlog</option>
              <option value="To Do">To Do</option>
              <option value="In Progress">In Progress</option>
              <option value="Review">Review</option>
              <option value="Testing">Testing</option>
              <option value="Completed">Completed</option>
            </select>
          </div>

          <div>
            <label className="block text-app-muted font-semibold mb-1">Priority</label>
            <select
              value={task.priority}
              onChange={e => handlePriorityChange(e.target.value as TaskPriority)}
              className="w-full px-3 py-2 rounded-xl bg-app-surface border border-app font-semibold text-app-primary focus:outline-none"
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
              <option value="Urgent">Urgent</option>
            </select>
          </div>

          <div>
            <span className="text-app-muted font-semibold block mb-1">Assignee</span>
            <div className="flex items-center gap-2 p-2 rounded-xl bg-app-surface border border-app">
              <Avatar src={task.assigneeAvatar} name={task.assigneeName} size="xs" />
              <span className="font-semibold text-app-primary">{task.assigneeName}</span>
            </div>
          </div>

          <div>
            <span className="text-app-muted font-semibold block mb-1">Project</span>
            <p className="font-semibold text-app-primary">{task.projectName}</p>
          </div>

          <div>
            <span className="text-app-muted font-semibold block mb-1">Due Date</span>
            <p className="font-mono text-amber-400 font-semibold">{task.dueDate}</p>
          </div>

          <div>
            <span className="text-app-muted font-semibold block mb-1">Hours Logged</span>
            <p className="font-mono text-blue-400 font-semibold">{task.actualHours} / {task.estimatedHours} hrs</p>
          </div>
        </div>
      </div>
    </Modal>
  );
};
