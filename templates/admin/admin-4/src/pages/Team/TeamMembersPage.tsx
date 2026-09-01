import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { useNavigate, useParams } from 'react-router-dom';
import { Card } from '../../components/Common/Card';
import { Button } from '../../components/Common/Button';
import { Badge } from '../../components/Common/Badge';
import { Avatar } from '../../components/Common/Avatar';
import { Modal } from '../../components/Common/Modal';
import { User, UserRole } from '../../types';
import { Users, Plus, Mail, Phone, Shield, ArrowUpRight, Search } from 'lucide-react';

export const TeamMembersPage: React.FC = () => {
  const { users, addUser, projects, tasks } = useApp();
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState<UserRole>('Team Member');
  const [departmentName, setDepartmentName] = useState('Software Engineering');
  const [hourlyRate, setHourlyRate] = useState('95');
  const [skills, setSkills] = useState('React, TypeScript, Node.js');

  const filteredUsers = users.filter(
    u => u.name.toLowerCase().includes(searchQuery.toLowerCase()) || u.role.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    addUser({
      name: name.trim(),
      email: email.trim(),
      avatar: `https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150`,
      role,
      departmentId: 'd-3',
      departmentName,
      status: 'Active',
      availabilityHoursPerWeek: 40,
      hourlyRate: parseFloat(hourlyRate) || 90,
      skills: skills.split(',').map(s => s.trim()).filter(Boolean)
    });

    setIsModalOpen(false);
    setName('');
    setEmail('');
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-bold text-app-primary">Team Directory & Personnel</h1>
          <p className="text-xs text-app-secondary mt-0.5">
            Manage engineering talent, roles, hourly billing rates, and project assignments.
          </p>
        </div>
        <Button variant="primary" size="sm" icon={<Plus className="w-4 h-4" />} onClick={() => setIsModalOpen(true)}>
          Invite Team Member
        </Button>
      </div>

      <div className="flex items-center gap-3 bg-app-surface p-4 border border-app rounded-2xl">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-app-muted absolute left-3 top-3" />
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Search by team member name or role..."
            className="w-full pl-9 pr-4 py-2 rounded-xl bg-app-secondary border border-app text-xs text-app-primary focus:outline-none"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredUsers.map(u => {
          const memberTasks = tasks.filter(t => t.assigneeId === u.id);
          const memberProjects = projects.filter(p => p.teamMemberIds.includes(u.id) || p.projectManagerId === u.id);
          return (
            <Card key={u.id} className="space-y-4 hover:border-blue-500/40 transition-all">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <Avatar src={u.avatar} name={u.name} size="lg" status={u.status} />
                  <div>
                    <h3
                      onClick={() => navigate(`/team/${u.id}`)}
                      className="text-base font-bold text-app-primary hover:text-blue-400 cursor-pointer"
                    >
                      {u.name}
                    </h3>
                    <p className="text-xs text-app-secondary">{u.role}</p>
                    <Badge variant="purple" size="sm" className="mt-1">{u.departmentName}</Badge>
                  </div>
                </div>
              </div>

              <div className="space-y-2 pt-3 border-t border-app text-xs text-app-secondary">
                <div className="flex items-center justify-between">
                  <span>Email:</span>
                  <span className="font-semibold text-app-primary truncate max-w-[180px]">{u.email}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Hourly Rate:</span>
                  <span className="font-semibold text-emerald-400">${u.hourlyRate}/hr</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Active Tasks:</span>
                  <span className="font-semibold text-app-primary">{memberTasks.length} assigned</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-1 pt-2">
                {u.skills.slice(0, 4).map(s => (
                  <span key={s} className="px-2 py-0.5 rounded bg-app-secondary border border-app text-[10px] text-app-muted">
                    {s}
                  </span>
                ))}
              </div>

              <div className="pt-3 border-t border-app">
                <Button variant="outline" size="sm" className="w-full" onClick={() => navigate(`/team/${u.id}`)}>
                  View Profile & Workload
                </Button>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Invite Member Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Invite New Team Member"
        size="md"
        footer={
          <>
            <Button variant="secondary" onClick={() => setIsModalOpen(false)}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleSubmit}>
              Send Invite
            </Button>
          </>
        }
      >
        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          <div>
            <label className="block font-semibold text-app-primary mb-1">Full Name *</label>
            <input
              type="text"
              required
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="e.g. Liam O'Connor"
              className="w-full px-3.5 py-2 rounded-xl bg-app-secondary border border-app text-sm text-app-primary focus:outline-none"
            />
          </div>
          <div>
            <label className="block font-semibold text-app-primary mb-1">Email Address *</label>
            <input
              type="email"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="liam@corevista.io"
              className="w-full px-3.5 py-2 rounded-xl bg-app-secondary border border-app text-sm text-app-primary focus:outline-none"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold text-app-primary mb-1">Role</label>
              <select
                value={role}
                onChange={e => setRole(e.target.value as UserRole)}
                className="w-full px-3 py-2 rounded-xl bg-app-secondary border border-app text-sm text-app-primary focus:outline-none"
              >
                <option value="Admin">Admin</option>
                <option value="Project Manager">Project Manager</option>
                <option value="Team Lead">Team Lead</option>
                <option value="Team Member">Team Member</option>
              </select>
            </div>
            <div>
              <label className="block font-semibold text-app-primary mb-1">Hourly Rate ($)</label>
              <input
                type="number"
                value={hourlyRate}
                onChange={e => setHourlyRate(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-app-secondary border border-app text-sm text-app-primary focus:outline-none"
              />
            </div>
          </div>
          <div>
            <label className="block font-semibold text-app-primary mb-1">Skills (Comma Separated)</label>
            <input
              type="text"
              value={skills}
              onChange={e => setSkills(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-app-secondary border border-app text-sm text-app-primary focus:outline-none"
            />
          </div>
        </form>
      </Modal>
    </div>
  );
};

export const MemberDetailsPage: React.FC = () => {
  const { memberId } = useParams<{ memberId: string }>();
  const { users, tasks, projects, timeEntries } = useApp();
  const navigate = useNavigate();

  const user = users.find(u => u.id === memberId) || users[0];

  if (!user) return <div className="p-8 text-center text-app-muted">Member not found.</div>;

  const memberTasks = tasks.filter(t => t.assigneeId === user.id);
  const memberTimeEntries = timeEntries.filter(te => te.userId === user.id);
  const totalHoursLogged = memberTimeEntries.reduce((acc, te) => acc + te.hours, 0);

  return (
    <div className="space-y-6">
      <Button variant="outline" size="sm" onClick={() => navigate('/team')}>
        Back to Team
      </Button>

      <div className="bg-app-surface border border-app rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <Avatar src={user.avatar} name={user.name} size="xl" status={user.status} />
          <div>
            <h1 className="text-xl font-bold text-app-primary">{user.name}</h1>
            <p className="text-xs text-app-secondary">{user.role} • {user.departmentName}</p>
            <p className="text-xs text-app-muted mt-1">{user.bio}</p>
          </div>
        </div>
        <div className="flex items-center gap-4 text-xs">
          <div className="text-center p-3 rounded-xl bg-app-secondary border border-app">
            <span className="text-app-muted block">Rate</span>
            <span className="font-bold text-emerald-400">${user.hourlyRate}/hr</span>
          </div>
          <div className="text-center p-3 rounded-xl bg-app-secondary border border-app">
            <span className="text-app-muted block">Hours Logged</span>
            <span className="font-bold text-blue-400">{totalHoursLogged} hrs</span>
          </div>
        </div>
      </div>

      <Card title={`Assigned Tasks (${memberTasks.length})`}>
        <div className="space-y-2 text-xs">
          {memberTasks.map(t => (
            <div key={t.id} className="flex items-center justify-between p-3 rounded-xl bg-app-secondary/40 border border-app">
              <span className="font-semibold text-app-primary">{t.title}</span>
              <Badge variant={t.status === 'Completed' ? 'completed' : 'in_progress'}>{t.status}</Badge>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};
