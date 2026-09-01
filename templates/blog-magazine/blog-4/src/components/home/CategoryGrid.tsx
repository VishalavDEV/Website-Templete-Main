import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Compass } from 'lucide-react';
import { Category } from '../../types';

interface CategoryGridProps {
  categories: (Category & { articleCount?: number })[];
}

export const CategoryGrid: React.FC<CategoryGridProps> = ({ categories }) => {
  return (
    <section className="py-12 border-b border-[#E8E2D5] dark:border-[#3A342E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8 pb-4 border-b border-[#E8E2D5] dark:border-[#3A342E]">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#C85A32] dark:text-[#E27453] mb-1 block">
              Editorial Taxonomy
            </span>
            <h2 className="font-display font-black text-2xl sm:text-3xl text-[#1C1917] dark:text-[#F7F4EE] tracking-tight">
              Explore by Department
            </h2>
          </div>
          <Link
            to="/categories"
            className="inline-flex items-center space-x-1.5 text-xs font-bold text-[#1C1917] dark:text-[#F7F4EE] hover:text-[#C85A32] dark:hover:text-[#E27453] transition-colors"
          >
            <span>All Desks</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.slice(0, 4).map((category) => (
            <Link
              key={category.id}
              to={`/category/${category.slug}`}
              className="group p-6 rounded-3xl bg-white dark:bg-[#1E1B18] border border-[#E8E2D5] dark:border-[#3A342E] hover:border-[#C85A32] dark:hover:border-[#E27453] transition-all duration-300 hover:shadow-lg flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-2xl bg-[#E8E2D5]/50 dark:bg-[#282420] text-[#C85A32] dark:text-[#E27453] flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Compass className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#E8E2D5]/50 dark:bg-[#282420] text-[#44403C] dark:text-[#D7D1C6]">
                    {category.articleCount || 4} pieces
                  </span>
                </div>

                <h3 className="font-display font-bold text-lg text-[#1C1917] dark:text-[#F7F4EE] group-hover:text-[#C85A32] dark:group-hover:text-[#E27453] transition-colors mb-2">
                  {category.name}
                </h3>

                <p className="text-xs text-[#78716C] dark:text-[#A39C90] leading-relaxed line-clamp-2 font-normal">
                  {category.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#E8E2D5] dark:border-[#3A342E] flex items-center justify-between text-xs font-bold text-[#1C1917] dark:text-[#F7F4EE] group-hover:text-[#C85A32]">
                <span>Browse Desk</span>
                <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
