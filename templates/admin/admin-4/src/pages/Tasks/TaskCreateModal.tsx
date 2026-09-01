import React, { useState } from 'react';
import { Modal } from '../../components/Common/Modal';
import { Button } from '../../components/Common/Button';
import { useApp } from '../../context/AppContext';
import { TaskPriority, TaskStatus } from '../../types';

export interface TaskCreateModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultStatus?: TaskStatus;
}

export const TaskCreateModal: React.FC<TaskCreateModalProps> = ({
  isOpen,
  onClose,
  defaultStatus = 'To Do'
}) => {
  const { addTask, projects, users } = useApp();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [projectId, setProjectId] = useState(projects[0]?.id || 'p-1');
  const [assigneeId, setAssigneeId] = useState(users[2]?.id || 'u-3');
  const [status, setStatus] = useState<TaskStatus>(defaultStatus);
  const [priority, setPriority] = useState<TaskPriority>('High');
  const [dueDate, setDueDate] = useState('2026-03-31');
  const [estimatedHours, setEstimatedHours] = useState('16');
  const [tags, setTags] = useState('React, UI, Feature');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    const prj = projects.find(p => p.id === projectId);
    const usr = users.find(u => u.id === assigneeId);

    addTask({
      title: title.trim(),
      description: description.trim(),
      projectId,
      projectName: prj ? prj.name : 'General Project',
      assigneeId,
      assigneeName: usr ? usr.name : 'Unassigned',
      assigneeAvatar: usr?.avatar,
      status,
      priority,
      startDate: new Date().toISOString().split('T')[0],
      dueDate,
      estimatedHours: parseFloat(estimatedHours) || 8,
      tags: tags.split(',').map(t => t.trim()).filter(Boolean)
    });

    onClose();
    setTitle('');
    setDescription('');
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Create New Task"
      size="md"
      footer={
        <>
          <Button variant="secondary" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Create Task
          </Button>
        </>
      }
    >
      <form onSubmit={handleSubmit} className="space-y-4 text-xs">
        <div>
          <label className="block font-semibold text-app-primary mb-1">Task Title *</label>
          <input
            type="text"
            required
            value={title}
            onChange={e => setTitle(e.target.value)}
            placeholder="e.g. Implement WebSocket Real-time Feed"
            className="w-full px-3.5 py-2 rounded-xl bg-app-secondary border border-app text-sm text-app-primary focus:outline-none focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block font-semibold text-app-primary mb-1">Description</label>
          <textarea
            rows={3}
            value={description}
            onChange={e => setDescription(e.target.value)}
            placeholder="Task execution details, subtasks, and acceptance criteria..."
            className="w-full px-3.5 py-2 rounded-xl bg-app-secondary border border-app text-sm text-app-primary focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block font-semibold text-app-primary mb-1">Project</label>
            <select
              value={projectId}
              onChange={e => setProjectId(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-app-secondary border border-app text-sm text-app-primary focus:outline-none"
            >
              {projects.map(p => (
                <option key={p.id} value={p.id}>
                  {p.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block font-semibold text-app-primary mb-1">Assignee</label>
            <select
              value={assigneeId}
              onChange={e => setAssigneeId(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-app-secondary border border-app text-sm text-app-primary focus:outline-none"
            >
              {users.map(u => (
                <option key={u.id} value={u.id}>
                  {u.name} ({u.role})
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block font-semibold text-app-primary mb-1">Status</label>
            <select
              value={status}
              onChange={e => setStatus(e.target.value as TaskStatus)}
              className="w-full px-3 py-2 rounded-xl bg-app-secondary border border-app text-sm text-app-primary focus:outline-none"
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
            <label className="block font-semibold text-app-primary mb-1">Priority</label>
            <select
              value={priority}
              onChange={e => setPriority(e.target.value as TaskPriority)}
              className="w-full px-3 py-2 rounded-xl bg-app-secondary border border-app text-sm text-app-primary focus:outline-none"
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
              <option value="Urgent">Urgent</option>
            </select>
          </div>

          <div>
            <label className="block font-semibold text-app-primary mb-1">Est. Hours</label>
            <input
              type="number"
              value={estimatedHours}
              onChange={e => setEstimatedHours(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-app-secondary border border-app text-sm text-app-primary focus:outline-none"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block font-semibold text-app-primary mb-1">Due Date</label>
            <input
              type="date"
              value={dueDate}
              onChange={e => setDueDate(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-app-secondary border border-app text-sm text-app-primary focus:outline-none"
            />
          </div>
          <div>
            <label className="block font-semibold text-app-primary mb-1">Tags (Comma Separated)</label>
            <input
              type="text"
              value={tags}
              onChange={e => setTags(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-app-secondary border border-app text-sm text-app-primary focus:outline-none"
            />
          </div>
        </div>
      </form>
    </Modal>
  );
};
