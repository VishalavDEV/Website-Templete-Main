import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Post, Category } from '../types';
import { getPostsByCategory, getCategories, getPosts } from '../services/api';
import PostCard from '../components/PostCard';
import { PostCardSkeleton } from '../components/LoadingSkeleton';
import { FolderOpen, Tag as TagIcon, Sparkles } from 'lucide-react';

export default function CategoryArchivePage() {
  const { slug } = useParams<{ slug?: string }>();
  const [posts, setPosts] = useState<Post[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const activeCategorySlug = slug || 'all';

  useEffect(() => {
    async function loadArchive() {
      setLoading(true);
      try {
        const [postsData, catsData] = await Promise.all([
          getPostsByCategory(activeCategorySlug),
          getCategories()
        ]);
        setPosts(postsData);
        setCategories(catsData);
        setSelectedTag(null);
      } catch (err) {
        console.error('Failed to load category archive:', err);
      } finally {
        setLoading(false);
      }
    }
    loadArchive();
  }, [activeCategorySlug]);

  const activeCategory = categories.find(c => c.slug === activeCategorySlug);
  const allTags = Array.from(new Set(posts.flatMap(p => p.tags)));

  const displayedPosts = selectedTag
    ? posts.filter(p => p.tags.includes(selectedTag))
    : posts;

  return (
    <div className="min-h-screen bg-neutral-50/50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Archive Header */}
        <div className="bg-white border border-neutral-200/80 rounded-2xl p-8 lg:p-12 mb-12 shadow-sm">
          <div className="flex items-center gap-2 text-amber-700 text-xs font-semibold uppercase tracking-wider mb-2">
            <FolderOpen className="w-4 h-4" />
            <span>Magazine Archive</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4 capitalize">
            {activeCategorySlug === 'all' ? 'All Publications' : activeCategory?.name || activeCategorySlug}
          </h1>
          <p className="text-neutral-600 text-base max-w-2xl font-sans leading-relaxed">
            {activeCategory?.description ||
              'Browse our complete library of thoughtful essays, architectural deep-dives, and cultural critiques.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          {/* Main Content Grid */}
          <div className="lg:col-span-3">
            {/* Tag Filter Pills if any */}
            {allTags.length > 0 && (
              <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
                <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider flex items-center gap-1 flex-shrink-0">
                  <TagIcon className="w-3.5 h-3.5" /> Filter Tag:
                </span>
                <button
                  onClick={() => setSelectedTag(null)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                    selectedTag === null
                      ? 'bg-neutral-900 text-white'
                      : 'bg-white border border-neutral-200 text-neutral-600 hover:border-neutral-400'
                  }`}
                >
                  All Tags
                </button>
                {allTags.map(tag => (
                  <button
                    key={tag}
                    onClick={() => setSelectedTag(tag)}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all whitespace-nowrap ${
                      selectedTag === tag
                        ? 'bg-neutral-900 text-white'
                        : 'bg-white border border-neutral-200 text-neutral-600 hover:border-neutral-400'
                    }`}
                  >
                    #{tag}
                  </button>
                ))}
              </div>
            )}

            {loading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <PostCardSkeleton />
                <PostCardSkeleton />
                <PostCardSkeleton />
                <PostCardSkeleton />
              </div>
            ) : displayedPosts.length === 0 ? (
              <div className="text-center py-20 bg-white rounded-2xl border border-neutral-200">
                <Sparkles className="w-12 h-12 text-neutral-400 mx-auto mb-4" />
                <h3 className="font-serif text-xl font-bold text-neutral-900 mb-2">No matching essays</h3>
                <p className="text-neutral-500 text-sm">Try selecting a different tag or category.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {displayedPosts.map(post => (
                  <PostCard key={post.id} post={post} />
                ))}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Categories Widget */}
            <div className="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm">
              <h3 className="font-serif text-lg font-bold text-neutral-900 mb-4 pb-3 border-b border-neutral-100">
                Categories
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    to="/category/all"
                    className={`flex items-center justify-between py-2 px-3 rounded-lg transition-colors ${
                      activeCategorySlug === 'all'
                        ? 'bg-amber-50 text-amber-800 font-semibold'
                        : 'text-neutral-700 hover:bg-neutral-50'
                    }`}
                  >
                    <span>All Publications</span>
                  </Link>
                </li>
                {categories.map(cat => (
                  <li key={cat.id}>
                    <Link
                      to={`/category/${cat.slug}`}
                      className={`flex items-center justify-between py-2 px-3 rounded-lg transition-colors ${
                        activeCategorySlug === cat.slug
                          ? 'bg-amber-50 text-amber-800 font-semibold'
                          : 'text-neutral-700 hover:bg-neutral-50'
                      }`}
                    >
                      <span>{cat.name}</span>
                      <span className="text-xs bg-neutral-100 text-neutral-600 px-2 py-0.5 rounded-full">
                        {cat.count}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Editorial Note Widget */}
            <div className="bg-neutral-900 text-white rounded-xl p-6 shadow-sm">
              <span className="text-[10px] font-semibold uppercase tracking-widest text-amber-400 mb-2 block">
                Open Submissions
              </span>
              <h4 className="font-serif text-lg font-bold mb-2">Write for Chronicle</h4>
              <p className="text-neutral-300 text-xs leading-relaxed mb-4">
                We accept long-form essays on architecture, technology, and philosophy. Submissions are reviewed bi-weekly.
              </p>
              <Link
                to="/contact"
                className="inline-block bg-amber-700 hover:bg-amber-600 text-white text-xs font-semibold px-4 py-2.5 rounded-lg transition-colors"
              >
                Submission Guidelines
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
