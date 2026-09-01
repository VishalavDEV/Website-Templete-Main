import React from 'react';
import { useApp } from '../../context/AppContext';
import { Card } from '../../components/Common/Card';
import { Badge } from '../../components/Common/Badge';
import { Avatar } from '../../components/Common/Avatar';
import { CheckSquare, Clock, AlertTriangle } from 'lucide-react';

export const WorkloadPage: React.FC = () => {
  const { users, tasks, timeEntries } = useApp();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-bold text-app-primary">Team Workload & Capacity Utilization</h1>
        <p className="text-xs text-app-secondary mt-0.5">
          Monitor individual developer task loads, weekly hours, and prevent burn-out bottlenecks.
        </p>
      </div>

      <div className="space-y-4">
        {users.map(u => {
          const userTasks = tasks.filter(t => t.assigneeId === u.id);
          const pendingTasks = userTasks.filter(t => t.status !== 'Completed');
          const estHours = userTasks.reduce((acc, t) => acc + t.estimatedHours, 0);
          const utilizationPct = Math.min(100, Math.round((estHours / 40) * 100));

          const isOverloaded = utilizationPct > 85;

          return (
            <Card key={u.id}>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <Avatar src={u.avatar} name={u.name} size="md" status={u.status} />
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-sm font-bold text-app-primary">{u.name}</h3>
                      <Badge variant="purple" size="sm">{u.role}</Badge>
                      {isOverloaded && (
                        <Badge variant="urgent" size="sm" dot>Over Capacity</Badge>
                      )}
                    </div>
                    <p className="text-xs text-app-secondary mt-0.5">
                      {pendingTasks.length} pending tasks • {estHours} estimated hours assigned
                    </p>
                  </div>
                </div>

                <div className="w-full md:w-64 space-y-1">
                  <div className="flex justify-between text-xs font-semibold">
                    <span className="text-app-secondary">Weekly Capacity</span>
                    <span className={isOverloaded ? 'text-rose-400 font-bold' : 'text-emerald-400'}>
                      {utilizationPct}% ({estHours}/40h)
                    </span>
                  </div>
                  <div className="w-full h-2.5 rounded-full bg-app-secondary overflow-hidden">
                    <div
                      className={`h-full rounded-full ${isOverloaded ? 'bg-rose-500' : 'bg-blue-500'}`}
                      style={{ width: `${utilizationPct}%` }}
                    />
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
