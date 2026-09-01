import React, { useState, useEffect } from 'react';
import { useEditorial } from '../services/editorialStore';
import { Story, StoryStatus } from '../types';
import { X, Save, Sparkles, Image, Check, AlertCircle, Loader2 } from 'lucide-react';
import { motion } from 'motion/react';

export const StoryEditorModal: React.FC = () => {
  const { 
    isNewStoryModalOpen, 
    setIsNewStoryModalOpen, 
    editingStory, 
    setEditingStory, 
    createStory, 
    updateStory, 
    authors 
  } = useEditorial();

  const isOpen = isNewStoryModalOpen || editingStory !== null;
  const isEditing = editingStory !== null;

  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [category, setCategory] = useState<Story['category']>('Cosmology');
  const [authorId, setAuthorId] = useState(authors[0]?.id || 'auth_1');
  const [status, setStatus] = useState<StoryStatus>('draft');
  const [heroImage, setHeroImage] = useState('https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?w=1200&auto=format&fit=crop&q=80');
  const [heroCaption, setHeroCaption] = useState('');
  const [readTime, setReadTime] = useState('7 min read');
  const [tags, setTags] = useState('Astrophysics, Research');
  const [content, setContent] = useState('');
  const [isFeatured, setIsFeatured] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (editingStory) {
      setTitle(editingStory.title);
      setSubtitle(editingStory.subtitle);
      setExcerpt(editingStory.excerpt);
      setCategory(editingStory.category);
      setAuthorId(editingStory.author.id);
      setStatus(editingStory.status);
      setHeroImage(editingStory.heroImage);
      setHeroCaption(editingStory.heroCaption || '');
      setReadTime(editingStory.readTime);
      setTags(editingStory.tags.join(', '));
      setContent(editingStory.content);
      setIsFeatured(editingStory.isFeatured);
    } else {
      setTitle('');
      setSubtitle('');
      setExcerpt('');
      setCategory('Cosmology');
      setAuthorId(authors[0]?.id || 'auth_1');
      setStatus('draft');
      setHeroImage('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&auto=format&fit=crop&q=80');
      setHeroCaption('Astronomical multi-spectral survey.');
      setReadTime('6 min read');
      setTags('Astrophysics, Discovery');
      setContent('Draft manuscript notes and foundational hypotheses.');
      setIsFeatured(false);
    }
    setErrorMsg('');
  }, [editingStory, isNewStoryModalOpen, authors]);

  if (!isOpen) return null;

  const handleClose = () => {
    setIsNewStoryModalOpen(false);
    setEditingStory(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) {
      setErrorMsg('Story headline is required.');
      return;
    }

    const selectedAuthor = authors.find((a) => a.id === authorId) || authors[0];
    const parsedTags = tags.split(',').map((t) => t.trim()).filter(Boolean);

    setIsSubmitting(true);
    setErrorMsg('');

    try {
      if (isEditing && editingStory) {
        await updateStory(editingStory.id, {
          title,
          subtitle,
          excerpt: excerpt || subtitle,
          category,
          author: {
            id: selectedAuthor.id,
            name: selectedAuthor.name,
            avatar: selectedAuthor.avatar,
            role: selectedAuthor.role
          },
          status,
          heroImage,
          heroCaption,
          readTime,
          tags: parsedTags,
          content,
          isFeatured
        });
      } else {
        await createStory({
          title,
          subtitle,
          excerpt: excerpt || subtitle,
          category,
          author: {
            id: selectedAuthor.id,
            name: selectedAuthor.name,
            avatar: selectedAuthor.avatar,
            role: selectedAuthor.role
          },
          status,
          heroImage,
          heroCaption,
          readTime,
          tags: parsedTags,
          content,
          isFeatured
        });
      }
      handleClose();
    } catch (err) {
      setErrorMsg('An error occurred while saving the story.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const sampleImages = [
    { label: 'Cosmic Nebula', url: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?w=1200&auto=format&fit=crop&q=80' },
    { label: 'Ancient Manuscript', url: 'https://images.unsplash.com/photo-1461360370896-922624d12aa1?w=1200&auto=format&fit=crop&q=80' },
    { label: 'Deep Sea Life', url: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&auto=format&fit=crop&q=80' },
    { label: 'Quantum Biology', url: 'https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=1200&auto=format&fit=crop&q=80' },
    { label: 'Neural Synapses', url: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=1200&auto=format&fit=crop&q=80' }
  ];

  return (
    <div 
      id="story-editor-modal-overlay"
      className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 overflow-y-auto"
      onClick={handleClose}
    >
      <motion.div
        id="story-editor-modal"
        initial={{ opacity: 0, scale: 0.96, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 16 }}
        transition={{ duration: 0.2 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white text-slate-900 w-full max-w-3xl max-h-[92vh] rounded-2xl shadow-2xl border border-sky-100 overflow-hidden flex flex-col"
      >
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50 shrink-0">
          <div>
            <h2 className="font-serif text-lg font-bold text-slate-900">
              {isEditing ? `Edit Story: "${editingStory?.title}"` : 'New Editorial Story'}
            </h2>
            <p className="text-xs text-slate-500">
              Draft, polish, or publish pieces to the Elemental science repository.
            </p>
          </div>
          <button
            id="close-story-editor-btn"
            onClick={handleClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-6 space-y-4">
          
          {errorMsg && (
            <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-700 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-rose-500 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          {/* Headline */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Headline Title *
            </label>
            <input
              id="story-editor-title-input"
              type="text"
              required
              placeholder="e.g. The Astronomer Who Counted Invisible Stars"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3.5 py-2 text-sm font-semibold border border-slate-200 rounded-lg focus:ring-2 focus:ring-sky-400 focus:outline-none bg-slate-50 focus:bg-white text-slate-900"
            />
          </div>

          {/* Subtitle / Deck */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Editorial Deck / Subtitle
            </label>
            <input
              id="story-editor-subtitle-input"
              type="text"
              placeholder="e.g. How Henrietta Leavitt unlocked the standard candles of cosmic distance"
              value={subtitle}
              onChange={(e) => setSubtitle(e.target.value)}
              className="w-full px-3.5 py-2 text-xs sm:text-sm border border-slate-200 rounded-lg focus:ring-2 focus:ring-sky-400 focus:outline-none bg-slate-50 focus:bg-white text-slate-900"
            />
          </div>

          {/* Row: Category + Author + Status */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Category
              </label>
              <select
                id="story-editor-category-select"
                value={category}
                onChange={(e) => setCategory(e.target.value as any)}
                className="w-full px-3 py-2 text-xs border border-slate-200 rounded-lg focus:ring-2 focus:ring-sky-400 focus:outline-none bg-slate-50 text-slate-900 cursor-pointer"
              >
                <option value="Cosmology">Cosmology</option>
                <option value="Quantum Physics">Quantum Physics</option>
                <option value="Neuroscience">Neuroscience</option>
                <option value="Earth & Climate">Earth & Climate</option>
                <option value="Deep Biology">Deep Biology</option>
                <option value="History of Science">History of Science</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Author
              </label>
              <select
                id="story-editor-author-select"
                value={authorId}
                onChange={(e) => setAuthorId(e.target.value)}
                className="w-full px-3 py-2 text-xs border border-slate-200 rounded-lg focus:ring-2 focus:ring-sky-400 focus:outline-none bg-slate-50 text-slate-900 cursor-pointer"
              >
                {authors.map((a) => (
                  <option key={a.id} value={a.id}>
                    {a.name} ({a.role})
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Production Status
              </label>
              <select
                id="story-editor-status-select"
                value={status}
                onChange={(e) => setStatus(e.target.value as any)}
                className="w-full px-3 py-2 text-xs border border-slate-200 rounded-lg focus:ring-2 focus:ring-sky-400 focus:outline-none bg-slate-50 text-slate-900 cursor-pointer"
              >
                <option value="draft">Draft</option>
                <option value="review">In Review</option>
                <option value="approved">Approved</option>
                <option value="scheduled">Scheduled</option>
                <option value="published">Published</option>
              </select>
            </div>
          </div>

          {/* Hero Image Asset URL + Presets */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Hero Photography Image URL
            </label>
            <input
              id="story-editor-hero-image-input"
              type="text"
              value={heroImage}
              onChange={(e) => setHeroImage(e.target.value)}
              className="w-full px-3.5 py-2 text-xs border border-slate-200 rounded-lg focus:ring-2 focus:ring-sky-400 focus:outline-none bg-slate-50 text-slate-900"
            />
            
            {/* Quick Image Presets */}
            <div className="flex items-center gap-1.5 mt-2 flex-wrap text-[11px] text-slate-600">
              <span className="font-semibold text-slate-700">Presets:</span>
              {sampleImages.map((img, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setHeroImage(img.url)}
                  className="px-2 py-0.5 rounded bg-slate-100 hover:bg-sky-50 text-slate-700 hover:text-sky-900 border border-slate-200 transition-colors cursor-pointer"
                >
                  {img.label}
                </button>
              ))}
            </div>
          </div>

          {/* Row: Read Time + Tags */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Estimated Read Time
              </label>
              <input
                id="story-editor-read-time-input"
                type="text"
                value={readTime}
                onChange={(e) => setReadTime(e.target.value)}
                placeholder="e.g. 8 min read"
                className="w-full px-3 py-2 text-xs border border-slate-200 rounded-lg focus:ring-2 focus:ring-sky-400 focus:outline-none bg-slate-50 text-slate-900"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Tags (comma separated)
              </label>
              <input
                id="story-editor-tags-input"
                type="text"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
                placeholder="e.g. Physics, Astrophotography, CERN"
                className="w-full px-3 py-2 text-xs border border-slate-200 rounded-lg focus:ring-2 focus:ring-sky-400 focus:outline-none bg-slate-50 text-slate-900"
              />
            </div>
          </div>

          {/* Story Body Content */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Article Manuscript Body
            </label>
            <textarea
              id="story-editor-content-input"
              rows={6}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Write or paste manuscript text here..."
              className="w-full px-3.5 py-2.5 text-xs sm:text-sm font-serif border border-slate-200 rounded-lg focus:ring-2 focus:ring-sky-400 focus:outline-none bg-slate-50 leading-relaxed text-slate-900"
            />
          </div>

          {/* Lead Masthead Toggle */}
          <div className="flex items-center gap-2 p-3 rounded-xl bg-amber-50 border border-amber-200">
            <input
              id="story-editor-featured-checkbox"
              type="checkbox"
              checked={isFeatured}
              onChange={(e) => setIsFeatured(e.target.checked)}
              className="rounded text-amber-500 focus:ring-amber-400 h-4 w-4 cursor-pointer"
            />
            <label htmlFor="story-editor-featured-checkbox" className="text-xs font-semibold text-amber-950 cursor-pointer">
              Set this piece as the Lead Masthead feature on Front Page
            </label>
          </div>

        </form>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-slate-100 bg-slate-50 flex items-center justify-between shrink-0">
          <button
            id="cancel-story-editor-btn"
            type="button"
            onClick={handleClose}
            className="px-4 py-2 rounded-lg text-xs font-semibold text-slate-600 hover:bg-slate-200 transition-colors cursor-pointer"
          >
            Cancel
          </button>

          <button
            id="save-story-editor-btn"
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="flex items-center gap-2 px-5 py-2 rounded-lg bg-sky-500 hover:bg-sky-600 active:bg-sky-700 text-white text-xs font-semibold shadow-sm disabled:opacity-50 transition-all cursor-pointer"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Saving...</span>
              </>
            ) : (
              <>
                <Save className="w-4 h-4" />
                <span>{isEditing ? 'Save Changes' : 'Create Story'}</span>
              </>
            )}
          </button>
        </div>
      </motion.div>
    </div>
  );
};
