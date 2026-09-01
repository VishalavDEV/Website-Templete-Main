'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Search, User, X, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';

export const Navbar: React.FC = () => {
  const { cartCount, toggleCart, openLogin, searchQuery, setSearchQuery } = useCart();
  const [searchFocused, setSearchFocused] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#FFF9F5]/90 backdrop-blur-md border-b border-[#F3D0D7]/70 transition-all duration-300">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 py-4 md:px-12">
        {/* Left: Brand Logo */}
        <Link href="/" className="group flex items-center gap-2 font-heading text-2xl sm:text-3xl font-bold tracking-tight text-[#2D2224]">
          <span className="font-heading font-extrabold tracking-wide text-[#2D2224]">Soft</span>
          <span className="font-accent italic font-normal text-[#B76E79] group-hover:translate-x-0.5 transition-transform">
            Glow
          </span>
          <Sparkles className="h-4 w-4 text-[#B76E79] opacity-80 group-hover:rotate-12 transition-transform" />
        </Link>

        {/* Center: Header Links: Shop, Best Sellers, New Arrivals, About */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium tracking-wide text-[#7E6B6E]">
          <Link href="/shop" className="hover:text-[#B76E79] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#B76E79] hover:after:w-full after:transition-all">
            Shop
          </Link>
          <Link href="/#bestsellers" className="hover:text-[#B76E79] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#B76E79] hover:after:w-full after:transition-all">
            Best Sellers
          </Link>
          <Link href="/#new-arrivals" className="hover:text-[#B76E79] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#B76E79] hover:after:w-full after:transition-all">
            New Arrivals
          </Link>
          <Link href="/#routine" className="hover:text-[#B76E79] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#B76E79] hover:after:w-full after:transition-all">
            Skincare Routine
          </Link>
          <Link href="/#reviews" className="hover:text-[#B76E79] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#B76E79] hover:after:w-full after:transition-all">
            Reviews
          </Link>
          <Link href="/#about" className="hover:text-[#B76E79] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#B76E79] hover:after:w-full after:transition-all">
            About
          </Link>
        </nav>

        {/* Right: Search, Account & Cart */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Desktop Search Input */}
          <div
            className={`hidden sm:flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs transition-all ${
              searchFocused || searchQuery
                ? 'border-[#B76E79] bg-white ring-2 ring-[#F7DDE2] w-48 sm:w-56'
                : 'border-[#F3D0D7] bg-[#FDF4F6]/80 hover:border-[#B76E79]/50 w-36 sm:w-44'
            }`}
          >
            <Search className="h-3.5 w-3.5 text-[#B76E79] flex-shrink-0" />
            <input
              type="text"
              placeholder="Search soft glow..."
              value={searchQuery}
              onChange={handleSearchChange}
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setSearchFocused(false)}
              className="w-full bg-transparent text-[#2D2224] outline-none placeholder:text-[#7E6B6E]/60 text-xs"
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery('')} className="text-[#7E6B6E] hover:text-[#2D2224]">
                <X className="h-3 w-3" />
              </button>
            )}
          </div>

          {/* Mobile Search Toggle Icon */}
          <button
            onClick={() => setMobileSearchOpen(!mobileSearchOpen)}
            className="flex sm:hidden items-center justify-center rounded-full p-2 text-[#2D2224] hover:bg-[#F7DDE2]/50"
          >
            <Search className="h-4 w-4 text-[#B76E79]" />
          </button>

          {/* Account Button */}
          <button
            onClick={openLogin}
            className="flex items-center gap-1.5 text-xs font-semibold tracking-wider text-[#2D2224] hover:text-[#B76E79] transition-colors px-2 py-1.5 rounded-full hover:bg-[#F7DDE2]/30"
          >
            <User className="h-4 w-4 text-[#B76E79]" />
            <span className="hidden sm:inline">Account</span>
          </button>

          {/* Cart Drawer Toggle Button */}
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={toggleCart}
            className="magnetic-target relative flex items-center gap-2 rounded-full bg-[#B76E79] px-4 py-2 text-xs font-semibold text-white shadow-md hover:bg-[#9E5661] transition-all duration-300"
          >
            <ShoppingBag className="h-3.5 w-3.5" />
            <span className="hidden sm:inline font-semibold">Cart</span>
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-[10px] font-bold text-[#B76E79]">
              {cartCount}
            </span>
          </motion.button>
        </div>
      </div>

      {/* Mobile Search Bar Expand */}
      {mobileSearchOpen && (
        <div className="px-4 pb-3 sm:hidden border-t border-[#F3D0D7] pt-2 bg-white/95">
          <div className="flex items-center gap-2 rounded-full border border-[#B76E79] bg-white px-3 py-2 text-xs">
            <Search className="h-4 w-4 text-[#B76E79]" />
            <input
              type="text"
              placeholder="Search soft glow lip oil, balms, routine..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full bg-transparent text-[#2D2224] outline-none text-xs"
              autoFocus
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery('')} className="text-[#7E6B6E]">
                <X className="h-3.5 w-3.5" />
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
