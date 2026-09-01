import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Bookmark, Trash2, ArrowRight } from 'lucide-react';
import { Post } from '../types';
import { MOCK_POSTS } from '../data/mockPosts';
import PostCard from '../components/PostCard';

export default function SavedArticlesPage() {
  const [savedPosts, setSavedPosts] = useState<Post[]>([]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('bookmarked_posts');
      if (stored) {
        const ids: string[] = JSON.parse(stored);
        const posts = MOCK_POSTS.filter(p => ids.includes(p.id));
        setSavedPosts(posts);
      }
    } catch {
      setSavedPosts([]);
    }
  }, []);

  const clearAll = () => {
    localStorage.removeItem('bookmarked_posts');
    setSavedPosts([]);
  };

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 pb-6 border-b border-neutral-200">
          <div>
            <div className="flex items-center gap-2 text-amber-700 text-xs font-semibold uppercase tracking-widest mb-1">
              <Bookmark className="w-4 h-4 fill-current" />
              <span>Personal Library</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-neutral-900">
              Saved Sanctuaries ({savedPosts.length})
            </h1>
          </div>
          {savedPosts.length > 0 && (
            <button
              onClick={clearAll}
              className="inline-flex items-center gap-2 text-xs font-medium text-neutral-500 hover:text-red-600 transition-colors bg-neutral-100 hover:bg-red-50 px-4 py-2 rounded-xl self-start"
            >
              <Trash2 className="w-4 h-4" />
              <span>Clear Saved Articles</span>
            </button>
          )}
        </div>

        {savedPosts.length === 0 ? (
          <div className="text-center py-20 bg-neutral-50 rounded-3xl border border-neutral-200 p-8">
            <Bookmark className="w-12 h-12 text-neutral-300 mx-auto mb-4" />
            <h3 className="font-serif text-xl font-bold text-neutral-900 mb-2">No saved articles yet</h3>
            <p className="text-neutral-600 text-sm max-w-md mx-auto mb-6 font-sans">
              Click the bookmark icon on any post card or article page to save it to your personal reading library.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-amber-700 hover:bg-amber-600 text-white font-medium px-6 py-3 rounded-xl text-sm transition-colors shadow-sm"
            >
              <span>Explore Editorial Articles</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {savedPosts.map(post => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
