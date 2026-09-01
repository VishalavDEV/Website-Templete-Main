import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Compass, Sparkles, BookOpen, Layers, Camera, ArrowRight, ShieldCheck, MapPin } from 'lucide-react';
import { Hero } from '../../components/Hero/Hero';
import { DepthCarousel, DepthCarouselItem } from '../../components/DepthCarousel/DepthCarousel';
import { AccordionGallery } from '../../components/AccordionGallery/AccordionGallery';
import { InteractiveStories } from '../../components/InteractiveStories/InteractiveStories';
import { StoryCard } from '../../components/StoryCard/StoryCard';
import { Hyperspeed } from '../../components/Hyperspeed/Hyperspeed';
import { Lanyard } from '../../components/Lanyard/Lanyard';
import { Newsletter } from '../../components/Newsletter/Newsletter';
import { mockApi } from '../../services/mockApi';
import {
  Article,
  CategoryInfo,
  MagazineIssue,
  PhotoEssay,
  FieldNote,
  InteractiveStory
} from '../../types';

export const Home: React.FC = () => {
  const [currentIssue, setCurrentIssue] = useState<MagazineIssue | null>(null);
  const [issues, setIssues] = useState<MagazineIssue[]>([]);
  const [categories, setCategories] = useState<CategoryInfo[]>([]);
  const [featuredStory, setFeaturedStory] = useState<Article | null>(null);
  const [latestArticles, setLatestArticles] = useState<Article[]>([]);
  const [photoEssays, setPhotoEssays] = useState<PhotoEssay[]>([]);
  const [fieldNotes, setFieldNotes] = useState<FieldNote[]>([]);
  const [interactiveStories, setInteractiveStories] = useState<InteractiveStory[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    const loadHomeData = async () => {
      try {
        const [
          currIss,
          allIssues,
          cats,
          allArticles,
          photos,
          notes,
          interactives
        ] = await Promise.all([
          mockApi.getCurrentIssue(),
          mockApi.getIssues(),
          mockApi.getCategories(),
          mockApi.getArticles(),
          mockApi.getPhotoEssays(),
          mockApi.getFieldNotes(),
          mockApi.getInteractiveStories()
        ]);

        if (isMounted) {
          setCurrentIssue(currIss);
          setIssues(allIssues);
          setCategories(cats);
          setFeaturedStory(allArticles.find((a) => a.leadStory) || allArticles[0]);
          setLatestArticles(allArticles);
          setPhotoEssays(photos);
          setFieldNotes(notes);
          setInteractiveStories(interactives);
          setIsLoading(false);
        }
      } catch (err) {
        console.error('Failed to load homepage data', err);
        if (isMounted) setIsLoading(false);
      }
    };

    loadHomeData();
    return () => {
      isMounted = false;
    };
  }, []);

  // Format issues for DepthCarousel
  const issueCarouselItems: DepthCarouselItem[] = issues.map((iss) => ({
    id: iss.id,
    title: iss.title,
    subtitle: iss.subtitle,
    category: `${iss.month.toUpperCase()} ${iss.year}`,
    image: iss.coverImage,
    url: `/magazine/${iss.slug}`,
    meta: `${iss.month} ${iss.year}`,
    badge: iss.isCurrent ? 'CURRENT ISSUE' : undefined
  }));

  // Format Photo Essays for DepthCarousel
  const photoCarouselItems: DepthCarouselItem[] = photoEssays.map((pe) => ({
    id: pe.id,
    title: pe.title,
    subtitle: pe.subtitle,
    category: pe.location,
    image: pe.coverImage,
    url: `/photo/${pe.slug}`,
    meta: pe.photographer.name,
    badge: 'PHOTO ESSAY'
  }));

  return (
    <div className="w-full space-y-24 sm:space-y-32 pb-16">
      
      {/* 1. HERO — CINEMATIC DISCOVERY */}
      <Hero />

      {/* 2. CURRENT ISSUE — [ DepthCarousel ] */}
      <section id="current-issue-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="h-px w-8 bg-[#F27D26]" />
              <span className="text-[10px] font-mono uppercase tracking-[0.35em] font-bold text-[#F27D26]">
                01 · MONTHLY PRINT & DIGITAL EDITION
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight uppercase leading-[0.95]">
              THE CURRENT ISSUE
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-md font-light leading-relaxed">
            Delve into curated thematic dispatches, groundbreaking scientific disclosures, and unmanipulated field photography.
          </p>
        </div>

        {/* DepthCarousel for Magazine Covers */}
        <DepthCarousel
          items={issueCarouselItems}
          height="h-[460px] sm:h-[540px]"
          variant="magazine"
          autoplay={false}
        />

        {/* Current Issue Deep Highlights */}
        {currentIssue && (
          <div className="mt-8 p-6 sm:p-8 rounded-2xl bg-[#121214] border border-zinc-800 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-4 space-y-3">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#F27D26] font-bold">
                EDITOR'S DISPATCH · {currentIssue.month} {currentIssue.year}
              </span>
              <h3 className="text-2xl font-black text-white uppercase tracking-tight leading-snug">
                {currentIssue.title}
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed italic font-light">
                "{currentIssue.editorNote}"
              </p>
              <div className="text-[11px] font-mono uppercase tracking-widest text-zinc-500 pt-1">
                — {currentIssue.editorName}
              </div>
            </div>

            <div className="md:col-span-8 border-t md:border-t-0 md:border-l border-zinc-800 md:pl-8 space-y-3">
              <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 font-bold block">
                INSIDE THIS ISSUE:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {currentIssue.featuredStories.map((st, i) => (
                  <Link
                    key={i}
                    to={`/story/${st.slug}`}
                    className="p-3.5 rounded-xl bg-[#0a0a0a] hover:bg-[#18181b] border border-zinc-800/80 hover:border-zinc-700 transition-all flex items-center justify-between group"
                  >
                    <div>
                      <span className="text-[9px] font-mono text-[#F27D26] uppercase font-bold block">
                        {st.category}
                      </span>
                      <h4 className="text-sm font-bold text-white uppercase tracking-tight group-hover:text-[#F27D26] transition-colors line-clamp-1">
                        {st.title}
                      </h4>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-[#F27D26] shrink-0 ml-2" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </section>

      {/* 3. FEATURED STORY — Large Editorial Hero Card */}
      {featuredStory && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-px w-6 bg-[#F27D26]" />
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#F27D26] font-bold">
                02 · FLAGSHIP INVESTIGATION
              </span>
            </div>
            <span className="font-mono text-xs uppercase tracking-widest text-zinc-500">
              12 MIN READ · SEPTEMBER 2026
            </span>
          </div>
          <StoryCard article={featuredStory} variant="lead" priority />
        </section>
      )}

      {/* 4. EXPLORE THE WORLD — [ AccordionGallery ] */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="h-px w-8 bg-[#F27D26]" />
              <span className="text-[10px] font-mono uppercase tracking-[0.35em] font-bold text-[#F27D26]">
                03 · EXPLORATION MATRIX
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight uppercase leading-[0.95]">
              EXPLORE THE WORLD
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-md font-light leading-relaxed">
            Choose a domain. There is more than one vector through which to understand terrestrial and cosmic phenomena.
          </p>
        </div>

        <AccordionGallery categories={categories} />
      </section>

      {/* 5. INTERACTIVE STORIES — Experience the Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="h-px w-8 bg-[#F27D26]" />
              <span className="text-[10px] font-mono uppercase tracking-[0.35em] font-bold text-[#F27D26]">
                04 · MULTIMODAL DEEP DIVES
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight uppercase leading-[0.95]">
              EXPERIENCE THE STORY
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-md font-light leading-relaxed">
            Interactive multi-stage journeys through stellar evolution, deep ocean trenches, and ancient civilizations.
          </p>
        </div>

        <InteractiveStories stories={interactiveStories} />
      </section>

      {/* 6. LATEST STORIES — Magazine Editorial Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between border-b border-zinc-800 pb-4 mb-8">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#F27D26] font-bold block mb-1">
              05 · FIELD DISPATCHES
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight">
              LATEST STORIES
            </h2>
          </div>
          <Link
            to="/explore"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-400 hover:text-[#F27D26] font-bold transition-colors"
          >
            <span>VIEW ALL ARCHIVES</span>
            <ArrowRight className="w-4 h-4 text-[#F27D26]" />
          </Link>
        </div>

        {/* Magazine Asymmetrical Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Top 2 Secondary Stories */}
          {latestArticles.slice(1, 3).map((art) => (
            <div key={art.id} className="md:col-span-6">
              <StoryCard article={art} variant="secondary" />
            </div>
          ))}

          {/* Next 4 Smaller Stories */}
          {latestArticles.slice(3, 7).map((art) => (
            <div key={art.id} className="md:col-span-6 lg:col-span-3">
              <StoryCard article={art} variant="secondary" />
            </div>
          ))}
        </div>
      </section>

      {/* 7. PHOTO ESSAYS — [ DepthCarousel Photo Mode ] */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="h-px w-8 bg-[#F27D26]" />
              <span className="text-[10px] font-mono uppercase tracking-[0.35em] font-bold text-[#F27D26]">
                06 · OPTICAL REPOSITORIES
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight uppercase leading-[0.95]">
              PHOTO ESSAYS
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-md font-light leading-relaxed">
            Extraordinary photography portfolios from isolated deserts, polar ice, high canopies, and subterranean sanctuaries.
          </p>
        </div>

        <DepthCarousel
          items={photoCarouselItems}
          height="h-[380px] sm:h-[480px]"
          variant="photo"
          perspective={1200}
          spread={260}
        />
      </section>

      {/* 8. FIELD NOTES — Compact Story Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between border-b border-zinc-800 pb-4 mb-8">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#F27D26] font-bold block mb-1">
              07 · RAPID TELEMETRY
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight">
              FIELD NOTES
            </h2>
          </div>
          <Link
            to="/field-notes"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-400 hover:text-[#F27D26] font-bold transition-colors"
          >
            <span>ALL NOTES (8)</span>
            <ArrowRight className="w-4 h-4 text-[#F27D26]" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {fieldNotes.slice(0, 4).map((fn) => (
            <Link
              key={fn.id}
              to={`/field-note/${fn.slug}`}
              className="group p-5 rounded-2xl bg-[#121214] border border-zinc-800 hover:border-zinc-700 transition-all flex flex-col justify-between space-y-4 shadow-lg"
            >
              <div className="space-y-3">
                <div className="aspect-[16/10] rounded-xl overflow-hidden">
                  <img
                    src={fn.image}
                    alt={fn.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-85"
                  />
                </div>
                <div className="flex items-center justify-between text-[9px] font-mono text-zinc-500">
                  <span className="text-[#F27D26] uppercase font-bold tracking-wider">{fn.categoryName}</span>
                  <span>{fn.readingTime}</span>
                </div>
                <h3 className="text-base font-bold text-white uppercase tracking-tight group-hover:text-[#F27D26] transition-colors leading-snug line-clamp-2">
                  {fn.title}
                </h3>
                <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed font-light">
                  {fn.summary}
                </p>
              </div>

              <div className="pt-3 border-t border-zinc-800 flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-zinc-400">
                <span>READ NOTE</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#F27D26]" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 9. BEYOND THE MAP — [ Hyperspeed ] Immersive Transition */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Hyperspeed
          headline="BEYOND THE MAP"
          subtitle="Some places are easier to imagine than to reach. Travel into the uncharted margins of science and geography."
          ctaText="EXPLORE ALL EXPEDITIONS"
          ctaLink="/explore"
        />
      </section>

      {/* 10. FIELD PASS — [ Lanyard 3D Physics Card ] */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Lanyard />
      </section>

      {/* 11. NEWSLETTER — "THE WORLD, IN YOUR INBOX." */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Newsletter />
      </section>
    </div>
  );
};
