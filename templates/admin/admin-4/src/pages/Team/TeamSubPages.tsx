import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Card } from '../../components/Common/Card';
import { Button } from '../../components/Common/Button';
import { Modal } from '../../components/Common/Modal';
import { useApp } from '../../context/AppContext';
import { UserRole } from '../../types';
import {
  Users,
  UserCheck,
  Building,
  Shield,
  BarChart2,
  Search,
  Filter,
  Plus,
  CheckCircle2,
  Mail,
  Phone,
  Briefcase,
  Layers,
  Award
} from 'lucide-react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  XAxis,
  YAxis,
  Tooltip,
  Legend
} from 'recharts';

const SUB_TABS = [
  { name: 'Member Directory', path: '/team/members', icon: Users },
  { name: 'Squads & Teams', path: '/team/squads', icon: UserCheck },
  { name: 'Departments', path: '/team/departments', icon: Building },
  { name: 'Roles & Permissions', path: '/team/roles', icon: Shield },
  { name: 'Capacity & Workload', path: '/team/workload', icon: BarChart2 }
];

export const TeamSubPages: React.FC<{ subPage: string }> = ({ subPage }) => {
  const { users, addUser, departments, teams, addToast } = useApp();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [deptFilter, setDeptFilter] = useState('ALL');

  // Modal State
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [memberName, setMemberName] = useState('');
  const [memberEmail, setMemberEmail] = useState('');
  const [memberRole, setMemberRole] = useState<UserRole>('Team Member');
  const [memberDepartment, setMemberDepartment] = useState('Software Engineering');
  const [memberHourlyRate, setMemberHourlyRate] = useState('110');

  const handleAddMemberSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!memberName.trim()) return;

    addUser({
      name: memberName.trim(),
      email: memberEmail.trim() || `${memberName.toLowerCase().replace(/\s+/g, '')}@corevista.io`,
      avatar: `https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150`,
      role: memberRole,
      departmentId: 'd-3',
      departmentName: memberDepartment,
      status: 'Active',
      availabilityHoursPerWeek: 40,
      hourlyRate: parseFloat(memberHourlyRate) || 100,
      skills: ['React', 'TypeScript', 'Node.js']
    });

    addToast(`Successfully added team member "${memberName}".`, 'success');
    setIsAddModalOpen(false);
    setMemberName('');
    setMemberEmail('');
  };

  const workloadData = [
    { name: 'Alexandra V.', allocated: 38, capacity: 40, efficiency: 95 },
    { name: 'Marcus S.', allocated: 44, capacity: 40, efficiency: 110 },
    { name: 'Sophia C.', allocated: 40, capacity: 40, efficiency: 100 },
    { name: 'David R.', allocated: 35, capacity: 40, efficiency: 88 },
    { name: 'Elena R.', allocated: 42, capacity: 40, efficiency: 105 }
  ];

  const skillMatrixData = [
    { skill: 'React / Frontend', score: 92 },
    { skill: 'Node / Backend', score: 88 },
    { skill: 'Cloud / DevOps', score: 85 },
    { skill: 'UI/UX Design', score: 78 },
    { skill: 'QA / Automation', score: 82 }
  ];

  const [rolesState, setRolesState] = useState([
    { role: 'Super Admin', read: true, write: true, delete: true, admin: true },
    { role: 'Project Manager', read: true, write: true, delete: false, admin: false },
    { role: 'Lead Developer', read: true, write: true, delete: false, admin: false },
    { role: 'UI/UX Designer', read: true, write: false, delete: false, admin: false },
    { role: 'External Auditor', read: true, write: false, delete: false, admin: false }
  ]);

  const togglePermission = (index: number, perm: 'read' | 'write' | 'delete' | 'admin') => {
    setRolesState(prev => {
      const updated = [...prev];
      updated[index][perm] = !updated[index][perm];
      return updated;
    });
    addToast('Permission matrix updated.', 'success');
  };

  const filteredUsers = users.filter(u => {
    const matchesSearch = (u.name || '').toLowerCase().includes(searchTerm.toLowerCase()) || (u.role || '').toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDept = deptFilter === 'ALL' || u.departmentName === deptFilter;
    return matchesSearch && matchesDept;
  });

  const squadList = [
    { id: 'sq-1', name: 'Core Cloud Architecture Squad', lead: 'Sophia Chen', membersCount: 6, focus: 'AWS & Microservices', status: 'Active' },
    { id: 'sq-2', name: 'FinTech Banking Vault Team', lead: 'Marcus Sterling', membersCount: 5, focus: 'Security & Billing Engine', status: 'Active' },
    { id: 'sq-3', name: 'Frontend Design System Squad', lead: 'Alexandra Vance', membersCount: 4, focus: 'React & Tailwind UI Components', status: 'Active' },
    { id: 'sq-4', name: 'AI & Data Analytics Unit', lead: 'David Rodriguez', membersCount: 3, focus: 'Machine Learning Pipelines', status: 'Active' }
  ];

  return (
    <div className="space-y-6">
      {/* Header & Sub-Tabs Navigation */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-app pb-4">
        <div>
          <h1 className="text-2xl font-bold text-app-primary flex items-center gap-2">
            <Users className="w-6 h-6 text-blue-500" />
            Human Capital & Resource Intelligence
          </h1>
          <p className="text-xs text-app-muted mt-1">
            Engineering directory, capacity planning, department breakdown, and access control.
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

      {/* SUBPAGE 1: MEMBER DIRECTORY */}
      {(subPage === 'members' || !subPage) && (
        <Card title="Engineering & Team Member Directory">
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <div className="relative w-full sm:w-64">
                  <Search className="w-4 h-4 text-app-muted absolute left-3 top-2.5" />
                  <input
                    type="text"
                    placeholder="Search name or role..."
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                    className="w-full bg-app-hover border border-app rounded-xl pl-9 pr-3 py-2 text-xs text-app-primary focus:outline-none focus:border-blue-500"
                  />
                </div>
                <select
                  value={deptFilter}
                  onChange={e => setDeptFilter(e.target.value)}
                  className="bg-app-hover border border-app rounded-xl px-3 py-2 text-xs text-app-primary focus:outline-none focus:border-blue-500"
                >
                  <option value="ALL">All Departments</option>
                  <option value="Executive Leadership">Executive Leadership</option>
                  <option value="Product Management">Product Management</option>
                  <option value="Software Engineering">Software Engineering</option>
                  <option value="UI/UX Design">UI/UX Design</option>
                </select>
              </div>
              <Button size="sm" variant="primary" icon={<Plus className="w-3.5 h-3.5" />} onClick={() => setIsAddModalOpen(true)}>
                Add Team Member
              </Button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-app-secondary/50 text-app-muted font-bold uppercase tracking-wider">
                  <tr>
                    <th className="p-3">Member Name</th>
                    <th className="p-3">Role</th>
                    <th className="p-3">Department</th>
                    <th className="p-3">Hourly Rate</th>
                    <th className="p-3">Weekly Capacity</th>
                    <th className="p-3">Status</th>
                    <th className="p-3 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-app">
                  {filteredUsers.map(u => (
                    <tr key={u.id} className="hover:bg-app-hover/50 cursor-pointer" onClick={() => navigate(`/team/${u.id}`)}>
                      <td className="p-3 flex items-center gap-3">
                        <img src={u.avatar} alt={u.name} className="w-8 h-8 rounded-full object-cover" />
                        <div>
                          <p className="font-semibold text-app-primary hover:text-blue-400">{u.name}</p>
                          <p className="text-[11px] text-app-muted">{u.email}</p>
                        </div>
                      </td>
                      <td className="p-3 font-medium text-app-secondary">{u.role}</td>
                      <td className="p-3 text-app-secondary">{u.departmentName}</td>
                      <td className="p-3 font-mono font-semibold text-emerald-400">${u.hourlyRate}/hr</td>
                      <td className="p-3 text-app-secondary font-mono">{u.availabilityHoursPerWeek} hrs/wk</td>
                      <td className="p-3">
                        <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-bold text-[10px]">
                          {u.status}
                        </span>
                      </td>
                      <td className="p-3 text-right">
                        <Button size="sm" variant="outline" onClick={(e) => { e.stopPropagation(); navigate(`/team/${u.id}`); }}>
                          View Profile
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

      {/* SUBPAGE 2: SQUADS & TEAMS */}
      {subPage === 'squads' && (
        <div className="space-y-6">
          <Card title="Agile Cross-Functional Squads & Teams">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {squadList.map(sq => (
                <div key={sq.id} className="p-4 rounded-xl bg-app-secondary/30 border border-app space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm text-app-primary flex items-center gap-2">
                      <UserCheck className="w-4 h-4 text-blue-500" />
                      {sq.name}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-bold text-[10px]">
                      {sq.status}
                    </span>
                  </div>
                  <div className="text-xs space-y-1 text-app-secondary">
                    <p>Squad Lead: <strong className="text-app-primary">{sq.lead}</strong></p>
                    <p>Domain Focus: <strong className="text-app-primary">{sq.focus}</strong></p>
                    <p>Members Assigned: <strong className="text-blue-400 font-mono">{sq.membersCount} Engineers</strong></p>
                  </div>
                  <Button size="sm" variant="outline" className="w-full" onClick={() => addToast(`Inspecting ${sq.name}`, 'info')}>
                    Manage Squad Roster
                  </Button>
                </div>
              ))}
            </div>
          </Card>
        </div>
      )}

      {/* SUBPAGE 3: DEPARTMENTS */}
      {subPage === 'departments' && (
        <div className="space-y-6">
          <Card title="Organizational Department Hierarchy">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {departments.map(d => (
                <div key={d.id} className="p-4 rounded-xl bg-app-secondary/30 border border-app space-y-3">
                  <div className="flex items-center gap-2 font-bold text-sm text-app-primary">
                    <Building className="w-4 h-4 text-purple-400" />
                    {d.name}
                  </div>
                  <div className="text-xs space-y-1 text-app-muted">
                    <p>Department Head: <strong className="text-app-primary">{d.headName}</strong></p>
                    <p>Total Members: <strong className="text-emerald-400 font-mono">{d.membersCount} Staff</strong></p>
                    <p>Projects Assigned: <strong className="text-blue-400 font-mono">{d.projectsCount} Initiatives</strong></p>
                  </div>
                  <Button size="sm" variant="outline" className="w-full text-xs" onClick={() => addToast(`Viewing department ${d.name}`, 'info')}>
                    Inspect Department
                  </Button>
                </div>
              ))}
            </div>
          </Card>
        </div>
      )}

      {/* SUBPAGE 4: ROLES & PERMISSIONS */}
      {subPage === 'roles' && (
        <Card title="Access Control & Security Roles Matrix">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-app-secondary/50 text-app-muted font-bold uppercase tracking-wider">
                <tr>
                  <th className="p-3">Role Name</th>
                  <th className="p-3 text-center">Read Data</th>
                  <th className="p-3 text-center">Write / Edit</th>
                  <th className="p-3 text-center">Delete Items</th>
                  <th className="p-3 text-center">Admin Rights</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-app">
                {rolesState.map((r, i) => (
                  <tr key={r.role} className="hover:bg-app-hover/50">
                    <td className="p-3 font-semibold text-app-primary">{r.role}</td>
                    <td className="p-3 text-center">
                      <input type="checkbox" checked={r.read} onChange={() => togglePermission(i, 'read')} className="rounded cursor-pointer" />
                    </td>
                    <td className="p-3 text-center">
                      <input type="checkbox" checked={r.write} onChange={() => togglePermission(i, 'write')} className="rounded cursor-pointer" />
                    </td>
                    <td className="p-3 text-center">
                      <input type="checkbox" checked={r.delete} onChange={() => togglePermission(i, 'delete')} className="rounded cursor-pointer" />
                    </td>
                    <td className="p-3 text-center">
                      <input type="checkbox" checked={r.admin} onChange={() => togglePermission(i, 'admin')} className="rounded cursor-pointer" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      )}

      {/* SUBPAGE 5: CAPACITY & WORKLOAD */}
      {subPage === 'workload' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card title="Team Capacity vs Allocated Hours">
              <div className="h-72 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={workloadData}>
                    <XAxis dataKey="name" stroke="var(--text-muted)" fontSize={12} />
                    <YAxis stroke="var(--text-muted)" fontSize={12} />
                    <Tooltip contentStyle={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-color)', color: 'var(--text-primary)' }} />
                    <Legend />
                    <Bar dataKey="capacity" fill="#3b82f6" name="Weekly Max Capacity (hrs)" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="allocated" fill="#f59e0b" name="Allocated Work (hrs)" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </Card>

            <Card title="Organization Engineering Skill Coverage Radar">
              <div className="h-72 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart cx="50%" cy="50%" outerRadius="80%" data={skillMatrixData}>
                    <PolarGrid stroke="var(--border-color)" />
                    <PolarAngleAxis dataKey="skill" stroke="var(--text-primary)" fontSize={12} />
                    <PolarRadiusAxis stroke="var(--text-muted)" />
                    <Radar name="Expertise Level %" dataKey="score" stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={0.4} />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </Card>
          </div>

          <Card title="Resource Utilization Efficiency Index">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-app-secondary/50 text-app-muted font-bold uppercase tracking-wider">
                  <tr>
                    <th className="p-3">Engineer</th>
                    <th className="p-3">Allocated Hours</th>
                    <th className="p-3">Max Capacity</th>
                    <th className="p-3">Utilization Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-app font-mono">
                  {workloadData.map(w => (
                    <tr key={w.name} className="hover:bg-app-hover/50">
                      <td className="p-3 font-semibold text-app-primary">{w.name}</td>
                      <td className="p-3 text-blue-400">{w.allocated} hrs</td>
                      <td className="p-3 text-app-muted">{w.capacity} hrs</td>
                      <td className="p-3">
                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                          w.allocated > w.capacity ? 'bg-red-500/20 text-red-400' : 'bg-emerald-500/20 text-emerald-400'
                        }`}>
                          {w.allocated > w.capacity ? 'OVERALLOCATED' : 'BALANCED'} ({w.efficiency}%)
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      )}

      {/* Add Team Member Modal */}
      <Modal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        title="Add New Team Member"
        size="md"
        footer={
          <>
            <Button variant="secondary" onClick={() => setIsAddModalOpen(false)}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleAddMemberSubmit}>
              Add Member
            </Button>
          </>
        }
      >
        <form onSubmit={handleAddMemberSubmit} className="space-y-4 text-xs">
          <div>
            <label className="block font-semibold text-app-primary mb-1">Full Name *</label>
            <input
              type="text"
              required
              value={memberName}
              onChange={e => setMemberName(e.target.value)}
              placeholder="e.g. Jordan Miller"
              className="w-full px-3 py-2 rounded-xl bg-app-secondary border border-app text-app-primary focus:outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block font-semibold text-app-primary mb-1">Email Address</label>
            <input
              type="email"
              value={memberEmail}
              onChange={e => setMemberEmail(e.target.value)}
              placeholder="e.g. jordan.m@corevista.io"
              className="w-full px-3 py-2 rounded-xl bg-app-secondary border border-app text-app-primary focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold text-app-primary mb-1">Role</label>
              <select
                value={memberRole}
                onChange={e => setMemberRole(e.target.value as UserRole)}
                className="w-full px-3 py-2 rounded-xl bg-app-secondary border border-app text-app-primary focus:outline-none"
              >
                <option value="Senior Engineer">Senior Engineer</option>
                <option value="Lead Developer">Lead Developer</option>
                <option value="Project Manager">Project Manager</option>
                <option value="UI/UX Designer">UI/UX Designer</option>
                <option value="DevOps Specialist">DevOps Specialist</option>
              </select>
            </div>

            <div>
              <label className="block font-semibold text-app-primary mb-1">Department</label>
              <select
                value={memberDepartment}
                onChange={e => setMemberDepartment(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-app-secondary border border-app text-app-primary focus:outline-none"
              >
                <option value="Software Engineering">Software Engineering</option>
                <option value="Product Management">Product Management</option>
                <option value="UI/UX Design">UI/UX Design</option>
                <option value="Executive Leadership">Executive Leadership</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block font-semibold text-app-primary mb-1">Hourly Billing Rate ($ USD)</label>
            <input
              type="number"
              value={memberHourlyRate}
              onChange={e => setMemberHourlyRate(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-app-secondary border border-app text-app-primary focus:outline-none focus:border-blue-500"
            />
          </div>
        </form>
      </Modal>
    </div>
  );
};


