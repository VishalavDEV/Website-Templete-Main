'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingBag, Star, Flame, Sparkles } from 'lucide-react';
import { PRODUCTS } from '@/data/products';
import { useCart } from '@/context/CartContext';

const CATEGORIES = ['All', 'Lip Oil', 'Lip Balm', 'Lip Scrub', 'Lip Treatment'];

export const BestSellers: React.FC = () => {
  const { addToCart } = useCart();
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProducts = PRODUCTS.filter((p) => {
    if (activeCategory === 'All') return true;
    return p.category === activeCategory;
  });

  return (
    <section id="bestsellers" className="w-full bg-[#FDF4F6]/50 px-6 py-14 md:px-12 md:py-20">
      <div className="mx-auto max-w-7xl space-y-10">
        {/* Header & Filter Pills */}
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#F3D0D7] bg-white px-4 py-1.5 text-xs font-bold uppercase text-[#B76E79] shadow-xs">
            <Flame className="h-3.5 w-3.5" />
            <span>Community Favorites</span>
          </div>

          <h2 className="font-heading text-4xl sm:text-5xl font-extrabold text-[#2D2224]">
            Best Sellers
          </h2>

          <p className="text-[#7E6B6E] text-sm sm:text-base max-w-md font-body">
            Our most loved plush lip formulas for velvety shine and barrier protection.
          </p>

          {/* Filter Pills */}
          <div className="flex items-center justify-center gap-2 flex-wrap pt-2">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-full px-5 py-2 text-xs font-bold transition-all duration-300 ${
                    isActive
                      ? 'bg-[#B76E79] text-white shadow-md'
                      : 'bg-white text-[#7E6B6E] border border-[#F3D0D7] hover:border-[#B76E79]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Product Cards Row / Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProducts.slice(0, 6).map((product) => (
              <motion.div
                layout
                key={product.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-[#F3D0D7] bg-white p-6 shadow-sm hover:shadow-xl hover:border-[#B76E79]/60 transition-all duration-300"
              >
                {/* Badge Header */}
                <div className="flex items-center justify-between z-10">
                  <span className="rounded-full bg-[#F7DDE2] px-3 py-1 text-[10px] font-bold text-[#9E5661] uppercase tracking-widest">
                    {product.badge || 'POPULAR'}
                  </span>
                  <div className="flex items-center gap-1 rounded-full bg-[#FFF9F5] px-2.5 py-1 text-xs font-bold text-amber-500 border border-[#F3D0D7]">
                    <Star className="h-3.5 w-3.5 fill-current" />
                    <span>{product.rating}</span>
                  </div>
                </div>

                {/* Product Image */}
                <Link href={`/product/${product.id}`} className="relative my-4 block h-64 w-full overflow-hidden rounded-2xl bg-[#FFF9F5] p-4">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-3 group-hover:scale-108 transition-transform duration-500"
                  />
                </Link>

                {/* Content */}
                <div className="space-y-3">
                  <span className="text-[11px] font-bold uppercase text-[#B76E79] tracking-wider block">
                    {product.category}
                  </span>
                  <Link href={`/product/${product.id}`}>
                    <h3 className="font-heading text-2xl font-bold text-[#2D2224] group-hover:text-[#B76E79] transition-colors">
                      {product.name}
                    </h3>
                  </Link>
                  <p className="text-xs text-[#7E6B6E] font-medium leading-relaxed">
                    {product.tagline}
                  </p>

                  {/* Shade preview swatches */}
                  {product.shades.length > 0 && (
                    <div className="flex items-center gap-1.5 pt-1">
                      {product.shades.map((shade) => (
                        <div
                          key={shade.id}
                          className="h-4 w-4 rounded-full border border-white shadow-xs"
                          style={{ backgroundColor: shade.colorHex }}
                          title={shade.name}
                        />
                      ))}
                      <span className="text-[10px] text-[#7E6B6E] font-semibold ml-1">
                        {product.shades.length} {product.shades.length === 1 ? 'shade' : 'shades'}
                      </span>
                    </div>
                  )}

                  {/* Price & Add Button */}
                  <div className="flex items-center justify-between pt-3 border-t border-[#F3D0D7]/60">
                    <div>
                      <span className="text-[10px] text-[#7E6B6E] block font-medium">Price</span>
                      <span className="font-heading text-2xl font-bold text-[#2D2224]">
                        ₹{product.price}.00
                      </span>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => addToCart(product)}
                      className="flex items-center gap-2 rounded-full bg-[#B76E79] px-5 py-2.5 text-xs font-bold text-white shadow-md hover:bg-[#9E5661] transition-all"
                    >
                      <ShoppingBag className="h-4 w-4" />
                      <span>Add to Cart</span>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
