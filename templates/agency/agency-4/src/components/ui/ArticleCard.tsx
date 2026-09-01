import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock } from 'lucide-react';
import type { Insight } from '../../types';

interface ArticleCardProps {
  article: Insight;
  index?: number;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ article, index = 0 }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.25, 1, 0.5, 1] }}
      className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-[#EAE6DF] shadow-sm hover:shadow-xl transition-all duration-300"
    >
      <Link to={`/insights/${article.slug}`} className="block overflow-hidden aspect-[16/10] relative bg-[#EAE6DF]">
        <motion.img
          initial={{ scale: 1.08 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: [0.25, 1, 0.5, 1] }}
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-[#D96B43] text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
          {article.category}
        </div>
      </Link>

      <div className="p-6 sm:p-8 flex flex-col flex-1 justify-between">
        <div>
          <div className="flex items-center text-xs text-[#6B6863] space-x-3 mb-3 font-medium">
            <span>{article.date}</span>
            <span>•</span>
            <span className="flex items-center">
              <Clock className="w-3 h-3 mr-1" />
              {article.readTime}
            </span>
          </div>

          <Link to={`/insights/${article.slug}`}>
            <h3 className="text-xl sm:text-2xl font-bold font-display text-[#1A1918] group-hover:text-[#D96B43] transition-colors duration-300 leading-snug mb-3">
              {article.title}
            </h3>
          </Link>

          <p className="text-sm text-[#6B6863] leading-relaxed line-clamp-2 mb-6">
            {article.summary}
          </p>
        </div>

        <div className="pt-4 border-t border-[#EAE6DF] flex items-center justify-between mt-auto">
          <div className="flex items-center space-x-3">
            <img
              src={article.author.avatar}
              alt={article.author.name}
              className="w-8 h-8 rounded-full object-cover border border-[#EAE6DF]"
            />
            <div>
              <p className="text-xs font-semibold text-[#1A1918]">{article.author.name}</p>
              <p className="text-[10px] text-[#6B6863]">{article.author.role}</p>
            </div>
          </div>

          <Link
            to={`/insights/${article.slug}`}
            className="inline-flex items-center text-xs font-semibold text-[#D96B43] group-hover:translate-x-1 transition-transform duration-300"
          >
            <span>Read Article</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
};
