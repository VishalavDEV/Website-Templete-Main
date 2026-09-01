import React from 'react';
import { useApp } from '../../context/AppContext';
import { Card } from '../../components/Common/Card';
import { Badge } from '../../components/Common/Badge';
import { Avatar } from '../../components/Common/Avatar';
import { Users, Shield, Plus } from 'lucide-react';
import { Button } from '../../components/Common/Button';

export const TeamsPage: React.FC = () => {
  const { teams, users } = useApp();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-app-primary">Functional Teams</h1>
          <p className="text-xs text-app-secondary mt-0.5">Specialized engineering and design units.</p>
        </div>
        <Button variant="primary" size="sm" icon={<Plus className="w-4 h-4" />}>Create Team</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {teams.map(t => {
          const lead = users.find(u => u.id === t.leadId);
          const members = users.filter(u => t.memberIds.includes(u.id));
          return (
            <Card key={t.id} title={t.name} subtitle={t.description}>
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-app-muted">Team Lead:</span>
                  <div className="flex items-center gap-1.5">
                    <Avatar src={lead?.avatar} name={t.leadName} size="xs" />
                    <span className="font-semibold text-app-primary">{t.leadName}</span>
                  </div>
                </div>

                <div>
                  <span className="text-xs font-semibold text-app-muted block mb-2">Members ({members.length})</span>
                  <div className="flex items-center gap-2">
                    {members.map(m => (
                      <Avatar key={m.id} src={m.avatar} name={m.name} size="sm" />
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export const DepartmentsPage: React.FC = () => {
  const { departments } = useApp();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-app-primary">Company Departments</h1>
          <p className="text-xs text-app-secondary mt-0.5">Organizational hierarchy and leadership heads.</p>
        </div>
        <Button variant="primary" size="sm" icon={<Plus className="w-4 h-4" />}>New Department</Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {departments.map(d => (
          <Card key={d.id} title={d.name}>
            <div className="space-y-2 text-xs text-app-secondary">
              <div className="flex justify-between"><span>Department Head:</span> <strong className="text-app-primary">{d.headName}</strong></div>
              <div className="flex justify-between"><span>Total Personnel:</span> <strong className="text-app-primary">{d.membersCount} members</strong></div>
              <div className="flex justify-between"><span>Active Projects:</span> <strong className="text-blue-400">{d.projectsCount} projects</strong></div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export const RolesPermissionsPage: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-bold text-app-primary">Roles & RBAC Permissions</h1>
        <p className="text-xs text-app-secondary mt-0.5">Granular access control policies for workspace roles.</p>
      </div>

      <Card noPadding>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-app-primary">
            <thead className="bg-app-secondary/60 border-b border-app text-app-muted uppercase font-semibold">
              <tr>
                <th className="p-4">Role Title</th>
                <th className="p-4">Manage Projects</th>
                <th className="p-4">Manage Tasks</th>
                <th className="p-4">Manage Finances</th>
                <th className="p-4">View Reports</th>
                <th className="p-4">Settings Access</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-app">
              {[
                { role: 'Super Admin', proj: true, task: true, fin: true, rep: true, set: true },
                { role: 'Project Manager', proj: true, task: true, fin: true, rep: true, set: false },
                { role: 'Team Lead', proj: false, task: true, fin: false, rep: true, set: false },
                { role: 'Team Member', proj: false, task: true, fin: false, rep: false, set: false },
                { role: 'Client', proj: false, task: false, fin: false, rep: true, set: false }
              ].map(r => (
                <tr key={r.role} className="hover:bg-app-hover">
                  <td className="p-4 font-bold text-blue-400">{r.role}</td>
                  <td className="p-4">{r.proj ? '✅ Full' : '❌ None'}</td>
                  <td className="p-4">{r.task ? '✅ Full' : '❌ Read only'}</td>
                  <td className="p-4">{r.fin ? '✅ Full' : '❌ Restricted'}</td>
                  <td className="p-4">{r.rep ? '✅ Full' : '❌ Restricted'}</td>
                  <td className="p-4">{r.set ? '✅ Full' : '❌ Denied'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};
