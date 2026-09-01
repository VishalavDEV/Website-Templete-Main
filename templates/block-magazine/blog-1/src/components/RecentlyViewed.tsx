import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Post } from '../types';
import { Clock, History } from 'lucide-react';
import { MOCK_POSTS } from '../data/mockPosts';

export default function RecentlyViewed({ currentSlug }: { currentSlug?: string }) {
  const [recentPosts, setRecentPosts] = useState<Post[]>([]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('recently_viewed_posts');
      if (stored) {
        const slugs: string[] = JSON.parse(stored);
        const filtered = slugs
          .filter(s => s !== currentSlug)
          .map(slug => MOCK_POSTS.find(p => p.slug === slug))
          .filter((p): p is Post => p !== undefined)
          .slice(0, 4);
        setRecentPosts(filtered);
      }
    } catch {
      setRecentPosts([]);
    }
  }, [currentSlug]);

  if (recentPosts.length === 0) return null;

  return (
    <div className="my-12 py-8 border-t border-b border-neutral-200">
      <div className="flex items-center gap-2 mb-6">
        <History className="w-5 h-5 text-amber-700" />
        <h3 className="font-serif text-xl font-bold text-neutral-900">Recently Viewed Sanctuaries</h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {recentPosts.map(post => (
          <Link
            key={post.id}
            to={`/article/${post.slug}`}
            className="group bg-white border border-neutral-200/80 hover:border-amber-700/40 rounded-xl p-4 transition-all hover:shadow-md flex flex-col justify-between"
          >
            <div>
              <span className="text-[10px] font-semibold text-amber-700 uppercase tracking-wider block mb-1">
                {post.category.name}
              </span>
              <h4 className="font-serif text-sm font-semibold text-neutral-900 group-hover:text-amber-700 transition-colors line-clamp-2 leading-snug mb-2">
                {post.title}
              </h4>
            </div>
            <div className="flex items-center text-[11px] text-neutral-400 gap-1 pt-2 border-t border-neutral-100">
              <Clock className="w-3 h-3" />
              <span>{post.readTime}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
