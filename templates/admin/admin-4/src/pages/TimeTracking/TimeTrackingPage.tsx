import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Card } from '../../components/Common/Card';
import { Button } from '../../components/Common/Button';
import { Badge } from '../../components/Common/Badge';
import { Modal } from '../../components/Common/Modal';
import { Clock, Play, Square, Plus, Trash2, CheckCircle2 } from 'lucide-react';

export const TimeTrackingPage: React.FC = () => {
  const {
    timeEntries,
    addTimeEntry,
    deleteTimeEntry,
    projects,
    tasks,
    activeTimer,
    startTimer,
    stopTimer,
    currentUser
  } = useApp();

  const [isManualModalOpen, setIsManualModalOpen] = useState(false);
  const [projectId, setProjectId] = useState(projects[0]?.id || 'p-1');
  const [taskId, setTaskId] = useState(tasks[0]?.id || 't-1');
  const [description, setDescription] = useState('');
  const [hours, setHours] = useState('4.0');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);

  const totalHours = timeEntries.reduce((acc, te) => acc + te.hours, 0);
  const billableHours = timeEntries.filter(te => te.billable).reduce((acc, te) => acc + te.hours, 0);

  const formatTimer = (sec: number) => {
    const h = Math.floor(sec / 3600);
    const m = Math.floor((sec % 3600) / 60);
    const s = sec % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleManualSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const prj = projects.find(p => p.id === projectId);
    const tsk = tasks.find(t => t.id === taskId);
    addTimeEntry({
      userId: currentUser.id,
      userName: currentUser.name,
      projectId,
      projectName: prj ? prj.name : 'General Project',
      taskId,
      taskTitle: tsk ? tsk.title : 'General Task',
      description: description || 'Manual time log',
      date,
      hours: parseFloat(hours) || 1.0,
      billable: true,
      hourlyRate: currentUser.hourlyRate || 100
    });
    setIsManualModalOpen(false);
    setDescription('');
  };

  return (
    <div className="space-y-6">
      {/* Top Banner & Live Timer Widget */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-app-surface border border-app p-6 rounded-2xl shadow-xs">
        <div>
          <h1 className="text-xl font-bold text-app-primary">Time Tracking & Weekly Timesheets</h1>
          <p className="text-xs text-app-secondary mt-0.5">
            Record billable developer hours, audit timesheet logs, and manage client invoicing hours.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" icon={<Plus className="w-4 h-4" />} onClick={() => setIsManualModalOpen(true)}>
            Manual Time Entry
          </Button>

          {!activeTimer.isRunning ? (
            <Button
              variant="primary"
              size="sm"
              icon={<Play className="w-4 h-4 fill-current" />}
              onClick={() => startTimer(projects[0]?.id || 'p-1', tasks[0]?.id || 't-1', 'Active Development')}
            >
              Start Live Timer
            </Button>
          ) : (
            <div className="flex items-center gap-3 bg-emerald-500/15 border border-emerald-500/30 p-2 px-3 rounded-xl">
              <span className="font-mono font-bold text-emerald-400 text-sm animate-pulse">
                {formatTimer(activeTimer.elapsedSeconds)}
              </span>
              <Button variant="danger" size="sm" icon={<Square className="w-3.5 h-3.5 fill-current" />} onClick={stopTimer}>
                Stop & Save Log
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Summary KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card title="Total Hours Logged">
          <span className="text-2xl font-bold text-app-primary">{totalHours.toFixed(1)} hrs</span>
        </Card>
        <Card title="Billable Hours">
          <span className="text-2xl font-bold text-emerald-400">{billableHours.toFixed(1)} hrs</span>
        </Card>
        <Card title="Billable Revenue Value">
          <span className="text-2xl font-bold text-blue-400">
            ${(billableHours * (currentUser.hourlyRate || 100)).toLocaleString()}
          </span>
        </Card>
      </div>

      {/* Timesheet Table */}
      <Card title="Recorded Timesheet Ledger" noPadding>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-app-primary">
            <thead className="bg-app-secondary/60 border-b border-app text-app-muted uppercase font-semibold">
              <tr>
                <th className="p-3.5 pl-5">Date</th>
                <th className="p-3.5">Team Member</th>
                <th className="p-3.5">Project</th>
                <th className="p-3.5">Task & Description</th>
                <th className="p-3.5">Hours</th>
                <th className="p-3.5">Billable</th>
                <th className="p-3.5 text-right pr-5">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-app">
              {timeEntries.map(te => (
                <tr key={te.id} className="hover:bg-app-hover">
                  <td className="p-3.5 pl-5 font-mono text-app-secondary">{te.date}</td>
                  <td className="p-3.5 font-semibold text-app-primary">{te.userName}</td>
                  <td className="p-3.5 text-blue-400 font-semibold">{te.projectName}</td>
                  <td className="p-3.5">
                    <p className="font-semibold text-app-primary">{te.taskTitle}</p>
                    <p className="text-[11px] text-app-muted">{te.description}</p>
                  </td>
                  <td className="p-3.5 font-bold text-emerald-400">{te.hours} hrs</td>
                  <td className="p-3.5">
                    <Badge variant={te.billable ? 'success' : 'neutral'}>
                      {te.billable ? 'Billable' : 'Internal'}
                    </Badge>
                  </td>
                  <td className="p-3.5 text-right pr-5">
                    <button
                      onClick={() => deleteTimeEntry(te.id)}
                      className="p-1.5 rounded-lg text-app-muted hover:text-rose-400"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Manual Time Entry Modal */}
      <Modal
        isOpen={isManualModalOpen}
        onClose={() => setIsManualModalOpen(false)}
        title="Manual Time Entry"
        size="md"
        footer={
          <>
            <Button variant="secondary" onClick={() => setIsManualModalOpen(false)}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleManualSubmit}>
              Log Hours
            </Button>
          </>
        }
      >
        <form onSubmit={handleManualSubmit} className="space-y-4 text-xs">
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
              <label className="block font-semibold text-app-primary mb-1">Task</label>
              <select
                value={taskId}
                onChange={e => setTaskId(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-app-secondary border border-app text-sm text-app-primary focus:outline-none"
              >
                {tasks.map(t => (
                  <option key={t.id} value={t.id}>{t.title}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold text-app-primary mb-1">Date</label>
              <input
                type="date"
                value={date}
                onChange={e => setDate(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-app-secondary border border-app text-sm text-app-primary focus:outline-none"
              />
            </div>
            <div>
              <label className="block font-semibold text-app-primary mb-1">Duration (Hours)</label>
              <input
                type="number"
                step="0.5"
                value={hours}
                onChange={e => setHours(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-app-secondary border border-app text-sm text-app-primary focus:outline-none"
              />
            </div>
          </div>
          <div>
            <label className="block font-semibold text-app-primary mb-1">Work Log Description</label>
            <input
              type="text"
              value={description}
              onChange={e => setDescription(e.target.value)}
              placeholder="e.g. Fixed theme token variables and tested WCAG accessibility..."
              className="w-full px-3.5 py-2 rounded-xl bg-app-secondary border border-app text-sm text-app-primary focus:outline-none"
            />
          </div>
        </form>
      </Modal>
    </div>
  );
};
