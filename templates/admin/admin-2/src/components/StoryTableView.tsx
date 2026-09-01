import React, { useState, useMemo } from 'react';
import { useEditorial } from '../services/editorialStore';
import { Story, StoryStatus } from '../types';
import { 
  Search, Filter, SlidersHorizontal, Eye, Edit3, Copy, 
  Calendar, Star, Archive, Trash2, MoreVertical, Plus, 
  CheckCircle, ArrowUpDown, X, ExternalLink, ChevronLeft, ChevronRight 
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface StoryTableViewProps {
  initialStatusFilter?: string | null;
}

export const StoryTableView: React.FC<StoryTableViewProps> = ({ initialStatusFilter }) => {
  const { 
    stories, 
    authors,
    pipelineFilter,
    setPipelineFilter,
    setPreviewStory, 
    setEditingStory, 
    duplicateStory, 
    deleteStory, 
    publishStory,
    setFeaturedStory,
    setStoryToSchedule,
    setIsScheduleModalOpen,
    setIsNewStoryModalOpen,
    addToast
  } = useEditorial();

  const [statusFilter, setStatusFilter] = useState<string>(initialStatusFilter || pipelineFilter || 'all');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [authorFilter, setAuthorFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortField, setSortField] = useState<'date' | 'views' | 'completion' | 'title'>('date');
  const [sortOrder, setSortOrder] = useState<'desc' | 'asc'>('desc');
  const [selectedStoryIds, setSelectedStoryIds] = useState<string[]>([]);
  const [activeMenuStoryId, setActiveMenuStoryId] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Sync status if pipelineFilter changed externally
  React.useEffect(() => {
    if (pipelineFilter) {
      setStatusFilter(pipelineFilter);
    }
  }, [pipelineFilter]);

  const categories = ['Cosmology', 'Quantum Physics', 'Neuroscience', 'Earth & Climate', 'Deep Biology', 'History of Science'];

  const filteredAndSortedStories = useMemo(() => {
    return stories.filter((story) => {
      // Status Filter
      if (statusFilter !== 'all' && story.status !== statusFilter) return false;
      // Category Filter
      if (categoryFilter !== 'all' && story.category !== categoryFilter) return false;
      // Author Filter
      if (authorFilter !== 'all' && story.author.name !== authorFilter) return false;
      // Search Query Filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchTitle = story.title.toLowerCase().includes(q);
        const matchExcerpt = story.excerpt.toLowerCase().includes(q);
        const matchAuthor = story.author.name.toLowerCase().includes(q);
        const matchCategory = story.category.toLowerCase().includes(q);
        const matchTag = story.tags.some((t) => t.toLowerCase().includes(q));
        if (!matchTitle && !matchExcerpt && !matchAuthor && !matchCategory && !matchTag) {
          return false;
        }
      }
      return true;
    }).sort((a, b) => {
      let comparison = 0;
      if (sortField === 'date') {
        const dateA = new Date(a.publishedAt || a.createdAt).getTime();
        const dateB = new Date(b.publishedAt || b.createdAt).getTime();
        comparison = dateB - dateA;
      } else if (sortField === 'views') {
        comparison = (b.views || 0) - (a.views || 0);
      } else if (sortField === 'completion') {
        comparison = (b.completionRate || 0) - (a.completionRate || 0);
      } else if (sortField === 'title') {
        comparison = a.title.localeCompare(b.title);
      }
      return sortOrder === 'desc' ? comparison : -comparison;
    });
  }, [stories, statusFilter, categoryFilter, authorFilter, searchQuery, sortField, sortOrder]);

  const totalPages = Math.ceil(filteredAndSortedStories.length / itemsPerPage) || 1;
  const paginatedStories = filteredAndSortedStories.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleSelectAll = () => {
    if (selectedStoryIds.length === paginatedStories.length) {
      setSelectedStoryIds([]);
    } else {
      setSelectedStoryIds(paginatedStories.map((s) => s.id));
    }
  };

  const handleToggleSelect = (id: string) => {
    setSelectedStoryIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleBatchPublish = async () => {
    for (const id of selectedStoryIds) {
      await publishStory(id);
    }
    setSelectedStoryIds([]);
  };

  const handleBatchDelete = async () => {
    for (const id of selectedStoryIds) {
      await deleteStory(id);
    }
    setSelectedStoryIds([]);
  };

  const clearAllFilters = () => {
    setStatusFilter('all');
    setCategoryFilter('all');
    setAuthorFilter('all');
    setSearchQuery('');
    setPipelineFilter(null);
    setCurrentPage(1);
  };

  const isFilterActive = statusFilter !== 'all' || categoryFilter !== 'all' || authorFilter !== 'all' || searchQuery !== '';

  const getStatusBadge = (status: StoryStatus) => {
    switch (status) {
      case 'published':
        return <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase bg-emerald-50 text-emerald-800 border border-emerald-200">Published</span>;
      case 'scheduled':
        return <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase bg-sky-50 text-sky-800 border border-sky-200">Scheduled</span>;
      case 'approved':
        return <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase bg-indigo-50 text-indigo-800 border border-indigo-200">Approved</span>;
      case 'review':
        return <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase bg-amber-50 text-amber-800 border border-amber-200">In Review</span>;
      case 'draft':
        return <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase bg-slate-100 text-slate-700 border border-slate-200">Draft</span>;
      case 'archived':
        return <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase bg-slate-100 text-slate-500 border border-slate-200">Archived</span>;
    }
  };

  return (
    <div id="story-table-view-container" className="space-y-4">
      
      {/* Control Bar: Filters, Search, and New Story Action */}
      <div className="p-4 rounded-2xl bg-white border border-sky-50 shadow-sm space-y-3">
        
        {/* Top Line: Search & Primary Action */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              id="story-table-search-input"
              type="text"
              placeholder="Search by title, author, keyword, or tag..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full pl-9 pr-8 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-100 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-400 text-slate-900 placeholder:text-slate-400"
            />
            {searchQuery && (
              <button
                id="clear-story-search-btn"
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-0.5"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          <div className="flex items-center gap-2">
            <button
              id="table-create-story-btn"
              onClick={() => setIsNewStoryModalOpen(true)}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-sky-500 hover:bg-sky-600 text-white font-bold text-xs shadow-xs transition-all cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span>NEW STORY</span>
            </button>
          </div>
        </div>

        {/* Filter Dropdowns & Sort */}
        <div className="flex flex-wrap items-center justify-between gap-2.5 pt-2 border-t border-slate-100 text-xs">
          
          <div className="flex flex-wrap items-center gap-2">
            
            {/* Status Selector */}
            <div className="flex items-center gap-1.5">
              <span className="text-slate-500 font-medium">Status:</span>
              <select
                id="filter-status-select"
                value={statusFilter}
                onChange={(e) => {
                  setStatusFilter(e.target.value);
                  setCurrentPage(1);
                }}
                className="px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-100 text-slate-800 font-medium focus:outline-none focus:ring-1 focus:ring-sky-400"
              >
                <option value="all">All Statuses ({stories.length})</option>
                <option value="draft">Drafts</option>
                <option value="review">In Review</option>
                <option value="approved">Approved</option>
                <option value="scheduled">Scheduled</option>
                <option value="published">Published</option>
              </select>
            </div>

            {/* Category Selector */}
            <div className="flex items-center gap-1.5">
              <span className="text-slate-500 font-medium">Category:</span>
              <select
                id="filter-category-select"
                value={categoryFilter}
                onChange={(e) => {
                  setCategoryFilter(e.target.value);
                  setCurrentPage(1);
                }}
                className="px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-100 text-slate-800 font-medium focus:outline-none focus:ring-1 focus:ring-sky-400"
              >
                <option value="all">All Categories</option>
                {categories.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>

            {/* Author Selector */}
            <div className="flex items-center gap-1.5">
              <span className="text-slate-500 font-medium">Author:</span>
              <select
                id="filter-author-select"
                value={authorFilter}
                onChange={(e) => {
                  setAuthorFilter(e.target.value);
                  setCurrentPage(1);
                }}
                className="px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-100 text-slate-800 font-medium focus:outline-none focus:ring-1 focus:ring-sky-400"
              >
                <option value="all">All Authors</option>
                {authors.map((a) => (
                  <option key={a.id} value={a.name}>{a.name}</option>
                ))}
              </select>
            </div>

            {isFilterActive && (
              <button
                id="clear-all-table-filters-btn"
                onClick={clearAllFilters}
                className="flex items-center gap-1 text-sky-700 hover:text-sky-900 font-semibold px-2 py-1 rounded-lg bg-sky-50 border border-sky-100 transition-colors"
              >
                <X className="w-3 h-3" />
                Clear Filters
              </button>
            )}
          </div>

          {/* Sort Controller */}
          <div className="flex items-center gap-2">
            <span className="text-slate-500 font-medium">Sort by:</span>
            <select
              id="table-sort-field-select"
              value={sortField}
              onChange={(e) => setSortField(e.target.value as any)}
              className="px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-100 text-slate-800 font-medium focus:outline-none"
            >
              <option value="date">Date</option>
              <option value="views">Reads (Views)</option>
              <option value="completion">Completion %</option>
              <option value="title">Title</option>
            </select>

            <button
              id="table-sort-order-toggle-btn"
              onClick={() => setSortOrder((prev) => (prev === 'desc' ? 'asc' : 'desc'))}
              className="p-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
              title={sortOrder === 'desc' ? 'Descending' : 'Ascending'}
            >
              <ArrowUpDown className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>

      {/* Batch Operations Bar (if items selected) */}
      {selectedStoryIds.length > 0 && (
        <div 
          id="batch-actions-bar" 
          className="p-3 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-between gap-3 text-xs"
        >
          <div className="flex items-center gap-2 font-semibold text-sky-950">
            <CheckCircle className="w-4 h-4 text-sky-600" />
            <span>{selectedStoryIds.length} stories selected</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              id="batch-publish-btn"
              onClick={handleBatchPublish}
              className="px-2.5 py-1 rounded-lg bg-sky-500 hover:bg-sky-600 text-white font-semibold transition-colors shadow-2xs"
            >
              Publish Selected
            </button>

            <button
              id="batch-delete-btn"
              onClick={handleBatchDelete}
              className="px-2.5 py-1 rounded-lg bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 font-semibold transition-colors"
            >
              Delete Selected
            </button>

            <button
              id="batch-clear-btn"
              onClick={() => setSelectedStoryIds([])}
              className="text-slate-500 hover:text-slate-700 px-2 py-1"
            >
              Deselect All
            </button>
          </div>
        </div>
      )}

      {/* Editorial Rows Container */}
      <div 
        id="editorial-story-rows" 
        className="space-y-2.5"
      >
        {paginatedStories.length === 0 ? (
          <div className="p-12 text-center bg-white rounded-2xl border border-sky-50 shadow-sm">
            <Search className="w-8 h-8 text-slate-300 mx-auto mb-2" />
            <h3 className="text-sm font-bold text-slate-800">No stories match your criteria</h3>
            <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
              Try adjusting your active filters or clear search query to view the full science repository.
            </p>
            <button
              id="empty-state-reset-filters-btn"
              onClick={clearAllFilters}
              className="mt-3 px-3 py-1.5 text-xs font-semibold text-sky-700 bg-sky-50 hover:bg-sky-100 rounded-lg border border-sky-200 transition-colors"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          paginatedStories.map((story) => {
            const isSelected = selectedStoryIds.includes(story.id);
            const isMenuOpen = activeMenuStoryId === story.id;

            return (
              <div
                key={story.id}
                id={`story-row-${story.id}`}
                className={`group relative p-3.5 sm:p-4 rounded-xl border transition-all ${
                  isSelected
                    ? 'bg-sky-50/70 border-sky-200 ring-1 ring-sky-200 shadow-xs'
                    : 'bg-white border-sky-50 hover:border-sky-200 hover:shadow-xs shadow-2xs'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  
                  {/* Left: Checkbox + Thumbnail + Story Info */}
                  <div className="flex items-start sm:items-center gap-3 min-w-0 flex-1">
                    <input
                      type="checkbox"
                      checked={isSelected}
                      onChange={() => handleToggleSelect(story.id)}
                      className="mt-1 sm:mt-0 rounded text-sky-500 focus:ring-sky-400 cursor-pointer h-4 w-4 border-slate-300"
                    />

                    {/* Thumbnail */}
                    <div className="relative w-16 sm:w-20 aspect-16/10 rounded-lg overflow-hidden shrink-0 bg-slate-100 border border-slate-200/60">
                      <img
                        src={story.heroImage}
                        alt={story.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {story.isFeatured && (
                        <div className="absolute top-1 left-1 p-0.5 rounded bg-amber-400 text-slate-900 shadow-2xs">
                          <Star className="w-2.5 h-2.5 fill-slate-900" />
                        </div>
                      )}
                    </div>

                    {/* Title + Deck + Category */}
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2 mb-0.5 flex-wrap">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-sky-800 px-1.5 py-0.2 rounded bg-sky-50 border border-sky-100">
                          {story.category}
                        </span>
                        {getStatusBadge(story.status)}
                        <span className="text-[11px] text-slate-500 font-data">
                          {story.readTime}
                        </span>
                      </div>

                      <h3
                        onClick={() => setPreviewStory(story)}
                        className="text-sm sm:text-base font-serif italic text-slate-900 hover:text-sky-700 transition-colors cursor-pointer truncate"
                      >
                        {story.title}
                      </h3>

                      <p className="text-xs text-slate-500 line-clamp-1 mt-0.5 font-light">
                        {story.subtitle || story.excerpt}
                      </p>
                    </div>

                  </div>

                  {/* Middle: Author profile */}
                  <div className="hidden md:flex items-center gap-2 shrink-0 px-2 min-w-[140px]">
                    <img
                      src={story.author.avatar}
                      alt={story.author.name}
                      className="w-6 h-6 rounded-full object-cover ring-1 ring-slate-200"
                    />
                    <div className="text-left">
                      <div className="text-xs font-semibold text-slate-800 truncate max-w-[110px]">
                        {story.author.name}
                      </div>
                      <div className="text-[10px] text-slate-500 font-data">
                        {story.publishedAt ? new Date(story.publishedAt).toLocaleDateString() : 'In production'}
                      </div>
                    </div>
                  </div>

                  {/* Right: Performance Metrics & Quick Action Buttons */}
                  <div className="flex items-center justify-between sm:justify-end gap-3 shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-100">
                    
                    {/* Performance mini stats */}
                    <div className="flex items-center gap-3 text-right">
                      <div>
                        <div className="text-[10px] text-slate-500 uppercase font-bold">Reads</div>
                        <div className="text-xs font-bold font-data text-slate-900">
                          {story.views > 0 ? story.views.toLocaleString() : '—'}
                        </div>
                      </div>
                      <div className="hidden lg:block pl-2 border-l border-slate-200">
                        <div className="text-[10px] text-slate-500 uppercase font-bold">Depth</div>
                        <div className="text-xs font-bold font-data text-slate-900">
                          {story.completionRate ? `${story.completionRate}%` : '—'}
                        </div>
                      </div>
                    </div>

                    {/* Contextual Action Menu Trigger */}
                    <div className="relative">
                      <div className="flex items-center gap-1">
                        <button
                          id={`preview-story-row-btn-${story.id}`}
                          onClick={() => setPreviewStory(story)}
                          className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
                          title="Preview story in reader mode"
                        >
                          <Eye className="w-3.5 h-3.5" />
                        </button>

                        <button
                          id={`edit-story-row-btn-${story.id}`}
                          onClick={() => setEditingStory(story)}
                          className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
                          title="Edit story content and metadata"
                        >
                          <Edit3 className="w-3.5 h-3.5" />
                        </button>

                        <button
                          id={`story-row-more-menu-btn-${story.id}`}
                          onClick={() => setActiveMenuStoryId(isMenuOpen ? null : story.id)}
                          className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors focus:outline-none"
                        >
                          <MoreVertical className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Dropdown Menu */}
                      <AnimatePresence>
                        {isMenuOpen && (
                          <motion.div
                            id={`story-dropdown-menu-${story.id}`}
                            initial={{ opacity: 0, scale: 0.95, y: 4 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 4 }}
                            className="absolute right-0 top-8 w-44 bg-white rounded-xl shadow-xl border border-sky-50 py-1.5 z-30 text-xs font-medium text-slate-700"
                          >
                            {story.status !== 'published' && (
                              <button
                                id={`menu-publish-story-${story.id}`}
                                onClick={() => {
                                  publishStory(story.id);
                                  setActiveMenuStoryId(null);
                                }}
                                className="w-full flex items-center gap-2 px-3 py-1.5 text-left text-emerald-700 hover:bg-emerald-50 transition-colors"
                              >
                                <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                                <span>Publish Now</span>
                              </button>
                            )}

                            <button
                              id={`menu-feature-story-${story.id}`}
                              onClick={() => {
                                setFeaturedStory(story.id);
                                setActiveMenuStoryId(null);
                              }}
                              className="w-full flex items-center gap-2 px-3 py-1.5 text-left hover:bg-sky-50 text-slate-800 transition-colors"
                            >
                              <Star className="w-3.5 h-3.5 text-amber-500" />
                              <span>Set as Lead Feature</span>
                            </button>

                            <button
                              id={`menu-schedule-story-${story.id}`}
                              onClick={() => {
                                setStoryToSchedule(story);
                                setIsScheduleModalOpen(true);
                                setActiveMenuStoryId(null);
                              }}
                              className="w-full flex items-center gap-2 px-3 py-1.5 text-left hover:bg-sky-50 text-slate-800 transition-colors"
                            >
                              <Calendar className="w-3.5 h-3.5 text-sky-600" />
                              <span>Schedule Release</span>
                            </button>

                            <button
                              id={`menu-duplicate-story-${story.id}`}
                              onClick={() => {
                                duplicateStory(story.id);
                                setActiveMenuStoryId(null);
                              }}
                              className="w-full flex items-center gap-2 px-3 py-1.5 text-left hover:bg-sky-50 text-slate-800 transition-colors"
                            >
                              <Copy className="w-3.5 h-3.5 text-slate-500" />
                              <span>Duplicate Story</span>
                            </button>

                            <div className="border-t border-slate-100 my-1"></div>

                            <button
                              id={`menu-delete-story-${story.id}`}
                              onClick={() => {
                                deleteStory(story.id);
                                setActiveMenuStoryId(null);
                              }}
                              className="w-full flex items-center gap-2 px-3 py-1.5 text-left text-rose-700 hover:bg-rose-50 transition-colors"
                            >
                              <Trash2 className="w-3.5 h-3.5 text-rose-500" />
                              <span>Delete Story</span>
                            </button>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                  </div>

                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Pagination Strip */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between p-3 rounded-xl bg-white border border-sky-50 shadow-sm text-xs">
          <span className="text-slate-500">
            Showing {(currentPage - 1) * itemsPerPage + 1} to {Math.min(currentPage * itemsPerPage, filteredAndSortedStories.length)} of {filteredAndSortedStories.length} stories
          </span>

          <div className="flex items-center gap-1">
            <button
              id="pagination-prev-btn"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              className="p-1 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-100 disabled:opacity-40 disabled:pointer-events-none transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                id={`pagination-page-${i + 1}`}
                onClick={() => setCurrentPage(i + 1)}
                className={`w-7 h-7 rounded-lg text-xs font-semibold transition-all ${
                  currentPage === i + 1
                    ? 'bg-sky-500 text-white'
                    : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
                }`}
              >
                {i + 1}
              </button>
            ))}

            <button
              id="pagination-next-btn"
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
              className="p-1 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-100 disabled:opacity-40 disabled:pointer-events-none transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

    </div>
  );
};
