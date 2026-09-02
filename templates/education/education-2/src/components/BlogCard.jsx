import React from 'react';
import { motion } from 'framer-motion';
import { Clock, ArrowUpRight, Calendar } from 'lucide-react';

export default function BlogCard({ blog, onClick }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      onClick={() => onClick && onClick(blog)}
      className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between cursor-pointer group"
    >
      <div>
        <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
          <img
            src={blog.thumbnail}
            alt={blog.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
          />
          <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold bg-white/90 backdrop-blur-md text-slate-800 shadow-sm">
            {blog.category}
          </span>
        </div>

        <div className="p-6">
          <div className="flex items-center gap-4 text-xs text-slate-400 mb-3 font-medium">
            <div className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              <span>{blog.publishedAt}</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              <span>{blog.readTime}</span>
            </div>
          </div>

          <h3 className="font-extrabold text-slate-900 text-lg mb-2 group-hover:text-primary-600 transition-colors leading-snug line-clamp-2">
            {blog.title}
          </h3>

          <p className="text-slate-500 text-xs line-clamp-3 leading-relaxed mb-4">
            {blog.excerpt}
          </p>
        </div>
      </div>

      <div className="px-6 pb-6 pt-0 flex items-center justify-between border-t border-slate-50 mt-2">
        <div className="flex items-center gap-2 pt-3">
          <img
            src={blog.author.avatar}
            alt={blog.author.name}
            className="w-7 h-7 rounded-full object-cover border border-slate-200"
          />
          <span className="text-xs font-semibold text-slate-700">{blog.author.name}</span>
        </div>

        <span className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-primary-600 group-hover:text-white flex items-center justify-center transition-colors text-slate-600">
          <ArrowUpRight className="w-4 h-4" />
        </span>
      </div>
    </motion.article>
  );
}
