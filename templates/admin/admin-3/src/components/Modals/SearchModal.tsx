import React, { useState, useEffect } from 'react';
import { Search, X, FileText, Users, Layers, Shield, ArrowRight } from 'lucide-react';
import { Story } from '../../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  stories: Story[];
  onSelectStory: (story: Story) => void;
  onNavigate: (view: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  stories,
  onSelectStory,
  onNavigate
}) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        // Toggle search
      }
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  const matchingStories = stories.filter(s =>
    s.title.toLowerCase().includes(query.toLowerCase()) ||
    s.author.toLowerCase().includes(query.toLowerCase()) ||
    s.category.toLowerCase().includes(query.toLowerCase())
  );

  const mockAuthors = ['Maya Lin', 'Daniel Vance', 'Elena Rostova'].filter(a => a.toLowerCase().includes(query.toLowerCase()));
  const mockCollections = ['Newton Collection', 'Galileo Observatory', 'Quantum Pioneers'].filter(c => c.toLowerCase().includes(query.toLowerCase()));

  return (
    <>
      <div className="fixed inset-0 bg-[#203040]/40 backdrop-blur-xs z-50 animate-fadeIn" onClick={onClose} />
      
      <div className="fixed inset-x-4 top-20 max-w-2xl mx-auto z-50 bg-white border border-[#DCE7EC] rounded-2xl shadow-2xl overflow-hidden animate-scaleIn">
        
        {/* Search Input Bar */}
        <div className="p-4 border-b border-[#DCE7EC] flex items-center gap-3 bg-[#F5F9FB]">
          <Search size={18} className="text-[#64748B]" />
          <input
            autoFocus
            type="text"
            placeholder="Search stories, people, media, readers, tasks, settings..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 bg-transparent border-none outline-none text-sm text-[#203040] placeholder-[#718096]"
          />
          <button onClick={onClose} className="p-1.5 text-[#718096] hover:bg-white rounded-lg border border-[#DCE7EC]">
            <X size={16} />
          </button>
        </div>

        {/* Results Container */}
        <div className="max-h-96 overflow-y-auto p-4 space-y-4 text-xs">
          
          {/* Stories */}
          <div className="space-y-1">
            <p className="text-[10px] font-mono font-bold text-[#718096] uppercase tracking-wider px-2">Stories ({matchingStories.length})</p>
            {matchingStories.length === 0 ? (
              <p className="px-2 py-3 text-[#718096]">No stories found.</p>
            ) : (
              matchingStories.map(story => (
                <div
                  key={story.id}
                  onClick={() => { onSelectStory(story); onClose(); }}
                  className="flex items-center justify-between p-2.5 rounded-xl hover:bg-[#F5F9FB] cursor-pointer group transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <FileText size={15} className="text-[#6FAFD4]" />
                    <div>
                      <p className="font-serif font-bold text-[#183B56] group-hover:underline">{story.title}</p>
                      <p className="text-[10px] text-[#718096]">By {story.author} • {story.category}</p>
                    </div>
                  </div>
                  <ArrowRight size={14} className="text-[#718096] opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              ))
            )}
          </div>

          {/* Authors */}
          {mockAuthors.length > 0 && (
            <div className="space-y-1 pt-2 border-t border-[#DCE7EC]">
              <p className="text-[10px] font-mono font-bold text-[#718096] uppercase tracking-wider px-2">Authors</p>
              {mockAuthors.map(author => (
                <div
                  key={author}
                  onClick={() => { onNavigate('explorer'); onClose(); }}
                  className="flex items-center justify-between p-2.5 rounded-xl hover:bg-[#F5F9FB] cursor-pointer group"
                >
                  <div className="flex items-center gap-2.5">
                    <Users size={15} className="text-[#5FAF8A]" />
                    <p className="font-semibold text-[#203040]">{author}</p>
                  </div>
                  <span className="text-[10px] font-mono text-[#718096]">Staff Writer</span>
                </div>
              ))}
            </div>
          )}

          {/* Collections */}
          {mockCollections.length > 0 && (
            <div className="space-y-1 pt-2 border-t border-[#DCE7EC]">
              <p className="text-[10px] font-mono font-bold text-[#718096] uppercase tracking-wider px-2">Collections</p>
              {mockCollections.map(col => (
                <div
                  key={col}
                  onClick={() => { onNavigate('collections'); onClose(); }}
                  className="flex items-center justify-between p-2.5 rounded-xl hover:bg-[#F5F9FB] cursor-pointer group"
                >
                  <div className="flex items-center gap-2.5">
                    <Layers size={15} className="text-[#D6A85D]" />
                    <p className="font-semibold text-[#203040]">{col}</p>
                  </div>
                  <span className="text-[10px] font-mono text-[#718096]">Archive</span>
                </div>
              ))}
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="p-3 bg-[#F5F9FB] border-t border-[#DCE7EC] flex items-center justify-between text-[11px] text-[#718096]">
          <span>Navigate with arrow keys</span>
          <span>Press ESC to close</span>
        </div>

      </div>
    </>
  );
};
