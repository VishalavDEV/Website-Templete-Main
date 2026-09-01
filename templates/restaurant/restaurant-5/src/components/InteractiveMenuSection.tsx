import React, { useState } from 'react';
import { NoireCategory, NoireMenuItem } from '../types';
import { NOIRE_MENU_ITEMS } from '../data/noireData';

interface InteractiveMenuSectionProps {
  onSelectDish: (dish: NoireMenuItem) => void;
}

export const InteractiveMenuSection: React.FC<InteractiveMenuSectionProps> = ({ onSelectDish }) => {
  const [activeCategory, setActiveCategory] = useState<NoireCategory>('01 SMALL PLATES');
  const [hoveredDish, setHoveredDish] = useState<NoireMenuItem | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const categories: NoireCategory[] = [
    '01 SMALL PLATES',
    '02 FIRE',
    '03 SEA',
    '04 VEGETABLE',
    '05 SWEET',
  ];

  const filteredDishes = NOIRE_MENU_ITEMS.filter((item) => item.category === activeCategory);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    setMousePos({
      x: e.clientX,
      y: e.clientY,
    });
  };

  return (
    <section id="menu" className="relative w-full bg-[#171512] text-[#F3EBDD] py-24 md:py-36 px-6 md:px-16 overflow-hidden">
      {/* Section Title */}
      <div className="max-w-7xl mx-auto mb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-[rgba(243,235,221,0.14)] pb-8">
        <div>
          <span className="font-mono text-xs text-[#B87552] tracking-widest uppercase block mb-2 font-bold">
            02 // CULINARY SELECTION
          </span>
          <h2 className="font-display font-black tracking-tighter text-4xl sm:text-6xl text-[#F3EBDD] uppercase">
            THE NOIRÉ MENU
          </h2>
        </div>
        <div className="font-mono text-xs text-[#B8AA98] tracking-widest uppercase">
          CURATED DAILY BY CHEF ARJUN RAO &nbsp;|&nbsp; ALL PRICES IN INR (₹)
        </div>
      </div>

      {/* Main Split Grid */}
      <div
        className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 relative min-h-[600px]"
        onMouseMove={handleMouseMove}
      >
        {/* Floating Hover Image Preview */}
        {hoveredDish && (
          <div
            className="pointer-events-none fixed z-50 hidden lg:block w-72 h-48 overflow-hidden rounded-sm border border-[#B87552] shadow-2xl transition-all duration-150 ease-out bg-[#211D18]"
            style={{
              left: `${Math.min(window.innerWidth - 300, mousePos.x + 20)}px`,
              top: `${Math.min(window.innerHeight - 200, mousePos.y + 20)}px`,
            }}
          >
            <img
              src={hoveredDish.image}
              alt={hoveredDish.name}
              className="w-full h-full object-cover filter brightness-100 contrast-[1.02]"
            />
            <div className="absolute inset-x-0 bottom-0 bg-[#171512]/90 p-2 font-mono text-[10px] text-[#F3EBDD] text-center border-t border-[rgba(243,235,221,0.14)]">
              {hoveredDish.code} — {hoveredDish.name}
            </div>
          </div>
        )}

        {/* Left Side: Category Selector */}
        <div className="lg:col-span-4 flex flex-col space-y-4">
          <span className="font-mono text-xs text-[#B8AA98] tracking-widest uppercase mb-2 font-bold">
            SELECT COURSE:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-left py-4 px-6 font-display font-bold text-xl md:text-2xl tracking-tight transition-all duration-300 border-l-4 flex justify-between items-center rounded-r-sm ${
                activeCategory === cat
                  ? 'bg-[#211D18] border-[#B87552] text-[#B87552] translate-x-2 shadow-md'
                  : 'border-transparent text-[#B8AA98] hover:text-[#F3EBDD] hover:bg-[#211D18]/50'
              }`}
            >
              <span>{cat}</span>
              <span className="font-mono text-xs text-[#B8AA98]">
                [{NOIRE_MENU_ITEMS.filter((i) => i.category === cat).length}]
              </span>
            </button>
          ))}
        </div>

        {/* Right Side: Dish List */}
        <div className="lg:col-span-8 flex flex-col space-y-6">
          <div className="flex justify-between items-center pb-3 font-mono text-xs text-[#B8AA98] border-b border-[rgba(243,235,221,0.14)]">
            <span>DISH & INGREDIENTS</span>
            <span>PRICE</span>
          </div>

          {filteredDishes.map((dish) => (
            <div
              key={dish.id}
              onMouseEnter={() => setHoveredDish(dish)}
              onMouseLeave={() => setHoveredDish(null)}
              onClick={() => onSelectDish(dish)}
              className={`group cursor-pointer p-6 bg-[#211D18]/80 border transition-all duration-300 rounded-sm relative shadow-sm ${
                hoveredDish?.id === dish.id
                  ? 'border-[#B87552] bg-[#211D18] scale-[1.01]'
                  : 'border-[rgba(243,235,221,0.14)] hover:border-[#B87552]/60'
              }`}
            >
              <div className="flex flex-col sm:flex-row justify-between sm:items-baseline gap-2 mb-2">
                <div className="flex items-center space-x-3">
                  <span className="font-mono text-xs text-[#B87552] font-bold">{dish.code}</span>
                  <h3 className="font-display font-bold text-xl md:text-2xl text-[#F3EBDD] group-hover:text-[#B87552] transition-colors">
                    {dish.name}
                  </h3>
                  {dish.isSignature && (
                    <span className="bg-[#B87552]/20 border border-[#B87552] text-[#B87552] font-mono text-[10px] px-2 py-0.5 uppercase tracking-widest font-bold">
                      SIGNATURE
                    </span>
                  )}
                </div>

                <div className="font-mono text-lg font-bold text-[#B87552]">
                  {dish.price}
                </div>
              </div>

              <p className="font-body text-xs md:text-sm text-[#B8AA98] leading-relaxed">
                {dish.ingredients}
              </p>

              {/* Mobile Inline Thumbnail Preview */}
              <div className="mt-4 lg:hidden h-40 w-full overflow-hidden rounded-sm border border-[rgba(243,235,221,0.14)]">
                <img src={dish.image} alt={dish.name} className="w-full h-full object-cover" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
