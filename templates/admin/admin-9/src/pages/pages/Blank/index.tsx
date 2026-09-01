import React, { useState } from 'react';
import { Card } from '../../../components/ui/Card';
import { Button } from '../../../components/ui/Button';
import { PageHeader } from '../../../components/common';

export default function BlankPage() {
  const [style, setStyle] = useState<'minimal' | 'centered' | 'empty'>('centered');

  return (
    <div className="space-y-6 select-none">
      <PageHeader 
        title="Canvas Layouts" 
        subtitle="Toggle canvas variations to verify workspace visual settings."
        actions={
          <div className="flex gap-1 bg-card p-1 border border-border rounded-lg text-xs font-semibold">
            {(['centered', 'minimal', 'empty'] as const).map((s) => (
              <button 
                key={s} 
                onClick={() => setStyle(s)} 
                className={`px-2.5 py-1.5 rounded capitalize cursor-pointer ${style === s ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:bg-accent'}`}
              >
                {s} view
              </button>
            ))}
          </div>
        }
      />

      {style === 'centered' && (
        <div className="flex flex-col items-center justify-center p-12 text-center max-w-sm mx-auto border border-border bg-card rounded-2xl shadow-sm h-64">
          <h3 className="text-sm font-bold text-foreground">Centered Canvas</h3>
          <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
            Content block aligned perfectly to center margins. Designed for utility pages.
          </p>
        </div>
      )}

      {style === 'minimal' && (
        <Card title="Minimal Canvas" subtitle="No side margins.">
          <p className="text-xs text-muted-foreground">
            Basic content layout screen without decorative components.
          </p>
        </Card>
      )}

      {style === 'empty' && (
        <div className="h-64 border-2 border-dashed border-border/80 rounded-2xl flex items-center justify-center text-muted-foreground text-xs font-semibold">
          Empty Whiteboard Workspace
        </div>
      )}
    </div>
  );
}
