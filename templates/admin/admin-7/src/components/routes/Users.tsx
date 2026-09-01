import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { User } from '../../data/initialData';
import { 
  StatusBadge, Modal, FilterBar, DataTable, 
  Pagination, EmptyState, Avatar 
} from '../ui/GlobalComponents';
import { Users as UsersIcon, Plus, Eye, Edit, Trash2 } from 'lucide-react';

export const Users: React.FC = () => {
  const { 
    users, 
    createUser, 
    updateUser, 
    deleteUser 
  } = useApp();

  // Filters & State
  const [searchVal, setSearchVal] = useState('');
  const [roleFilter, setRoleFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [sortKey, setSortKey] = useState('name');
  const [sortDir, setSortDir] = useState<'asc' | 'desc'>('asc');

  // Modals
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isViewOpen, setIsViewOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  // Form Fields
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formRole, setFormRole] = useState<'Administrator' | 'Developer' | 'Manager' | 'Designer' | 'Analyst'>('Developer');
  const [formStatus, setFormStatus] = useState<'Active' | 'Inactive' | 'Suspended'>('Active');
  const [formDept, setFormDept] = useState<'Engineering' | 'Product' | 'Operations' | 'Finance' | 'HR' | 'Marketing'>('Engineering');
  const [formAvatar, setFormAvatar] = useState('');

  const itemsPerPage = 5;

  const handleAddSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName.trim() || !formEmail.trim()) return;

    createUser({
      name: formName,
      email: formEmail,
      role: formRole,
      status: formStatus,
      department: formDept,
      avatar: formAvatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&h=150&q=80',
    });

    setFormName('');
    setFormEmail('');
    setFormAvatar('');
    setIsAddOpen(false);
  };

  const handleEditClick = (u: User) => {
    setSelectedUser(u);
    setFormName(u.name);
    setFormEmail(u.email);
    setFormRole(u.role);
    setFormStatus(u.status);
    setFormDept(u.department);
    setFormAvatar(u.avatar);
    setIsEditOpen(true);
  };

  const handleEditSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedUser || !formName.trim()) return;

    updateUser({
      ...selectedUser,
      name: formName,
      email: formEmail,
      role: formRole,
      status: formStatus,
      department: formDept,
      avatar: formAvatar,
    });

    setIsEditOpen(false);
    setSelectedUser(null);
  };

  const handleViewClick = (u: User) => {
    setSelectedUser(u);
    setIsViewOpen(true);
  };

  const handleDelete = (id: string) => {
    if (confirm("Deactivate this user profile? The user will lose simulated cluster keys.")) {
      deleteUser(id);
    }
  };

  // Sorting helper
  const handleSort = (key: string) => {
    if (sortKey === key) {
      setSortDir(sortDir === 'asc' ? 'desc' : 'asc');
    } else {
      setSortKey(key);
      setSortDir('asc');
    }
  };

  // Filter & Sort
  const processedUsers = [...users]
    .filter((u) => {
      const matchesSearch = u.name.toLowerCase().includes(searchVal.toLowerCase()) || 
                            u.email.toLowerCase().includes(searchVal.toLowerCase()) ||
                            u.department.toLowerCase().includes(searchVal.toLowerCase());
      const matchesRole = roleFilter === 'all' || u.role === roleFilter;
      const matchesStatus = statusFilter === 'all' || u.status === statusFilter;
      return matchesSearch && matchesRole && matchesStatus;
    })
    .sort((a, b) => {
      let comparison = 0;
      if (sortKey === 'name') {
        comparison = a.name.localeCompare(b.name);
      } else if (sortKey === 'joinedDate') {
        comparison = a.joinedDate.localeCompare(b.joinedDate);
      } else if (sortKey === 'department') {
        comparison = a.department.localeCompare(b.department);
      }
      return sortDir === 'asc' ? comparison : -comparison;
    });

  // Pagination
  const totalPages = Math.ceil(processedUsers.length / itemsPerPage);
  const paginatedUsers = processedUsers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="space-y-6">
      {/* Header section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-lg font-extrabold tracking-tight text-slate-900 uppercase font-mono">
            User Directory & Access Credentials
          </h2>
          <p className="text-xs text-slate-500 font-mono mt-0.5">Manage organizational nodes, access clearance lists, and user roles.</p>
        </div>
        <button
          onClick={() => {
            setFormName('');
            setFormEmail('');
            setFormAvatar('');
            setIsAddOpen(true);
          }}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs rounded-lg transition shadow-xs cursor-pointer font-mono"
        >
          <Plus className="h-4 w-4" />
          Add User
        </button>
      </div>

      {/* Filters Bar */}
      <FilterBar 
        searchVal={searchVal}
        onSearch={setSearchVal}
        filters={[
          {
            id: 'role',
            label: 'Role',
            options: [
              { value: 'all', label: 'All Roles' },
              { value: 'Administrator', label: 'Admin' },
              { value: 'Developer', label: 'Developer' },
              { value: 'Manager', label: 'Manager' },
              { value: 'Designer', label: 'Designer' },
              { value: 'Analyst', label: 'Analyst' },
            ],
            activeValue: roleFilter,
            onChange: setRoleFilter,
          },
          {
            id: 'status',
            label: 'Status',
            options: [
              { value: 'all', label: 'All Status' },
              { value: 'Active', label: 'Active' },
              { value: 'Inactive', label: 'Inactive' },
              { value: 'Suspended', label: 'Suspended' },
            ],
            activeValue: statusFilter,
            onChange: setStatusFilter,
          }
        ]}
        onClearAll={() => {
          setSearchVal('');
          setRoleFilter('all');
          setStatusFilter('all');
        }}
      />

      {/* Users DataTable */}
      <DataTable 
        data={paginatedUsers}
        sortConfig={{ key: sortKey, direction: sortDir }}
        onSort={handleSort}
        columns={[
          {
            header: 'Personnel Name',
            sortKey: 'name',
            accessor: (u: User) => (
              <div className="flex items-center gap-3">
                <Avatar src={u.avatar} name={u.name} size="sm" />
                <div>
                  <span className="font-bold text-slate-800">{u.name}</span>
                  <span className="block text-[10px] text-slate-400 font-normal">{u.email}</span>
                </div>
              </div>
            )
          },
          {
            header: 'Functional Dept',
            sortKey: 'department',
            accessor: (u: User) => <span className="font-semibold text-slate-600">{u.department}</span>
          },
          {
            header: 'Access Clearance',
            accessor: (u: User) => (
              <span className="px-2 py-0.5 rounded bg-blue-50 border border-blue-100 text-blue-700 text-[10px] font-bold uppercase font-mono tracking-wider">
                {u.role}
              </span>
            )
          },
          {
            header: 'Registry Status',
            accessor: (u: User) => <StatusBadge status={u.status} />
          },
          {
            header: 'Joined Date',
            sortKey: 'joinedDate',
            accessor: (u: User) => <span className="font-mono text-xs text-slate-500">{u.joinedDate}</span>
          },
          {
            header: 'Operations',
            accessor: (u: User) => (
              <div className="flex gap-1">
                <button onClick={() => handleViewClick(u)} className="p-1 text-slate-400 hover:text-blue-600 transition cursor-pointer" title="View details">
                  <Eye className="h-4 w-4" />
                </button>
                <button onClick={() => handleEditClick(u)} className="p-1 text-slate-400 hover:text-blue-600 transition cursor-pointer" title="Edit user">
                  <Edit className="h-4 w-4" />
                </button>
                <button onClick={() => handleDelete(u.id)} className="p-1 text-slate-400 hover:text-rose-600 transition cursor-pointer" title="Deactivate user">
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            )
          }
        ]}
        emptyState={
          <EmptyState 
            title="Personnel Clean" 
            description="We didn't discover any operators matching the designated query limits."
            actionLabel="Add User"
            onAction={() => setIsAddOpen(true)}
            icon={<UsersIcon className="h-10 w-10 text-blue-200" />}
          />
        }
      />

      {/* Pagination component */}
      <Pagination 
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
        totalItems={processedUsers.length}
        itemsPerPage={itemsPerPage}
      />

      {/* ADD USER MODAL */}
      <Modal isOpen={isAddOpen} onClose={() => setIsAddOpen(false)} title="Register Node Operator">
        <form onSubmit={handleAddSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1 font-mono">Personnel Full Name</label>
            <input 
              type="text" 
              required
              value={formName}
              onChange={(e) => setFormName(e.target.value)}
              placeholder="e.g. Julian Sterling" 
              className="w-full text-xs p-2 bg-slate-50 border border-blue-200 rounded-lg text-slate-800 focus:outline-none focus:border-blue-600 focus:bg-white"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1 font-mono">Communications Email</label>
            <input 
              type="email" 
              required
              value={formEmail}
              onChange={(e) => setFormEmail(e.target.value)}
              placeholder="e.g. julian@sprintadmin.io" 
              className="w-full text-xs p-2 bg-slate-50 border border-blue-200 rounded-lg text-slate-800 focus:outline-none focus:border-blue-600 focus:bg-white"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1 font-mono">Access Clearance</label>
              <select 
                value={formRole}
                onChange={(e: any) => setFormRole(e.target.value)}
                className="w-full text-xs p-2 bg-slate-50 border border-blue-200 rounded-lg text-slate-800 focus:outline-none focus:border-blue-600 focus:bg-white"
              >
                <option value="Administrator">Administrator</option>
                <option value="Developer">Developer</option>
                <option value="Manager">Manager</option>
                <option value="Designer">Designer</option>
                <option value="Analyst">Analyst</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1 font-mono">Active Department</label>
              <select 
                value={formDept}
                onChange={(e: any) => setFormDept(e.target.value)}
                className="w-full text-xs p-2 bg-slate-50 border border-blue-200 rounded-lg text-slate-800 focus:outline-none focus:border-blue-600 focus:bg-white"
              >
                <option value="Engineering">Engineering</option>
                <option value="Product">Product</option>
                <option value="Operations">Operations</option>
                <option value="Finance">Finance</option>
                <option value="HR">HR</option>
                <option value="Marketing">Marketing</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1 font-mono">Avatar Image Url (Optional)</label>
              <input 
                type="text" 
                value={formAvatar}
                onChange={(e) => setFormAvatar(e.target.value)}
                placeholder="https://images.unsplash.com/..." 
                className="w-full text-xs p-2 bg-slate-50 border border-blue-200 rounded-lg text-slate-800 focus:outline-none focus:border-blue-600 focus:bg-white"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1 font-mono">Simulated Clearance</label>
              <select 
                value={formStatus}
                onChange={(e: any) => setFormStatus(e.target.value)}
                className="w-full text-xs p-2 bg-slate-50 border border-blue-200 rounded-lg text-slate-800 focus:outline-none focus:border-blue-600 focus:bg-white"
              >
                <option value="Active">Active Clearance</option>
                <option value="Inactive">Inactive Clearance</option>
                <option value="Suspended">Suspended / Revoked</option>
              </select>
            </div>
          </div>

          <button 
            type="submit"
            className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-lg uppercase tracking-wider cursor-pointer font-mono shadow-xs transition"
          >
            Deploy Node User
          </button>
        </form>
      </Modal>

      {/* EDIT USER MODAL */}
      <Modal isOpen={isEditOpen} onClose={() => setIsEditOpen(false)} title="Update Clearance Coordinates">
        <form onSubmit={handleEditSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1 font-mono">Full Name</label>
            <input 
              type="text" 
              required
              value={formName}
              onChange={(e) => setFormName(e.target.value)}
              className="w-full text-xs p-2 bg-slate-50 border border-blue-200 rounded-lg text-slate-800 focus:outline-none focus:border-blue-600 focus:bg-white"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1 font-mono">Email Coordinates</label>
            <input 
              type="email" 
              required
              value={formEmail}
              onChange={(e) => setFormEmail(e.target.value)}
              className="w-full text-xs p-2 bg-slate-50 border border-blue-200 rounded-lg text-slate-800 focus:outline-none focus:border-blue-600 focus:bg-white"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1 font-mono">Clearance Access</label>
              <select 
                value={formRole}
                onChange={(e: any) => setFormRole(e.target.value)}
                className="w-full text-xs p-2 bg-slate-50 border border-blue-200 rounded-lg text-slate-800 focus:outline-none focus:border-blue-600 focus:bg-white"
              >
                <option value="Administrator">Administrator</option>
                <option value="Developer">Developer</option>
                <option value="Manager">Manager</option>
                <option value="Designer">Designer</option>
                <option value="Analyst">Analyst</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1 font-mono">Primary Department</label>
              <select 
                value={formDept}
                onChange={(e: any) => setFormDept(e.target.value)}
                className="w-full text-xs p-2 bg-slate-50 border border-blue-200 rounded-lg text-slate-800 focus:outline-none focus:border-blue-600 focus:bg-white"
              >
                <option value="Engineering">Engineering</option>
                <option value="Product">Product</option>
                <option value="Operations">Operations</option>
                <option value="Finance">Finance</option>
                <option value="HR">HR</option>
                <option value="Marketing">Marketing</option>
              </select>
            </div>
          </div>

          <button 
            type="submit"
            className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-lg uppercase tracking-wider cursor-pointer font-mono shadow-xs transition"
          >
            Apply Personnel Update
          </button>
        </form>
      </Modal>

      {/* VIEW USER DETAILS MODAL */}
      <Modal isOpen={isViewOpen} onClose={() => setIsViewOpen(false)} title="Operational Personnel File">
        {selectedUser && (
          <div className="space-y-4">
            <div className="flex items-center gap-4 border-b border-blue-100 pb-3">
              <Avatar src={selectedUser.avatar} name={selectedUser.name} size="lg" />
              <div>
                <h4 className="text-sm font-extrabold text-slate-900 font-mono">{selectedUser.name}</h4>
                <span className="text-xs text-slate-500 font-mono">{selectedUser.email}</span>
                <div className="flex gap-1.5 mt-2">
                  <StatusBadge status={selectedUser.status} />
                  <span className="px-2 py-0.5 rounded bg-blue-50 border border-blue-100 text-blue-700 text-[10px] font-bold uppercase font-mono">
                    {selectedUser.role}
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 text-xs">
              <div>
                <span className="text-slate-400 block font-semibold uppercase tracking-wider text-[10px] font-mono">Departmental Link</span>
                <span className="font-bold text-slate-800 mt-0.5 block">{selectedUser.department}</span>
              </div>
              <div>
                <span className="text-slate-400 block font-semibold uppercase tracking-wider text-[10px] font-mono">Registry Date</span>
                <span className="font-mono text-slate-800 mt-0.5 block">{selectedUser.joinedDate}</span>
              </div>
            </div>

            <div className="border border-blue-100 rounded-lg p-3 bg-blue-50/50 text-[11px] text-slate-500 leading-relaxed font-mono">
              SECURE TELEMETRY ACCESS DECK KEY:
              <span className="block text-blue-800 mt-1 select-all font-bold overflow-hidden text-ellipsis">
                SPRINT-OPERATOR-{selectedUser.id.toUpperCase()}-2026-XF89D2
              </span>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};
