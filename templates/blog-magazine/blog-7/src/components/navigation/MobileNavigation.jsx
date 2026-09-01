import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X, Search, Bookmark, Sparkles, BookOpen, Globe } from 'lucide-react';
import { categories } from '../../data/categories';
import { useMagazine } from '../../context/MagazineContext';

export function MobileNavigation({ isOpen, onClose }) {
  const location = useLocation();
  const { setIsSearchOpen, setIsBookmarkDrawerOpen, setIsNewsletterOpen, bookmarks } = useMagazine();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden flex">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="relative w-4/5 max-w-sm bg-[#FAF9F5] h-full shadow-2xl z-10 flex flex-col justify-between overflow-y-auto border-r-2 border-[#141413] animate-slide-left">
        <div>
          {/* Header */}
          <div className="p-4 border-b border-[#E8E5DC] flex items-center justify-between bg-white">
            <span className="font-serif-headline text-lg font-black uppercase tracking-tight text-[#141413]">
              THE BLOG OBSERVER
            </span>
            <button
              onClick={onClose}
              className="p-1 text-[#73736C] hover:text-[#141413] transition-colors"
              aria-label="Close navigation"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Search & Actions Bar */}
          <div className="p-4 border-b border-[#E8E5DC] space-y-2">
            <button
              onClick={() => {
                onClose();
                setIsSearchOpen(true);
              }}
              className="w-full flex items-center gap-2 px-3 py-2 bg-white border border-[#D1CDC4] text-xs text-[#73736C] font-medium hover:border-[#141413] transition-colors"
            >
              <Search className="w-4 h-4 text-[#D43825]" />
              <span>Search articles & topics...</span>
            </button>

            <button
              onClick={() => {
                onClose();
                setIsBookmarkDrawerOpen(true);
              }}
              className="w-full flex items-center justify-between px-3 py-2 bg-[#F4F1EA] text-xs font-semibold text-[#141413]"
            >
              <div className="flex items-center gap-2">
                <Bookmark className="w-4 h-4 text-[#D43825]" />
                <span>Reading List</span>
              </div>
              <span className="text-[0.7rem] bg-[#141413] text-white px-2 py-0.5 font-mono">
                {bookmarks.length}
              </span>
            </button>
          </div>

          {/* Navigation Links */}
          <div className="p-4">
            <div className="text-[0.6875rem] font-bold uppercase tracking-wider text-[#73736C] mb-2">
              Editorial Sections
            </div>
            <div className="space-y-1">
              <Link
                to="/"
                onClick={onClose}
                className={`block py-2 text-sm font-bold uppercase tracking-wider ${
                  location.pathname === '/' ? 'text-[#D43825]' : 'text-[#141413]'
                }`}
              >
                Home / Front Page
              </Link>
              {categories.map((cat) => (
                <Link
                  key={cat.id}
                  to={`/category/${cat.slug}`}
                  onClick={onClose}
                  className={`block py-1.5 text-sm font-medium transition-colors ${
                    location.pathname === `/category/${cat.slug}`
                      ? 'text-[#D43825] font-bold'
                      : 'text-[#4A4A45] hover:text-[#141413]'
                  }`}
                >
                  {cat.name}
                </Link>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-[#E8E5DC]">
              <div className="text-[0.6875rem] font-bold uppercase tracking-wider text-[#73736C] mb-2">
                Information & Bureau
              </div>
              <div className="space-y-1.5 text-xs text-[#52524E]">
                <Link to="/about" onClick={onClose} className="block py-1 hover:text-[#141413]">
                  About & Masthead
                </Link>
                <Link to="/author/elena-vance" onClick={onClose} className="block py-1 hover:text-[#141413]">
                  Authors & Critics
                </Link>
                <Link to="/contact" onClick={onClose} className="block py-1 hover:text-[#141413]">
                  Contact Bureau & Letters
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Footer in Drawer */}
        <div className="p-4 border-t border-[#E8E5DC] bg-[#F4F1EA]">
          <button
            onClick={() => {
              onClose();
              setIsNewsletterOpen(true);
            }}
            className="w-full py-2.5 bg-[#141413] text-[#FAF9F5] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#D43825] transition-colors cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Join The Dispatch</span>
          </button>
          <p className="text-[0.65rem] text-[#73736C] text-center mt-2 font-mono">
            Vol. VIII &bull; Printed & Distributed Globally
          </p>
        </div>
      </div>
    </div>
  );
}
