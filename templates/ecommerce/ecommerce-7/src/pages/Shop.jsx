import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import api from '../services/api';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { Heart, ShoppingCart, Star, Filter, ArrowUpDown, RefreshCw, Eye } from 'lucide-react';

const Shop = () => {
  const { addToCart, addToWishlist, removeFromWishlist, isInWishlist } = useCart();
  const { user } = useAuth();
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  // Search parameters from URL
  const categoryParam = searchParams.get('category') || 'All';
  const queryParam = searchParams.get('query') || '';
  const sortByParam = searchParams.get('sortBy') || 'id';

  // React states
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  
  // Local state copy of query for input mapping
  const [searchInput, setSearchInput] = useState(queryParam);

  // Fetch categories on mount
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await api.get('/categories');
        setCategories([{ id: 0, name: 'All' }, ...response.data]);
      } catch (err) {
        console.error('Failed to load categories', err);
      }
    };
    fetchCategories();
  }, []);

  // Fetch products when params change
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError('');
      try {
        const response = await api.get('/products', {
          params: {
            category: categoryParam === 'All' ? '' : categoryParam,
            query: queryParam,
            sortBy: sortByParam,
          }
        });
        setProducts(response.data);
      } catch (err) {
        setError('Failed to fetch products. Is the backend running?');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [categoryParam, queryParam, sortByParam]);

  const updateParam = (key, value) => {
    const params = new URLSearchParams(searchParams);
    if (value && value !== 'All') {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    setSearchParams(params);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    updateParam('query', searchInput);
  };

  const handleWishlistToggle = async (product) => {
    try {
      if (isInWishlist(product.id)) {
        await removeFromWishlist(product.id);
      } else {
        await addToWishlist(product.id);
      }
    } catch (err) {
      alert(err.message || 'Please log in first');
    }
  };

  const handleAddToCart = async (product) => {
    try {
      await addToCart(product.id, 1);
    } catch (err) {
      alert(err.message || 'Please log in first');
    }
  };

  return (
    <div className="min-h-screen pt-28 pb-20 px-6 max-w-7xl mx-auto">
      
      {/* Title Header */}
      <div className="text-left mb-10">
        <span className="text-pink-500 font-display font-semibold text-xs tracking-widest uppercase bg-pink-100/50 px-4 py-2 rounded-full border border-pink-200/50">
          Aesthetic Closet
        </span>
        <h1 className="text-3xl md:text-5xl font-display font-extrabold text-gray-800 mt-4">
          Things You'll Love
        </h1>
        <p className="text-gray-500 text-sm md:text-base mt-2 max-w-lg">
          Browse through our beautifully packed goodies. Add items to your cart to launch them on their delivery path.
        </p>
      </div>

      {/* Filter and Search controls bar */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8 border-b border-pink-100/50 pb-6">
        
        {/* Category Tab Lists */}
        <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto py-1 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => updateParam('category', cat.name)}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                categoryParam === cat.name
                  ? 'bg-pink-500 text-white shadow-premium'
                  : 'bg-white text-gray-600 hover:bg-pink-50 border border-pink-100/60'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Search Input & Sort Dropdowns */}
        <div className="flex items-center gap-3 w-full md:w-auto">
          
          {/* Search bar inside shop */}
          <form onSubmit={handleSearchSubmit} className="flex-grow md:w-64 flex items-center bg-white border border-pink-100 rounded-2xl overflow-hidden pr-3 shadow-sm">
            <input 
              type="text" 
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="Search catalog..." 
              className="px-4 py-2.5 bg-transparent text-xs w-full outline-none text-gray-800"
            />
            <button type="submit" className="text-pink-500">🔍</button>
          </form>

          {/* Sort Dropdown */}
          <div className="flex items-center bg-white border border-pink-100 rounded-2xl px-3 py-2 shadow-sm shrink-0">
            <ArrowUpDown size={14} className="text-gray-400 mr-2" />
            <select
              value={sortByParam}
              onChange={(e) => updateParam('sortBy', e.target.value)}
              className="text-xs font-semibold text-gray-600 bg-transparent outline-none cursor-pointer"
            >
              <option value="id">Default</option>
              <option value="price_asc">Price: Low to High</option>
              <option value="price_desc">Price: High to Low</option>
              <option value="rating_desc">Top Rated</option>
              <option value="discount_desc">Best Discount</option>
            </select>
          </div>

        </div>

      </div>

      {/* Main product display area */}
      {error && (
        <div className="text-center py-20 bg-white rounded-3xl border border-pink-100 shadow-premium">
          <span className="text-4xl">❌</span>
          <p className="text-gray-600 font-medium mt-4">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="mt-4 bg-pink-100 text-pink-600 px-6 py-2 rounded-full text-xs font-bold"
          >
            Retry Connection
          </button>
        </div>
      )}

      {/* Skeleton loading screen */}
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div key={i} className="bg-white rounded-3xl p-4 border border-pink-100 shadow-premium animate-pulse h-[340px] flex flex-col justify-between">
              <div className="bg-gray-100 rounded-2xl h-44 w-full" />
              <div className="space-y-2 mt-4">
                <div className="bg-gray-100 h-4 rounded w-2/3" />
                <div className="bg-gray-100 h-3 rounded w-1/2" />
              </div>
              <div className="flex justify-between items-center mt-6">
                <div className="bg-gray-100 h-6 rounded w-1/3" />
                <div className="bg-gray-100 h-8 rounded-xl w-10" />
              </div>
            </div>
          ))}
        </div>
      ) : products.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-3xl border border-pink-100 shadow-premium">
          <span className="text-5xl">🛍️</span>
          <p className="text-gray-500 font-medium mt-4">No products found matching your criteria</p>
          <button 
            onClick={() => setSearchParams({})} 
            className="mt-4 bg-pink-500 text-white px-6 py-2.5 rounded-full text-xs font-bold shadow-premium"
          >
            Clear All Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <AnimatePresence>
            {products.map((product) => {
              const discountedPrice = product.price * (1 - product.discountPercentage / 100);
              const favorite = isInWishlist(product.id);

              return (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="group bg-white rounded-3xl p-4 border border-pink-100 hover:border-pink-300 shadow-premium hover:shadow-xl relative flex flex-col justify-between h-[360px] cursor-pointer"
                  onClick={() => navigate(`/product/${product.id}`)}
                >
                  {/* Category and Heart toggle overlay */}
                  <div className="absolute top-6 left-6 z-10 bg-pink-100/80 backdrop-blur-sm px-2.5 py-1 rounded-full text-[10px] font-bold text-pink-700 tracking-wider">
                    {product.category?.name}
                  </div>
                  
                  {/* Discount percentage tag */}
                  {product.discountPercentage > 0 && (
                    <div className="absolute top-6 right-16 z-10 bg-gradient-to-tr from-pink-500 to-rose-500 text-white text-[9px] font-bold px-2 py-0.5 rounded-md shadow-premium">
                      -{Math.round(product.discountPercentage)}%
                    </div>
                  )}

                  {/* Wishlist toggle icon */}
                  {(!user || user.role === 'CUSTOMER') && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleWishlistToggle(product);
                      }}
                      className="absolute top-5 right-5 z-20 w-8 h-8 rounded-full bg-white/90 backdrop-blur-xs flex items-center justify-center shadow-md border border-pink-100 hover:scale-110 active:scale-95 transition-all"
                    >
                      <Heart 
                        size={14} 
                        className={`transition-colors ${
                          favorite ? 'text-pink-500 fill-pink-500' : 'text-gray-400 group-hover:text-pink-400'
                        }`} 
                      />
                    </button>
                  )}

                  {/* Image container */}
                  <div className="h-44 rounded-2xl overflow-hidden shadow-inner relative bg-pink-50 flex items-center justify-center">
                    <img 
                      src={product.imageUrl} 
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500" 
                      loading="lazy"
                    />
                  </div>

                  {/* Info text details */}
                  <div className="mt-4 text-left flex-grow flex flex-col justify-between">
                    <div>
                      <h3 className="font-display font-bold text-gray-800 text-sm truncate leading-tight group-hover:text-pink-600 transition-colors">
                        {product.name}
                      </h3>
                      <div className="flex items-center gap-1 mt-1 text-[11px] text-gray-400">
                        <Star size={10} className="text-yellow-400 fill-yellow-400" />
                        <span className="font-bold text-gray-700">{product.rating}</span>
                        <span>({product.reviewCount} reviews)</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-4">
                      {/* Price layouts */}
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

                      {/* Floating Add to Cart action */}
                      {(!user || user.role === 'CUSTOMER') && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleAddToCart(product);
                          }}
                          className="bg-pink-100 group-hover:bg-pink-500 text-pink-600 group-hover:text-white p-2.5 rounded-xl border border-pink-200/50 group-hover:border-transparent transition-all shadow-sm"
                        >
                          <ShoppingCart size={15} />
                        </button>
                      )}



                    </div>

                  </div>

                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      )}

    </div>
  );
};

export default Shop;
