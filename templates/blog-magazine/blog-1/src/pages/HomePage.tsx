import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Post, Category } from '../types';
import { getPosts, getCategories } from '../services/api';
import PostSlider from '../components/PostSlider';
import PostCard from '../components/PostCard';
import { PostCardSkeleton } from '../components/LoadingSkeleton';
import { TrendingUp, ArrowRight, Compass, Sparkles } from 'lucide-react';

export default function HomePage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategoryTab, setSelectedCategoryTab] = useState<string>('all');

  useEffect(() => {
    async function loadData() {
      try {
        const [postsData, catsData] = await Promise.all([getPosts(), getCategories()]);
        setPosts(postsData);
        setCategories(catsData);
      } catch (err) {
        console.error('Failed to load homepage data:', err);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  const trendingPosts = posts.filter(p => p.trending);
  const filteredPosts = selectedCategoryTab === 'all'
    ? posts
    : posts.filter(p => p.category.slug.toLowerCase() === selectedCategoryTab.toLowerCase());

  return (
    <div className="min-h-screen bg-neutral-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        {/* Hero Post Slider */}
        {loading ? (
          <div className="w-full h-[500px] bg-neutral-200 animate-pulse rounded-2xl mb-16" />
        ) : (
          <PostSlider posts={posts} />
        )}

        {/* Trending Section */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-neutral-200">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-amber-100 text-amber-800 rounded-xl">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <h2 className="font-serif text-2xl font-bold text-neutral-900">Trending Essays</h2>
                <p className="text-xs text-neutral-500 font-sans">Most discussed articles this week</p>
              </div>
            </div>
            <Link
              to="/category/all"
              className="hidden sm:flex items-center gap-1 text-sm font-semibold text-neutral-800 hover:text-amber-700 transition-colors group"
            >
              <span>Explore all</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <PostCardSkeleton />
              <PostCardSkeleton />
              <PostCardSkeleton />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {trendingPosts.slice(0, 3).map(post => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          )}
        </section>

        {/* Category Highlight Banners */}
        <section className="mb-16 bg-neutral-900 text-white rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden">
          <div className="absolute right-0 top-0 w-1/2 h-full opacity-10 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
          <div className="relative z-10 max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-amber-400 mb-3 block">
              Curated Collections
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              Architecture & Monastic Spaces
            </h2>
            <p className="text-neutral-300 text-base mb-8 leading-relaxed font-sans">
              Discover our comprehensive special edition exploring how physical spatial design shapes psychological well-being and digital detox.
            </p>
            <Link
              to="/category/architecture"
              className="inline-flex items-center gap-2 bg-amber-700 hover:bg-amber-600 text-white font-semibold px-8 py-4 rounded-full text-sm transition-all shadow-lg"
            >
              <Compass className="w-4 h-4" />
              <span>Explore Architecture Series</span>
            </Link>
          </div>
        </section>

        {/* Latest Articles Feed with Category Tabs */}
        <section className="mb-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-4 border-b border-neutral-200">
            <div>
              <h2 className="font-serif text-2xl font-bold text-neutral-900">Latest Publications</h2>
              <p className="text-xs text-neutral-500 font-sans">Freshly published journalism and critiques</p>
            </div>

            {/* Category Filter Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
              <button
                onClick={() => setSelectedCategoryTab('all')}
                className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all whitespace-nowrap ${
                  selectedCategoryTab === 'all'
                    ? 'bg-neutral-900 text-white shadow-md'
                    : 'bg-white border border-neutral-200 text-neutral-600 hover:border-neutral-400'
                }`}
              >
                All Articles
              </button>
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategoryTab(cat.slug)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all whitespace-nowrap ${
                    selectedCategoryTab === cat.slug
                      ? 'bg-neutral-900 text-white shadow-md'
                      : 'bg-white border border-neutral-200 text-neutral-600 hover:border-neutral-400'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <PostCardSkeleton />
              <PostCardSkeleton />
              <PostCardSkeleton />
            </div>
          ) : filteredPosts.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-2xl border border-neutral-200">
              <Sparkles className="w-12 h-12 text-neutral-400 mx-auto mb-4" />
              <h3 className="font-serif text-xl font-bold text-neutral-900 mb-2">No articles found</h3>
              <p className="text-neutral-500 text-sm">No publications match this category yet.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map(post => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
