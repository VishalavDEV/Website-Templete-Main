'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShoppingBag, Star, Search, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { PRODUCTS } from '@/data/products';
import { ShadeOption } from '@/types';
import { useCart } from '@/context/CartContext';

export const ProductGrid: React.FC = () => {
  const { addToCart, searchQuery, setSearchQuery } = useCart();
  const [selectedShades, setSelectedShades] = useState<{ [productId: string]: ShadeOption }>({});

  const handleShadeSelect = (productId: string, shade: ShadeOption) => {
    setSelectedShades((prev) => ({ ...prev, [productId]: shade }));
  };

  // Dynamic Case-Insensitive Product Search Filter
  const filteredProducts = PRODUCTS.filter((product) => {
    if (!searchQuery.trim()) return true;
    const query = searchQuery.toLowerCase().trim();
    return (
      product.name.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query) ||
      product.tagline.toLowerCase().includes(query) ||
      product.description.toLowerCase().includes(query) ||
      (product.flavorNotes && product.flavorNotes.toLowerCase().includes(query)) ||
      product.shades.some((s) => s.name.toLowerCase().includes(query))
    );
  });

  return (
    <section id="shop" className="w-full bg-[#FAF8F5] px-6 py-10 md:py-14 md:px-12 scroll-mt-16">
      <div className="mx-auto max-w-7xl space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-stone-200 pb-6">
          <div className="space-y-2">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#D98A7F]">
              XYZ Beauty Collection
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight text-stone-900">
              Find Your Perfect Match
            </h2>
          </div>
          
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            {searchQuery && (
              <div className="flex items-center gap-2 rounded-full bg-[#D98A7F]/15 px-3.5 py-1.5 text-xs text-[#B86B60] font-semibold">
                <span>Showing results for "{searchQuery}"</span>
                <button
                  onClick={() => setSearchQuery('')}
                  className="rounded-full p-0.5 hover:bg-[#D98A7F]/20 text-stone-700"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              </div>
            )}
            <p className="max-w-xs text-xs text-stone-500 font-body">
              Explore our range of 100% biocompatible, clean lip balms & treatments.
            </p>
          </div>
        </div>

        {/* 4-Column Product Cards Grid */}
        {filteredProducts.length === 0 ? (
          <div className="my-12 flex flex-col items-center justify-center rounded-3xl border border-stone-200 bg-white p-12 text-center shadow-xs">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#FAF8F5] text-stone-400 mb-4">
              <Search className="h-8 w-8" />
            </div>
            <h3 className="font-heading text-2xl font-bold text-stone-900">No products found</h3>
            <p className="mt-1 text-sm text-stone-500 max-w-md font-body">
              We couldn't find any products matching "<strong className="text-stone-900">{searchQuery}</strong>". Try searching for "vanilla", "scrub", "oil", or "balm".
            </p>
            <button
              onClick={() => setSearchQuery('')}
              className="mt-6 rounded-full bg-[#1C1917] px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white hover:bg-[#D98A7F] transition-colors"
            >
              Clear Search Query
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {filteredProducts.slice(0, 8).map((product, idx) => {
              const currentShade = selectedShades[product.id] || product.shades[0];

              return (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (idx % 4) * 0.08 }}
                  className="group relative flex flex-col justify-between rounded-2xl border border-stone-200/80 bg-white p-5 shadow-sm hover:shadow-xl transition-all duration-500"
                >
                  {/* Product Image Frame with Hover Zoom */}
                  <div className="relative h-64 w-full overflow-hidden rounded-xl bg-[#FAF8F5] flex items-center justify-center p-4">
                    {/* Badge */}
                    {product.badge && (
                      <span className="absolute top-3 left-3 z-10 rounded-full bg-[#1C1917] px-3 py-1 text-[10px] font-bold tracking-widest text-white uppercase">
                        {product.badge}
                      </span>
                    )}

                    <motion.div
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.4 }}
                      className="relative h-full w-full"
                    >
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-contain rounded-lg transition-transform duration-500"
                      />
                    </motion.div>

                    {/* Quick Add Overlay Button */}
                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      onClick={() => addToCart(product, currentShade)}
                      className="magnetic-target absolute bottom-3 right-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-[#1C1917] text-white shadow-lg opacity-90 group-hover:opacity-100 hover:bg-[#D98A7F] transition-all"
                    >
                      <ShoppingBag className="h-4 w-4" />
                    </motion.button>
                  </div>

                  {/* Content Details */}
                  <div className="mt-5 space-y-3">
                    <div className="flex items-center justify-between text-xs text-stone-500">
                      <span>{product.category}</span>
                      <div className="flex items-center gap-1 text-amber-500">
                        <Star className="h-3 w-3 fill-current" />
                        <span className="font-semibold text-stone-800">{product.rating}</span>
                      </div>
                    </div>

                    <div>
                      {/* Generic Product Name */}
                      <h3 className="font-heading text-xl font-bold text-stone-900 group-hover:text-[#D98A7F] transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-xs text-stone-500 font-medium">{currentShade.name}</p>
                    </div>

                    {/* Shade Selection Color Swatches */}
                    <div className="flex items-center gap-2 pt-1 min-h-[24px]">
                      {product.shades.map((shade) => (
                        <button
                          key={shade.id}
                          onClick={() => handleShadeSelect(product.id, shade)}
                          className={`relative h-5 w-5 rounded-full border transition-all ${
                            currentShade.id === shade.id
                              ? 'ring-2 ring-[#D98A7F] ring-offset-2 scale-110'
                              : 'hover:scale-105 border-stone-300'
                          }`}
                          style={{ backgroundColor: shade.colorHex }}
                          title={shade.name}
                        />
                      ))}
                    </div>

                    {/* Price in Rupees & Add to Bag Bar */}
                    <div className="flex items-center justify-between border-t border-stone-100 pt-3">
                      <span className="font-heading text-xl font-bold text-stone-900">
                        ₹{product.price}.00
                      </span>

                      <button
                        onClick={() => addToCart(product, currentShade)}
                        className="text-xs font-bold text-[#1C1917] hover:text-[#D98A7F] transition-colors flex items-center gap-1"
                      >
                        Add to Bag
                        <ArrowRight className="h-3 w-3" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}

        {/* View All Products CTA Button at bottom of Shop section */}
        <div className="flex justify-center pt-8 border-t border-stone-200/60">
          <Link href="/shop">
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="magnetic-target group inline-flex items-center gap-3 rounded-full border-2 border-stone-900 bg-[#1C1917] px-9 py-4 text-sm font-semibold tracking-wider text-white hover:bg-[#D98A7F] hover:border-[#D98A7F] shadow-lg transition-all duration-300 cursor-pointer"
            >
              <span>View All Products</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </motion.div>
          </Link>
        </div>
      </div>
    </section>
  );
};
