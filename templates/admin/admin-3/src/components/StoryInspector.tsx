import React from 'react';
import { Story } from '../types';
import { X, Edit3, Eye, Calendar, Send, Archive, Shield, UserCheck } from 'lucide-react';

interface StoryInspectorProps {
  story: Story | null;
  onClose: () => void;
  onEdit: (story: Story) => void;
  onPreview: (story: Story) => void;
  onPublish: (id: string) => void;
  onSchedule: (story: Story) => void;
  onArchive: (id: string) => void;
}

export const StoryInspector: React.FC<StoryInspectorProps> = ({
  story,
  onClose,
  onEdit,
  onPreview,
  onPublish,
  onSchedule,
  onArchive
}) => {
  if (!story) return null;

  return (
    <>
      <div className="fixed inset-0 bg-[#203040]/30 backdrop-blur-xs z-50" onClick={onClose} />
      
      <div className="fixed inset-y-0 right-0 z-50 w-full max-w-md bg-white border-l border-[#DCE7EC] shadow-xl flex flex-col transform transition-transform duration-300">
        
        {/* Header */}
        <div className="p-5 border-b border-[#DCE7EC] flex items-center justify-between bg-[#F5F9FB]">
          <div>
            <span className="text-[10px] font-mono font-bold text-[#718096] uppercase tracking-wider">Story Inspector</span>
            <h3 className="font-serif font-bold text-[#183B56] text-lg">Metadata & Activity</h3>
          </div>
          <button onClick={onClose} className="p-2 text-[#718096] hover:bg-white rounded-xl border border-[#DCE7EC]">
            <X size={18} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          
          <img
            src={story.thumbnail}
            alt=""
            className="w-full h-48 object-cover rounded-2xl border border-[#DCE7EC]"
          />

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono bg-[#CDEFF4] text-[#183B56] px-2.5 py-0.5 rounded font-semibold uppercase">
                {story.category}
              </span>
              <span className={`text-[10px] font-mono px-2 py-0.5 rounded font-bold uppercase ${story.status === 'Published' ? 'bg-[#5FAF8A]/10 text-[#5FAF8A]' : 'bg-[#D6A85D]/10 text-[#D6A85D]'}`}>
                {story.status}
              </span>
            </div>
            <h2 className="font-serif font-bold text-[#183B56] text-xl leading-tight">{story.title}</h2>
            <p className="text-xs text-[#718096]">{story.excerpt}</p>
          </div>

          {/* Metadata Grid */}
          <div className="grid grid-cols-2 gap-3 p-4 bg-[#F5F9FB] rounded-2xl border border-[#DCE7EC] text-xs">
            <div>
              <p className="text-[10px] font-mono text-[#718096] uppercase">Author</p>
              <p className="font-bold text-[#203040] mt-0.5">{story.author}</p>
            </div>
            <div>
              <p className="text-[10px] font-mono text-[#718096] uppercase">Reviewer</p>
              <p className="font-bold text-[#203040] mt-0.5">{story.reviewer || 'Unassigned'}</p>
            </div>
            <div>
              <p className="text-[10px] font-mono text-[#718096] uppercase">Published Date</p>
              <p className="font-mono text-[#203040] mt-0.5">{story.publishedDate || 'Not live'}</p>
            </div>
            <div>
              <p className="text-[10px] font-mono text-[#718096] uppercase">Signals</p>
              <p className="font-mono text-[#5FAF8A] font-bold mt-0.5">{story.signals}</p>
            </div>
          </div>

          {/* Performance Metrics */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold text-[#718096] uppercase">Performance Metrics</h4>
            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="p-3 bg-[#F5F9FB] border border-[#DCE7EC] rounded-xl">
                <p className="text-lg font-serif font-bold text-[#183B56]">{story.reads.toLocaleString()}</p>
                <p className="text-[10px] font-mono text-[#718096]">Reads</p>
              </div>
              <div className="p-3 bg-[#F5F9FB] border border-[#DCE7EC] rounded-xl">
                <p className="text-lg font-serif font-bold text-[#183B56]">{story.completionRate}%</p>
                <p className="text-[10px] font-mono text-[#718096]">Completion</p>
              </div>
              <div className="p-3 bg-[#F5F9FB] border border-[#DCE7EC] rounded-xl">
                <p className="text-lg font-serif font-bold text-[#183B56]">{story.shares}</p>
                <p className="text-[10px] font-mono text-[#718096]">Shares</p>
              </div>
            </div>
          </div>

          {/* Tags */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono font-bold text-[#718096] uppercase">Tags</h4>
            <div className="flex flex-wrap gap-1.5">
              {story.tags.map((tag, idx) => (
                <span key={idx} className="text-[11px] font-mono bg-[#F5F9FB] border border-[#DCE7EC] px-2.5 py-1 rounded-lg text-[#203040]">
                  #{tag}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="p-4 border-t border-[#DCE7EC] bg-[#F5F9FB] flex flex-wrap items-center gap-2">
          <button
            onClick={() => onEdit(story)}
            className="flex-1 flex items-center justify-center gap-1 px-3 py-2.5 bg-white border border-[#DCE7EC] hover:bg-[#CDEFF4]/20 text-[#183B56] rounded-xl text-xs font-semibold"
          >
            <Edit3 size={14} /> Edit
          </button>
          <button
            onClick={() => onPreview(story)}
            className="flex-1 flex items-center justify-center gap-1 px-3 py-2.5 bg-white border border-[#DCE7EC] hover:bg-[#CDEFF4]/20 text-[#183B56] rounded-xl text-xs font-semibold"
          >
            <Eye size={14} /> Preview
          </button>
          {story.status !== 'Published' && (
            <button
              onClick={() => onPublish(story.id)}
              className="w-full flex items-center justify-center gap-1 px-3 py-2.5 bg-[#5FAF8A] text-white rounded-xl text-xs font-semibold hover:bg-[#4E9E79]"
            >
              <Send size={14} /> Publish Now
            </button>
          )}
        </div>

      </div>
    </>
  );
};
