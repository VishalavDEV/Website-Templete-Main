import React from 'react';
import { Card } from '../../../components/ui/Card';
import { FileUpload } from '../../../components/ui/FileUpload';
import { useToast } from '../../../app/providers/ToastProvider';

export default function FileUploadFormsShowcase() {
  const { toast } = useToast();
  return (
    <div className="max-w-md mx-auto">
      <Card title="Drag & Drop File Upload Form" subtitle="Staged attachments preview helper.">
        <FileUpload onFileSelect={(f) => f && toast.success(`Selected: ${f.name} (${f.size})`)} />
      </Card>
    </div>
  );
}
