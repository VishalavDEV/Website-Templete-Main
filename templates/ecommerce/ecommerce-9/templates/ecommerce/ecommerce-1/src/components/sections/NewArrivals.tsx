'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingBag, Star, Sparkles, Heart } from 'lucide-react';
import { PRODUCTS } from '@/data/products';
import { useCart } from '@/context/CartContext';

export const NewArrivals: React.FC = () => {
  const { addToCart } = useCart();
  // Filter new arrivals or top items
  const newArrivalsList = PRODUCTS.filter(
    (p) => p.badge === 'NEW ARRIVAL' || p.badge === 'NEW FORMULA' || p.badge === 'TRENDING' || p.badge === 'BESTSELLER'
  ).slice(0, 4);

  return (
    <section id="new-arrivals" className="w-full bg-[#FFF9F5] px-6 py-14 md:px-12 md:py-20 border-b border-[#F3D0D7]/60">
      <div className="mx-auto max-w-7xl space-y-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#F3D0D7] bg-white px-3.5 py-1 text-xs font-bold uppercase text-[#B76E79]">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Soft Glow Fresh Drop</span>
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl font-extrabold tracking-tight text-[#2D2224]">
              New Arrivals
            </h2>
            <p className="text-[#7E6B6E] text-sm sm:text-base max-w-lg">
              Formulated with cold-pressed botanical oils & tri-peptides for an effortless, cushiony soft finish.
            </p>
          </div>

          <Link href="/shop">
            <button className="rounded-full border border-[#B76E79] px-6 py-2.5 text-xs font-bold text-[#B76E79] hover:bg-[#B76E79] hover:text-white transition-all duration-300">
              View All Arrivals →
            </button>
          </Link>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {newArrivalsList.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-[#F3D0D7] bg-white p-5 shadow-sm hover:shadow-xl hover:border-[#B76E79]/50 transition-all duration-300"
            >
              {/* Top Badge */}
              <div className="flex items-center justify-between z-10">
                <span className="rounded-full bg-[#F7DDE2] px-3 py-1 text-[10px] font-bold tracking-wider text-[#9E5661] uppercase">
                  {product.badge || 'NEW'}
                </span>
                <button className="rounded-full p-2 text-[#7E6B6E] hover:text-[#B76E79] hover:bg-[#F7DDE2]/40 transition-colors">
                  <Heart className="h-4 w-4" />
                </button>
              </div>

              {/* Product Image Link */}
              <Link href={`/product/${product.id}`} className="relative my-4 block h-56 w-full overflow-hidden rounded-2xl bg-[#FFF9F5] p-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-2 group-hover:scale-108 transition-transform duration-500"
                />
              </Link>

              {/* Info Details */}
              <div className="space-y-3">
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

                {/* Price & Add to Cart Button */}
                <div className="flex items-center justify-between pt-2 border-t border-[#F3D0D7]/60">
                  <span className="font-heading text-xl font-bold text-[#2D2224]">
                    ₹{product.price}.00
                  </span>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => addToCart(product)}
                    className="flex items-center gap-1.5 rounded-full bg-[#B76E79] px-4 py-2 text-xs font-bold text-white shadow-sm hover:bg-[#9E5661] transition-all"
                  >
                    <ShoppingBag className="h-3.5 w-3.5" />
                    <span>Add</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
