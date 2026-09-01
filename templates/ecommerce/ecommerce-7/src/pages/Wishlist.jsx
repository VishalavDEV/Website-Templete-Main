import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, ShoppingCart, Trash2, ArrowRight } from 'lucide-react';

const Wishlist = () => {
  const { wishlist, removeFromWishlist, addToCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  const products = wishlist.products || [];

  const handleAddToCart = async (product) => {
    try {
      await addToCart(product.id, 1);
    } catch (err) {
      alert(err.message || 'Please log in first');
    }
  };

  if (products.length === 0) {
    return (
      <div className="min-h-screen pt-32 pb-20 flex flex-col items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center bg-white border border-pink-100 rounded-3xl p-8 max-w-sm shadow-premium"
        >
          <span className="text-6xl inline-block animate-float">🌸</span>
          <h2 className="text-xl font-display font-bold text-gray-800 mt-6">Your Wishlist is Empty</h2>
          <p className="text-xs text-gray-400 mt-2">
            No items have been marked with love yet. Explore products and tap the heart icon to save them here!
          </p>
          <button
            onClick={() => navigate('/shop')}
            className="mt-6 w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white font-bold py-3.5 rounded-xl shadow-premium hover:opacity-95 transition-all text-xs"
          >
            Explore Catalog
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
          Saved Items
        </span>
        <h1 className="text-3xl md:text-5xl font-display font-extrabold text-gray-800 mt-4">
          Saved with Love
        </h1>
        <p className="text-gray-500 text-sm md:text-base mt-2">
          Your personal wishlist of premium items waiting for their departure coordinates.
        </p>
      </div>

      {/* Wishlist grid list */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <AnimatePresence>
          {products.map((product) => {
            const discountedPrice = product.price * (1 - product.discountPercentage / 100);

            return (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="group bg-white rounded-3xl p-4 border border-pink-100 hover:border-pink-300 shadow-premium hover:shadow-xl relative flex flex-col justify-between h-[360px] cursor-pointer"
                onClick={() => navigate(`/product/${product.id}`)}
              >
                
                {/* Delete button from wishlist overlay */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    removeFromWishlist(product.id);
                  }}
                  className="absolute top-5 right-5 z-20 w-8 h-8 rounded-full bg-white/90 backdrop-blur-xs flex items-center justify-center shadow-md border border-pink-100 hover:scale-110 active:scale-95 transition-all text-red-400 hover:text-red-500"
                >
                  <Trash2 size={13} />
                </button>

                {/* Product Image */}
                <div className="h-44 rounded-2xl overflow-hidden shadow-inner relative bg-pink-50 flex items-center justify-center">
                  <img 
                    src={product.imageUrl} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500" 
                  />
                </div>

                {/* Info Details */}
                <div className="mt-4 text-left flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="font-display font-bold text-gray-800 text-sm truncate leading-tight group-hover:text-pink-600 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-[10px] text-pink-500 font-bold uppercase tracking-wider mt-1">
                      {product.category?.name}
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-4">
                    {/* Prices */}
                    <div className="flex items-baseline gap-1">
                      <span className="font-display font-bold text-lg text-pink-600">
                        ₹{discountedPrice.toFixed(2)}
                      </span>
                      {product.discountPercentage > 0 && (
                        <span className="text-[10px] text-gray-400 line-through">
                          ₹{product.price.toFixed(2)}
                        </span>
                      )}
                    </div>

                    {/* Move to Cart CTA */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAddToCart(product);
                      }}
                      className="bg-pink-100 group-hover:bg-pink-500 text-pink-600 group-hover:text-white p-2.5 rounded-xl border border-pink-200/50 group-hover:border-transparent transition-all shadow-sm"
                    >
                      <ShoppingCart size={15} />
                    </button>

                  </div>

                </div>

              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

    </div>
  );
};

export default Wishlist;
