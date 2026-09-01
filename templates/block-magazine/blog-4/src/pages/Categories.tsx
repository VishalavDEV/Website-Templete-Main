import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Cpu,
  Code,
  TrendingUp,
  Zap,
  Layers,
  Compass,
  Globe,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { Category } from '../types';
import { articleService } from '../services/articleService';
import { Breadcrumbs } from '../components/common/Breadcrumbs';

export const Categories: React.FC = () => {
  const [categories, setCategories] = useState<(Category & { articleCount: number })[]>([]);
  const [, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const cats = await articleService.getCategories();
      setCategories(cats);
      setLoading(false);
    }
    load();
  }, []);

  const getIcon = (iconName: string) => {
    const props = { className: 'w-7 h-7' };
    switch (iconName) {
      case 'Cpu':
        return <Cpu {...props} />;
      case 'Code':
        return <Code {...props} />;
      case 'TrendingUp':
        return <TrendingUp {...props} />;
      case 'Zap':
        return <Zap {...props} />;
      case 'Layers':
        return <Layers {...props} />;
      case 'Compass':
        return <Compass {...props} />;
      case 'Globe':
        return <Globe {...props} />;
      case 'Sparkles':
      default:
        return <Sparkles {...props} />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-in fade-in duration-200">
      <Breadcrumbs items={[{ label: 'Categories' }]} />

      <div className="py-6 sm:py-8 border-b border-[#E8E2D5] dark:border-[#3A342E]">
        <span className="text-xs font-bold uppercase tracking-widest text-[#C85A32] dark:text-[#E27453] mb-2 block">
          Editorial Desks
        </span>
        <h1 className="font-display font-black text-4xl sm:text-5xl text-[#1C1917] dark:text-[#F7F4EE] tracking-tight">
          Browse by Subject
        </h1>
        <p className="text-base text-[#44403C] dark:text-[#D7D1C6] mt-2 max-w-2xl leading-relaxed font-normal">
          In-depth reporting across artificial intelligence, computing architectures, science, economics, and design.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            to={`/category/${cat.slug}`}
            className="group relative bg-white dark:bg-[#1E1B18] rounded-3xl border border-[#E8E2D5] dark:border-[#3A342E] p-8 hover:border-[#C85A32] dark:hover:border-[#E27453] transition-all duration-300 hover:shadow-xl flex flex-col justify-between overflow-hidden"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                  style={{
                    backgroundColor: `${cat.color}18`,
                    color: cat.color
                  }}
                >
                  {getIcon(cat.iconName)}
                </div>
                <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-[#E8E2D5]/60 dark:bg-[#282420] text-[#1C1917] dark:text-[#F7F4EE]">
                  {cat.articleCount} articles
                </span>
              </div>

              <h3 className="font-display font-bold text-2xl text-[#1C1917] dark:text-[#F7F4EE] group-hover:text-[#C85A32] dark:group-hover:text-[#E27453] transition-colors mb-3">
                {cat.name}
              </h3>

              <p className="text-sm text-[#44403C] dark:text-[#D7D1C6] leading-relaxed mb-6 font-normal">
                {cat.description}
              </p>
            </div>

            <div className="flex items-center justify-between pt-6 border-t border-[#E8E2D5] dark:border-[#3A342E] text-sm font-bold text-[#1C1917] dark:text-[#A39C90] group-hover:text-[#C85A32]">
              <span>Explore {cat.name}</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
