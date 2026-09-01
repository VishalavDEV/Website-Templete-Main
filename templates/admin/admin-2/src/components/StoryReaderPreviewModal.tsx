import React from 'react';
import { useEditorial } from '../services/editorialStore';
import { Story } from '../types';
import { 
  X, CheckCircle, Clock, Calendar, Bookmark, Share2, 
  Sparkles, Award, Edit3, ArrowLeft, Send 
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const StoryReaderPreviewModal: React.FC = () => {
  const { previewStory, setPreviewStory, setEditingStory, publishStory } = useEditorial();

  if (!previewStory) return null;

  const handleClose = () => setPreviewStory(null);

  const handleEdit = () => {
    const s = previewStory;
    setPreviewStory(null);
    setEditingStory(s);
  };

  const handlePublish = async () => {
    await publishStory(previewStory.id);
  };

  return (
    <div 
      id="story-reader-preview-overlay"
      className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 overflow-y-auto"
      onClick={handleClose}
    >
      <motion.div
        id="story-reader-preview-modal"
        initial={{ opacity: 0, scale: 0.96, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 16 }}
        transition={{ duration: 0.2 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-[#faf8f2] text-slate-900 w-full max-w-4xl max-h-[90vh] rounded-2xl shadow-2xl border border-sky-100 overflow-hidden flex flex-col"
      >
        {/* Top Control Bar */}
        <div className="px-6 py-3.5 bg-white border-b border-slate-100 flex items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-sky-50 text-sky-800 border border-sky-100 font-serif">
              Reader Simulation Mode
            </span>
            <span className="text-xs text-slate-500 hidden sm:inline">
              {previewStory.readTime}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {previewStory.status !== 'published' && (
              <button
                id="preview-modal-publish-btn"
                onClick={handlePublish}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow-xs transition-colors cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Publish Now</span>
              </button>
            )}

            <button
              id="preview-modal-edit-btn"
              onClick={handleEdit}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold transition-colors cursor-pointer"
            >
              <Edit3 className="w-3.5 h-3.5" />
              <span>Edit Article</span>
            </button>

            <button
              id="close-reader-preview-btn"
              onClick={handleClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Close reader preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Reader Content */}
        <div className="flex-1 overflow-y-auto px-6 sm:px-12 py-8 space-y-6">
          
          {/* Masthead Header */}
          <div className="max-w-2xl mx-auto space-y-4">
            <div className="flex items-center gap-2 text-xs">
              <span className="font-bold uppercase tracking-wider text-sky-700 bg-sky-50 px-2 py-0.5 rounded border border-sky-100">
                {previewStory.category}
              </span>
              <span className="text-slate-400">•</span>
              <span className="text-slate-500">
                {previewStory.publishedAt ? new Date(previewStory.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) : 'Pending Release'}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-slate-950 leading-tight">
              {previewStory.title}
            </h1>

            {previewStory.subtitle && (
              <p className="text-lg font-serif italic text-slate-600 leading-relaxed">
                {previewStory.subtitle}
              </p>
            )}

            {/* Author Byline & Fact-Check Seal */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-200">
              <div className="flex items-center gap-3">
                <img
                  src={previewStory.author.avatar}
                  alt={previewStory.author.name}
                  className="w-10 h-10 rounded-full object-cover ring-2 ring-sky-200"
                />
                <div>
                  <div className="text-sm font-bold text-slate-900">{previewStory.author.name}</div>
                  <div className="text-xs text-slate-500">{previewStory.author.role}</div>
                </div>
              </div>

              {previewStory.factCheckedBy && (
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs font-medium">
                  <Award className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Fact-Checked by <strong>{previewStory.factCheckedBy}</strong></span>
                </div>
              )}
            </div>
          </div>

          {/* Hero Photography Asset */}
          <div className="max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-sm border border-slate-200">
            <img
              src={previewStory.heroImage}
              alt={previewStory.title}
              className="w-full max-h-[420px] object-cover"
            />
            {previewStory.heroCaption && (
              <div className="p-3 bg-white text-xs text-slate-500 border-t border-slate-100">
                {previewStory.heroCaption}
              </div>
            )}
          </div>

          {/* Body Article Content */}
          <div className="max-w-2xl mx-auto font-serif text-slate-800 text-lg leading-relaxed space-y-5">
            {previewStory.content.split('\n\n').map((para, i) => (
              <p key={i} className="text-slate-800 first-letter:text-4xl first-letter:font-bold first-letter:float-left first-letter:mr-2 first-letter:leading-none first-letter:font-serif first-letter:text-slate-950">
                {para}
              </p>
            ))}
          </div>

          {/* Tags & Footnote */}
          <div className="max-w-2xl mx-auto pt-6 border-t border-slate-200 space-y-4">
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="text-xs text-slate-400 mr-2 font-medium">Archival Tags:</span>
              {previewStory.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-xs text-slate-600"
                >
                  #{tag}
                </span>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200 text-xs text-slate-500 space-y-1">
              <div className="font-bold text-slate-700 font-serif">Archival Citation &amp; License:</div>
              <div>Published by Elemental Magazine. Peer-reviewed against Harvard, ESO, and Bodleian manuscript references.</div>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 bg-white border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 shrink-0">
          <span>Story ID: {previewStory.id}</span>
          <button
            id="close-reader-footer-btn"
            onClick={handleClose}
            className="px-4 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-medium transition-colors cursor-pointer"
          >
            Exit Reader Simulation
          </button>
        </div>
      </motion.div>
    </div>
  );
};
