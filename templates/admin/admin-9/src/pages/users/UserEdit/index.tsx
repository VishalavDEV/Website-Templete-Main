import React, { useState } from 'react';
import { Card } from '../../../components/ui/Card';
import { Button } from '../../../components/ui/Button';
import { Input } from '../../../components/ui/Input';
import { Switch } from '../../../components/ui/Switch';
import { PageHeader } from '../../../components/common';
import { useToast } from '../../../app/providers/ToastProvider';

export default function UserEditPage() {
  const { toast } = useToast();
  const [activePanel, setActivePanel] = useState<'profile' | 'security' | 'preferences'>('profile');
  
  const [profile, setProfile] = useState({ name: 'Diana Prince', email: 'diana@corp.com', office: 'London HQ' });
  const [pref, setPref] = useState({ darkTheme: true, emailAlerts: true });

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Successfully modified configuration preferences!');
  };

  return (
    <div className="space-y-6 select-none">
      <PageHeader title="Modify Profile Settings" subtitle="Configure personal database fields, layout preferences, and SSH authentication keys." />

      <div className="grid gap-6 lg:grid-cols-4">
        {/* Left side settings menu links */}
        <div className="bg-card border border-border rounded-xl p-3 flex flex-col gap-1 shadow-sm h-fit">
          {([
            { key: 'profile', label: 'Profile Information' },
            { key: 'security', label: 'Security & 2FA' },
            { key: 'preferences', label: 'Display Preferences' }
          ] as const).map((p) => (
            <button 
              key={p.key}
              onClick={() => setActivePanel(p.key)}
              className={`w-full text-left px-3 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                activePanel === p.key ? 'bg-primary text-primary-foreground font-bold' : 'text-muted-foreground hover:bg-accent/40'
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>

        {/* Content panel */}
        <div className="lg:col-span-3">
          <form onSubmit={handleSave}>
            {activePanel === 'profile' && (
              <Card title="Edit profile details" subtitle="Fill in corporate contact records.">
                <div className="space-y-4">
                  <div>
                    <label className="text-xs font-bold text-muted-foreground block mb-1">Full Username</label>
                    <Input value={profile.name} onChange={(e) => setProfile({ ...profile, name: e.target.value })} />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-muted-foreground block mb-1">Work Email</label>
                    <Input type="email" value={profile.email} onChange={(e) => setProfile({ ...profile, email: e.target.value })} />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-muted-foreground block mb-1">Assigned HQ Office</label>
                    <Input value={profile.office} onChange={(e) => setProfile({ ...profile, office: e.target.value })} />
                  </div>
                  <div className="pt-2">
                    <Button variant="primary" size="sm" type="submit">Save Changes</Button>
                  </div>
                </div>
              </Card>
            )}

            {activePanel === 'security' && (
              <Card title="Security & MFA settings" subtitle="Authenticate SSH login certificates.">
                <div className="space-y-4">
                  <div>
                    <label className="text-xs font-bold text-muted-foreground block mb-1">New Account Password</label>
                    <Input type="password" placeholder="••••••••••••••" />
                  </div>
                  <div className="flex items-center justify-between p-3 border border-border bg-muted/10 rounded-xl">
                    <div>
                      <h4 className="text-xs font-bold">Two-Factor Authentication</h4>
                      <p className="text-[10px] text-muted-foreground mt-0.5">Require an MFA token on developer portal login.</p>
                    </div>
                    <Switch checked={true} onChange={() => {}} />
                  </div>
                  <div className="pt-2">
                    <Button variant="primary" size="sm" type="submit">Verify Credentials</Button>
                  </div>
                </div>
              </Card>
            )}

            {activePanel === 'preferences' && (
              <Card title="Layout Preferences" subtitle="Appearance parameters.">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-xs font-bold">Enable Dark Theme</h4>
                      <p className="text-[10px] text-muted-foreground">Switch typography backgrounds to dark indigo.</p>
                    </div>
                    <Switch checked={pref.darkTheme} onChange={(e) => setPref({ ...pref, darkTheme: e.target.checked })} />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-xs font-bold">Email Notifications</h4>
                      <p className="text-[10px] text-muted-foreground">Receive logs regarding staging synclist operations.</p>
                    </div>
                    <Switch checked={pref.emailAlerts} onChange={(e) => setPref({ ...pref, emailAlerts: e.target.checked })} />
                  </div>
                  <div className="pt-2">
                    <Button variant="primary" size="sm" type="submit">Save Preferences</Button>
                  </div>
                </div>
              </Card>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
