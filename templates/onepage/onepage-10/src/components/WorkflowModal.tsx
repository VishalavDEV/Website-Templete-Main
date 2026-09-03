import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  X,
  Workflow,
  Plus,
  Trash2,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Layers,
  Clock
} from 'lucide-react';
import { WorkflowItem, WorkflowStep } from '../types';

interface WorkflowModalProps {
  isOpen: boolean;
  onClose: () => void;
  workflowToEdit?: WorkflowItem | null;
}

export const WorkflowModal: React.FC<WorkflowModalProps> = ({
  isOpen,
  onClose,
  workflowToEdit
}) => {
  const { createWorkflow, updateWorkflow } = useApp();

  const [name, setName] = useState(workflowToEdit?.name || '');
  const [description, setDescription] = useState(workflowToEdit?.description || '');
  const [schedule, setSchedule] = useState(workflowToEdit?.schedule || 'Every 15 minutes');
  const [steps, setSteps] = useState<WorkflowStep[]>(
    workflowToEdit?.steps || [
      { id: '1', name: 'Trigger: Event Ingestion', type: 'trigger', status: 'ready', description: 'Kafka stream webhook' },
      { id: '2', name: 'AI Synthesis Agent', type: 'action', status: 'ready', description: 'Evaluate risk matrix & classify' },
      { id: '3', name: 'Ledger Settlement', type: 'action', status: 'ready', description: 'Commit cryptographically to audit ledger' }
    ]
  );

  if (!isOpen) return null;

  const handleAddStep = () => {
    const newStep: WorkflowStep = {
      id: String(Date.now()),
      name: 'Custom Agent Action',
      type: 'action',
      status: 'ready',
      description: 'Autonomous transformation node'
    };
    setSteps([...steps, newStep]);
  };

  const handleRemoveStep = (id: string) => {
    if (steps.length <= 1) return;
    setSteps(steps.filter(s => s.id !== id));
  };

  const handleUpdateStepName = (id: string, newName: string) => {
    setSteps(steps.map(s => (s.id === id ? { ...s, name: newName } : s)));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    if (workflowToEdit) {
      updateWorkflow(workflowToEdit.id, {
        name,
        description,
        schedule,
        steps
      });
    } else {
      createWorkflow({
        name,
        description: description || 'Autonomous workflow pipeline',
        schedule,
        status: 'active',
        steps
      });
    }

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div
        className="w-full max-w-xl bg-[#0C0C12] border border-white/10 rounded-2xl shadow-2xl overflow-hidden my-8"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 border-b border-white/5 bg-gradient-to-r from-[#08080A] via-[#0C0C12] to-[#141422] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
              <Workflow className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">
                {workflowToEdit ? 'Configure Workflow Pipeline' : 'Create Autonomous Workflow'}
              </h3>
              <p className="text-xs text-slate-400">Multi-agent decision graph orchestrator</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-5 space-y-4 max-h-[70vh] overflow-y-auto">
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              Workflow Name *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Real-Time Sovereign Arbitrage Engine"
              value={name}
              onChange={e => setName(e.target.value)}
              className="w-full px-3.5 py-2 text-sm bg-[#08080A] border border-white/10 rounded-xl focus:outline-none focus:border-indigo-500 text-white placeholder-slate-600 transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              Description & Objectives
            </label>
            <textarea
              rows={2}
              placeholder="Define input triggers, anomaly handling, and destination outputs..."
              value={description}
              onChange={e => setDescription(e.target.value)}
              className="w-full px-3.5 py-2 text-sm bg-[#08080A] border border-white/10 rounded-xl focus:outline-none focus:border-indigo-500 text-white placeholder-slate-600 transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              Execution Cadence / Trigger Schedule
            </label>
            <select
              value={schedule}
              onChange={e => setSchedule(e.target.value)}
              className="w-full px-3.5 py-2 text-sm bg-[#08080A] border border-white/10 rounded-xl focus:outline-none focus:border-indigo-500 text-slate-200 transition-colors"
            >
              <option value="Continuous (Event Driven)">Continuous (Event Stream / Real-time Webhook)</option>
              <option value="Every 5 minutes">Every 5 minutes</option>
              <option value="Every 15 minutes">Every 15 minutes</option>
              <option value="Hourly Batch">Hourly Batch</option>
              <option value="Daily Midnight Settlement">Daily Midnight Settlement</option>
            </select>
          </div>

          {/* Steps Pipeline */}
          <div className="space-y-2 pt-2 border-t border-white/5">
            <div className="flex items-center justify-between">
              <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-indigo-400" />
                <span>Execution Steps ({steps.length})</span>
              </label>
              <button
                type="button"
                onClick={handleAddStep}
                className="flex items-center gap-1 text-xs text-indigo-400 hover:text-indigo-300 font-semibold"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add Node</span>
              </button>
            </div>

            <div className="space-y-2">
              {steps.map((step, idx) => (
                <div
                  key={step.id}
                  className="flex items-center gap-2 p-2.5 bg-[#08080A] rounded-xl border border-white/5"
                >
                  <span className="w-5 h-5 rounded-full bg-white/5 text-slate-400 text-[10px] font-mono flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <input
                    type="text"
                    value={step.name}
                    onChange={e => handleUpdateStepName(step.id, e.target.value)}
                    className="flex-1 bg-transparent text-xs text-white focus:outline-none"
                  />
                  <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-white/5 text-slate-400 border border-white/10">
                    {step.type}
                  </span>
                  {steps.length > 1 && (
                    <button
                      type="button"
                      onClick={() => handleRemoveStep(step.id)}
                      className="p-1 text-slate-500 hover:text-rose-400"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Footer Submit */}
          <div className="pt-3 border-t border-white/5 flex items-center justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs text-slate-400 hover:text-white transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 bg-white text-black font-bold text-xs rounded-full shadow-md shadow-white/5 hover:bg-slate-200 transition-all"
            >
              {workflowToEdit ? 'Save Changes' : 'Deploy Pipeline'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
