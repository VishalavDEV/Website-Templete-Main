import React, { useState } from 'react';
import { Card } from '../../../components/ui/Card';
import { Badge } from '../../../components/ui/Badge';
import { Button } from '../../../components/ui/Button';
import { PageHeader } from '../../../components/common';
import { useToast } from '../../../app/providers/ToastProvider';
import { useGlobalModal } from '../../../app/providers/ModalProvider';
import { Plus, Check, ShieldAlert } from 'lucide-react';

export default function RolesPermissionsPage() {
  const { toast } = useToast();
  const { openModal, closeModal } = useGlobalModal();

  const [activeRole, setActiveRole] = useState<'admin' | 'staging' | 'viewer'>('admin');
  
  // Matrix permissions
  const [permissions, setPermissions] = useState({
    admin: { readBackups: true, writeStaging: true, revokeKeys: true, syncDB: true },
    staging: { readBackups: true, writeStaging: true, revokeKeys: false, syncDB: true },
    viewer: { readBackups: true, writeStaging: false, revokeKeys: false, syncDB: false }
  });

  const togglePerm = (key: 'readBackups' | 'writeStaging' | 'revokeKeys' | 'syncDB') => {
    const nextPerms = { ...permissions };
    nextPerms[activeRole][key] = !nextPerms[activeRole][key];
    setPermissions(nextPerms);
    toast.success('Matrix permission parameters toggled.');
  };

  const handleCreateRole = () => {
    openModal({
      title: 'Define Staging Role Schema',
      content: (
        <div className="space-y-4">
          <p className="text-xs text-muted-foreground">Initialize new access permission matrix template configuration settings.</p>
          <input type="text" placeholder="Role Label Name" className="w-full text-xs h-9 border border-border bg-background px-3 rounded-lg" id="roleLabel" />
        </div>
      ),
      footer: (
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={closeModal}>Cancel</Button>
          <Button variant="primary" size="sm" onClick={() => {
            const val = (document.getElementById('roleLabel') as HTMLInputElement).value;
            if (!val) return toast.error('Role Label is required.');
            toast.success(`Created role matrix template: ${val}`);
            closeModal();
          }}>Add Role Matrix</Button>
        </div>
      )
    });
  };

  return (
    <div className="space-y-6 select-none">
      <PageHeader 
        title="Access Control Matrices" 
        subtitle="Manage corporate directory group roles, configure permissions, and toggle access keys."
        actions={
          <Button variant="primary" size="sm" leftIcon={<Plus className="h-4 w-4" />} onClick={handleCreateRole}>
            Define Role
          </Button>
        }
      />

      <div className="grid gap-6 lg:grid-cols-4">
        {/* Role list sidebar selection */}
        <div className="bg-card border border-border rounded-xl p-3 flex flex-col gap-1 shadow-sm h-fit">
          {([
            { key: 'admin', label: 'Administrator Matrix' },
            { key: 'staging', label: 'Staging Manager Matrix' },
            { key: 'viewer', label: 'Database Viewer Matrix' }
          ] as const).map((r) => (
            <button 
              key={r.key}
              onClick={() => setActiveRole(r.key)}
              className={`w-full text-left px-3 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                activeRole === r.key ? 'bg-primary text-primary-foreground font-bold' : 'text-muted-foreground hover:bg-accent/40'
              }`}
            >
              {r.label}
            </button>
          ))}
        </div>

        {/* Permission matrix checklist grid */}
        <div className="lg:col-span-3">
          <Card title="Permission Configuration Matrix" subtitle={`Configure permissions for ${activeRole} role.`}>
            <div className="space-y-3.5 pt-2">
              {[
                { key: 'readBackups', title: 'Read Backup Archives', desc: 'Allows loading compressed archive keys.' },
                { key: 'writeStaging', title: 'Write Staging Builds', desc: 'Allows deploying staging builds.' },
                { key: 'revokeKeys', title: 'Revoke SSH Access Keys', desc: 'Allows deleting active credentials.' },
                { key: 'syncDB', title: 'Synchronize DB Clusters', desc: 'Allows running manual database sync tasks.' }
              ].map((perm) => (
                <label key={perm.key} className="flex items-start gap-4 p-3 border border-border/80 bg-muted/10 rounded-xl cursor-pointer hover:bg-muted/30 transition-colors">
                  <input 
                    type="checkbox" 
                    checked={(permissions[activeRole] as any)[perm.key]} 
                    onChange={() => togglePerm(perm.key as any)}
                    className="mt-1 accent-primary rounded cursor-pointer"
                  />
                  <div>
                    <h4 className="text-xs font-bold text-foreground">{perm.title}</h4>
                    <p className="text-[10px] text-muted-foreground mt-0.5">{perm.desc}</p>
                  </div>
                </label>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
