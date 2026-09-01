import { Link } from 'react-router-dom';
import { Tag } from 'lucide-react';
import { MOCK_POSTS } from '../data/mockPosts';

export default function TagCloud() {
  const allTags = Array.from(new Set(MOCK_POSTS.flatMap(p => p.tags)));

  return (
    <div className="bg-white border border-neutral-200/80 rounded-2xl p-6 shadow-sm">
      <div className="flex items-center gap-2 mb-4">
        <Tag className="w-4 h-4 text-amber-700" />
        <h3 className="font-serif text-lg font-bold text-neutral-900">Explore Tags</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {allTags.map(tag => (
          <Link
            key={tag}
            to={`/search?q=${encodeURIComponent(tag)}`}
            className="text-xs font-medium bg-neutral-100 hover:bg-amber-50 hover:text-amber-700 text-neutral-700 px-3 py-1.5 rounded-lg transition-colors border border-neutral-200/50"
          >
            #{tag}
          </Link>
        ))}
      </div>
    </div>
  );
}
