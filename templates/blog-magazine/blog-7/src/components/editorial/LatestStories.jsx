import React from 'react';
import { LargeStoryCard, MediumStoryCard, StoryCard } from './StoryCard';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, BookOpen } from 'lucide-react';
import { StaggerContainer, StaggerItem } from '../motion/MotionPrimitives';

export function LatestStories({ stories = [] }) {
  if (!stories || stories.length === 0) return null;

  const leadStory = stories[0];
  const secondaryStories = stories.slice(1, 3);
  const compactStories = stories.slice(3, 7);

  return (
    <section className="my-14 sm:my-20">
      {/* Section Header with Refined Editorial Rule */}
      <div className="flex items-center justify-between pb-3.5 mb-8 sm:mb-12 border-b-2 border-[#141413]">
        <div className="flex items-center gap-3">
          <span className="w-3.5 h-3.5 bg-[#D43825] inline-block" />
          <h2 className="font-serif-headline text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-tight text-[#141413]">
            Latest Dispatches & Essays
          </h2>
        </div>
        <Link
          to="/search"
          className="text-xs font-bold uppercase tracking-wider text-[#141413] hover:text-[#D43825] flex items-center gap-1.5 group transition-colors"
        >
          <span>View Archive</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
        </Link>
      </div>

      {/* Asymmetric Dynamic Responsive Grid:
          - Mobile (< 640px): 1 Col stack
          - Tablet (640px - 1024px): 2 Col balanced
          - Desktop (1024px+): 12 Col Asymmetrical Spread */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        {/* Left: Flagship Lead Feature (7 cols on desktop) */}
        <div className="lg:col-span-7">
          {leadStory && <LargeStoryCard article={leadStory} showExcerpt={true} />}
        </div>

        {/* Right: 2 Supporting Medium Cards + In-Brief Compact Rail (5 cols on desktop) */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
          {/* Supporting Medium Grid (2 cols on tablet, 1 col on desktop) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
            {secondaryStories.map((story) => (
              <StoryCard
                key={story.id}
                article={story}
                variant="horizontal"
                showExcerpt={false}
              />
            ))}
          </div>

          {/* In Brief Compact Section */}
          {compactStories.length > 0 && (
            <div className="bg-[#FAF9F5] border border-[#141413] p-5 sm:p-6 shadow-xs">
              <div className="flex items-center justify-between pb-2 mb-4 border-b border-[#D1CDC4]">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-[#D43825]" />
                  <h3 className="font-serif-headline text-sm font-bold uppercase tracking-wider text-[#141413]">
                    Monographs in Brief
                  </h3>
                </div>
                <span className="text-[0.65rem] font-mono text-[#73736C]">Rapid Digest</span>
              </div>

              <div className="divide-y divide-[#E8E5DC]">
                {compactStories.map((story) => (
                  <div key={story.id} className="py-2.5 first:pt-0 last:pb-0">
                    <StoryCard article={story} variant="compact" />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
