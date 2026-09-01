import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Employee, LeaveRequest } from '../../data/initialData';
import { MetricCard, StatusBadge, DataTable, Tabs, EmptyState } from '../ui/GlobalComponents';
import { UserCog, HeartHandshake, Check, X, Users, Calendar } from 'lucide-react';

export const Hr: React.FC = () => {
  const { employees, leaveRequests, updateLeaveRequest } = useApp();
  const [activeTab, setActiveTab] = useState<'employees' | 'leaves'>('employees');

  const pendingLeaves = leaveRequests.filter(r => r.status === 'Pending').length;
  const activeEmployees = employees.filter(e => e.status === 'Active').length;

  return (
    <div className="space-y-6">
      {/* Header Panel */}
      <div>
        <h2 className="text-lg font-extrabold tracking-tight text-slate-900 uppercase font-mono">
          Human Resource & Staff Coordination
        </h2>
        <p className="text-xs text-slate-500 font-mono mt-0.5">Review employee directories, departments, leave request schedules, and simulated payroll parameters.</p>
      </div>

      {/* Tabs list */}
      <Tabs 
        activeTab={activeTab}
        onChange={(id) => setActiveTab(id)}
        tabs={[
          { id: 'employees', label: 'Operator Directory', icon: <Users className="h-4 w-4" /> },
          { id: 'leaves', label: `Time-Off Requests (${pendingLeaves})`, icon: <Calendar className="h-4 w-4" /> },
        ]}
      />

      {/* Metric Cards summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <MetricCard 
          title="Team Size" 
          value={`${employees.length} Members`}
          icon={<Users className="h-4 w-4" />}
          subtext={`${activeEmployees} actively on site / remote`}
        />
        <MetricCard 
          title="On-Leave Staff" 
          value={`${leaveRequests.filter(r => r.status === 'Approved').length} Persons`}
          icon={<HeartHandshake className="h-4 w-4" />}
          subtext="Approved annual leave breaks"
        />
        <MetricCard 
          title="Monthly Payroll Sum" 
          value={`$${employees.reduce((sum, e) => sum + e.salary / 12, 0).toLocaleString(undefined, { maximumFractionDigits: 0 })}/mo`}
          icon={<UserCog className="h-4 w-4" />}
          subtext="Simulated payroll commitments"
        />
      </div>

      {/* Conditional layouts based on selected tab */}
      {activeTab === 'employees' ? (
        <DataTable 
          data={employees}
          columns={[
            {
              header: 'Employee Name',
              accessor: (e: Employee) => (
                <div>
                  <span className="font-bold text-slate-800">{e.name}</span>
                  <span className="block text-[10px] text-slate-400 font-normal">{e.email}</span>
                </div>
              )
            },
            {
              header: 'Department',
              accessor: (e: Employee) => <span className="font-semibold text-slate-600">{e.department}</span>
            },
            {
              header: 'Designated Title',
              accessor: (e: Employee) => <span className="text-xs font-mono text-slate-700">{e.role}</span>
            },
            {
              header: 'Attendance Rate',
              accessor: (e: Employee) => (
                <div className="flex items-center gap-2">
                  <div className="w-16 bg-blue-100 rounded-full h-1.5 overflow-hidden">
                    <div className="bg-blue-600 h-full rounded-full" style={{ width: `${e.attendanceRate}%` }} />
                  </div>
                  <span className="font-mono text-xs text-slate-500">{e.attendanceRate}%</span>
                </div>
              )
            },
            {
              header: 'Status',
              accessor: (e: Employee) => <StatusBadge status={e.status} />
            }
          ]}
        />
      ) : (
        // LEAVE REQUESTS
        <DataTable 
          data={leaveRequests}
          columns={[
            {
              header: 'Requestor',
              accessor: (r: LeaveRequest) => <span className="font-bold text-slate-800">{r.employeeName}</span>
            },
            {
              header: 'Leave Classification',
              accessor: (r: LeaveRequest) => <StatusBadge status={r.type} />
            },
            {
              header: 'Reason Log',
              accessor: (r: LeaveRequest) => <span className="text-xs italic text-slate-600">"{r.reason}"</span>
            },
            {
              header: 'Date Range',
              accessor: (r: LeaveRequest) => <span className="font-mono text-xs text-slate-500">{r.startDate} to {r.endDate}</span>
            },
            {
              header: 'Approval Position',
              accessor: (r: LeaveRequest) => (
                <div className="flex items-center gap-2">
                  <StatusBadge status={r.status} />
                  {r.status === 'Pending' && (
                    <div className="flex gap-1 ml-2">
                      <button 
                        onClick={() => updateLeaveRequest(r.id, 'Approved')}
                        className="p-1 text-emerald-600 hover:bg-emerald-50 rounded transition cursor-pointer"
                        title="Approve Request"
                      >
                        <Check className="h-4 w-4" />
                      </button>
                      <button 
                        onClick={() => updateLeaveRequest(r.id, 'Rejected')}
                        className="p-1 text-rose-600 hover:bg-rose-50 rounded transition cursor-pointer"
                        title="Reject Request"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  )}
                </div>
              )
            }
          ]}
          emptyState={
            <EmptyState 
              title="Time-Off Tickets Nominal" 
              description="All staff are accounted for. No pending leave request files are in queue."
              icon={<HeartHandshake className="h-10 w-10 text-blue-200" />}
            />
          }
        />
      )}
    </div>
  );
};
