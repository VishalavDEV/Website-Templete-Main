import React, { useState } from 'react';
import { useEditorial } from '../services/editorialStore';
import { X, Upload, Image as ImageIcon, Loader2, Check } from 'lucide-react';
import { motion } from 'motion/react';

export const UploadMediaModal: React.FC = () => {
  const { isUploadMediaModalOpen, setIsUploadMediaModalOpen, uploadMedia } = useEditorial();

  const [title, setTitle] = useState('');
  const [caption, setCaption] = useState('');
  const [credit, setCredit] = useState('Elemental Archive / ESO Open Access');
  const [url, setUrl] = useState('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&auto=format&fit=crop&q=80');
  const [dimensions, setDimensions] = useState('3840 × 2160');
  const [format, setFormat] = useState<'JPG' | 'PNG' | 'WEBP' | 'TIFF'>('WEBP');
  const [sizeKb, setSizeKb] = useState(3800);
  const [tags, setTags] = useState('Astrophysics, High Resolution, Spectrum');
  const [isUploading, setIsUploading] = useState(false);

  if (!isUploadMediaModalOpen) return null;

  const handleClose = () => setIsUploadMediaModalOpen(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    setIsUploading(true);
    try {
      await uploadMedia({
        title,
        caption,
        credit,
        url,
        dimensions,
        format,
        sizeKb: Number(sizeKb),
        tags: tags.split(',').map((t) => t.trim()).filter(Boolean)
      });
      handleClose();
    } finally {
      setIsUploading(false);
    }
  };

  const samplePresets = [
    { title: 'Supernova Remnant M1', url: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?w=1200&auto=format&fit=crop&q=80', dim: '4096 × 2400' },
    { title: 'Dendritic Neural Lattice', url: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=1200&auto=format&fit=crop&q=80', dim: '2560 × 1600' },
    { title: 'Deep Hadal Bioluminescence', url: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&auto=format&fit=crop&q=80', dim: '3840 × 2160' }
  ];

  return (
    <div 
      id="upload-media-modal-overlay"
      className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 overflow-y-auto"
      onClick={handleClose}
    >
      <motion.div
        id="upload-media-modal"
        initial={{ opacity: 0, scale: 0.96, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 16 }}
        transition={{ duration: 0.2 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white text-slate-900 w-full max-w-xl rounded-2xl shadow-2xl border border-sky-100 overflow-hidden flex flex-col"
      >
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50 shrink-0">
          <div className="flex items-center gap-2">
            <ImageIcon className="w-5 h-5 text-sky-600" />
            <h2 className="font-serif text-lg font-bold text-slate-900">
              Upload Science Media Asset
            </h2>
          </div>
          <button
            id="close-upload-media-btn"
            onClick={handleClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          
          {/* Asset Title */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Asset Title *
            </label>
            <input
              id="upload-media-title-input"
              type="text"
              required
              placeholder="e.g. Newton Optics Manuscript Folio 44B"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3.5 py-2 text-xs sm:text-sm border border-slate-200 rounded-lg focus:ring-2 focus:ring-sky-400 focus:outline-none bg-slate-50 text-slate-900"
            />
          </div>

          {/* Asset URL */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Image URL / Source *
            </label>
            <input
              id="upload-media-url-input"
              type="text"
              required
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="w-full px-3.5 py-2 text-xs border border-slate-200 rounded-lg focus:ring-2 focus:ring-sky-400 focus:outline-none bg-slate-50 text-slate-900"
            />

            {/* Presets */}
            <div className="flex items-center gap-1.5 mt-2 flex-wrap text-[11px] text-slate-600">
              <span className="font-semibold text-slate-700">Quick Assets:</span>
              {samplePresets.map((p, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => {
                    setTitle(p.title);
                    setUrl(p.url);
                    setDimensions(p.dim);
                  }}
                  className="px-2 py-0.5 rounded bg-slate-100 hover:bg-sky-50 text-slate-700 hover:text-sky-900 border border-slate-200 transition-colors cursor-pointer"
                >
                  {p.title}
                </button>
              ))}
            </div>
          </div>

          {/* Caption & Attribution Credit */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Archival Caption
              </label>
              <input
                id="upload-media-caption-input"
                type="text"
                value={caption}
                onChange={(e) => setCaption(e.target.value)}
                placeholder="Microscopic or telescope description"
                className="w-full px-3 py-2 text-xs border border-slate-200 rounded-lg focus:ring-2 focus:ring-sky-400 focus:outline-none bg-slate-50 text-slate-900"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Citation &amp; Rights Credit
              </label>
              <input
                id="upload-media-credit-input"
                type="text"
                value={credit}
                onChange={(e) => setCredit(e.target.value)}
                className="w-full px-3 py-2 text-xs border border-slate-200 rounded-lg focus:ring-2 focus:ring-sky-400 focus:outline-none bg-slate-50 text-slate-900"
              />
            </div>
          </div>

          {/* Row: Dimensions + Format + Size */}
          <div className="grid grid-cols-3 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Dimensions
              </label>
              <input
                id="upload-media-dim-input"
                type="text"
                value={dimensions}
                onChange={(e) => setDimensions(e.target.value)}
                className="w-full px-3 py-2 text-xs border border-slate-200 rounded-lg focus:ring-2 focus:ring-sky-400 focus:outline-none bg-slate-50 text-slate-900"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Format
              </label>
              <select
                id="upload-media-format-select"
                value={format}
                onChange={(e) => setFormat(e.target.value as any)}
                className="w-full px-3 py-2 text-xs border border-slate-200 rounded-lg focus:ring-2 focus:ring-sky-400 focus:outline-none bg-slate-50 text-slate-900 cursor-pointer"
              >
                <option value="WEBP">WEBP</option>
                <option value="JPG">JPG</option>
                <option value="PNG">PNG</option>
                <option value="TIFF">TIFF (Archival)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                File Size (KB)
              </label>
              <input
                id="upload-media-size-input"
                type="number"
                value={sizeKb}
                onChange={(e) => setSizeKb(Number(e.target.value))}
                className="w-full px-3 py-2 text-xs border border-slate-200 rounded-lg focus:ring-2 focus:ring-sky-400 focus:outline-none bg-slate-50 text-slate-900"
              />
            </div>
          </div>

          {/* Tags */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Archival Tags
            </label>
            <input
              id="upload-media-tags-input"
              type="text"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              className="w-full px-3.5 py-2 text-xs border border-slate-200 rounded-lg focus:ring-2 focus:ring-sky-400 focus:outline-none bg-slate-50 text-slate-900"
            />
          </div>

          {/* Footer */}
          <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
            <button
              id="cancel-upload-media-btn"
              type="button"
              onClick={handleClose}
              className="px-4 py-2 rounded-lg text-xs font-semibold text-slate-600 hover:bg-slate-200 transition-colors cursor-pointer"
            >
              Cancel
            </button>

            <button
              id="confirm-upload-media-btn"
              type="submit"
              disabled={isUploading}
              className="flex items-center gap-2 px-5 py-2 rounded-lg bg-sky-500 hover:bg-sky-600 active:bg-sky-700 text-white text-xs font-semibold shadow-sm disabled:opacity-50 transition-all cursor-pointer"
            >
              {isUploading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Uploading...</span>
                </>
              ) : (
                <>
                  <Upload className="w-4 h-4" />
                  <span>Add to Archive</span>
                </>
              )}
            </button>
          </div>

        </form>
      </motion.div>
    </div>
  );
};
