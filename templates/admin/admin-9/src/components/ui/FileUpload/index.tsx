import React, { useRef, useState } from 'react';
import { Upload, X, File } from 'lucide-react';
import { Button } from '../Button';

export function FileUpload({ onFileSelect }: { onFileSelect?: (file: File | null) => void }) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      setSelectedFile(file);
      onFileSelect?.(file);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedFile(file);
      onFileSelect?.(file);
    }
  };

  const clearFile = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedFile(null);
    onFileSelect?.(null);
  };

  return (
    <div 
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      onClick={() => fileInputRef.current?.click()}
      className="border-2 border-dashed border-border/80 rounded-xl p-6 text-center bg-muted/10 hover:bg-muted/20 transition-all cursor-pointer select-none"
    >
      <input type="file" className="hidden" ref={fileInputRef} onChange={handleFileChange} />
      {selectedFile ? (
        <div className="flex items-center justify-between p-3 border border-border bg-card rounded-lg max-w-sm mx-auto text-xs">
          <div className="flex items-center gap-2 overflow-hidden mr-3">
            <File className="h-4 w-4 text-primary shrink-0" />
            <span className="font-semibold text-foreground overflow-hidden text-ellipsis whitespace-nowrap">{selectedFile.name}</span>
          </div>
          <button onClick={clearFile} className="p-1 rounded hover:bg-accent text-muted-foreground">
            <X className="h-4.5 w-4.5" />
          </button>
        </div>
      ) : (
        <div className="space-y-2">
          <Upload className="h-8 w-8 text-muted-foreground mx-auto animate-pulse" />
          <div>
            <p className="text-xs font-semibold text-foreground">Click to upload or drag files here</p>
            <p className="text-[10px] text-muted-foreground/80 mt-1">PNG, JPG, PDF up to 10MB</p>
          </div>
        </div>
      )}
    </div>
  );
}
