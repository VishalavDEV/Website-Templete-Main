import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Post } from '../types';
import { searchPosts } from '../services/api';
import PostCard from '../components/PostCard';
import { PostCardSkeleton } from '../components/LoadingSkeleton';
import { Search as SearchIcon, Sparkles, Filter } from 'lucide-react';
import { MOCK_CATEGORIES, MOCK_AUTHORS } from '../data/mockPosts';

export default function SearchResultsPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [results, setResults] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  // Filters
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedAuthor, setSelectedAuthor] = useState<string>('all');

  useEffect(() => {
    async function performSearch() {
      setLoading(true);
      try {
        const data = await searchPosts(query);
        setResults(data);
      } catch (err) {
        console.error('Search error:', err);
      } finally {
        setLoading(false);
      }
    }
    performSearch();
  }, [query]);

  // Apply filters
  const filteredResults = results.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category.slug === selectedCategory;
    const matchesAuthor = selectedAuthor === 'all' || post.author.id === selectedAuthor;
    return matchesCategory && matchesAuthor;
  });

  return (
    <div className="min-h-screen bg-neutral-50/50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-neutral-200/80 rounded-2xl p-8 lg:p-12 mb-8 shadow-sm">
          <div className="flex items-center gap-2 text-amber-700 text-xs font-semibold uppercase tracking-wider mb-2">
            <SearchIcon className="w-4 h-4" />
            <span>Search Results</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-neutral-900 mb-2">
            &ldquo;{query}&rdquo;
          </h1>
          <p className="text-neutral-600 text-sm font-sans">
            Found {filteredResults.length} matching publication{filteredResults.length === 1 ? '' : 's'}.
          </p>

          {/* Filter Chips */}
          <div className="flex flex-wrap items-center gap-3 mt-6 pt-6 border-t border-neutral-100">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-neutral-500 mr-2">
              <Filter className="w-3.5 h-3.5" />
              <span>Filter by:</span>
            </div>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="text-xs font-medium bg-neutral-100 border border-neutral-200 rounded-xl px-3 py-2 text-neutral-800 focus:outline-none focus:ring-2 focus:ring-amber-600"
            >
              <option value="all">All Categories</option>
              {MOCK_CATEGORIES.map(cat => (
                <option key={cat.id} value={cat.slug}>{cat.name}</option>
              ))}
            </select>

            {/* Author Filter */}
            <select
              value={selectedAuthor}
              onChange={(e) => setSelectedAuthor(e.target.value)}
              className="text-xs font-medium bg-neutral-100 border border-neutral-200 rounded-xl px-3 py-2 text-neutral-800 focus:outline-none focus:ring-2 focus:ring-amber-600"
            >
              <option value="all">All Authors</option>
              {MOCK_AUTHORS.map(auth => (
                <option key={auth.id} value={auth.id}>{auth.name}</option>
              ))}
            </select>
          </div>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <PostCardSkeleton />
            <PostCardSkeleton />
            <PostCardSkeleton />
          </div>
        ) : filteredResults.length === 0 ? (
          <div className="text-center py-24 bg-white rounded-2xl border border-neutral-200">
            <Sparkles className="w-12 h-12 text-neutral-400 mx-auto mb-4" />
            <h3 className="font-serif text-xl font-bold text-neutral-900 mb-2">No matching articles found</h3>
            <p className="text-neutral-500 text-sm max-w-md mx-auto">
              We couldn't find anything matching your filters. Try resetting category or author filters.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredResults.map(post => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
