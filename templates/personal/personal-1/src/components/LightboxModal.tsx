import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ZoomIn, ZoomOut, RotateCcw, Camera, Download } from 'lucide-react';

interface LightboxModalProps {
  isOpen: boolean;
  imageUrl: string;
  title: string;
  metadata?: string;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  imageUrl,
  title,
  metadata,
  onClose,
}) => {
  const [zoom, setZoom] = useState(1);

  if (!isOpen || !imageUrl) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6 bg-black/95 backdrop-blur-2xl">
        {/* Controls Toolbar */}
        <div className="absolute top-6 right-6 z-20 flex items-center gap-2">
          <button
            type="button"
            onClick={() => setZoom((prev) => Math.max(0.8, prev - 0.25))}
            className="p-2.5 rounded-full bg-neutral-900/80 hover:bg-neutral-800 text-white border border-neutral-700 transition-colors"
            title="Zoom Out"
          >
            <ZoomOut size={18} />
          </button>
          <button
            type="button"
            onClick={() => setZoom(1)}
            className="p-2.5 rounded-full bg-neutral-900/80 hover:bg-neutral-800 text-white border border-neutral-700 transition-colors"
            title="Reset Zoom"
          >
            <RotateCcw size={18} />
          </button>
          <button
            type="button"
            onClick={() => setZoom((prev) => Math.min(2.5, prev + 0.25))}
            className="p-2.5 rounded-full bg-neutral-900/80 hover:bg-neutral-800 text-white border border-neutral-700 transition-colors"
            title="Zoom In"
          >
            <ZoomIn size={18} />
          </button>
          <button
            type="button"
            onClick={onClose}
            id="lightbox-close-btn"
            className="p-2.5 rounded-full bg-neutral-900/80 hover:bg-amber-400 hover:text-neutral-950 text-white border border-neutral-700 transition-colors ml-2"
            title="Close Lightbox"
          >
            <X size={20} />
          </button>
        </div>

        {/* Image Content Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="relative max-w-6xl max-h-[85vh] flex flex-col items-center justify-center"
        >
          <div className="overflow-hidden rounded-2xl border border-neutral-800 shadow-2xl bg-neutral-950">
            <img
              src={imageUrl}
              alt={title}
              style={{ transform: `scale(${zoom})`, transition: 'transform 0.2s ease-out' }}
              className="max-h-[72vh] max-w-full object-contain cursor-grab active:cursor-grabbing select-none"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Caption & EXIF metadata bar */}
          <div className="mt-4 p-4 rounded-2xl bg-neutral-900/90 border border-neutral-800 backdrop-blur-md max-w-xl text-center w-full">
            <div className="font-display font-bold text-white text-base">
              {title}
            </div>
            {metadata && (
              <div className="text-xs font-mono text-amber-400 mt-1 flex items-center justify-center gap-1.5">
                <Camera size={13} />
                <span>{metadata}</span>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
