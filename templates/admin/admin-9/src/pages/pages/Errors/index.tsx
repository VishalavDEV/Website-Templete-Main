import React, { useState } from 'react';
import { Card } from '../../../components/ui/Card';
import { Button } from '../../../components/ui/Button';
import { Badge } from '../../../components/ui/Badge';
import { PageHeader } from '../../../components/common';
import { ShieldAlert, AlertCircle, ServerCrash } from 'lucide-react';

export default function ErrorsPage() {
  const [errorType, setErrorType] = useState<'404' | '503' | 'maintenance'>('404');

  return (
    <div className="space-y-6 select-none max-w-2xl mx-auto">
      <PageHeader 
        title="Diagnostic Errors Workspace" 
        subtitle="Toggle custom system error banners to preview visual fallbacks."
        actions={
          <div className="flex gap-1 bg-card border border-border rounded-lg p-1 text-xs font-semibold">
            {(['404', '503', 'maintenance'] as const).map((err) => (
              <button 
                key={err} 
                onClick={() => setErrorType(err)} 
                className={`px-2.5 py-1.5 rounded capitalize cursor-pointer ${errorType === err ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:bg-accent'}`}
              >
                {err === 'maintenance' ? 'Maintenance' : err}
              </button>
            ))}
          </div>
        }
      />

      {errorType === '404' && (
        <div className="flex flex-col items-center justify-center p-8 border border-border bg-card rounded-2xl shadow-sm text-center min-h-[300px]">
          <div className="h-14 w-14 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
            <AlertCircle className="h-7 w-7" />
          </div>
          <h2 className="text-3xl font-black tracking-tight text-foreground">404</h2>
          <h3 className="text-xs font-extrabold uppercase text-muted-foreground mt-1">Resource Not Found</h3>
          <p className="text-xs text-muted-foreground mt-3 max-w-xs leading-relaxed">
            The database coordinate or index page requested could not be resolved.
          </p>
          <Button variant="primary" size="sm" className="mt-6" onClick={() => setErrorType('503')}>Jump to 503 View</Button>
        </div>
      )}

      {errorType === '503' && (
        <div className="flex flex-col items-center justify-center p-8 border border-border bg-card rounded-2xl shadow-sm text-center min-h-[300px]">
          <div className="h-14 w-14 rounded-full bg-destructive/10 text-destructive flex items-center justify-center mb-4">
            <ServerCrash className="h-7 w-7" />
          </div>
          <h2 className="text-3xl font-black tracking-tight text-foreground">503</h2>
          <h3 className="text-xs font-extrabold uppercase text-muted-foreground mt-1">Service Unavailable</h3>
          <p className="text-xs text-muted-foreground mt-3 max-w-xs leading-relaxed">
            Staging clusters database nodes are temporarily overloaded.
          </p>
        </div>
      )}

      {errorType === 'maintenance' && (
        <div className="flex flex-col items-center justify-center p-8 border border-border bg-card rounded-2xl shadow-sm text-center min-h-[300px]">
          <div className="h-14 w-14 rounded-full bg-warning/10 text-warning flex items-center justify-center mb-4">
            <ShieldAlert className="h-7 w-7" />
          </div>
          <h2 className="text-lg font-bold text-foreground">Scheduled Maintenance</h2>
          <p className="text-xs text-muted-foreground mt-2 max-w-xs leading-relaxed">
            We are updating core API Webhooks index layers. Expect database synchronization caches to be offline.
          </p>
          
          {/* Progress loader bar */}
          <div className="w-64 bg-muted h-2 rounded-full overflow-hidden mt-6">
            <div className="bg-warning h-full rounded-full animate-pulse" style={{ width: '65%' }}></div>
          </div>
          <span className="text-[9px] text-muted-foreground mt-1.5 font-bold uppercase tracking-wider">Updating (65% complete)</span>
        </div>
      )}
    </div>
  );
}
