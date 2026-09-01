import React, { useState } from 'react';
import { Card } from '../../../components/ui/Card';
import { Button } from '../../../components/ui/Button';
import { Input } from '../../../components/ui/Input';
import { Select } from '../../../components/ui/Select';
import { Switch } from '../../../components/ui/Switch';
import { PageHeader } from '../../../components/common';
import { useToast } from '../../../app/providers/ToastProvider';

export default function SettingsPage() {
  const { toast } = useToast();
  const [panel, setPanel] = useState<'general' | 'appearance' | 'integrations'>('general');

  const [appearance, setAppearance] = useState({ theme: 'periwinkle', density: 'spacious' });
  const [integrations, setIntegrations] = useState({ slack: true, github: false });

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Settings synchronized successfully!');
  };

  return (
    <div className="space-y-6 select-none">
      <PageHeader title="Global Catalog Settings" subtitle="Configure appearance settings, database integrations, and workforce settings." />

      <div className="grid gap-6 lg:grid-cols-4">
        {/* Left tabs menu */}
        <div className="bg-card border border-border rounded-xl p-3 flex flex-col gap-1 shadow-sm h-fit">
          {([
            { key: 'general', label: 'General & Core Settings' },
            { key: 'appearance', label: 'Appearance & Themes' },
            { key: 'integrations', label: 'API Integrations' }
          ] as const).map((p) => (
            <button 
              key={p.key}
              onClick={() => setPanel(p.key)}
              className={`w-full text-left px-3 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                panel === p.key ? 'bg-primary text-primary-foreground font-bold' : 'text-muted-foreground hover:bg-accent/40'
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>

        {/* Setting Panel Content */}
        <div className="lg:col-span-3">
          <form onSubmit={handleSave}>
            {panel === 'general' && (
              <Card title="General Core Configurations" subtitle="Basic parameters.">
                <div className="space-y-4">
                  <div>
                    <label className="text-xs font-bold text-muted-foreground block mb-1">Company Entity Domain</label>
                    <Input placeholder="https://catalog-api.corporation.com" />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-muted-foreground block mb-1">Staging Fallback URL</label>
                    <Input placeholder="https://fallback.corporation.com" />
                  </div>
                  <Button variant="primary" size="sm" type="submit">Save General Settings</Button>
                </div>
              </Card>
            )}

            {panel === 'appearance' && (
              <Card title="Theme & Font Density Settings" subtitle="Appearance customization.">
                <div className="space-y-4">
                  <div>
                    <label className="text-xs font-bold text-muted-foreground block mb-1">Active Design Theme</label>
                    <Select
                      options={[
                        { label: 'Pastel Periwinkle (Gradient Match)', value: 'periwinkle' },
                        { label: 'Deep Indigo Dark', value: 'indigo' },
                        { label: 'Neutral Gray System', value: 'neutral' }
                      ]}
                      value={appearance.theme}
                      onChange={(v) => setAppearance({ ...appearance, theme: v })}
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-muted-foreground block mb-1">Layout Density Scale</label>
                    <Select
                      options={[
                        { label: 'Dense padding spacing', value: 'dense' },
                        { label: 'Spacious padding layout', value: 'spacious' }
                      ]}
                      value={appearance.density}
                      onChange={(v) => setAppearance({ ...appearance, density: v })}
                    />
                  </div>

                  <Button variant="primary" size="sm" type="submit">Apply Appearance Theme</Button>
                </div>
              </Card>
            )}

            {panel === 'integrations' && (
              <Card title="API & Webhook Integrations" subtitle="Third-party credentials syncing.">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 border border-border bg-muted/10 rounded-xl">
                    <div>
                      <h4 className="text-xs font-bold">Slack Notifications Webhook</h4>
                      <p className="text-[10px] text-muted-foreground mt-0.5">Send alerts on billing changes.</p>
                    </div>
                    <Switch checked={integrations.slack} onChange={(e) => setIntegrations({ ...integrations, slack: e.target.checked })} />
                  </div>

                  <div className="flex items-center justify-between p-3 border border-border bg-muted/10 rounded-xl">
                    <div>
                      <h4 className="text-xs font-bold">GitHub Staging Deployments Webhook</h4>
                      <p className="text-[10px] text-muted-foreground mt-0.5">Deploy code builds automatically.</p>
                    </div>
                    <Switch checked={integrations.github} onChange={(e) => setIntegrations({ ...integrations, github: e.target.checked })} />
                  </div>

                  <Button variant="primary" size="sm" type="submit">Sync API Webhooks</Button>
                </div>
              </Card>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
