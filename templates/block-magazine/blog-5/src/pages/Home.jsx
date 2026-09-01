import React from 'react';
import { ImmersiveHero } from '../components/hero/ImmersiveHero';
import { LatestStoriesGrid } from '../components/editorial/LatestStoriesGrid';
import { HorizontalCategoryRail } from '../components/editorial/HorizontalCategoryRail';
import { LargeFeatureCard, MediumGridCard, CompactListCard } from '../components/cards/StoryCardVariants';
import { AuthorsSection } from '../components/engagement/AuthorCards';
import { NewsletterSection } from '../components/engagement/NewsletterSection';
import { mockArticles } from '../data/mockArticles';
import { Sparkles, Flame, Layers } from 'lucide-react';

export function Home() {
  const heroArticle = mockArticles[0];
  const largeFeatureArticle = mockArticles[1];
  const gridArticles = mockArticles.slice(2, 5);
  const listArticles = mockArticles.slice(3, 6);

  return (
    <div className="space-y-16 sm:space-y-24">
      {/* 1. Immersive 3D Hero Landing Experience (Phase 3) */}
      <ImmersiveHero article={heroArticle} />

      {/* 2. Latest Stories Asymmetric Editorial Masonry Grid (Phase 5) */}
      <LatestStoriesGrid articles={mockArticles} />

      {/* 3. Horizontal Category Rail & Parallax Hubs with Velocity Skew (Phase 6) */}
      <HorizontalCategoryRail articles={mockArticles} />

      {/* 4. Flagship Monograph Feature (Phase 4 Variant 1) */}
      <section className="space-y-6">
        <div className="flex items-center justify-between pb-3 border-b border-[#E5E7EB]">
          <div className="flex items-center gap-2.5">
            <Sparkles className="w-5 h-5 text-[#0055FF]" />
            <h2 className="font-heading font-black text-2xl uppercase tracking-tight text-[#111827]">
              Flagship Monograph Feature
            </h2>
          </div>
          <span className="text-xs font-mono text-[#6B7280]">Vol. 2026 Archive</span>
        </div>

        <LargeFeatureCard article={largeFeatureArticle} />
      </section>

      {/* 5. 3-Column 3D Motion Tilt Cards Grid (Phase 4 Variant 2) */}
      <section className="space-y-6">
        <div className="flex items-center justify-between pb-3 border-b border-[#E5E7EB]">
          <div className="flex items-center gap-2.5">
            <Flame className="w-5 h-5 text-[#FF5E3A]" />
            <h2 className="font-heading font-black text-2xl uppercase tracking-tight text-[#111827]">
              Curated Hyper-Stories
            </h2>
          </div>
          <span className="text-xs font-mono text-[#6B7280]">3D Spatial Tilt Active</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {gridArticles.map((story) => (
            <MediumGridCard key={story.id} article={story} />
          ))}
        </div>
      </section>

      {/* 6. Editorial Critics & Fellows (Phase 9: Author Cards) */}
      <AuthorsSection />

      {/* 7. Weekly Monograph Dispatch (Phase 9: Newsletter Form) */}
      <NewsletterSection />
    </div>
  );
}
