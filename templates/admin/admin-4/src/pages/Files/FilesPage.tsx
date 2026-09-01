import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Card } from '../../components/Common/Card';
import { Button } from '../../components/Common/Button';
import { Modal } from '../../components/Common/Modal';
import { FileText, Download, Trash2, Plus, Search, Folder, Eye } from 'lucide-react';

export const FilesPage: React.FC = () => {
  const { files, addFile, deleteFile, projects, currentUser } = useApp();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFolder, setSelectedFolder] = useState<string>('All');

  // Upload simulation modal state
  const [isUploadOpen, setIsUploadOpen] = useState(false);
  const [fileName, setFileName] = useState('');
  const [folder, setFolder] = useState<'Design' | 'Documents' | 'Financials' | 'Source Code' | 'General'>('Documents');
  const [projectId, setProjectId] = useState(projects[0]?.id || 'p-1');

  // Preview modal state
  const [previewFile, setPreviewFile] = useState<any>(null);

  const filteredFiles = files.filter(f => {
    const matchesSearch = f.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFolder = selectedFolder === 'All' ? true : f.folder === selectedFolder;
    return matchesSearch && matchesFolder;
  });

  const handleUploadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fileName.trim()) return;

    const prj = projects.find(p => p.id === projectId);

    addFile({
      name: fileName.trim(),
      size: '2.4 MB',
      sizeBytes: 2516582,
      type: fileName.endsWith('.pdf') ? 'pdf' : fileName.endsWith('.fig') ? 'fig' : 'docx',
      projectId,
      projectName: prj ? prj.name : 'General Project',
      uploadedBy: currentUser.name,
      folder
    });

    setIsUploadOpen(false);
    setFileName('');
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-bold text-app-primary">File Vault & Workspace Attachments</h1>
          <p className="text-xs text-app-secondary mt-0.5">
            Central repository for design assets, specification documents, security audits, and source archives.
          </p>
        </div>
        <Button variant="primary" size="sm" icon={<Plus className="w-4 h-4" />} onClick={() => setIsUploadOpen(true)}>
          Upload Asset
        </Button>
      </div>

      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 bg-app-surface p-4 border border-app rounded-2xl">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-app-muted absolute left-3 top-3" />
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Search files by name..."
            className="w-full pl-9 pr-4 py-2 rounded-xl bg-app-secondary border border-app text-xs text-app-primary focus:outline-none"
          />
        </div>

        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
          {['All', 'Design', 'Documents', 'Financials', 'Source Code', 'General'].map(f => (
            <button
              key={f}
              onClick={() => setSelectedFolder(f)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold cursor-pointer ${
                selectedFolder === f
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-app-secondary text-app-secondary border border-app hover:bg-app-hover'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredFiles.map(f => (
          <Card key={f.id} className="space-y-3 hover:border-blue-500/40 transition-all flex flex-col justify-between">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="w-8 h-8 rounded-lg bg-blue-500/15 text-blue-400 flex items-center justify-center">
                  <FileText className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-semibold text-app-muted uppercase font-mono">{f.folder}</span>
              </div>
              <h4 className="text-xs font-bold text-app-primary line-clamp-1 truncate" title={f.name}>
                {f.name}
              </h4>
              <p className="text-[11px] text-app-secondary">{f.projectName}</p>
            </div>

            <div className="pt-2 border-t border-app flex items-center justify-between text-[11px] text-app-muted">
              <span>{f.size}</span>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setPreviewFile(f)}
                  className="p-1 rounded text-app-muted hover:text-blue-400 hover:bg-app-hover"
                  title="Preview File"
                >
                  <Eye className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => deleteFile(f.id)}
                  className="p-1 rounded text-app-muted hover:text-rose-400 hover:bg-app-hover"
                  title="Delete File"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Upload File Modal */}
      <Modal
        isOpen={isUploadOpen}
        onClose={() => setIsUploadOpen(false)}
        title="Upload File Asset"
        size="md"
        footer={
          <>
            <Button variant="secondary" onClick={() => setIsUploadOpen(false)}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleUploadSubmit}>
              Upload File
            </Button>
          </>
        }
      >
        <form onSubmit={handleUploadSubmit} className="space-y-4 text-xs">
          <div>
            <label className="block font-semibold text-app-primary mb-1">File Name *</label>
            <input
              type="text"
              required
              value={fileName}
              onChange={e => setFileName(e.target.value)}
              placeholder="e.g. CoreVista_v2_Architecture_Diagram.pdf"
              className="w-full px-3.5 py-2 rounded-xl bg-app-secondary border border-app text-sm text-app-primary focus:outline-none"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold text-app-primary mb-1">Folder Category</label>
              <select
                value={folder}
                onChange={e => setFolder(e.target.value as any)}
                className="w-full px-3 py-2 rounded-xl bg-app-secondary border border-app text-sm text-app-primary focus:outline-none"
              >
                <option value="Design">Design</option>
                <option value="Documents">Documents</option>
                <option value="Financials">Financials</option>
                <option value="Source Code">Source Code</option>
                <option value="General">General</option>
              </select>
            </div>
            <div>
              <label className="block font-semibold text-app-primary mb-1">Associated Project</label>
              <select
                value={projectId}
                onChange={e => setProjectId(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-app-secondary border border-app text-sm text-app-primary focus:outline-none"
              >
                {projects.map(p => (
                  <option key={p.id} value={p.id}>{p.name}</option>
                ))}
              </select>
            </div>
          </div>
        </form>
      </Modal>

      {/* File Preview Modal */}
      <Modal
        isOpen={!!previewFile}
        onClose={() => setPreviewFile(null)}
        title={previewFile?.name || 'File Preview'}
        size="md"
      >
        <div className="space-y-4 text-xs text-center py-6">
          <FileText className="w-16 h-16 text-blue-400 mx-auto" />
          <div className="space-y-1">
            <h3 className="text-base font-bold text-app-primary">{previewFile?.name}</h3>
            <p className="text-app-secondary">Size: {previewFile?.size} • Category: {previewFile?.folder}</p>
            <p className="text-app-muted">Uploaded by {previewFile?.uploadedBy} on {previewFile?.uploadedAt}</p>
          </div>
          <Button variant="primary" icon={<Download className="w-4 h-4" />} onClick={() => setPreviewFile(null)}>
            Download File Asset
          </Button>
        </div>
      </Modal>
    </div>
  );
};
