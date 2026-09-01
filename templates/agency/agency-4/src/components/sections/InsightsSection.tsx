import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { ArticleCard } from '../ui/ArticleCard';
import { Button } from '../ui/Button';
import { INSIGHTS } from '../../data/insights';

export const InsightsSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section id="insights" className="py-24 md:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <SectionHeader
            badge="Studio Insights"
            title="Thought leadership on brand, design & technology."
            subtitle="Explore our latest essays, design system methodologies, and technical perspectives."
            className="mb-0"
          />

          <div className="mt-6 md:mt-0 flex-shrink-0">
            <Button
              variant="outline"
              size="md"
              icon={ArrowRight}
              onClick={() => navigate('/insights')}
            >
              All Articles
            </Button>
          </div>
        </div>

        {/* 3 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {INSIGHTS.map((article, idx) => (
            <ArticleCard key={article.id} article={article} index={idx} />
          ))}
        </div>

      </div>
    </section>
  );
};
