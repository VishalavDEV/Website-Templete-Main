'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight, Truck } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import Image from 'next/image';

export const CartDrawer: React.FC = () => {
  const {
    cartItems,
    isCartOpen,
    closeCart,
    removeFromCart,
    updateQuantity,
    cartTotal,
    freeShippingTarget,
  } = useCart();

  const progress = Math.min(100, (cartTotal / freeShippingTarget) * 100);
  const remainingForFreeShipping = freeShippingTarget - cartTotal;

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
          />

          {/* Slide-over Drawer Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col justify-between bg-[#FAF8F5] p-6 shadow-2xl border-l border-stone-200"
          >
            {/* Drawer Header */}
            <div className="flex items-center justify-between border-b border-stone-200 pb-4">
              <div className="flex items-center gap-2">
                <ShoppingBag className="h-5 w-5 text-[#D98A7F]" />
                <h3 className="font-heading text-2xl font-bold tracking-wide text-stone-900">
                  Your Bag ({cartItems.length})
                </h3>
              </div>
              <button
                onClick={closeCart}
                className="rounded-full p-2 text-stone-500 hover:bg-stone-200/60 hover:text-stone-900 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Free Shipping Progress Indicator */}
            <div className="my-4 rounded-xl bg-white p-4 shadow-sm border border-stone-200/70">
              <div className="flex items-center gap-2 text-xs font-semibold text-stone-800">
                <Truck className="h-4 w-4 text-[#D98A7F]" />
                {remainingForFreeShipping <= 0 ? (
                  <span className="text-[#B86B60]">🎉 You have unlocked FREE Express Shipping!</span>
                ) : (
                  <span>
                    Add <strong className="text-[#D98A7F]">₹{remainingForFreeShipping.toFixed(0)}</strong> more for FREE shipping
                  </span>
                )}
              </div>
              <div className="mt-2.5 h-1.5 w-full rounded-full bg-stone-100 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.8 }}
                  className="h-full bg-[#D98A7F] rounded-full"
                />
              </div>
            </div>

            {/* Items List */}
            <div className="flex-1 overflow-y-auto pr-1 no-scrollbar my-2 space-y-4">
              {cartItems.length === 0 ? (
                <div className="flex h-64 flex-col items-center justify-center text-center">
                  <ShoppingBag className="h-12 w-12 text-stone-300 mb-3" />
                  <p className="font-heading text-lg text-stone-600">Your bag is empty</p>
                  <p className="text-xs text-stone-400 mt-1">Explore our peptide lip treatments to get glowing.</p>
                </div>
              ) : (
                cartItems.map((item) => (
                  <div
                    key={`${item.product.id}-${item.selectedShade.id}`}
                    className="flex items-center gap-4 rounded-xl bg-white p-3 shadow-sm border border-stone-200/60"
                  >
                    <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg bg-stone-50">
                      <Image
                        src={item.product.image}
                        alt={item.product.name}
                        fill
                        className="object-contain p-1"
                      />
                    </div>

                    <div className="flex flex-1 flex-col justify-between">
                      <div className="flex justify-between">
                        <div>
                          <h4 className="font-heading text-base font-semibold text-stone-900">
                            {item.product.name}
                          </h4>
                          <div className="flex items-center gap-1.5 mt-0.5">
                            <span
                              className="h-2.5 w-2.5 rounded-full border border-stone-300"
                              style={{ backgroundColor: item.selectedShade.colorHex }}
                            />
                            <span className="text-xs text-stone-500 font-medium">
                              {item.selectedShade.name}
                            </span>
                          </div>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.product.id, item.selectedShade.id)}
                          className="text-stone-400 hover:text-red-500 transition-colors"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>

                      <div className="mt-3 flex items-center justify-between">
                        <div className="flex items-center rounded-full border border-stone-200 bg-stone-50 px-2 py-0.5 text-xs">
                          <button
                            onClick={() => updateQuantity(item.product.id, item.selectedShade.id, -1)}
                            className="p-1 text-stone-500 hover:text-stone-900"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="px-2 font-semibold text-stone-800">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.selectedShade.id, 1)}
                            className="p-1 text-stone-500 hover:text-stone-900"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                        <span className="font-heading text-base font-bold text-stone-900">
                          ₹{item.product.price * item.quantity}
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer Subtotal & Checkout Button */}
            <div className="border-t border-stone-200 pt-4 space-y-4">
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs text-stone-500">
                  <span>Subtotal</span>
                  <span>₹{cartTotal.toFixed(0)}</span>
                </div>
                <div className="flex justify-between text-xs text-stone-500">
                  <span>Shipping</span>
                  <span>{remainingForFreeShipping <= 0 ? 'FREE' : '₹99'}</span>
                </div>
                <div className="flex justify-between text-base font-bold text-stone-900 pt-2 border-t border-stone-100">
                  <span>Estimated Total</span>
                  <span className="font-heading text-xl">
                    ₹{(cartTotal + (remainingForFreeShipping <= 0 ? 0 : 99)).toFixed(0)}
                  </span>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-2 rounded-full bg-[#1C1917] py-3.5 text-sm font-semibold tracking-wider text-white shadow-lg hover:bg-[#D98A7F] transition-colors"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="h-4 w-4" />
              </motion.button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
