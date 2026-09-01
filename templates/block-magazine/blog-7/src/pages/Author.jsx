import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { authors } from '../data/authors';
import { articles } from '../data/articles';
import { Breadcrumbs } from '../components/utility/Breadcrumbs';
import { StoryCard } from '../components/editorial/StoryCard';
import { AuthorProfile } from '../components/author/AuthorProfile';
import { Award, BookOpen } from 'lucide-react';
import { StaggerContainer, StaggerItem } from '../components/motion/MotionPrimitives';

export function Author() {
  const params = useParams();
  const authorIdentifier = params.slug || params.id;
  const [activeTab, setActiveTab] = useState('latest');

  const author =
    authors.find(
      (a) =>
        a.id === authorIdentifier ||
        a.name.toLowerCase().replace(/\s+/g, '-') === authorIdentifier?.toLowerCase()
    ) || authors[0];

  const authorArticles = articles.filter(
    (art) => art.author.id === author.id || art.author.name === author.name
  );

  const breadcrumbItems = [
    { label: 'Contributors', path: '/about' },
    { label: author.name },
  ];

  return (
    <div className="author-page max-w-7xl mx-auto px-4 md:px-8">
      <Breadcrumbs items={breadcrumbItems} />

      {/* 1. Author Profile Component */}
      <AuthorProfile author={author} />

      {/* 2. Author Stories & Accolades Tabs */}
      <div className="flex items-center justify-between border-b-2 border-[#141413] pb-3 mb-8">
        <div className="flex items-center gap-6 text-xs font-bold uppercase tracking-wider">
          <button
            onClick={() => setActiveTab('latest')}
            className={`py-1 border-b-2 transition-colors cursor-pointer ${
              activeTab === 'latest'
                ? 'border-[#D43825] text-[#D43825]'
                : 'border-transparent text-[#73736C] hover:text-[#141413]'
            }`}
          >
            Author Monographs ({authorArticles.length})
          </button>
          <button
            onClick={() => setActiveTab('accolades')}
            className={`py-1 border-b-2 transition-colors cursor-pointer ${
              activeTab === 'accolades'
                ? 'border-[#D43825] text-[#D43825]'
                : 'border-transparent text-[#73736C] hover:text-[#141413]'
            }`}
          >
            Honors & Fellowships
          </button>
        </div>

        <span className="text-xs font-mono text-[#73736C]">
          Monographs on Record: {author.articlesCount || 30}+
        </span>
      </div>

      {/* 3. Author Stories List using reusable StoryCard */}
      {activeTab === 'latest' ? (
        authorArticles.length === 0 ? (
          <div className="py-16 text-center text-xs text-[#73736C] bg-white p-8 border border-[#E8E5DC] mb-16">
            <BookOpen className="w-8 h-8 text-[#D1CDC4] mx-auto mb-2" />
            No direct essays mapped. Please explore other contributor profiles.
          </div>
        ) : (
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {authorArticles.map((art) => (
              <StaggerItem key={art.id}>
                <StoryCard article={art} variant="medium" showExcerpt={true} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        )
      ) : (
        <div className="bg-white p-8 border border-[#E8E5DC] mb-16 space-y-4 shadow-xs">
          <h3 className="font-serif-headline text-xl font-bold text-[#141413] mb-4">
            Distinctions, Fellowships & Honors
          </h3>
          <ul className="space-y-3 text-xs sm:text-sm text-[#4A4A45]">
            {author.awards?.map((award, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <Award className="w-4 h-4 text-[#D43825] shrink-0 mt-0.5" />
                <span>{award}</span>
              </li>
            ))}
            <li className="flex items-start gap-3">
              <Award className="w-4 h-4 text-[#C28B38] shrink-0 mt-0.5" />
              <span>International Monograph Grant Recipient for Global Urbanism Studies</span>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

// Export AuthorPage alias
export const AuthorPage = Author;
