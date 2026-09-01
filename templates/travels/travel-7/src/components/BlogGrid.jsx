import React from 'react';
import { MessageSquare, Heart, Play, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

export default function BlogGrid() {
  const posts = [
    {
      id: 1,
      title: 'A Complete Beginner Guide to Backpacking Banff',
      date: 'Oct 12, 2026',
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80',
      comments: 14,
      likes: 284
    },
    {
      id: 2,
      title: 'Hiking the Salkantay Trek to Machu Picchu',
      date: 'Sep 28, 2026',
      image: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?auto=format&fit=crop&w=600&q=80',
      comments: 28,
      likes: 512
    },
    {
      id: 3,
      title: 'Wandering Kyoto: Off the Beaten Path Temples',
      date: 'Aug 15, 2026',
      image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=600&q=80',
      comments: 9,
      likes: 198
    }
  ];

  return (
    <section id="blog" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="font-display font-extrabold text-[10px] tracking-widest text-slate-400 uppercase flex items-center justify-center gap-2">
            <span className="w-8 h-[2px] bg-slate-200" />
            Our Favorite Stories
            <span className="w-8 h-[2px] bg-slate-200" />
          </span>
          <h2 className="font-display font-extrabold text-3xl md:text-5xl text-charcoal tracking-tight uppercase">
            Stories From the Trail
          </h2>
        </div>

        {/* Featured Video Story (Large Full-Width layout) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden aspect-[21/9] w-full mb-16 shadow-lg group cursor-pointer"
          onClick={() => alert('Launching video player overlay...')}
        >
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
            alt="Lauterbrunnen Valley Switzerland waterfalls"
            className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700 ease-out"
          />
          {/* Warm Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/10 to-transparent pointer-events-none" />

          {/* Central Play Button with Pulsing Ripple Effect */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative flex items-center justify-center">
              {/* Ripple Ring 1 */}
              <motion.div
                animate={{ scale: [1, 1.8, 1], opacity: [0.35, 0, 0.35] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeOut' }}
                className="absolute w-20 h-20 rounded-full bg-white pointer-events-none"
              />
              {/* Central Button */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-16 h-16 rounded-full bg-accent text-white flex items-center justify-center shadow-lg relative z-10 p-0.5 pl-1.5"
              >
                <Play className="w-7 h-7 fill-current" />
              </motion.div>
            </div>
          </div>

          {/* Featured Description Overlay */}
          <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 text-white space-y-2 max-w-lg select-none">
            <span className="text-[9px] font-extrabold tracking-widest uppercase bg-white/20 px-3 py-1 rounded-full border border-white/15 backdrop-blur-md">
              Featured Video Log
            </span>
            <h3 className="font-display font-extrabold text-lg sm:text-2xl md:text-3xl tracking-tight leading-snug">
              Chasing Waterfalls in Lauterbrunnen Valley, Switzerland
            </h3>
          </div>
        </motion.div>

        {/* Small Blog Posts 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm flex flex-col justify-between group cursor-pointer h-full transition-all"
            >
              {/* Thumbnail */}
              <div className="relative overflow-hidden aspect-[4/3] w-full shrink-0">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Body */}
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center gap-1.5 text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                    <Calendar className="w-3.5 h-3.5 text-accent shrink-0" />
                    <span>{post.date}</span>
                  </div>
                  <h3 className="font-display font-extrabold text-base text-charcoal leading-snug group-hover:text-accent transition-colors">
                    {post.title}
                  </h3>
                </div>

                {/* Meta details */}
                <div className="mt-6 pt-4 border-t border-slate-50 flex items-center justify-between text-xs text-slate-400 font-medium">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <MessageSquare className="w-3.5 h-3.5" />
                      {post.comments}
                    </span>
                    <span className="flex items-center gap-1">
                      <Heart className="w-3.5 h-3.5" />
                      {post.likes}
                    </span>
                  </div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest group-hover:text-accent transition-colors">Read Tales &rarr;</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
