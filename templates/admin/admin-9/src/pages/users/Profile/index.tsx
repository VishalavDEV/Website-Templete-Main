import React, { useState } from 'react';
import { Card } from '../../../components/ui/Card';
import { Avatar } from '../../../components/ui/Avatar';
import { Badge } from '../../../components/ui/Badge';
import { PageHeader } from '../../../components/common';
import { Globe, ShieldAlert, Mail } from 'lucide-react';

export default function ProfilePage() {
  const [tab, setTab] = useState<'info' | 'activity'>('info');

  return (
    <div className="space-y-6 select-none">
      {/* Cover Canvas banner & profile header */}
      <div className="relative bg-gradient-to-r from-primary/30 to-secondary/30 h-36 rounded-2xl border border-border/80 flex items-end p-6">
        <div className="absolute -bottom-10 left-6">
          <Avatar name="Jane Doe" size="lg" isOnline />
        </div>
      </div>

      <div className="pt-8 flex flex-col sm:flex-row items-center sm:items-end justify-between gap-4">
        <div className="text-center sm:text-left">
          <h2 className="text-lg font-bold text-foreground">Jane Doe</h2>
          <p className="text-xs text-muted-foreground mt-0.5">Developer Evangelist • jane@corporation.com</p>
        </div>
        <div className="flex gap-2 shrink-0">
          <a href="https://github.com" target="_blank" className="p-2 border border-border hover:bg-accent rounded-lg text-muted-foreground hover:text-foreground transition-colors"><Globe className="h-4 w-4" /></a>
          <a href="https://linkedin.com" target="_blank" className="p-2 border border-border hover:bg-accent rounded-lg text-muted-foreground hover:text-foreground transition-colors"><ShieldAlert className="h-4 w-4" /></a>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-border/80 pb-0 gap-4 text-xs font-semibold mt-4">
        <button 
          onClick={() => setTab('info')}
          className={`pb-3 border-b-2 px-1 cursor-pointer ${tab === 'info' ? 'border-primary text-primary font-bold' : 'border-transparent text-muted-foreground'}`}
        >
          Social Information
        </button>
        <button 
          onClick={() => setTab('activity')}
          className={`pb-3 border-b-2 px-1 cursor-pointer ${tab === 'activity' ? 'border-primary text-primary font-bold' : 'border-transparent text-muted-foreground'}`}
        >
          Recent Activity
        </button>
      </div>

      {tab === 'info' ? (
        <div className="grid gap-6 md:grid-cols-2">
          <Card title="Work details" subtitle="Corporate information database.">
            <div className="space-y-3.5 text-xs">
              <div><span className="text-[10px] text-muted-foreground uppercase block font-bold">Assigned Department</span><strong>Engineering & Developer Advocacy</strong></div>
              <div><span className="text-[10px] text-muted-foreground uppercase block font-bold">Headquarters office</span><strong>San Francisco Branch, Building C</strong></div>
            </div>
          </Card>
          <Card title="Social Accounts Accounts" subtitle="Staged links.">
            <div className="space-y-3 text-xs">
              <div className="flex items-center gap-2"><Globe className="h-4 w-4 text-primary" /> <span>github.com/janedoe-corp</span></div>
              <div className="flex items-center gap-2"><ShieldAlert className="h-4 w-4 text-primary" /> <span>linkedin.com/in/jane-doe-advocate</span></div>
            </div>
          </Card>
        </div>
      ) : (
        <Card title="Developer Logs Trail" subtitle="Trace personal operations list.">
          <div className="space-y-3 text-xs text-muted-foreground">
            <p>• Synced search bar indices to elements index. (4 mins ago)</p>
            <p>• Modified appearance layout variables. (32 mins ago)</p>
            <p>• Authorized RSA SSH validation staging key. (1 hour ago)</p>
          </div>
        </Card>
      )}
    </div>
  );
}
