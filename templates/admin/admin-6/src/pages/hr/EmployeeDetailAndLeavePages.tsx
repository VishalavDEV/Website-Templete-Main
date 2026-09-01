import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { PageHeader } from '../../components/common/PageHeader';
import { StatCard } from '../../components/common/StatCard';
import { DataTable, Column } from '../../components/common/DataTable';
import { Badge } from '../../components/common/Badge';
import { employeeService } from '../../services/employeeService';
import { INITIAL_DEPARTMENTS } from '../../data/mockData';
import { LeaveRequest, Department, AttendanceRecord, PayrollRecord } from '../../types';
import { useToast } from '../../context/ToastContext';
import { ArrowLeft, CheckCircle2, XCircle, Calendar, UserCheck, Users, Building, DollarSign, Award, Clock } from 'lucide-react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

export const EmployeeDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const employee = employeeService.getEmployeeById(id || '');

  if (!employee) {
    return (
      <div className="p-12 text-center">
        <h2 className="text-lg font-bold text-slate-900 dark:text-white">Employee Not Found</h2>
        <button onClick={() => navigate('/hr/employees')} className="mt-4 px-4 py-2 bg-brand-600 text-white font-semibold text-xs rounded-xl">
          Back to Staff
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <button onClick={() => navigate('/hr/employees')} className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500">
        <ArrowLeft className="w-4 h-4" /> Back to Staff
      </button>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm flex items-center gap-6">
        <img src={employee.avatar} alt={employee.name} className="w-20 h-20 rounded-2xl object-cover ring-2 ring-slate-100 dark:ring-slate-800" />
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white">{employee.name}</h1>
            <Badge variant={employee.status === 'Active' ? 'success' : 'warning'}>{employee.status}</Badge>
          </div>
          <p className="text-xs text-slate-500 mt-1">{employee.position} • {employee.department}</p>
          <div className="text-xs text-slate-400 mt-2">Code: {employee.employeeCode} | Joined: {employee.joinDate} | Salary: ${employee.salary.toLocaleString()}</div>
        </div>
      </div>
    </div>
  );
};

export const LeavePage: React.FC = () => {
  const { showToast } = useToast();
  const [leaves, setLeaves] = useState<LeaveRequest[]>(() => employeeService.getLeaveRequests());

  const handleLeaveDecision = (id: string, status: 'Approved' | 'Rejected') => {
    const updated = employeeService.updateLeaveStatus(id, status);
    setLeaves(employeeService.getLeaveRequests());
    showToast(`Leave ${status}`, `Leave request for ${updated.employeeName} has been ${status.toLowerCase()}`);
  };

  const columns: Column<LeaveRequest>[] = [
    { key: 'employeeName', header: 'Staff Member', sortable: true },
    { key: 'leaveType', header: 'Leave Category', sortable: true },
    { key: 'startDate', header: 'Start Date', sortable: true },
    { key: 'endDate', header: 'End Date', sortable: true },
    { key: 'days', header: 'Days Count', sortable: true, render: (l) => <span className="font-bold">{l.days} days</span> },
    {
      key: 'status',
      header: 'Status',
      sortable: true,
      render: (l) => (
        <Badge variant={l.status === 'Approved' ? 'success' : l.status === 'Pending' ? 'warning' : 'danger'}>
          {l.status}
        </Badge>
      ),
    },
    {
      key: 'actions',
      header: 'Review Actions',
      render: (l) => (
        <div className="flex items-center gap-2">
          {l.status === 'Pending' && (
            <>
              <button
                onClick={() => handleLeaveDecision(l.id, 'Approved')}
                className="px-2.5 py-1 bg-emerald-50 text-emerald-600 text-xs font-semibold rounded-lg flex items-center gap-1 hover:bg-emerald-100"
              >
                <CheckCircle2 className="w-3.5 h-3.5" /> Approve
              </button>
              <button
                onClick={() => handleLeaveDecision(l.id, 'Rejected')}
                className="px-2.5 py-1 bg-rose-50 text-rose-600 text-xs font-semibold rounded-lg flex items-center gap-1 hover:bg-rose-100"
              >
                <XCircle className="w-3.5 h-3.5" /> Reject
              </button>
            </>
          )}
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      <PageHeader title="Leave Requests & PTO" subtitle="Employee leave requests, PTO balances, maternity/sick leave approvals." />
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <StatCard title="Active Leave Requests" value={leaves.length} change={0} icon={Calendar} />
        <StatCard title="Approved Days Off" value="97 days" change={12.0} icon={CheckCircle2} />
        <StatCard title="Pending Review" value="1 request" change={-50.0} trend="up" icon={Clock} />
      </div>
      <DataTable columns={columns} data={leaves} keyExtractor={(l) => l.id} searchPlaceholder="Search leave requests..." />
    </div>
  );
};

export const DepartmentsPage: React.FC = () => {
  const [departments] = useState<Department[]>(INITIAL_DEPARTMENTS);

  const columns: Column<Department>[] = [
    { key: 'name', header: 'Department Name', sortable: true },
    { key: 'head', header: 'Department Head', sortable: true },
    { key: 'employeeCount', header: 'Staff Headcount', sortable: true, render: (d) => <span className="font-bold">{d.employeeCount} staff</span> },
    { key: 'budget', header: 'Annual Budget', sortable: true, render: (d) => <span className="font-extrabold text-slate-900 dark:text-white">${d.budget.toLocaleString()}</span> },
  ];

  return (
    <div className="space-y-6">
      <PageHeader title="Company Departments" subtitle="Organizational structure, department leaders, headcount, and budget allocation." />
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <StatCard title="Total Departments" value={departments.length} change={0} icon={Building} />
        <StatCard title="Total Headcount" value="109 employees" change={14.2} icon={Users} />
        <StatCard title="Total HR Budget" value="$8,050,000" change={10.0} icon={DollarSign} />
      </div>
      <DataTable columns={columns} data={departments} keyExtractor={(d) => d.id} searchPlaceholder="Search departments..." />
    </div>
  );
};

export const AttendancePage: React.FC = () => (
  <div className="space-y-6">
    <PageHeader title="Attendance Logs & Check-In" subtitle="Clock-in/out logs, late arrivals, remote working check-ins, and shift hours." />
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
      <StatCard title="Present Today" value="104 staff (95%)" change={2.1} icon={UserCheck} />
      <StatCard title="On PTO / Leave" value="4 staff" change={0} icon={Calendar} />
      <StatCard title="Late Arrivals" value="1 staff" change={-50.0} trend="up" icon={Clock} />
    </div>
  </div>
);

export const PayrollPage: React.FC = () => (
  <div className="space-y-6">
    <PageHeader title="Payroll Processing & Pay Stubs" subtitle="Monthly salary disbursements, tax deductions, 401(k) contributions, and pay stubs." />
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
      <StatCard title="Monthly Payroll Run" value="$675,000" change={8.4} icon={DollarSign} />
      <StatCard title="Avg Employee Base" value="$148,200" change={4.2} icon={Users} />
      <StatCard title="Disbursement Status" value="Cleared (August)" change={0} icon={CheckCircle2} />
    </div>
  </div>
);

export const PerformancePage: React.FC = () => (
  <div className="space-y-6">
    <PageHeader title="Performance Reviews & OKRs" subtitle="Quarterly OKRs, employee performance ratings, self-appraisals, and feedback." />
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
      <StatCard title="Avg Performance Rating" value="4.7 / 5.0" change={3.1} icon={Award} />
      <StatCard title="OKRs Completed" value="88.4%" change={6.2} icon={UserCheck} />
      <StatCard title="Promotions Eligible" value="14 staff" change={12.0} icon={Users} />
    </div>
  </div>
);
