import React, { useState } from 'react';
import { useEditorial } from '../services/editorialStore';
import { MediaItem } from '../types';
import { 
  Image, Search, Filter, Upload, Download, Eye, 
  Trash2, Tag, Copy, Check, ExternalLink, SlidersHorizontal, X 
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const ArchiveMediaView: React.FC = () => {
  const { media, deleteMedia, setIsUploadMediaModalOpen, addToast } = useEditorial();
  const [search, setSearch] = useState('');
  const [selectedFormat, setSelectedFormat] = useState('all');
  const [activeAsset, setActiveAsset] = useState<MediaItem | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filteredMedia = media.filter((item) => {
    if (selectedFormat !== 'all' && item.format !== selectedFormat) return false;
    if (search.trim()) {
      const q = search.toLowerCase();
      const matchTitle = item.title.toLowerCase().includes(q);
      const matchCredit = item.credit.toLowerCase().includes(q);
      const matchTags = item.tags.some((t) => t.toLowerCase().includes(q));
      if (!matchTitle && !matchCredit && !matchTags) return false;
    }
    return true;
  });

  const handleCopyUrl = (url: string, id: string) => {
    navigator.clipboard.writeText(url);
    setCopiedId(id);
    addToast('info', 'URL Copied', 'High-res image asset URL copied to clipboard.');
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleDownload = (item: MediaItem) => {
    addToast('success', 'Downloading Archival Asset', `Saving ${item.title} (${item.format}) to local disk...`);
  };

  return (
    <div id="archive-media-view" className="space-y-6">
      
      {/* Header & Controls */}
      <div className="p-6 rounded-2xl bg-white border border-sky-50 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-sky-50 text-sky-600 border border-sky-100">
              <Image className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-serif text-xl font-bold text-slate-900">
                Science Media Archive
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                High-resolution telescope imagery, laboratory micrographs, and historical manuscript plates.
              </p>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <button
          id="upload-archive-media-btn"
          onClick={() => setIsUploadMediaModalOpen(true)}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-sky-500 hover:bg-sky-600 active:bg-sky-700 text-white text-xs font-semibold shadow-sm transition-all self-start sm:self-auto cursor-pointer"
        >
          <Upload className="w-4 h-4" />
          <span>Upload Media Asset</span>
        </button>
      </div>

      {/* Filter Bar */}
      <div className="p-4 rounded-2xl bg-white border border-sky-50 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            id="archive-media-search-input"
            type="text"
            placeholder="Search archival media by title, credit, or tag..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-400 text-slate-800"
          />
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-500 font-medium">Format:</span>
          <select
            id="archive-media-format-select"
            value={selectedFormat}
            onChange={(e) => setSelectedFormat(e.target.value)}
            className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-800 font-medium focus:outline-none cursor-pointer"
          >
            <option value="all">All Formats ({media.length})</option>
            <option value="WEBP">WEBP</option>
            <option value="JPG">JPG</option>
            <option value="PNG">PNG</option>
            <option value="TIFF">TIFF (Archival)</option>
          </select>
        </div>
      </div>

      {/* Media Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredMedia.map((item) => (
          <div
            key={item.id}
            id={`media-card-${item.id}`}
            className="group rounded-2xl bg-white border border-sky-50 shadow-sm hover:border-sky-200 transition-all overflow-hidden flex flex-col justify-between"
          >
            {/* Image Preview Container */}
            <div className="relative aspect-16/10 bg-slate-100 overflow-hidden cursor-pointer" onClick={() => setActiveAsset(item)}>
              <img
                src={item.url}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-2.5 left-2.5 flex items-center gap-1">
                <span className="px-2 py-0.5 text-[10px] font-bold rounded-md bg-white/90 text-slate-900 shadow-2xs backdrop-blur-xs font-mono">
                  {item.format}
                </span>
                <span className="px-2 py-0.5 text-[10px] font-bold rounded-md bg-slate-900/80 text-white shadow-2xs backdrop-blur-xs">
                  {item.dimensions}
                </span>
              </div>
            </div>

            {/* Content & Metadata */}
            <div className="p-4 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-serif text-base font-bold text-slate-900 line-clamp-1 mb-1">
                  {item.title}
                </h3>
                {item.caption && (
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-2">
                    {item.caption}
                  </p>
                )}
                <div className="text-[11px] text-slate-500 mb-3">
                  Credit: {item.credit} • {(item.sizeKb / 1024).toFixed(1)} MB
                </div>

                {/* Tags */}
                <div className="flex flex-wrap items-center gap-1 mb-3">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded bg-slate-100 text-[10px] text-slate-600 font-medium"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Working Action Strip */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-1">
                <button
                  id={`copy-url-btn-${item.id}`}
                  onClick={() => handleCopyUrl(item.url, item.id)}
                  className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-medium transition-colors cursor-pointer"
                >
                  {copiedId === item.id ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedId === item.id ? 'Copied' : 'Copy URL'}</span>
                </button>

                <div className="flex items-center gap-1">
                  <button
                    id={`download-media-btn-${item.id}`}
                    onClick={() => handleDownload(item)}
                    className="p-1.5 rounded-lg bg-sky-50 hover:bg-sky-100 text-sky-700 transition-colors cursor-pointer"
                    title="Download archival master"
                  >
                    <Download className="w-3.5 h-3.5" />
                  </button>

                  <button
                    id={`delete-media-btn-${item.id}`}
                    onClick={() => deleteMedia(item.id)}
                    className="p-1.5 rounded-lg bg-rose-50 hover:bg-rose-100 text-rose-700 transition-colors cursor-pointer"
                    title="Remove from archive"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* Asset Detail Lightbox */}
      <AnimatePresence>
        {activeAsset && (
          <div
            id="media-lightbox-overlay"
            className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4"
            onClick={() => setActiveAsset(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl max-w-4xl w-full overflow-hidden shadow-2xl border border-sky-100 flex flex-col max-h-[90vh]"
            >
              <div className="p-4 border-b border-slate-100 flex items-center justify-between">
                <h3 className="font-serif text-lg font-bold text-slate-900">{activeAsset.title}</h3>
                <button onClick={() => setActiveAsset(null)} className="p-1 rounded-lg text-slate-400 hover:text-slate-700 cursor-pointer">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-4 overflow-y-auto space-y-4">
                <img src={activeAsset.url} alt={activeAsset.title} className="w-full rounded-xl max-h-[500px] object-contain bg-slate-900" />
                <div className="text-xs text-slate-600 leading-relaxed space-y-1">
                  <p><strong>Dimensions:</strong> {activeAsset.dimensions} ({activeAsset.format})</p>
                  <p><strong>Citation:</strong> {activeAsset.credit}</p>
                  <p><strong>Caption:</strong> {activeAsset.caption}</p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};
