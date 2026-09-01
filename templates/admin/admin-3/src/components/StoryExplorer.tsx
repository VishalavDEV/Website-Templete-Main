import React, { useState } from 'react';
import { Story, SavedView } from '../types';
import { Search, Filter, MoreVertical, Edit3, Eye, Copy, Calendar, Sparkles, Archive, Trash2, Plus, Bookmark } from 'lucide-react';

interface StoryExplorerProps {
  stories: Story[];
  savedViews: SavedView[];
  onSelectStory: (story: Story) => void;
  onEditStory: (story: Story) => void;
  onPreviewStory: (story: Story) => void;
  onDuplicateStory: (story: Story) => void;
  onScheduleStory: (story: Story) => void;
  onFeatureStory: (storyId: string) => void;
  onArchiveStory: (storyId: string) => void;
  onDeleteStory: (storyId: string) => void;
  onCreateNewStory: () => void;
  onSaveView: (view: SavedView) => void;
  onDeleteSavedView: (id: string) => void;
}

export const StoryExplorer: React.FC<StoryExplorerProps> = ({
  stories,
  savedViews,
  onSelectStory,
  onEditStory,
  onPreviewStory,
  onDuplicateStory,
  onScheduleStory,
  onFeatureStory,
  onArchiveStory,
  onDeleteStory,
  onCreateNewStory,
  onSaveView,
  onDeleteSavedView
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [authorFilter, setAuthorFilter] = useState('All');
  const [activeMenuId, setActiveMenuId] = useState<string | null>(null);
  const [newViewName, setNewViewName] = useState('');
  const [showSaveViewModal, setShowSaveViewModal] = useState(false);

  const statuses = ['All', 'Draft', 'Review', 'Approved', 'Scheduled', 'Published', 'Archived'];
  const categories = ['All', 'Discoveries', 'People', 'Medicine', 'Environment', 'Technology', 'Culture', 'Politics'];
  const authors = ['All', 'Maya Lin', 'Daniel Vance', 'Elena Rostova'];

  const filteredStories = stories.filter(story => {
    const matchesSearch = story.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          story.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          story.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesStatus = statusFilter === 'All' || story.status === statusFilter;
    const matchesCategory = categoryFilter === 'All' || story.category === categoryFilter;
    const matchesAuthor = authorFilter === 'All' || story.author === authorFilter;
    return matchesSearch && matchesStatus && matchesCategory && matchesAuthor;
  });

  const clearAllFilters = () => {
    setSearchQuery('');
    setStatusFilter('All');
    setCategoryFilter('All');
    setAuthorFilter('All');
  };

  const handleSaveCurrentView = () => {
    if (!newViewName.trim()) return;
    onSaveView({
      id: `view-${Date.now()}`,
      name: newViewName.trim(),
      filters: {
        status: statusFilter !== 'All' ? statusFilter : undefined,
        category: categoryFilter !== 'All' ? categoryFilter : undefined,
        author: authorFilter !== 'All' ? authorFilter : undefined,
        search: searchQuery || undefined
      }
    });
    setNewViewName('');
    setShowSaveViewModal(false);
  };

  const applySavedView = (view: SavedView) => {
    setStatusFilter(view.filters.status || 'All');
    setCategoryFilter(view.filters.category || 'All');
    setAuthorFilter(view.filters.author || 'All');
    setSearchQuery(view.filters.search || '');
  };

  return (
    <div className="bg-white border border-[#DCE7EC] rounded-2xl p-6 shadow-2xs space-y-6">
      
      {/* Header & New Story Action */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-[10px] font-mono font-bold text-[#718096] uppercase tracking-wider">Magazine Archive</span>
          <h3 className="font-serif font-bold text-[#183B56] text-xl">Editorial Story Explorer</h3>
        </div>
        <button
          onClick={onCreateNewStory}
          className="flex items-center gap-2 px-4 py-2.5 bg-[#183B56] hover:bg-[#203040] text-white text-xs font-semibold rounded-xl transition-all shadow-sm"
        >
          <Plus size={16} /> COMPOSE NEW STORY
        </button>
      </div>

      {/* Saved Views Bar */}
      <div className="flex flex-wrap items-center gap-2 pb-2 border-b border-[#DCE7EC]">
        <span className="text-[11px] font-mono font-bold text-[#718096] uppercase">Saved Views:</span>
        {savedViews.map(view => (
          <div key={view.id} className="flex items-center bg-[#F5F9FB] hover:bg-[#CDEFF4]/30 border border-[#DCE7EC] rounded-xl px-3 py-1 text-xs font-medium text-[#203040] group">
            <button onClick={() => applySavedView(view)} className="mr-2">
              {view.name}
            </button>
            <button
              onClick={() => onDeleteSavedView(view.id)}
              className="text-[#718096] hover:text-[#D97878] opacity-65 group-hover:opacity-100"
              title="Delete view"
            >
              ×
            </button>
          </div>
        ))}
        <button
          onClick={() => setShowSaveViewModal(true)}
          className="text-xs font-semibold text-[#183B56] hover:underline px-2 py-1 flex items-center gap-1"
        >
          <Bookmark size={13} /> Save current view
        </button>
      </div>

      {/* Save View Modal Prompt */}
      {showSaveViewModal && (
        <div className="p-4 bg-[#F5F9FB] border border-[#6FAFD4] rounded-xl flex items-center gap-3">
          <input
            type="text"
            placeholder="Name this custom view..."
            value={newViewName}
            onChange={(e) => setNewViewName(e.target.value)}
            className="flex-1 px-3 py-2 bg-white border border-[#DCE7EC] rounded-lg text-xs text-[#203040]"
          />
          <button
            onClick={handleSaveCurrentView}
            className="px-4 py-2 bg-[#183B56] text-white rounded-lg text-xs font-semibold"
          >
            Save
          </button>
          <button
            onClick={() => setShowSaveViewModal(false)}
            className="px-3 py-2 bg-white border border-[#DCE7EC] text-[#718096] rounded-lg text-xs font-semibold"
          >
            Cancel
          </button>
        </div>
      )}

      {/* Filter System Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 bg-[#F5F9FB] p-4 rounded-xl border border-[#DCE7EC]">
        
        {/* Search */}
        <div className="relative">
          <Search size={15} className="absolute left-3 top-2.5 text-[#718096]" />
          <input
            type="text"
            placeholder="Search stories, tags..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-2 bg-white border border-[#DCE7EC] rounded-xl text-xs text-[#203040] focus:border-[#6FAFD4]"
          />
        </div>

        {/* Status Filter */}
        <div>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="w-full px-3 py-2 bg-white border border-[#DCE7EC] rounded-xl text-xs text-[#203040] focus:border-[#6FAFD4]"
          >
            {statuses.map(st => <option key={st} value={st}>Status: {st}</option>)}
          </select>
        </div>

        {/* Category Filter */}
        <div>
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="w-full px-3 py-2 bg-white border border-[#DCE7EC] rounded-xl text-xs text-[#203040] focus:border-[#6FAFD4]"
          >
            {categories.map(cat => <option key={cat} value={cat}>Category: {cat}</option>)}
          </select>
        </div>

        {/* Author Filter */}
        <div className="flex items-center gap-2">
          <select
            value={authorFilter}
            onChange={(e) => setAuthorFilter(e.target.value)}
            className="flex-1 px-3 py-2 bg-white border border-[#DCE7EC] rounded-xl text-xs text-[#203040] focus:border-[#6FAFD4]"
          >
            {authors.map(au => <option key={au} value={au}>Author: {au}</option>)}
          </select>
          <button
            onClick={clearAllFilters}
            className="px-3 py-2 bg-white hover:bg-[#DCE7EC]/50 border border-[#DCE7EC] rounded-xl text-xs font-semibold text-[#718096]"
          >
            Clear
          </button>
        </div>

      </div>

      {/* Stories Table / List */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-[#DCE7EC] text-[10px] font-mono font-bold text-[#718096] uppercase tracking-wider">
              <th className="py-3 px-4">Story & Author</th>
              <th className="py-3 px-4">Section</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4">Published / Date</th>
              <th className="py-3 px-4">Signals</th>
              <th className="py-3 px-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#DCE7EC]/60 text-xs text-[#203040]">
            {filteredStories.length === 0 ? (
              <tr>
                <td colSpan={6} className="text-center py-12 text-[#718096]">
                  No stories match the selected criteria.
                </td>
              </tr>
            ) : (
              filteredStories.map(story => (
                <tr
                  key={story.id}
                  className="hover:bg-[#F5F9FB] transition-colors group cursor-pointer"
                  onClick={() => onSelectStory(story)}
                >
                  <td className="py-4 px-4 flex items-center gap-3">
                    <img
                      src={story.thumbnail}
                      alt=""
                      className="w-11 h-11 rounded-xl object-cover border border-[#DCE7EC] shrink-0"
                    />
                    <div>
                      <div className="font-serif font-bold text-[#183B56] text-sm group-hover:underline">
                        {story.title}
                      </div>
                      <div className="text-[11px] text-[#718096] mt-0.5">
                        By {story.author} • {story.tags.slice(0, 2).join(', ')}
                      </div>
                    </div>
                  </td>

                  <td className="py-4 px-4">
                    <span className="font-mono text-[11px] bg-[#CDEFF4]/40 text-[#183B56] px-2 py-0.5 rounded">
                      {story.category}
                    </span>
                  </td>

                  <td className="py-4 px-4">
                    <span className={`
                      font-mono text-[10px] px-2 py-0.5 rounded font-bold uppercase
                      ${story.status === 'Published' ? 'bg-[#5FAF8A]/10 text-[#5FAF8A] border border-[#5FAF8A]/30' :
                        story.status === 'Scheduled' ? 'bg-[#183B56]/10 text-[#183B56] border border-[#183B56]/30' :
                        story.status === 'Review' ? 'bg-[#D6A85D]/10 text-[#D6A85D] border border-[#D6A85D]/30' :
                        'bg-[#64748B]/10 text-[#64748B] border border-[#64748B]/30'}
                    `}>
                      {story.status}
                    </span>
                  </td>

                  <td className="py-4 px-4 font-mono text-[11px] text-[#718096]">
                    {story.publishedDate || story.scheduledDate || 'Drafting'}
                  </td>

                  <td className="py-4 px-4">
                    <div className="flex items-center gap-1.5 font-mono text-[11px]">
                      <span className="w-2 h-2 rounded-full bg-[#5FAF8A]" />
                      <span>{story.reads > 0 ? `${story.reads.toLocaleString()} reads` : 'Queued'}</span>
                    </div>
                  </td>

                  <td className="py-4 px-4 text-right relative" onClick={(e) => e.stopPropagation()}>
                    <button
                      onClick={() => setActiveMenuId(activeMenuId === story.id ? null : story.id)}
                      className="p-2 hover:bg-white rounded-xl border border-transparent hover:border-[#DCE7EC] text-[#718096] transition-all"
                    >
                      <MoreVertical size={16} />
                    </button>

                    {activeMenuId === story.id && (
                      <>
                        <div className="fixed inset-0 z-40" onClick={() => setActiveMenuId(null)} />
                        <div className="absolute right-4 mt-1 w-48 bg-white border border-[#DCE7EC] rounded-xl shadow-lg py-2 z-50 text-left text-xs">
                          <button
                            onClick={() => { setActiveMenuId(null); onEditStory(story); }}
                            className="w-full px-4 py-2 hover:bg-[#F5F9FB] flex items-center gap-2 text-[#203040]"
                          >
                            <Edit3 size={14} className="text-[#6FAFD4]" /> Edit Story
                          </button>
                          <button
                            onClick={() => { setActiveMenuId(null); onPreviewStory(story); }}
                            className="w-full px-4 py-2 hover:bg-[#F5F9FB] flex items-center gap-2 text-[#203040]"
                          >
                            <Eye size={14} className="text-[#183B56]" /> Preview
                          </button>
                          <button
                            onClick={() => { setActiveMenuId(null); onDuplicateStory(story); }}
                            className="w-full px-4 py-2 hover:bg-[#F5F9FB] flex items-center gap-2 text-[#203040]"
                          >
                            <Copy size={14} className="text-[#D6A85D]" /> Duplicate
                          </button>
                          <button
                            onClick={() => { setActiveMenuId(null); onScheduleStory(story); }}
                            className="w-full px-4 py-2 hover:bg-[#F5F9FB] flex items-center gap-2 text-[#203040]"
                          >
                            <Calendar size={14} className="text-[#5FAF8A]" /> Schedule
                          </button>
                          <button
                            onClick={() => { setActiveMenuId(null); onFeatureStory(story.id); }}
                            className="w-full px-4 py-2 hover:bg-[#F5F9FB] flex items-center gap-2 text-[#203040]"
                          >
                            <Sparkles size={14} className="text-[#D6A85D]" /> Set as Featured
                          </button>
                          <button
                            onClick={() => { setActiveMenuId(null); onArchiveStory(story.id); }}
                            className="w-full px-4 py-2 hover:bg-[#F5F9FB] flex items-center gap-2 text-[#203040]"
                          >
                            <Archive size={14} className="text-[#64748B]" /> Archive
                          </button>
                          <button
                            onClick={() => { setActiveMenuId(null); onDeleteStory(story.id); }}
                            className="w-full px-4 py-2 hover:bg-[#F5F9FB] flex items-center gap-2 text-[#D97878]"
                          >
                            <Trash2 size={14} /> Delete
                          </button>
                        </div>
                      </>
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

    </div>
  );
};
