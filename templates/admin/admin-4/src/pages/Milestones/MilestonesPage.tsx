import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Card } from '../../components/Common/Card';
import { Button } from '../../components/Common/Button';
import { Badge } from '../../components/Common/Badge';
import { Modal } from '../../components/Common/Modal';
import { Flag, Plus, Calendar, CheckCircle2, Clock } from 'lucide-react';

export const MilestonesPage: React.FC = () => {
  const { milestones, addMilestone, projects } = useApp();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [projectId, setProjectId] = useState(projects[0]?.id || 'p-1');
  const [dueDate, setDueDate] = useState('2026-04-30');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    const prj = projects.find(p => p.id === projectId);
    addMilestone({
      projectId,
      projectName: prj ? prj.name : 'General Project',
      title: title.trim(),
      description: description.trim(),
      dueDate,
      status: 'Upcoming',
      taskIds: []
    });
    setIsModalOpen(false);
    setTitle('');
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-bold text-app-primary">Project Milestones</h1>
          <p className="text-xs text-app-secondary mt-0.5">
            Key deliverable benchmarks and release targets across active projects.
          </p>
        </div>
        <Button variant="primary" size="sm" icon={<Plus className="w-4 h-4" />} onClick={() => setIsModalOpen(true)}>
          Add Milestone
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {milestones.map(m => (
          <Card key={m.id} className="flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-semibold text-blue-400">{m.projectName}</span>
                <Badge variant={m.status === 'Completed' ? 'completed' : m.status === 'In Progress' ? 'in_progress' : 'warning'}>
                  {m.status}
                </Badge>
              </div>
              <h3 className="text-base font-bold text-app-primary">{m.title}</h3>
              <p className="text-xs text-app-secondary leading-relaxed">{m.description}</p>
            </div>

            <div className="space-y-3 pt-3 border-t border-app">
              <div>
                <div className="flex justify-between text-xs font-semibold mb-1">
                  <span className="text-app-secondary">Progress</span>
                  <span className="text-app-primary">{m.progress}%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-app-secondary overflow-hidden">
                  <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${m.progress}%` }} />
                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-app-muted">
                <div className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-amber-400" />
                  <span>Target: <strong className="text-app-primary">{m.dueDate}</strong></span>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Add Milestone Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Create Project Milestone"
        size="md"
        footer={
          <>
            <Button variant="secondary" onClick={() => setIsModalOpen(false)}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleSubmit}>
              Save Milestone
            </Button>
          </>
        }
      >
        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          <div>
            <label className="block font-semibold text-app-primary mb-1">Milestone Title *</label>
            <input
              type="text"
              required
              value={title}
              onChange={e => setTitle(e.target.value)}
              placeholder="e.g. Phase 2 Release Cut"
              className="w-full px-3.5 py-2 rounded-xl bg-app-secondary border border-app text-sm text-app-primary focus:outline-none"
            />
          </div>
          <div>
            <label className="block font-semibold text-app-primary mb-1">Description</label>
            <textarea
              rows={3}
              value={description}
              onChange={e => setDescription(e.target.value)}
              className="w-full px-3.5 py-2 rounded-xl bg-app-secondary border border-app text-sm text-app-primary focus:outline-none"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold text-app-primary mb-1">Project</label>
              <select
                value={projectId}
                onChange={e => setProjectId(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-app-secondary border border-app text-sm text-app-primary focus:outline-none"
              >
                {projects.map(p => (
                  <option key={p.id} value={p.id}>{p.name}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block font-semibold text-app-primary mb-1">Due Date</label>
              <input
                type="date"
                value={dueDate}
                onChange={e => setDueDate(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-app-secondary border border-app text-sm text-app-primary focus:outline-none"
              />
            </div>
          </div>
        </form>
      </Modal>
    </div>
  );
};
