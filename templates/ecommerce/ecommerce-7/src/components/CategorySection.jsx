import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const CategorySection = () => {
  const navigate = useNavigate();

  const categories = [
    {
      name: 'Fashion',
      count: '4 Products',
      bgGradient: 'from-pink-100 to-rose-200/50',
      image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&auto=format&fit=crop&q=60',
      floatingEmoji: '👗'
    },
    {
      name: 'Beauty',
      count: '5 Products',
      bgGradient: 'from-rose-100 to-pink-200/40',
      image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400&auto=format&fit=crop&q=60',
      floatingEmoji: '💄'
    },
    {
      name: 'Electronics',
      count: '2 Products',
      bgGradient: 'from-pink-200/30 to-rose-100',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&auto=format&fit=crop&q=60',
      floatingEmoji: '🎧'
    },
    {
      name: 'Home & Living',
      count: '3 Products',
      bgGradient: 'from-pink-100 to-rose-200/60',
      image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=400&auto=format&fit=crop&q=60',
      floatingEmoji: '☕'
    },
    {
      name: 'Accessories',
      count: '2 Products',
      bgGradient: 'from-rose-100 to-pink-200/50',
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&auto=format&fit=crop&q=60',
      floatingEmoji: '👜'
    },
    {
      name: 'Lifestyle',
      count: '2 Products',
      bgGradient: 'from-pink-200/40 to-rose-200/40',
      image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=400&auto=format&fit=crop&q=60',
      floatingEmoji: '📓'
    }
  ];

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
        <div className="text-left">
          <span className="text-pink-500 font-display font-semibold text-xs tracking-widest uppercase bg-pink-100/50 px-4 py-2 rounded-full border border-pink-200/50">
            Aesthetic Themes
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-800 mt-4">
            Curated Categories
          </h2>
          <p className="text-gray-500 text-sm md:text-base mt-2 max-w-sm">
            Discover catalog items grouped by our beautiful color-coded universes.
          </p>
        </div>
        <button
          onClick={() => navigate('/shop')}
          className="text-pink-500 hover:text-pink-600 font-bold text-sm flex items-center gap-1 group mt-4 md:mt-0"
        >
          View All Products
          <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((cat, idx) => (
          <motion.div
            key={cat.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            onClick={() => navigate(`/shop?category=${cat.name}`)}
            className={`group relative rounded-3xl p-6 overflow-hidden bg-gradient-to-tr ${cat.bgGradient} border border-pink-100 hover:border-pink-300 shadow-premium hover:shadow-xl cursor-pointer transition-all duration-300`}
            whileHover={{ y: -8 }}
          >
            
            {/* Parallax Image container */}
            <div className="h-44 w-full rounded-2xl overflow-hidden shadow-premium relative z-10 mb-4 bg-white/40">
              <img 
                src={cat.image} 
                alt={cat.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-pink-900/10 group-hover:bg-pink-900/0 transition-colors duration-500" />
            </div>

            {/* Emojis floating on Hover */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: idx * 0.2 }}
              className="absolute top-4 right-4 bg-white/80 backdrop-blur-md w-10 h-10 flex items-center justify-center rounded-full text-lg shadow-md border border-white z-20 group-hover:scale-125 transition-transform"
            >
              {cat.floatingEmoji}
            </motion.div>

            {/* Info details */}
            <div className="flex justify-between items-end relative z-10">
              <div className="text-left">
                <h3 className="font-display font-bold text-gray-800 text-xl group-hover:text-pink-600 transition-colors">
                  {cat.name}
                </h3>
                <span className="text-xs text-gray-500 font-semibold tracking-wider block mt-1">
                  {cat.count}
                </span>
              </div>
              
              <div className="bg-white/80 group-hover:bg-pink-500 text-gray-600 group-hover:text-white p-2 rounded-xl border border-pink-100 group-hover:border-transparent transition-all shadow-md">
                <ArrowUpRight size={18} />
              </div>
            </div>

            {/* Decorative soft backdrop elements */}
            <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-pink-300/20 rounded-full blur-xl group-hover:bg-pink-400/35 transition-colors" />

          </motion.div>
        ))}
      </div>

    </section>
  );
};

export default CategorySection;
