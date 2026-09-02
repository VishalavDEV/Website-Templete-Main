import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  Plus,
  Edit2,
  Trash2,
  Filter,
  UserPlus,
  Mail,
  Shield,
  Activity,
  AlertCircle
} from 'lucide-react';
import api from '../utils/api';
import Modal from '../components/Modal';

export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Search & Filter
  const [search, setSearch] = useState('');
  const [roleFilter, setRoleFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // CRUD Modals State
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  
  const [selectedUser, setSelectedUser] = useState(null);
  
  // Form States
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'User',
    status: 'Active',
    avatar: ''
  });

  // Fetch Users on mount
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const res = await api.get('/users');
      setUsers(res.data);
      setError(null);
    } catch (err) {
      console.error(err);
      setError('Failed to fetch users from backend.');
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Add User submit
  const handleAddSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post('/users', formData);
      setUsers(prev => [...prev, res.data]);
      setShowAddModal(false);
      resetForm();
    } catch (err) {
      console.error('Failed to create user:', err);
    }
  };

  // Edit User submit
  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.put(`/users/${selectedUser.id}`, formData);
      setUsers(prev => prev.map(u => u.id === selectedUser.id ? res.data : u));
      setShowEditModal(false);
      resetForm();
    } catch (err) {
      console.error('Failed to update user:', err);
    }
  };

  // Delete User confirm
  const handleDeleteConfirm = async () => {
    try {
      await api.delete(`/users/${selectedUser.id}`);
      setUsers(prev => prev.filter(u => u.id !== selectedUser.id));
      setShowDeleteModal(false);
      setSelectedUser(null);
    } catch (err) {
      console.error('Failed to delete user:', err);
    }
  };

  const openEditModal = (user) => {
    setSelectedUser(user);
    setFormData({
      name: user.name,
      email: user.email,
      role: user.role,
      status: user.status,
      avatar: user.avatar
    });
    setShowEditModal(true);
  };

  const openDeleteModal = (user) => {
    setSelectedUser(user);
    setShowDeleteModal(true);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      role: 'User',
      status: 'Active',
      avatar: ''
    });
    setSelectedUser(null);
  };

  // Filtered & Searched Users
  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(search.toLowerCase()) ||
                          user.email.toLowerCase().includes(search.toLowerCase());
    const matchesRole = roleFilter === '' || user.role === roleFilter;
    const matchesStatus = statusFilter === '' || user.status === statusFilter;
    
    return matchesSearch && matchesRole && matchesStatus;
  });

  // Pagination Logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage) || 1;

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Status Colors mapping
  const getStatusStyle = (status) => {
    if (status === 'Active') return { bg: 'var(--success-bg)', color: 'var(--success)' };
    if (status === 'Inactive') return { bg: 'var(--bg-secondary)', color: 'var(--text-muted)' };
    return { bg: 'var(--danger-bg)', color: 'var(--danger)' }; // Suspended
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}
    >
      {/* Page Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '15px' }}>
        <div>
          <h1 style={{ fontSize: '1.8rem', fontWeight: 700, color: 'var(--text-main)' }}>User Management</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Administer system operators, roles, and status filters.</p>
        </div>

        <button
          onClick={() => { resetForm(); setShowAddModal(true); }}
          className="btn-primary"
          style={{ padding: '10px 18px', fontSize: '0.85rem' }}
        >
          <UserPlus size={16} /> Add New Operator
        </button>
      </div>

      {/* Search & Filter bar card */}
      <div style={{
        backgroundColor: 'var(--bg-card)',
        border: '1.5px solid var(--border-color)',
        borderRadius: 'var(--border-radius-md)',
        padding: '20px',
        boxShadow: 'var(--shadow-sm)',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '15px',
        alignItems: 'center'
      }}>
        {/* Search */}
        <div style={{ position: 'relative', flexGrow: 1, minWidth: '220px' }}>
          <Search size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
          <input
            type="text"
            placeholder="Search by name or email..."
            value={search}
            onChange={(e) => { setSearch(e.target.value); setCurrentPage(1); }}
            style={{
              paddingLeft: '38px',
              height: '42px',
            }}
            className="form-input"
          />
        </div>

        {/* Filter Role */}
        <div style={{ minWidth: '150px' }}>
          <select
            value={roleFilter}
            onChange={(e) => { setRoleFilter(e.target.value); setCurrentPage(1); }}
            style={{ height: '42px' }}
            className="form-select"
          >
            <option value="">All Roles</option>
            <option value="Admin">Admin</option>
            <option value="Editor">Editor</option>
            <option value="Moderator">Moderator</option>
            <option value="User">User</option>
          </select>
        </div>

        {/* Filter Status */}
        <div style={{ minWidth: '150px' }}>
          <select
            value={statusFilter}
            onChange={(e) => { setStatusFilter(e.target.value); setCurrentPage(1); }}
            style={{ height: '42px' }}
            className="form-select"
          >
            <option value="">All Statuses</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
            <option value="Suspended">Suspended</option>
          </select>
        </div>
      </div>

      {/* User grid or Table list */}
      {loading ? (
        <div style={{ display: 'flex', justifyContent: 'center', padding: '50px 0' }}>
          <div style={{ width: '30px', height: '30px', border: '3px solid var(--border-color)', borderTopColor: 'var(--accent)', borderRadius: '50%' }} className="pulse-glow" />
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div className="table-container">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Avatar</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Status</th>
                  <th>Joined Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <AnimatePresence mode="wait">
                  {currentUsers.length === 0 ? (
                    <tr>
                      <td colSpan="7" style={{ textAlign: 'center', padding: '30px', color: 'var(--text-muted)' }}>
                        No operators matching the search criteria.
                      </td>
                    </tr>
                  ) : (
                    currentUsers.map((user) => {
                      const { bg, color } = getStatusStyle(user.status);
                      return (
                        <motion.tr
                          key={user.id}
                          layout
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <td>
                            <div style={{
                              width: '36px',
                              height: '36px',
                              borderRadius: '50%',
                              backgroundColor: 'var(--primary)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              fontWeight: 700,
                              fontSize: '0.85rem',
                              color: 'var(--text-main)'
                            }}>
                              {user.avatar}
                            </div>
                          </td>
                          <td style={{ fontWeight: 700, color: 'var(--text-main)' }}>{user.name}</td>
                          <td style={{ color: 'var(--text-muted)' }}>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                              <Mail size={14} /> {user.email}
                            </span>
                          </td>
                          <td>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 600 }}>
                              <Shield size={14} style={{ color: 'var(--accent)' }} /> {user.role}
                            </span>
                          </td>
                          <td>
                            <span style={{
                              backgroundColor: bg,
                              color: color,
                              padding: '4px 10px',
                              borderRadius: '20px',
                              fontSize: '0.78rem',
                              fontWeight: 700,
                              textTransform: 'uppercase',
                              letterSpacing: '0.5px'
                            }}>
                              {user.status}
                            </span>
                          </td>
                          <td>{user.joinedDate}</td>
                          <td>
                            <div style={{ display: 'flex', gap: '8px' }}>
                              <button
                                onClick={() => openEditModal(user)}
                                style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)' }}
                                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent)'}
                                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
                              >
                                <Edit2 size={16} />
                              </button>
                              <button
                                onClick={() => openDeleteModal(user)}
                                style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)' }}
                                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--danger)'}
                                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
                              >
                                <Trash2 size={16} />
                              </button>
                            </div>
                          </td>
                        </motion.tr>
                      );
                    })
                  )}
                </AnimatePresence>
              </tbody>
            </table>
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '10px' }}>
              <button
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
                className="btn-secondary"
                style={{ padding: '6px 12px', opacity: currentPage === 1 ? 0.5 : 1, cursor: currentPage === 1 ? 'not-allowed' : 'pointer' }}
              >
                Prev
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(num => (
                <button
                  key={num}
                  onClick={() => paginate(num)}
                  style={{
                    padding: '6px 12px',
                    borderRadius: 'var(--border-radius-sm)',
                    border: '1px solid var(--border-color)',
                    backgroundColor: currentPage === num ? 'var(--primary)' : 'var(--bg-card)',
                    color: 'var(--text-main)',
                    fontWeight: 600,
                    cursor: 'pointer',
                  }}
                >
                  {num}
                </button>
              ))}
              <button
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="btn-secondary"
                style={{ padding: '6px 12px', opacity: currentPage === totalPages ? 0.5 : 1, cursor: currentPage === totalPages ? 'not-allowed' : 'pointer' }}
              >
                Next
              </button>
            </div>
          )}
        </div>
      )}

      {/* ADD USER MODAL */}
      <Modal isOpen={showAddModal} onClose={() => setShowAddModal(false)} title="Create New Operator">
        <form onSubmit={handleAddSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)', display: 'block', marginBottom: '6px' }}>Full Name</label>
            <input type="text" name="name" required value={formData.name} onChange={handleInputChange} className="form-input" placeholder="e.g. Kristin Watson" />
          </div>
          <div>
            <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)', display: 'block', marginBottom: '6px' }}>Email Address</label>
            <input type="email" name="email" required value={formData.email} onChange={handleInputChange} className="form-input" placeholder="e.g. kristin@example.com" />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            <div>
              <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)', display: 'block', marginBottom: '6px' }}>Operator Role</label>
              <select name="role" value={formData.role} onChange={handleInputChange} className="form-select">
                <option value="Admin">Admin</option>
                <option value="Editor">Editor</option>
                <option value="Moderator">Moderator</option>
                <option value="User">User</option>
              </select>
            </div>
            <div>
              <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)', display: 'block', marginBottom: '6px' }}>Account Status</label>
              <select name="status" value={formData.status} onChange={handleInputChange} className="form-select">
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
                <option value="Suspended">Suspended</option>
              </select>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end', marginTop: '15px' }}>
            <button type="button" onClick={() => setShowAddModal(false)} className="btn-secondary">Cancel</button>
            <button type="submit" className="btn-primary">Register Operator</button>
          </div>
        </form>
      </Modal>

      {/* EDIT USER MODAL */}
      <Modal isOpen={showEditModal} onClose={() => setShowEditModal(false)} title={`Modify Operator Profile: ${selectedUser?.id}`}>
        <form onSubmit={handleEditSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)', display: 'block', marginBottom: '6px' }}>Full Name</label>
            <input type="text" name="name" required value={formData.name} onChange={handleInputChange} className="form-input" />
          </div>
          <div>
            <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)', display: 'block', marginBottom: '6px' }}>Email Address</label>
            <input type="email" name="email" required value={formData.email} onChange={handleInputChange} className="form-input" />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            <div>
              <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)', display: 'block', marginBottom: '6px' }}>Operator Role</label>
              <select name="role" value={formData.role} onChange={handleInputChange} className="form-select">
                <option value="Admin">Admin</option>
                <option value="Editor">Editor</option>
                <option value="Moderator">Moderator</option>
                <option value="User">User</option>
              </select>
            </div>
            <div>
              <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)', display: 'block', marginBottom: '6px' }}>Account Status</label>
              <select name="status" value={formData.status} onChange={handleInputChange} className="form-select">
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
                <option value="Suspended">Suspended</option>
              </select>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end', marginTop: '15px' }}>
            <button type="button" onClick={() => setShowEditModal(false)} className="btn-secondary">Cancel</button>
            <button type="submit" className="btn-primary">Update Profile</button>
          </div>
        </form>
      </Modal>

      {/* DELETE CONFIRMATION MODAL */}
      <Modal isOpen={showDeleteModal} onClose={() => setShowDeleteModal(false)} title="Deactivate Operator Account">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center', textAlign: 'center' }}>
          <AlertCircle size={36} style={{ color: 'var(--danger)' }} />
          <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', fontWeight: 600 }}>
            Are you sure you want to delete operator account "{selectedUser?.name}" ({selectedUser?.id})?
          </p>
          <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
            This action is irreversible. The user will lose access to all portal services immediately.
          </p>
          <div style={{ display: 'flex', gap: '12px', width: '100%', justifyContent: 'center', marginTop: '15px' }}>
            <button onClick={() => setShowDeleteModal(false)} className="btn-secondary" style={{ flexGrow: 1 }}>Cancel</button>
            <button onClick={handleDeleteConfirm} className="btn-danger" style={{ flexGrow: 1 }}>Delete Account</button>
          </div>
        </div>
      </Modal>
    </motion.div>
  );
}
