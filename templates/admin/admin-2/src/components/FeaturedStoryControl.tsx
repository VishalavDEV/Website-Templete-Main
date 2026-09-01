import React, { useState } from 'react';
import { useEditorial } from '../services/editorialStore';
import { 
  Star, Eye, Bookmark, Share2, Compass, Edit3, 
  ExternalLink, Calendar, Trash2, RefreshCw, CheckCircle2 
} from 'lucide-react';

interface FeaturedStoryControlProps {
  onOpenChangeFeatureModal: () => void;
}

export const FeaturedStoryControl: React.FC<FeaturedStoryControlProps> = ({ onOpenChangeFeatureModal }) => {
  const { 
    stories, 
    removeFeaturedStory, 
    setPreviewStory, 
    setEditingStory,
    setStoryToSchedule,
    setIsScheduleModalOpen 
  } = useEditorial();

  const [isConfirmingRemove, setIsConfirmingRemove] = useState(false);

  const featuredStory = stories.find((s) => s.isFeatured) || stories[0];

  const handlePreview = () => {
    if (featuredStory) setPreviewStory(featuredStory);
  };

  const handleSchedule = () => {
    if (featuredStory) {
      setStoryToSchedule(featuredStory);
      setIsScheduleModalOpen(true);
    }
  };

  const handleRemove = async () => {
    if (featuredStory) {
      await removeFeaturedStory(featuredStory.id);
      setIsConfirmingRemove(false);
    }
  };

  if (!featuredStory) return null;

  return (
    <div 
      id="featured-story-control-card" 
      className="bg-sky-900 rounded-2xl p-6 text-white relative overflow-hidden group shadow-sm mb-6 flex flex-col justify-between"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-sky-400/20 to-transparent pointer-events-none"></div>

      <div className="relative z-10">
        <div className="text-[10px] font-bold text-sky-300 uppercase tracking-widest mb-1">
          Featured Story
        </div>
        <h3 
          id="featured-story-title"
          onClick={handlePreview}
          className="text-lg sm:text-xl font-serif italic mb-2 leading-tight text-white cursor-pointer hover:text-sky-200 transition-colors"
        >
          {featuredStory.title}
        </h3>
        <p className="text-xs text-sky-100/80 line-clamp-2 mb-4 font-light leading-relaxed">
          {featuredStory.subtitle || featuredStory.excerpt}
        </p>
      </div>

      <div className="relative z-10 mt-auto flex items-center justify-between pt-4 border-t border-sky-800/60">
        <span className="text-[10px] text-sky-200 font-medium">
          By {featuredStory.author.name} • {featuredStory.readTime}
        </span>
        <div className="flex items-center space-x-2">
          <button
            id="change-featured-story-btn"
            onClick={onOpenChangeFeatureModal}
            className="bg-sky-800/80 hover:bg-sky-800 text-sky-100 text-[10px] font-bold px-3 py-1.5 rounded-md transition-colors cursor-pointer border border-sky-700"
          >
            CHANGE
          </button>
          <button
            id="preview-featured-story-btn"
            onClick={handlePreview}
            className="bg-white text-sky-900 text-[10px] font-bold px-3 py-1.5 rounded-md hover:bg-sky-50 transition-colors cursor-pointer shadow-sm"
          >
            MANAGE
          </button>
        </div>
      </div>
    </div>
  );
};
