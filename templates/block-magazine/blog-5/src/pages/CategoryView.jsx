import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { mockArticles } from '../data/mockArticles';
import { LargeFeatureCard, MediumGridCard, CompactListCard } from '../components/cards/StoryCardVariants';
import { Sparkles, ArrowLeft, LayoutGrid, List, Compass, Layers } from 'lucide-react';

export function CategoryView() {
  const { category } = useParams();
  const [activeTag, setActiveTag] = useState('ALL');
  const [layoutMode, setLayoutMode] = useState('grid'); // 'grid' | 'list'

  const categoryMeta = {
    'bio-spaces': {
      title: 'BIO-SPACES',
      subtitle: 'Living Mycelium Envelopes, Mass-Timber & Circadian Sanctuaries',
      color: '#10B981',
      description: 'Exploring bio-fabricated structures, acoustic timber architectures, and self-regulating biophilic habitats transforming the built environment.',
      tags: ['ALL', 'Biophilic', 'Mycelium', 'Circadian', 'Acoustic Mass-Timber', 'Kyoto Joinery'],
    },
    'future-tech': {
      title: 'FUTURE TECH',
      subtitle: 'Quantum Light Matrices, Cryogenic Photonics & Synthetic Cognitive Science',
      color: '#0055FF',
      description: 'In-depth treatises on non-silicon computing frontiers, spatial photonic interconnects, and the geopolitical physics of compute.',
      tags: ['ALL', 'Photonics', 'Quantum Light', 'Silicon Frontier', 'Deep Sea', 'Robotics'],
    },
    'hyper-style': {
      title: 'HYPER-STYLE',
      subtitle: 'Cold-Water Flax Retting, Hand Anglage Horology & Tactile Rigor',
      color: '#FF5E3A',
      description: 'Examining centuries-old artisanal craft traditions, non-synthetic luxury textiles, and Swiss mechanical watchmaking.',
      tags: ['ALL', 'Slow Luxury', 'Flanders Flax', 'Textile Craft', 'Horology', 'Jura Valley'],
    },
    'z-culture': {
      title: 'Z-CULTURE',
      subtitle: 'Duration Cinema, Post-Digital Art Galleries & Spatial Philosophy',
      color: '#7000FF',
      description: 'Critical perspectives on temporal presence, contemplative cinematic frames, and exhibition sanctuaries in global metropolises.',
      tags: ['ALL', 'Cinema', 'Duration', 'Visual Philosophy', 'Exhibitions', 'Spatial Art'],
    },
    'avant-sound': {
      title: 'AVANT-SOUND',
      subtitle: 'Acoustic Brutalism, Concrete Resonators & Thermodynamic Voltage Drift',
      color: '#C28B38',
      description: 'Explorations in physical acoustic reverberation, modular analog synthesis, and spatial field recordings.',
      tags: ['ALL', 'Acoustic Brutalism', 'Spatial Audio', 'Field Recordings', 'Analog Synthesis'],
    },
  };

  const meta = categoryMeta[category] || categoryMeta['future-tech'];

  // Filter articles matching this category
  let matchedArticles = mockArticles.filter(
    (art) =>
      art.categorySlug === category ||
      art.category.toLowerCase().includes(category?.toLowerCase() || '')
  );

  // If fewer than 3, supplement so view is rich
  if (matchedArticles.length < 3) {
    const supplement = mockArticles.filter((a) => !matchedArticles.some((m) => m.id === a.id));
    matchedArticles = [...matchedArticles, ...supplement];
  }

  const filteredArticles = activeTag === 'ALL'
    ? matchedArticles
    : matchedArticles.filter((art) => art.tags?.includes(activeTag));

  const leadStory = filteredArticles[0] || matchedArticles[0];
  const remainingStories = filteredArticles.slice(1);

  return (
    <div className="space-y-12 sm:space-y-16 pb-20">
      {/* Category Header */}
      <header className="rounded-3xl glass-card bg-white/95 p-6 sm:p-10 md:p-12 border border-white/90 shadow-[0_15px_40px_-10px_rgba(0,85,255,0.06)] space-y-6">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#6B7280] hover:text-[#0055FF] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Index</span>
          </Link>

          <div className="flex items-center gap-2">
            <span
              className="w-3 h-3 rounded-full inline-block"
              style={{ backgroundColor: meta.color }}
            />
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#111827]">
              Thematic Hub &bull; Vol. 2026
            </span>
          </div>
        </div>

        <div className="space-y-3">
          <h1 className="font-heading font-black text-3xl sm:text-5xl md:text-6xl text-[#111827] uppercase tracking-tight">
            {meta.title}
          </h1>
          <p className="font-mono text-xs sm:text-sm font-bold text-[#0055FF] uppercase tracking-wider">
            {meta.subtitle}
          </p>
          <p className="text-sm sm:text-base text-[#4B5563] max-w-3xl leading-relaxed">
            {meta.description}
          </p>
        </div>

        {/* Subtopic Filters */}
        <div className="flex flex-wrap items-center gap-2 pt-6 border-t border-[#F3F4F6]">
          <span className="text-xs font-mono font-bold uppercase text-[#111827] mr-2">
            Subtopic Filters:
          </span>
          {meta.tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-heading font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTag === tag
                  ? 'bg-[#0055FF] text-white shadow-xs'
                  : 'bg-[#F3F4F6] text-[#4B5563] hover:bg-white hover:border-[#0055FF]'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </header>

      {/* 1. Flagship Lead Story for Category */}
      {leadStory && (
        <section className="space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#0055FF] uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Lead Monograph Feature</span>
          </div>
          <LargeFeatureCard article={leadStory} />
        </section>
      )}

      {/* 2. Collection Archive with Grid / List Toggle */}
      {remainingStories.length > 0 && (
        <section className="space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-[#E5E7EB]">
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#0055FF]" />
              <h2 className="font-heading font-black text-xl uppercase tracking-tight text-[#111827]">
                {meta.title} Collection Archive ({remainingStories.length})
              </h2>
            </div>

            <div className="flex items-center gap-1 bg-[#F3F4F6] p-1 rounded-full border border-white">
              <button
                onClick={() => setLayoutMode('grid')}
                className={`p-1.5 rounded-full transition-all cursor-pointer ${
                  layoutMode === 'grid' ? 'bg-white text-[#0055FF] shadow-xs' : 'text-[#6B7280]'
                }`}
                title="Grid Layout"
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setLayoutMode('list')}
                className={`p-1.5 rounded-full transition-all cursor-pointer ${
                  layoutMode === 'list' ? 'bg-white text-[#0055FF] shadow-xs' : 'text-[#6B7280]'
                }`}
                title="List Layout"
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>

          {layoutMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {remainingStories.map((story) => (
                <MediumGridCard key={story.id} article={story} />
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {remainingStories.map((story) => (
                <CompactListCard key={story.id} article={story} />
              ))}
            </div>
          )}
        </section>
      )}
    </div>
  );
}
