import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Card } from '../../components/Common/Card';
import { Button } from '../../components/Common/Button';
import { useApp } from '../../context/AppContext';
import {
  Clock,
  FileCheck,
  CalendarCheck,
  Zap,
  History,
  Play,
  Pause,
  Square,
  Search,
  CheckCircle2,
  XCircle,
  AlertCircle,
  Calendar
} from 'lucide-react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  Legend
} from 'recharts';

const SUB_TABS = [
  { name: 'Live Time Tracker', path: '/time/tracker', icon: Clock },
  { name: 'Timesheets & Approvals', path: '/time/timesheets', icon: FileCheck },
  { name: 'Attendance & Shifts', path: '/time/attendance', icon: CalendarCheck },
  { name: 'Overtime & Billable', path: '/time/overtime', icon: Zap },
  { name: 'Operational Audit', path: '/time/audit', icon: History }
];

export const TimeSubPages: React.FC<{ subPage: string }> = ({ subPage }) => {
  const { timeEntries, currentUser, addTimeEntry, addToast } = useApp();
  const [searchTerm, setSearchTerm] = useState('');
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [timerSeconds, setTimerSeconds] = useState(1420); // 23 mins 40 sec initial
  const [taskNote, setTaskNote] = useState('Developing CoreVista Admin UI');

  useEffect(() => {
    let interval: any = null;
    if (isTimerRunning) {
      interval = setInterval(() => {
        setTimerSeconds(prev => prev + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning]);

  const formatTime = (totalSec: number) => {
    const hrs = Math.floor(totalSec / 3600);
    const mins = Math.floor((totalSec % 3600) / 60);
    const secs = totalSec % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleStartTimer = () => {
    setIsTimerRunning(true);
    addToast('Live task timer started.', 'success');
  };

  const handlePauseTimer = () => {
    setIsTimerRunning(false);
    addToast('Timer paused.', 'info');
  };

  const handleStopTimer = () => {
    setIsTimerRunning(false);
    const loggedHrs = parseFloat((timerSeconds / 3600).toFixed(2)) || 1.5;

    addTimeEntry({
      userId: currentUser?.id || 'u-1',
      userName: currentUser?.name || 'Alexandra Vance',
      projectId: 'p-1',
      projectName: 'CoreVista Admin System',
      taskId: 't-101',
      taskTitle: taskNote,
      hours: loggedHrs,
      hourlyRate: currentUser?.hourlyRate || 100,
      description: taskNote,
      date: new Date().toISOString().split('T')[0],
      billable: true
    });

    addToast(`Successfully saved time log of ${loggedHrs}h for "${taskNote}".`, 'success');
    setTimerSeconds(0);
  };

  const timeDistributionData = [
    { day: 'Mon', billable: 34, nonBillable: 6, overtime: 2 },
    { day: 'Tue', billable: 38, nonBillable: 5, overtime: 4 },
    { day: 'Wed', billable: 40, nonBillable: 4, overtime: 3 },
    { day: 'Thu', billable: 36, nonBillable: 7, overtime: 1 },
    { day: 'Fri', billable: 32, nonBillable: 8, overtime: 0 }
  ];

  const categoryBreakdown = [
    { name: 'Feature Development', value: 55, color: '#3b82f6' },
    { name: 'Bug Fixes & QA', value: 20, color: '#f59e0b' },
    { name: 'Architecture & Planning', value: 15, color: '#8b5cf6' },
    { name: 'Client Support & Sync', value: 10, color: '#10b981' }
  ];

  const [pendingApprovals, setPendingApprovals] = useState([
    { id: 'ts-1', employee: 'David Rodriguez', period: 'Aug 18 - Aug 24', totalHours: 42.5, billableHours: 38.0, status: 'Pending Manager Approval' },
    { id: 'ts-2', employee: 'Sophia Chen', period: 'Aug 18 - Aug 24', totalHours: 40.0, billableHours: 40.0, status: 'Pending Manager Approval' },
    { id: 'ts-3', employee: 'Elena Rostova', period: 'Aug 18 - Aug 24', totalHours: 44.0, billableHours: 36.0, status: 'Pending Manager Approval' }
  ]);

  const handleApproveAllTimesheets = () => {
    setPendingApprovals(prev => prev.map(t => ({ ...t, status: 'Approved (Sign-off Complete)' })));
    addToast('Approved all 3 pending weekly timesheets.', 'success');
  };

  const handleApproveTimesheet = (id: string, name: string) => {
    setPendingApprovals(prev => prev.map(t => t.id === id ? { ...t, status: 'Approved' } : t));
    addToast(`Timesheet for ${name} approved.`, 'success');
  };


  const attendanceLog = [
    { id: 'att-1', user: 'Alexandra Vance', checkIn: '08:58 AM', checkOut: '05:30 PM', total: '8h 32m', shift: 'Standard Shift', status: 'Present' },
    { id: 'att-2', user: 'Marcus Sterling', checkIn: '09:05 AM', checkOut: '06:15 PM', total: '9h 10m', shift: 'Standard Shift', status: 'Present' },
    { id: 'att-3', user: 'David Rodriguez', checkIn: '09:30 AM', checkOut: '06:00 PM', total: '8h 30m', shift: 'Flex Shift', status: 'Present' }
  ];

  const filteredEntries = timeEntries.filter(t => 
    (t.userName || '').toLowerCase().includes(searchTerm.toLowerCase()) || 
    (t.description || '').toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header & Sub-Tabs Navigation */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-app pb-4">
        <div>
          <h1 className="text-2xl font-bold text-app-primary flex items-center gap-2">
            <Clock className="w-6 h-6 text-blue-500" />
            Time Operations & Billable Tracking
          </h1>
          <p className="text-xs text-app-muted mt-1">
            Real-time timer logs, weekly timesheet approvals, attendance metrics, and billable ratios.
          </p>
        </div>
        <div className="flex items-center gap-2 bg-app-secondary/40 p-1 rounded-xl border border-app overflow-x-auto">
          {SUB_TABS.map(tab => {
            const Icon = tab.icon;
            const isActive = subPage === tab.path.split('/')[2];
            return (
              <NavLink
                key={tab.path}
                to={tab.path}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-app-secondary hover:text-app-primary hover:bg-app-hover'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.name}</span>
              </NavLink>
            );
          })}
        </div>
      </div>

      {/* SUBPAGE 1: LIVE TIME TRACKER */}
      {(subPage === 'tracker' || !subPage) && (
        <div className="space-y-6">
          <Card title="Live Working Task Timer & Ingestion">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-2">
              <div className="w-full md:w-1/2 space-y-2">
                <label className="text-xs text-app-muted font-medium">Working Task Description</label>
                <input
                  type="text"
                  value={taskNote}
                  onChange={e => setTaskNote(e.target.value)}
                  className="w-full bg-app-hover border border-app rounded-xl px-4 py-2.5 text-xs text-app-primary focus:outline-none focus:border-blue-500 font-medium"
                />
              </div>
              <div className="flex items-center gap-6">
                <div className="font-mono text-4xl font-extrabold text-blue-400 tracking-wider">
                  {formatTime(timerSeconds)}
                </div>
                <div className="flex items-center gap-2">
                  {!isTimerRunning ? (
                    <Button variant="primary" icon={<Play className="w-4 h-4" />} onClick={handleStartTimer}>
                      Start
                    </Button>
                  ) : (
                    <Button variant="outline" icon={<Pause className="w-4 h-4" />} onClick={handlePauseTimer}>
                      Pause
                    </Button>
                  )}
                  <Button variant="danger" icon={<Square className="w-4 h-4" />} onClick={handleStopTimer}>
                    Save Log
                  </Button>
                </div>
              </div>
            </div>
          </Card>

          <Card title="Recent Time Entry Logs">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-app-secondary/50 text-app-muted font-bold uppercase tracking-wider">
                  <tr>
                    <th className="p-3">User Name</th>
                    <th className="p-3">Task Description</th>
                    <th className="p-3">Hours Logged</th>
                    <th className="p-3">Billable Status</th>
                    <th className="p-3 text-right">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-app">
                  {filteredEntries.slice(0, 5).map(entry => (
                    <tr key={entry.id} className="hover:bg-app-hover/50">
                      <td className="p-3 font-semibold text-app-primary">{entry.userName}</td>
                      <td className="p-3 text-app-secondary">{entry.description || 'Sprint Task Execution'}</td>
                      <td className="p-3 font-mono font-bold text-blue-400">{entry.hours} hrs</td>
                      <td className="p-3">
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-400">
                          Billable ($)
                        </span>
                      </td>
                      <td className="p-3 text-right text-app-muted font-mono">{entry.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      )}

      {/* SUBPAGE 2: TIMESHEETS & APPROVALS */}
      {subPage === 'timesheets' && (
        <Card title="Manager Weekly Timesheet Approval Queue">
          <div className="space-y-4">
            <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 text-xs text-blue-300 flex items-center justify-between">
              <span>{pendingApprovals.filter(t => !t.status.includes('Approved')).length} weekly timesheets awaiting supervisor sign-off.</span>
              <Button size="sm" variant="primary" onClick={handleApproveAllTimesheets}>
                Approve All Pending
              </Button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-app-secondary/50 text-app-muted font-bold uppercase tracking-wider">
                  <tr>
                    <th className="p-3">Timesheet ID</th>
                    <th className="p-3">Employee</th>
                    <th className="p-3">Pay Period</th>
                    <th className="p-3">Total Logged</th>
                    <th className="p-3">Billable Ratio</th>
                    <th className="p-3 text-right">Approval Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-app font-mono">
                  {pendingApprovals.map(t => (
                    <tr key={t.id} className="hover:bg-app-hover/50">
                      <td className="p-3 font-semibold text-blue-400">{t.id}</td>
                      <td className="p-3 font-semibold text-app-primary font-sans">{t.employee}</td>
                      <td className="p-3 text-app-muted">{t.period}</td>
                      <td className="p-3 text-blue-400 font-bold">{t.totalHours} hrs</td>
                      <td className="p-3 text-emerald-400">{t.billableHours} hrs</td>
                      <td className="p-3 text-right font-sans">
                        <Button
                          size="sm"
                          variant={t.status.includes('Approved') ? 'secondary' : 'outline'}
                          disabled={t.status.includes('Approved')}
                          onClick={() => handleApproveTimesheet(t.id, t.employee)}
                        >
                          {t.status.includes('Approved') ? 'Approved' : 'Sign Off'}
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Card>
      )}

      {/* SUBPAGE 3: ATTENDANCE & SHIFTS */}
      {subPage === 'attendance' && (
        <Card title="Team Attendance & Shift Clock-In Log">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-app-secondary/50 text-app-muted font-bold uppercase tracking-wider">
                <tr>
                  <th className="p-3">Team Member</th>
                  <th className="p-3">Shift Type</th>
                  <th className="p-3">Clock In</th>
                  <th className="p-3">Clock Out</th>
                  <th className="p-3">Total Duration</th>
                  <th className="p-3 text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-app">
                {attendanceLog.map(a => (
                  <tr key={a.id} className="hover:bg-app-hover/50">
                    <td className="p-3 font-semibold text-app-primary">{a.user}</td>
                    <td className="p-3 text-app-secondary">{a.shift}</td>
                    <td className="p-3 text-app-muted font-mono">{a.checkIn}</td>
                    <td className="p-3 text-app-muted font-mono">{a.checkOut}</td>
                    <td className="p-3 font-mono font-bold text-emerald-400">{a.total}</td>
                    <td className="p-3 text-right">
                      <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-bold text-[10px]">
                        {a.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      )}

      {/* SUBPAGE 4: OVERTIME & BILLABLE */}
      {subPage === 'overtime' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card title="Daily Weekly Hours Logged (Billable vs Non-Billable)">
              <div className="h-72 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={timeDistributionData}>
                    <XAxis dataKey="day" stroke="var(--text-muted)" fontSize={12} />
                    <YAxis stroke="var(--text-muted)" fontSize={12} />
                    <Tooltip contentStyle={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-color)', color: 'var(--text-primary)' }} />
                    <Legend />
                    <Bar dataKey="billable" fill="#3b82f6" name="Billable Hours" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="nonBillable" fill="#94a3b8" name="Internal / Ops" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="overtime" fill="#ef4444" name="Overtime" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </Card>

            <Card title="Work Effort Category Breakdown">
              <div className="h-72 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={categoryBreakdown} cx="50%" cy="50%" outerRadius={90} dataKey="value" label>
                      {categoryBreakdown.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip contentStyle={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-color)', color: 'var(--text-primary)' }} />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </Card>
          </div>
        </div>
      )}

      {/* SUBPAGE 5: OPERATIONAL AUDIT */}
      {subPage === 'audit' && (
        <Card title="Operational Time Log Modifications & Audit Trail">
          <div className="space-y-3 text-xs">
            {[
              { id: 'aud-1', user: 'Sophia Chen', action: 'Modified Time Log', detail: 'Adjusted entry #te-102 from 4.0h to 4.5h', time: 'Today 09:12 AM' },
              { id: 'aud-2', user: 'Marcus Sterling', action: 'Approved Timesheet', detail: 'Approved weekly timesheet for Alexandra Vance', time: 'Yesterday 04:45 PM' }
            ].map(log => (
              <div key={log.id} className="p-3 rounded-xl bg-app-secondary/30 border border-app flex items-center justify-between">
                <div>
                  <span className="font-semibold text-app-primary">{log.user} — {log.action}</span>
                  <p className="text-app-muted mt-0.5">{log.detail}</p>
                </div>
                <span className="text-app-muted font-mono text-[11px]">{log.time}</span>
              </div>
            ))}
          </div>
        </Card>
      )}
    </div>
  );
};

