import React, { useEffect, useState } from 'react';
import { User, UserService } from '../../services/apiServices';
import { useToast } from '../../components/common/Toast';
import DataTable from '../../components/common/DataTable';
import StatusBadge from '../../components/common/StatusBadge';
import Modal from '../../components/common/Modal';
import ConfirmationModal from '../../components/common/ConfirmationModal';
import { Plus, Edit2, Trash2, Power, ShieldAlert } from 'lucide-react';

const UserManagementPage: React.FC = () => {
  const { showToast } = useToast();
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  // Modals state
  const [formModalOpen, setFormModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  // Form fields
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [role, setRole] = useState('STAFF');
  const [status, setStatus] = useState('ACTIVE');
  const [password, setPassword] = useState('');
  const [profileImage, setProfileImage] = useState('');

  const currentUser = JSON.parse(localStorage.getItem('user') || '{}');

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const data = await UserService.getAll();
      setUsers(data);
    } catch (err) {
      showToast('Failed to retrieve user accounts.', 'error');
    } finally {
      setLoading(false);
    }
  };

  const handleOpenAddModal = () => {
    setSelectedUser(null);
    setUsername('');
    setEmail('');
    setPhone('');
    setRole('STAFF');
    setStatus('ACTIVE');
    setPassword('');
    setProfileImage('');
    setFormModalOpen(true);
  };

  const handleOpenEditModal = (user: User) => {
    setSelectedUser(user);
    setUsername(user.username);
    setEmail(user.email);
    setPhone(user.phone || '');
    setRole(user.role);
    setStatus(user.status);
    setPassword(''); // leave blank unless changing
    setProfileImage(user.profileImage || '');
    setFormModalOpen(true);
  };

  const handleOpenDeleteModal = (user: User) => {
    setSelectedUser(user);
    setDeleteModalOpen(true);
  };

  const handleSaveUser = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!username || !email) {
      showToast('Username and email are required.', 'warning');
      return;
    }

    const payload: User = {
      username,
      email,
      phone,
      role,
      status,
      profileImage,
      password: password || undefined,
    };

    try {
      if (selectedUser && selectedUser.id) {
        // Edit flow
        await UserService.update(selectedUser.id, payload);
        showToast('User account updated successfully!', 'success');
      } else {
        // Add flow
        if (!password) {
          showToast('Password is required for new users.', 'warning');
          return;
        }
        await UserService.create(payload);
        showToast('New user created successfully!', 'success');
      }
      setFormModalOpen(false);
      fetchUsers();
    } catch (err: any) {
      const errMsg = err.response?.data?.message || 'Error occurred while saving user details.';
      showToast(errMsg, 'error');
    }
  };

  const handleDeleteUser = async () => {
    if (!selectedUser || !selectedUser.id) return;
    try {
      await UserService.delete(selectedUser.id);
      showToast('User deleted successfully.', 'success');
      fetchUsers();
    } catch (err) {
      showToast('Failed to delete user.', 'error');
    }
  };

  const handleToggleStatus = async (user: User) => {
    if (!user.id) return;
    const nextStatus = user.status === 'ACTIVE' ? 'INACTIVE' : 'ACTIVE';
    try {
      await UserService.updateStatus(user.id, nextStatus);
      showToast(`User status set to ${nextStatus}`, 'success');
      fetchUsers();
    } catch (err) {
      showToast('Failed to toggle status.', 'error');
    }
  };

  // Filter users based on search
  const filteredUsers = users.filter((u) => {
    const search = searchQuery.toLowerCase();
    return (
      u.username.toLowerCase().includes(search) ||
      u.email.toLowerCase().includes(search) ||
      u.role.toLowerCase().includes(search)
    );
  });

  const headers = [
    { key: 'user', label: 'User' },
    { key: 'role', label: 'Role' },
    { key: 'status', label: 'Status' },
    { key: 'phone', label: 'Phone' },
    { key: 'actions', label: 'Actions' },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-800 tracking-tight">Users Management</h1>
          <p className="text-sm text-slate-500 font-medium">Control admin panel users, assign roles, and toggle access states</p>
        </div>
      </div>

      {/* Table Container */}
      <DataTable
        headers={headers}
        data={filteredUsers}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        currentPage={0}
        totalPages={1}
        onPageChange={() => {}}
        loading={loading}
        placeholder="Filter by name, email, or role..."
        actions={
          <button
            onClick={handleOpenAddModal}
            className="flex items-center gap-2 py-2 px-4 text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 rounded-xl transition-all shadow-sm shadow-indigo-100 hover:shadow-indigo-200 active:scale-95 cursor-pointer"
          >
            <Plus className="h-4 w-4" />
            Add User
          </button>
        }
        renderRow={(user: User) => (
          <tr key={user.id} className="border-b border-slate-100 text-sm font-semibold text-slate-700 hover:bg-slate-50/40 transition-colors">
            <td className="p-4">
              <div className="flex items-center gap-3">
                <img
                  src={user.profileImage || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150'}
                  alt="Avatar"
                  className="h-10 w-10 rounded-xl object-cover ring-2 ring-slate-100"
                />
                <div className="flex flex-col">
                  <span className="text-slate-800 text-sm font-bold">{user.username}</span>
                  <span className="text-slate-400 text-xs font-medium">{user.email}</span>
                </div>
              </div>
            </td>
            <td className="p-4 capitalize">
              <div className="flex items-center gap-1.5 text-xs text-slate-600">
                <ShieldAlert className="h-4 w-4 text-indigo-500" />
                {user.role.replace('ROLE_', '').toLowerCase()}
              </div>
            </td>
            <td className="p-4">
              <StatusBadge status={user.status} />
            </td>
            <td className="p-4 text-xs font-semibold text-slate-400">
              {user.phone || 'N/A'}
            </td>
            <td className="p-4">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleToggleStatus(user)}
                  title="Toggle Active/Inactive"
                  className="p-1.5 border border-slate-200 hover:border-indigo-500 hover:bg-indigo-50 hover:text-indigo-600 text-slate-500 rounded-lg transition-all active:scale-90 bg-white"
                >
                  <Power className="h-4 w-4" />
                </button>
                <button
                  onClick={() => handleOpenEditModal(user)}
                  title="Edit details"
                  className="p-1.5 border border-slate-200 hover:border-indigo-500 hover:bg-indigo-50 hover:text-indigo-600 text-slate-500 rounded-lg transition-all active:scale-90 bg-white"
                >
                  <Edit2 className="h-4 w-4" />
                </button>
                <button
                  disabled={currentUser.username === user.username}
                  onClick={() => handleOpenDeleteModal(user)}
                  title={currentUser.username === user.username ? "Cannot delete self" : "Delete user"}
                  className="p-1.5 border border-slate-200 hover:border-red-500 hover:bg-red-50 hover:text-red-600 text-slate-500 disabled:opacity-40 disabled:hover:bg-transparent disabled:hover:border-slate-200 disabled:hover:text-slate-500 rounded-lg transition-all active:scale-90 bg-white"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </td>
          </tr>
        )}
      />

      {/* Add/Edit Modal */}
      <Modal
        isOpen={formModalOpen}
        onClose={() => setFormModalOpen(false)}
        title={selectedUser ? 'Edit User Details' : 'Create New User'}
      >
        <form onSubmit={handleSaveUser} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Username</label>
              <input
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="e.g. janesmith"
                className="w-full px-3.5 py-2 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 bg-slate-50/50"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Email</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="e.g. jane@company.com"
                className="w-full px-3.5 py-2 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 bg-slate-50/50"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Phone</label>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+1 (555) 000-0000"
                className="w-full px-3.5 py-2 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 bg-slate-50/50"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Avatar Image URL</label>
              <input
                type="text"
                value={profileImage}
                onChange={(e) => setProfileImage(e.target.value)}
                placeholder="https://images.unsplash.com/..."
                className="w-full px-3.5 py-2 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 bg-slate-50/50"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Role</label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 bg-slate-50/50"
              >
                <option value="SUPER_ADMIN">Super Admin</option>
                <option value="ADMIN">Admin</option>
                <option value="MANAGER">Manager</option>
                <option value="STAFF">Staff</option>
                <option value="USER">User</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Status</label>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 bg-slate-50/50"
              >
                <option value="ACTIVE">Active</option>
                <option value="INACTIVE">Inactive</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase mb-1">
              Password {selectedUser && '(leave blank to keep unchanged)'}
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-3.5 py-2 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 bg-slate-50/50"
            />
          </div>

          <div className="mt-6 flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
            <button
              type="button"
              onClick={() => setFormModalOpen(false)}
              className="px-4 py-2 text-sm font-medium text-slate-650 bg-slate-50 hover:bg-slate-100 rounded-xl transition-all"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl transition-all shadow-sm shadow-indigo-100 active:scale-95"
            >
              Save Details
            </button>
          </div>
        </form>
      </Modal>

      {/* Delete Confirmation Modal */}
      <ConfirmationModal
        isOpen={deleteModalOpen}
        onClose={() => setDeleteModalOpen(false)}
        onConfirm={handleDeleteUser}
        title="Delete User Account"
        message={`Are you sure you want to delete user "${selectedUser?.username}"? This action is permanent and cannot be undone.`}
      />
    </div>
  );
};

export default UserManagementPage;
