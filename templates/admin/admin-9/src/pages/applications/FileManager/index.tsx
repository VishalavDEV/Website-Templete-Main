import React, { useState } from 'react';
import { Card } from '../../../components/ui/Card';
import { Button } from '../../../components/ui/Button';
import { Badge } from '../../../components/ui/Badge';
import { FileUpload } from '../../../components/ui/FileUpload';
import { PageHeader } from '../../../components/common';
import { FileText, Folder, MoreVertical, HardDrive, ShieldAlert, Share2 } from 'lucide-react';
import { useToast } from '../../../app/providers/ToastProvider';

export default function FileManagerPage() {
  const { toast } = useToast();

  const files = [
    { name: 'backup_system_config.zip', size: '4.2 MB', date: '2026-08-19' },
    { name: 'invoice_Q3_2026.pdf', size: '1.4 MB', date: '2026-08-18' },
    { name: 'staging_keys_RSA.pem', size: '2.8 KB', date: '2026-08-17' }
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-6 select-none">
      {/* File sidebar Storage details */}
      <div className="w-full lg:w-64 space-y-6 shrink-0">
        <Card title="Storage Utilization">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <HardDrive className="h-6 w-6 text-primary" />
              <div className="flex-1 min-w-0">
                <p className="text-xs font-bold">14.8 GB of 100 GB</p>
                <div className="w-full bg-muted h-2 rounded-full overflow-hidden mt-1">
                  <div className="bg-primary h-full rounded-full" style={{ width: '15%' }}></div>
                </div>
              </div>
            </div>
            <p className="text-[10px] text-muted-foreground font-semibold">15% utilization ratio.</p>
          </div>
        </Card>
        
        {/* Upload drag-drop widget */}
        <Card title="Upload Attachment">
          <FileUpload />
        </Card>
      </div>

      {/* Main Files Grid */}
      <div className="flex-1 space-y-6">
        <div className="grid gap-4 sm:grid-cols-3">
          {['Active Backups', 'Client Invoices', 'SSL Credentials'].map((dir, i) => (
            <div key={i} className="flex items-center gap-3 p-4 border border-border bg-card rounded-xl shadow-sm hover:border-primary/40 transition-colors cursor-pointer">
              <Folder className="h-6 w-6 text-primary" />
              <div>
                <p className="text-xs font-bold">{dir}</p>
                <p className="text-[9px] text-muted-foreground font-semibold">3 items staged</p>
              </div>
            </div>
          ))}
        </div>

        {/* Files list */}
        <Card title="Recent Files" subtitle="Authorized backups and invoice records.">
          <div className="space-y-2.5">
            {files.map((file, i) => (
              <div key={i} className="flex items-center justify-between p-3 border border-border/80 bg-muted/10 rounded-xl hover:bg-muted/30 transition-colors">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="h-9 w-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <FileText className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-bold text-foreground truncate">{file.name}</p>
                    <p className="text-[9px] text-muted-foreground font-semibold mt-0.5">{file.size} • {file.date}</p>
                  </div>
                </div>
                
                <div className="flex gap-1 shrink-0">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="h-7 px-2 text-[10px]" 
                    leftIcon={<Share2 className="h-3.5 w-3.5" />}
                    onClick={() => toast.success('Share link generated!')}
                  >
                    Share
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
