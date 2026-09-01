import { Link } from 'react-router-dom';
import { Flame } from 'lucide-react';
import { MOCK_POSTS } from '../data/mockPosts';

export default function TrendingTopics() {
  const trendingPosts = MOCK_POSTS.filter(p => p.trending).slice(0, 4);

  return (
    <div className="bg-white border border-neutral-200/80 rounded-2xl p-6 shadow-sm">
      <div className="flex items-center gap-2 mb-4">
        <Flame className="w-4 h-4 text-amber-700" />
        <h3 className="font-serif text-lg font-bold text-neutral-900">Trending Sanctuaries</h3>
      </div>
      <div className="space-y-4">
        {trendingPosts.map((post, idx) => (
          <div key={post.id} className="flex items-start gap-3 group">
            <span className="font-serif text-2xl font-bold text-neutral-300 group-hover:text-amber-700 transition-colors w-6 flex-shrink-0">
              0{idx + 1}
            </span>
            <div>
              <span className="text-[10px] font-semibold text-neutral-500 uppercase tracking-wider block mb-0.5">
                {post.category.name} • {post.readTime}
              </span>
              <Link to={`/article/${post.slug}`}>
                <h4 className="font-serif text-sm font-semibold text-neutral-900 group-hover:text-amber-700 transition-colors line-clamp-2 leading-snug">
                  {post.title}
                </h4>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
