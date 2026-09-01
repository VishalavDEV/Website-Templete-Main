import React, { useState } from 'react';
import { Modal } from '../../components/Common/Modal';
import { Button } from '../../components/Common/Button';
import { useApp } from '../../context/AppContext';
import { ProjectPriority, ProjectStatus } from '../../types';

export interface ProjectCreateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectCreateModal: React.FC<ProjectCreateModalProps> = ({ isOpen, onClose }) => {
  const { addProject, clients, users } = useApp();

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [clientId, setClientId] = useState(clients[0]?.id || 'c-1');
  const [projectManagerId, setProjectManagerId] = useState(users[1]?.id || 'u-2');
  const [status, setStatus] = useState<ProjectStatus>('Planning');
  const [priority, setPriority] = useState<ProjectPriority>('High');
  const [startDate, setStartDate] = useState(new Date().toISOString().split('T')[0]);
  const [endDate, setEndDate] = useState('2026-10-30');
  const [budget, setBudget] = useState('150000');
  const [category, setCategory] = useState('Web Application');
  const [tags, setTags] = useState('React, Cloud, SaaS');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    const selectedClient = clients.find(c => c.id === clientId);
    const selectedPM = users.find(u => u.id === projectManagerId);

    addProject({
      name: name.trim(),
      description: description.trim(),
      clientId,
      clientName: selectedClient ? selectedClient.name : 'Corporate Client',
      projectManagerId,
      projectManagerName: selectedPM ? selectedPM.name : 'Project Manager',
      projectManagerAvatar: selectedPM?.avatar,
      teamMemberIds: ['u-1', 'u-3', 'u-5'],
      status,
      priority,
      startDate,
      endDate,
      budget: parseFloat(budget) || 100000,
      category,
      tags: tags.split(',').map(t => t.trim()).filter(Boolean)
    });

    onClose();
    setName('');
    setDescription('');
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Create New Project"
      size="lg"
      footer={
        <>
          <Button variant="secondary" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Create Project
          </Button>
        </>
      }
    >
      <form onSubmit={handleSubmit} className="space-y-4 text-xs">
        <div>
          <label className="block font-semibold text-app-primary mb-1">Project Name *</label>
          <input
            type="text"
            required
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="e.g. CoreVista Enterprise Mobile App"
            className="w-full px-3.5 py-2 rounded-xl bg-app-secondary border border-app text-sm text-app-primary focus:outline-none focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block font-semibold text-app-primary mb-1">Description</label>
          <textarea
            rows={3}
            value={description}
            onChange={e => setDescription(e.target.value)}
            placeholder="Provide architectural objectives, target deliverables, and scope details..."
            className="w-full px-3.5 py-2 rounded-xl bg-app-secondary border border-app text-sm text-app-primary focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block font-semibold text-app-primary mb-1">Client</label>
            <select
              value={clientId}
              onChange={e => setClientId(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-app-secondary border border-app text-sm text-app-primary focus:outline-none"
            >
              {clients.map(c => (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block font-semibold text-app-primary mb-1">Project Manager</label>
            <select
              value={projectManagerId}
              onChange={e => setProjectManagerId(e.target.value)}
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
              onChange={e => setStatus(e.target.value as ProjectStatus)}
              className="w-full px-3 py-2 rounded-xl bg-app-secondary border border-app text-sm text-app-primary focus:outline-none"
            >
              <option value="Planning">Planning</option>
              <option value="In Progress">In Progress</option>
              <option value="Review">Review</option>
              <option value="Completed">Completed</option>
            </select>
          </div>

          <div>
            <label className="block font-semibold text-app-primary mb-1">Priority</label>
            <select
              value={priority}
              onChange={e => setPriority(e.target.value as ProjectPriority)}
              className="w-full px-3 py-2 rounded-xl bg-app-secondary border border-app text-sm text-app-primary focus:outline-none"
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
              <option value="Urgent">Urgent</option>
            </select>
          </div>

          <div>
            <label className="block font-semibold text-app-primary mb-1">Budget ($ USD)</label>
            <input
              type="number"
              value={budget}
              onChange={e => setBudget(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-app-secondary border border-app text-sm text-app-primary focus:outline-none"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block font-semibold text-app-primary mb-1">Start Date</label>
            <input
              type="date"
              value={startDate}
              onChange={e => setStartDate(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-app-secondary border border-app text-sm text-app-primary focus:outline-none"
            />
          </div>
          <div>
            <label className="block font-semibold text-app-primary mb-1">Target End Date</label>
            <input
              type="date"
              value={endDate}
              onChange={e => setEndDate(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-app-secondary border border-app text-sm text-app-primary focus:outline-none"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block font-semibold text-app-primary mb-1">Category</label>
            <input
              type="text"
              value={category}
              onChange={e => setCategory(e.target.value)}
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
