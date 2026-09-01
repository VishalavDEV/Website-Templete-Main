import React, { useState } from 'react';
import { useEditorial } from '../services/editorialStore';
import { Author } from '../types';
import { 
  Users, UserPlus, BookOpen, CheckCircle, ExternalLink, 
  Mail, Award, SlidersHorizontal, Plus, X 
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const TeamAuthorsView: React.FC = () => {
  const { 
    authors, 
    createAuthor, 
    stories, 
    setActiveView, 
    setTaskToAssign, 
    setIsAssignTaskModalOpen,
    addToast 
  } = useEditorial();

  const [isAddAuthorOpen, setIsAddAuthorOpen] = useState(false);
  const [name, setName] = useState('');
  const [role, setRole] = useState('Staff Science Writer');
  const [bio, setBio] = useState('');
  const [avatar, setAvatar] = useState('https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80');

  const handleAssign = (author: Author) => {
    setTaskToAssign({
      id: `task_new_${Date.now()}`,
      title: `Draft science manuscript assignment for ${author.name}`,
      description: 'Peer-reviewed review or exploration article.',
      priority: 'medium',
      assignee: author.name,
      createdAt: new Date().toISOString(),
      completed: false
    });
    setIsAssignTaskModalOpen(true);
  };

  const handleViewStories = (authorName: string) => {
    setActiveView('content_all');
  };

  const handleCreateAuthor = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    await createAuthor({
      name,
      role,
      bio: bio || 'Science contributor to Elemental Magazine.',
      avatar,
      email: `${name.toLowerCase().replace(/\s+/g, '.')}@elemental.org`
    });

    setIsAddAuthorOpen(false);
    setName('');
    setBio('');
  };

  return (
    <div id="team-authors-view" className="space-y-6">
      
      {/* Header */}
      <div className="p-6 rounded-2xl bg-white border border-sky-50 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-sky-50 text-sky-600 border border-sky-100">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-serif text-xl font-bold text-slate-900">
                Editorial Roster &amp; Staff Writers
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Senior science editors, astrophysicists, laboratory historians, and staff essayists.
              </p>
            </div>
          </div>
        </div>

        <button
          id="add-new-contributor-btn"
          onClick={() => setIsAddAuthorOpen(true)}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-sky-500 hover:bg-sky-600 active:bg-sky-700 text-white text-xs font-semibold shadow-sm transition-all self-start sm:self-auto cursor-pointer"
        >
          <UserPlus className="w-4 h-4" />
          <span>Add Contributor</span>
        </button>
      </div>

      {/* Author Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {authors.map((author) => {
          const authorStories = stories.filter((s) => s.author.name === author.name);
          const totalReads = authorStories.reduce((sum, s) => sum + (s.views || 0), 0);

          return (
            <div
              key={author.id}
              id={`author-card-${author.id}`}
              className="p-5 rounded-2xl bg-white border border-sky-50 shadow-sm hover:border-sky-200 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Profile Top */}
                <div className="flex items-start gap-3.5 mb-3">
                  <img
                    src={author.avatar}
                    alt={author.name}
                    className="w-13 h-13 rounded-xl object-cover ring-2 ring-sky-100 shadow-2xs shrink-0"
                  />
                  <div className="min-w-0">
                    <h3 className="font-serif text-base font-bold text-slate-900 truncate">
                      {author.name}
                    </h3>
                    <div className="text-xs text-sky-800 font-medium">
                      {author.role}
                    </div>
                    <div className="flex items-center gap-1 mt-1 text-[11px] text-slate-500">
                      <Award className="w-3 h-3 text-amber-500" />
                      <span>Elemental Senior Fellow</span>
                    </div>
                  </div>
                </div>

                {/* Bio */}
                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 mb-4">
                  {author.bio}
                </p>

                {/* Metrics Box */}
                <div className="grid grid-cols-3 gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-100 mb-4 text-center">
                  <div>
                    <div className="text-[10px] text-slate-400 uppercase font-bold">Published</div>
                    <div className="text-sm font-bold text-slate-900">
                      {author.articlesCount || authorStories.length}
                    </div>
                  </div>
                  <div className="border-x border-slate-200">
                    <div className="text-[10px] text-slate-400 uppercase font-bold">Active Tasks</div>
                    <div className="text-sm font-bold text-slate-900">
                      {author.activeAssignments}
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 uppercase font-bold">Reads</div>
                    <div className="text-sm font-bold text-slate-900">
                      {totalReads > 0 ? `${(totalReads / 1000).toFixed(1)}k` : '18.4k'}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                <button
                  id={`assign-task-to-author-btn-${author.id}`}
                  onClick={() => handleAssign(author)}
                  className="flex-1 flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-50 hover:bg-sky-100 text-sky-900 text-xs font-semibold border border-sky-100 transition-colors cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5 text-sky-600" />
                  <span>Assign Piece</span>
                </button>

                <button
                  id={`view-author-pieces-btn-${author.id}`}
                  onClick={() => handleViewStories(author.name)}
                  className="px-3 py-1.5 rounded-lg bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-medium border border-slate-200 transition-colors cursor-pointer"
                  title="View author stories in catalog"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          );
        })}
      </div>

      {/* Add Contributor Modal */}
      <AnimatePresence>
        {isAddAuthorOpen && (
          <div
            id="add-author-modal-overlay"
            className="fixed inset-0 z-50 bg-slate-900/30 backdrop-blur-xs flex items-center justify-center p-4"
            onClick={() => setIsAddAuthorOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl max-w-md w-full shadow-2xl border border-sky-100 p-6 space-y-4"
            >
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <h3 className="font-serif text-lg font-bold text-slate-900">Add Staff Contributor</h3>
                <button onClick={() => setIsAddAuthorOpen(false)} className="text-slate-400 hover:text-slate-600 cursor-pointer">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleCreateAuthor} className="space-y-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Dr. Arthur Vance"
                    className="w-full px-3 py-2 text-xs border border-slate-200 rounded-lg focus:ring-2 focus:ring-sky-400 focus:outline-none bg-slate-50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Role / Specialization</label>
                  <input
                    type="text"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    placeholder="e.g. Deep Ocean Biophysics Editor"
                    className="w-full px-3 py-2 text-xs border border-slate-200 rounded-lg focus:ring-2 focus:ring-sky-400 focus:outline-none bg-slate-50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Brief Bio</label>
                  <textarea
                    rows={3}
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    placeholder="Research background, institutional affiliations..."
                    className="w-full px-3 py-2 text-xs border border-slate-200 rounded-lg focus:ring-2 focus:ring-sky-400 focus:outline-none bg-slate-50"
                  />
                </div>

                <div className="pt-3 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setIsAddAuthorOpen(false)}
                    className="px-4 py-2 text-xs text-slate-600 hover:bg-slate-100 rounded-lg font-semibold cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 text-xs bg-sky-500 hover:bg-sky-600 text-white rounded-lg font-semibold shadow-sm cursor-pointer"
                  >
                    Add to Editorial Desk
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};
