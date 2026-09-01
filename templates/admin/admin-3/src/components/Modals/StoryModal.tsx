import React, { useState } from 'react';
import { Story, StoryCategory, StoryStatus } from '../../types';
import { X, Sparkles, Check, AlertCircle } from 'lucide-react';

interface StoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  story?: Story | null;
  onSave: (storyData: Partial<Story>) => Promise<void>;
}

export const StoryModal: React.FC<StoryModalProps> = ({
  isOpen,
  onClose,
  story,
  onSave
}) => {
  const [title, setTitle] = useState(story?.title || '');
  const [excerpt, setExcerpt] = useState(story?.excerpt || '');
  const [content, setContent] = useState(story?.content || '');
  const [category, setCategory] = useState<StoryCategory>(story?.category || 'Discoveries');
  const [status, setStatus] = useState<StoryStatus>(story?.status || 'Draft');
  const [author, setAuthor] = useState(story?.author || 'Maya Lin');
  const [thumbnail, setThumbnail] = useState(story?.thumbnail || 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600');
  const [tagsInput, setTagsInput] = useState(story?.tags?.join(', ') || 'Research, Editorial');
  
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !excerpt.trim()) {
      setError('Title and excerpt are required.');
      return;
    }
    setError('');
    setLoading(true);

    try {
      await onSave({
        id: story?.id,
        title,
        excerpt,
        content,
        category,
        status,
        author,
        thumbnail,
        tags: tagsInput.split(',').map(t => t.trim()).filter(Boolean)
      });
      setLoading(false);
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        onClose();
      }, 700);
    } catch (err) {
      setLoading(false);
      setError('Failed to save story.');
    }
  };

  return (
    <>
      <div className="fixed inset-0 bg-[#203040]/40 backdrop-blur-xs z-50" onClick={onClose} />
      
      <div className="fixed inset-4 md:inset-x-auto md:inset-y-10 md:max-w-2xl md:mx-auto z-50 bg-white border border-[#DCE7EC] rounded-2xl shadow-2xl flex flex-col overflow-hidden">
        
        {/* Header */}
        <div className="p-5 border-b border-[#DCE7EC] flex items-center justify-between bg-[#F5F9FB]">
          <div className="flex items-center gap-2">
            <Sparkles size={18} className="text-[#183B56]" />
            <h3 className="font-serif font-bold text-[#183B56] text-lg">
              {story ? 'Edit Research Story' : 'Compose New Story'}
            </h3>
          </div>
          <button onClick={onClose} className="p-2 text-[#718096] hover:bg-white rounded-xl border border-[#DCE7EC]">
            <X size={18} />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-6 space-y-4 text-xs">
          
          {error && (
            <div className="p-3 bg-[#D97878]/10 border border-[#D97878]/30 text-[#D97878] rounded-xl flex items-center gap-2">
              <AlertCircle size={15} />
              <span>{error}</span>
            </div>
          )}

          {success && (
            <div className="p-3 bg-[#5FAF8A]/10 border border-[#5FAF8A]/30 text-[#5FAF8A] rounded-xl flex items-center gap-2">
              <Check size={15} />
              <span>Story saved successfully!</span>
            </div>
          )}

          <div className="space-y-1.5">
            <label className="font-mono font-bold text-[#718096] uppercase">Story Title</label>
            <input
              type="text"
              required
              placeholder="e.g. The Cartography of Dark Energy"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-[#F5F9FB] border border-[#DCE7EC] rounded-xl text-sm text-[#203040] focus:border-[#6FAFD4]"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="font-mono font-bold text-[#718096] uppercase">Section Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as StoryCategory)}
                className="w-full px-3.5 py-2.5 bg-[#F5F9FB] border border-[#DCE7EC] rounded-xl text-xs text-[#203040]"
              >
                {['Discoveries', 'People', 'Medicine', 'Environment', 'Technology', 'Culture', 'Politics'].map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="font-mono font-bold text-[#718096] uppercase">Editorial Status</label>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value as StoryStatus)}
                className="w-full px-3.5 py-2.5 bg-[#F5F9FB] border border-[#DCE7EC] rounded-xl text-xs text-[#203040]"
              >
                {['Draft', 'Review', 'Approved', 'Scheduled', 'Published', 'Archived'].map(st => (
                  <option key={st} value={st}>{st}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="font-mono font-bold text-[#718096] uppercase">Author</label>
              <input
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-[#F5F9FB] border border-[#DCE7EC] rounded-xl text-xs text-[#203040]"
              />
            </div>

            <div className="space-y-1.5">
              <label className="font-mono font-bold text-[#718096] uppercase">Thumbnail Image URL</label>
              <input
                type="text"
                value={thumbnail}
                onChange={(e) => setThumbnail(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-[#F5F9FB] border border-[#DCE7EC] rounded-xl text-xs text-[#203040]"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="font-mono font-bold text-[#718096] uppercase">Excerpt / Summary</label>
            <textarea
              rows={2}
              required
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-[#F5F9FB] border border-[#DCE7EC] rounded-xl text-xs text-[#203040]"
            />
          </div>

          <div className="space-y-1.5">
            <label className="font-mono font-bold text-[#718096] uppercase">Full Research Content / Manuscript</label>
            <textarea
              rows={4}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-[#F5F9FB] border border-[#DCE7EC] rounded-xl text-xs text-[#203040]"
            />
          </div>

          <div className="space-y-1.5">
            <label className="font-mono font-bold text-[#718096] uppercase">Tags (comma separated)</label>
            <input
              type="text"
              value={tagsInput}
              onChange={(e) => setTagsInput(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-[#F5F9FB] border border-[#DCE7EC] rounded-xl text-xs text-[#203040]"
            />
          </div>

          <div className="pt-4 border-t border-[#DCE7EC] flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 bg-[#F5F9FB] border border-[#DCE7EC] rounded-xl text-xs font-semibold text-[#718096]"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-5 py-2.5 bg-[#183B56] hover:bg-[#203040] text-white rounded-xl text-xs font-semibold transition-all shadow-sm disabled:opacity-50"
            >
              {loading ? 'Saving...' : 'Save Story'}
            </button>
          </div>
        </form>

      </div>
    </>
  );
};
