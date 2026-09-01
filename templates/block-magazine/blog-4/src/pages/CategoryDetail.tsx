import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Sparkles, ArrowRight, Layers } from 'lucide-react';
import { Article, Category } from '../types';
import { articleService } from '../services/articleService';
import { ArticleCard } from '../components/articles/ArticleCard';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { CategoryDetailSkeleton } from '../components/common/Skeleton';
import { EmptyState } from '../components/common/EmptyState';

export const CategoryDetail: React.FC = () => {
  const { category: categorySlug } = useParams<{ category: string }>();
  const [category, setCategory] = useState<(Category & { articleCount: number }) | null>(null);
  const [articles, setArticles] = useState<Article[]>([]);
  const [otherCategories, setOtherCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadCategoryData() {
      if (!categorySlug) return;
      setLoading(true);
      try {
        const [catData, articlesData, allCats] = await Promise.all([
          articleService.getCategoryBySlug(categorySlug),
          articleService.getArticles({ category: categorySlug, pageSize: 20 }),
          articleService.getCategories()
        ]);
        setCategory(catData);
        setArticles(articlesData.data);
        setOtherCategories(allCats.filter((c) => c.slug !== categorySlug).slice(0, 4));
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }
    loadCategoryData();
  }, [categorySlug]);

  if (loading) {
    return <CategoryDetailSkeleton />;
  }

  if (!category) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16">
        <EmptyState
          title="Category Not Found"
          description="The editorial desk you are searching for does not exist in our directory."
          actionText="Browse all categories"
          actionLink="/categories"
        />
      </div>
    );
  }

  const [featuredStory, ...otherStories] = articles;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-in fade-in duration-200">
      <Breadcrumbs
        items={[
          { label: 'Categories', to: '/categories' },
          { label: category.name }
        ]}
      />

      {/* Category Hero Banner */}
      <div className="my-6 p-8 sm:p-12 rounded-3xl bg-white dark:bg-[#1E1B18] border border-[#E8E2D5] dark:border-[#3A342E] shadow-xs relative overflow-hidden">
        <div
          className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full blur-3xl pointer-events-none opacity-20"
          style={{ backgroundColor: category.color }}
        />

        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#C85A32]/10 text-[#C85A32] dark:bg-[#C85A32]/25 dark:text-[#E27453]">
            <Sparkles className="w-3.5 h-3.5 text-[#C85A32] dark:text-[#E27453]" />
            <span>Editorial Desk</span>
          </div>

          <h1 className="font-display font-black text-4xl sm:text-5xl text-[#1C1917] dark:text-[#F7F4EE] tracking-tight">
            {category.name}
          </h1>

          <p className="text-base sm:text-lg text-[#44403C] dark:text-[#D7D1C6] leading-relaxed font-normal">
            {category.description}
          </p>

          <div className="text-xs font-bold text-[#78716C] dark:text-[#A39C90] pt-2">
            Archived articles: {articles.length} pieces
          </div>
        </div>
      </div>

      {/* Featured in this Category */}
      {featuredStory && (
        <section className="my-10">
          <h2 className="text-xs font-bold uppercase tracking-widest text-[#C85A32] dark:text-[#E27453] mb-4">
            Featured in {category.name}
          </h2>
          <ArticleCard article={featuredStory} variant="featured-large" />
        </section>
      )}

      {/* Remaining Category Stories */}
      {otherStories.length > 0 && (
        <section className="my-12">
          <h2 className="font-display font-black text-2xl text-[#1C1917] dark:text-[#F7F4EE] mb-6">
            Latest Coverage in {category.name}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherStories.map((art) => (
              <ArticleCard key={art.id} article={art} variant="grid" />
            ))}
          </div>
        </section>
      )}

      {/* Related Categories */}
      {otherCategories.length > 0 && (
        <section className="mt-16 pt-12 border-t border-[#E8E2D5] dark:border-[#3A342E]">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-display font-black text-xl text-[#1C1917] dark:text-[#F7F4EE] flex items-center">
              <Layers className="w-5 h-5 mr-2 text-[#C85A32] dark:text-[#E27453]" /> Other Desks to Explore
            </h3>
            <Link
              to="/categories"
              className="text-xs font-bold text-[#C85A32] dark:text-[#E27453] hover:underline flex items-center"
            >
              All desks <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {otherCategories.map((c) => (
              <Link
                key={c.id}
                to={`/category/${c.slug}`}
                className="p-4 rounded-2xl bg-white dark:bg-[#1E1B18] border border-[#E8E2D5] dark:border-[#3A342E] hover:border-[#C85A32] dark:hover:border-[#E27453] transition-all hover:shadow-xs block group"
              >
                <h4 className="font-display font-bold text-sm text-[#1C1917] dark:text-[#F7F4EE] group-hover:text-[#C85A32] dark:group-hover:text-[#E27453] transition-colors mb-1">
                  {c.name}
                </h4>
                <p className="text-xs text-[#78716C] dark:text-[#A39C90] line-clamp-2">
                  {c.description}
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};
