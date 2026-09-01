import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { FileItem } from '../../data/initialData';
import { ProgressBar, Modal, EmptyState } from '../ui/GlobalComponents';
import { FolderOpen, Search, UploadCloud, Trash2, FileText, Code, Archive, Table, Image } from 'lucide-react';

export const Files: React.FC = () => {
  const { files, uploadFile, deleteFile } = useApp();

  const [activeFolder, setActiveFolder] = useState<'All' | 'Documents' | 'Source' | 'Assets' | 'Invoices' | 'Exports'>('All');
  const [searchVal, setSearchVal] = useState('');
  
  // Simulated upload state
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadFileName, setUploadFileName] = useState('');
  const [uploadFolder, setUploadFolder] = useState<'Documents' | 'Source' | 'Assets' | 'Invoices' | 'Exports'>('Documents');
  const [uploadFileType, setUploadFileType] = useState<FileItem['type']>('document');

  const startSimulatedUpload = (e: React.FormEvent) => {
    e.preventDefault();
    if (!uploadFileName.trim()) return;

    setIsUploading(true);
    setUploadProgress(0);

    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            // Commit to state
            uploadFile({
              name: uploadFileName.endsWith('.pdf') || uploadFileName.endsWith('.zip') || uploadFileName.endsWith('.yaml') || uploadFileName.endsWith('.xlsx')
                ? uploadFileName 
                : `${uploadFileName}.${uploadFileType === 'code' ? 'yaml' : uploadFileType === 'spreadsheet' ? 'xlsx' : uploadFileType === 'archive' ? 'zip' : 'pdf'}`,
              type: uploadFileType,
              folder: uploadFolder,
            }, { size: Math.floor(Math.random() * 5000000 + 1024) });

            setIsUploading(false);
            setUploadFileName('');
          }, 300);
          return 100;
        }
        return prev + 20;
      });
    }, 150);
  };

  const fileTypeIcons = {
    document: <FileText className="h-5 w-5 text-blue-600" />,
    spreadsheet: <Table className="h-5 w-5 text-emerald-600" />,
    image: <Image className="h-5 w-5 text-sky-600" />,
    archive: <Archive className="h-5 w-5 text-amber-600" />,
    code: <Code className="h-5 w-5 text-indigo-600" />,
  };

  const folders: typeof activeFolder[] = ['All', 'Documents', 'Source', 'Assets', 'Invoices', 'Exports'];

  const filteredFiles = files
    .filter(f => activeFolder === 'All' || f.folder === activeFolder)
    .filter(f => f.name.toLowerCase().includes(searchVal.toLowerCase()));

  return (
    <div className="space-y-6">
      {/* Header Panel */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-lg font-extrabold tracking-tight text-slate-900 uppercase font-mono">
            Storage & Document Registry
          </h2>
          <p className="text-xs text-slate-500 font-mono mt-0.5">Review system specifications, cloud storage assets, and document archives.</p>
        </div>
      </div>

      {/* Main split view */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Left pane Folder tabs */}
        <div className="space-y-1">
          <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest block mb-2 px-2">Folders</span>
          {folders.map((fld) => {
            const isActive = activeFolder === fld;
            const count = files.filter(f => fld === 'All' || f.folder === fld).length;

            return (
              <button
                key={fld}
                onClick={() => setActiveFolder(fld)}
                className={`w-full text-left px-3 py-2 rounded-lg text-xs font-semibold flex items-center justify-between transition cursor-pointer font-mono ${
                  isActive 
                    ? 'bg-blue-600 text-white shadow-xs' 
                    : 'text-slate-600 hover:text-blue-700 hover:bg-blue-50/60'
                }`}
              >
                <div className="flex items-center gap-2">
                  <FolderOpen className="h-4 w-4 shrink-0" />
                  <span>{fld}</span>
                </div>
                <span className={`text-[10px] font-bold ${isActive ? 'text-white' : 'text-slate-400'}`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Right pane File Lists */}
        <div className="lg:col-span-3 space-y-4">
          {/* Filters and simulated upload buttons */}
          <div className="flex flex-wrap items-center justify-between gap-3 p-4 border border-blue-100 bg-white rounded-xl shadow-xs">
            <div className="relative">
              <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400" />
              <input
                type="text"
                value={searchVal}
                onChange={(e) => setSearchVal(e.target.value)}
                placeholder="Filter files by name..."
                className="pl-8 pr-3 py-2 text-xs bg-slate-50 border border-blue-200 rounded-lg placeholder-slate-400 text-slate-800 focus:outline-none focus:border-blue-600 focus:bg-white font-mono"
              />
            </div>

            {/* Quick Upload Action */}
            <button
              onClick={() => {
                setUploadFileName('');
                setUploadProgress(0);
                setIsUploading(true);
              }}
              className="flex items-center gap-1.5 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs rounded-lg transition shadow-xs cursor-pointer font-mono"
            >
              <UploadCloud className="h-4 w-4" />
              Upload File
            </button>
          </div>

          {/* Files grid list */}
          {filteredFiles.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {filteredFiles.map((file) => (
                <div 
                  key={file.id} 
                  className="p-4 border border-blue-100 bg-white rounded-xl flex items-start gap-3.5 hover:shadow-sm hover:border-blue-300 transition"
                >
                  <div className="p-2.5 bg-blue-50 border border-blue-100 rounded-lg shrink-0">
                    {fileTypeIcons[file.type] || <FileText className="h-5 w-5" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs font-bold text-slate-800 truncate" title={file.name}>
                      {file.name}
                    </h4>
                    <div className="flex flex-wrap gap-1.5 mt-1">
                      <span className="text-[10px] bg-blue-50 border border-blue-100 text-blue-700 px-1.5 py-0.2 rounded font-mono font-bold">
                        /{file.folder}
                      </span>
                      <span className="text-[10px] text-slate-500 font-mono font-bold">{file.size}</span>
                    </div>
                    <span className="block text-[10px] text-slate-400 mt-2 font-mono">
                      Uploaded by {file.uploadedBy} on {file.uploadedAt}
                    </span>
                  </div>

                  <button 
                    onClick={() => deleteFile(file.id)}
                    className="p-1 text-slate-400 hover:text-rose-600 shrink-0 cursor-pointer transition"
                    title="Delete permanently"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <EmptyState 
              title="Files Queue Empty" 
              description="No file records met the active folder criteria."
              actionLabel="Upload File"
              onAction={() => {
                setUploadFileName('');
                setUploadProgress(0);
                setIsUploading(true);
              }}
              icon={<FolderOpen className="h-10 w-10 text-blue-200" />}
            />
          )}
        </div>
      </div>

      {/* FILE UPLOAD MODAL WITH PROGRESS BAR */}
      <Modal isOpen={isUploading} onClose={() => setIsUploading(false)} title="Upload System Asset">
        {uploadProgress > 0 ? (
          <div className="space-y-4 py-4 text-center">
            <UploadCloud className="h-10 w-10 text-blue-600 animate-bounce mx-auto" />
            <h4 className="text-xs font-bold text-slate-800 font-mono">Writing data streams to storage cluster...</h4>
            <div className="max-w-xs mx-auto">
              <div className="flex justify-between items-center text-[10px] text-slate-500 font-bold mb-1 font-mono">
                <span>UPLOAD PROGRESS</span>
                <span>{uploadProgress}%</span>
              </div>
              <ProgressBar value={uploadProgress} />
            </div>
          </div>
        ) : (
          <form onSubmit={startSimulatedUpload} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1 font-mono">File Name</label>
              <input 
                type="text" 
                required
                value={uploadFileName}
                onChange={(e) => setUploadFileName(e.target.value)}
                placeholder="e.g. Ingress_Gateway_Production" 
                className="w-full text-xs p-2 bg-slate-50 border border-blue-200 rounded-lg placeholder-slate-400 text-slate-800 focus:outline-none focus:border-blue-600 focus:bg-white font-mono"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1 font-mono">File Format</label>
                <select 
                  value={uploadFileType}
                  onChange={(e: any) => setUploadFileType(e.target.value)}
                  className="w-full text-xs p-2 bg-slate-50 border border-blue-200 rounded-lg text-slate-800 focus:outline-none focus:border-blue-600 focus:bg-white font-mono"
                >
                  <option value="document">PDF Document</option>
                  <option value="code">YAML Config</option>
                  <option value="spreadsheet">XLSX Forecast</option>
                  <option value="archive">ZIP Bundle</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1 font-mono">Destination Folder</label>
                <select 
                  value={uploadFolder}
                  onChange={(e: any) => setUploadFolder(e.target.value)}
                  className="w-full text-xs p-2 bg-slate-50 border border-blue-200 rounded-lg text-slate-800 focus:outline-none focus:border-blue-600 focus:bg-white font-mono"
                >
                  <option value="Documents">/Documents</option>
                  <option value="Source">/Source</option>
                  <option value="Assets">/Assets</option>
                  <option value="Invoices">/Invoices</option>
                  <option value="Exports">/Exports</option>
                </select>
              </div>
            </div>

            <button 
              type="submit"
              className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-lg uppercase tracking-wider cursor-pointer font-mono shadow-xs transition"
            >
              Start Upload Process
            </button>
          </form>
        )}
      </Modal>
    </div>
  );
};
