import React, { useState } from 'react';
import { PageHeader } from '../../components/common/PageHeader';
import { StatCard } from '../../components/common/StatCard';
import { DataTable, Column } from '../../components/common/DataTable';
import { Badge } from '../../components/common/Badge';
import { Modal } from '../../components/common/Modal';
import { FormInput } from '../../components/forms/FormInput';
import { FormSelect } from '../../components/forms/FormSelect';
import { User, Role } from '../../types';
import { Users, Shield, UserCheck, Lock, Plus, Check, X } from 'lucide-react';
import { useToast } from '../../context/ToastContext';
import { storageService } from '../../services/storageService';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const MOCK_SYSTEM_USERS: User[] = [
  {
    id: 'usr_1',
    name: 'Alexander Pierce',
    email: 'alexander@enterprise.com',
    role: 'Super Admin',
    department: 'Executive',
    phone: '+1 (555) 019-2834',
    status: 'Active',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80',
    lastActive: '10 mins ago',
    createdAt: '2026-01-15',
  },
  {
    id: 'usr_2',
    name: 'Eleanor Vance',
    email: 'eleanor.vance@enterprise.com',
    role: 'Admin',
    department: 'Engineering',
    phone: '+1 (555) 019-8821',
    status: 'Active',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    lastActive: '2 hours ago',
    createdAt: '2026-02-01',
  },
  {
    id: 'usr_3',
    name: 'Marcus Sterling',
    email: 'marcus.s@enterprise.com',
    role: 'Manager',
    department: 'Sales',
    phone: '+1 (555) 019-9942',
    status: 'Active',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    lastActive: 'Yesterday',
    createdAt: '2026-03-10',
  },
];

const ROLE_PERMISSIONS_CHART = [
  { role: 'Super Admin', permissions: 28 },
  { role: 'Admin', permissions: 22 },
  { role: 'Manager', permissions: 15 },
  { role: 'Editor', permissions: 10 },
  { role: 'Viewer', permissions: 4 },
];

interface ModulePermissionRow {
  id: string;
  module: string;
  superAdmin: boolean;
  admin: boolean;
  manager: boolean;
  editor: boolean;
  viewer: boolean;
}

const INITIAL_MATRIX: ModulePermissionRow[] = [
  { id: 'm1', module: 'CRM & Customer Leads', superAdmin: true, admin: true, manager: true, editor: true, viewer: true },
  { id: 'm2', module: 'Sales Orders & Invoices', superAdmin: true, admin: true, manager: true, editor: true, viewer: false },
  { id: 'm3', module: 'Product Catalog & Inventory', superAdmin: true, admin: true, manager: true, editor: false, viewer: false },
  { id: 'm4', module: 'Finance & P&L Statement', superAdmin: true, admin: true, manager: false, editor: false, viewer: false },
  { id: 'm5', module: 'HR & Payroll Directory', superAdmin: true, admin: true, manager: true, editor: false, viewer: false },
  { id: 'm6', module: 'Marketing & Campaigns', superAdmin: true, admin: true, manager: true, editor: true, viewer: false },
  { id: 'm7', module: 'System Settings & Security', superAdmin: true, admin: false, manager: false, editor: false, viewer: false },
];

export const UsersPage: React.FC = () => {
  const { showToast } = useToast();
  const [users, setUsers] = useState<User[]>(() => storageService.get<User[]>('app_users', MOCK_SYSTEM_USERS));
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState<'Super Admin' | 'Admin' | 'Manager' | 'Editor' | 'Viewer'>('Admin');
  const [department, setDepartment] = useState('Engineering');

  const handleInviteUser = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;
    const newUser: User = {
      id: `usr_${Date.now()}`,
      name,
      email,
      role,
      department,
      phone: '+1 (555) 123-4567',
      status: 'Active',
      avatar: `https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80`,
      lastActive: 'Just now',
      createdAt: new Date().toISOString().split('T')[0],
    };
    const updated = [newUser, ...users];
    setUsers(updated);
    storageService.set('app_users', updated);
    showToast('User Invited', `Sent system invite to ${name} (${email}) as ${role}`);
    setIsModalOpen(false);
    setName('');
    setEmail('');
  };

  const columns: Column<User>[] = [
    {
      key: 'name',
      header: 'System User',
      sortable: true,
      render: (u) => (
        <div className="flex items-center gap-3">
          <img src={u.avatar} alt={u.name} className="w-8 h-8 rounded-full object-cover ring-1 ring-slate-200 dark:ring-slate-800" />
          <div>
            <div className="font-bold text-slate-900 dark:text-white">{u.name}</div>
            <div className="text-[11px] text-slate-400">{u.email}</div>
          </div>
        </div>
      ),
    },
    {
      key: 'role',
      header: 'Assigned Role',
      sortable: true,
      render: (u) => (
        <Badge variant={u.role === 'Super Admin' || u.role === 'Admin' ? 'danger' : u.role === 'Manager' ? 'indigo' : 'info'}>
          {u.role}
        </Badge>
      ),
    },
    { key: 'department', header: 'Department' },
    { key: 'lastActive', header: 'Last Active Session', sortable: true },
    { key: 'status', header: 'Status', render: (u) => <Badge variant="success">{u.status}</Badge> },
  ];

  return (
    <div className="space-y-6">
      <PageHeader
        title="System Users Directory"
        subtitle="Manage administrative platform access, user accounts, and authentication status."
        actions={
          <button onClick={() => setIsModalOpen(true)} className="px-4 py-2 bg-brand-600 text-white font-semibold text-xs rounded-xl flex items-center gap-2">
            <Plus className="w-4 h-4" /> Invite User
          </button>
        }
      />

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <StatCard title="Active System Accounts" value={users.length.toString()} change={8.4} icon={Users} />
        <StatCard title="Super Administrators" value={users.filter((u) => u.role === 'Super Admin' || u.role === 'Admin').length.toString()} change={0} icon={Shield} />
        <StatCard title="Active Session Rate" value="94.2%" change={1.5} icon={UserCheck} />
      </div>

      <DataTable columns={columns} data={users} keyExtractor={(u) => u.id} searchPlaceholder="Search system users..." />

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Invite New System User">
        <form onSubmit={handleInviteUser} className="space-y-4">
          <FormInput label="Full Name" required value={name} onChange={(e) => setName(e.target.value)} />
          <FormInput label="Corporate Email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
          <div className="grid grid-cols-2 gap-4">
            <FormSelect
              label="Assigned Role"
              options={[
                { label: 'Super Admin', value: 'Super Admin' },
                { label: 'Admin', value: 'Admin' },
                { label: 'Manager', value: 'Manager' },
                { label: 'Editor', value: 'Editor' },
                { label: 'Viewer', value: 'Viewer' },
              ]}
              value={role}
              onChange={(e) => setRole(e.target.value as any)}
            />
            <FormInput label="Department" required value={department} onChange={(e) => setDepartment(e.target.value)} />
          </div>
          <div className="flex justify-end gap-2 pt-2">
            <button type="button" onClick={() => setIsModalOpen(false)} className="px-4 py-2 text-xs font-semibold text-slate-600">Cancel</button>
            <button type="submit" className="px-4 py-2 text-xs font-semibold text-white bg-brand-600 rounded-xl">Send Invite</button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export const UserDetailPage: React.FC = () => { return <div className="p-6">User Detail Page</div>; };

export const RolesPage: React.FC = () => {
  return (
    <div className="space-y-6">
      <PageHeader title="Security Roles & Governance" subtitle="RBAC security permissions, role definitions, and access scopes." />
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <StatCard title="Defined System Roles" value="5 roles" change={0} icon={Shield} />
        <StatCard title="RBAC Policy Matrix" value="28 Policies" change={4.2} icon={Lock} />
        <StatCard title="Security Compliance" value="100% SOC2" change={0} icon={UserCheck} />
      </div>
    </div>
  );
};

export const PermissionsPage: React.FC = () => {
  const { showToast } = useToast();
  const [matrix, setMatrix] = useState<ModulePermissionRow[]>(INITIAL_MATRIX);

  const togglePermission = (id: string, roleKey: keyof Omit<ModulePermissionRow, 'id' | 'module'>) => {
    setMatrix((prev) =>
      prev.map((row) => {
        if (row.id === id) {
          const updatedVal = !row[roleKey];
          showToast('Permissions Matrix Updated', `Updated ${row.module} access for ${String(roleKey)}`);
          return { ...row, [roleKey]: updatedVal };
        }
        return row;
      })
    );
  };

  return (
    <div className="space-y-6">
      <PageHeader title="RBAC Permissions Matrix" subtitle="Granular feature access matrix across Super Admin, Admin, Manager, Editor, and Viewer roles." />

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <StatCard title="Configured Roles" value="5 System Roles" change={0} icon={Shield} />
        <StatCard title="Active Security Policies" value="28 Policies" change={4.2} icon={Lock} />
        <StatCard title="Compliance Score" value="100% SOC2" change={0} icon={UserCheck} />
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
        <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1">Active Permissions Count per Role</h3>
        <p className="text-xs text-slate-500 mb-4">Total feature policy privileges assigned per role tier.</p>
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={ROLE_PERMISSIONS_CHART}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#33415515" />
              <XAxis dataKey="role" tick={{ fill: '#64748b' }} axisLine={false} />
              <YAxis tick={{ fill: '#64748b' }} axisLine={false} />
              <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderRadius: '12px', color: '#fff' }} />
              <Bar dataKey="permissions" fill="#0c93e7" name="Permissions Count" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">Interactive Module Access Matrix</h3>
            <p className="text-xs text-slate-500">Toggle role privileges for each core application module in real-time.</p>
          </div>
          <Badge variant="indigo">Live Matrix</Badge>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 font-bold">
                <th className="py-3 px-4">Application Module</th>
                <th className="py-3 px-4 text-center">Super Admin</th>
                <th className="py-3 px-4 text-center">Admin</th>
                <th className="py-3 px-4 text-center">Manager</th>
                <th className="py-3 px-4 text-center">Editor</th>
                <th className="py-3 px-4 text-center">Viewer</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60">
              {matrix.map((row) => (
                <tr key={row.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                  <td className="py-3 px-4 font-extrabold text-slate-900 dark:text-white">{row.module}</td>
                  {(['superAdmin', 'admin', 'manager', 'editor', 'viewer'] as const).map((roleKey) => (
                    <td key={roleKey} className="py-3 px-4 text-center">
                      <button
                        onClick={() => togglePermission(row.id, roleKey)}
                        className={`w-6 h-6 rounded-md inline-flex items-center justify-center transition-colors ${
                          row[roleKey]
                            ? 'bg-emerald-500 text-white shadow-sm hover:bg-emerald-600'
                            : 'bg-slate-200 dark:bg-slate-800 text-slate-400 hover:bg-slate-300'
                        }`}
                      >
                        {row[roleKey] ? <Check className="w-3.5 h-3.5" /> : <X className="w-3.5 h-3.5" />}
                      </button>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export const TeamsPage: React.FC = () => {
  return (
    <div className="space-y-6">
      <PageHeader title="Cross-Functional Teams" subtitle="Departmental teams, project pods, and team leads." />
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <StatCard title="Active Teams" value="8 pods" change={0} icon={Users} />
        <StatCard title="Cross-Functional Staff" value="48 members" change={12.0} icon={UserCheck} />
      </div>
    </div>
  );
};
