'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { PRODUCTS } from '@/data/products';
import { ShadeOption } from '@/types';
import { useCart } from '@/context/CartContext';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ShoppingBag, Star, Search, X, ChevronRight, Sparkles } from 'lucide-react';

const CATEGORIES = [
  'All',
  'Lip Balm',
  'Lip Scrub',
  'Lip Oil',
  'Tinted Lip Balm',
  'Lip Care',
  'Lip Treatment',
];

export default function ShopPage() {
  const { addToCart, searchQuery, setSearchQuery } = useCart();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedShades, setSelectedShades] = useState<{ [productId: string]: ShadeOption }>({});

  const handleShadeSelect = (productId: string, shade: ShadeOption) => {
    setSelectedShades((prev) => ({ ...prev, [productId]: shade }));
  };

  // Filter Products by Category and Search Query
  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesCategory =
      selectedCategory === 'All' ||
      product.category.toLowerCase() === selectedCategory.toLowerCase();

    const query = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !query ||
      product.name.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query) ||
      product.tagline.toLowerCase().includes(query) ||
      product.description.toLowerCase().includes(query) ||
      (product.flavorNotes && product.flavorNotes.toLowerCase().includes(query)) ||
      product.shades.some((s) => s.name.toLowerCase().includes(query));

    return matchesCategory && matchesSearch;
  });

  return (
    <main className="relative min-h-screen w-full bg-[#FFF9F5] text-[#2D2224]">
      {/* Sticky Navigation Bar */}
      <Navbar />

      {/* Shop Page Banner Header */}
      <section className="relative w-full bg-[#FDF4F6]/60 border-b border-[#F3D0D7] px-6 py-12 md:px-12 md:py-16">
        <div className="mx-auto max-w-7xl space-y-4">
          {/* Breadcrumb Nav */}
          <div className="flex items-center gap-2 text-xs font-semibold text-[#7E6B6E] uppercase tracking-wider">
            <Link href="/" className="hover:text-[#B76E79] transition-colors">
              Home
            </Link>
            <ChevronRight className="h-3 w-3 text-[#B76E79]" />
            <span className="text-[#2D2224] font-bold">Shop Collection</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#F3D0D7] bg-white px-3.5 py-1 text-xs font-bold uppercase text-[#B76E79]">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Skin-First Clean Beauty</span>
              </div>
              <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#2D2224]">
                Soft Glow Catalog
              </h1>
            </div>
            <p className="max-w-md text-sm text-[#7E6B6E] font-body leading-relaxed">
              Explore our full collection of biocompatible lip oils, velvety balms, sugar exfoliants, and overnight sleep masks.
            </p>
          </div>
        </div>
      </section>

      {/* Main Filter & Products Section */}
      <section className="w-full px-6 py-12 md:px-12">
        <div className="mx-auto max-w-7xl space-y-8">
          {/* Category Filter Pills & Search Status */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-[#F3D0D7] pb-6">
            {/* Category Filter Buttons Bar */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 no-scrollbar">
              <span className="text-xs font-bold text-[#7E6B6E] uppercase tracking-wider mr-2 hidden sm:inline flex-shrink-0">
                Filter By:
              </span>
              {CATEGORIES.map((category) => {
                const isActive = selectedCategory === category;
                return (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`flex-shrink-0 rounded-full px-4 py-2 text-xs font-semibold tracking-wider transition-all duration-300 ${
                      isActive
                        ? 'bg-[#B76E79] text-white shadow-md'
                        : 'bg-white text-[#2D2224] border border-[#F3D0D7] hover:border-[#B76E79] hover:bg-[#FDF4F6]'
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>

            {/* Active Search & Category Status Pill */}
            <div className="flex items-center gap-3 text-xs text-[#7E6B6E] font-medium">
              <span>
                Showing <strong className="text-[#2D2224]">{filteredProducts.length}</strong> of {PRODUCTS.length} products
              </span>
              {(selectedCategory !== 'All' || searchQuery) && (
                <button
                  onClick={() => {
                    setSelectedCategory('All');
                    setSearchQuery('');
                  }}
                  className="flex items-center gap-1 text-[#B76E79] font-bold hover:underline"
                >
                  <X className="h-3.5 w-3.5" />
                  Reset Filters
                </button>
              )}
            </div>
          </div>

          {/* Product Cards Grid */}
          {filteredProducts.length === 0 ? (
            <div className="my-16 flex flex-col items-center justify-center rounded-3xl border border-[#F3D0D7] bg-white p-12 text-center shadow-xs">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#FFF9F5] text-[#B76E79] mb-4 border border-[#F3D0D7]">
                <Search className="h-8 w-8" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-[#2D2224]">No products found</h3>
              <p className="mt-1 text-sm text-[#7E6B6E] max-w-md font-body">
                We couldn't find any products in "{selectedCategory}" matching your criteria. Try adjusting your category or search keywords.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                }}
                className="mt-6 rounded-full bg-[#B76E79] px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white hover:bg-[#9E5661] transition-colors"
              >
                Show All Products
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {filteredProducts.map((product, idx) => {
                const currentShade = selectedShades[product.id] || product.shades[0];

                return (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: (idx % 4) * 0.05 }}
                    className="group relative flex flex-col justify-between rounded-3xl border border-[#F3D0D7] bg-white p-5 shadow-sm hover:shadow-xl hover:border-[#B76E79]/50 transition-all duration-500"
                  >
                    {/* Product Image Frame */}
                    <Link href={`/product/${product.id}`} className="relative h-64 w-full overflow-hidden rounded-2xl bg-[#FFF9F5] flex items-center justify-center p-4 block">
                      {product.badge && (
                        <span className="absolute top-3 left-3 z-10 rounded-full bg-[#F7DDE2] px-3 py-1 text-[10px] font-bold tracking-widest text-[#9E5661] uppercase">
                          {product.badge}
                        </span>
                      )}

                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-contain p-2 group-hover:scale-108 transition-transform duration-500"
                      />
                    </Link>

                    {/* Content Details */}
                    <div className="mt-4 space-y-3">
                      <div className="flex items-center justify-between text-xs text-[#7E6B6E]">
                        <span className="font-semibold uppercase text-[#B76E79]">{product.category}</span>
                        <div className="flex items-center gap-1 text-amber-400 font-bold">
                          <Star className="h-3.5 w-3.5 fill-current" />
                          <span>{product.rating}</span>
                        </div>
                      </div>

                      <Link href={`/product/${product.id}`}>
                        <h3 className="font-heading text-xl font-bold text-[#2D2224] group-hover:text-[#B76E79] transition-colors">
                          {product.name}
                        </h3>
                      </Link>

                      <p className="text-xs text-[#7E6B6E] line-clamp-2">{product.tagline}</p>

                      {/* Shade Selection Swatches */}
                      {product.shades.length > 0 && (
                        <div className="flex items-center gap-2 pt-1 min-h-[24px]">
                          {product.shades.map((shade) => (
                            <button
                              key={shade.id}
                              onClick={() => handleShadeSelect(product.id, shade)}
                              className={`relative h-5 w-5 rounded-full border transition-all ${
                                currentShade?.id === shade.id
                                  ? 'ring-2 ring-[#B76E79] ring-offset-2 scale-110'
                                  : 'hover:scale-105 border-[#F3D0D7]'
                              }`}
                              style={{ backgroundColor: shade.colorHex }}
                              title={shade.name}
                            />
                          ))}
                        </div>
                      )}

                      {/* Price & Add to Cart */}
                      <div className="flex items-center justify-between border-t border-[#F3D0D7]/60 pt-3">
                        <span className="font-heading text-xl font-bold text-[#2D2224]">
                          ₹{product.price}.00
                        </span>

                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => addToCart(product, currentShade)}
                          className="flex items-center gap-1.5 rounded-full bg-[#B76E79] px-4 py-2 text-xs font-bold text-white shadow-sm hover:bg-[#9E5661] transition-all"
                        >
                          <ShoppingBag className="h-3.5 w-3.5" />
                          <span>Add</span>
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}

