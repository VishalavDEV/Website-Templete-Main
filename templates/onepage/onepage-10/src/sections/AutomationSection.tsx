import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { WorkflowModal } from '../components/WorkflowModal';
import { WorkflowItem } from '../types';
import {
  Workflow,
  Plus,
  Play,
  Pause,
  Copy,
  Trash2,
  Edit,
  CheckCircle2,
  Activity,
  Layers,
  ArrowRight,
  Clock,
  Sparkles,
  Zap
} from 'lucide-react';

export const AutomationSection: React.FC = () => {
  const {
    workflows,
    toggleWorkflowStatus,
    deleteWorkflow,
    duplicateWorkflow,
    runWorkflow,
    addToast
  } = useApp();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingWorkflow, setEditingWorkflow] = useState<WorkflowItem | null>(null);
  const [executingWorkflowId, setExecutingWorkflowId] = useState<string | null>(null);
  const [activeStepIndex, setActiveStepIndex] = useState<number>(-1);

  const handleOpenCreate = () => {
    setEditingWorkflow(null);
    setIsModalOpen(true);
  };

  const handleOpenEdit = (wf: WorkflowItem) => {
    setEditingWorkflow(wf);
    setIsModalOpen(true);
  };

  const handleExecute = async (wf: WorkflowItem) => {
    if (executingWorkflowId) return;

    setExecutingWorkflowId(wf.id);
    setActiveStepIndex(0);

    // Simulate stepping through nodes
    for (let i = 0; i < wf.steps.length; i++) {
      setActiveStepIndex(i);
      await new Promise(r => setTimeout(r, 600));
    }

    runWorkflow(wf.id);
    addToast({
      type: 'success',
      title: 'Workflow Execution Succeeded',
      message: `Executed "${wf.name}" with 100% telemetry convergence.`
    });

    setExecutingWorkflowId(null);
    setActiveStepIndex(-1);
  };

  return (
    <section id="automation" className="py-24 bg-[#08080A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-semibold">
              <Workflow className="w-3.5 h-3.5" />
              <span>Multi-Agent Swarm Orchestrator</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold font-display text-white tracking-tight">
              Autonomous Workflow Pipelines.
            </h2>
            <p className="text-base text-slate-400 max-w-2xl">
              Design, simulate, and orchestrate self-healing decision graphs that execute complex business processes across enterprise silos.
            </p>
          </div>

          <button
            onClick={handleOpenCreate}
            className="inline-flex items-center gap-2 px-5 py-3 text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-500 rounded-full shadow-lg shadow-indigo-600/20 active:scale-95 transition-all self-start md:self-end"
          >
            <Plus className="w-4 h-4 text-white" />
            <span>Create New Pipeline</span>
          </button>
        </div>

        {/* Workflows Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {workflows.map(wf => {
            const isRunning = executingWorkflowId === wf.id;

            return (
              <div
                key={wf.id}
                className="p-6 rounded-2xl bg-[#0C0C12] border border-white/5 flex flex-col justify-between hover:border-indigo-500/30 transition-all duration-300 shadow-xl"
              >
                <div className="space-y-4">
                  {/* Top Bar */}
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2.5">
                        <h3 className="text-lg font-bold font-display text-white">{wf.name}</h3>
                        <span
                          className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold font-mono border ${
                            wf.status === 'active'
                              ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                              : 'bg-amber-500/10 text-amber-400 border-amber-500/30'
                          }`}
                        >
                          {wf.status.toUpperCase()}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 mt-1">{wf.description}</p>
                    </div>

                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => handleOpenEdit(wf)}
                        className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/5"
                        title="Edit pipeline"
                      >
                        <Edit className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => duplicateWorkflow(wf.id)}
                        className="p-1.5 text-slate-400 hover:text-indigo-400 rounded-lg hover:bg-white/5"
                        title="Duplicate pipeline"
                      >
                        <Copy className="w-3.5 h-3.5" />
                      </button>
                      {workflows.length > 1 && (
                        <button
                          onClick={() => deleteWorkflow(wf.id)}
                          className="p-1.5 text-slate-400 hover:text-rose-400 rounded-lg hover:bg-white/5"
                          title="Delete pipeline"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Execution Metrics Bar */}
                  <div className="grid grid-cols-3 gap-2 bg-white/5 p-3 rounded-xl border border-white/5 text-center text-xs">
                    <div>
                      <span className="text-slate-400 text-[10px] uppercase font-mono block">Cadence</span>
                      <span className="font-semibold text-slate-200 truncate block mt-0.5">{wf.schedule}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 text-[10px] uppercase font-mono block">Executions</span>
                      <span className="font-mono font-bold text-indigo-400 block mt-0.5">{wf.totalExecutions.toLocaleString()}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 text-[10px] uppercase font-mono block">Reliability</span>
                      <span className="font-mono font-bold text-emerald-400 block mt-0.5">{wf.successRate}%</span>
                    </div>
                  </div>

                  {/* Interactive Step Graph Nodes */}
                  <div className="space-y-2 pt-1">
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                      Execution Node Pipeline:
                    </span>
                    <div className="space-y-2">
                      {wf.steps.map((step, idx) => {
                        const isStepActive = isRunning && activeStepIndex === idx;
                        const isStepCompleted = isRunning && activeStepIndex > idx;

                        return (
                          <div
                            key={step.id}
                            className={`flex items-center justify-between p-2.5 rounded-xl border transition-all ${
                              isStepActive
                                ? 'bg-indigo-500/20 border-indigo-400 text-indigo-200 shadow-md shadow-indigo-500/20 scale-[1.01]'
                                : isStepCompleted
                                ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300'
                                : 'bg-[#08080A] border-white/5 text-slate-300'
                            }`}
                          >
                            <div className="flex items-center gap-2.5 min-w-0">
                              <span className="w-5 h-5 rounded-full bg-white/10 text-slate-300 text-[10px] font-mono flex items-center justify-center shrink-0">
                                {idx + 1}
                              </span>
                              <div className="min-w-0">
                                <span className="text-xs font-semibold block truncate">{step.name}</span>
                                <span className="text-[10px] text-slate-400 truncate block">{step.description}</span>
                              </div>
                            </div>

                            <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-[#0A0A0E] text-slate-400 border border-white/10 shrink-0">
                              {isStepActive ? 'EXECUTING...' : isStepCompleted ? 'DONE' : step.type}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Footer Controls */}
                <div className="pt-5 mt-5 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[11px] text-slate-500 font-mono">
                    Last Run: {wf.lastRun || 'Continuous Stream'}
                  </span>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => toggleWorkflowStatus(wf.id)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                        wf.status === 'active'
                          ? 'bg-amber-500/10 text-amber-400 border border-amber-500/30 hover:bg-amber-500/20'
                          : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/20'
                      }`}
                    >
                      {wf.status === 'active' ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                      <span>{wf.status === 'active' ? 'Pause' : 'Resume'}</span>
                    </button>

                    <button
                      onClick={() => handleExecute(wf)}
                      disabled={isRunning}
                      className="px-3.5 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs rounded-full shadow-lg shadow-indigo-600/20 active:scale-95 disabled:opacity-50 transition-all flex items-center gap-1.5"
                    >
                      {isRunning ? (
                        <>
                          <div className="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Simulating...</span>
                        </>
                      ) : (
                        <>
                          <Zap className="w-3.5 h-3.5 text-white" />
                          <span>Run Now</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Pipeline Creation / Editing Modal */}
      <WorkflowModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        workflowToEdit={editingWorkflow}
      />
    </section>
  );
};
