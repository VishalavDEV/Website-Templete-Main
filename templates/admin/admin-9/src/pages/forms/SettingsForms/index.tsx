import React, { useState } from 'react';
import { Card } from '../../../components/ui/Card';
import { Button } from '../../../components/ui/Button';
import { Input } from '../../../components/ui/Input';
import { Select } from '../../../components/ui/Select';
import { useToast } from '../../../app/providers/ToastProvider';

export default function SettingsFormsShowcase() {
  const { toast } = useToast();
  const [profile, setProfile] = useState({ name: 'Jane Doe', email: 'jane@company.com' });

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Staged preferences synchronized successfully!');
  };

  return (
    <div className="max-w-md mx-auto">
      <Card title="Account Settings Form" subtitle="Configure personal data fields.">
        <form onSubmit={handleSave} className="space-y-4">
          <div>
            <label className="text-xs font-bold text-muted-foreground block mb-1">Full Username</label>
            <Input value={profile.name} onChange={(e) => setProfile({ ...profile, name: e.target.value })} />
          </div>
          <div>
            <label className="text-xs font-bold text-muted-foreground block mb-1">Work Email</label>
            <Input type="email" value={profile.email} onChange={(e) => setProfile({ ...profile, email: e.target.value })} />
          </div>
          <Button variant="primary" size="sm" type="submit" className="w-full">Sync Settings</Button>
        </form>
      </Card>
    </div>
  );
}
