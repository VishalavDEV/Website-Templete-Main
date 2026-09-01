import React, { useState, useRef } from 'react';
import Layout from '../../components/layout/Layout';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import { Folder, FileText, HardDrive, Download, Upload, Trash2, Search, X, Check } from 'lucide-react';

export default function FileManagerApp() {
  const fileInputRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const [search, setSearch] = useState('');
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const [filesList, setFilesList] = useState([
    { id: 1, name: 'neura_dashboard_v4.2.tar.gz', size: '142.8 MB', rawSizeMb: 142.8, date: '2026-08-19', type: 'Archives' },
    { id: 2, name: 'soc2_compliance_audit_2026.pdf', size: '4.2 MB', rawSizeMb: 4.2, date: '2026-08-18', type: 'Documents' },
    { id: 3, name: 'q3_revenue_projections.csv', size: '1.8 MB', rawSizeMb: 1.8, date: '2026-08-15', type: 'Spreadsheets' },
    { id: 4, name: 'neural_weights_v4.2.bin', size: '1.2 GB', rawSizeMb: 1200, date: '2026-08-10', type: 'Model Weights' },
  ]);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 3000);
  };

  const handleFileUpload = (e) => {
    const selectedFiles = e.target.files;
    if (!selectedFiles || selectedFiles.length === 0) return;

    const newFiles = Array.from(selectedFiles).map((file, idx) => {
      const sizeMb = (file.size / (1024 * 1024)).toFixed(1);
      const ext = file.name.split('.').pop()?.toLowerCase();

      let category = 'Documents';
      if (['tar', 'gz', 'zip', 'rar'].includes(ext)) category = 'Archives';
      if (['bin', 'weights', 'onnx', 'pt', 'pth', 'safetensors'].includes(ext)) category = 'Model Weights';
      if (['csv', 'xlsx', 'xls'].includes(ext)) category = 'Spreadsheets';

      return {
        id: Date.now() + idx,
        name: file.name,
        size: `${sizeMb} MB`,
        rawSizeMb: parseFloat(sizeMb) || 1,
        date: new Date().toISOString().split('T')[0],
        type: category,
      };
    });

    setFilesList([...newFiles, ...filesList]);
    setShowUploadModal(false);
    showToast(`Successfully uploaded ${newFiles.length} file(s)!`);
  };

  const deleteFile = (id) => {
    setFilesList(filesList.filter(f => f.id !== id));
    showToast('File removed from S3 storage.');
  };

  const triggerDownload = (fileName) => {
    const element = document.createElement('a');
    const file = new Blob([`Dummy data content for ${fileName}`], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = fileName;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    showToast(`Downloaded ${fileName}`);
  };

  const filteredFiles = filesList.filter(f => {
    const matchesCat = activeCategory === 'All' || f.type === activeCategory;
    const matchesSearch = f.name.toLowerCase().includes(search.toLowerCase());
    return matchesCat && matchesSearch;
  });

  // Calculate dynamic pie chart values
  const totalMb = filesList.reduce((acc, f) => acc + f.rawSizeMb, 0) || 1;
  const storageCategories = [
    { name: 'Model Weights', value: Math.round(((filesList.filter(f => f.type === 'Model Weights').reduce((a, b) => a + b.rawSizeMb, 0)) / totalMb) * 100) || 10, color: '#00f0ff' },
    { name: 'Archives', value: Math.round(((filesList.filter(f => f.type === 'Archives').reduce((a, b) => a + b.rawSizeMb, 0)) / totalMb) * 100) || 10, color: '#7000ff' },
    { name: 'Documents', value: Math.round(((filesList.filter(f => f.type === 'Documents').reduce((a, b) => a + b.rawSizeMb, 0)) / totalMb) * 100) || 10, color: '#10b981' },
    { name: 'Spreadsheets', value: Math.round(((filesList.filter(f => f.type === 'Spreadsheets').reduce((a, b) => a + b.rawSizeMb, 0)) / totalMb) * 100) || 10, color: '#f59e0b' },
  ];

  return (
    <Layout title="Cloud Storage File Manager" breadcrumb="Home / Applications / File Manager">
      <div className="space-y-6 relative">
        {toastMessage && (
          <div className="absolute top-0 right-0 z-50 px-4 py-2.5 rounded-2xl bg-emerald-500 text-black font-bold text-xs shadow-xl flex items-center space-x-2 animate-bounce">
            <Check className="w-4 h-4" />
            <span>{toastMessage}</span>
          </div>
        )}

        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileUpload}
          multiple
          className="hidden"
        />

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center space-x-2">
            <HardDrive className="w-5 h-5 text-neura-cyan" />
            <span className="text-sm font-bold text-white">Storage Usage: 142 GB / 1 TB (S3 Bucket)</span>
          </div>

          <div className="flex items-center space-x-3">
            <div className="relative w-48">
              <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search files..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-8 pr-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-400 text-xs focus:outline-none focus:border-neura-cyan"
              />
            </div>

            <button
              onClick={() => setShowUploadModal(true)}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-neura-cyan to-blue-600 text-black font-bold text-xs shadow-glow-cyan flex items-center space-x-2 shrink-0"
            >
              <Upload className="w-4 h-4" />
              <span>Upload File</span>
            </button>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-1 text-xs">
          {['All', 'Model Weights', 'Archives', 'Documents', 'Spreadsheets'].map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 rounded-xl border transition-all shrink-0 font-semibold ${
                activeCategory === cat
                  ? 'bg-neura-cyan/20 border-neura-cyan text-neura-cyan'
                  : 'bg-white/5 border-white/10 text-slate-400 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Storage Allocation Donut Chart */}
        <div className="rounded-3xl glass-card p-6 border border-white/10 space-y-4">
          <h3 className="text-base font-bold text-white">Storage Breakdown by File Category</h3>
          <div className="h-44 w-full relative flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={storageCategories}
                  cx="50%"
                  cy="50%"
                  innerRadius={45}
                  outerRadius={65}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {storageCategories.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} stroke="transparent" />
                  ))}
                </Pie>
                <Tooltip
                  cursor={{ fill: 'transparent' }}
                  contentStyle={{
                    backgroundColor: '#0B1020',
                    borderColor: 'rgba(255,255,255,0.15)',
                    borderRadius: '12px',
                    color: '#fff'
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Files Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredFiles.length === 0 ? (
            <div className="col-span-full p-8 text-center text-slate-400 text-xs">No files match filter.</div>
          ) : (
            filteredFiles.map(f => (
              <div key={f.id} className="p-5 rounded-3xl glass-card border border-white/10 space-y-3 hover:border-neura-cyan/40 transition-all flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <FileText className="w-7 h-7 text-neura-cyan" />
                    <button onClick={() => deleteFile(f.id)} className="p-1 text-slate-500 hover:text-rose-400 transition-colors">
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <h4 className="text-xs font-bold text-white truncate">{f.name}</h4>
                  <span className="text-[10px] text-slate-400 font-mono block mt-1">{f.size} • {f.type}</span>
                </div>

                <div className="pt-2 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[10px] text-slate-500 font-mono">{f.date}</span>
                  <button
                    onClick={() => triggerDownload(f.name)}
                    className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-neura-cyan transition-colors"
                  >
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Upload File Modal */}
      {showUploadModal && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-4">
          <div className="w-full max-w-md bg-neura-panel border border-white/15 rounded-3xl p-6 shadow-2xl space-y-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <h3 className="text-base font-bold text-white flex items-center">
                <Upload className="w-4 h-4 text-neura-cyan mr-2" />
                <span>Upload Cloud File</span>
              </h3>
              <button onClick={() => setShowUploadModal(false)} className="p-1 text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div
              onClick={() => fileInputRef.current?.click()}
              className="p-8 border-2 border-dashed border-white/20 hover:border-neura-cyan rounded-2xl text-center cursor-pointer space-y-3 bg-white/[0.02] hover:bg-white/[0.05] transition-all"
            >
              <Upload className="w-10 h-10 text-neura-cyan mx-auto animate-pulse" />
              <div>
                <p className="text-xs font-bold text-white">Click to browse or drop files here</p>
                <p className="text-[11px] text-slate-400 mt-1">Supports datasets, binaries, model weights, documents</p>
              </div>
            </div>

            <div className="flex justify-end space-x-2 pt-2">
              <button
                type="button"
                onClick={() => setShowUploadModal(false)}
                className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 text-xs font-semibold hover:bg-white/10"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="px-4 py-2 rounded-xl bg-neura-cyan text-black font-bold text-xs shadow-glow-cyan"
              >
                Choose File
              </button>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}
