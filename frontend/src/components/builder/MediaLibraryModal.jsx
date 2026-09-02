import React, { useState } from 'react';
import {
  X,
  Search,
  Grid,
  List,
  Upload,
  Folder,
  FolderPlus,
  Image as ImageIcon,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';

const DEMO_MEDIA_ASSETS = [
  { id: 1, name: 'hero_villa_facade.jpg', folder: 'all', size: '1.4 MB', dimensions: '1920x1080', date: '2026-09-01', url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80' },
  { id: 2, name: 'urbanova_interior.jpg', folder: 'all', size: '920 KB', dimensions: '1600x900', date: '2026-08-28', url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80' },
  { id: 3, name: 'brand_logo_mark.png', folder: 'all', size: '140 KB', dimensions: '512x512', date: '2026-08-20', url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80' },
  { id: 4, name: 'team_architect_lead.jpg', folder: 'all', size: '780 KB', dimensions: '800x800', date: '2026-08-15', url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80' },
  { id: 5, name: 'nature_panoramic.jpg', folder: 'all', size: '2.1 MB', dimensions: '2560x1440', date: '2026-08-10', url: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80' },
  { id: 6, name: 'tech_dashboard_mock.png', folder: 'all', size: '640 KB', dimensions: '1200x800', date: '2026-08-05', url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80' }
];

export default function MediaLibraryModal({ isOpen, onClose, onSelectImage }) {
  const [activeFolder, setActiveFolder] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'list'
  const [sortBy, setSortBy] = useState('newest');
  const [selectedAsset, setSelectedAsset] = useState(null);

  if (!isOpen) return null;

  const filteredAssets = DEMO_MEDIA_ASSETS.filter(item => {
    if (activeFolder !== 'all' && item.folder !== activeFolder) return false;
    if (searchQuery.trim() && !item.name.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="bg-white w-full max-w-5xl h-[85vh] rounded-3xl shadow-2xl border border-slate-200/90 flex flex-col overflow-hidden animate-in zoom-in-95 duration-150">
        
        {/* Modal Header */}
        <div className="h-16 px-6 border-b border-slate-200 flex items-center justify-between bg-white shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <ImageIcon size={18} />
            </div>
            <h3 className="text-sm font-bold text-slate-900 m-0">Media Asset Library</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
          >
            <X size={18} />
          </button>
        </div>

        {/* Demo Mode Alert Banner */}
        <div className="bg-blue-50/70 border-b border-blue-100 px-6 py-2.5 flex items-center gap-2 text-xs font-semibold text-blue-900 shrink-0">
          <AlertCircle size={14} className="text-blue-600 shrink-0" />
          <span>Uploading and managing images is in demo preview mode. You can select any asset below for live canvas integration.</span>
        </div>

        {/* Main Body */}
        <div className="flex-1 flex overflow-hidden">
          
          {/* Left Directory Pane */}
          <div className="w-56 bg-slate-50/60 border-r border-slate-200 p-4 flex flex-col justify-between shrink-0">
            <div className="flex flex-col gap-1.5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 px-2">Folders</span>
              
              <button
                onClick={() => setActiveFolder('all')}
                className={`w-full flex items-center gap-2 px-3.5 py-2.5 rounded-2xl text-xs font-semibold transition-all cursor-pointer ${
                  activeFolder === 'all'
                    ? 'bg-blue-50 text-blue-700 font-bold shadow-2xs'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                <Folder size={15} className="text-blue-600" />
                <span>All Images</span>
                <span className="ml-auto text-[10px] text-slate-400">{DEMO_MEDIA_ASSETS.length}</span>
              </button>

              <button
                onClick={() => setActiveFolder('uncategorized')}
                className={`w-full flex items-center gap-2 px-3.5 py-2.5 rounded-2xl text-xs font-semibold transition-all cursor-pointer ${
                  activeFolder === 'uncategorized'
                    ? 'bg-blue-50 text-blue-700 font-bold shadow-2xs'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                <Folder size={15} className="text-slate-400" />
                <span>Uncategorized</span>
                <span className="ml-auto text-[10px] text-slate-400">0</span>
              </button>
            </div>

            <button
              onClick={() => alert('New Folder feature available in production deployment')}
              className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-full border border-dashed border-slate-300 text-xs font-semibold text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
            >
              <FolderPlus size={14} />
              <span>+ New Folder</span>
            </button>
          </div>

          {/* Right Main Asset Canvas */}
          <div className="flex-1 flex flex-col overflow-hidden bg-white">
            
            {/* Top Toolbar */}
            <div className="p-4 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3 bg-white shrink-0">
              {/* Search */}
              <div className="relative w-64">
                <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search images..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-8 pr-3 py-2 rounded-full border border-slate-200 text-xs text-slate-800 bg-slate-50 focus:bg-white focus:outline-none focus:border-blue-500"
                />
              </div>

              {/* View mode & Sort */}
              <div className="flex items-center gap-2">
                <div className="flex bg-slate-100 p-0.5 rounded-full border border-slate-200">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-1.5 rounded-full transition-colors cursor-pointer ${viewMode === 'grid' ? 'bg-white shadow-2xs text-blue-600' : 'text-slate-400'}`}
                    title="Grid View"
                  >
                    <Grid size={14} />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-1.5 rounded-full transition-colors cursor-pointer ${viewMode === 'list' ? 'bg-white shadow-2xs text-blue-600' : 'text-slate-400'}`}
                    title="List View"
                  >
                    <List size={14} />
                  </button>
                </div>

                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-3 py-1.5 rounded-full border border-slate-200 text-xs font-semibold text-slate-700 bg-slate-50 focus:outline-none cursor-pointer"
                >
                  <option value="newest">Newest First</option>
                  <option value="name">Name (A-Z)</option>
                  <option value="size">Size</option>
                </select>

                <button
                  onClick={() => alert('Demo Mode: File upload simulate ready.')}
                  className="flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold text-white transition-all shadow-sm cursor-pointer"
                  style={{ background: 'linear-gradient(135deg, #0088ff 0%, #0044cc 100%)' }}
                >
                  <Upload size={13} />
                  <span>+ Upload</span>
                </button>
              </div>
            </div>

            {/* Assets Grid / List */}
            <div className="flex-1 overflow-y-auto p-5">
              {filteredAssets.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-slate-400 gap-2">
                  <ImageIcon size={32} strokeWidth={1.5} />
                  <p className="text-xs font-semibold">No image assets found</p>
                </div>
              ) : viewMode === 'grid' ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {filteredAssets.map((asset) => (
                    <div
                      key={asset.id}
                      onClick={() => setSelectedAsset(asset)}
                      className={`group relative rounded-2xl border overflow-hidden cursor-pointer transition-all ${
                        selectedAsset?.id === asset.id
                          ? 'border-blue-600 ring-2 ring-blue-600/20 shadow-md'
                          : 'border-slate-200 hover:border-slate-300 hover:shadow-sm'
                      }`}
                    >
                      <div className="aspect-4/3 bg-slate-100 overflow-hidden relative">
                        <img
                          src={asset.url}
                          alt={asset.name}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        {selectedAsset?.id === asset.id && (
                          <div className="absolute top-2 right-2 w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-md">
                            <CheckCircle2 size={13} />
                          </div>
                        )}
                      </div>
                      <div className="p-2.5 bg-white">
                        <p className="text-xs font-bold text-slate-800 truncate m-0">{asset.name}</p>
                        <p className="text-[10px] text-slate-400 m-0 mt-0.5">{asset.size} • {asset.dimensions}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col border border-slate-200 rounded-2xl overflow-hidden text-xs">
                  {filteredAssets.map((asset) => (
                    <div
                      key={asset.id}
                      onClick={() => setSelectedAsset(asset)}
                      className={`flex items-center justify-between p-3.5 border-b border-slate-100 last:border-b-0 cursor-pointer transition-colors ${
                        selectedAsset?.id === asset.id ? 'bg-blue-50/60 font-semibold' : 'hover:bg-slate-50'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <img src={asset.url} alt={asset.name} className="w-10 h-10 rounded-xl object-cover" />
                        <div>
                          <p className="font-bold text-slate-900 m-0">{asset.name}</p>
                          <p className="text-[10px] text-slate-400 m-0">{asset.dimensions}</p>
                        </div>
                      </div>
                      <span className="text-slate-500 font-mono text-[11px]">{asset.size}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="h-16 px-6 border-t border-slate-200 flex items-center justify-between bg-white shrink-0">
              <span className="text-xs text-slate-500 font-medium">
                {selectedAsset ? `Selected: ${selectedAsset.name}` : 'Select an image to insert into workspace'}
              </span>
              <div className="flex items-center gap-2.5">
                <button
                  onClick={onClose}
                  className="px-5 py-2 rounded-full text-xs font-semibold text-slate-600 bg-slate-50 border border-slate-200 hover:bg-slate-100 transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  disabled={!selectedAsset}
                  onClick={() => {
                    if (selectedAsset && onSelectImage) {
                      onSelectImage(selectedAsset.url);
                      onClose();
                    }
                  }}
                  className="px-6 py-2 rounded-full text-xs font-bold text-white disabled:opacity-40 transition-all cursor-pointer shadow-sm"
                  style={{ background: 'linear-gradient(135deg, #0088ff 0%, #0044cc 100%)' }}
                >
                  Insert Selected Asset
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
