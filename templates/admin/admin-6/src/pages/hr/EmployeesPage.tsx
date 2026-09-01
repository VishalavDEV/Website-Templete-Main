import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Plus, Eye, Trash2, Building, Calendar, DollarSign } from 'lucide-react';
import { PageHeader } from '../../components/common/PageHeader';
import { StatCard } from '../../components/common/StatCard';
import { DataTable, Column } from '../../components/common/DataTable';
import { Badge } from '../../components/common/Badge';
import { Modal } from '../../components/common/Modal';
import { ConfirmationDialog } from '../../components/common/ConfirmationDialog';
import { FormInput } from '../../components/forms/FormInput';
import { FormSelect } from '../../components/forms/FormSelect';
import { employeeService } from '../../services/employeeService';
import { Employee } from '../../types';
import { useToast } from '../../context/ToastContext';

const employeeSchema = z.object({
  name: z.string().min(2, 'Full name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(5, 'Phone number is required'),
  department: z.string().min(2, 'Department is required'),
  position: z.string().min(2, 'Position is required'),
  status: z.enum(['Active', 'On Leave', 'Terminated']),
  salary: z.number({ message: 'Salary must be a valid number' }).positive('Salary must be greater than 0'),
  joinDate: z.string().min(1, 'Join date is required'),
});

type EmployeeFormData = z.infer<typeof employeeSchema>;

export const EmployeesPage: React.FC = () => {
  const navigate = useNavigate();
  const { showToast } = useToast();
  const [employees, setEmployees] = useState<Employee[]>(() => employeeService.getEmployees());
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [deletingEmployeeId, setDeletingEmployeeId] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<EmployeeFormData>({
    resolver: zodResolver(employeeSchema),
    defaultValues: {
      status: 'Active',
      joinDate: new Date().toISOString().split('T')[0],
      salary: 85000,
    },
  });

  const refreshEmployees = () => {
    setEmployees(employeeService.getEmployees());
  };

  const handleCreateEmployee = (data: EmployeeFormData) => {
    const created = employeeService.createEmployee({
      ...data,
      avatar: `https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80`,
    });
    refreshEmployees();
    showToast('Employee Created', `Added ${created.name} (${created.position})`);
    setIsAddModalOpen(false);
    reset();
  };

  const handleDeleteEmployee = () => {
    if (!deletingEmployeeId) return;
    employeeService.deleteEmployee(deletingEmployeeId);
    refreshEmployees();
    showToast('Employee Deleted', 'Employee profile removed.', 'warning');
    setDeletingEmployeeId(null);
  };

  const columns: Column<Employee>[] = [
    {
      key: 'name',
      header: 'Employee Name',
      sortable: true,
      render: (e) => (
        <div className="flex items-center gap-3">
          <img src={e.avatar} alt={e.name} className="w-9 h-9 rounded-full object-cover ring-1 ring-slate-200 dark:ring-slate-800" />
          <div>
            <div onClick={() => navigate(`/hr/employees/${e.id}`)} className="font-bold text-slate-900 dark:text-white hover:text-brand-600 cursor-pointer">
              {e.name}
            </div>
            <div className="text-xs text-slate-400">{e.email}</div>
          </div>
        </div>
      ),
    },
    { key: 'department', header: 'Department', sortable: true },
    { key: 'position', header: 'Position Title', sortable: true },
    {
      key: 'salary',
      header: 'Annual Base Salary',
      sortable: true,
      render: (e) => <span className="font-extrabold text-slate-900 dark:text-white">${e.salary.toLocaleString()}</span>,
    },
    {
      key: 'status',
      header: 'Status',
      sortable: true,
      render: (e) => <Badge variant={e.status === 'Active' ? 'success' : e.status === 'On Leave' ? 'warning' : 'danger'}>{e.status}</Badge>,
    },
    {
      key: 'actions',
      header: 'Actions',
      render: (e) => (
        <div className="flex items-center gap-2">
          <button onClick={() => navigate(`/hr/employees/${e.id}`)} className="p-1.5 text-slate-500 hover:text-brand-600" title="View Profile">
            <Eye className="w-4 h-4" />
          </button>
          <button onClick={() => setDeletingEmployeeId(e.id)} className="p-1.5 text-slate-500 hover:text-rose-600" title="Delete">
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      <PageHeader
        title="Human Resources (HR) Directory"
        subtitle="Manage company staff, department allocations, salaries, and employment status."
        actions={
          <button onClick={() => { reset(); setIsAddModalOpen(true); }} className="px-4 py-2 bg-brand-600 hover:bg-brand-700 text-white text-xs font-semibold rounded-xl flex items-center gap-2">
            <Plus className="w-4 h-4" /> Add Employee
          </button>
        }
      />

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <StatCard title="Total Staff Count" value={employees.length.toString()} change={10.2} icon={Building} />
        <StatCard title="Active Full-Time Staff" value={employees.filter((e) => e.status === 'Active').length.toString()} change={8.0} icon={Calendar} />
        <StatCard title="Total Annual Payroll" value={`$${employees.reduce((acc, e) => acc + e.salary, 0).toLocaleString()}`} change={12.4} icon={DollarSign} />
      </div>

      <DataTable columns={columns} data={employees} keyExtractor={(e) => e.id} searchPlaceholder="Search employees..." />

      <Modal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} title="Create New Employee Profile">
        <form id="add-employee-form" onSubmit={handleSubmit(handleCreateEmployee)} className="space-y-4">
          <FormInput label="Full Name" required {...register('name')} error={errors.name?.message} />
          <div className="grid grid-cols-2 gap-4">
            <FormInput label="Work Email" type="email" required {...register('email')} error={errors.email?.message} />
            <FormInput label="Phone Number" required {...register('phone')} error={errors.phone?.message} />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <FormInput label="Department" required {...register('department')} error={errors.department?.message} />
            <FormInput label="Position Title" required {...register('position')} error={errors.position?.message} />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <FormInput label="Annual Salary ($)" type="number" required {...register('salary', { valueAsNumber: true })} error={errors.salary?.message} />
            <FormInput label="Join Date" type="date" required {...register('joinDate')} error={errors.joinDate?.message} />
          </div>
          <FormSelect label="Status" options={[{ label: 'Active', value: 'Active' }, { label: 'On Leave', value: 'On Leave' }, { label: 'Terminated', value: 'Terminated' }]} {...register('status')} />
          <div className="flex justify-end gap-2 pt-2">
            <button type="button" onClick={() => setIsAddModalOpen(false)} className="px-4 py-2 text-xs font-semibold text-slate-600">Cancel</button>
            <button type="submit" className="px-4 py-2 text-xs font-semibold text-white bg-brand-600 rounded-xl">Save Employee</button>
          </div>
        </form>
      </Modal>

      <ConfirmationDialog isOpen={!!deletingEmployeeId} onClose={() => setDeletingEmployeeId(null)} onConfirm={handleDeleteEmployee} title="Remove Employee" message="Are you sure you want to delete this employee profile?" />
    </div>
  );
};
