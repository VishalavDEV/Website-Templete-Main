import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { categories } from '../../data/categories';
import { articles } from '../../data/articles';
import { ChevronDown, Sparkles, BookOpen, Flame } from 'lucide-react';

export function Navbar() {
  const location = useLocation();
  const [activeDropdown, setActiveDropdown] = useState(null);

  const mainLinks = [
    { name: 'Front Page', path: '/' },
    { name: 'Architecture & Design', path: '/category/architecture-design', id: 'architecture-design' },
    { name: 'Technology & Future', path: '/category/technology-future', id: 'technology-future' },
    { name: 'Culture & Arts', path: '/category/culture-arts', id: 'culture-arts' },
    { name: 'Global Affairs', path: '/category/global-affairs', id: 'global-affairs' },
    { name: 'Style & Living', path: '/category/style-living', id: 'style-living' },
    { name: 'Long Reads', path: '/category/long-reads', id: 'long-reads' },
  ];

  const secondaryLinks = [
    { name: 'About & Masthead', path: '/about' },
    { name: 'Authors', path: '/author/elena-vance' },
    { name: 'Contact Bureau', path: '/contact' },
  ];

  return (
    <nav className="border-b border-[#E8E5DC] bg-white sticky top-0 z-40 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          {/* Main Category Links */}
          <div className="flex items-center space-x-1 sm:space-x-4 md:space-x-6 overflow-x-auto no-scrollbar py-2 text-xs uppercase tracking-wider font-bold">
            {mainLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <div
                  key={link.name}
                  className="relative group shrink-0"
                  onMouseEnter={() => link.id && setActiveDropdown(link.id)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    to={link.path}
                    className={`py-2 px-1 inline-flex items-center gap-1 transition-colors border-b-2 ${
                      isActive
                        ? 'text-[#D43825] border-[#D43825]'
                        : 'text-[#141413] border-transparent hover:text-[#D43825] hover:border-[#141413]'
                    }`}
                  >
                    {link.name}
                    {link.id && <ChevronDown className="w-3 h-3 text-[#A1A19A] group-hover:rotate-180 transition-transform" />}
                  </Link>

                  {/* Mega Menu Dropdown */}
                  {activeDropdown === link.id && (
                    <div className="absolute top-full left-0 w-[420px] bg-white border border-[#141413] shadow-xl p-5 z-50 animate-fade-in text-left normal-case">
                      <div className="flex items-center justify-between border-b border-[#E8E5DC] pb-2 mb-3">
                        <span className="text-[0.6875rem] font-bold uppercase tracking-wider text-[#73736C]">
                          Featured in {link.name}
                        </span>
                        <Link
                          to={link.path}
                          className="text-[0.6875rem] font-bold text-[#D43825] uppercase tracking-wider hover:underline"
                        >
                          View All &rarr;
                        </Link>
                      </div>

                      <div className="space-y-3">
                        {articles
                          .filter((a) => a.categorySlug === link.id)
                          .slice(0, 2)
                          .map((art) => (
                            <Link
                              key={art.id}
                              to={`/article/${art.slug}`}
                              className="group/item flex gap-3 items-start p-1.5 hover:bg-[#FAF9F5] transition-colors"
                            >
                              <img
                                src={art.coverImage}
                                alt={art.title}
                                className="w-16 h-12 object-cover shrink-0 border border-[#E8E5DC]"
                              />
                              <div>
                                <h4 className="font-serif-headline text-xs font-bold text-[#141413] group-hover/item:text-[#D43825] leading-snug line-clamp-2">
                                  {art.title}
                                </h4>
                                <span className="text-[0.65rem] text-[#73736C] font-mono mt-0.5 block">
                                  {art.readTime} &bull; {art.author.name}
                                </span>
                              </div>
                            </Link>
                          ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Secondary Editorial Links */}
          <div className="hidden xl:flex items-center gap-4 text-xs font-medium text-[#73736C]">
            {secondaryLinks.map((sec) => (
              <Link
                key={sec.name}
                to={sec.path}
                className="hover:text-[#141413] transition-colors hover:underline"
              >
                {sec.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
