import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Trash2, ShoppingBag, Plus, Minus, ArrowRight, ShieldAlert } from 'lucide-react';

const Cart = () => {
  const { cart, updateCartQuantity, removeFromCart, clearCart } = useCart();
  const navigate = useNavigate();

  const items = cart.items || [];

  // Subtotal and discount math calculations
  const subtotal = items.reduce((acc, item) => {
    return acc + (item.product.price * item.quantity);
  }, 0);

  const discount = items.reduce((acc, item) => {
    const finalPrice = item.product.price * (1 - item.product.discountPercentage / 100);
    return acc + ((item.product.price - finalPrice) * item.quantity);
  }, 0);

  const shipping = subtotal > 50.0 || subtotal === 0 ? 0.0 : 5.99;
  const total = subtotal - discount + shipping;

  if (items.length === 0) {
    return (
      <div className="min-h-screen pt-32 pb-20 flex flex-col items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center bg-white border border-pink-100 rounded-3xl p-8 max-w-sm shadow-premium"
        >
          <span className="text-6xl inline-block animate-float">🛒</span>
          <h2 className="text-xl font-display font-bold text-gray-800 mt-6">Your Cart is Empty</h2>
          <p className="text-xs text-gray-400 mt-2">
            You haven't added any goodies to your shopping list yet. Explore products and send them on a journey!
          </p>
          <button
            onClick={() => navigate('/shop')}
            className="mt-6 w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white font-bold py-3.5 rounded-xl shadow-premium hover:opacity-95 transition-all text-xs"
          >
            Start Shopping
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-28 pb-20 px-6 max-w-7xl mx-auto">
      
      {/* Title Header */}
      <div className="text-left mb-10">
        <span className="text-pink-500 font-display font-semibold text-xs tracking-widest uppercase bg-pink-100/50 px-4 py-2 rounded-full border border-pink-200/50">
          Shopping Basket
        </span>
        <h1 className="text-3xl md:text-5xl font-display font-extrabold text-gray-800 mt-4">
          Your Cart
        </h1>
        <p className="text-gray-500 text-sm md:text-base mt-2">
          Verify your selections before packing them into our custom pink boxes.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left: Items list list */}
        <div className="lg:col-span-2 flex flex-col gap-4">
          <AnimatePresence>
            {items.map((item) => {
              const product = item.product;
              const discountedPrice = product.price * (1 - product.discountPercentage / 100);

              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-3xl p-4 border border-pink-100/80 shadow-premium hover:shadow-md flex flex-col sm:flex-row items-center gap-4 text-left"
                >
                  {/* Product Image */}
                  <div className="w-24 h-24 rounded-2xl overflow-hidden bg-pink-50 flex-shrink-0">
                    <img 
                      src={product.imageUrl} 
                      alt={product.name}
                      className="w-full h-full object-cover" 
                    />
                  </div>

                  {/* Product Info details */}
                  <div className="flex-grow">
                    <span className="text-[10px] text-pink-500 font-bold uppercase tracking-wider block">
                      {product.category?.name}
                    </span>
                    <h3 className="font-display font-bold text-gray-800 text-sm md:text-base mt-1 line-clamp-1">
                      {product.name}
                    </h3>
                    
                    {/* Prices */}
                    <div className="flex items-center gap-2 mt-2">
                      <span className="font-bold text-pink-600">
                        ₹{discountedPrice.toFixed(2)}
                      </span>
                      {product.discountPercentage > 0 && (
                        <span className="text-xs text-gray-400 line-through">
                          ₹{product.price.toFixed(2)}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Quantity controls */}
                  <div className="flex items-center gap-4 flex-shrink-0">
                    
                    <div className="flex items-center bg-pink-50 rounded-xl border border-pink-100 shadow-inner">
                      <button
                        onClick={() => updateCartQuantity(product.id, item.quantity - 1)}
                        className="px-2.5 py-1 text-gray-500 font-bold hover:bg-pink-100 rounded-l-xl transition-all"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="w-8 text-center text-xs font-bold text-gray-700">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateCartQuantity(product.id, item.quantity + 1)}
                        className="px-2.5 py-1 text-gray-500 font-bold hover:bg-pink-100 rounded-r-xl transition-all"
                      >
                        <Plus size={12} />
                      </button>
                    </div>

                    {/* Remove button */}
                    <button
                      onClick={() => removeFromCart(product.id)}
                      className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all"
                    >
                      <Trash2 size={16} />
                    </button>

                  </div>

                </motion.div>
              );
            })}
          </AnimatePresence>

          {/* Clear Cart link */}
          <div className="text-left mt-2">
            <button
              onClick={clearCart}
              className="text-xs text-gray-400 hover:text-red-500 font-semibold"
            >
              Clear all items
            </button>
          </div>
        </div>

        {/* Right: Pricing calculation card */}
        <div className="lg:col-span-1">
          <div className="glass-card rounded-[32px] border border-pink-100 p-6 md:p-8 shadow-premium text-left">
            <h3 className="font-display font-bold text-gray-800 text-lg mb-6 border-b border-pink-100/50 pb-4">
              Order Summary
            </h3>

            {/* Calculations */}
            <div className="space-y-4 text-sm text-gray-600 border-b border-pink-100/50 pb-6 mb-6">
              
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-semibold text-gray-800">₹{subtotal.toFixed(2)}</span>
              </div>
              
              <div className="flex justify-between text-green-600">
                <span>Discounts</span>
                <span className="font-semibold">-₹{discount.toFixed(2)}</span>
              </div>

              <div className="flex justify-between">
                <span>Estimated Shipping</span>
                <span className="font-semibold text-gray-800">
                  {shipping === 0 ? 'FREE' : `₹${shipping.toFixed(2)}`}
                </span>
              </div>

              {shipping > 0 && (
                <div className="bg-pink-50 p-3 rounded-2xl border border-pink-100 flex items-start gap-2 text-[11px] text-pink-700">
                  <ShieldAlert size={14} className="shrink-0 mt-0.5" />
                  <span>Add ₹{(2000 - (subtotal - discount)).toFixed(2)} more for FREE SHIPPING!</span>
                </div>
              )}

            </div>

            {/* Grand Total */}
            <div className="flex justify-between text-gray-800 font-display font-extrabold text-xl mb-8">
              <span>Total</span>
              <span className="text-pink-600">₹{total.toFixed(2)}</span>
            </div>

            {/* Actions */}
            <button
              onClick={() => navigate('/checkout')}
              className="w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white font-bold py-4 rounded-2xl shadow-premium hover:shadow-lg flex items-center justify-center gap-2 group transition-all"
            >
              <span>Proceed to Checkout</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <Link 
              to="/shop" 
              className="block text-center text-xs text-pink-500 font-bold mt-4 hover:underline"
            >
              Continue Shopping
            </Link>

          </div>
        </div>

      </div>

    </div>
  );
};

export default Cart;
