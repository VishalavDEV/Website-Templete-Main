import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Compass, Sparkles, Filter, Camera, BookOpen, ArrowUpRight } from 'lucide-react';
import { mockApi } from '../../services/mockApi';
import { Article, CategoryInfo, PhotoEssay, FieldNote } from '../../types';
import { StoryCard } from '../../components/StoryCard/StoryCard';
import { Newsletter } from '../../components/Newsletter/Newsletter';

interface CategoryPageProps {
  forcedSlug?: string;
}

export const CategoryPage: React.FC<CategoryPageProps> = ({ forcedSlug }) => {
  const { categorySlug } = useParams<{ categorySlug?: string }>();
  const activeSlug = forcedSlug || categorySlug || 'wildlife';

  const [category, setCategory] = useState<CategoryInfo | null>(null);
  const [allCategories, setAllCategories] = useState<CategoryInfo[]>([]);
  const [articles, setArticles] = useState<Article[]>([]);
  const [photoEssays, setPhotoEssays] = useState<PhotoEssay[]>([]);
  const [fieldNotes, setFieldNotes] = useState<FieldNote[]>([]);
  const [sortBy, setSortBy] = useState<'latest' | 'popular'>('latest');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    let isMounted = true;

    const loadCategoryData = async () => {
      const cats = await mockApi.getCategories();
      const currentCat = cats.find((c) => c.slug === activeSlug) || cats[0];
      const arts = await mockApi.getArticles(activeSlug);
      const allPhotos = await mockApi.getPhotoEssays();
      const allNotes = await mockApi.getFieldNotes();

      if (isMounted) {
        setAllCategories(cats);
        setCategory(currentCat);
        setArticles(arts);
        setPhotoEssays(allPhotos);
        setFieldNotes(allNotes.filter((n) => n.category === activeSlug));
      }
    };

    loadCategoryData();
    return () => {
      isMounted = false;
    };
  }, [activeSlug]);

  if (!category) return null;

  return (
    <div className="min-h-screen pt-24 sm:pt-28 pb-20 select-none space-y-16">
      
      {/* Category Hero Banner */}
      <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden min-h-[380px] sm:min-h-[460px] flex flex-col justify-end p-6 sm:p-12 border border-white/10 shadow-2xl">
          <img
            src={category.heroImage}
            alt={category.name}
            className="absolute inset-0 w-full h-full object-cover object-center brightness-60 contrast-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />

          {/* Content */}
          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 border border-white/20 backdrop-blur-md text-[#e0a358] text-[10px] font-mono tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: category.accentColor || '#c98a3e' }} />
              <span>DISCIPLINE ARCHIVE · {category.storyCount} ARTICLES</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-none">
              {category.name}
            </h1>

            <p className="font-sans text-sm sm:text-lg text-[#d1c7b7] leading-relaxed font-light">
              {category.description}
            </p>
          </div>
        </div>
      </section>

      {/* Category Fast Switcher Nav Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-2 rounded-2xl bg-[#141619] border border-white/10 flex items-center gap-2 overflow-x-auto">
          {allCategories.map((cat) => (
            <Link
              key={cat.slug}
              to={`/${cat.slug}`}
              className={`px-4 py-2 rounded-xl text-xs font-mono tracking-wider whitespace-nowrap transition-all ${
                cat.slug === activeSlug
                  ? 'bg-[#c98a3e] text-black font-bold shadow-md'
                  : 'text-[#a8a49c] hover:text-white hover:bg-white/5'
              }`}
            >
              {cat.name}
            </Link>
          ))}
        </div>
      </section>

      {/* Main Articles Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
            {category.name} Stories & Investigations
          </h2>
          <span className="font-mono text-xs text-[#a8a49c]">
            {articles.length} DISPATCHES
          </span>
        </div>

        {articles.length === 0 ? (
          <div className="py-16 text-center space-y-3 bg-[#141619] rounded-2xl border border-white/10">
            <Sparkles className="w-8 h-8 text-[#c98a3e] mx-auto opacity-50" />
            <p className="font-serif text-xl text-white">New dispatches arriving soon.</p>
            <p className="font-sans text-xs text-[#a8a49c]">
              Our correspondents are currently in the field reporting on this discipline.
            </p>
          </div>
        ) : (
          <div className="space-y-8">
            {/* Top Featured Lead Story */}
            {articles[0] && (
              <StoryCard article={articles[0]} variant="lead" priority />
            )}

            {/* Grid for Remaining Stories */}
            {articles.length > 1 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
                {articles.slice(1).map((art) => (
                  <StoryCard key={art.id} article={art} variant="secondary" />
                ))}
              </div>
            )}
          </div>
        )}
      </section>

      {/* Field Notes in this Category (if any) */}
      {fieldNotes.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
              Field Notes from {category.name}
            </h3>
            <Link
              to="/field-notes"
              className="text-xs font-mono text-[#e0a358] hover:underline"
            >
              ALL NOTES →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {fieldNotes.map((note) => (
              <Link
                key={note.id}
                to={`/field-note/${note.slug}`}
                className="p-5 rounded-2xl bg-[#141619] border border-white/10 hover:border-[#c98a3e]/40 transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="aspect-[16/10] rounded-xl overflow-hidden">
                    <img
                      src={note.image}
                      alt={note.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-[10px] font-mono text-[#e0a358]">
                    {note.date} · {note.readingTime}
                  </div>
                  <h4 className="font-serif text-lg font-bold text-white line-clamp-2">
                    {note.title}
                  </h4>
                  <p className="font-sans text-xs text-[#a8a49c] line-clamp-2">
                    {note.summary}
                  </p>
                </div>
                <span className="font-mono text-xs text-[#d1c7b7] flex items-center justify-between pt-2 border-t border-white/10">
                  <span>READ NOTE</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#e0a358]" />
                </span>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Newsletter */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Newsletter />
      </section>
    </div>
  );
};
