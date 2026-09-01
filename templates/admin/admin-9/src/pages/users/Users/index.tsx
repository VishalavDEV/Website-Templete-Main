/* src/pages/users/Users/index.tsx */
import React, { useState } from 'react';
import { Card } from '../../../components/ui/Card';
import { Avatar } from '../../../components/ui/Avatar';
import { Button } from '../../../components/ui/Button';
import { Badge } from '../../../components/ui/Badge';
import { DataTable } from '../../../components/tables';
import { PageHeader } from '../../../components/common';
import { Search, Grid, List } from 'lucide-react';
import { useToast } from '../../../app/providers/ToastProvider';

export default function UsersPage() {
  const { toast } = useToast();
  const [layoutMode, setLayoutMode] = useState<'table' | 'cards'>('table');

  const mockUsers = [
    { id: 'u1', name: 'Diana Prince', email: 'diana@corp.com', role: 'Administrator', status: 'active' },
    { id: 'u2', name: 'Ethan Hunt', email: 'ethan@corp.com', role: 'Staging Manager', status: 'active' },
    { id: 'u3', name: 'Fiona Gallagher', email: 'fiona@corp.com', role: 'Auditor', status: 'suspended' }
  ];

  const columns = [
    { key: 'id', label: 'User ID', isSortable: true },
    { key: 'name', label: 'Username', isSortable: true, render: (row: any) => (
      <div className="flex items-center gap-2">
        <Avatar name={row.name} size="sm" isOnline={row.status === 'active'} />
        <span className="font-semibold text-foreground">{row.name}</span>
      </div>
    )},
    { key: 'email', label: 'Work Email Address', isSortable: true },
    { key: 'role', label: 'Designated Role', isSortable: true, render: (row: any) => <Badge variant="secondary">{row.role}</Badge> },
    { key: 'status', label: 'Status', isSortable: true, render: (row: any) => <Badge variant={row.status === 'active' ? 'success' : 'destructive'}>{row.status}</Badge> }
  ];

  return (
    <div className="space-y-6 select-none">
      <PageHeader 
        title="User Administration" 
        subtitle="Manage corporate directory staff, assign access permissions, and audit suspension protocols."
        actions={
          <div className="flex gap-1 border border-border bg-card p-1 rounded-lg">
            <button onClick={() => setLayoutMode('table')} className={`p-1.5 rounded cursor-pointer ${layoutMode === 'table' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:bg-accent'}`}><List className="h-4 w-4" /></button>
            <button onClick={() => setLayoutMode('cards')} className={`p-1.5 rounded cursor-pointer ${layoutMode === 'cards' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:bg-accent'}`}><Grid className="h-4 w-4" /></button>
          </div>
        }
      />

      {/* Search and Filters */}
      <div className="flex flex-wrap items-center justify-between gap-4 bg-card p-3.5 border border-border rounded-xl">
        <div className="relative w-full max-w-xs">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input type="search" placeholder="Search directory users..." className="w-full text-xs h-9 pl-9 pr-3 rounded-lg border border-border bg-muted/20 text-foreground focus:outline-none" />
        </div>
      </div>

      {layoutMode === 'table' ? (
        <Card title="Staff Members List" subtitle="Toggle checkboxes for bulk operations.">
          <DataTable 
            columns={columns as any} 
            data={mockUsers} 
            isSelectable 
            bulkActions={(selected: any[]) => (
              <Button 
                size="sm" 
                variant="destructive" 
                onClick={() => {
                  toast.error(`Suspended selected accounts: ${selected.map(u => u.name).join(', ')}`);
                }}
              >
                Suspend selected
              </Button>
            )}
          />
        </Card>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {mockUsers.map((user, i) => (
            <Card key={i}>
              <div className="flex flex-col items-center text-center p-4">
                <Avatar name={user.name} size="lg" isOnline={user.status === 'active'} />
                <h3 className="text-sm font-bold text-foreground mt-3">{user.name}</h3>
                <p className="text-[10px] text-muted-foreground mt-0.5">{user.email}</p>
                <div className="flex gap-1.5 mt-3">
                  <Badge variant="secondary">{user.role}</Badge>
                  <Badge variant={user.status === 'active' ? 'success' : 'destructive'}>{user.status}</Badge>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
