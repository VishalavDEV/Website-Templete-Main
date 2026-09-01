'use client';

import React, { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Star,
  ShoppingBag,
  Heart,
  Sparkles,
  CheckCircle2,
  ShieldCheck,
  Truck,
  ArrowLeft,
  Share2,
  Minus,
  Plus,
  MessageSquare,
  ThumbsUp,
} from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { PRODUCTS } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { ShadeOption } from '@/types';

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const productId = params?.id as string;

  const product = PRODUCTS.find((p) => p.id === productId) || PRODUCTS[0];
  const { addToCart } = useCart();
  const [reviewSubmitted, setReviewSubmitted] = useState(false);

  const [selectedShade, setSelectedShade] = useState<ShadeOption>(
    product.shades[0] || {
      id: 'default',
      name: 'Default',
      colorHex: '#B76E79',
      description: 'Natural Glow',
    }
  );
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'benefits' | 'ingredients' | 'reviews'>('benefits');

  // Interactive review submission state
  const [reviewsList, setReviewsList] = useState([
    {
      id: 'rev-1',
      author: 'Camilla V.',
      rating: 5,
      date: '2 days ago',
      title: 'Obsessed with the cushion feel!',
      comment:
        'This product completely saved my chapped lips. It leaves the most stunning soft rosy glow without any sticky feel.',
      likes: 12,
    },
    {
      id: 'rev-2',
      author: 'Jessica M.',
      rating: 5,
      date: '1 week ago',
      title: 'Holy Grail beauty staple',
      comment:
        'Soft Glow standard is unbeatable. The aroma is subtle, natural, and super luxurious. Reordering 2 more!',
      likes: 8,
    },
  ]);

  const [newReviewAuthor, setNewReviewAuthor] = useState('');
  const [newReviewComment, setNewReviewComment] = useState('');
  const [newReviewRating, setNewReviewRating] = useState(5);
  const [showReviewForm, setShowReviewForm] = useState(false);

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReviewAuthor || !newReviewComment) return;

    const newEntry = {
      id: `rev-${Date.now()}`,
      author: newReviewAuthor,
      rating: newReviewRating,
      date: 'Just now',
      title: 'Verified Soft Glow Review',
      comment: newReviewComment,
      likes: 0,
    };

    setReviewsList([newEntry, ...reviewsList]);
    setNewReviewAuthor('');
    setNewReviewComment('');
    setShowReviewForm(false);
    setReviewSubmitted(true);
  };

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product, selectedShade);
    }
  };

  return (
    <main className="min-h-screen bg-[#FFF9F5] text-[#2D2224]">
      <Navbar />

      {/* Breadcrumb Navigation */}
      <div className="mx-auto max-w-7xl px-6 py-6 md:px-12">
        <div className="flex items-center gap-2 text-xs text-[#7E6B6E]">
          <Link href="/" className="hover:text-[#B76E79] flex items-center gap-1">
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Home</span>
          </Link>
          <span>/</span>
          <Link href="/shop" className="hover:text-[#B76E79]">Shop</Link>
          <span>/</span>
          <span className="text-[#2D2224] font-bold">{product.name}</span>
        </div>
      </div>

      {/* Main Product Showcase Grid */}
      <section className="mx-auto max-w-7xl px-6 md:px-12 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Product Images Gallery */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative h-[420px] sm:h-[500px] w-full overflow-hidden rounded-3xl border-2 border-white bg-gradient-to-b from-white via-[#FFF9F5] to-[#F7DDE2]/50 shadow-xl flex items-center justify-center p-8 group">
              <span className="absolute top-5 left-5 rounded-full bg-[#B76E79] px-3.5 py-1 text-[10px] font-bold text-white uppercase tracking-wider z-10">
                {product.badge || 'SOFT GLOW'}
              </span>

              <motion.div
                key={product.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="relative h-full w-full flex items-center justify-center"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  priority
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-500 drop-shadow-2xl"
                />
              </motion.div>
            </div>

            {/* Thumbnail selector gallery */}
            <div className="grid grid-cols-3 gap-3">
              {[product.image, '/templates/ecommerce/ecommerce-1/images/silk-texture.png', '/templates/ecommerce/ecommerce-1/images/polaroid-studio.png'].map((imgSrc, i) => (
                <div
                  key={i}
                  className="relative h-24 rounded-2xl border border-[#F3D0D7] bg-white p-2 cursor-pointer hover:border-[#B76E79] transition-all overflow-hidden"
                >
                  <Image src={imgSrc} alt="Preview" fill className="object-cover rounded-xl" />
                </div>
              ))}
            </div>
          </div>

          {/* Right: Product Details & Purchase Form */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-[#B76E79] uppercase tracking-widest">
                  {product.category}
                </span>
                <div className="flex items-center gap-1 text-amber-400 text-xs font-bold bg-white px-2.5 py-1 rounded-full border border-[#F3D0D7]">
                  <Star className="h-3.5 w-3.5 fill-current" />
                  <span>{product.rating} / 5.0</span>
                  <span className="text-[#7E6B6E] font-normal">({product.reviewsCount} reviews)</span>
                </div>
              </div>

              <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-[#2D2224]">
                {product.name}
              </h1>

              <p className="text-[#7E6B6E] text-base font-body">
                {product.tagline}
              </p>
            </div>

            {/* Price Banner */}
            <div className="flex items-baseline gap-3 border-y border-[#F3D0D7]/60 py-4">
              <span className="font-heading text-3xl sm:text-4xl font-extrabold text-[#2D2224]">
                ₹{product.price}.00
              </span>
              <span className="text-xs text-[#9E5661] font-semibold bg-[#F7DDE2] px-3 py-1 rounded-full">
                Taxes Included • Free Shipping Available
              </span>
            </div>

            {/* Description */}
            <p className="text-sm text-[#7E6B6E] leading-relaxed">
              {product.description}
            </p>

            {/* Shade Swatch Selector */}
            {product.shades.length > 0 && (
              <div className="space-y-3 pt-2">
                <div className="flex items-center justify-between text-xs font-bold">
                  <span className="text-[#2D2224]">Select Shade:</span>
                  <span className="text-[#B76E79]">{selectedShade.name} — {selectedShade.description}</span>
                </div>

                <div className="flex items-center gap-3">
                  {product.shades.map((shade) => {
                    const isSelected = selectedShade.id === shade.id;
                    return (
                      <button
                        key={shade.id}
                        onClick={() => setSelectedShade(shade)}
                        className={`flex items-center gap-2.5 rounded-full px-4 py-2 text-xs font-semibold transition-all ${
                          isSelected
                            ? 'bg-[#B76E79] text-white shadow-md ring-2 ring-[#F7DDE2]'
                            : 'bg-white text-[#2D2224] border border-[#F3D0D7] hover:border-[#B76E79]'
                        }`}
                      >
                        <span
                          className="h-3.5 w-3.5 rounded-full border border-white shadow-xs"
                          style={{ backgroundColor: shade.colorHex }}
                        />
                        <span>{shade.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Quantity Selector & Pill Add to Cart Button */}
            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center rounded-full border border-[#F3D0D7] bg-white p-1 shadow-xs">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 text-[#7E6B6E] hover:text-[#B76E79]"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="w-8 text-center font-heading text-base font-bold text-[#2D2224]">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 text-[#7E6B6E] hover:text-[#B76E79]"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleAddToCart}
                  className="flex-1 flex items-center justify-center gap-3 rounded-full bg-[#B76E79] py-4 px-8 text-sm font-bold text-white shadow-lg hover:bg-[#9E5661] transition-all"
                >
                  <ShoppingBag className="h-4 w-4" />
                  <span>Add to Cart — ₹{product.price * quantity}.00</span>
                </motion.button>
              </div>

              {/* Security Badges */}
              <div className="grid grid-cols-2 gap-3 pt-2 text-xs text-[#7E6B6E]">
                <div className="flex items-center gap-2 rounded-xl bg-white p-3 border border-[#F3D0D7]">
                  <Truck className="h-4 w-4 text-[#B76E79]" />
                  <span>Ships in 24 Hours</span>
                </div>
                <div className="flex items-center gap-2 rounded-xl bg-white p-3 border border-[#F3D0D7]">
                  <ShieldCheck className="h-4 w-4 text-[#B76E79]" />
                  <span>Biocompatible Guarantee</span>
                </div>
              </div>
            </div>

            {/* Tabbed Information: Benefits / Ingredients / Reviews */}
            <div className="pt-8 border-t border-[#F3D0D7]/60 space-y-6">
              <div className="flex items-center gap-6 border-b border-[#F3D0D7]">
                {(['benefits', 'ingredients', 'reviews'] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`pb-3 text-sm font-bold capitalize transition-colors relative ${
                      activeTab === tab ? 'text-[#B76E79]' : 'text-[#7E6B6E] hover:text-[#2D2224]'
                    }`}
                  >
                    {tab}
                    {activeTab === tab && (
                      <motion.div
                        layoutId="activeTabUnderline"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#B76E79]"
                      />
                    )}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              {activeTab === 'benefits' && (
                <div className="space-y-3 text-xs text-[#7E6B6E]">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-[#B76E79] flex-shrink-0 mt-0.5" />
                    <span><strong>24-Hour Cushion Hydration:</strong> Locks moisture deep in lip tissue to eliminate flakes.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-[#B76E79] flex-shrink-0 mt-0.5" />
                    <span><strong>Biocompatible Tri-Peptides:</strong> Enhances natural lip volume and smoothes fine lip lines.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-[#B76E79] flex-shrink-0 mt-0.5" />
                    <span><strong>Non-Tacky Glass Finish:</strong> Provides plush mirror shine without feeling heavy or sticky.</span>
                  </div>
                </div>
              )}

              {activeTab === 'ingredients' && (
                <div className="space-y-3">
                  <span className="text-xs font-bold text-[#2D2224] block">Full Formula Breakdown:</span>
                  <div className="flex flex-wrap gap-2">
                    {product.ingredients.map((ing, i) => (
                      <span key={i} className="rounded-full bg-[#F7DDE2] px-3.5 py-1.5 text-xs font-semibold text-[#9E5661]">
                        🌿 {ing}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'reviews' && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="font-heading text-lg font-bold text-[#2D2224]">Customer Feedback</span>
                    <button
                      onClick={() => setShowReviewForm(!showReviewForm)}
                      className="rounded-full bg-[#F7DDE2] px-4 py-1.5 text-xs font-bold text-[#9E5661] hover:bg-[#B76E79] hover:text-white transition-all"
                    >
                      + Write Review
                    </button>
                  </div>

                  {/* Add Review Form */}
                  {showReviewForm && (
                    <form onSubmit={handleAddReview} className="rounded-2xl bg-white p-5 border border-[#F3D0D7] space-y-4">
                      <h4 className="text-xs font-bold text-[#2D2224] uppercase">Write Your Soft Glow Review</h4>

                      <div className="grid grid-cols-2 gap-3">
                        <input
                          type="text"
                          required
                          placeholder="Your Name"
                          value={newReviewAuthor}
                          onChange={(e) => setNewReviewAuthor(e.target.value)}
                          className="rounded-xl border border-[#F3D0D7] p-2.5 text-xs outline-none focus:border-[#B76E79]"
                        />
                        <select
                          value={newReviewRating}
                          onChange={(e) => setNewReviewRating(Number(e.target.value))}
                          className="rounded-xl border border-[#F3D0D7] p-2.5 text-xs outline-none focus:border-[#B76E79]"
                        >
                          <option value={5}>5 Stars ★★★★★</option>
                          <option value={4}>4 Stars ★★★★☆</option>
                          <option value={3}>3 Stars ★★★☆☆</option>
                        </select>
                      </div>

                      <textarea
                        required
                        placeholder="Share your experience with this Soft Glow formula..."
                        value={newReviewComment}
                        onChange={(e) => setNewReviewComment(e.target.value)}
                        className="w-full rounded-xl border border-[#F3D0D7] p-2.5 text-xs outline-none focus:border-[#B76E79] h-20"
                      />

                      <button
                        type="submit"
                        className="rounded-full bg-[#B76E79] px-6 py-2 text-xs font-bold text-white hover:bg-[#9E5661]"
                      >
                        Submit Review
                      </button>
                    </form>
                  )}

                  {/* Reviews List */}
                  <div className="space-y-4">
                    {reviewsList.map((rev) => (
                      <div key={rev.id} className="rounded-2xl bg-white p-4 border border-[#F3D0D7]/60 space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="font-heading text-sm font-bold text-[#2D2224]">{rev.author}</span>
                          <span className="text-[10px] text-[#7E6B6E]">{rev.date}</span>
                        </div>
                        <div className="flex text-amber-400">
                          {[...Array(rev.rating)].map((_, i) => (
                            <Star key={i} className="h-3 w-3 fill-current" />
                          ))}
                        </div>
                        <p className="text-xs text-[#7E6B6E]">{rev.comment}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

