import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import api from '../services/api';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { Star, Heart, ShoppingCart, ArrowLeft, ShieldCheck, HeartIcon, Sparkles } from 'lucide-react';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart, addToWishlist, removeFromWishlist, isInWishlist } = useCart();
  const { user } = useAuth();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  
  // Selection states
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState('Blush Pink');
  const [selectedSize, setSelectedSize] = useState('Standard');
  
  // Flying parcel animation state
  const [isFlying, setIsFlying] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      setError('');
      try {
        const response = await api.get(`/products/${id}`);
        setProduct(response.data);
      } catch (err) {
        setError('Failed to load product details');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen pt-32 pb-20 flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-10 h-10 border-4 border-pink-400 border-t-transparent rounded-full animate-spin" />
          <p className="text-gray-500 font-medium text-xs font-display">Unwrapping product details...</p>
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="min-h-screen pt-32 pb-20 flex flex-col items-center justify-center px-4">
        <span className="text-5xl">🛍️</span>
        <h2 className="text-xl font-display font-bold text-gray-800 mt-4">Product Not Found</h2>
        <p className="text-gray-500 text-sm mt-1">{error || 'This item might have left the universe'}</p>
        <button 
          onClick={() => navigate('/shop')} 
          className="mt-6 bg-pink-500 text-white font-bold px-6 py-2.5 rounded-full shadow-premium text-xs"
        >
          Back to Shop
        </button>
      </div>
    );
  }

  const discountedPrice = product.price * (1 - product.discountPercentage / 100);
  const favorite = isInWishlist(product.id);
  
  const colors = ['Blush Pink', 'Rose Quartz', 'Cotton Candy'];
  const sizes = ['Standard', 'Deluxe', 'Premium'];

  const handleAddToCartAction = async () => {
    try {
      setIsFlying(true);
      await addToCart(product.id, quantity);
      setTimeout(() => setIsFlying(false), 1000);
    } catch (err) {
      setIsFlying(false);
      alert(err.message || 'Please log in first');
    }
  };

  const handleWishlistAction = async () => {
    try {
      if (favorite) {
        await removeFromWishlist(product.id);
      } else {
        await addToWishlist(product.id);
      }
    } catch (err) {
      alert(err.message || 'Please log in first');
    }
  };

  return (
    <div className="min-h-screen pt-28 pb-20 px-6 max-w-7xl mx-auto relative">
      
      {/* Flying confirmation parcel overlay */}
      <AnimatePresence>
        {isFlying && (
          <motion.div
            initial={{ scale: 0.5, x: 200, y: 150, opacity: 0 }}
            animate={{ 
              scale: [0.5, 1.2, 0.4], 
              x: [200, 350, 600], 
              y: [150, -100, -350], 
              opacity: [0, 1, 0.5, 0] 
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
            className="fixed z-50 text-4xl select-none pointer-events-none"
            style={{ top: '40%', left: '30%' }}
          >
            📦
          </motion.div>
        )}
      </AnimatePresence>

      {/* Back button */}
      <button 
        onClick={() => navigate(-1)}
        className="flex items-center gap-1.5 text-gray-500 hover:text-pink-600 font-semibold text-xs mb-8 transition-colors"
      >
        <ArrowLeft size={14} /> Back
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Left Column: Image with zoom and hover effect */}
        <div className="flex flex-col gap-4">
          <div className="glass-card rounded-[32px] border border-pink-100 p-6 overflow-hidden h-[350px] md:h-[450px] flex items-center justify-center relative group">
            
            {/* Zoom container on hover */}
            <motion.img 
              src={product.imageUrl} 
              alt={product.name}
              className="w-full h-full object-cover rounded-2xl transition-transform duration-700 ease-out origin-center cursor-zoom-in"
              whileHover={{ scale: 1.15 }}
            />

            {/* Pink gradient lighting overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-pink-500/5 to-transparent pointer-events-none rounded-[32px]" />

            {/* Discount Stamp overlay */}
            {product.discountPercentage > 0 && (
              <div className="absolute top-6 right-6 bg-gradient-to-tr from-pink-500 to-rose-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-premium flex items-center gap-1">
                <Sparkles size={12} /> Save {Math.round(product.discountPercentage)}%
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Details and actions */}
        <div className="text-left flex flex-col justify-between">
          <div>
            
            {/* Category Breadcrumb */}
            <span className="text-pink-500 font-display font-semibold text-xs tracking-widest uppercase bg-pink-100/50 px-3 py-1 rounded-full border border-pink-200/50">
              {product.category?.name}
            </span>

            {/* Product Title */}
            <h1 className="text-3xl md:text-4xl font-display font-extrabold text-gray-800 mt-4 leading-tight">
              {product.name}
            </h1>

            {/* Star ratings details */}
            <div className="flex items-center gap-1.5 mt-3 text-xs text-gray-400">
              <div className="flex text-yellow-400 fill-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={13} 
                    className={i < Math.floor(product.rating) ? 'fill-yellow-400' : 'text-gray-200'} 
                  />
                ))}
              </div>
              <span className="font-bold text-gray-700 ml-1">{product.rating}</span>
              <span>({product.reviewCount} customer reviews)</span>
            </div>

            {/* Price section */}
            <div className="flex items-baseline gap-3 mt-6 border-b border-pink-100/50 pb-6">
              <span className="font-display font-extrabold text-3xl text-pink-600">
                ₹{discountedPrice.toFixed(2)}
              </span>
              {product.discountPercentage > 0 && (
                <span className="text-sm text-gray-400 line-through">
                  ₹{product.price.toFixed(2)}
                </span>
              )}
            </div>

            {/* Description */}
            <p className="text-sm text-gray-600 mt-6 leading-relaxed">
              {product.description}
            </p>

            {/* Color variants selector */}
            <div className="mt-6 flex flex-col gap-2">
              <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Aesthetic Colors</span>
              <div className="flex gap-2">
                {colors.map((col) => (
                  <button
                    key={col}
                    onClick={() => setSelectedColor(col)}
                    className={`px-3 py-2 rounded-xl text-xs font-semibold border transition-all ${
                      selectedColor === col
                        ? 'bg-pink-500 text-white border-transparent shadow-md'
                        : 'bg-white text-gray-600 border-pink-100 hover:bg-pink-50'
                    }`}
                  >
                    {col}
                  </button>
                ))}
              </div>
            </div>

            {/* Size variants selector */}
            <div className="mt-6 flex flex-col gap-2">
              <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Box Sizes</span>
              <div className="flex gap-2">
                {sizes.map((sz) => (
                  <button
                    key={sz}
                    onClick={() => setSelectedSize(sz)}
                    className={`px-3 py-2 rounded-xl text-xs font-semibold border transition-all ${
                      selectedSize === sz
                        ? 'bg-pink-500 text-white border-transparent shadow-md'
                        : 'bg-white text-gray-600 border-pink-100 hover:bg-pink-50'
                    }`}
                  >
                    {sz}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selector */}
            {(!user || user.role === 'CUSTOMER') && (
              <div className="mt-6 flex flex-col gap-2">
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Quantity</span>
                <div className="flex items-center bg-white border border-pink-100 rounded-xl w-32 shadow-sm">
                  <button 
                    onClick={() => setQuantity(q => Math.max(1, q - 1))}
                    className="px-3 py-1.5 text-gray-500 font-bold hover:bg-pink-50 rounded-l-xl border-r border-pink-100"
                  >
                    -
                  </button>
                  <span className="flex-grow text-center text-sm font-bold text-gray-700">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(q => q + 1)}
                    className="px-3 py-1.5 text-gray-500 font-bold hover:bg-pink-50 rounded-r-xl border-l border-pink-100"
                  >
                    +
                  </button>
                </div>
              </div>
            )}

          </div>

          {/* Action buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            {(!user || user.role === 'CUSTOMER') && (
              <>
                <button
                  onClick={handleAddToCartAction}
                  className="flex-grow bg-gradient-to-r from-pink-500 to-rose-500 text-white font-bold py-4 px-8 rounded-2xl shadow-premium hover:shadow-lg flex items-center justify-center gap-2 group transition-all"
                >
                  <ShoppingCart size={16} /> Add to Cart
                </button>
                <button
                  onClick={handleWishlistAction}
                  className={`px-4 py-4 rounded-2xl border flex items-center justify-center transition-all ${
                    favorite
                      ? 'bg-pink-50 text-pink-600 border-pink-200'
                      : 'bg-white text-gray-400 border-pink-100 hover:text-pink-500 hover:bg-pink-50'
                  }`}
                >
                  <Heart size={20} className={favorite ? 'fill-pink-600' : ''} />
                </button>
              </>
            )}


          </div>

          {/* Premium trust badges */}
          <div className="mt-6 flex items-center gap-2 text-xs text-gray-400 font-semibold">
            <ShieldCheck size={14} className="text-pink-500" />
            <span>Bubble Wrap Protected & Insured Express Delivery</span>
          </div>

        </div>

      </div>

    </div>
  );
};

export default ProductDetails;
