import React from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../../data/blog';
import { SectionHeading } from '../ui/SectionHeading';
import { Badge } from '../ui/Badge';
import { ArrowUpRight } from 'lucide-react';
import { useCustomCursor } from '../../hooks/useCustomCursor';
import { ImageWithFallback } from '../ui/ImageWithFallback';

export const JournalPreview: React.FC = () => {
  const featuredPosts = blogPosts.slice(0, 3);
  const { setCursorHover, resetCursor } = useCustomCursor();

  return (
    <section className="py-24 bg-[var(--surface-color)] border-b border-[var(--border-color)]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        <SectionHeading
          number="08"
          badge="STUDIO JOURNAL"
          title="DISPATCHES ON TECHNOLOGY, GRAPHICS & STRATEGY."
          align="split"
          description="In-depth analysis from our engineers and creative leads on WebGL optimization, non-deterministic AI UX, and brand tokenization."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredPosts.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              onMouseEnter={() => setCursorHover('READ ARTICLE', post.coverImage)}
              onMouseLeave={resetCursor}
              className="group flex flex-col justify-between space-y-4 rounded-2xl p-6 bg-[var(--card-bg)] border border-[var(--border-color)] hover:border-[var(--accent-color)] transition-all duration-300 h-full"
            >
              <div className="space-y-4">
                <div className="aspect-[16/10] overflow-hidden rounded-xl bg-black">
                  <ImageWithFallback
                    src={post.coverImage}
                    alt={post.title}
                    fallbackTitle={post.title}
                    fallbackCategory={post.category}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <Badge variant="accent">{post.category}</Badge>
                  <span className="text-xs font-mono text-[var(--secondary-color)]">
                    {post.readTime}
                  </span>
                </div>

                <h3 className="text-xl font-bold uppercase tracking-tight text-[var(--text-color)] group-hover:text-[var(--accent-color)] transition-colors font-display line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-xs text-[var(--secondary-color)] line-clamp-3 font-light leading-relaxed">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-[var(--border-color)] flex items-center justify-between text-xs font-mono text-[var(--secondary-color)]">
                <span>By {post.author.name}</span>
                <ArrowUpRight className="w-4 h-4 text-[var(--accent-color)] group-hover:rotate-45 transition-transform duration-300" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
