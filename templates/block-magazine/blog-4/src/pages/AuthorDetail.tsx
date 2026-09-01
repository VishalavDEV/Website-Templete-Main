import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { MapPin, Twitter, Linkedin, Github, Sparkles, BookOpen } from 'lucide-react';
import { Author, Article } from '../types';
import { articleService } from '../services/articleService';
import { ArticleCard } from '../components/articles/ArticleCard';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { AuthorDetailSkeleton } from '../components/common/Skeleton';
import { EmptyState } from '../components/common/EmptyState';

export const AuthorDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [author, setAuthor] = useState<(Author & { articleCount: number; articles: Article[] }) | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadAuthor() {
      if (!slug) return;
      setLoading(true);
      try {
        const auth = await articleService.getAuthorBySlug(slug);
        setAuthor(auth);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }
    loadAuthor();
  }, [slug]);

  if (loading) {
    return <AuthorDetailSkeleton />;
  }

  if (!author) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16">
        <EmptyState
          title="Contributor Profile Not Found"
          description="We could not locate this contributor profile in our editorial registry."
          actionText="View all authors"
          actionLink="/authors"
        />
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-in fade-in duration-300">
      <Breadcrumbs
        items={[
          { label: 'Authors', to: '/authors' },
          { label: author.name }
        ]}
      />

      {/* Author Bio Banner */}
      <div className="my-6 p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#1E1B18] border border-[#E8E2D5] dark:border-[#3A342E] shadow-xs flex flex-col md:flex-row gap-8 items-start md:items-center">
        <img
          src={author.avatar}
          alt={author.name}
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop';
          }}
          className="w-28 h-28 sm:w-36 sm:h-36 rounded-3xl object-cover border-4 border-[#E8E2D5] dark:border-[#3A342E] shrink-0 shadow-xs"
        />

        <div className="space-y-3 flex-1">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#C85A32]/10 text-[#C85A32] dark:bg-[#C85A32]/25 dark:text-[#E27453]">
            <Sparkles className="w-3.5 h-3.5 text-[#C85A32] dark:text-[#E27453]" />
            <span>Staff Columnist & Editor</span>
          </div>

          <h1 className="font-display font-black text-3xl sm:text-4xl text-[#1C1917] dark:text-[#F7F4EE]">
            {author.name}
          </h1>

          <p className="text-sm font-bold text-[#C85A32] dark:text-[#E27453]">
            {author.role}
          </p>

          <p className="text-sm sm:text-base text-[#44403C] dark:text-[#D7D1C6] leading-relaxed max-w-3xl font-normal">
            {author.bio}
          </p>

          <div className="flex flex-wrap items-center gap-6 pt-2 text-xs text-[#78716C] dark:text-[#A39C90]">
            <span className="flex items-center font-medium">
              <MapPin className="w-4 h-4 mr-1.5 text-[#C85A32] dark:text-[#E27453]" />
              {author.location}
            </span>

            <span className="flex items-center font-medium">
              <BookOpen className="w-4 h-4 mr-1.5 text-[#C85A32] dark:text-[#E27453]" />
              {author.articleCount} published essays
            </span>

            <div className="flex items-center space-x-2">
              {author.social.twitter && (
                <a
                  href={author.social.twitter}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Twitter"
                  className="p-1 text-[#78716C] hover:text-[#1C1917] dark:text-[#A39C90] dark:hover:text-white"
                >
                  <Twitter className="w-4 h-4" />
                </a>
              )}
              {author.social.linkedin && (
                <a
                  href={author.social.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="p-1 text-[#78716C] hover:text-[#1C1917] dark:text-[#A39C90] dark:hover:text-white"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              )}
              {author.social.github && (
                <a
                  href={author.social.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="p-1 text-[#78716C] hover:text-[#1C1917] dark:text-[#A39C90] dark:hover:text-white"
                >
                  <Github className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Articles by Author */}
      <div className="my-12">
        <h2 className="font-display font-black text-2xl text-[#1C1917] dark:text-[#F7F4EE] mb-6">
          Authored by {author.name}
        </h2>

        {author.articles.length === 0 ? (
          <EmptyState
            title="No Published Stories"
            description="This contributor currently has no active published pieces."
          />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {author.articles.map((art) => (
              <ArticleCard key={art.id} article={art} variant="grid" />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
