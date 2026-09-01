import React, { useState } from 'react';
import { useMagazine } from '../../context/MagazineContext';
import { MessageSquare, ThumbsUp, Send, User, Sparkles } from 'lucide-react';

export function CommentsSection({ article }) {
  const { showToast } = useMagazine();
  const [comments, setComments] = useState(article?.comments || []);
  const [authorName, setAuthorName] = useState('');
  const [commentText, setCommentText] = useState('');
  const [sortBy, setSortBy] = useState('newest');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!commentText.trim()) return;

    const newComment = {
      id: `comment-${Date.now()}`,
      author: authorName.trim() || 'Anonymous Reader',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200&auto=format&fit=crop',
      date: 'Just now',
      text: commentText.trim(),
      likes: 0,
    };

    setComments([newComment, ...comments]);
    setCommentText('');
    setAuthorName('');
    showToast('Your contribution has been posted to the discourse.');
  };

  const handleLike = (commentId) => {
    setComments((prev) =>
      prev.map((c) => (c.id === commentId ? { ...c, likes: c.likes + 1 } : c))
    );
  };

  return (
    <section id="comments-section" className="my-14 pt-8 border-t-2 border-[#141413]">
      <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#E8E5DC]">
        <div className="flex items-center gap-2">
          <MessageSquare className="w-5 h-5 text-[#D43825]" />
          <h3 className="font-serif-headline text-2xl font-bold uppercase tracking-tight text-[#141413]">
            Editorial Discourse & Letters ({comments.length})
          </h3>
        </div>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="text-xs bg-[#FAF9F5] border border-[#D1CDC4] px-2 py-1 font-semibold text-[#141413]"
        >
          <option value="newest">Most Recent</option>
          <option value="top">Top Voted</option>
        </select>
      </div>

      {/* New Comment Submission Box */}
      <form onSubmit={handleSubmit} className="bg-white p-6 border border-[#E8E5DC] mb-8 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#141413] mb-3">
          <Sparkles className="w-3.5 h-3.5 text-[#D43825]" />
          <span>Join the Intellectual Discussion</span>
        </div>

        <div className="mb-3">
          <input
            type="text"
            value={authorName}
            onChange={(e) => setAuthorName(e.target.value)}
            placeholder="Your Name & Title (e.g. Dr. Julian Vance, Urbanist)"
            className="w-full px-3 py-2 text-xs bg-[#FAF9F5] border border-[#D1CDC4] focus:outline-none focus:border-[#141413] text-[#141413]"
          />
        </div>

        <div className="mb-3">
          <textarea
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            placeholder="Add a substantive response or critique..."
            rows={3}
            required
            className="w-full px-3 py-2 text-xs bg-[#FAF9F5] border border-[#D1CDC4] focus:outline-none focus:border-[#141413] text-[#141413]"
          />
        </div>

        <div className="flex items-center justify-between">
          <span className="text-[0.6875rem] text-[#73736C]">
            Comments are moderated per our editorial guidelines.
          </span>
          <button
            type="submit"
            className="px-4 py-2 bg-[#141413] text-[#FAF9F5] text-xs font-bold uppercase tracking-wider hover:bg-[#D43825] transition-colors flex items-center gap-2 cursor-pointer"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Submit Letter</span>
          </button>
        </div>
      </form>

      {/* Comments List */}
      <div className="space-y-4">
        {comments.length === 0 ? (
          <div className="text-center py-8 bg-[#FAF9F5] border border-[#E8E5DC] text-xs text-[#73736C]">
            No letters submitted yet. Be the first to initiate the discourse.
          </div>
        ) : (
          comments.map((comment) => (
            <div
              key={comment.id}
              className="bg-white p-5 border border-[#E8E5DC] shadow-xs flex items-start gap-4"
            >
              <img
                src={comment.avatar}
                alt={comment.author}
                className="w-10 h-10 rounded-full object-cover border border-[#D1CDC4] shrink-0"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold text-[#141413] uppercase tracking-wider">
                    {comment.author}
                  </span>
                  <span className="text-[0.6875rem] font-mono text-[#73736C]">
                    {comment.date}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#4A4A45] leading-relaxed mb-3">
                  {comment.text}
                </p>
                <div className="flex items-center gap-4 text-xs font-mono text-[#73736C]">
                  <button
                    onClick={() => handleLike(comment.id)}
                    className="flex items-center gap-1 hover:text-[#D43825] transition-colors cursor-pointer"
                  >
                    <ThumbsUp className="w-3 h-3" />
                    <span>{comment.likes} agree</span>
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}
